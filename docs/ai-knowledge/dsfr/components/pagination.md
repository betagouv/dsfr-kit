# DSFR Pagination Component

*Generated from local node_modules*

## Presentation

---
title: Pagination
shortTitle: Pagination
titleId: Pagination
description: Présentation du composant Pagination permettant à l’usager de naviguer facilement entre les pages d’une liste d’éléments trop longue pour être affichée en une seule fois.
shortDescription: Navigation entre plusieurs pages d’une liste
keywords: pagination, navigation, pages, liste, interface, design système, DSFR, accessibilité
cover: ./_asset/cover/cover.png
excerpt: Le composant Pagination permet à l’usager de parcourir les différentes pages d’une liste d’éléments, avec des repères clairs, une troncature automatique et des actions de navigation simples.
summary: Ce composant permet de diviser une liste importante d’éléments en plusieurs pages pour améliorer la lisibilité et l’expérience de navigation. Il intègre des repères de position, des boutons d’accès direct et une gestion responsive adaptée. Sa structure fixe garantit la cohérence et l’accessibilité dans l’ensemble des parcours utilisateurs tout en optimisant le référencement du contenu.
mesh:
  - component/card
---

## Pagination

La pagination est un système de navigation qui permet à l’usager de naviguer entre les différentes pages d’une liste d’éléments.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=pagination--pagination}

### Quand utiliser ce composant ?

**Utiliser la pagination lorsqu’une liste d'éléments est trop importante pour être affichée sur une seule page** (plus de 20 éléments). Il est dès lors préférable de la diviser en plusieurs pages, afin de simplifier le parcours de l’usager au sein de cette liste.

Privilégier la pagination au rechargement automatique ou à un bouton “Voir plus” permet également un meilleur référencement de votre site.

### Comment utiliser ce composant ?

- **Placer systématiquement la pagination en bas de la liste**.
- **Mettre clairement en avant la page sur laquelle l’usager se trouve** grâce à l’état courant disponible.
- **Indiquer la dernière page de la liste comme dernier élément de la pagination** afin que l’usager connaisse le nombre total de pages.
- **Désactiver le lien “Précédent”** lorsque l’usager se trouve sur la première page et le lien “Suivant” lorsqu’il est sur la dernière page.
- **Permettre un accès rapide à la première et dernière page** lorsque celles-ci ne sont pas actives (soit avec les boutons “I<“ et “>I”, soit avec la page “1” et la dernière page).
- **Limiter de 5 à 7 le nombre de pages affichées par défaut dans la pagination**. Au-delà, masquer les autres pages par un système de troncature. La troncature est matérialisée par l’icône “…” qui s’affiche uniquement quand le nombre total de pages de la liste est supérieur à la limite fixée.
- **Envisager la double troncature** lorsque la page consultée est séparée par 5 pages ou plus de la première et de la dernière page.
- **Renvoyer l’usager en haut de page** lorsqu’il change de page à l’aide de la pagination.
- **Conserver le même fonctionnel de pagination** à travers l’intégralité de votre site.

### Règles éditoriales

La pagination n’est régie par aucune règle éditoriale spécifique.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design de la Pagination
shortTitle: Design de la Pagination
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Pagination.
shortDescription: Navigation entre plusieurs pages d’une liste
keywords: pagination, navigation, pages, liste, interface, design système, DSFR, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Le composant Pagination permet à l’usager de parcourir les différentes pages d’une liste d’éléments, avec des repères clairs, une troncature automatique et des actions de navigation simples.
summary: Ce composant permet de diviser une liste importante d’éléments en plusieurs pages pour améliorer la lisibilité et l’expérience de navigation. Il intègre des repères de position, des boutons d’accès direct et une gestion responsive adaptée. Sa structure fixe garantit la cohérence et l’accessibilité dans l’ensemble des parcours utilisateurs tout en optimisant le référencement du contenu.
mesh:
  - component/card
---

## Pagination

La pagination est un système de navigation qui permet à l’usager de naviguer entre les différentes pages d’une liste d’éléments.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie du bouton](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un bouton tertiaire avec icône seule permettant de se rendre directement à la première ou à la dernière page]

::dsfr-doc-pin[Un bouton tertiaire avec icône permettant de revenir à la page précédente ou de passer à la page suivante]{required=true}

::dsfr-doc-pin[Un bouton primaire indiquant la page active]{required=true}

::dsfr-doc-pin[Des boutons tertiaires de numéros de page]{required=true}

