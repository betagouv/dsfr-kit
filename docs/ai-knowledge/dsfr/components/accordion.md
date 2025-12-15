# DSFR Accordion Component

*Generated from local node_modules*

## Presentation

---
title: Accordéon
shortTitle: Accordéon
titleId: Accordion
description: Présentation du composant Accordéon permettant à l’usager d’afficher ou de masquer une section de contenu pour alléger une page dense.
shortDescription: Masquer ou révéler du contenu textuel
keywords: accordéon, contenu, interaction, affichage, design système, DSFR, accessibilité, composant
cover: ./_asset/cover/cover.png
excerpt: Le composant Accordéon permet à l’usager d’ouvrir ou fermer une section de contenu dans une page, pour en faciliter la lecture et alléger la structure globale.
summary: Utilisé pour structurer et hiérarchiser du contenu éditorial, l’accordéon masque par défaut les informations secondaires pour ne révéler que ce que l’usager souhaite consulter. Il est particulièrement utile dans les longues pages de contenu. Il permet des interactions simples, peut être utilisé seul ou en groupe, et respecte des règles strictes de lisibilité et d’accessibilité.
mesh:
  - component/modal
  - component/tab
---

## Accordéon

L’accordéon est un élément d’interaction avec l’interface permettant à l’usager d'afficher ou de masquer une section de contenu présentée dans une page.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=accordion--accordion}

### Quand utiliser ce composant ?

L’accordéon est utilisé pour mettre en forme du contenu dans une page.

> [!WARNING]
> Son objectif principal étant d’économiser de l’espace, il doit principalement être utilisé au sein de longues pages de contenu.

### Comment utiliser ce composant ?

- **Alléger des pages de contenus denses** en permettant à l’utilisateur de consulter uniquement ce dont il a besoin.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](./_asset/use/dont-1.png)

Ne pas utiliser les accordéons au sein d’une modale. Ils servent à mettre en forme du contenu au sein de longues pages.

:::

::::

- **Simplifier l’expérience de l’usager** en le guidant dans des parcours complexes.

- **Adapter son utilisation au contexte**. L’accordéon ne doit pas être utilisé si l’utilisateur a besoin de lire tous les contenus présents sur la page.

- **Privilégier des interactions simples** (bouton ou lien par exemple). L’accordéon n’a pas vocation à intégrer des composants complexes.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Privilégier des interactions simples (bouton ou lien, par exemple) au sein des accordéons.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-2.png)

Ne pas intégrer des composants trop complexes aux accordéons.

:::

::::

### Règles éditoriales

- **Rédiger un titre d’en-tête clair, explicite et précis**. L’utilisateur doit comprendre facilement le contenu proposé par l’accordéon.

- **Soigner la mise en forme** de l’accordéon en y ajoutant les types de contenu correspondant à vos besoins. Si le contenu de l’accordéon est trop succinct, il est certainement préférable de le remplacer par une liste ou un simple paragraphe.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-1.png)

Privilégier l’usage de texte ou de liste à puces si le contenu de l’accordéon est trop succinct.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-1.png)

Ne pas utiliser les accordéons pour mettre en forme des contenus très courts.

:::

::::


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design de l'Accordéon
shortTitle: Design de l'Accordéon
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Accordéon.
shortDescription: Masquer ou révéler du contenu textuel
keywords: accordéon, contenu, interaction, affichage, design système, DSFR, accessibilité, composant
cover: ../_asset/cover/cover.png
excerpt: Le composant Accordéon permet à l’usager d’ouvrir ou fermer une section de contenu dans une page, pour en faciliter la lecture et alléger la structure globale.
summary: Utilisé pour structurer et hiérarchiser du contenu éditorial, l’accordéon masque par défaut les informations secondaires pour ne révéler que ce que l’usager souhaite consulter. Il est particulièrement utile dans les longues pages de contenu. Il permet des interactions simples, peut être utilisé seul ou en groupe, et respecte des règles strictes de lisibilité et d’accessibilité.
mesh:
  - component/modal
  - component/tab
