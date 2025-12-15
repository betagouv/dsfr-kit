# DSFR Translate Component

*Generated from local node_modules*

## Presentation

---
title: Sélecteur de langues
shortTitle: Sélecteur de langues
titleId: Translate
description: Présentation du composant Sélecteur de langues permettant à l’usager de choisir la langue d’affichage du site dans un environnement multilingue.
shortDescription: Choisir la langue d’affichage du site.
keywords: sélecteur de langues, multilingue, accessibilité, langue, interface, UX, design system, en-tête, code ISO, traduction
cover: ./_asset/cover/cover.png
excerpt: Le sélecteur de langues est un composant essentiel dans les sites multilingues. Il permet à l’usager de basculer entre différentes langues tout en respectant les bonnes pratiques d’affichage et de positionnement.
summary: Ce contenu présente les usages du sélecteur de langues dans un site disponible en plusieurs langues. Il précise son positionnement recommandé dans l’interface, généralement dans l’en-tête en tant qu’accès rapide, ainsi que les règles éditoriales à respecter pour nommer les langues avec clarté. Il rappelle également les recommandations juridiques liées à l’affichage du français. Ce guide est destiné aux concepteurs de sites publics ou multilingues qui souhaitent garantir une navigation fluide, cohérente et conforme aux bonnes pratiques.
mesh:
  - component/button
---

## Sélecteur de langues

Le sélecteur de langues est un élément d’interaction avec l’interface permettant à l’usager de choisir la langue dans laquelle est affiché le contenu du site.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=translate--translate}

### Quand utiliser ce composant ?

**Utiliser le sélecteur de langues dès lors qu’un site est disponible en plusieurs langues.**

> [!NOTE]
> Son usage est préconisé à partir de trois langues au moins (en général, il s’agira du français et deux autres langues), bien qu’il est techniquement possible d’utiliser le sélecteur de langue pour un site en deux langues.
Cependant, en vertu de [la loi n° 94-665 du 4 août 1994 relative à l'emploi de la langue française](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000349929/2022-06-17/), et conformément à [la politique gouvernementale constante en faveur du plurilinguisme](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000411109), nous recommandons fortement de proposer une traduction en deux langues au moins (en plus du français).

### Comment utiliser ce composant ?

- **Intégrer le sélecteur de langues dans l’en-tête du site**, en lieu et place d’un accès rapide parmi les 3 disponibles. Lorsqu’il est présent, il est forcément sur l’accès rapide le plus à droite (le dernier en mobile), à part quand un bouton tertiaire encadré y est déjà présent (par exemple : “Connexion”).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/use/do-1.png)

Proposer le sélecteur de langues en remplacement d’un des accès rapides parmi les trois disponibles.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](./_asset/use/dont-1.png)

Ne pas ajouter un accès rapide en plus pour y intégrer le sélecteur de langues.

:::

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/use/do-2.png)

Placer systématiquement le sélecteur de langues sur l’emplacement le plus à droite des accès rapides.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](./_asset/use/dont-2.png)

Ne pas proposer le sélecteur de langues sur un emplacement autre que celui le plus à droite des accès rapides.

:::

::::

- **Proposer autant de langues que souhaité** tout en considérant que les symboles dans les librairies ne prévoient que jusqu'à huit langues maximum.

### Règles éditoriales

- **Indiquer une langue par [son code ISO](https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1) puis son nom en toutes lettres, dans la langue cible**.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-1.png)

Indiquer chaque langue par son code ISO et son nom en toutes lettres, dans la langue cible.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-1.png)

Ne pas dissocier le nom indiqué de la langue cible.

## Design

---
boost: 0
sitemap:
  noindex: true
title: Design du Sélecteur de langues
shortTitle: Design du Sélecteur de langues
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Sélecteur de langues.
shortDescription: Choisir la langue d’affichage du site.
keywords: sélecteur de langues, multilingue, accessibilité, langue, interface, UX, design system, en-tête, code ISO, traduction
cover: ../_asset/cover/cover.png
excerpt: Le sélecteur de langues est un composant essentiel dans les sites multilingues. Il permet à l’usager de basculer entre différentes langues tout en respectant les bonnes pratiques d’affichage et de positionnement.
summary: Ce contenu présente les usages du sélecteur de langues dans un site disponible en plusieurs langues. Il précise son positionnement recommandé dans l’interface, généralement dans l’en-tête en tant qu’accès rapide, ainsi que les règles éditoriales à respecter pour nommer les langues avec clarté. Il rappelle également les recommandations juridiques liées à l’affichage du français. Ce guide est destiné aux concepteurs de sites publics ou multilingues qui souhaitent garantir une navigation fluide, cohérente et conforme aux bonnes pratiques.
mesh:
  - component/button
