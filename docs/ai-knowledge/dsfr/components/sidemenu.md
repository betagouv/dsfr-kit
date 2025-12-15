# DSFR Sidemenu Component

*Generated from local node_modules*

## Presentation

---
title: Menu latéral
shortTitle: Menu latéral
titleId: Sidemenu
description: Présentation du composant Menu latéral, élément de navigation secondaire qui organise des liens verticaux pour guider l’usager entre différentes pages d’une même rubrique.
shortDescription: Naviguer entre pages liées avec un menu latéral.
keywords: menu latéral, navigation, composant, design system, interface, UX, accessibilité, hiérarchie, rubrique, sommaire
cover: ./_asset/cover/cover.png
excerpt: Le menu latéral permet de structurer la navigation entre les pages d’une même rubrique ou d’un thème. Il s’utilise en complément de la navigation principale, notamment pour les sites à profondeur élevée.
summary: Ce contenu présente le menu latéral comme un composant de navigation secondaire destiné à faciliter la circulation entre les pages d’une rubrique. Il détaille ses cas d’usage, ses comportements interactifs, ses variations selon la profondeur de navigation, et les règles éditoriales à respecter. Il précise également les contraintes de structure, les bonnes pratiques en responsive, et rappelle les distinctions avec le sommaire. Ce guide est conçu pour les équipes souhaitant implémenter une navigation hiérarchique claire et accessible dans des interfaces complexes.
mesh:
  - component/breadcrumb
  - component/summary
---

## Menu latéral

Le menu latéral est un système de navigation secondaire présentant une liste verticale de liens placée à côté du contenu.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=sidemenu--sidemenu}

### Quand utiliser ce composant ?

Proposer le menu latéral pour permettre à l’usager de naviguer entre les différentes pages d’une rubrique ou d’un même thème.

Il est recommandé d’utiliser le menu latéral sur des sites ayant un niveau de profondeur assez important (2 niveaux de navigation ou plus).

> [!WARNING]
> Bien différencier le menu latéral du sommaire. Le [sommaire](../../../summary/_part/doc/index.md) est utilisé pour naviguer entre les différentes sections d’une même page. Il ne présente pas des liens mais des ancres.

### Comment utiliser ce composant ?

- **Proposer des pages n’étant pas déjà rattachées à la navigation principale** au sein du menu latéral. Il ne s’agit pas d’une redite mais bien d’une navigation secondaire et complémentaire.
- **Indiquer à l’usager où il se trouve dans la hiérarchie de navigation** en affichant la page active. Pour cela, l’élément de menu correspondant à la page courante doit être en état “actif”.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Indiquer la page active au sein du menu latéral pour que l’usager sache où il se trouve.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas laisser l’usager déduire sa position au sein du menu latéral.

:::

- **Placer le menu latéral à gauche ou à droite de la page**, selon le besoin. Quel que soit son positionnement, il prend une largeur de 3 colonnes sur toute la hauteur de la page.

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/use/do-2.png)

Positionner le menu latéral à gauche ou à droite du contenu, sur une largeur de 3 colonnes, sur toute la hauteur de la page.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](./_asset/use/dont-2.png)

Ne pas repasser le contenu de la page sur une grille de 12 colonnes en présence d’un menu latéral.

:::

- **Réintégrer les éléments de navigation du menu latéral dans le menu burger** si vous choisissez de le cacher en version mobile.

### Règles éditoriales

- **Garder le même nom de rubrique dans le menu et dans le contenu**, pour donner un repère à l’usager.

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/edit/do-1.png)

Avoir le même nom de rubrique dans le contenu et au sein du menu latéral.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](./_asset/edit/dont-1.png)

Ne pas changer le nom de la rubrique au sein du menu latéral pour ne pas perdre l’usager.

:::
::::