---

## Accordéon

L’accordéon est un élément d’interaction avec l’interface permettant à l’usager d'afficher ou de masquer une section de contenu présentée dans une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie de l'accordéon](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un en-tête]{required=true add='correspondant au titre de la section'}

::dsfr-doc-pin[Un chevron orienté vers le bas]{required=true add="indiquant que le panneau peut s'ouvrir. Il est orienté vers le haut quand le panneau peut se refermer"}

::dsfr-doc-pin[Une zone de contenu libre]{required=true add='masquée par défaut'}

::dsfr-doc-pin[Un séparateur]{required=true}

:::

### Variations

**Groupe d’accordéons**

- Par défaut, les accordéons compris dans un groupe d’accordéons sont fermés. Seuls l’en-tête et le chevron sont visibles.
- La totalité de la barre d’en-tête est cliquable. Au clic, le contenu est révélé, ou caché, et le chevron change d'orientation en conséquence.
- Par défaut, le groupe d’accordéons ne permet l’ouverture que d’un accordéon à la fois. Le clic sur un accordéon du groupe entraîne la fermeture de l’accordéon précédemment ouvert.

> [!NOTE]
> L'utilisation d'accordéons non liés entre eux (seuls et non au sein d’un groupe) reste toutefois possible, permettant l'ouverture de chaque accordéon indépendamment des autres.

#### Tailles

La largeur de l’accordéon s’adapte à la taille de son conteneur. Toutefois, il est recommandé de ne pas excéder une largeur de 8 colonnes, s’agissant d’un composant de mise en forme de contenu.

#### États

**État au clic**

L’état au clic correspond au comportement constaté par l’usager une fois le panneau ouvert, après avoir cliqué sur l’accordéon.

**État au survol**

L’état au survol correspond au comportement constaté par l’utilisateur lorsqu’il survol le bouton d'ouverture de l’accordéon avec sa souris. Il existe 2 états au survol :

- Lorsque l’accordéon est non cliqué
- Lorsque l’accordéon est cliqué

#### Personnalisation

Les accordéons ne sont pas personnalisables.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Utiliser uniquement la couleur bleu pour les accordéons.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur des accordéons.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-2.png)

Utiliser uniquement la taille de typographie prévue pour l’en-tête des accordéons.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas augmenter la taille de typographie de l’en-tête des accordéons.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code de l'Accordéon
shortTitle: Code de l'Accordéon
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Accordéon.
shortDescription: Masquer ou révéler du contenu textuel
keywords: accordéon, contenu, interaction, affichage, design système, DSFR, accessibilité, composant
cover: ../_asset/cover/cover.png
excerpt: Le composant Accordéon permet à l’usager d’ouvrir ou fermer une section de contenu dans une page, pour en faciliter la lecture et alléger la structure globale.
summary: Utilisé pour structurer et hiérarchiser du contenu éditorial, l’accordéon masque par défaut les informations secondaires pour ne révéler que ce que l’usager souhaite consulter. Il est particulièrement utile dans les longues pages de contenu. Il permet des interactions simples, peut être utilisé seul ou en groupe, et respecte des règles strictes de lisibilité et d’accessibilité.
mesh:
  - component/modal
  - component/tab
---

## Accordéon

L’accordéon est un élément d’interaction avec l’interface permettant à l’usager d'afficher ou de masquer une section de contenu présentée dans une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Accordéon** est composé de deux parties : son titre qui contient le bouton d'ouverture, et un bloc de contenu libre refermable, dit "collapse".
Sa structure est la suivante :

- Le conteneur de l'accordéon est une balise `<section>` avec la classe `fr-accordion`.
- Son titre est contenu dans un niveau d'entête `<hx>`, variable en fonction de sa hiérarchie dans la page (par défaut h3), et possède la classe `fr-accordion__title`.
- Un `<button>` est placé dans cette balise `<hx>`, et son libellé constitue le titre.
  - Le bouton doit être de type "button".
  - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le collapse est ouvert ou fermé
  - Le bouton est lié au collapse via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du collapse.
