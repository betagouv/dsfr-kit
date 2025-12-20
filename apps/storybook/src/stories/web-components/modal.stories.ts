import type { ArgTypes, Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

interface ModalArgs {
  title: string;
  open: boolean;
  size: "sm" | "md" | "lg";
  icon: string;
  top: boolean;
  concealingBackdrop: boolean;
}

const modalArgTypes: ArgTypes<ModalArgs> = {
  title: {
    control: "text",
    description: "Titre de la modale",
  },
  open: {
    control: "boolean",
    description: "État d'ouverture",
  },
  size: {
    control: { type: "select" },
    options: ["sm", "md", "lg"],
    description: "Taille de la modale",
  },
  icon: {
    control: "text",
    description: "Icône du titre",
  },
  top: {
    control: "boolean",
    description: "Positionnement en haut en mobile",
  },
  concealingBackdrop: {
    control: "boolean",
    description: "Fermeture au clic sur le backdrop",
  },
};

const modalArgs: ModalArgs = {
  title: "Titre de la modale",
  open: false,
  size: "md",
  icon: "info-line",
  top: false,
  concealingBackdrop: true,
};

const render = (args: ModalArgs) => html`
  <dsfr-button @click=${() => {
    const modal = document.getElementById("modal-story") as HTMLElement & {
      open: boolean;
    };
    if (modal) modal.open = true;
  }}>
    Ouvrir la modale
  </dsfr-button>
  <dsfr-modal
    id="modal-story"
    .title=${args.title}
    ?open=${args.open}
    .size=${args.size}
    .icon=${args.icon}
    ?top=${args.top}
    ?concealingBackdrop=${args.concealingBackdrop}
    @dsfr-close=${() => {
      const modal = document.getElementById("modal-story") as HTMLElement & {
        open: boolean;
      };
      if (modal) modal.open = false;
    }}
  >
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</p>
    <ul slot="footer" class="fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-lg fr-btns-group--icon-left">
      <li>
        <dsfr-button>Libellé bouton</dsfr-button>
      </li>
      <li>
        <dsfr-button variant="secondary" @click=${() => {
          const modal = document.getElementById(
            "modal-story",
          ) as HTMLElement & { open: boolean };
          if (modal) modal.open = false;
        }}>Annuler</dsfr-button>
      </li>
    </ul>
  </dsfr-modal>
`;

const meta: Meta<ModalArgs> = {
  title: "Web Components/Modal",
  component: "dsfr-modal",
  tags: ["autodocs"],
  argTypes: modalArgTypes,
  args: modalArgs,
  render: (args) => render(args),
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ModalArgs>;

export const ModalStory: Story = {
  name: "ModalStory",
  args: {},
};

export const SizesSmStory: Story = {
  name: "SizesSmStory",
  args: {
    size: "sm",
    title: "Petite modale",
  },
};

export const SizeMdStory: Story = {
  name: "SizeMdStory",
  args: {
    size: "md",
    title: "Modale moyenne",
  },
};

export const SizeLgStory: Story = {
  name: "SizeLgStory",
  args: {
    size: "lg",
    title: "Grande modale",
  },
};

export const FooterStory: Story = {
  name: "FooterStory",
  render: (args) => html`
  <dsfr-button @click=${() => {
    const modal = document.getElementById(
      "modal-footer-story",
    ) as HTMLElement & { open: boolean };
    if (modal) modal.open = true;
  }}>
    Ouvrir la modale
  </dsfr-button>
  <dsfr-modal
    id="modal-footer-story"
    .title=${args.title}
    ?open=${args.open}
    .size=${args.size}
    .icon=${args.icon}
    ?top=${args.top}
    ?concealingBackdrop=${args.concealingBackdrop}
    @dsfr-close=${() => {
      const modal = document.getElementById(
        "modal-footer-story",
      ) as HTMLElement & { open: boolean };
      if (modal) modal.open = false;
    }}
  >
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</p>
    <ul slot="footer" class="fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-lg fr-btns-group--icon-left">
      <li>
        <dsfr-button>Valider</dsfr-button>
      </li>
      <li>
        <dsfr-button variant="secondary" @click=${() => {
          const modal = document.getElementById(
            "modal-footer-story",
          ) as HTMLElement & { open: boolean };
          if (modal) modal.open = false;
        }}>Annuler</dsfr-button>
      </li>
    </ul>
  </dsfr-modal>
`,
  args: {
    title: "Modale avec footer personnalisé",
  },
};
