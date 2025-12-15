# DSFR Summary Component

*Generated from local node_modules*

## Presentation

---
title: Sommaire
shortTitle: Sommaire
titleId: Summary
description: Présentation du composant Sommaire permettant à l’usager de naviguer facilement entre les sections d’une page longue à l’aide de liens ancrés.
shortDescription: Navigation entre les sections d’une page
keywords: sommaire, navigation, ancre, contenu long, DSFR, accessibilité, design système, interface
cover: ./_asset/cover/cover.png
excerpt: Le composant Sommaire affiche des liens ancrés vers les différentes sections d’une page, facilitant la lecture et l’accès rapide à l’information pour l’usager.
summary: Ce composant permet d’améliorer l’expérience utilisateur dans les pages à forte densité de contenu. Il affiche en haut de page une liste d’ancres reprenant fidèlement les titres des sections éditoriales, dans un bloc distinct visuellement. Le sommaire n’est pas sticky, ne se personnalise pas, et garantit une navigation fluide et cohérente au sein d’un même contenu.
mesh:
  - component/breadcrumb
  - component/sidemenu
---

## Sommaire

Le sommaire est un système de navigation secondaire présentant une liste d’ancres placée au-dessus du contenu correspondant.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=summary--summary}

### Quand utiliser ce composant ?

Proposer le sommaire pour permettre à l’usager d’avoir un aperçu du contenu consulté et de naviguer entre les différentes sections d’une page.

Il est recommandé d’utiliser le sommaire dans une page de contenu longue ou à forte densité.

> [!WARNING]
> Bien différencier le sommaire du menu latéral. Le [menu latéral](../../../sidemenu/_part/doc/index.md) est utilisé pour naviguer entre différentes pages d’une rubrique ou d’un même thème. Il ne présente pas des ancres mais des liens.

### Comment utiliser ce composant ?

- **Placer le sommaire en haut de page**, juste avant le corps de texte. Si un chapô est présent en début de page, le sommaire s’affiche entre le chapô et le contenu éditorial.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Placer le sommaire en haut de page, avant le corps de texte.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas intégrer le sommaire au sein du contenu éditorial lui-même.

:::

::::

- **Positionner le titre du sommaire au-dessus de la liste d’ancres**.
- **Reprendre les titres de section de la page (H1 et H2) sous forme d’ancre** vers le contenu correspondant. Au clic sur un lien, l’utilisateur est redirigé dans la page, au niveau de la section cherchée.
- **Conserver le fond de couleur du sommaire,** destiné à le séparer visuellement du contenu.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-2.png)

Garantir une distinction visuelle entre sommaire et le contenu éditorial.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-2.png)

Ne pas supprimer le fond de couleur, au risque d’altérer la bonne compréhension de l’usager.

:::

::::

- **Garantir le positionnement du sommaire en haut de page**. Il ne s’agit pas d’un élément fixé qui reste visible au défilement de la page.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-3.png)

Conserver le sommaire en haut de page.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-3.png)

Ne pas rendre le sommaire sticky.

:::

::::

### Règles éditoriales

- **Reprendre le texte exact de chaque titre de section** comme libellé des ancres du sommaire.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-1.png)

Nommer les ancres du sommaire comme les titres des sections de la page vers lesquelles elles renvoient.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-1.png)

Ne pas proposer des titres différents entre les ancres du sommaire et les sections de la page.

:::

::::


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design du Sommaire
shortTitle: Design du Sommaire
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Sommaire.
shortDescription: Navigation entre les sections d’une page
keywords: sommaire, navigation, ancre, contenu long, DSFR, accessibilité, design système, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Sommaire affiche des liens ancrés vers les différentes sections d’une page, facilitant la lecture et l’accès rapide à l’information pour l’usager.
summary: Ce composant permet d’améliorer l’expérience utilisateur dans les pages à forte densité de contenu. Il affiche en haut de page une liste d’ancres reprenant fidèlement les titres des sections éditoriales, dans un bloc distinct visuellement. Le sommaire n’est pas sticky, ne se personnalise pas, et garantit une navigation fluide et cohérente au sein d’un même contenu.
mesh:
  - component/breadcrumb
  - component/sidemenu
---

## Sommaire

Le sommaire est un système de navigation secondaire présentant une liste d’ancres placée au-dessus du contenu correspondant.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie du bouton](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un titre “Sommaire”]{required=true}

::dsfr-doc-pin[Un numéro d’ancre]{required=true}

::dsfr-doc-pin[Des libellés d’ancres]{required=true}

::dsfr-doc-pin[Un fond gris]{required=true}

:::

### Variations

Le sommaire ne propose aucune variation.

### Tailles

La largeur du sommaire s’adapte à la taille de son conteneur.

Toutefois, il est recommandé de ne pas excéder une largeur de 8 colonnes, s’agissant d’un composant à intégrer au sein de pages de contenu riche.

### États

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole une ancre du sommaire avec sa souris.

### Personnalisation

