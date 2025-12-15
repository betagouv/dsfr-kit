# DSFR Form Component

*Generated from local node_modules*

## Presentation

---
title: Formulaire
shortTitle: Formulaire
cover: ./_asset/cover/cover.png
description: Présentation du composant Formulaire permettant l'agencement des éléments de saisie de données et des messages d'état.
shortDescription: Gestion de l'agencement des éléments de formulaire.
keywords: formulaire, saisie, données, interaction, accessibilité, design système, DSFR
excerpt: Le formulaire est un composant essentiel pour la saisie de données dans une interface, permettant d'organiser les champs de saisie et les messages d'état de manière cohérente et accessible.
summary: Le formulaire est un composant d'interface qui organise les éléments de saisie de données et les messages d'état. Il est conçu pour faciliter l'interaction de l'usager avec l'interface, en respectant les principes d'accessibilité et de design du DSFR. Il permet de structurer les informations à saisir, d'afficher des messages d'erreur ou de succès, et de guider l'usager dans son parcours de saisie. Ce guide s'adresse aux concepteurs et développeurs souhaitant implémenter des formulaires conformes aux standards du DSFR et aux bonnes pratiques d'accessibilité.
titleId: Form
mesh:
  - component/radio
  - component/input
  - component/select
---

## Formulaire

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](demo/index.md)
- [Design](design/index.md)
- [Code](code/index.md)
- [Accessibilité](accessibility/index.md)

:::

Page en cours de création...


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design du Formulaire
cover: ../_asset/cover/cover.png
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Formulaire.
shortDescription: Gestion de l'agencement des éléments de formulaire.
keywords: formulaire, saisie, données, interaction, accessibilité, design système, DSFR
excerpt: Le formulaire est un composant essentiel pour la saisie de données dans une interface, permettant d'organiser les champs de saisie et les messages d'état de manière cohérente et accessible.
summary: Le formulaire est un composant d'interface qui organise les éléments de saisie de données et les messages d'état. Il est conçu pour faciliter l'interaction de l'usager avec l'interface, en respectant les principes d'accessibilité et de design du DSFR. Il permet de structurer les informations à saisir, d'afficher des messages d'erreur ou de succès, et de guider l'usager dans son parcours de saisie. Ce guide s'adresse aux concepteurs et développeurs souhaitant implémenter des formulaires conformes aux standards du DSFR et aux bonnes pratiques d'accessibilité.
mesh:
  - component/radio
  - component/input
  - component/select
---

## Formulaire

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

Page en cours de création...


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code du Formulaire
cover: ../_asset/cover/cover.png
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Formulaire.
shortDescription: Gestion de l'agencement des éléments de formulaire.
keywords: formulaire, saisie, données, interaction, accessibilité, design système, DSFR
excerpt: Le formulaire est un composant essentiel pour la saisie de données dans une interface, permettant d'organiser les champs de saisie et les messages d'état de manière cohérente et accessible.
summary: Le formulaire est un composant d'interface qui organise les éléments de saisie de données et les messages d'état. Il est conçu pour faciliter l'interaction de l'usager avec l'interface, en respectant les principes d'accessibilité et de design du DSFR. Il permet de structurer les informations à saisir, d'afficher des messages d'erreur ou de succès, et de guider l'usager dans son parcours de saisie. Ce guide s'adresse aux concepteurs et développeurs souhaitant implémenter des formulaires conformes aux standards du DSFR et aux bonnes pratiques d'accessibilité.
mesh:
  - component/radio
  - component/input
  - component/select
---

## Formulaires

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

Un **formulaire** permet de collecter des informations de l'utilisateur. Il est composé d'un ou plusieurs champs, et ces informations sont envoyées à un serveur au clic sur un bouton de soumission ou dynamiquement au changement de valeur d'un champ.

Le DSFR propose des styles pour structurer des ensembles de champs de formulaire, la gestion des erreurs, des messages d'aide et des messages de succès.

De la même manière que pour les champs de formulaire unitaires, des états d'erreur et succès ainsi que des messages d'erreur/succès/avertissement/information peuvent être ajoutés à un **ensemble d'éléments** de formulaire (fieldset).

La structure d'un ensemble de champs de formulaire, dans un `<form>` est la suivante :

- Un ensemble de champs de formulaire est défini par un élément `<fieldset>`.
  - Celui-ci doit contenir une légende `<legend>`, obligatoire.
  - Chaque champ de formulaire est contenu dans un élément `<div>` défini par la classe `fr-fieldset__element`. C'est ces éléments qui permettront d'agencer les champs et de gérer les espacements. Ces éléments peuvent être placés en ligne avec la classe `fr-fieldset__element--inline`.
  - Comme pour chaque champ de formulaire, le groupe de champs, représenté par un fieldset, peut contenir un message d'erreur/information/avertissement/succès via un bloc `fr-messages-group`.

