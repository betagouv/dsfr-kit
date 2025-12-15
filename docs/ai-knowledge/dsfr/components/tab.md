# DSFR Tab Component

*Generated from local node_modules*

## Presentation

---
title: Onglet
shortTitle: Onglet
titleId: Tab
description: Présentation du composant Onglets pour structurer du contenu lié dans un espace restreint avec des recommandations d’usage et d’accessibilité.
shortDescription: Structuration de contenu avec des onglets
keywords: onglets, composant, interface, navigation, accessibilité, design système, UX, DSFR
cover: ./_asset/cover/cover.png
excerpt: Le composant Onglets permet de regrouper plusieurs sections de contenu dans un espace réduit en affichant une seule section à la fois. Il est utile pour simplifier la lecture et améliorer l’expérience utilisateur.
summary: Cette fiche détaille le fonctionnement du composant Onglets du design système de l’État. Elle décrit ses usages recommandés, ses règles d’intégration et d’accessibilité, ainsi que son comportement responsive. Le contenu est destiné aux équipes design et développement souhaitant structurer des interfaces avec plusieurs sections de contenu apparentées tout en maintenant une expérience claire et fluide.
mesh:
  - component/accordion
  - component/modal
---

## Onglet

Le système d’onglets permet de structurer et de présenter plusieurs sections de contenu liées, en affichant une seule section à la fois dans un espace limité.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=tabs--tabs}

### Quand utiliser ce composant ?

Utiliser le système d'onglets pour regrouper du contenu lié dans un espace limité ou diviser un contenu dense en sections accessibles individuellement, afin de faciliter la lecture pour l’usager.

> [!NOTE]
> Il est recommandé d’utiliser des onglets si vous avez moins de 5 sections. Si vous avez plus de 5 sections, utilisez plutôt des [accordéons](../../../accordion/_part/doc/index.md)<br>
> N’utilisez pas les onglets pour naviguer entre différentes pages, préférez un menu latéral ou un sommaire.

### Comment utiliser ce composant ?

- **Trier les onglets en fonction des besoins des usagers**, en plaçant le plus important en premier.
- **Séparer le contenu utilement, en sections clairement identifiées**. Dans le cas contraire, les onglets perdent de leur pertinence.
- **Adapter leur utilisation au contexte**. Les onglets ne doivent pas être utilisés si l’usager a besoin de lire le contenu de l’ensemble des sections.
- **Intégrer les onglets dans des pages de contenu de préférence courtes** afin qu’ils ne se perdent pas dans la masse d’information. L’usager doit pouvoir y revenir facilement si nécessaire.

### Règles éditoriales

- **Rédiger un titre d’onglet clair, explicite et concis**. L’utilisateur doit comprendre facilement le contenu proposé par chacun des onglets.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design de l'Onglet
shortTitle: Design de l'Onglet
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Onglet.
shortDescription: Structuration de contenu avec des onglets
keywords: onglets, composant, interface, navigation, accessibilité, design système, UX, DSFR
cover: ../_asset/cover/cover.png
excerpt: Le composant Onglets permet de regrouper plusieurs sections de contenu dans un espace réduit en affichant une seule section à la fois. Il est utile pour simplifier la lecture et améliorer l’expérience utilisateur.
summary: Cette fiche détaille le fonctionnement du composant Onglets du design système de l’État. Elle décrit ses usages recommandés, ses règles d’intégration et d’accessibilité, ainsi que son comportement responsive. Le contenu est destiné aux équipes design et développement souhaitant structurer des interfaces avec plusieurs sections de contenu apparentées tout en maintenant une expérience claire et fluide.
mesh:
  - component/accordion
  - component/modal
---

## Onglet

Le système d’onglets permet de structurer et de présenter plusieurs sections de contenu liées, en affichant une seule section à la fois dans un espace limité.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie de l'onglet](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un libellé d’onglet]{required=true add='cliquable, qui permet d’afficher la zone de contenu associée'}

::dsfr-doc-pin[Une bordure pour l’onglet en état “courant”]{required=true}

::dsfr-doc-pin[Une icône]{required=false add='à gauche du titre'}

::dsfr-doc-pin[Un fond blanc]{required=true}