- **Raccourcir les titres des liens au sein du menu latéral par rapport aux titres véritables des pages** si ces derniers apparaissent trop longs.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design du Menu latéral
shortTitle: Design du Menu latéral
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Menu latéral.
shortDescription: Naviguer entre pages liées avec un menu latéral.
keywords: menu latéral, navigation, composant, design system, interface, UX, accessibilité, hiérarchie, rubrique, sommaire
cover: ./_asset/cover/cover.png
excerpt: Le menu latéral permet de structurer la navigation entre les pages d’une même rubrique ou d’un thème. Il s’utilise en complément de la navigation principale, notamment pour les sites à profondeur élevée.
summary: Ce contenu présente le menu latéral comme un composant de navigation secondaire destiné à faciliter la circulation entre les pages d’une rubrique. Il détaille ses cas d’usage, ses comportements interactifs, ses variations selon la profondeur de navigation, et les règles éditoriales à respecter. Il précise également les contraintes de structure, les bonnes pratiques en responsive, et rappelle les distinctions avec le sommaire. Ce guide est conçu pour les équipes souhaitant implémenter une navigation hiérarchique claire et accessible dans des interfaces complexes.
mesh:
  - component/breadcrumb
  - component/summary
---

## Menu latéral

Le menu latéral est un système de navigation secondaire présentant une liste verticale de liens placée à côté du contenu.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie du menu latéral](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Le titre de la rubrique]

::dsfr-doc-pin[Un chevron orienté vers le bas]{add='indiquant que la section du menu peut s‘ouvrir. Il est orienté vers le haut quand la section peut se refermer' required=true}

::dsfr-doc-pin[Un séparateur]{required=true}

::dsfr-doc-pin[Une bordure lorsque l’item est en état “courant”]{required=true}

::dsfr-doc-pin[Des liens directs ou dépliants]{add="à minima pour le niveau 1" required=true}

:::

### Variations

**Menu latéral avec un seul niveau d’arborescence (accès direct)**

::dsfr-doc-storybook{storyId=sidemenu--link}

Il est composé d’une liste de liens vers les pages de la rubrique courante.

**Menu latéral avec deux niveaux d’arborescence**

::dsfr-doc-storybook{storyId=sidemenu--sidemenu}

Il permet d’afficher les niveaux secondaires d’une rubrique. Le clic sur le premier niveau fait apparaitre la liste des liens lui étant rattachée.

**Menu latéral avec trois niveaux d’arborescence**

::dsfr-doc-storybook{storyId=sidemenu--submenu-sidemenu}

Il permet d’afficher les niveaux 1, 2 et 3 imbriqués d’une rubrique.

**Menu latéral fixe**

Le menu latéral peut également s’afficher de manière fixe sur votre page, afin de rester visible tout au long de la navigation de l’utilisateur sur la page ouverte.

**Menu latéral fixe, affiché sur 100% de la hauteur de page**

Enfin vous pouvez afficher un menu latéral fixe sur 100% de la hauteur de votre page.

**Responsive**

::dsfr-doc-storybook{storyId=sidemenu--sidemenu width=375}

En version mobile, le menu latéral est masqué par défaut et est remplacé par le bouton ‘Dans cette rubrique'. Au clic sur ce dernier, le menu se déplie et affiche l’ensemble de la liste de liens.

### Tailles

Le menu latéral prend une largeur fixe de 3 colonnes.

### États

**État au clic**

L’état au clic correspond au comportement constaté par l’usager une fois une section du menu latéral ouverte, après avoir cliqué sur le premier niveau de navigation.

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole une section ou un lien du menu latéral avec sa souris. Il existe 2 états au survol :

- Lorsque la section est fermée ou qu’il s’agit d’un lien direct

- Lorsque la section est ouverte

**État actif**

L’état actif correspond au comportement constaté par l’usager après avoir cliqué sur un des liens du menu latéral. Il renseigne sur la page courante en cours de consultation.

### Personnalisation