**Exemple de structure de formulaire simple**

:::fr-accordion[Déplier pour voir le code]{id=formulaire-structure-simple}

```html
<form action="" method="post">
    <fieldset class="fr-fieldset" aria-labelledby="text-legend text-messages">
        <legend class="fr-fieldset__legend" id="text-legend">
            Légende pour l’ensemble des éléments
            <span class="fr-hint-text">Texte de description additionnel</span>
        </legend>
        <div class="fr-fieldset__element">
            <div class="fr-input-group">
                <label class="fr-label" for="text-1">
                    Libellé champ de saisie
                </label>
                <input class="fr-input" name="text-1" id="text-1" type="text">
            </div>
        </div>
        <div class="fr-fieldset__element">
            <div class="fr-input-group">
                <label class="fr-label" for="text-2">
                    Libellé champ de saisie
                </label>
                <input class="fr-input" name="text-2" id="text-2" type="text">
            </div>
        </div>
        <div class="fr-messages-group" id="text-messages" aria-live="polite">
        </div>
    </fieldset>

    <button class="fr-btn" type="submit">
        Enregistrer les informations
    </button>
</form>
```

:::

**Exemple de structure de formulaire en erreur**

:::fr-accordion[Déplier pour voir le code]{id=formulaire-erreur}

```html
<form action="" method="post">
    <fieldset class="fr-fieldset fr-fieldset--error" aria-labelledby="text-legend text-messages">
        <legend class="fr-fieldset__legend" id="text-legend">
            Légende pour l’ensemble des éléments
        </legend>
        <div class="fr-fieldset__element">
            <div class="fr-input-group">
                <label class="fr-label" for="text-1">
                    Libellé champ de saisie
                </label>
                <input class="fr-input" name="text-1" id="text-1" type="text">
            </div>
        </div>
        <div class="fr-fieldset__element">
            <div class="fr-input-group">
                <label class="fr-label" for="text-2">
                    Libellé champ de saisie
                </label>
                <input class="fr-input" name="text-2" id="text-2" type="text">
            </div>
        </div>
        <div class="fr-messages-group" id="text-messages" aria-live="polite">
            <p class="fr-message fr-message--error">Texte d’erreur obligatoire</p>
        </div>
    </fieldset>

    <button class="fr-btn" type="submit">
        Enregistrer les informations
    </button>
</form>
```

:::

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top scroll=false}

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Form       | Oui         |

:::

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
```

#### Variantes de fieldset-element

Les éléments de fieldset peuvent être disposés **en ligne** avec la classe `fr-fieldset__element--inline`.
Il est aussi possible de définir la disposition en ligne en desktop uniquement `fr-fieldset__element--inline@md` : Disposition en ligne à partir du breakpoint `md` - 48em (768px).

D'autres classes sont disponibles pour gérer la **taille des éléments**, notamment pour les champs de saisie :

- La classe `fr-fieldset__element--inline-grow` : La taille du champ s'adapte à la largeur restante.
- La classe `fr-fieldset__element--postal` : Taille d'un champ code postal (240px).
- La classe `fr-fieldset__element--number` : Taille d'un champ numéro de rue, jour, ou mois - 5 chiffres max (80px).
- La classe `fr-fieldset__element--year` : Taille d'un champ année (112px).

**Exemple de variantes de fieldset-element**

```html
<div class="fr-fieldset__element fr-fieldset__element--number">
    <!-- Champs numéro de rue -->
</div>
<div class="fr-fieldset__element fr-fieldset__element--inline fr-fieldset__element--inline-grow">
    <!-- Champs nom de rue sur le reste de la ligne -->
</div>
<div class="fr-fieldset__element fr-fieldset__element--postal">
    <!-- Champs code postal, à la ligne -->
</div>
<div class="fr-fieldset__element fr-fieldset__element--inline@md">
    <!-- Champs ville, en ligne en desktop et à la ligne en mobile -->
</div>
<div class="fr-fieldset__element fr-fieldset__element--year">
    <!-- Champs année de naissance -->
</div>
```

#### Variantes d'états

Les formulaires peuvent avoir différents états définis sur le fieldset :

- La classe `fr-fieldset--error` : Groupe de champs **en erreur**.
- La classe `fr-fieldset--success` : Groupe de champs **validé**.
- L'attribut `disabled` : Groupe de champs **désactivé**.

**Exemples de variantes d'états**

```html
<fieldset class="fr-fieldset fr-fieldset--error">
    <!-- Champs en erreur -->
</fieldset>
<fieldset class="fr-fieldset fr-fieldset--success">
    <!-- Champs validés -->
