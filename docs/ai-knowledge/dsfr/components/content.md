# DSFR Content Component

*Generated from local node_modules*

## Presentation

---
title: Contenu médias
shortTitle: Contenu médias
titleId: Content
description: Présentation du composant Contenu média permettant d’intégrer images, vidéos ou sons dans une page tout en respectant des règles éditoriales claires.
shortDescription: Structurer visuellement une page avec des contenus média.
keywords: contenu média, image, vidéo, audio, design system, accessibilité, UX, UI, droits d’auteur, visuel, éditorial
cover: ./_asset/cover/cover.png
excerpt: Ce document explique comment intégrer des contenus média dans une page de manière cohérente et responsable, tout en respectant les droits et les bonnes pratiques éditoriales.
summary: Ce guide présente le composant contenu média, destiné à l’intégration d’éléments visuels ou sonores comme des images, vidéos ou fichiers audio dans les pages d’un site. Il précise les conditions d’usage, notamment en matière de droits, et rappelle les règles éditoriales à suivre pour assurer la clarté du message, l’unité graphique et l’accessibilité. Il s’adresse aux équipes éditoriales et de conception souhaitant enrichir leurs pages sans compromettre la cohérence visuelle ni l’expérience utilisateur.
mesh:
  - component/transcription
---

## Contenu médias

Le composant **Contenu médias** permet d'intégrer des contenus multimédias tels que des vidéos, des images de manière accessible et responsive.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=content--content}

### Quand utiliser ce composant ?

Utiliser le contenu média pour intégrer des images, vidéos ou fichiers audio aux pages de contenu d’un site.

### Comment utiliser ce composant ?

- **Utiliser exclusivement des contenus média libres de droit** ou veiller à vous acquitter des droits.

### Règles éditoriales

- **Utiliser des contenus média qui véhiculent un message clair**.
- **Homogénéiser le style graphique de vos contenus média** afin de créer une unité au sein du site.
- **Eviter d’intégrer du texte directement dans les contenus média** (hors sous-titrage), notamment sur des visuels statiques.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design du Contenu médias
shortTitle: Design du Contenu médias
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Contenu médias.
shortDescription: Structurer visuellement une page avec des contenus média.
keywords: contenu média, image, vidéo, audio, design system, accessibilité, UX, UI, droits d’auteur, visuel, éditorial
cover: ../_asset/cover/cover.png
excerpt: Ce document explique comment intégrer des contenus média dans une page de manière cohérente et responsable, tout en respectant les droits et les bonnes pratiques éditoriales.
summary: Ce guide présente le composant contenu média, destiné à l’intégration d’éléments visuels ou sonores comme des images, vidéos ou fichiers audio dans les pages d’un site. Il précise les conditions d’usage, notamment en matière de droits, et rappelle les règles éditoriales à suivre pour assurer la clarté du message, l’unité graphique et l’accessibilité. Il s’adresse aux équipes éditoriales et de conception souhaitant enrichir leurs pages sans compromettre la cohérence visuelle ni l’expérience utilisateur.
mesh:
  - component/transcription
---

## Contenu médias

Le composant **Contenu médias** permet d'intégrer des contenus multimédias tels que des vidéos, des images de manière accessible et responsive.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie du Contenu médias](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un média]{add='image, vidéo ou audio' required=true}

::dsfr-doc-pin[Une légende]

::dsfr-doc-pin[Une transcription]

:::

### Variations

**Ratio 16:9**

::dsfr-doc-storybook{storyId=content--content}

Il s’agit du format conseillé par défaut pour les images et vidéos lorsqu’elles sont intégrées dans un contenu éditorial.

> [!NOTE]
> L’iFrame générée par l’hébergeur de la vidéo peut être différent du ratio par défaut de 16:9.

**Autres ratios**

D’autres ratios sont toutefois disponibles : voir [la section ratios dans les fondamentaux](../../../../../core/_part/doc/media/index.md).

Il est notamment possible d’opter pour un format de vidéo en 4:3.

### Tailles

Utiliser les différentes tailles à votre disposition pour accentuer la visibilité d'un contenu média.

Le contenu média est disponible en trois tailles :