Le menu latéral n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](#menu-latéral).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Utiliser uniquement la couleur bleu pour la page active du menu latéral.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur de la page active du menu latéral.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code du Menu latéral
shortTitle: Code du Menu latéral
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Menu latéral.
shortDescription: Naviguer entre pages liées avec un menu latéral.
keywords: menu latéral, navigation, composant, design system, interface, UX, accessibilité, hiérarchie, rubrique, sommaire
cover: ./_asset/cover/cover.png
excerpt: Le menu latéral permet de structurer la navigation entre les pages d’une même rubrique ou d’un thème. Il s’utilise en complément de la navigation principale, notamment pour les sites à profondeur élevée.
summary: Ce contenu présente le menu latéral comme un composant de navigation secondaire destiné à faciliter la circulation entre les pages d’une rubrique. Il détaille ses cas d’usage, ses comportements interactifs, ses variations selon la profondeur de navigation, et les règles éditoriales à respecter. Il précise également les contraintes de structure, les bonnes pratiques en responsive, et rappelle les distinctions avec le sommaire. Ce guide est conçu pour les équipes souhaitant implémenter une navigation hiérarchique claire et accessible dans des interfaces complexes.
mesh:
  - component/breadcrumb
  - component/summary
---

## Menu latéral

Le menu latéral est un système de navigation secondaire présentant une liste verticale de liens placée à côté du contenu.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Menu latéral** permet aux utilisateurs de naviguer entre les différentes pages d’une rubrique ou d’un même thème.

Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

- Le conteneur principal, obligatoire, du menu latéral est un élément HTML `<nav>` défini par la classe `fr-sidemenu`.
  - Il dispose d'attribut `aria-labelledby`, dont la valeur doit correspondre à l'attribut `id` du titre du menu latéral.
- Le conteneur intérieur, obligatoire, du menu latéral est un élément HTML `<div>` défini par la classe `fr-sidemenu__inner`, contenant :
  - Le bouton d'ouverture, obligatoire, affiché uniquement en mobile est un élément HTML `<button>` de type `button` défini par la classe `fr-sidemenu__btn`.
    - Le libellé du bouton indique l'action d'ouverture du menu latéral en vue mobile.
    - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le bloc refermable du menu latéral est ouvert ou fermé.
    - Le bouton est lié au bloc refermable via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du bloc refermable.
  - Le bloc refermable, obligatoire, défini par la classe `fr-collapse`, est un élément HTML `<div>` placé après le bouton. Il s'agit d'un élément générique du core utilisé par d'autres composants tels que la navigation ou l'accordéon.
    - Il dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
    - Le bloc refermable contient :
      - Le titre, optionnel, du menu latéral est un élément HTML `<div>` défini par la classe `fr-sidemenu__title`.
      - La liste de liens ou de sous-sections, obligatoire, est un élément HTML `<ul>` placé après le titre et défini par la classe `fr-sidemenu__list`.
        - Chaque élément `<li>` défini par la classe `fr-sidemenu__item` de la liste contient :
          - Un lien, un élément HTML `<a>` défini par la classe `fr-sidemenu__link`.
          - L'élément actif de la liste est défini par la classe `fr-sidemenu__item--active` et le lien contenu dispose d'un attribut `aria-current="page"`.

**Exemple de structure HTML simple**

```HTML
<nav class="fr-sidemenu" aria-labelledby="fr-sidemenu-title">
  <div class="fr-sidemenu__inner">
    <button class="fr-sidemenu__btn" aria-controls="fr-sidemenu-wrapper" aria-expanded="false">Dans cette rubrique</button>
    <div class="fr-collapse" id="fr-sidemenu-wrapper">
      <div class="fr-sidemenu__title" id="fr-sidemenu-title">Titre de rubrique</div>
      <ul class="fr-sidemenu__list">
        <li class="fr-sidemenu__item fr-sidemenu__item--active">
          <a class="fr-sidemenu__link" href="#" target="_self" aria-current="page">Accès direct</a>
        </li>
        <li class="fr-sidemenu__item">
          <a class="fr-sidemenu__link" href="#" target="_self">Accès direct</a>
        </li>
        <li class="fr-sidemenu__item">
          <a class="fr-sidemenu__link" href="#" target="_self">Accès direct</a>
        </li>
        <li class="fr-sidemenu__item">
          <a class="fr-sidemenu__link" href="#" target="_self">Accès direct</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

#### Sous-sections

Le menu latéral peut contenir jusqu'à trois niveaux d’arborescence et permettent d’afficher les niveaux 1, 2 et 3 imbriqués d’une rubrique.

- Le conteneur d'une sous-section est un élément de la liste de liens `<li>` défini par la classe `fr-sidemenu__item` contenant :
  - Le bouton d'ouverture de la sous-section, un élément HTML `<button>` de type `button` défini par la classe `fr-sidemenu__btn`.
    - Le libellé du bouton indique le nom de la sous-section.
    - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le bloc refermable de la sous-section est ouvert ou fermé.
    - Le bouton est lié au bloc refermable via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du bloc refermable.
    - Le bouton dispose d'un attribut `aria-current`, sa valeur [true|false] défini si le bouton est actif.
  - Le bloc refermable, défini par la classe `fr-collapse`, est un élément HTML `<div>` placé après le bouton.
    - Il dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
    - Le bloc refermable contient une liste de liens pouvant contenir un troisième niveau d'imbrication du menu latéral basé sur la même structure de sous-section.

**Exemple de structure HTML**

:::fr-accordion[Déplier pour voir le code]{id=sidemenu-complex-structure}

```HTML
<nav class="fr-sidemenu" role="navigation" aria-labelledby="sidemenu-title">
  <div class="fr-sidemenu__inner">
    <button aria-expanded="false" aria-controls="sidemenu" type="button" class="fr-sidemenu__btn">Dans cette rubrique</button>
    <div class="fr-collapse" id="sidemenu">
      <p class="fr-sidemenu__title" id="sidemenu-title">Titre de rubrique</p>
      <ul class="fr-sidemenu__list">
        <li class="fr-sidemenu__item">
          <button aria-expanded="true" aria-controls="sidemenu-submenu-level-02" aria-current="true" type="button" class="fr-sidemenu__btn">Entrée menu active</button>
          <div class="fr-collapse" id="sidemenu-submenu-level-02">
            <ul class="fr-sidemenu__list">
              <li class="fr-sidemenu__item">
                <a href="#" class="fr-sidemenu__link">Accès direct niveau 2</a>
              </li>
              <li class="fr-sidemenu__item">
                <button aria-expanded="true" aria-controls="sidemenu-submenu-level-03" aria-current="true" type="button" class="fr-sidemenu__btn">Entrée menu active</button>
                <div class="fr-collapse" id="sidemenu-submenu-level-03">
                  <ul class="fr-sidemenu__list">
                    <li class="fr-sidemenu__item">
                      <a href="#" class="fr-sidemenu__link">Accès direct niveau 3</a>
                    </li>
                    <li class="fr-sidemenu__item">
                      <a aria-current="page" href="#" class="fr-sidemenu__link">Accès direct niveau 3</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="fr-sidemenu__item">
          <a href="#" class="fr-sidemenu__link">Accès direct</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
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
| Sidemenu   | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/sidemenu/sidemenu.min.css" rel="stylesheet">
```

#### Variante de menu latéral fixe

Le menu latéral peut s’afficher de manière fixe sur votre page, afin de rester visible tout au long de la navigation de l’utilisateur sur la page ouverte avec l'utilisation de la classe `fr-sidemenu--sticky`.

**Exemples de variante de menu latéral fixe**

```HTML
<nav class="fr-sidemenu fr-sidemenu--sticky" role="navigation" aria-labelledby="sidemenu-sticky-title">
    <!-- Contenu du menu latéral fixe -->
</nav>
```

#### Variante de menu latéral fixe, affiché sur 100% de la hauteur de page

Le menu latéral peut s’afficher de manière fixe sur 100% de la hauteur de votre page avec l'utilisation de la classe `fr-sidemenu--sticky-full-height`.

**Exemples de variante de menu latéral fixe, affiché sur 100% de la hauteur de page**

```HTML
<nav class="fr-sidemenu fr-sidemenu--sticky-full-height" role="navigation" aria-labelledby="sidemenu-sticky-full-height-title">
    <!-- Contenu du menu latéral fixe, affiché sur 100% de la hauteur de page -->
</nav>
```

#### Variante de menu latéral à droite de la page

Le menu latéral peut être placé à droite de la page avec l'utilisation de la classe `fr-sidemenu--right` afin que la bordure se positionne à gauche du menu.
On peut également le rendre fixe avec l'utilisation de la classe `fr-sidemenu--sticky`.

**Exemples de variante de menu latéral à droite de la page**

```HTML
<nav class="fr-sidemenu fr-sidemenu--right" role="navigation" aria-labelledby="sidemenu-right-title">
    <!-- Contenu du menu latéral à droite de la page -->
</nav>
```

---

### JavaScript

#### Installation du JavaScript

Pour fonctionner le composant menu latéral nécessite l'utilisation de JavaScript.
Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/sidemenu/sidemenu.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/sidemenu/sidemenu.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur le menu latéral, les éléments suivants sont instanciés :

- La liste de liens, via la classe : `fr-sidemenu__list`.
- Les éléments de la liste, via la classe : `fr-sidemenu__item`.
- Le bouton d'ouverture, via la classe `fr-sidemenu__btn`.
- La sous-section, via la classe `fr-collapse`.

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_SOUS_SECTION');
dsfr(elem).collapse.disclose();
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### sidemenuList

:::fr-table[current]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Retourne l'API de la sous-section ouverte. <br>_Si aucune sous-section n'est ouverte, ou si plusieurs sous-sections sont ouvertes, renvoie `null`._|
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).sidemenuList.current` |

:::

:::fr-table[hasFocus]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie vrai si le focus est sur un des éléments du groupe. |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).sidemenuList.hasFocus` |

:::

:::fr-table[index]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Retourne ou modifie l'index de la sous-section courante. <br>_Si aucune sous-section n'est ouverte, l'index vaut 0._ |
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).sidemenuList.index` <br> `dsfr(elem).sidemenuList.index = 2` |

