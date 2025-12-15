# DSFR Stepper Component

*Generated from local node_modules*

## Presentation

---
title: Indicateur d’étapes
shortTitle: Indicateur d’étapes
titleId: Stepper
description: Présentation du composant Indicateur d’étapes destiné à guider l’usager au sein d’un parcours en plusieurs étapes comme un formulaire ou une démarche en ligne.
shortDescription: Suivi d’un parcours en plusieurs étapes
keywords: indicateur d’étapes, formulaire, démarche, progression, design système, DSFR, navigation, accessibilité
cover: ./_asset/cover/cover.png
excerpt: L’indicateur d’étapes permet à l’usager de se repérer dans un processus linéaire, en affichant la position actuelle dans le parcours ainsi que les étapes restantes.
summary: Ce composant s’intègre dans les parcours à étapes pour aider l’usager à visualiser son avancée. Il affiche une barre de progression, un titre explicite pour chaque étape et un repère numérique. Il ne permet pas de navigation directe entre les étapes mais accompagne visuellement l’usager du début à la fin du formulaire. Sa structure est fixe, sans personnalisation, pour garantir une expérience uniforme et accessible.
mesh:
  - component/input
  - component/form
---

## Indicateur d'étapes

L’indicateur d'étapes est un élément éditorial permettant d’accompagner l’usager au sein d’un formulaire ou une démarche en plusieurs étapes.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=stepper--stepper}

### Quand utiliser ce composant ?

**Utiliser l’indicateur d’étapes dans le cadre d’un processus linéaire**, tel un formulaire ou une démarche en ligne, pour indiquer à l’usager où il se trouve dans le parcours.

> [!NOTE]
> L’indicateur d’étapes ne permet pas de naviguer d’une étape à l’autre. Pour cela, préférer l’usage des [boutons](../../../button/_part/doc/index.md).

### Comment utiliser ce composant ?

- **Positionner systématiquement l’indicateur d’étapes en haut de page** afin qu’il soit immédiatement visible.
- **Proposer une page d’introduction en début de formulaire ou de démarche**, pour présenter les différentes étapes. L’indicateur d’étapes ne figure pas sur cette première page.
- **Identifier avec soin les champs demandés aux usagers et les rassembler dans des sections similaires**. Plus le parcours est long, plus le risque d’abandon est élevé et le nombre maximal d’étapes proposées par le composant est de 8.
- **Clôturer le formulaire ou la démarche par une étape de confirmation**, afin de notifier l’usager de la fin du parcours. Sur cette dernière étape, le titre de l’étape suivante ne doit pas être affiché.

### Règles éditoriales

- **Rédiger des titres d’étapes clairs et unique**. L’usager doit comprendre facilement le cheminement de la démarche.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-1.png)

Aiguiller l’usager sur les différentes étapes composant la démarche en proposant des titres explicites.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-1.png)

Ne pas répéter des titres d’étapes ou indiquer le numéro de l’étape dans le titre, celui-ci étant déjà indiquer dans un champ spécifique.

:::

::::


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design de l'Indicateur d'étapes
shortTitle: Design de l'Indicateur d’étapes
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Indicateur d’étapes.
shortDescription: Suivi d’un parcours en plusieurs étapes
keywords: indicateur d’étapes, formulaire, démarche, progression, design système, DSFR, navigation, accessibilité
cover: ../_asset/cover/cover.png
excerpt: L’indicateur d’étapes permet à l’usager de se repérer dans un processus linéaire, en affichant la position actuelle dans le parcours ainsi que les étapes restantes.
summary: Ce composant s’intègre dans les parcours à étapes pour aider l’usager à visualiser son avancée. Il affiche une barre de progression, un titre explicite pour chaque étape et un repère numérique. Il ne permet pas de navigation directe entre les étapes mais accompagne visuellement l’usager du début à la fin du formulaire. Sa structure est fixe, sans personnalisation, pour garantir une expérience uniforme et accessible.
mesh:
  - component/input
  - component/form
---

## Indicateur d'étapes

L’indicateur d'étapes est un élément éditorial permettant d’accompagner l’usager au sein d’un formulaire ou une démarche en plusieurs étapes.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie du bouton](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Le numéro de l'étape en cours et le nombre d'étapes total]{required=true}

