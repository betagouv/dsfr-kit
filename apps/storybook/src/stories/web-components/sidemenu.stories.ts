import type { ArgTypes, Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";
import { html } from "lit";

interface SidemenuArgs {
  title: string;
  sticky: boolean;
  right: boolean;
}

const sidemenuArgTypes: ArgTypes<SidemenuArgs> = {
  title: {
    control: "text",
    description: "Titre du menu latéral",
  },
  sticky: {
    control: "boolean",
    description: "Si true, le menu suit le scroll",
  },
  right: {
    control: "boolean",
    description:
      "Si true, positionne le menu à droite (uniquement visuel dans cette story)",
  },
};

const sidemenuArgs: SidemenuArgs = {
  title: "Titre de rubrique",
  sticky: false,
  right: false,
};

const meta: Meta<SidemenuArgs> = {
  title: "Web Components/Sidemenu",
  component: "dsfr-sidemenu",
  tags: ["autodocs"],
  argTypes: sidemenuArgTypes,
  args: sidemenuArgs,
};

export default meta;
type Story = StoryObj<SidemenuArgs>;

export const SidemenuStory: Story = {
  name: "SidemenuStory",
  render: (args) => html`
        <div class="fr-grid-row">
            <div class="fr-col-12 fr-col-md-4">
                <dsfr-sidemenu .title=${args.title} .sticky=${args.sticky} .right=${args.right}>
                    <dsfr-sidemenu-link text="Accès direct 1" active></dsfr-sidemenu-link>
                    <dsfr-sidemenu-link text="Accès direct 2" href="#"></dsfr-sidemenu-link>

                    <dsfr-sidemenu-group title="Niveau 1">
                        <dsfr-sidemenu-link text="Niveau 2 - Lien 1" href="#"></dsfr-sidemenu-link>
                        <dsfr-sidemenu-link text="Niveau 2 - Lien 2" href="#"></dsfr-sidemenu-link>

                        <dsfr-sidemenu-group title="Niveau 2 - Groupe">
                            <dsfr-sidemenu-link text="Niveau 3 - Lien 1" href="#"></dsfr-sidemenu-link>
                            <dsfr-sidemenu-link text="Niveau 3 - Lien 2" href="#"></dsfr-sidemenu-link>
                        </dsfr-sidemenu-group>
                    </dsfr-sidemenu-group>

                    <dsfr-sidemenu-link text="Accès direct 3" href="#"></dsfr-sidemenu-link>
                </dsfr-sidemenu>
            </div>
            <div class="fr-col-12 fr-col-md-8">
                <div style="padding: 2rem;">
                    <h1>Contenu Principal</h1>
                    <p>Ceci est un exemple de contenu principal positionné à côté du menu latéral.</p>
                </div>
            </div>
        </div>
    `,
};

export const LinkSidemenuStory: Story = {
  name: "LinkSidemenuStory",
  render: (args) => html`
        <div class="fr-grid-row">
            <div class="fr-col-12 fr-col-md-4">
                <dsfr-sidemenu .title=${args.title}>
                    <dsfr-sidemenu-link text="Accès direct 1" active></dsfr-sidemenu-link>
                    <dsfr-sidemenu-link text="Accès direct 2" href="#"></dsfr-sidemenu-link>
                    <dsfr-sidemenu-link text="Accès direct 3" href="#"></dsfr-sidemenu-link>
                </dsfr-sidemenu>
            </div>
        </div>
    `,
};

export const SubmenuSidemenuStory: Story = {
  name: "SubmenuSidemenuStory",
  render: (args) => html`
        <div class="fr-grid-row">
            <div class="fr-col-12 fr-col-md-4">
                <dsfr-sidemenu .title=${args.title}>
                    <dsfr-sidemenu-group title="Groupe de liens" expanded>
                        <dsfr-sidemenu-link text="Lien 1" href="#"></dsfr-sidemenu-link>
                        <dsfr-sidemenu-link text="Lien 2" href="#" active></dsfr-sidemenu-link>
                    </dsfr-sidemenu-group>
                     <dsfr-sidemenu-group title="Autre groupe">
                        <dsfr-sidemenu-link text="Lien 3" href="#"></dsfr-sidemenu-link>
                        <dsfr-sidemenu-link text="Lien 4" href="#"></dsfr-sidemenu-link>
                    </dsfr-sidemenu-group>
                </dsfr-sidemenu>
            </div>
        </div>
    `,
};

export const StickyStory: Story = {
  name: "StickyStory",
  args: {
    sticky: true,
  },
  render: (args) => html`
        <div class="fr-grid-row">
            <div class="fr-col-12 fr-col-md-4">
                <dsfr-sidemenu .title=${args.title} .sticky=${args.sticky}>
                    <dsfr-sidemenu-link text="Accès direct 1"></dsfr-sidemenu-link>
                    <dsfr-sidemenu-link text="Accès direct 2" href="#"></dsfr-sidemenu-link>
                    <dsfr-sidemenu-link text="Accès direct 3" href="#"></dsfr-sidemenu-link>
                    <dsfr-sidemenu-link text="Accès direct 4" href="#"></dsfr-sidemenu-link>
                     <dsfr-sidemenu-link text="Accès direct 5" href="#"></dsfr-sidemenu-link>
                </dsfr-sidemenu>
            </div>
             <div class="fr-col-12 fr-col-md-8">
                <div style="padding: 2rem; height: 150vh; background: #f0f0f0;">
                    <h1>Contenu Long (Scroll pour tester sticky)</h1>
                    <p>Scrollez vers le bas pour voir le menu rester en place.</p>
                </div>
            </div>
        </div>
    `,
};

export const RightStory: Story = {
  name: "RightStory",
  args: {
    right: true,
  },
  render: (args) => html`
        <div class="fr-grid-row">
            <div class="fr-col-12 fr-col-md-8">
                <div style="padding: 2rem;">
                    <h1>Contenu Principal</h1>
                    <p>Le menu est à droite.</p>
                </div>
            </div>
            <div class="fr-col-12 fr-col-md-4">
                <dsfr-sidemenu .title=${args.title} .right=${args.right}>
                    <dsfr-sidemenu-link text="Accès direct 1" active></dsfr-sidemenu-link>
                    <dsfr-sidemenu-link text="Accès direct 2" href="#"></dsfr-sidemenu-link>
                </dsfr-sidemenu>
            </div>
        </div>
    `,
};