::dsfr-doc-pin[Une zone de contenu]{required=true}

:::

### Variations

**Responsive**

::dsfr-doc-storybook{storyId=tabs--tabs width=375}

En mobile, les onglets affichent un scroll horizontal qui permet d’accéder à l’ensemble des sections.

### Tailles

La largeur du composant s’adapte à la taille de son conteneur. Si le nombre d’onglets dépasse la largeur du conteneur, un scroll horizontal permet de naviguer entre les différents onglets.

::dsfr-doc-storybook{storyId=tabs--tabs width=576}

Il est toutefois recommandé de ne pas excéder une largeur de 8 colonnes, s’agissant d’un composant à intégrer au sein de pages de contenu.

Par ailleurs, la largeur des onglets eux-mêmes s’adapte à la taille de leur contenu. C’est pourquoi il est recommandé de proposer des titres concis, afin de permettre la juxtaposition de l’ensemble des onglets, sans forcer le scroll horizontal.

### États

**État au clic**

L’état au clic correspond au comportement constaté par l’usager une fois un onglet sélectionné, après avoir cliqué dessus.

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole les onglets.

### Personnalisation

Les onglets ne sont pas personnalisables.

Toutefois, certains éléments sont optionnels et les icônes peuvent être changées - voir la [structure du composant](../../../../tab/_part/doc/index.md).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Utiliser uniquement la couleur de fond par défaut des onglets.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur de fond des onglets.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-2.png)

Utiliser uniquement la taille de typographie prévue pour le titre des onglets.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas augmenter la taille de typographie du titre des onglets.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code de l'Onglet
shortTitle: Code de l'Onglet
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Onglet.
shortDescription: Structuration de contenu avec des onglets
keywords: onglets, composant, interface, navigation, accessibilité, design système, UX, DSFR
cover: ../_asset/cover/cover.png
excerpt: Le composant Onglets permet de regrouper plusieurs sections de contenu dans un espace réduit en affichant une seule section à la fois. Il est utile pour simplifier la lecture et améliorer l’expérience utilisateur.
summary: Cette fiche détaille le fonctionnement du composant Onglets du design système de l’État. Elle décrit ses usages recommandés, ses règles d’intégration et d’accessibilité, ainsi que son comportement responsive. Le contenu est destiné aux équipes design et développement souhaitant structurer des interfaces avec plusieurs sections de contenu apparentées tout en maintenant une expérience claire et fluide.
mesh:
  - component/accordion
  - component/modal
---

## Onglet

Le système d’onglets permet de structurer et de présenter plusieurs sections de contenu liées, en affichant une seule section à la fois dans un espace limité.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Onglet** est un élément interactif permettant de basculer entre plusieurs sections de contenu.

Sa structure est la suivante :

- Le conteneur des onglets est une balise `<div>` avec la classe `fr-tabs`.
- Les onglets sont contenus dans une liste `<ul>` avec la classe `fr-tabs__list`.
  - La liste possède un rôle `tablist` et attribut `aria-label` précisant le nom du système d'onglets.
- Chaque onglet est un élément `<li>` avec le rôle `presentation` contenant :
  - Un élément `<button>` avec la classe `fr-tabs__tab` et le rôle `tab`.
    - Le bouton doit être de type "button".
    - Le bouton dispose d'un attribut `aria-selected`, sa valeur [true|false] défini si l'onglet est actif.
    - Le bouton dispose d'un attribut `tabindex`, sa valeur [0|-1] défini si l'onglet est actif [0] ou inactif [-1].
    - Le bouton est lié au panneau de contenu via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du panneau.
- Chaque contenu d'onglet est un élément `<div>` avec la classe `fr-tabs__panel` et le rôle `tabpanel`.
  - Le panneau actif possède la classe `fr-tabs__panel--selected`.
  - Le panneau est lié au bouton de l'onglet via l'attribut `aria-labelledby`, sa valeur doit correspondre à l'attribut `id` du bouton.
  - Son contenu est libre, mais nécessite l'utilisation des balises adéquates, il n'est pas correcte de placer du texte directement dans une `<div>`.

**Exemple de structure HTML**

