import { promises as fs } from "node:fs";
import path from "node:path";
import { glob } from "glob";

const CWD = process.cwd();
const DSFR_SRC = path.resolve(
  CWD,
  "node_modules/@gouvfr/dsfr/src/dsfr/component",
);
const DEST_DIR = path.resolve(CWD, "src/stories/dsfr");

async function main() {
  const storyFiles = await glob("**/*.stories.js", {
    cwd: DSFR_SRC,
    absolute: true,
  });
  console.log(`Found ${storyFiles.length} stories.`);

  await fs.mkdir(DEST_DIR, { recursive: true });

  // Clean up old .ts wrappers
  const tsFiles = await glob("*.stories.ts", { cwd: DEST_DIR, absolute: true });
  for (const f of tsFiles) {
    await fs.unlink(f);
  }

  for (const storyFile of storyFiles) {
    const content = await fs.readFile(storyFile, "utf-8");

    // Extract title
    const titleMatch = content.match(/title:\s*['"](.+)['"]/);
    if (!titleMatch) continue;
    const newTitle = titleMatch[1].replace("DSFR/Component/", "DSFR/");

    // Extract all exported constants (stories)
    const storyExports = [...content.matchAll(/export const (\w+)\s*=/g)].map(
      (m) => m[1],
    );
    if (storyExports.length === 0) continue;

    const basename = path.basename(storyFile);
    const destFile = path.resolve(DEST_DIR, basename); // .js again

    let importPath = path.relative(path.dirname(destFile), storyFile);
    if (!importPath.startsWith(".")) {
      importPath = `./${importPath}`;
    }

    // Generate Surgical Wrapper Content (JS)
    const namedExports = storyExports.join(", ");

    const wrapperContent = `
/**
 * Auto-generated surgical wrapper for DSFR stories.
 * Source: ${path.relative(CWD, storyFile)}
 */
import OriginalMeta, { ${namedExports} } from '${importPath}';

export { ${namedExports} };

const { id: _id, title: _title, ...meta } = OriginalMeta;

export default {
  ...meta,
  title: '${newTitle}',
};
`;

    await fs.writeFile(destFile, `${wrapperContent.trim()}\n`);
    console.log(`Generated: ${path.relative(CWD, destFile)}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
