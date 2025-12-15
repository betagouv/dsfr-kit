# DSFR Transcription Component

*Generated from local node_modules*

## Presentation

---
title: Transcription
shortTitle: Transcription
titleId: Transcription
description: Présentation du composant Transcription destiné à afficher un texte associé à un contenu média dans une interface.
shortDescription: Affichage de texte lié à un contenu média
keywords: transcription, composant, contenu média, accessibilité, modale, accordéon, design système, DSFR
cover: ./_asset/cover/cover.png
excerpt: Le composant Transcription permet de proposer un texte associé à un contenu média, à afficher ou masquer dans une interface, sous forme d’accordéon ou de modale.
summary: Ce composant facilite l’accès au texte d’une vidéo ou d’un média pour les usagers qui en ont besoin, en l’affichant sur la même page dans une zone repliable ou via une modale. Il est conçu pour garantir une lecture simultanée fluide et accessible, avec une structure claire et des règles d’intégration strictes.
mesh:
  - component/accordion
  - component/content
  - component/modal
---

## Transcription

La transcription est un élément d’interaction avec l’interface permettant à l’usager d'afficher ou de masquer le texte traduisant un contenu média au sein d’une page.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=transcription--transcription}

### Quand utiliser ce composant ?

Proposer une transcription pour accompagnée un [contenu média](../../../content/_part/doc/index.md), en la plaçant directement sous ce dernier, dans une zone à déployer au clic.

### Comment utiliser ce composant ?

- **Garantir que la zone à déployer et le contenu tiennent sur un même écran**, sans nécessiter de défilement.
- **Afficher la transcription sur la même page que le contenu média** pour permettre la lecture simultanée.
- **Masquer la transcription quand celle-ci est longue**, dans une zone à développer au clic ou sur une page séparée (modale) atteinte via un lien.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Ajouter la transcription directement sous le contenu média associé, accessible simultanément.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas positionner la transcription avant le contenu média ou trop loin, pour que les deux soient consultés en même temps.
:::

::::

### Règles éditoriales

- **Proposer une transcription textuelle pertinente et accessible**.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design de la Transcription
shortTitle: Design de la Transcription
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Transcription.
shortDescription: Affichage de texte lié à un contenu média
keywords: transcription, composant, contenu média, accessibilité, modale, accordéon, design système, DSFR
cover: ../_asset/cover/cover.png
excerpt: Le composant Transcription permet de proposer un texte associé à un contenu média, à afficher ou masquer dans une interface, sous forme d’accordéon ou de modale.
summary: Ce composant facilite l’accès au texte d’une vidéo ou d’un média pour les usagers qui en ont besoin, en l’affichant sur la même page dans une zone repliable ou via une modale. Il est conçu pour garantir une lecture simultanée fluide et accessible, avec une structure claire et des règles d’intégration strictes.
mesh:
  - component/accordion
  - component/content
  - component/modal
---

## Transcription

La transcription est un élément d’interaction avec l’interface permettant à l’usager d'afficher ou de masquer le texte traduisant un contenu média au sein d’une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie de la transcription](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un libellé “Transcription”]{required=true add='avec icône'}

::dsfr-doc-pin[Un chevron orienté vers le bas]{required=true add="indiquant que la transcription peut s'ouvrir. Il est orienté vers le haut quand la transcription peut se refermer"}

::dsfr-doc-pin[Un contenu]{required=true}

::dsfr-doc-pin[Un bouton “Agrandir“]{required=true add='pour ouvrir la transcription en modale'}

::dsfr-doc-pin[Un bouton “Fermer”]{required=true add='pour refermer la modale'}

::dsfr-doc-pin[Un titre de modale]{add='avec ou sans icône'}

:::

### Variations

La transcription ne propose aucune variation.

Toutefois, au delà de son format accordéon, il est également possible de la consulter en plein écran dans une vue dédiée, via l’ouverture d’une modale.

Les deux vues sont ici complémentaires.

### Tailles

