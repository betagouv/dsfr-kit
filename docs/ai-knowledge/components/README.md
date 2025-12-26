# DSFR Component Analysis Index

This directory contains automated analysis documentation for all 51 DSFR components, ordered by complexity tier.

## Components by Complexity

### Tier 1: Simple (13 components)
Minimal or purely presentational components with few or no interactive behaviors.

| Component | Has JS | Templates | Description |
|-----------|--------|-----------|-------------|
| [combobox](./combobox.md) | No | 0 | Placeholder/minimal |
| [dropdown](./dropdown.md) | No | 0 | Placeholder/minimal |
| [tabnav](./tabnav.md) | No | 0 | Placeholder/minimal |
| [user](./user.md) | No | 0 | Placeholder/minimal |
| [composition](./composition.md) | No | 0 | Layout composition helpers |
| [callout](./callout.md) | No | 3 | Highlighted content block |
| [logo](./logo.md) | No | 6 | Government logo/branding |
| [download](./download.md) | No | 6 | Download link component |
| [upload](./upload.md) | No | 4 | File upload field |
| [highlight](./highlight.md) | No | 5 | Text highlight block |
| [stepper](./stepper.md) | No | 3 | Step progress indicator |
| [display](./display.md) | Yes | 6 | Display mode toggle |
| [skiplink](./skiplink.md) | No | 5 | Accessibility skip links |

### Tier 2: Medium (28 components)
Components with moderate interactivity and state management.

| Component | Has JS | Templates | Key Behaviors |
|-----------|--------|-----------|---------------|
| [pagination](./pagination.md) | No | 5 | Page navigation |
| [search](./search.md) | No | 4 | Search input + button |
| [transcription](./transcription.md) | Yes | 3 | Collapsible transcript |
| [quote](./quote.md) | No | 4 | Blockquote styling |
| [select](./select.md) | No | 10 | Dropdown select |
| [summary](./summary.md) | No | 5 | Table of contents |
| [translate](./translate.md) | No | 6 | Language selector |
| [content](./content.md) | No | 13 | Content blocks |
| [password](./password.md) | Yes | 6 | Password input + toggle visibility |
| [consent](./consent.md) | No | 8 | Cookie consent banner |
| [share](./share.md) | No | 10 | Social sharing links |
| [modal](./modal.md) | Yes | 9 | Modal dialog |
| [notice](./notice.md) | No | 10 | Notification banner |
| [footer](./footer.md) | No | 12 | Page footer |
| [segmented](./segmented.md) | Yes | 4 | Segmented control |
| [alert](./alert.md) | No | 8 | Alert messages |
| [breadcrumb](./breadcrumb.md) | Yes | 7 | Breadcrumb navigation |
| [sidemenu](./sidemenu.md) | Yes | 6 | Side navigation menu |
| [follow](./follow.md) | No | 20 | Social follow links |
| [connect](./connect.md) | No | 7 | FranceConnect button |
| [badge](./badge.md) | No | 7 | Status badge |
| [tab](./tab.md) | Yes | 7 | Tab navigation |
| [tooltip](./tooltip.md) | Yes | 7 | Tooltip popover |
| [accordion](./accordion.md) | Yes | 9 | Expandable accordion |
| [input](./input.md) | No | 24 | Text input field |
| [range](./range.md) | Yes | 6 | Range slider |
| [form](./form.md) | No | 20 | Form wrapper |
| [checkbox](./checkbox.md) | Yes | 8 | Checkbox input |

### Tier 3: Complex (10 components)
High-complexity components with extensive templates, states, and behaviors.

| Component | Has JS | Templates | Complexity Drivers |
|-----------|--------|-----------|--------------------|
| [navigation](./navigation.md) | Yes | 10 | Multi-level nav, responsive menus |
| [tag](./tag.md) | Yes | 9 | Selectable/dismissible tags |
| [radio](./radio.md) | No | 13 | Radio button groups with rich variants |
| [toggle](./toggle.md) | Yes | 13 | Toggle switch |
| [header](./header.md) | Yes | 17 | Site header with search, nav, auth |
| [link](./link.md) | No | 15 | Link variants (icons, sizes, download) |
| [table](./table.md) | Yes | 25 | Data tables with sort/select |
| [tile](./tile.md) | Yes | 38 | Rich card-like tiles |
| [card](./card.md) | Yes | 41 | Feature cards with actions |
| [button](./button.md) | Yes | 7 | Buttons with groups, icons, tooltips |

## Usage

Each component file contains:
- **Overview**: Complexity tier, file counts
- **Props**: Documented properties from EJS templates
- **State**: Detected interactive states
- **Events**: JavaScript event handlers
- **Files**: Template and script paths
- **AST Extraction Notes**: Guidance for code generation

## See Also

- [AST Extraction Strategy](../ast-extraction-strategy.md) - Overall strategy for component parsing
