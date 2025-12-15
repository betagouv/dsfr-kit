# DSFR Skiplink Component

*Generated from local node_modules*

## Presentation

---
title: Liens d'évitement
shortTitle: Liens d'évitement
titleId: Skiplink
description: Présentation du composant Liens d’évitement permettant aux usagers utilisant un clavier ou un lecteur d’écran d’accéder rapidement aux zones principales d’une page.
shortDescription: Accéder rapidement au contenu avec le clavier.
keywords: lien d’évitement, accessibilité, navigation clavier, lecteur d’écran, UX, interface, design system, contenu, header, composant
cover: ./_asset/cover/cover.png
excerpt: Le lien d’évitement est un composant essentiel à l’accessibilité. Il permet aux usagers de naviguer directement vers les zones clés d’une page, sans passer par tous les éléments précédents.
summary: Ce document présente le composant Lien d’évitement, un outil fondamental pour l’accessibilité numérique. Il explique pourquoi son intégration est obligatoire, comment l’utiliser correctement en début de page, et avec quels types de liens. Il précise également les règles d’affichage, de contenu et de quantité, pour en garantir l’efficacité. Ce guide s’adresse aux développeurs et designers soucieux d’offrir une navigation fluide aux usagers naviguant au clavier ou via un lecteur d’écran.
mesh:
  - component/link

---

## Liens d'évitement

Les liens d’évitement sont un système de navigation secondaire permettant à l’usager naviguant au clavier, ou équipé d’un lecteur d'écran, d’accéder plus rapidement à des zones précises de la page.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=skiplink--skiplink}

*Appuyez sur la touche tab pour faire apparaître les liens d'évitement.*

### Quand utiliser ce composant ?

**Intégrer des liens d’évitement est une obligation** pour l’ensemble des sites.

Ils garantissent la navigation au clavier ou par un lecteur d’écran et aident les usagers à accéder rapidement à des fonctionnalités importantes (contenu, menu, recherche, pied de page etc.).

### Comment utiliser ce composant ?

- **Placer systématiquement les liens d’évitement en tout début de page.** Ils doivent figurer parmi les premiers éléments accessibles au clavier.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Positionner les liens d’évitement au dessus du header.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas positionner les liens d’évitement ailleurs qu’au dessus du header.

:::

::::

- **Masquer le composant par défaut**. Il apparaît en haut de page uniquement lorsqu’un de ses liens reçoit le focus (navigation clavier).
- **Proposer uniquement des liens simples** au sein du composant.

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/use/dont-2.png)

Ne pas proposer des liens d’évitement avec icônes.

:::

- **Uniformiser le contenu, la position et la forme des liens d’évitement** à travers l’ensemble du site.
- **Limiter le nombre de liens d’évitement proposés** afin d’en garantir l’efficacité.

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](./_asset/use/dont-3.png)

Ne pas proposer un nombre trop important de liens d’évitement.

- **Choisir les liens affichés en fonction des éléments clés présents dans le site**. Le lien minimum est “Accéder au contenu”, les autres liens doivent être choisis au cas par cas, en fonction des fonctionnalités/zones clés.

### Règles éditoriales

- **Privilégier des liens courts et explicites** garantissant la compréhension de l’usager.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design des Liens d'évitement
shortTitle: Design des Liens d'évitement
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Liens d'évitement.
shortDescription: Accéder rapidement au contenu avec le clavier.
keywords: lien d’évitement, accessibilité, navigation clavier, lecteur d’écran, UX, interface, design system, contenu, header, composant
cover: ../_asset/cover/cover.png
excerpt: Le lien d’évitement est un composant essentiel à l’accessibilité. Il permet aux usagers de naviguer directement vers les zones clés d’une page, sans passer par tous les éléments précédents.
summary: Ce document présente le composant Lien d’évitement, un outil fondamental pour l’accessibilité numérique. Il explique pourquoi son intégration est obligatoire, comment l’utiliser correctement en début de page, et avec quels types de liens. Il précise également les règles d’affichage, de contenu et de quantité, pour en garantir l’efficacité. Ce guide s’adresse aux développeurs et designers soucieux d’offrir une navigation fluide aux usagers naviguant au clavier ou via un lecteur d’écran.
mesh:
  - component/link
---

## Liens d'évitement

Les liens d’évitement sont un système de navigation secondaire permettant à l’usager naviguant au clavier, ou équipé d’un lecteur d'écran, d’accéder plus rapidement à des zones précises de la page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie des liens d'évitement](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un ou plusieurs liens simples]{required=true}

::dsfr-doc-pin[Un fond gris]{required=true}

:::

### Variations

Les liens d’évitement ne propose aucune variation.

### Tailles

La largeur des liens d’évitement s’adapte à leur contenu, tout en étant dépendante de la taille du conteneur principal de la page.

### États

**Etat au focus**

L’état au focus correspond au comportement constaté par l’usager lorsqu’il sélectionne un lien via la navigation au clavier.

### Personnalisation

Les liens d’évitement ne sont pas personnalisables.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur de fond des liens d’évitement.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code des Liens d'évitement
shortTitle: Code des Liens d'évitement
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Liens d'évitement.
shortDescription: Accéder rapidement au contenu avec le clavier.
keywords: lien d’évitement, accessibilité, navigation clavier, lecteur d’écran, UX, interface, design system, contenu, header, composant
cover: ../_asset/cover/cover.png
excerpt: Le lien d’évitement est un composant essentiel à l’accessibilité. Il permet aux usagers de naviguer directement vers les zones clés d’une page, sans passer par tous les éléments précédents.
summary: Ce document présente le composant Lien d’évitement, un outil fondamental pour l’accessibilité numérique. Il explique pourquoi son intégration est obligatoire, comment l’utiliser correctement en début de page, et avec quels types de liens. Il précise également les règles d’affichage, de contenu et de quantité, pour en garantir l’efficacité. Ce guide s’adresse aux développeurs et designers soucieux d’offrir une navigation fluide aux usagers naviguant au clavier ou via un lecteur d’écran.
mesh:
  - component/link