::dsfr-doc-pin[Le titre de l'étape en cours]{required=true}

::dsfr-doc-pin[Une barre de progression]{required=true add='qui contient autant de sections qu’il y a d’étapes, avec les étapes validées et en cours indiquées en bleu'}

::dsfr-doc-pin[Le titre de l'étape suivante]{required=true}

:::

> [!NOTE]
> Aucun des éléments de l’indicateur d'étapes n’est cliquable.

### Variations

L’indicateur d’étapes ne propose aucune variation.

### Tailles

La largeur de l’indicateur d’étapes s’adapte à la taille de son conteneur.

### États

L’indicateur d’étapes n’est sujet à aucun changement d’état.

### Personnalisation

L’indicateur d’étapes n’est pas personnalisable.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Conserver la barre de progression en l’état.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur ou le design de la barre de progression.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code de l'Indicateur d'étapes
shortTitle: Code de l'Indicateur d’étapes
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Indicateur d’étapes.
shortDescription: Suivi d’un parcours en plusieurs étapes
keywords: indicateur d’étapes, formulaire, démarche, progression, design système, DSFR, navigation, accessibilité
cover: ../_asset/cover/cover.png
excerpt: L’indicateur d’étapes permet à l’usager de se repérer dans un processus linéaire, en affichant la position actuelle dans le parcours ainsi que les étapes restantes.
summary: Ce composant s’intègre dans les parcours à étapes pour aider l’usager à visualiser son avancée. Il affiche une barre de progression, un titre explicite pour chaque étape et un repère numérique. Il ne permet pas de navigation directe entre les étapes mais accompagne visuellement l’usager du début à la fin du formulaire. Sa structure est fixe, sans personnalisation, pour garantir une expérience uniforme et accessible.
mesh:
  - component/input
  - component/form
---

## Indicateur d'étapes

L’indicateur d'étapes est un élément éditorial permettant d’accompagner l’usager au sein d’un formulaire ou une démarche en plusieurs étapes.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Indicateur d'étapes** est un élément permettant de visualiser les étapes d'un processus.

Sa structure est la suivante :

- Le conteneur du stepper est un élément HTML `<div>` défini par la classe `fr-stepper`.
- Le titre de l'étape en cours, obligatoire, est contenu dans un niveau d'entête `<hx>`, variable en fonction de sa hiérarchie dans la page (par défaut h2), et possède la classe `fr-stepper__title`.
  - Le numéro de l'étape et le nombre d'étapes total, obligatoires, sont précisés à l'intérieur du titre dans un élément HTML `<span>` défini par la classe `fr-stepper__state`.
- La barre de progression, obligatoire, un élément HTML `<div>` défini par la classe `fr-stepper__steps`.
  - La balise possède des attributs `data-fr-steps` et `data-fr-current-step` pour définir le nombre total d'étapes et l'étape actuelle.
- Les détails de l'étape sont un élément HTML `<p>` défini par la classe `fr-stepper__details` et contiennent :
  - Le titre de l'étape suivante, obligatoire, dans un élément HTML `<span>`.

**Exemple de structure HTML**

```HTML
<div class="fr-stepper">
    <h2 class="fr-stepper__title">
        Titre de l’étape en cours
        <span class="fr-stepper__state">Étape 1 sur 3</span>
    </h2>
    <div class="fr-stepper__steps" data-fr-current-step="1" data-fr-steps="3"></div>
    <p class="fr-stepper__details">
        <span class="fr-text--bold">Étape suivante :</span> Titre de la prochaine étape
    </p>
</div>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top scroll=false}

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Stepper    | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/stepper/stepper.min.css" rel="stylesheet">
```

---

### JavaScript

Le composant Indicateur d'étapes **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+stepper+)


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de l'Indicateur d'étapes
shortTitle: Accessibilité de l'Indicateur d’étapes
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Indicateur d'étapes.
shortDescription: Suivi d’un parcours en plusieurs étapes
keywords: indicateur d’étapes, formulaire, démarche, progression, design système, DSFR, navigation, accessibilité
cover: ../_asset/cover/cover.png
excerpt: L’indicateur d’étapes permet à l’usager de se repérer dans un processus linéaire, en affichant la position actuelle dans le parcours ainsi que les étapes restantes.
summary: Ce composant s’intègre dans les parcours à étapes pour aider l’usager à visualiser son avancée. Il affiche une barre de progression, un titre explicite pour chaque étape et un repère numérique. Il ne permet pas de navigation directe entre les étapes mais accompagne visuellement l’usager du début à la fin du formulaire. Sa structure est fixe, sans personnalisation, pour garantir une expérience uniforme et accessible.
mesh:
  - component/input
  - component/form
---

## Indicateur d’étapes

L’indicateur d'étapes est un élément éditorial permettant d’accompagner l’usager au sein d’un formulaire ou une démarche en plusieurs étapes.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Indicateur d'étapes** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Il n'y a aucune interaction spécifique au composant **Indicateur d’étapes**.

### Règles d’accessibilité

- Le titre de l’étape en cours est contenu dans un élément `<hx>`.
- Le nom de l’étape suivante est dans un élément `<p>`.
- La barre de progression ne nécessite aucune alternative ni attribut ARIA (car purement illustrative).

### Contrastes de couleurs

Le composant Indicateur d’étapes est suffisamment contrasté en thème clair et en thème sombre dans ses différentes versions.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Indicateur d’étapes.

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2
- **Éléments obligatoires&nbsp;** 8.9
- **Structuration&nbsp;:** 9.1
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.4, 10.5, 10.11, 10.12
- **Consultation&nbsp;:** 13.9

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/stepper/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Indicateur d&#39;étapes - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/component/stepper/stepper.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../dis...
```

(Truncated for brevity. See source file for full HTML)