La transcription reprend l’apparence et le fonctionnement d’un [accordéon](../../../../accordion/_part/doc/index.md).

Toutefois, la hauteur de celui-ci est fixe pour permettre aux usagers d’avoir accès à la transcription en même temps que le média associé.

Sous forme de modale, la transcription profite des mêmes tailles que celles disponibles pour le [composant modale](../../../../modal/_part/doc/index.md) lui-même.

### États

L’accordéon, dans le contexte d'une transcription, est soumis aux mêmes états que le [composant accordéon](../../../../accordion/_part/doc/index.md) lui-même.

### Personnalisation

Au même titre que les composants [accordéon](../../../../accordion/_part/doc/index.md) et [modale](../../../../modal/_part/doc/index.md) qui la constituent, la transcription n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](../../../../transcription/_part/doc/index.md).


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code de la Transcription
shortTitle: Code de la Transcription
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Transcription.
shortDescription: Affichage de texte lié à un contenu média
keywords: transcription, composant, contenu média, accessibilité, modale, accordéon, design système, DSFR
cover: ../_asset/cover/cover.png
excerpt: Le composant Transcription permet de proposer un texte associé à un contenu média, à afficher ou masquer dans une interface, sous forme d’accordéon ou de modale.
summary: Ce composant facilite l’accès au texte d’une vidéo ou d’un média pour les usagers qui en ont besoin, en l’affichant sur la même page dans une zone repliable ou via une modale. Il est conçu pour garantir une lecture simultanée fluide et accessible, avec une structure claire et des règles d’intégration strictes.
mesh:
  - component/accordion
  - component/content
  - component/modal
---

## Transcription

La transcription est un élément d’interaction avec l’interface permettant à l’usager d'afficher ou de masquer le texte traduisant un contenu média au sein d’une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Transcription** permet d'afficher et de masquer du contenu textuel.

Sa structure est la suivante :

- Le conteneur de la transcription est un élément HTML `<div>` défini par la classe `fr-transcription`.
- Le bouton pour afficher/masquer le contenu est défini par la classe `fr-transcription__btn`, et son libellé constitue le titre.
  - Le bouton doit être de type "button".
  - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le collapse est ouvert ou fermé
  - Le bouton est lié au collapse via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du collapse.
