# DSFR Callout Component

*Generated from local node_modules*

## Presentation

---
title: Mise en avant
shortTitle: Mise en avant
titleId: Callout
description: Présentation du composant Mise en avant, élément éditorial servant à valoriser une information complémentaire dans une page de contenu.
shortDescription: Mettre en valeur une information secondaire.
keywords: mise en avant, contenu, composant éditorial, UX, design system, accessibilité, information, valorisation, page, interface
cover: ./_asset/cover/cover.png
excerpt: Le composant Mise en avant permet de valoriser un contenu complémentaire dans une page, en attirant l’attention de l’usager sans perturber la lecture principale.
summary: Ce contenu décrit le composant Mise en avant utilisé pour signaler une information complémentaire au sein d’un contenu éditorial. Il précise ses cas d’usage, le distingue de la mise en exergue et des alertes, et recommande de limiter son usage à une ou deux occurrences par page. Des règles éditoriales simples sont proposées pour garantir lisibilité et efficacité. Ce guide s’adresse aux concepteurs de contenus et interfaces souhaitant structurer l’information de manière claire et hiérarchisée.
mesh:
  - component/quote
  - component/highlight
---

## Mise en avant

La mise en avant est un élément éditorial permettant de mettre en forme du contenu dans une page.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=callout--callout}

### Quand utiliser ce composant ?

Utiliser la mise en avant pour mettre l’accent sur une information complémentaire au contenu principal.

Elle permet une distinction rapide et facile par l’usager.

> [!WARNING]
> Bien différencier la mise en avant de la mise en exergue.
> La [mise en exergue](../../../highlight/_part/doc/index.md) est utilisée pour distinguer une information importante au sein du contenu principal d’une page.

### Comment utiliser ce composant ?

- **Insérer la mise en avant** au sein d’un contenu éditorial.
- **Prioriser les informations que vous souhaitez valoriser** afin d’utiliser une ou deux mises en avant maximum par page. Plus leur nombre est important, moins elles attireront l’œil de l’usager.
- **Adapter l’usage de la mise en avant à l’information que vous souhaitez relayée**. Par exemple, les messages d’erreur ou de confirmation ne sont pas considérés comme des mises en avant mais bien des [alertes](../../../alert/_part/doc/index.md).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/use/do-1.png)

Utiliser la mise en avant pour valoriser une information importante.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](./_asset/use/dont-1.png)

Ne pas utiliser la mise en avant pour indiquer une erreur, par exemple.

:::

::::

### Règles éditoriales

- **Présenter l’information de façon synthétique** afin qu’elle soit facilement lue et comprise de l’usager.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design de la mise en avant
shortTitle: Design de la mise en avant
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Mise en avant.
shortDescription: Mettre en valeur une information secondaire.
keywords: mise en avant, contenu, composant éditorial, UX, design system, accessibilité, information, valorisation, page, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Mise en avant permet de valoriser un contenu complémentaire dans une page, en attirant l’attention de l’usager sans perturber la lecture principale.
summary: Ce contenu décrit le composant Mise en avant utilisé pour signaler une information complémentaire au sein d’un contenu éditorial. Il précise ses cas d’usage, le distingue de la mise en exergue et des alertes, et recommande de limiter son usage à une ou deux occurrences par page. Des règles éditoriales simples sont proposées pour garantir lisibilité et efficacité. Ce guide s’adresse aux concepteurs de contenus et interfaces souhaitant structurer l’information de manière claire et hiérarchisée.
mesh:
  - component/quote
  - component/highlight
---

## Mise en avant

La mise en avant est un élément éditorial permettant de mettre en forme du contenu dans une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie de la mise en avant](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Une icône]{add="pour aider à la compréhension du message"}

::dsfr-doc-pin[Un titre]

::dsfr-doc-pin[Une description]{required=true}

::dsfr-doc-pin[Un bouton pour inciter à l’action ou un lien pour naviguer vers un autre contenu]

::dsfr-doc-pin[Une bordure de couleur]{required=true}

:::

### Variations

La mise en avant ne propose aucune variation.

### Tailles

La largeur de la mise en avant s’adapte à la taille de son conteneur.

Toutefois, il est recommandé de ne pas excéder une largeur de 8 colonnes, s’agissant d’un composant à intégrer au sein de pages de contenu.

### États

La mise en avant n’est sujette à aucun changement d’état.

### Personnalisation

Les éléments fond et bordure de la mise en avant sont personnalisables et peuvent utiliser l’ensemble les couleurs illustratives.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](../_asset/custom/do-1.png)

Personnaliser la mise en avant avec l’ensemble des couleurs illustratives d’indice $main pour la bordure et $950 pour le fond.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas utiliser une couleur illustrative ou des indices autre que ceux autorisés.

:::

::::

:::fr-table[Titre du tableau]{valign=top multiline=true caption=false}
|  Éléments | Indice thème clair | Indice thème sombre |
|:-----|:-----|:-----|
| **Bordure `$border-default-blue-france`** | Indice **main**<br> exemple : `$green-emeraude-main-632` | Indice **main**<br> exemple : `$green-emeraude-main-632` |
| **Fond `$background-contrast-neutral`**| Indice **950**<br> exemple : `$green-emeraude-950` | Indice **100**<br> exemple : `$green-emeraude-100` |
:::