---

## Sélecteur de langues

Le sélecteur de langues est un élément d’interaction avec l’interface permettant à l’usager de choisir la langue dans laquelle est affiché le contenu du site.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie du sélecteur de langue](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un bouton tertiaire avec icône]{required=true}

::dsfr-doc-pin[L’item de la langue active]{required=true}

::dsfr-doc-pin[Une liste déroulante des autres langues disponibles]{required=true}

::dsfr-doc-pin[Un séparateur]{add="entre chaque proposition de langue" required=true}

:::

### Variations

**Bouton avec bordure**

::dsfr-doc-storybook{storyId=translate--button-tertiary}

**Bouton sans bordure**

::dsfr-doc-storybook{storyId=translate--button-tertiary-no-outline}

En desktop, la langue active est affichée dans le bouton sans son nom en toutes lettres (dans un souci de place) puis la liste déroulante reprend la langue active avant d’afficher les options.

En mobile, la langue active est affichée en entier mais n’est pas répétée dans la liste déroulante.

### Tailles

Le sélecteur de langues propose une taille unique, non personnalisable.

### États

**Etat au clic**

L’état au clic correspond au comportement constaté par l’usager une fois la liste déroulante ouverte, après avoir cliqué sur le bouton.

**Etat au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole le bouton avec sa souris. Il existe 2 états au survol :

- Lorsque le bouton est non cliqué

- Lorsque le bouton est cliqué

### Personnalisation

Le sélecteur de langues n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](#sélecteur-de-langue).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Garder un fond transparent pour le sélecteur de langues.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas appliquer de fond au sélecteur de langues.

:::

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-2.png)

Personnaliser le sélecteur de langues en y ajoutant une bordure.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas proposer une autre variation de bouton pour le sélecteur de langues.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code du Sélecteur de langues
shortTitle: Code du Sélecteur de langues
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Sélecteur de langues.
shortDescription: Choisir la langue d’affichage du site.
keywords: sélecteur de langues, multilingue, accessibilité, langue, interface, UX, design system, en-tête, code ISO, traduction
cover: ../_asset/cover/cover.png
excerpt: Le sélecteur de langues est un composant essentiel dans les sites multilingues. Il permet à l’usager de basculer entre différentes langues tout en respectant les bonnes pratiques d’affichage et de positionnement.
summary: Ce contenu présente les usages du sélecteur de langues dans un site disponible en plusieurs langues. Il précise son positionnement recommandé dans l’interface, généralement dans l’en-tête en tant qu’accès rapide, ainsi que les règles éditoriales à respecter pour nommer les langues avec clarté. Il rappelle également les recommandations juridiques liées à l’affichage du français. Ce guide est destiné aux concepteurs de sites publics ou multilingues qui souhaitent garantir une navigation fluide, cohérente et conforme aux bonnes pratiques.
mesh:
  - component/button
---

## Sélecteur de langues

Le sélecteur de langues est un élément d’interaction avec l’interface permettant à l’usager de choisir la langue dans laquelle est affiché le contenu du site.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Sélecteur de langue** permet de choisir la langue de l'interface.
Sa structure, reposant sur le modèle du composant **Navigation principale** est la suivante :