- Le bloc refermable, défini par la classe `fr-collapse`, est une `<div>` placée après le bouton. Il s'agit d'un élément générique du core utilisé par d'autres composants tels que la navigation ou l'accordéon.
  - Il dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
  - Le bloc refermable contient le pied de page de la transcription, élément HTML `<div>`, défini par la classe `fr-transcription__footer`.
    - Le pied de page contient un conteneur, élément HTML `<div>`, défini par la classe `fr-transcription__actions-group` pour inclure les boutons d'action.
      - Le bouton d'ouverture de la modale est un élément HTML `<button>`, défini par les classes `fr-btn` et `fr-btn--fullscreen`, et son titre est "Agrandir".
        - Le bouton doit être de type "button".
        - Le bouton dispose d'un attribut `aria-label`, dont la valeur est "Agrandir la transcription".
        - Le bouton dispose d'un attribut `data-fr-opened`, sa valeur [true|false] défini si le collapse est ouvert ou fermé
        - Le bouton est lié à la modale via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` de la modale.
  - Le bloc refermable contient une modale, élément HTML `<dialog>` pour afficher le contenu en plein écran, définie par la classe `fr-modal`.
    - Elle dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
    - la modale est lié à son titre via l'attribut `aria-labelledby`, dont la valeur doit correspondre à l'attribut `id` du titre.
    - Le contenu de la modale reprend la structure du composant [Modale](../../../../modal/_part/doc/index.md) et son contenu est libre, mais nécessite l'utilisation des balises adéquates, il n'est pas correcte de placer du texte directement dans une `<div>`.

**Exemple de structure HTML**

```HTML
<div class="fr-transcription">
    <button type="button" class="fr-transcription__btn" aria-expanded="false" aria-controls="fr-transcription-collapse">Transcription</button>
    <div class="fr-collapse" id="fr-transcription-collapse">
        <div class="fr-transcription__footer">
            <div class="fr-transcription__actions-group">
                <button aria-controls="fr-transcription-modal" aria-label="Agrandir la transcription" data-fr-opened="false" type="button" class="fr-btn--fullscreen fr-btn">Agrandir</button>
            </div>
        </div>
        <dialog id="fr-transcription-modal" class="fr-modal" aria-labelledby="fr-transcription-modal-title">
            <div class="fr-container fr-container--fluid fr-container-md">
                <div class="fr-grid-row fr-grid-row--center">
                    <div class="fr-col-12 fr-col-md-10 fr-col-lg-8">
                        <div class="fr-modal__body">
                            <div class="fr-modal__header">
                                <button aria-controls="fr-transcription-modal" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                            </div>
                            <div class="fr-modal__content">
                                <h1 id="fr-transcription-modal-title" class="fr-modal__title">
                                    Titre de la transcription
                                </h1>
                                <!-- Contenu de la transcription -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
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
| Modal      | Oui         |
| Transcription | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/button/button.min.css" rel="stylesheet">
<link href="dist/component/modal/modal.min.css" rel="stylesheet">
<link href="dist/component/transcription/transcription.min.css" rel="stylesheet">
```

---

### JavaScript

#### Installation du JavaScript

Le composant Transcription nécessite l'utilisation de JavaScript pour fonctionner correctement. Son comportement de déplié le contenu utilise le fonctionnement du collapse du core, et il utilise le composant [Modal](../../../../modal/_part/doc/index.md) pour ouvrir le contenu en grand.

Son import doit se faire à la fin de la page, avant la fermeture de la balise `</body>`, et de préférence avec les fichiers minifiés, car plus légers.

::fr-table[Dépendances JS]{valign=top scroll=false}

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Modal      | Oui         |
| Transcription | Oui         |

:::

**Exemple d'imports JavaScript**

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/modal/modal.module.min.js"></script>
<script type="module" src="dist/component/transcription/transcription.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/modal/modal.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/transcription/transcription.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur la transcription, les éléments suivants sont instanciés :

- La transcription, via la classe : `fr-transcription`
- Le bouton d'ouverture de l'accordéon, via la classe `fr-transcription__btn`
- Le collapse, via la classe `fr-collapse`
- Le bouton d'ouverture de la modale, via l'attribut' `aria-controls`
- La modale, via la classe `fr-modal`

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

###### transcription

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement de la transcription est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).transcription.isEnabled = false` |

:::

###### collapseButton

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
| **Description** | Retourne l'instance du dsfr parente, ici la transcription |
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

###### collapse

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
| **Description** | Défini si le fonctionnement de l'accordéon est activé ou non |
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
| **Description** | Retourne l'instance du dsfr parent, ici la transcription |
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

###### modalButton

:::fr-table[focus]{valign=top multiline=true}

| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton |
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).modalButton.focus()` |

:::

:::fr-table[parent]{valign=top multiline=true}

| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parente, ici la transcription |
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
| **Exemple** | `dsfr(elem).modalButton.node` |

:::

###### modal

:::fr-table[conceal]{valign=top multiline=true}

| | |
|:-----|:-----|
| **Description** | Ferme la modale |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).modal.conceal()` |

:::

:::fr-table[disclose]{valign=top multiline=true}

| | |
|:-----|:-----|
| **Description** | Ouvre la modale |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).modal.disclose()` |

:::

:::fr-table[isDisclosed]{valign=top multiline=true}

| | |
|:-----|:-----|
| **Description** | Retourne vrai si la modale est ouverte |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).modal.isDisclosed` |

:::

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement de la modale est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).modal.isEnabled = false` |

:::

:::fr-table[group]{valign=top multiline=true}

| | |
|:-----|:-----|
| **Description** | Retourne l'API du groupe, ou null s'il n'y a pas de groupe |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).modal.group` |

:::