Par ailleurs, certains éléments sont optionnels et les icônes peuvent être changées - voir [la structure du composant](#mise-en-avant).


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code de la Mise en avant
shortTitle: Code de la Mise en avant
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Mise en avant.
shortDescription: Mettre en valeur une information secondaire.
keywords: mise en avant, contenu, composant éditorial, UX, design system, accessibilité, information, valorisation, page, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Mise en avant permet de valoriser un contenu complémentaire dans une page, en attirant l’attention de l’usager sans perturber la lecture principale.
summary: Ce contenu décrit le composant Mise en avant utilisé pour signaler une information complémentaire au sein d’un contenu éditorial. Il précise ses cas d’usage, le distingue de la mise en exergue et des alertes, et recommande de limiter son usage à une ou deux occurrences par page. Des règles éditoriales simples sont proposées pour garantir lisibilité et efficacité. Ce guide s’adresse aux concepteurs de contenus et interfaces souhaitant structurer l’information de manière claire et hiérarchisée.
mesh:
  - component/quote
  - component/highlight
---

## Mise en avant

La mise en avant est un élément éditorial permettant de mettre en forme du contenu dans une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Mise en avant** permet de mettre en évidence des informations importantes. Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

1. Un conteneur principal sous la balise `<div>` :
    - Doit avoir la classe `fr-callout`.
    - Peut avoir une classe `fr-icon-NOM-ICONE` pour ajouter une icône avant le titre.
2. Un titre pour la mise en avant :
    - Représenté par un élément `<hx>`, suivant le niveau d'entête voulu, avec la classe `fr-callout__title`.
3. Une zone de contenu pour le texte de la mise en avant :
    - Représentée par un élément `<p>` avec la classe `fr-callout__text`.
4. D'autres éléments facultatifs comme un lien ou un bouton.

**Exemple de structure HTML**

```HTML
<div class="fr-callout">
  <h3 class="fr-callout__title">Titre de la mise en avant</h3>
  <p class="fr-callout__text">Contenu de la mise en avant.</p>
  <button type="button" class="fr-btn">Libellé bouton</button>
</div>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------| ---------|
| Core       | Oui         |          |
| Callout    | Oui         |          |
| Button     | Non         | Uniquement si ajout d'un bouton à l'intérieur |
| Utility    | Non         | Uniquement pour l'ajout d'icône |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/callout/callout.min.css" rel="stylesheet">
```

#### Variantes de style

- **Ajout d'icône** : Le composant Mise en avant peut intégrer une icône, il suffit pour cela d'ajouter la classe `fr-icon-NOM-ICON` au même niveau que la classe `fr-callout`.
- **Accentuation** : Le composant est accentuable, permettant le changement de la couleur de fond et de la bordure latérale. Pour cela, ajouter la classe `fr-callout-NOM-COULEUR` au même niveau que la classe `fr-callout`.

**Exemple de variante de style**

```HTML
<div class="fr-callout fr-callout--green-emeraude">
```

### JavaScript

Le composant Mise en avant **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+callout+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de la Mise en avant
shortTitle: Accessibilité de la Mise en avant
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Mise en avant.
shortDescription: Mettre en valeur une information secondaire.
keywords: mise en avant, contenu, composant éditorial, UX, design system, accessibilité, information, valorisation, page, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Mise en avant permet de valoriser un contenu complémentaire dans une page, en attirant l’attention de l’usager sans perturber la lecture principale.
summary: Ce contenu décrit le composant Mise en avant utilisé pour signaler une information complémentaire au sein d’un contenu éditorial. Il précise ses cas d’usage, le distingue de la mise en exergue et des alertes, et recommande de limiter son usage à une ou deux occurrences par page. Des règles éditoriales simples sont proposées pour garantir lisibilité et efficacité. Ce guide s’adresse aux concepteurs de contenus et interfaces souhaitant structurer l’information de manière claire et hiérarchisée.
mesh:
  - component/quote
  - component/highlight
---

## Mise en avant

La mise en avant est un élément éditorial permettant de mettre en forme du contenu dans une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Mise en avant** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

#### Structuration

Il n’y a pas de sémantique spécifique associée à ce composant. La mise en avant n’est donc pas restituée par les lecteurs d’écran, seul son contenu l’est.

L'icône et la bordure sont une mise en avant visuelle et décorative du contenu. **L’information doit être portée uniquement par le texte.**

- Pour insister sur la mise en avant et permettre aux personnes aveugles d’y accéder rapidement, ajouter un titre.
- Le niveau de titre dépend du contexte de la page et ne sera pas toujours un `<h3>`.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![Mise en exergue utilisée pour une citation](../_asset/accessibility/dont-1.png)

Ne pas utiliser la mise en exergue pour une citation.

:::

::::

### Contrastes de couleurs

Par défaut, le texte du composant est suffisamment contrasté avec le fond en thème clair et en thème sombre.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Mise en avant.

---

### Critères RGAA applicables

- **Couleurs** : 3.2
- **Scripts&nbsp;:** 7.1, 7.3
- **Éléments obligatoires&nbsp;:** 8.9
- **Structuration&nbsp;:** 9.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/callout/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Mise en avant - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/component/callout/callout.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../dist/componen...
```

(Truncated for brevity. See source file for full HTML)