:::

:::fr-table[isGrouped]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si les sous-sections du groupe sont liées en eux ou non. <br>_Si `true`, lorsqu'une sous-section est ouverte les autres se referment. Si `false`, il est possible d'en ouvrir plusieurs. Si l'attribut n'est pas défini les sous-sections sont groupées par défaut._|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).sidemenuList.isGrouped` <br> `dsfr(elem).sidemenuList.isGrouped = true` |

:::

:::fr-table[length]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Retourne le nombre de sous-sections dans le groupe. |
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).sidemenuList.length` |

:::

:::fr-table[members]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie un tableau d'objets correspondant aux sous-sections du groupe. |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).sidemenuList.members` |

:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).sidemenuList.node` |

:::

##### sidemenuItem

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement du menu latéral est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).sidemenuItem.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).sidemenuItem.node` |

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

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement du bouton du menu latéral est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapseButton.isEnabled = false` |

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
| **Description** | Ferme la sous-section |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).collapse.conceal()` |

:::

:::fr-table[disclose]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Ouvre la sous-section |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).collapse.disclose()` |

:::

:::fr-table[isDisclosed]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Retourne vrai si la sous-section est ouverte |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.isDisclosed` |

:::

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement du menu latéral est activé ou non |
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
| **Description** | Retourne un tableau de boutons d'ouverture de la sous-section |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).collapse.buttons` |

