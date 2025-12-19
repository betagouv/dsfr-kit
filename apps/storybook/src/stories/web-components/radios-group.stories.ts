import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html, nothing } from "lit";
import "@dsfr-kit/web-components";

// Helper interface for rendering
interface RadiosGroupArgs {
  legend: string;
  hintGroup: string;
  status: "default" | "error" | "valid";
  message: string;
  inline: boolean;
  size: "md" | "sm";
  rich: boolean;
  hasPictogram: boolean;
}

const defaultItems = [
  { label: "Label radio 1", value: "1" },
  { label: "Label radio 2", value: "2", checked: true },
  { label: "Label radio 3", value: "3" },
];

const richItems = [
  {
    label: "Label radio 1",
    value: "1",
    hint: "Description 1",
    pictogramName: "city-hall",
  },
  {
    label: "Label radio 2",
    value: "2",
    hint: "Description 2",
    pictogramName: "city-hall",
    checked: true,
  },
  {
    label: "Label radio 3",
    value: "3",
    hint: "Description 3",
    pictogramName: "city-hall",
  },
];

const renderGroup = (args: any, items: any[]) => {
  conststatusClass =
    args.status !== "default" ? `fr-fieldset--${args.status}` : "";
  const inlineClass = args.inline ? "fr-fieldset--inline" : "";

  return html`
    <fieldset class="fr-fieldset ${statusClass} ${inlineClass}" aria-labelledby="radios-legend ${args.status !== "default" ? "radios-messages" : ""}">
      <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="radios-legend">
        ${args.legend}
        ${args.hintGroup ? html`<span class="fr-hint-text">${args.hintGroup}</span>` : nothing}
      </legend>
      <div class="fr-fieldset__element">
        ${items.map(
          (item, index) => html`
          <dsfr-radio
            .label=${item.label}
            .hint=${item.hint || ""}
            .size=${args.size}
            ?checked=${item.checked}
            ?disabled=${item.disabled || args.disabled}
            ?rich=${args.rich}
            name="radios-group"
            value=${item.value}
          >
           ${
             args.rich && args.hasPictogram !== false
               ? html`
              <div slot="pictogram">
                <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
                  <use href="/assets/pictograms/${item.pictogramName || "city-hall"}.svg#artwork-major"></use>
                </svg>
              </div>
              `
               : nothing
           }
          </dsfr-radio>
        `,
        )}
      </div>
      ${
        args.status !== "default" && args.message
          ? html`
        <div class="fr-messages-group" id="radios-messages" aria-live="polite">
          <p class="fr-message fr-message--${args.status}">${args.message}</p>
        </div>
      `
          : nothing
      }
    </fieldset>
  `;
};

const meta: Meta = {
  title: "Web Components/Radio/Radios Group",
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
    rich: { control: "boolean" },
    hasPictogram: { control: "boolean" },
  },
  args: {
    legend: "Légende pour l’ensemble de champs",
    hintGroup: "",
    status: "default",
    message: "",
    inline: false,
    size: "md",
    rich: false,
    hasPictogram: true,
  },
};

export default meta;
type Story = StoryObj;

export const RadiosGroupStory: Story = {
  name: "RadiosGroupStory",
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args, defaultItems),
};

export const DefaultGroupStory: Story = {
  name: "DefaultGroupStory",
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args, defaultItems),
};

export const HintStory: Story = {
  name: "HintStory",
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) =>
    renderGroup(args, [
      {
        label: "Label radio 1",
        value: "1",
        hint: "Description additionnelle 1",
      },
      {
        label: "Label radio 2",
        value: "2",
        hint: "Description additionnelle 2",
        checked: true,
      },
      {
        label: "Label radio 3",
        value: "3",
        hint: "Description additionnelle 3",
      },
    ]),
};

export const HintGroupStory: Story = {
  name: "HintGroupStory",
  args: {
    hintGroup: "Texte de description additionnel pour le groupe",
  },
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args, defaultItems),
};

export const DisabledStory: Story = {
  name: "DisabledStory",
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup({ ...args, disabled: true }, defaultItems),
};

export const StatusValidStory: Story = {
  name: "StatusValidStory",
  args: {
    status: "valid",
    message: "Texte de succès",
  },
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args, defaultItems),
};

export const StatusErrorStory: Story = {
  name: "StatusErrorStory",
  args: {
    status: "error",
    message: "Texte d'erreur",
  },
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args, defaultItems),
};

export const SizeMDGroupStory: Story = {
  name: "SizeMDGroupStory",
  args: {
    size: "md",
  },
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args, defaultItems),
};

export const SizeSMGroupStory: Story = {
  name: "SizeSMGroupStory",
  args: {
    size: "sm",
  },
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args, defaultItems),
};

export const InlineGroupStory: Story = {
  name: "InlineGroupStory",
  args: {
    inline: true,
  },
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args, defaultItems),
};

export const RadiosRichGroupStory: Story = {
  name: "RadiosRichGroupStory",
  args: {
    rich: true,
  },
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args, richItems),
};

export const RadiosRichHintGroupStory: Story = {
  name: "RadiosRichHintGroupStory",
  args: {
    rich: true,
    hintGroup: "Texte de description additionnel",
  },
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args, richItems),
};

export const RadiosRichInlineGroupStory: Story = {
  name: "RadiosRichInlineGroupStory",
  args: {
    rich: true,
    inline: true,
  },
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args, richItems),
};

export const RadiosRichInlineHintGroupStory: Story = {
  name: "RadiosRichInlineHintGroupStory",
  args: {
    rich: true,
    inline: true,
    hintGroup: "Texte de description additionnel",
  },
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args, richItems),
};

export const RadiosRichNoImageGroupStory: Story = {
  name: "RadiosRichNoImageGroupStory",
  args: {
    rich: true,
    hasPictogram: false,
  },
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args, richItems),
};

export const RadiosRichNoImageInlineGroupStory: Story = {
  name: "RadiosRichNoImageInlineGroupStory",
  args: {
    rich: true,
    hasPictogram: false,
    inline: true,
  },
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args, richItems),
};
