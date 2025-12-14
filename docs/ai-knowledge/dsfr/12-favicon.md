# DSFR Favicon System

![Favicon Reference](/Users/luis/.gemini/antigravity/brain/2f480890-9099-4b2f-8249-e595a9baba11/uploaded_image_1765700959762.png)

## Definition
The favicon allows users to identify that they are on a State website (browser tab, history, bookmarks).
- **Visual**: The standard Marianne (Blue/Red).
- **Personalization**: **Forbidden**. This component is **not personalizable**. It must remain the official State symbol.

## Implementation
The favicon must be declared in the `<head>` of your HTML pages.

### Code Example
```html
<!-- Apple Touch Icon (180x180) -->
<link rel="apple-touch-icon" href="[path]/apple-touch-icon.png">

<!-- SVG Icon (Modern Browsers) -->
<link rel="icon" href="[path]/favicon.svg" type="image/svg+xml">

<!-- ICO Fallback (Legacy) -->
<link rel="shortcut icon" href="[path]/favicon.ico" type="image/x-icon">

<!-- Manifest -->
<link rel="manifest" href="[path]/manifest.webmanifest" crossorigin="use-credentials">
```
*Note: Adjust `[path]` to your asset directory.*

### File Placement
- Ideally, place `favicon.ico` and `apple-touch-icon.png` at the **root** of the domain if possible.
- If not at root, ensure the `<link>` tags point to the correct relative paths.

## Usage Rules (SEO & Titles)
- **Association**: The favicon always accompanies the **Page Title** and **Site Name**.
- **Length**: Page Title + Site Name should not exceed **60 characters**.
- **Uniqueness**: The page title must be unique, simple, and concise to help the user understand where they are.