::dsfr-doc-pin[Un bouton troncature]{add='sous forme de points de suspension pour éviter d’afficher tous les numéros de page lorsqu’ils sont nombreux'}

:::

### Variations

**Responsive**

::dsfr-doc-storybook{storyId=pagination--pagination}

- Conserver le même fonctionnel sur les différentes tailles d'écran.
- Cacher certains numéros de page pour alléger l'affichage sur les écrans mobiles.
- Limiter le nombre de pages visibles pour pouvoir idéalement afficher l’ensemble des éléments de la pagination sur une seule ligne.
- Privilégier les icônes “<“ et “>” pour les actions “Précédent” et “Suivant”.

### Tailles

La largeur de la pagination s’adapte à la taille de son conteneur.

### États

**État désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec un lien.

::dsfr-doc-storybook{storyId=pagination--last-page}

- Appliquer cet état aux liens “Précédent” et "première page" lorsque vous êtes sur la première page et sur les liens “Suivant” et "dernière page" lorsque vous êtes sur la dernière page.

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole un des liens avec sa souris.

**État courant**

L’état courant permet d’indiquer à l’usager la page active, soit celle sur laquelle il se situe.

::dsfr-doc-storybook{storyId=pagination--pagination}

### Personnalisation

La pagination n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](#pagination).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Mettre en évidence la page active en appliquant un fond bleu derrière le numéro de page.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur du fond qui indique la page active.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code de la Pagination
shortTitle: Code de la Pagination
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Pagination.
shortDescription: Navigation entre plusieurs pages d’une liste
keywords: pagination, navigation, pages, liste, interface, design système, DSFR, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Le composant Pagination permet à l’usager de parcourir les différentes pages d’une liste d’éléments, avec des repères clairs, une troncature automatique et des actions de navigation simples.
summary: Ce composant permet de diviser une liste importante d’éléments en plusieurs pages pour améliorer la lisibilité et l’expérience de navigation. Il intègre des repères de position, des boutons d’accès direct et une gestion responsive adaptée. Sa structure fixe garantit la cohérence et l’accessibilité dans l’ensemble des parcours utilisateurs tout en optimisant le référencement du contenu.
mesh:
  - component/card
---

## Pagination

La pagination est un système de navigation qui permet à l’usager de naviguer entre les différentes pages d’une liste d’éléments.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Pagination** permet aux utilisateurs de naviguer entre les différentes pages d’une liste d'éléments.

Sa structure comprend les éléments suivants :

1. Un conteneur principal sous la balise `<nav>` :
    - Doit avoir l’attribut `role="navigation"` pour indiquer sa fonction.
    - Utilise l’attribut `aria-label` pour fournir une description contextuelle, par exemple `aria-label="pagination"`.
2. Une liste `<ul>` avec la classe `fr-pagination__list`, contenant les éléments de pagination :
    - Chaque segment est un élément `<li>` :
      - Les segments avec des liens utilisent une balise `<a>` avec la classe `fr-pagination__link` et disposent d'un attribut `title` de façon à ce qu’ils indiquent explicitement leur fonction.
      - Le lien de la page actuelle utilise l'attribut `aria-current="page"` pour indiquer la page courante.
      - Les liens vers la première page ou la dernière page sont définis par les classes `fr-pagination__link--first` et `fr-pagination__link--last`.
      - Les liens vers la page précédente ou la page suivante sont définis par les classes `fr-pagination__link--prev` et `fr-pagination__link--next`, ils disposent d'un libellé caché par défaut qui peut être affiché avec l'utilisation de la classe `fr-pagination__link--label` ou uniquement à partir du breakpoint LG avec la classe `fr-pagination__link--lg-label`.
      - L'utilisation des classes utilitaires `fr-hidden` et `fr-unhidden-lg` peut permettre de n'afficher qu'un nombre réduit de résultats en dessous du breakpoint LG dans un soucis de gain d'espace.

**Exemple de structure HTML**

```HTML
<nav role="navigation" class="fr-pagination" aria-label="pagination">
    <ul class="fr-pagination__list">
        <li>
            <a class="fr-pagination__link fr-pagination__link--first" title="Première page" aria-disabled="true" role="link">
                Première page
            </a>
        </li>
        <li>
            <a class="fr-pagination__link fr-pagination__link--prev fr-pagination__link--lg-label" title="Page précédente" aria-disabled="true" role="link">
                Page précédente
            </a>
        </li>
        <li>
            <a class="fr-pagination__link" aria-current="page" title="Page 1">
                1
            </a>
        </li>
        <li>
            <a class="fr-pagination__link" href="#" title="Page 2">
                2
            </a>
        </li>
        <li>
            <a class="fr-pagination__link fr-hidden fr-unhidden-lg" href="#" title="Page 3">
                3
            </a>
        </li>
        <li>
            <span class="fr-pagination__link fr-hidden fr-unhidden-lg">
                …
            </span>
        </li>
        <li>
            <a class="fr-pagination__link fr-hidden fr-unhidden-lg" href="#" title="Page 130">
                130
            </a>
        </li>
        <li>
            <a class="fr-pagination__link fr-hidden fr-unhidden-lg" href="#" title="Page 131">
                131
            </a>
        </li>
        <li>
            <a class="fr-pagination__link" href="#" title="Page 132">
                132
            </a>
        </li>
        <li>
            <a class="fr-pagination__link fr-pagination__link--next fr-pagination__link--lg-label" id="pagination-6519" href="#" title="Page suivante">
                Page suivante
            </a>
        </li>
        <li>
            <a class="fr-pagination__link fr-pagination__link--last" href="#" title="Dernière page">
                Dernière page
            </a>
        </li>
    </ul>
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
| Pagination | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/pagination/pagination.min.css" rel="stylesheet">
```

---

### JavaScript

Le composant Pagination **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+pagination+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de la Pagination
shortTitle: Accessibilité de la Pagination
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Pagination.
shortDescription: Navigation entre plusieurs pages d’une liste
keywords: pagination, navigation, pages, liste, interface, design système, DSFR, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Le composant Pagination permet à l’usager de parcourir les différentes pages d’une liste d’éléments, avec des repères clairs, une troncature automatique et des actions de navigation simples.
summary: Ce composant permet de diviser une liste importante d’éléments en plusieurs pages pour améliorer la lisibilité et l’expérience de navigation. Il intègre des repères de position, des boutons d’accès direct et une gestion responsive adaptée. Sa structure fixe garantit la cohérence et l’accessibilité dans l’ensemble des parcours utilisateurs tout en optimisant le référencement du contenu.
mesh:
  - component/card
---

## Pagination

La pagination est un système de navigation qui permet à l’usager de naviguer entre les différentes pages d’une liste d’éléments.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Pagination** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

#### Structuration

- La pagination est un système de navigation secondaire. Elle doit être structurée dans un élément `nav role="navigation"`.
- L’attribut `aria-label="pagination"` est utilisé pour donner un contexte explicite à la navigation.

Liens de la pagination&nbsp;:

- Les liens de la pagination sont structurés dans une liste `<ul><li>`.
- La page en cours dans la pagination est identifiée avec l’attribut `aria-current="page"` et n’est pas cliquable.
- Les liens (numéro de page) disposent d’un attribut `title` pour expliciter leur fonction.
- Les liens désactivés n’ont pas d’attribut `href` et possèdent les attributs `aria-disabled="true"` et `role="link"`.

#### Contrastes de couleurs

Le composant Pagination est suffisamment contrasté en thème clair et en thème sombre.

---

### Restitution par les lecteurs d’écran

#### Attribut `disabled`

L’attribut `disabled` est restitué différemment selon les lecteurs d’écran&nbsp;:

- VoiceOver macOS et iOS&nbsp;: «&nbsp;estompé&nbsp;»
- NVDA et JAWS&nbsp;: «&nbsp;non disponible&nbsp;»
- Narrateur et Talkback &nbsp;: «&nbsp;désactivé&nbsp;»

#### Attribut `aria-current`

L’attribut `aria-current="page"` est restitué différemment selon les lecteurs d’écran.

- VoiceOver macOS, Narrateur&nbsp;: «&nbsp;page actuelle&nbsp;»
- NVDA, JAWS&nbsp;: «&nbsp;page courante&nbsp;»
- Talkback, VoiceOver iOS&nbsp;: «&nbsp;page active&nbsp;»

À noter&nbsp;: VoiceOver iOS et Narrateur ne restituent pas `aria-current` sur un élément `a` sans attribut `href`.

La page courante est alors indiquée implicitement aux personnes aveugles car celle-ci n’est pas structurée dans un lien, contrairement aux autres pages.

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2, 3.3
- **Liens&nbsp;:** 6.1, 6.2
- **Scripts&nbsp;:** 7.1, 7.3
- **Structuration&nbsp;:** 9,2, 9.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation&nbsp;:** 12.2, 12.6, 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/pagination/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Pagination - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/component/pagination/pagination.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../dist/compo...
```

(Truncated for brevity. See source file for full HTML)