- SM pour small (75%)

::dsfr-doc-storybook{storyId=content--size-sm}

La largeur du contenu média est inférieure à celle de la zone de texte.

- MD pour medium (100%)

::dsfr-doc-storybook{storyId=content--size-md}

La largeur du contenu média correspond à celle de la zone de texte.

- LG pour large (125%)

::dsfr-doc-storybook{storyId=content--size-lg}

La largeur du contenu média est supérieure à celle de la zone de texte.

### États

Le contenu média n’est sujet à aucun changement d’état.

### Personnalisation

Le contenu média n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](#contenu-médias).


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code du Contenu médias
shortTitle: Code du Contenu médias
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Contenu médias.
shortDescription: Structurer visuellement une page avec des contenus média.
keywords: contenu média, image, vidéo, audio, design system, accessibilité, UX, UI, droits d’auteur, visuel, éditorial
cover: ../_asset/cover/cover.png
excerpt: Ce document explique comment intégrer des contenus média dans une page de manière cohérente et responsable, tout en respectant les droits et les bonnes pratiques éditoriales.
summary: Ce guide présente le composant contenu média, destiné à l’intégration d’éléments visuels ou sonores comme des images, vidéos ou fichiers audio dans les pages d’un site. Il précise les conditions d’usage, notamment en matière de droits, et rappelle les règles éditoriales à suivre pour assurer la clarté du message, l’unité graphique et l’accessibilité. Il s’adresse aux équipes éditoriales et de conception souhaitant enrichir leurs pages sans compromettre la cohérence visuelle ni l’expérience utilisateur.
mesh:
  - component/transcription
---

## Contenu médias

Le composant **Contenu médias** permet d'intégrer des contenus multimédias tels que des vidéos, des images de manière accessible et responsive.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Contenu médias** permet d'intégrer des images ou des vidéos de manière accessible et responsive. Sa structure est la suivante :

- Un élément `<figure>` de classe `fr-content-media` contient le média et ses informations associées.
  - Dans le cas d'une image :
    - Un élément `<div>` de classe `fr-content-media__img` contient l'image.
    - L'image est un élément `<img>` avec la classe `fr-responsive-img`, ou un `<svg>`.
    - L’alternative de l’image, attribut `alt`, doit toujours être présente, sa valeur peut-être vide (image n’apportant pas de sens supplémentaire au contexte) ou non (porteuse de texte ou apportant du sens) selon votre contexte.
  - Dans le cas d'une vidéo :
    - Un élément `<video>` avec l'attribut `controls`, ou une `<iframe>`, et la classe `fr-responsive-vid`.
    - L'alternative de la vidéo doit être présente dans un paragraphe `<p>` au sein de la balise `<video>` ou au niveau de l'attribut `title` de l'`<iframe>`.
  - Un élément `<figcaption>` de classe `fr-content-media__caption` contenant :
    - La description et/ou la source du média.
    - Un lien `<a class="fr-link">` vers la source du média.

Les informations visuelles ou auditives doivent être accessibles pour les utilisateurs qui ne peuvent pas voir ou entendre le contenu multimédia. Pour cela, il est recommandé d'ajouter une **description** ou une **transcription** du contenu multimédia.

**Structure HTML d'une image**

Image :

```HTML
<figure role="group" class="fr-content-media" aria-label="Description / Source">
    <div class="fr-content-media__img">
        <img class="fr-responsive-img" src="example/img/placeholder.16x9.png" alt="[À MODIFIER - vide ou texte alternatif de l’image]" />
    </div>
    <figcaption class="fr-content-media__caption">
        Description / Source
        <a href="#" class="fr-link">Libellé lien</a>
    </figcaption>
</figure>
```

SVG :

```HTML
<figure role="group" class="fr-content-media" aria-label="Description / Source">
    <!-- Les SVG illustratifs (non porteur de sens) doivent avoir l'attribut aria-hidden="true" -->
    <!-- Les SVG porteurs de sens doivent avoir l'attribut role="img" et un attribut aria-label -->
    <svg role="img" aria-label="[A modifier - titre ou texte contenu dans l’image]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360">(...)</svg>
    <figcaption class="fr-content-media__caption">
        Description / Source
        <a href="#" class="fr-link">Libellé lien</a>
    </figcaption>
</figure>
```

**Structure HTML d'une vidéo**

Iframe :

```HTML
<figure role="group" class="fr-content-media">
    <iframe title="Vidéo de présentation du Service National Universel - voir transcription ci-dessous" class="fr-responsive-vid" src="https://www.youtube.com/embed/HyirpmPL43I" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <figcaption class="fr-content-media__caption">
        Description / Source
        <a id="link-1983" href="#" class="fr-link">Libellé lien</a>
    </figcaption>
</figure>
```

Vidéo :

```HTML
<figure role="group" class="fr-content-media">
    <video src="video.mp4" class="fr-responsive-vid" controls>
        <p>Alternative de la vidéo - voir transcription ci-dessous</p>
    </video>
    <figcaption class="fr-content-media__caption">
        Description / Source
        <a id="link-1983" href="#" class="fr-link">Libellé lien</a>
    </figcaption>
</figure>
```

Dans le cas d'un fichier audio, la structure est similaire à celle d'une vidéo, mais avec un élément `<audio>` à la place de la vidéo.

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------| ---------|
| Core       | Oui         |          |
| Content    | Oui         |          |
| Link       | Non         | Si ajout de liens dans la description du média |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/content/content.min.css" rel="stylesheet">
```

#### Variantes de tailles

Le composant Contenu médias est prévu pour être utilisé au sein d'une page de contenu. Les pages de contenus ne doivent pas prendre la totalité de la largeur de la page en desktop, il est conseillé de placer le contenu dans une grille de 6 à 10 colonnes en desktop.

Par défaut, un contenu média prendra la largeur du conteneur. Il existe des variantes de tailles permettant de le render plus large ou moins large que le conteneur :

- Par défaut : 100% de la largeur du conteneur.
- La classe `.fr-content-media--sm` : 75% de la largeur du conteneur (centré).
- La classe `.fr-content-media--lg` : 125% de la largeur du conteneur.

La description et la source du média restent alignés sur la gauche du conteneur.

**Exemples de variantes de tailles**

SM :

```HTML
<figure role="group" class="fr-content-media fr-content-media--sm">
    (...)
</figure>
```

LG :

```HTML
<figure role="group" class="fr-content-media fr-content-media--lg">
    (...)
</figure>
```

#### Variantes de ratios

Les [classes utilitaires de ratios](../../../../../core/_part/doc/media/index.md), disponibles dans le core, permettent de définir le ratio de l'image ou de la vidéo.

Pour les images, les classes suivantes sont disponibles :

- Le format par défaut et conseillé des images est le 16:9.
- `fr-ratio-32x9` : ratio 16:9/2
- `fr-ratio-16x9` : par défaut, pour forcer le ratio 16:9
- `fr-ratio-3x2` : ratio 3:2
- `fr-ratio-4x3` : ratio 4:3
- `fr-ratio-1x1` : ratio 1:1
- `fr-ratio-3x4` : ratio 3:4
- `fr-ratio-2x3` : ratio 2:3

Pour les vidéos, les classes suivantes sont disponibles :

- `fr-ratio-16x9` : par défaut, pour forcer le ratio 16:9
- `fr-ratio-4x3` : ratio 4:3
- `fr-ratio-1x1` : ratio 1:1

---

### JavaScript

Aucun JavaScript spécifique n'est requis pour le composant Contenu médias.

Un fallback JS est prévu pour la **gestion des ratios** sur les navigateurs ne supportant pas la propriété CSS `aspect-ratio`. Il est inclus dans le fichier JS du core.

#### Installation du JavaScript

Pour fonctionner correctement, le fichier JS du core doit être importé.
L'import doit se faire en fin de page, avant la fermeture du body, et de préférence avec le fichier minifié, car plus léger.

```HTML
<script type="module" src="dist/core/core.min.js"></script>
```

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/core/core.legacy.min.js"></script>
```

Une fois le fichier JS importé, la gestion des ratios est automatiquement prise en charge par le navigateur.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+content+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Contenu médias
shortTitle: Accessibilité du Contenu médias
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Contenu médias.
shortDescription: Structurer visuellement une page avec des contenus média.
keywords: contenu média, image, vidéo, audio, design system, accessibilité, UX, UI, droits d’auteur, visuel, éditorial
cover: ../_asset/cover/cover.png
excerpt: Ce document explique comment intégrer des contenus média dans une page de manière cohérente et responsable, tout en respectant les droits et les bonnes pratiques éditoriales.
summary: Ce guide présente le composant contenu média, destiné à l’intégration d’éléments visuels ou sonores comme des images, vidéos ou fichiers audio dans les pages d’un site. Il précise les conditions d’usage, notamment en matière de droits, et rappelle les règles éditoriales à suivre pour assurer la clarté du message, l’unité graphique et l’accessibilité. Il s’adresse aux équipes éditoriales et de conception souhaitant enrichir leurs pages sans compromettre la cohérence visuelle ni l’expérience utilisateur.
mesh:
  - component/transcription
---

## Contenu médias

Le composant **Contenu médias** permet d'intégrer des contenus multimédias tels que des vidéos, des images de manière accessible et responsive.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Contenu médias** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Il n'y a aucune interaction spécifique au composant **Contenu médias**.

### Règles d’accessibilité

- Utiliser des balises sémantiques pour structurer le contenu multimédia.
  - Utiliser la balise `<figure>` pour encapsuler les contenus multimédias.
  - Indiquer la **description** et/ou la **source** du média dans un élément `<figcaption>`.
- Les contenus multimédias doivent être **accessibles** aux technologies d'assistance.
  - Si la `figure` possède une légende dans une balise `figcaption`, elle doit également avoir un attribut `aria-label` reprenant le texte du figcaption.
  - Utiliser l'attribut `alt` pour les images, laisser vide si l'image n'apporte pas de sens supplémentaire au contexte. Si l'image est porteuse de texte ou apporte du sens, l'attribut `alt` doit renseigner cette information.
  - Si l'image est un SVG, les SVG illustratifs (non porteur de sens) doivent avoir l'attribut `aria-hidden="true"`. Les SVG porteurs de sens doivent avoir l'attribut `role="img"` et un attribut `aria-label`.
  - Pour les `<video>`, l'alternative doit être présente dans un paragraphe `<p>` au sein de la balise `<video>`.
  - Utiliser l'attribut `title` pour les `iframe` pour indiquer le titre de la vidéo.
  - Lorsque le contenu à renseigner dans l'alternative est trop long, utiliser le composant [Transcription](../../../../transcription/_part/doc/code/index.md) sous le média pour afficher le contenu complet.
- Les contenus multimédias doivent être **responsive**.
  - Utiliser la classe `fr-responsive-img` pour les images.
  - Utiliser la classe `fr-responsive-vid` pour les vidéos.
- Pour les vidéos :
  - Les contrôles de lecture sont présents. Utiliser l'attribut `controls` pour les balises `<video>`.
  - La lecture ne commence pas sans le contrôle de l’utilisateur.
  - Le lecteur est utilisable au clavier selon un ordre logique.
  - Les vidéos (hors direct) sont sous-titrées.

### Contrastes de couleurs

Le composant Contenu médias est suffisamment contrasté en thème clair.

### Critères RGAA applicables

- **Images&nbsp;:** 1.1, 1.2, 1.3, 1.6, 1.7, 1.8, 1.9
- **Couleurs&nbsp;:** 3.1, 3.2, 3.3
- **Multimédia&nbsp;:** 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.10, 4.11, 4.12, 4.13
- **Liens&nbsp;:** 6.1, 6.2
- **Scripts&nbsp;:** 7.1, 7.3
- **Éléments obligatoires&nbsp;:** 8.9
- **Structuration&nbsp;:** 9.1, 9.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Arbre de décision - alternative d’image (WAI)](https://www.w3.org/WAI/tutorials/images/decision-tree/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/content/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Contenu médias - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/content/content.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/component/transcription/transcription.main.css" rel="stylesheet">
    <link h...
```

(Truncated for brevity. See source file for full HTML)