---

## Liens d'évitement

Les liens d’évitement sont un système de navigation secondaire permettant à l’usager naviguant au clavier, ou équipé d’un lecteur d'écran, d’accéder plus rapidement à des zones précises de la page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Liens d'évitement** permet aux utilisateurs de naviguer rapidement vers les sections principales de la page.

**Toujours placé en haut de la page**, sa structure est la suivante :

- Le conteneur des liens d'évitement est un élément HTML `<div>` défini par la classe `fr-skiplinks`.
- Les liens d'évitement sont entourés par un élément HTML `<nav>` défini par la classe `fr-container` avec le rôle `navigation` et comportant un attribut `aria-label` dont la valeur est "Accès rapide".
- La liste des liens d'évitement est un élément HTML `<ul>` défini par la classe `fr-skiplinks__list`.
- Chaque élément `<li>` de la liste contient :
  - Un lien d'évitement, un élément HTML `<a>` défini par la classe `fr-link`.

> [!WARNING]
> Les liens d'évitement pointent vers des ancres (`#intitulé`), qui doivent être présentes dans la page.
> Par exemple, Le lien `<a class="fr-link" href="#content">Contenu</a>` ne peut fonctionner que si un élément avec l’id “content” est présent dans la page (comme `<main id=”content”>`), à l’endroit souhaité.

**Exemple de structure HTML**

```HTML
<div class="fr-skiplinks">
    <nav role="navigation" aria-label="Accès rapide" class="fr-container">
        <ul class="fr-skiplinks__list">
            <li>
                <a class="fr-link" href="#content">Contenu</a>
            </li>
            <li>
                <a class="fr-link" href="#header-navigation">Menu</a>
            </li>
            <li>
                <a class="fr-link" href="#header-search">Recherche</a>
            </li>
            <li>
                <a class="fr-link" href="#footer">Pied de page</a>
            </li>
        </ul>
    </nav>
</div>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top scroll=false}

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Link       | Oui         |
| Skiplink   | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/link/link.min.css" rel="stylesheet">
<link href="dist/component/skiplink/skiplink.min.css" rel="stylesheet">
```

---

### JavaScript

Le composant Liens d'évitement **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+skiplink+)


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité des Liens d'évitement
shortTitle: Accessibilité des Liens d'évitement
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Liens d'évitement.
shortDescription: Accéder rapidement au contenu avec le clavier.
keywords: lien d’évitement, accessibilité, navigation clavier, lecteur d’écran, UX, interface, design system, contenu, header, composant
cover: ../_asset/cover/cover.png
excerpt: Le lien d’évitement est un composant essentiel à l’accessibilité. Il permet aux usagers de naviguer directement vers les zones clés d’une page, sans passer par tous les éléments précédents.
summary: Ce document présente le composant Lien d’évitement, un outil fondamental pour l’accessibilité numérique. Il explique pourquoi son intégration est obligatoire, comment l’utiliser correctement en début de page, et avec quels types de liens. Il précise également les règles d’affichage, de contenu et de quantité, pour en garantir l’efficacité. Ce guide s’adresse aux développeurs et designers soucieux d’offrir une navigation fluide aux usagers naviguant au clavier ou via un lecteur d’écran.
mesh:
  - component/link
---

## Liens d'évitement

Les liens d’évitement sont un système de navigation secondaire permettant à l’usager naviguant au clavier, ou équipé d’un lecteur d'écran, d’accéder plus rapidement à des zones précises de la page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Liens d'évitement** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

> [!NOTE]
> Le RGAA demande qu’**au moins un lien d’accès au contenu principal** soit présent et fonctionnel sur chaque page web sauf cas particulier (site constitué d’une seule page ou accès direct au contenu principal).
>
>Cela permet aux personnes handicapées motrices d’éviter les blocs répétés (ex. menu, fil d’Ariane). Les liens d’évitement ou d’accès rapide sont également utilisés dans une moindre mesure par les personnes aveugles.

#### Structuration

- Les liens d’évitement / accès rapide doivent être à l’intérieur d’un élément `<nav role="navigation>`.
- L’attribut `aria-label="Accès rapide"` est utilisé pour nommer et donner un contexte explicite à la navigation.
- S’il y a plusieurs liens&nbsp;:
  - les liens doivent être structurés avec une liste `<ul><li>`,
  - le lien d’accès «&nbsp;Contenu&nbsp;» est le premier de la liste.

#### Présentation

Les liens d’évitement sont positionnés hors écran et apparaissent à la navigation au clavier lors de la prise de focus.

#### Contrastes de couleurs

Le composant **Liens d'évitement** est suffisamment contrasté en thème clair (ratio de 12,8:1) et en thème sombre (ratio de 4,9:1).

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant.

---

### Critères RGAA applicables
- **Couleurs** : 3.2
- **Liens** : 6.1, 6.2
- **Structuration** : 9.2, 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation** : 12.2, 12.6, 12.8, 12.9
- **Consultation** : 13.9, 13.11

---

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/skiplink/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Liens d&#39;évitement - Système de design</title>
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
    <link href="../../../dist/component/logo/logo.main.css" rel="stylesheet">
    <link href="../../../dist/component/skiplink/skiplink.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/component/navigation/navigation.main.css" rel="stylesheet">
    ...
```

(Truncated for brevity. See source file for full HTML)
