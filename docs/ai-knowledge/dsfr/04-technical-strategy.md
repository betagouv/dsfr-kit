# Technical Strategy: DSFR Implementation PoC

## Goal
Establish the simplest, most effective technical scope for implementing DSFR components that can be consumed by diverse ecosystems (Node.js/React/Vue, Python/Django, Ruby/Rails, etc.).

## Proposal Analysis: Lit + TypeScript
The user suggested **Lit** built with **TypeScript**.

### Strengths (Why this is the right choice)
1.  **Framework Agnostic**: Custom Elements (`<dsfr-badge>`) work natively in browsers. They can be used inside React, Vue, Angular, Svelte, or plain HTML templates (Rails/Django).
2.  **Single Source of Truth**: logic (accessibility, focus management, state) is written once in TypeScript, not duplicated across 3+ framework libraries.
3.  **Forward Compatibility**: Based on W3C standards, not tied to the churn of specific JS frameworks.
4.  **Ecosystem Reach**:
    - **Node/JS**: Distributable via NPM.
    - **Python/Ruby**: Can be loaded via CDN or static asset management (Import Maps, Asset Pipeline) without requiring a Python/Ruby translation layer.

### Challenges & Mitigations
1.  **Global Styles vs. Shadow DOM**:
    - *Challenge*: DSFR relies heavily on logical global utility classes (`.fr-badge`, `.fr-badge--success`) and a global CSS reset. Shadow DOM isolates styles, breaking external CSS.
    - *Solution*: **Light DOM Lit**. We use Custom Elements for *behavior* and *templating*, but render markup into the Light DOM (or copy styles). This allows the standard DSFR CSS to apply naturally without complex injection hacks.
2.  **SSR (Server Side Rendering)**:
    - *Challenge*: Hydration and painting content before JS loads.
    - *Solution*: Declarative Shadow DOM (if using Shadow) or simply ensuring the components render semantically meaningful layouts that upgrade progressively.

### Extensibility & Composition (User Requirement)
The user requested a mechanism to easily embed custom, interactive elements inside components (e.g., a button inside a Badge) across any framework.

1.  **Mechanism: Native Composition (Slots)**
    *   Lit standardizes this via **Slots**.
    *   In **Light DOM** (our chosen strategy), this is even simpler: standard HTML nesting.
    *   *Example*: `<dsfr-badge> <span>Custom Text</span> <button>Action</button> </dsfr-badge>`
    *   **Frameworks**: React, Vue, Django all natively support nesting children. The "Integration Layer" is just the browser's DOM.

2.  **Styling Extensibility**
    *   Because we use Light DOM, consumers can easily override or extend styles using their own CSS.
    *   *Result*: A designer using React can pass a `className` or `style` prop to their injected content, and it just works. No arbitrary boundaries or `::part` hacking required.

3.  **Behavior**
    *   Events bubbled from inner elements (like a click on that embedded button) propagate naturally to the application root. React/Vue listeners on the container work as expected.

### Recommendation
**Go with Lit.**
*   **Tooling**: **Lit** (lightweight, standard).
*   **Strategy**: **Light DOM** approach. wrappers around the HTML structure defined in our knowledge base.
*   **Verification**: The **Badge** is the perfect candidate. It's simple, visual, and allows testing the build pipeline.

## Implementation Scope (PoC)
1.  **Repository**: Monorepo using `pnpm` workspace (already set up).
2.  **Package**: `packages/lit` (or `dsfr-lit`).
3.  **Tech**: TypeScript + Lit (Light DOM).
4.  **Build**: Vite (fast, standard).
5.  **Output**: ESM modules + Types.

## Comparison to Alternatives
| Approach | Pros | Cons |
| :--- | :--- | :--- |
| **Native Framework Libs** (React/Vue/Ang specific) | Perfect DX for that specific framework. | **Maintenance Nightmare**. 3x code. Python/Ruby users left behind. |
| **Lit** | **Write Once, Run Everywhere**. | Slightly strictly custom element usage in older layouts (minor). |
| **iframe / Micro-frontends** | Total isolation. | Overkill. Performance heavy. Bad for granular components like Badges. |

## Next Steps
1.  Confirm this strategy.
2.  Initialize `packages/lit`.
3.  Implement `<dsfr-badge>` as the PoC.