```HTML
<div class="fr-tabs">
    <ul class="fr-tabs__list" role="tablist" aria-label="[A modifier | nom du système d'onglet]">
        <li role="presentation">
            <button type="button" id="tab-1" class="fr-tabs__tab" tabindex="0" role="tab" aria-selected="true" aria-controls="tab-1-panel">Libellé onglet 1</button>
        </li>
        <li role="presentation">
            <button type="button" id="tab-2" class="fr-tabs__tab" tabindex="-1" role="tab" aria-selected="false" aria-controls="tab-2-panel">Libellé onglet 2</button>
        </li>
        <li role="presentation">
            <button type="button" id="tab-3" class="fr-tabs__tab" tabindex="-1" role="tab" aria-selected="false" aria-controls="tab-3-panel">Libellé onglet 3</button>
        </li>
    </ul>
    <div id="tab-1-panel" class="fr-tabs__panel fr-tabs__panel--selected" role="tabpanel" aria-labelledby="tab-1" tabindex="0">
        <!-- Contenu du panneau 1 -->
    </div>
    <div id="tab-2-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tab-2" tabindex="0">
        <!-- Contenu du panneau 2 -->
    </div>
    <div id="tab-3-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tab-3" tabindex="0">
        <!-- Contenu du panneau 3 -->
    </div>
</div>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------|----------|
| Core       | Oui         |          |
| Tab        | Oui         |          |
| Utility    | Non         | Uniquement pour l'ajout d'icône |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/tab/tab.min.css" rel="stylesheet">
```

#### Variante avec icônes

Les onglets peuvent avoir une icône juxtaposée à gauche, elle est ajoutée via la **classe utilitaire d'icône** `fr-icon--NOM-ICONE` (voir [Icônes](../../../../../core/_part/doc/icon/index.md)), associée à une **classe de positionnement** de l'icône `fr-tag--icon-left`.

**Exemple de variante avec icônes**

:::fr-accordion[Déplier pour voir le code]{id=code-tabs-icons}

```HTML
<div class="fr-tabs">
    <ul class="fr-tabs__list" role="tablist" aria-label="[A modifier | nom du système d'onglet]">
        <li role="presentation">
            <button type="button" id="tab-1" class="fr-tabs__tab fr-icon-checkbox-circle-line fr-tabs__tab--icon-left" tabindex="0" role="tab" aria-selected="true" aria-controls="tab-1-panel">Libellé onglet 1</button>
        </li>
        <li role="presentation">
            <button type="button" id="tab-2" class="fr-tabs__tab fr-icon-checkbox-circle-line fr-tabs__tab--icon-left" tabindex="-1" role="tab" aria-selected="false" aria-controls="tab-2-panel">Libellé onglet 2</button>
        </li>
        <li role="presentation">
            <button type="button" id="tab-3" class="fr-tabs__tab fr-icon-checkbox-circle-line fr-tabs__tab--icon-left" tabindex="-1" role="tab" aria-selected="false" aria-controls="tab-3-panel">Libellé onglet 3</button>
        </li>
    </ul>
    <div id="tab-1-panel" class="fr-tabs__panel fr-tabs__panel--selected" role="tabpanel" aria-labelledby="tab-1" tabindex="0">
        <!-- Contenu du panneau 1 -->
    </div>
    <div id="tab-2-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tab-2" tabindex="0">
        <!-- Contenu du panneau 2 -->
    </div>
    <div id="tab-3-panel" class="fr-tabs__panel" role="tabpanel" aria-labelledby="tab-3" tabindex="0">
        <!-- Contenu du panneau 3 -->
    </div>
</div>
```

:::

#### Variantes 100% largeur du viewport en mobile

Les onglets peuvent s'afficher em mobile sur la totalité de la largeur du viewport avec l'utilisation de la classe `fr-tabs--viewport-width`.

**Exemple de variante 100% largeur du viewport en mobile**

```HTML
<div class="fr-tabs fr-tabs--viewport-width">
    <!-- Contenu des onglets -->
</div>
```

---

### JavaScript

#### Installation du JavaScript