:::

:::fr-table[focus]{valign=top multiline=true}
| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton de la sous-section |
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).collapse.focus()` |

:::

:::fr-table[parent]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parent, ici le menu latéral |
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

Dans la version mobile du menu latéral et sur chaque menu déroulant du menu latéral, les événements suivants sont disponibles :

:::fr-table[événements]{valign=top multiline=true caption=false}

| Événement | Action | Élément | Attribut |
|------|------|------|------|
| `dsfr.conceal` | Fermeture de l'élément | Collapse | `data-fr-js-collapse` |
| `dsfr.disclose` | Ouverture de l'élément | Collapse | `data-fr-js-collapse` |
| `dsfr.click` | Click sur le bouton d'ouverture | CollapseButton | `data-fr-js-collapse-button` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+sidemenu+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Menu latéral
shortTitle: Accessibilité du Menu latéral
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Menu latéral.
shortDescription: Naviguer entre pages liées avec un menu latéral.
keywords: menu latéral, navigation, composant, design system, interface, UX, accessibilité, hiérarchie, rubrique, sommaire
cover: ./_asset/cover/cover.png
excerpt: Le menu latéral permet de structurer la navigation entre les pages d’une même rubrique ou d’un thème. Il s’utilise en complément de la navigation principale, notamment pour les sites à profondeur élevée.
summary: Ce contenu présente le menu latéral comme un composant de navigation secondaire destiné à faciliter la circulation entre les pages d’une rubrique. Il détaille ses cas d’usage, ses comportements interactifs, ses variations selon la profondeur de navigation, et les règles éditoriales à respecter. Il précise également les contraintes de structure, les bonnes pratiques en responsive, et rappelle les distinctions avec le sommaire. Ce guide est conçu pour les équipes souhaitant implémenter une navigation hiérarchique claire et accessible dans des interfaces complexes.
mesh:
  - component/breadcrumb
  - component/summary
---

## Menu latéral

Le menu latéral est un système de navigation secondaire présentant une liste verticale de liens placée à côté du contenu.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Menu latéral** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

- `Entrée` ou `Espace` :
  - Lorsque le focus est placé sur le bouton d'ouverture du menu latéral, et que sa sous-section associée est fermée, ouvre la sous-section.
  - Lorsque le focus est placé sur le bouton d'ouverture du menu latéral, et que sa sous-section associée est déjà ouverte, referme la sous-section.
- `Tab` : Place le focus sur le prochain élément focalisable.
- `shift` + `Tab` : Place le focus sur l'élément focalisable précédent.

### Règles d’accessibilité

#### Structuration

- Le menu latéral est un système de navigation secondaire. Il doit être structuré dans un élément `nav role="navigation"`.
- Le conteneur principal du menu latéral possède un attribut `aria-labelledby` défini sur l’ID du titre du menu latéral afin de nommer et donner un contexte explicite à la navigation.
- Les éléments du menu latéral sont structurés dans une liste avec les éléments `ul` et `li `.

##### Éléments actifs

- Le lien actif dispose d’un attribut `aria-current="page"`.
- Si une sous-section associée à un bouton d'ouverture de la navigation est active, le bouton a un attribut `aria-current` défini sur "true".

##### Entrée de menu

- Les boutons d’ouverture et de fermeture des menus déroulants et mega-menus possèdent&nbsp;:
  - un attribut `aria-expanded` défini à `true`lorsque le sous-menu est affiché, à `false`lorsque la sous-section est fermée.
  - un attribut `aria-controls` défini sur l'ID du bloc refermable associé.

#### Contrastes de couleurs

Le composant Menu latéral est suffisamment contrasté en thème clair.

En thème sombre, le contraste est insuffisant au survol sur les items de menu actifs.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Menu latéral.

---

### Critères RGAA applicables

- **Couleurs** : 3.1, 3.2
- **Liens** : 6.1, 6.2
- **Scripts** : 7.1, 7.3
- **Structuration** : 9.2, 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.3,10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation** : 12.2, 12.6, 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Élément nav](https://html.spec.whatwg.org/#the-nav-element)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/sidemenu/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Menu latéral - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/component/sidemenu/sidemenu.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../dist/compone...
```

(Truncated for brevity. See source file for full HTML)
