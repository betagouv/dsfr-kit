import { readFile } from 'fs/promises';

async function testIndexer() {
    const fileName = '/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/src/dsfr/component/accordion/template/stories/accordion.stories.js';
    const content = await readFile(fileName, 'utf-8');

    const titleMatch = content.match(/title:\s*['"](.+)['"]/);
    const storyExports = [...content.matchAll(/export const (\w+) =/g)];

    console.log("Title match:", titleMatch ? titleMatch[1] : "None");
    console.log("Story exports found:", storyExports.map(m => m[1]));

    if (titleMatch && storyExports.length > 0) {
        const originalTitle = titleMatch[1];
        const newTitle = originalTitle.replace('DSFR/Component/', 'DSFR/');
        const entries = storyExports.map(match => ({
             importPath: fileName,
             exportName: match[1],
             title: newTitle,
             tags: ['autodocs']
        }));
        console.log("Generated Entries:", JSON.stringify(entries, null, 2));
    }
}

testIndexer();