Pour fonctionner, le composant onglet nécessite l'utilisation de JavaScript.
Chaque composant utilisant JavaScript possède un fichier JS spécifique et requiert le fichier JS du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/tab/tab.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/tab/tab.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur l'Onglet, les éléments suivants sont instanciés :

- Le conteneur, via la classe : `fr-tabs`
- La liste des onglets, via la classe : `fr-tabs__list`
- L'onglet, via la classe : `fr-tabs__tab`
- Le panneau d'onglet, via la classe `fr-tabs__panel`

Une fois chargé, le JS ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composant en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_TAB');
dsfr(elem).tabsGroup.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### tabsGroup

:::fr-table[current]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Retourne l'API de l'onglet ouvert. |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).tabsGroup.current` |

:::

:::fr-table[hasFocus]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie vrai si le focus est sur un des éléments du groupe. |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabsGroup.hasFocus` |

:::

:::fr-table[index]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Retourne ou modifie l'index de l'onglet courant. |
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).tabsGroup.index` <br> `dsfr(elem).tabsGroup.index = 2` |

:::

:::fr-table[isGrouped]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si les onglets du groupe sont liés entre eux ou non. |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabsGroup.isGrouped` <br> `dsfr(elem).tabsGroup.isGrouped = true` |

:::

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement des onglets est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabsGroup.isEnabled = false` |

:::

:::fr-table[length]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Retourne le nombre d'onglets dans le groupe. |
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).tabsGroup.length` |

:::

:::fr-table[members]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie un tableau d'objets correspondant aux discloses des onglets du groupe. |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).tabsGroup.members` |

:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).tabsGroup.node` |

:::

###### tabsList

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'onglet est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabsList.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).tabsList.node` |

:::

###### tabButton

:::fr-table[focus]{valign=top multiline=true}
| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton |
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabButton.focus()` |

:::

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'onglet est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabButton.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).tabButton.node` |

:::

###### tabPanel

:::fr-table[disclose]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Ouvre le panneau |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).tabPanel.disclose()` |

:::

:::fr-table[isDisclosed]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Retourne vrai si le panneau est ouvert |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabPanel.isDisclosed` |

:::

:::fr-table[group]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Retourne l'API du groupe, ou null s'il n'y a pas de groupe |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).tabPanel.group` |

:::

:::fr-table[buttons]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Retourne un tableau de boutons d'ouverture du panneau |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).tabPanel.buttons` |

:::

:::fr-table[focus]{valign=top multiline=true}
| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton du panneau |
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabPanel.focus()` |

:::

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'onglet est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tabPanel.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).tabPanel.node` |

:::

#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l'[API Javascript](path:/getting-started/developer/javascript).

Sur les onglets, les événements suivants sont disponibles :

:::fr-table[événements]{valign=top multiline=true caption=false}

| Événement | Action | Élément | Attribut |
|------|------|------|------|
| `dsfr.conceal` | Fermeture de l'onglet | tab panel | `data-fr-js-tab-panel` |
| `dsfr.disclose` | Ouverture de l'onglet | tab panel | `data-fr-js-tab-panel` |
| `dsfr.click` | Click sur le bouton d'ouverture | TabButton | `data-fr-js-tab-button` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+tab+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de l'Onglet
shortTitle: Accessibilité de l'Onglet
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Onglet.
shortDescription: Structuration de contenu avec des onglets
keywords: onglets, composant, interface, navigation, accessibilité, design système, UX, DSFR
cover: ../_asset/cover/cover.png
excerpt: Le composant Onglets permet de regrouper plusieurs sections de contenu dans un espace réduit en affichant une seule section à la fois. Il est utile pour simplifier la lecture et améliorer l’expérience utilisateur.
summary: Cette fiche détaille le fonctionnement du composant Onglets du design système de l’État. Elle décrit ses usages recommandés, ses règles d’intégration et d’accessibilité, ainsi que son comportement responsive. Le contenu est destiné aux équipes design et développement souhaitant structurer des interfaces avec plusieurs sections de contenu apparentées tout en maintenant une expérience claire et fluide.
mesh:
  - component/accordion
  - component/modal
---

## Onglet

Le système d’onglets permet de structurer et de présenter plusieurs sections de contenu liées, en affichant une seule section à la fois dans un espace limité.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Onglet** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Pour la liste des onglets&nbsp;:

- `Tab` :
  - Lorsque le focus arrive dans la liste des onglets, place le focus sur l'onglet actif.
  - Lorsque le focus est placé sur l'onglet actif, déplace le focus sur le panneau de l'onglet actif.
  - Lorsque le focus est placé sur le panneau de l'onglet actif, déplace le focus sur le prochain élément focalisable.
- `Maj + Tab` :
  - Lorsque le focus est placé sur l'onglet actif, déplace le focus sur l'élément focalisable précédent.
  - Lorsque le focus est placé sur le panneau de l'onglet actif, déplace le focus sur le panneau de l'onglet actif.
- `Flèche gauche` ou `Flèche droite` :
  - Lorsque le focus est placé sur l'onglet actif, navigue entre les onglets.

### Règles d’accessibilité

Le composant **Onglet** s’appuie sur le motif de conception ARIA <span lang="en">Tabs</span> de l’<a href="https://www.w3.org/WAI/ARIA/apg/about/introduction/" rel="noopener external" target="_blank" title="W3C - nouvelle fenêtre" lang="en">Authoring Practices Guide</a> (APG).

#### Structuration

##### Liste d’onglets

- Le conteneur des onglets a un `role="tablist"`.
- Le système d’onglets doit avoir un nom accessible. On peut utiliser un attribut `aria-label` ou une liaison avec un attribut `aria-labelledby`.
- Chaque élement `<li>` de la liste des onglets a un rôle `presentation`.

##### Onglets

- Chaque onglet a un `role="tab"` et est associé à son panneau avec l’attribut `aria-controls`.
- Un attribut `aria-selected`est placé sur chaque onglet. Sa valeur est définie à&nbsp;:
  - `true`&nbsp;: lorsque l’onglet est sélectionné,
  - `false`&nbsp;: lorsque l’onglet n’est pas sélectionné.
- L’onglet sélectionné est également signalé par la couleur et la forme.
- Les onglets non sélectionnés ont un attribut `tabindex="-1"` pour ne pas prendre le focus.

##### Panneaux de contenu

- Chaque élément contenant le panneau de contenu d’un onglet a le rôle `tabpanel` et un attribut `tabindex="0"` pour aider les technologies d’assistance à naviguer vers le contenu.
- Le panneau est associé à l’onglet avec l’attribut `aria-labelledby`.

#### Scroll horizontal

Le composant utilise le scroll horizontal natif du navigateur lorsque le nombre d’onglets dépasse la largeur du conteneur.

Le critère 13.10 du RGAA ne s’applique donc pas (cas particulier).

#### Contrastes de couleurs

Le composant Onglet est suffisamment contrasté en thème clair et en thème sombre.

---
### Restitution par les lecteurs d’écran

La restitution du système d’onglets est restitué différemment selon les lecteurs d’écran.

- Lorsque le lecteur d’écran est sur la liste d’onglets (`role="tablist"`)&nbsp;: le nom et le rôle sont restitués, sauf sur VoiceOver iOS qui ne restitue rien.
- Lorsque le lecteur d’écran est sur un onglet (`role="tab"`, `aria-selected`)&nbsp;: le nom, le rôle et l’état sont restitués par tous les lecteurs d’écran.
- Lorsque le lecteur d’écran est positionné sur le panneau (`role="tabpanel"`)&nbsp;: le nom, le rôle sont restitués, sauf sur VoiceOver iOS qui ne restitue rien.

:::fr-accordion[#### Versions navigateurs et lecteurs d’écran]{id=sr-le-desktop}

Les tests de restitution ont été effectués en ajoutant le lecteur d’écran intégré à Windows 11 (Narrateur) et le navigateur web Chrome à l’environnement de tests du RGAA.

Versions des navigateurs web&nbsp;:

- Firefox 138
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

- **Couleurs&nbsp;:** 3.1, 3.2
- **Scripts&nbsp;:** 7.1, 7.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Motif de conception WAI-ARIA Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/tab/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Onglets - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/component/tab/tab.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../dist/component/tab/tab.lega...
```

(Truncated for brevity. See source file for full HTML)