:::fr-table[buttons]{valign=top multiline=true}

| | |
|:-----|:-----|
| **Description** | Retourne un tableau de boutons d'ouverture de la modal |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).modal.buttons` |

:::

:::fr-table[focus]{valign=top multiline=true}

| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton de la modale |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).modal.focus()` |

:::

:::fr-table[parent]{valign=top multiline=true}

| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parent, ici la transcription |
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

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Aclosed+is%3Amerged+transcription)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de la Transcription
shortTitle: Accessibilité de la Transcription
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Transcription.
shortDescription: Affichage de texte lié à un contenu média
keywords: transcription, composant, contenu média, accessibilité, modale, accordéon, design système, DSFR
cover: ../_asset/cover/cover.png
excerpt: Le composant Transcription permet de proposer un texte associé à un contenu média, à afficher ou masquer dans une interface, sous forme d’accordéon ou de modale.
summary: Ce composant facilite l’accès au texte d’une vidéo ou d’un média pour les usagers qui en ont besoin, en l’affichant sur la même page dans une zone repliable ou via une modale. Il est conçu pour garantir une lecture simultanée fluide et accessible, avec une structure claire et des règles d’intégration strictes.
mesh:
  - component/accordion
  - component/content
  - component/modal
---

## Transcription

La transcription est un élément d’interaction avec l’interface permettant à l’usager d'afficher ou de masquer le texte traduisant un contenu média au sein d’une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Transcription** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

Voir les interactions au clavier pour le [composant Accordéon](../../../../accordion/_part/doc/accessibility/index.md#regles-d-accessibilite) et le [composant Modale](../../../../modal/_part/doc/accessibility/index.md#regles-d-accessibilite).

### Règles d’accessibilité

- La transcription contient un bouton d'ouverture d'accordéon avec le type="button".
  - Le bouton d'ouverture de l'accordéon a l'attribut `aria-controls` défini sur l'ID du collapse.
  - Si le collapse de l'accordéon est visible, le bouton a l'attribut `aria-expanded` défini sur true. Si le collapse de l'accordéon n'est pas visible, `aria-expanded` est défini sur false.
- L'accordéon de la transcription contient un bouton d'ouverture de la modale de transcription avec le type="button".
  - Le bouton d'ouverture de la modale dispose d'un attribut `aria-label` dont la valeur "Agrandir la transcription" explicite l'action d'ouverture de la modale.
  - Le bouton d'ouverture de la modale a l'attribut `aria-controls` défini sur l'ID de la modale.
  - Si la modale est visible, le bouton a l'attribut `data-fr-opened` défini sur true. Si la modale n'est pas visible, `data-fr-opened` est défini sur false.
- La modale de transcription est un élément HTML "dialog" et dispose d'un attribut `aria-modal="true"` pour indiquer aux lecteurs d'écran que l'élément est une modale lorsqu'il est affiché.
  - La modale dispose d'un attribut `aria-labelledby` défini sur l'ID du titre de la modale.
- La modale de transcription contient un titre de niveau `H1`.
- La modale de transcription contient un bouton de fermeture de type="button".
  - Le bouton de fermeture de la modale dispose d'un attribut `aria-controls` défini sur l'ID de la modale.

#### Contrastes de couleurs

Le composant Transcription est suffisamment contrasté en thème clair.

### Restitution par les lecteurs d’écran

Voir les tests de restitution pour le [composant Accordéon](../../../../accordion/_part/doc/accessibility/index.md#regles-d-accessibilite) et le [composant Modale](../../../../modal/_part/doc/accessibility/index.md#regles-d-accessibilite).

---

### Critères RGAA applicables

- **Couleurs** : 3.2
- **Liens** : 6.1, 6.2
- **Scripts** : 7.1, 7.3
- **Présentation de l’information** : 10.1, 10.2, 10.3,10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation** : 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/transcription/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Transcription - Système de design</title>
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
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/transcription/transcription.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../d...
```

(Truncated for brevity. See source file for full HTML)