- Le bloc refermable, défini par la classe `fr-collapse`, est une `<div>` placée après le titre. Il s'agit d'un élément générique du core utilisé par d'autres composants tels que la navigation ou la transcription.
  - Il dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
  - Son contenu est libre, mais nécessite l'utilisation des balises adéquates, il n'est pas correcte de placer du texte directement dans une `<div>`.

**Exemple de structure HTML**

```HTML
<section class="fr-accordion">
    <h3 class="fr-accordion__title">
        <button type="button" class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-1">Libellé accordéon</button>
    </h3>
    <div id="accordion-1" class="fr-collapse">
        <!-- données de l'accordéon -->
    </div>
</section>
```

#### Groupe d'accordéons

L'accordéon peut être utilisé en groupe de plusieurs éléments, liés ou non entre eux.
Les accordéons sont disposés à la suite dans un conteneur.

- Le conteneur est une `<div>` défini par la classe `fr-accordions-group`
- Le conteneur peut posséder un attribut `data-fr-group`, sa valeur [true|false] permet de lier les accordéons entre eux ou non. Si `true`, lorsqu'un accordion est ouvert les autres se referment. Si `false`, il est possible d'en ouvrir plusieurs. Si l'attribut n'est pas défini les accordéons sont groupés par défaut.

**Exemple de structure HTML**

```HTML
<div class="fr-accordions-group" data-fr-group="true">
  <section class="fr-accordion">
    ...
  </section>
  <section class="fr-accordion">
    ...
  </section>
</div>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top scroll=false}

| Dépendance | Obligatoire |
|------|-----|
| Core | Oui |
| Accordéon | Oui |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/accordion/accordion.min.css" rel="stylesheet">
```

#### Variante de style

Sur l'accordéon, aucune variation ni accentuation n'est possible.

Quand le JavaScript est activé, le bloc refermable (collapse) reçoit la classe `fr-collapse--expanded` lorsque le bouton lié possède l'attribut `aria-expanded="true"`. C'est cette classe qui ouvre le collapse.

---

### JavaScript

Pour fonctionner le composant accordéon nécessite l'utilisation de JavaScript.

#### Installation du JavaScript

Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/accordion/accordion.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/accordion/accordion.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur l'accordéon, les éléments suivants sont instanciés :

- Le groupe, via la classe : `fr-accordions-group`
- L'accordéon, via la classe : `fr-accordion`
- Le bouton d'ouverture, via la classe `fr-accordion__btn`
- Le collapse, via la classe `fr-collapse`

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```javascript
const elem = document.getElementById('ID_COLLAPSE');
dsfr(elem).collapse.disclose();
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### accordion

:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).accordion.node` |

:::

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'accordéon est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).accordion.isEnabled = false` |

:::

##### accordionGroup

:::fr-table[current]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Retourne l'API du collapse ouvert. <br>_Si aucun collapse n'est ouvert, ou si plusieurs collapses sont ouverts, renvoie `null`._|
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).accordionsGroup.current` |

:::

:::fr-table[hasFocus]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie `true` si le focus est sur un des éléments du groupe. |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).accordionsGroup.hasFocus` |

:::

:::fr-table[index]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Retourne ou modifie l'index de l'accordéon courant. <br>_Si aucun collapse n'est ouvert, l'index vaut 0._ |
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).accordionsGroup.index` <br> `dsfr(elem).accordionsGroup.index = 2` |

:::

:::fr-table[isGrouped]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si les accordéons du groupe sont liés en eux ou non. <br>_Si `true`, lorsqu'un accordion est ouvert les autres se referment. Si `false`, il est possible d'en ouvrir plusieurs. Si l'attribut n'est pas défini les accordéons sont groupés par défaut._|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).accordionsGroup.isGrouped` <br> `dsfr(elem).accordionsGroup.isGrouped = true` |

