import type { Meta, StoryObj } from "@storybook/lit-vite";
import { html, nothing } from "lit";
import "@dsfr-kit/lit";

// Helper interface for rendering, mimicking what might pass to a future group component or just for story args
interface CheckboxItem {
  label: string;
  hint?: string;
  checked?: boolean;
  disabled?: boolean;
}

interface CheckboxGroupArgs {
  legend: string;
  hintGroup: string;
  status: "default" | "error" | "valid";
  message: string;
  inline: boolean;
  size: "md" | "sm";
}

const renderGroup = (args: CheckboxGroupArgs, items: CheckboxItem[]) => {
  const statusClass =
    args.status !== "default" ? `fr-fieldset--${args.status}` : "";
  const inlineClass = args.inline ? "fr-fieldset--inline" : "";

  return html`
    <fieldset class="fr-fieldset ${statusClass} ${inlineClass}" aria-labelledby="checkboxes-legend ${args.status !== "default" ? "checkboxes-messages" : ""}">
      <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="checkboxes-legend">
        ${args.legend}
        ${args.hintGroup ? html`<span class="fr-hint-text">${args.hintGroup}</span>` : nothing}
      </legend>
      <div class="fr-fieldset__element">
        ${items.map(
          (item, _index) => html`
          <dsfr-checkbox
            .label=${item.label}
            .hint=${item.hint}
            .size=${args.size}
            ?checked=${item.checked}
            ?disabled=${item.disabled}
            name="checkboxes-group"
            value=${_index}
          ></dsfr-checkbox>
        `,
        )}
      </div>
      ${
        args.status !== "default" && args.message
          ? html`
        <div class="fr-messages-group" id="checkboxes-messages" aria-live="polite">
          <p class="fr-message fr-message--${args.status}">${args.message}</p>
        </div>
      `
          : nothing
      }
    </fieldset>
  `;
};

const defaultItems: CheckboxItem[] = [
  { label: "Label checkbox 1" },
  { label: "Label checkbox 2" },
  { label: "Label checkbox 3" },
];

const meta: Meta<CheckboxGroupArgs> = {
  title: "Lit/Checkbox/Checkboxes Group",
  tags: ["autodocs"],
  argTypes: {
    legend: { control: "text" },
    hintGroup: { control: "text" },
    status: {
      control: { type: "select" },
      options: ["default", "error", "valid"],
    },
    message: { control: "text" },
    inline: { control: "boolean" },
    size: { control: { type: "select" }, options: ["md", "sm"] },
  },
  args: {
    legend: "Légende pour l’ensemble de champs",
    hintGroup: "",
    status: "default",
    message: "",
    inline: false,
    size: "md",
  },
};

export default meta;
type Story = StoryObj<CheckboxGroupArgs>;

export const CheckboxesGroupStory: Story = {
  name: "CheckboxesGroupStory",
  render: (args) => renderGroup(args, defaultItems),
};

export const DefaultGroupStory: Story = {
  name: "DefaultGroupStory",
  render: (args) => renderGroup(args, defaultItems),
};

export const HintStory: Story = {
  name: "HintStory",
  render: (args) =>
    renderGroup(args, [
      { label: "Label checkbox 1", hint: "Description additionnelle 1" },
      { label: "Label checkbox 2", hint: "Description additionnelle 2" },
      { label: "Label checkbox 3", hint: "Description additionnelle 3" },
    ]),
};

export const HintGroupStory: Story = {
  name: "HintGroupStory",
  args: {
    hintGroup: "Texte de description additionnel pour le groupe",
  },
  render: (args) => renderGroup(args, defaultItems),
};

export const InlineStory: Story = {
  name: "InlineStory",
  args: {
    inline: true,
  },
  render: (args) => renderGroup(args, defaultItems),
};

export const SizeMdStory: Story = {
  name: "SizeMdStory",
  args: {
    size: "md",
  },
  render: (args) => renderGroup(args, defaultItems),
};

export const SizeSmStory: Story = {
  name: "SizeSmStory",
  args: {
    size: "sm",
  },
  render: (args) => renderGroup(args, defaultItems),
};

export const DisabledStory: Story = {
  name: "DisabledStory",
  render: (args) =>
    renderGroup(args, [
      { label: "Label checkbox 1", disabled: true },
      { label: "Label checkbox 2", disabled: true, checked: true },
      { label: "Label checkbox 3", disabled: true },
    ]),
};

export const ErrorStory: Story = {
  name: "ErrorStory",
  args: {
    status: "error",
    message: "Texte d'erreur",
  },
  render: (args) => renderGroup(args, defaultItems),
};

export const SuccessStory: Story = {
  name: "SuccessStory",
  args: {
    status: "valid",
    message: "Texte de succès",
  },
  render: (args) => renderGroup(args, defaultItems),
};