</fieldset>
```

#### Variantes de messages

Les groupes de champs peuvent contenir des messages d'erreur, d'information, d'avertissement ou de succès via un bloc `fr-messages-group`.
Ce bloc peut contenir un ou plusieurs messages, définis par la classe `fr-message` et une variante de type de message :

- La classe `fr-message--error` : Message d'**erreur**.
- La classe `fr-message--info` : Message d'**information**.
- La classe `fr-message--warning` : Message d'**avertissement**.
- La classe `fr-message--success` : Message de **succès**.

Dans le cas d'un groupe de champs en état d'erreur ou de succès, un message d'erreur ou de succès est obligatoire.

**Exemples de variantes de messages**

```html
<div class="fr-messages-group" id="text-messages" aria-live="polite">
    <p class="fr-message fr-message--error">Texte d’erreur obligatoire</p>
    <p class="fr-message fr-message--info">Texte d’information</p>
    <p class="fr-message fr-message--warning">Texte d’avertissement</p>
    <p class="fr-message fr-message--success">Texte de succès</p>
</div>
```

---

### JavaScript

Les formulaires **ne nécessitent pas l'utilisation de JavaScript** pour leur fonctionnement de base dans le DSFR.

Cependant, il est possible d'utiliser des bibliothèques JavaScript tierces pour ajouter des fonctionnalités supplémentaires, comme la validation des champs, l'envoi dynamique des données, etc.<br>
Il est recommandé d'utiliser des bibliothèques JavaScript qui respectent les principes d'accessibilité et de performance.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+form+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Formulaire
cover: ../_asset/cover/cover.png
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Formulaire.
shortDescription: Gestion de l'agencement des éléments de formulaire.
keywords: formulaire, saisie, données, interaction, accessibilité, design système, DSFR
excerpt: Le formulaire est un composant essentiel pour la saisie de données dans une interface, permettant d'organiser les champs de saisie et les messages d'état de manière cohérente et accessible.
summary: Le formulaire est un composant d'interface qui organise les éléments de saisie de données et les messages d'état. Il est conçu pour faciliter l'interaction de l'usager avec l'interface, en respectant les principes d'accessibilité et de design du DSFR. Il permet de structurer les informations à saisir, d'afficher des messages d'erreur ou de succès, et de guider l'usager dans son parcours de saisie. Ce guide s'adresse aux concepteurs et développeurs souhaitant implémenter des formulaires conformes aux standards du DSFR et aux bonnes pratiques d'accessibilité.
mesh:
  - component/radio
  - component/input
  - component/select
---

## Formulaires

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Les composants de formulaire sont conçus pour être accessibles et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction spécifique n’est associée au formulaire.

Les interactions clavier du formulaire sont celles liées aux éléments de formulaire qu’il contient&nbsp;:

- [champs de saisie](../../../../input/_part/doc/accessibility/index.md),
- [boutons](../../../../button/_part/doc/accessibility/index.md),
- [liste déroulante](../../../../select/_part/doc/accessibility/index.md),
- [cases à cocher](../../../../checkbox/_part/doc/accessibility/index.md),
- [boutons radio](../../../../radio/_part/doc/accessibility/index.md),
- [ajout de fichier](../../../../upload/_part/doc/accessibility/index.md), etc.

### Règles d’accessibilité

#### Regroupement de champs

- Utiliser un élément `<fieldset>` accompagné d’un élément `<legend>` pour regrouper un ensemble de champs de formulaire de même nature lorsque les étiquettes des champs ne sont pas suffisamment explicites.
- La légende du regroupement doit être pertinente.

#### Message d’information, d’avertissement ou d’erreur

Il existe différentes méthodes pour gérer les messages d’information, d’avertissement ou d’erreur d’un formulaire de manière accessible selon le contexte.

Il est possible d’indiquer l’information, l’avertissement ou l’erreur&nbsp;:

- dans l’étiquette du champ,
- dans un passage de texte avant le formulaire,
- dans un passage de texte relié au champ de saisie avec l’attribut `aria-describedby`,
- avec une <span lang="en">live region</span>&nbsp;: `role="alert"`, `role="status"`, `aria-live="assertive", aria-live="polite"` (dans certains contextes uniquement).

#### Champs obligatoires

Ajouter une mention visible pour tout le monde au début du formulaire et utiliser l’attribut `required` pour indiquer que le champ est obligatoire.

---

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2, 3.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires&nbsp;:** 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 11.10, 11.11, 11.12, 11.13
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Tutoriel WAI - Formulaires](https://www.w3.org/WAI/tutorials/forms/)
- [Live regions ARIA&nbsp;:bonnes et mauvaises pratiques](https://access42.net/quand-utiliser-live-regions-aria/)

## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/form/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Formulaire - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/component/checkbox/checkbox.main.css" rel="stylesheet">
    <link href="../../../dist/component/input/input.main.css" rel="stylesheet">
    <link href="../../../dist/component/select/select.main.css" rel="stylesheet">
    <link href="../.....
```

(Truncated for brevity. See source file for full HTML)
