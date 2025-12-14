# DSFR Media System

![Media Reference](/Users/luis/.gemini/antigravity/brain/2f480890-9099-4b2f-8249-e595a9baba11/uploaded_image_1765642986297.png)

## Aspect Ratios
The system defines specific ratios to respect the grid and visual rhythm.

- **Images**: 16:9 (Preferred), 3:2, 4:3, 1:1, 3:4, 2:3.
- **Videos**: 16:9, 4:3, 1:1.

## Images
### Responsive Behavior
To ensure an image is responsive, use the specific class:
- **Class**: `.fr-responsive-img`
- **Effect**: Sets `max-width: 100%` and `height: auto`.

```html
<img src="path/to/image.jpg" class="fr-responsive-img" alt="">
```

### Accessibility
- **Decorative**: Use empty `alt=""`.
- **Informative**: `alt` must contain the essential information.
- **SVG**:
    - Decorative: `aria-hidden="true"`.
    - Informative: `role="img"` + `aria-label`.

## Videos
### Integration & Ratios
Videos must be wrapped to maintain their ratio responsively.

**Structure:**
```html
<div class="fr-responsive-vid fr-responsive-vid--16x9">
    <iframe src="..." title="..." allowfullscreen></iframe>
</div>
```

**Ratio Modifiers:**
- 16:9: `fr-responsive-vid--16x9`
- 4:3: `fr-responsive-vid--4x3`
- 1:1: `fr-responsive-vid--1x1`

### Accessibility
- **Controls**: Playback must be user-controlled (no auto-play without controls).
- **Transcripts**: Mandatory textual transcription (accessible and adjacent).
- **Captions**: Subtitles for spoken content.

## Usage Rules
- **Copyright**: Strictly use rights-cleared content.
- **Quality**: Style should be homogeneous.
- **Context**: Prefer 16:9 for editorial visuals.
