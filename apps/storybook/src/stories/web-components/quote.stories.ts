import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";

const meta: Meta = {
  title: "Web Components/Quote",
  component: "dsfr-quote",
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    author: { control: "text" },
    source: { control: "text" },
    sourceUrl: { control: "text" },
    imageUrl: { control: "text" },
    imageAlt: { control: "text" },
    details: { control: "object" },
  },
  args: {
    text: "Déployer de nouveaux services publics numériques plus simples, plus faciles d’accès et plus efficaces pour tous les Français. Elle porte aussi l’enjeu de la souveraineté numérique de l’État.",
    author: "Auteur de la citation",
    source: "Ouvrage de référence",
    sourceUrl: "",
    imageUrl: "",
    imageAlt: "",
    details: [],
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const WithDetails: Story = {
  args: {
    author: "Jean Dupont",
    source: "Rapport annuel",
    details: ["Chapitre 3", "Page 42"],
  },
};

export const WithImage: Story = {
  args: {
    imageUrl: "https://www.systeme-de-design.gouv.fr/img/placeholder.1x1.png",
    imageAlt: "Portrait de l'auteur",
  },
};

export const WithLink: Story = {
  args: {
    sourceUrl: "https://www.systeme-de-design.gouv.fr/",
    source: "Système de Design de l'État",
  },
};