- Le sélecteur de langue est un élément HTML `<div>` défini par les classes `fr-translate` et `fr-nav`.
- Il doit contenir un élément HTML `<div>` défini par la classe `fr-nav__item`, contenant :
  - Un `<button>` de type "button".
    - Il est défini par les classes `fr-translate__btn`, `fr-btn` et `fr-btn--tertiary`.
    - Le libellé du bouton doit reprendre l'abréviation de la langue active (ex: "FR") ainsi que hors écran le libellé explicite de la langue active (ex: `<span class="fr-hidden-lg">&nbsp;- Français</span>`)
    - Le bouton dispose d'un attribut `title`, sa valeur doit être "Sélectionner une langue".
    - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le collapse est ouvert ou fermé
    - Le bouton est lié au collapse via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du collapse.
  - Un bloc refermable, défini par les classes `fr-collapse`, `fr-translate__menu` et `fr-menu`, est une `<div>` placée après le bouton. Il s'agit d'un élément générique du core utilisé par d'autres composants tels que la navigation ou la transcription.
    - Il dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
    - Son contenu est composé d'une liste d'éléments `<ul>` définie par la classe `fr-menu__list` :
      - Chaque langue cible dans le menu est un élément `<li>`, contenant un lien `<a>` défini par les classes `fr-translate__language` et `fr-nav__link`.
      - Le libellé des liens est composé de l'abréviation de la langue et du libellé explicite de la langue (ex: "FR - Français").
      - Les liens disposent d'un attribut `hreflang` et un attribut `lang`, dont les valeurs spécifient la langue cible.
      - La langue active dispose d'un attribut `aria-current="true"`.

**Exemple de structure HTML**

```HTML
<div class="fr-translate fr-nav">
    <div class="fr-nav__item">
        <button aria-controls="translate-menu" aria-expanded="false" title="Sélectionner une langue" type="button" class="fr-translate__btn fr-btn fr-btn--tertiary">FR<span class="fr-hidden-lg">&nbsp;- Français</span>
        </button>
        <div class="fr-collapse fr-translate__menu fr-menu" id="translate-menu">
            <ul class="fr-menu__list">
                <li>
                    <a class="fr-translate__language fr-nav__link" hreflang="fr" lang="fr" href="/fr/" aria-current="true">FR - Français</a>
                </li>
                <li>
                    <a class="fr-translate__language fr-nav__link" hreflang="en" lang="en" href="/en/">EN - English</a>
                </li>
            </ul>
        </div>
    </div>
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
| Button     | Oui         |
| Navigation | Oui         |
| Translate  | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/button/button.min.css" rel="stylesheet">
<link href="dist/component/navigation/navigation.min.css" rel="stylesheet">
<link href="dist/component/translate/translate.min.css" rel="stylesheet">
```

#### Variantes de sélecteur de langue sans bordure

Le sélecteur de langue peut être utilisé avec un bouton sans bordure avec l'utilisation de la classe `fr-btn--tertiary-no-outline` sur le bouton.

**Exemples de sélecteur de langue sans bordure**

```HTML
<nav role="navigation" class="fr-translate fr-nav"">
    <div class="fr-nav__item">
        <button aria-controls="translate" aria-expanded="false" type="button" class="fr-translate__btn fr-btn fr-btn--tertiary-no-outline">FR<span class="fr-hidden-lg">&nbsp;- Français</span>
        </button>
        <!-- Liste des langues -->
    </div>
</nav>
```

---

### JavaScript

Pour fonctionner le composant Sélecteur de langue nécessite l'utilisation de JavaScript.
Ses fonctionnalités sont disponibles dans le core et le composant [Navigation](../../../../navigation/_part/doc/code/index.md).

Il est donc nécessaire d'importer ces fichiers js à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/navigation/navigation.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/navigation/navigation.nomodule.min.js"></script>
```

#### Instances

Sur le sélecteur de langue, les éléments suivants sont instanciés :

- La navigation, via la classe : `fr-nav`
- L'element de navigation, via la classe : `fr-nav__item`
- Le bouton d'ouverture, via la classe `fr-translate__btn`
- Le collapse, via la classe `fr-collapse`

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_COLLAPSE');
dsfr(elem).collapse.disclose();
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### navigation

:::fr-table[current]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Retourne l'API du collapse ouvert. <br>_Si aucun collapse n'est ouvert, ou si plusieurs collapses sont ouverts, renvoie `null`._|
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).navigation.current` |

:::

:::fr-table[index]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Retourne ou modifie l'index de l'accordéon courant. <br>_Si aucun collapse n'est ouvert, l'index vaut 0._ |
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).navigation.index` <br> `dsfr(elem).navigation.index = -1` |

:::

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement du sélecteur de langue est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).navigation.isEnabled = false` |

:::

:::fr-table[hasFocus]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie vrai si le focus est sur un des éléments du groupe. |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).navigation.hasFocus` |

:::

##### navigationItem

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement de la navigation est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).navigationItem.isEnabled = false` |

:::

##### collapseButton

:::fr-table[focus]{valign=top multiline=true}

| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton |
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapseButton.focus()` |

:::

:::fr-table[parent]{valign=top multiline=true}

| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parente, ici le sélecteur de langue |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).parent` |

:::

:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).collapseButton.node` |

:::

##### collapse

:::fr-table[conceal]{valign=top multiline=true}

| | |
|:-----|:-----|
| **Description** | Ferme le collapse |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).collapse.conceal()` |

:::

:::fr-table[disclose]{valign=top multiline=true}

| | |
|:-----|:-----|
| **Description** | Ouvre le collapse |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).collapse.disclose()` |

:::

:::fr-table[isDisclosed]{valign=top multiline=true}

| | |
|:-----|:-----|
| **Description** | Retourne vrai si le collapse est ouvert |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.isDisclosed` |

:::

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement du sélecteur de langue est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.isEnabled = false` |

:::

:::fr-table[group]{valign=top multiline=true}

| | |
|:-----|:-----|
| **Description** | Retourne l'API du groupe, ou null s'il n'y a pas de groupe |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).collapse.group` |

:::

:::fr-table[buttons]{valign=top multiline=true}

| | |
|:-----|:-----|
| **Description** | Retourne un tableau de boutons d'ouverture du collapse |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).collapse.buttons` |

:::

:::fr-table[focus]{valign=top multiline=true}

| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton du collapse |
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.focus()` |

:::

:::fr-table[parent]{valign=top multiline=true}

| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parent, ici le sélecteur de langue |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).parent` |

:::

:::fr-table[children]{valign=top multiline=true}

| | |
|:-----|:-----|
| **Description** | Renvoie un tableau d'instances enfants |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).children` |

:::

:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).collapse.node` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+translate)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Sélecteur de langues
shortTitle: Accessibilité du Sélecteur de langues
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Sélecteur de langues.
shortDescription: Choisir la langue d’affichage du site.
keywords: sélecteur de langues, multilingue, accessibilité, langue, interface, UX, design system, en-tête, code ISO, traduction
cover: ../_asset/cover/cover.png
excerpt: Le sélecteur de langues est un composant essentiel dans les sites multilingues. Il permet à l’usager de basculer entre différentes langues tout en respectant les bonnes pratiques d’affichage et de positionnement.
summary: Ce contenu présente les usages du sélecteur de langues dans un site disponible en plusieurs langues. Il précise son positionnement recommandé dans l’interface, généralement dans l’en-tête en tant qu’accès rapide, ainsi que les règles éditoriales à respecter pour nommer les langues avec clarté. Il rappelle également les recommandations juridiques liées à l’affichage du français. Ce guide est destiné aux concepteurs de sites publics ou multilingues qui souhaitent garantir une navigation fluide, cohérente et conforme aux bonnes pratiques.
mesh:
  - component/button
---

## Sélecteur de langues

Le sélecteur de langues est un élément d’interaction avec l’interface permettant à l’usager de choisir la langue dans laquelle est affiché le contenu du site.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Sélecteur de langue** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

#### Structuration

##### Bouton d’ouverture

- Le bouton d’ouverture du sélecteur de langue possède deux attributs ARIA&nbsp;:
  - `aria-expanded` défini à :
    - `true` lorsque la liste déroulante des autres langues est affichée,
    - `false` lorsque la liste déroulante des autres langues est masquée.
  - `aria-controls` qui relie le bouton à la zone contrôlée et dont la valeur doit correspondre à l’attribut `id` de la zone de contenu.

##### Liste de langues

- La liste de langues est structurée dans une liste `ul` `li`.
- Le lien actif de la liste de langues porte un attribut `aria-current=”true”`.
- Chaque lien de la liste de langues disposent d'un attribut `hreflang` et un attribut `lang`, dont les valeurs spécifient la langue cible.
- Une langue est indiquée par son code [ISO 639-1](https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1), puis son nom en toute lettres et dans la langue cible. Par exemple, on écrira "EN - English", et pas "EN - Anglais".

#### Contrastes de couleurs

Le composant Sélecteur de langue est suffisamment contrasté en thème clair.

En thème sombre, le bouton d’ouverture est insuffisamment contrasté au survol.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Sélecteur de langue.

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/translate/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Sélecteur de langue - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/navigation/navigation.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/component/translate/translate.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <lin...
```

(Truncated for brevity. See source file for full HTML)