:::

:::fr-table[length]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Retourne le nombre d'accordéons dans le groupe. |
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).accordionsGroup.length` |

:::

:::fr-table[members]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie un tableau d'objets correspondant aux collapses des accordéons du groupe. |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).accordionsGroup.members` |

:::

:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).accordionsGroup.node` |

:::

##### accordion

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'accordéon est activé ou non |
| **Type** | property |
| **Retour** | true \| false |
| **Exemple** | `dsfr(elem).accordion.isEnabled = false` |

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
| **Description** | Retourne l'instance du dsfr parente, ici l'accordéon |
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

:::fr-table[concea]{valign=top multiline=true}

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
| **Description** | Retourne l'instance du dsfr parent, ici l'accordéon |
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

#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l'[API Javascript](path:/getting-started/developer/javascript).

Sur l'accordéon et le groupe d'accordéons, les événements suivants sont disponibles :

:::fr-table[événements]{valign=top multiline=true caption=false}

| Événement | Action | Élément | Attribut |
|------|------|------|------|
| `dsfr.conceal` | Fermeture de l'élément | Collapse | `data-fr-js-collapse` |
| `dsfr.disclose` | Ouverture de l'élément | Collapse | `data-fr-js-collapse` |
| `dsfr.click` | Click sur le bouton d'ouverture | CollapseButton | `data-fr-js-collapse-button` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+accordion+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de l'Accordéon
shortTitle: Accessibilité de l'Accordéon
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Accordéon.
shortDescription: Masquer ou révéler du contenu textuel
keywords: accordéon, contenu, interaction, affichage, design système, DSFR, accessibilité, composant
cover: ../_asset/cover/cover.png
excerpt: Le composant Accordéon permet à l’usager d’ouvrir ou fermer une section de contenu dans une page, pour en faciliter la lecture et alléger la structure globale.
summary: Utilisé pour structurer et hiérarchiser du contenu éditorial, l’accordéon masque par défaut les informations secondaires pour ne révéler que ce que l’usager souhaite consulter. Il est particulièrement utile dans les longues pages de contenu. Il permet des interactions simples, peut être utilisé seul ou en groupe, et respecte des règles strictes de lisibilité et d’accessibilité.
mesh:
  - component/modal
  - component/tab
---

## Accordéon

L’accordéon est un élément d’interaction avec l’interface permettant à l’usager d'afficher ou de masquer une section de contenu présentée dans une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant Accordéon est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est sur le bouton d’ouverture de l’accordéon&nbsp;:

- `Entrée`&nbsp;: ouvre ou ferme la zone de contenu associée.
- `Espace`&nbsp;: ouvre ou ferme la zone de contenu associée.

Navigation entre les accordéons&nbsp;:

- `Tab`&nbsp;: déplace le focus sur le bouton suivant.
- `Maj` + `Tab`&nbsp;: déplace le focus sur le bouton précédent.

Si une zone de contenu de l’accordéon est ouverte, tous les éléments interactifs à l’intérieur sont inclus dans le parcours de navigation au clavier.

### Règles d’accessibilité

Le composant **Accordéon** s’appuie sur le motif de conception ARIA <span lang="en">Accordion</span> de l’<a href="https://www.w3.org/WAI/ARIA/apg/about/introduction/" target="_blank" rel="noopener external" title="Authoring Practices Guide - nouvelle fenêtre" lang="en">Authoring Practices Guide</a> (APG).

#### Titre de l’accordéon

- Le titre de l’accordéon doit être explicite et permettre de comprendre le contenu proposé.
- Le niveau titre de l’accordéon doit être cohérent avec le reste de la page.

#### Bouton de l’accordéon

- Il est placé à l’intérieur de la balise `hx`, autour du texte.
- Il possède deux attributs ARIA&nbsp;:
  - `aria-expanded` défini à :
    - `true` lorsque la zone de contenu contrôlée est affichée,
    - `false` lorsque la zone de contenu contrôlée est masquée.
  - `aria-controls` qui relie le bouton à la zone contrôlée et dont la valeur doit correspondre à l’attribut `id` de la zone de contenu.

#### Groupe d’accordéons

Le comportement par défaut du «&nbsp;Groupe d’accordéons&nbsp;» (ouverture d’un accordéon à la fois seulement) peut poser des problèmes d’utilisabilité pour certaines personnes handicapées.

L’option «&nbsp;Groupe d’accordéons dissociés&nbsp;» est à privilégier par défaut.

#### Contrastes de couleurs

Le composant Accordéon est suffisamment contrasté en thème clair.

Au survol du bouton en thème sombre, le ratio de contraste entre le texte et le fond du bouton est insuffisant.

Le chevron est insuffisamment contrasté au survol uniquement lorsque l’accordéon est ouvert.

:::fr-table[Contraste du texte et du chevron de l’accordéon]{valign=top multiline=true caption=true}
| État du bouton |  Thème clair | Thème sombre |
|------|-----|-----|
|**fermé - par défaut**| 14,9:1 | 5,76:1 |
|**fermé - au survol**| 13,79:1| 4:1 |
|**ouvert - par défaut**| 11,83:1| 4,55:1 |
|**ouvert - au survol**| 13,79:1| 2,6:1 |
:::

### Restitution par les lecteurs d’écran

L’attribut `aria-expanded` est restitué différemment selon les lecteurs d’écran.

- Lorsque l’accordéon est fermé (`aria-expanded="false"`)&nbsp;: «&nbsp;réduit&nbsp;» ou «&nbsp;condensé&nbsp;» (VoiceOver macOS)
- Lorsque l’accordéon est ouvert&nbsp;: «&nbsp;développé&nbsp;» (NVDA, Narrateur, VoiceOver iOS) ou «&nbsp;étendu&nbsp;» (JAWS, VoiceOver macOS, Talkback).

> [!CAUTION]
> - Selon la version de macOS, un [bug de VoiceOver](https://bugs.webkit.org/show_bug.cgi?id=284804) fait qu’il ne restitue pas le changement d’état lorsque le bouton est actionné.
> - Narrateur vocalise le changement d’état lorsque le bouton est actionné **uniquement avec Microsoft Edge**. Sur Chrome et Firefox, le changement d’état n’est pas vocalisé lorsque le bouton est actionné.
>
> Ce sont des bugs des lecteurs d’écran et non un problème avec le composant.

:::fr-accordion[#### Versions navigateurs et lecteurs d’écran]{id=sr-le-desktop}

Les tests de restitution ont été effectués en ajoutant le lecteur d’écran intégré à Windows 11 (Narrateur) et le navigateur web Chrome à l’environnement de tests du RGAA.

Versions des navigateurs web&nbsp;:

- Firefox 137
- Chrome 135
- Safari 18.4 (sur macOS uniquement)
- Microsoft Edge 135 (sur Windows 11 uniquement)

Version des lecteurs d’écran&nbsp;:
- NVDA 2024.4.2
- JAWS 2024
- VoiceOver macOS 15.4
- Narrateur (Windows 11)
- VoiceOver iOS
:::

---

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2, 3.3
- **Scripts&nbsp;:** 7.1, 7.3
- **Structuration&nbsp;:** 9.1
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation&nbsp;:** 12.8, 12.9, 12.11
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Attribut aria-expanded — spécification ARIA](https://www.w3.org/TR/wai-aria-1.3/#aria-expanded)
- [Attribut aria-controls — spécification ARIA](https://www.w3.org/TR/wai-aria-1.3/#aria-controls)
- [Motif de conception WAI-ARIA Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/accordion/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Accordéon - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/tab/tab.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/...
```

(Truncated for brevity. See source file for full HTML)