Le sommaire n’est pas personnalisable.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Utiliser uniquement le fond de couleur grise.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur de fond du sommaire.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-2.png)

Conserver l’apparence des ancres en l’état.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas personnaliser la couleur ou la typographie des ancres.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code du Sommaire
shortTitle: Code du Sommaire
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Sommaire.
shortDescription: Navigation entre les sections d’une page
keywords: sommaire, navigation, ancre, contenu long, DSFR, accessibilité, design système, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Sommaire affiche des liens ancrés vers les différentes sections d’une page, facilitant la lecture et l’accès rapide à l’information pour l’usager.
summary: Ce composant permet d’améliorer l’expérience utilisateur dans les pages à forte densité de contenu. Il affiche en haut de page une liste d’ancres reprenant fidèlement les titres des sections éditoriales, dans un bloc distinct visuellement. Le sommaire n’est pas sticky, ne se personnalise pas, et garantit une navigation fluide et cohérente au sein d’un même contenu.
mesh:
  - component/breadcrumb
  - component/sidemenu
---

## Sommaire

Le sommaire est un système de navigation secondaire présentant une liste d’ancres placée au-dessus du contenu correspondant.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Sommaire** est un élément interactif permettant de naviguer entre différentes sections de contenu.

Sa structure est la suivante :

- Le conteneur du sommaire est une balise `<div>` avec la classe `fr-summary` et le rôle `navigation`.
  - Le sommaire dispose d'un attribut `aria-labelledby` défini sur l'ID du titre du sommaire.
- Le titre du sommaire, obligatoire, est défini par la classe `fr-summary__title`.
- Les éléments de la liste d'ancre, obligatoire, sont contenus dans une balise `<ol>`.
  - Chaque élément de la liste `<li>` contient un lien `<a>` défini par la classe `fr-summary__link`.

**Exemple de structure HTML**

```HTML
<nav class="fr-summary" role="navigation" aria-labelledby="fr-summary-title">
    <h2 class="fr-summary__title" id="fr-summary-title">Sommaire</h2>
    <ol>
        <li>
            <a class="fr-summary__link" id="summary-link-1" href="#anchor-1">Libellé du lien 1</a>
            <ol>
                <li>
                    <a class="fr-summary__link" id="summary-link-1-1" href="#anchor-1.1">Libellé du lien 1.1</a>
                </li>
                <li>
                    <a class="fr-summary__link" id="summary-link-1-2" href="#anchor-1.2">Libellé du lien 1.2</a>
                </li>
                <li>
                    <a class="fr-summary__link" id="summary-link-1-3" href="#anchor-1.3">Libellé du lien 1.3</a>
                </li>
            </ol>
        </li>
        <li>
            <a class="fr-summary__link" id="summary-link-2" href="#anchor-2">Libellé du lien 2</a>
        </li>
    </ol>
</nav>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top scroll=false}

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Summary    | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/summary/summary.min.css" rel="stylesheet">
```

---

### JavaScript

Le composant Sommaire **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+summary+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Sommaire
shortTitle: Accessibilité du Sommaire
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Sommaire.
shortDescription: Navigation entre les sections d’une page
keywords: sommaire, navigation, ancre, contenu long, DSFR, accessibilité, design système, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Sommaire affiche des liens ancrés vers les différentes sections d’une page, facilitant la lecture et l’accès rapide à l’information pour l’usager.
summary: Ce composant permet d’améliorer l’expérience utilisateur dans les pages à forte densité de contenu. Il affiche en haut de page une liste d’ancres reprenant fidèlement les titres des sections éditoriales, dans un bloc distinct visuellement. Le sommaire n’est pas sticky, ne se personnalise pas, et garantit une navigation fluide et cohérente au sein d’un même contenu.
mesh:
  - component/breadcrumb
  - component/sidemenu
---

## Sommaire

Le sommaire est un système de navigation secondaire présentant une liste d’ancres placée au-dessus du contenu correspondant.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Sommaire** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur le sommaire&nbsp;:

- `Tab` : place le focus sur le prochain élément focalisable.
- `Maj + Tab` : lace le focus sur l'élément focalisable précédent.

### Règles d’accessibilité

- Le sommaire est un système de navigation secondaire. Il doit être structuré dans un élément `nav role="navigation"`.
- Le conteneur principal du menu latéral possède un attribut `aria-labelledby` défini sur l’ID du titre du sommaire afin de nommer et donner un contexte explicite à la navigation.
- Les éléments du sommaire sont structurés dans une liste avec les éléments `ul` et `li`.

### Contrastes de couleurs

Le composant Sommaire est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Menu latéral.

---

### Critères RGAA applicables

- **Couleurs** : 3.2
- **Liens** : 6.1, 6.2
- **Structuration** : 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.3,10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation** : 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Élément nav](https://html.spec.whatwg.org/#the-nav-element)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/summary/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Sommaire - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/component/summary/summary.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../dist/component/sum...
```

(Truncated for brevity. See source file for full HTML)
