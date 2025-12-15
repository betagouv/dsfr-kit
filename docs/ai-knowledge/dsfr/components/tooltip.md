# DSFR Tooltip Component

*Generated from local node_modules*

## Presentation

---
title: Infobulle
shortTitle: Infobulle
titleId: Tooltip
description: Présentation du composant Infobulle, aide contextuelle permettant d’afficher une information complémentaire lors du survol ou du clic sur un élément de l’interface.
shortDescription: Afficher une aide contextuelle discrète.
keywords: infobulle, aide contextuelle, tooltip, accessibilité, survol, interface, UX, design system, indication, contenu complémentaire
cover: ./_asset/cover/cover.png
excerpt: L’infobulle permet de fournir une information non essentielle de manière discrète et temporaire. Elle s’affiche au survol ou au clic et reste limitée en contenu.
summary: Ce contenu décrit les usages du composant Infobulle, conçu pour afficher une information complémentaire lorsqu’elle ne peut être intégrée directement dans la page. Il en précise les cas d’usage, les limites d’affichage sur mobile, et les bonnes pratiques d’écriture et de comportement. L’infobulle doit être concise, sans mise en forme ni interaction, et n’être utilisée que pour des précisions non essentielles. Ce guide s’adresse aux concepteurs d’interfaces souhaitant améliorer la compréhension utilisateur sans alourdir la structure de la page.
mesh:
  - component/modal
  - component/display
---
## Infobulle

L’infobulle (ou bulle d’aide, aide contextuelle) est un élément d’indication permettant d’afficher un contenu complémentaire lié à un élément précis de l’interface.

Elle est cachée par défaut et s’affiche par-dessus le reste de la page lors du survol ou au clic de l’élément associé.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=tooltip--tooltip}

### Quand utiliser ce composant ?

**Utiliser l’infobulle uniquement lorsqu’il n’est pas possible d’afficher l’information directement dans le contenu de la page**, sans la cacher dans une bulle. L’information contenue dans l’infobulle ne doit pas être essentielle à la bonne compréhension du parcours par l’usager.

**A noter :** Privilégier son usage sur des sites principalement consultés sur desktop. Elle est à éviter sur des sites enregistrant une forte fréquentation mobile car certaines de ses variations ne s’affiche pas sur mobile.

Dans ce cas, plutôt qu’une infobulle, il est possible d’utiliser une [alerte](../../../alert/_part/doc/index.md), un [accordéon](../../../accordion/_part/doc/index.md), une [mise en avant](../../../callout/_part/doc/index.md) ou même une zone personnalisée.

### Comment utiliser ce composant ?

- **Utiliser l’infobulle pour apporter des précisions non essentielles** sur un élément de la page.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Utiliser une infobulle pour préciser un libellé dans un formulaire, par exemple.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas répéter des éléments déjà visibles dans une infobulle.

:::

- **Conserver un format de texte simple** n’incluant pas de mise en forme riche (gras, italique etc.)

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/dont-2.png)

Ne pas inclure de graisse ou d’italique au texte de l’infobulle.

:::

- **Exclure tous types d’interactions** (boutons, liens etc.) **ou de médias** au sein de l’infobulle.

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-3.png)

Ne pas ajouter de lien au sein de l’infobulle.

:::

- **Limiter le nombre d’infobulles** proposé dans une même page.
- **Empêcher l’ouverture de plusieurs infobulles** dans un même affichage.

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-2.png)

Permettre l’ouverture d’une seule infobulle à la fois.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-4.png)

Ne pas permettre l’ouverture de plusieurs infobulles en simultanée.

:::

- **Utiliser une flèche pour lier la zone de texte à l’élément associé** afin que l’usager comprenne à quoi l’infobulle se réfère.

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-3.png)

Utiliser une flèche pour lier la zone de texte à l’élément associé. L’usager doit comprendre à quoi l’infobulle se réfère.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-5.png)

Ne pas dissocier la zone de texte à l’élément associé.

:::

::::

### Règles éditoriales

- **Rédiger un texte concis et explicite** garantissant la compréhension de l’usager.
- **Privilégier un texte court** pour ne démultiplier la taille de l’infobulle.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-1.png)

Proposer un texte court afin que la taille de l’infobulle reste équilibrée.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-1.png)

Ne pas proposer de texte trop long, qui déformerait l’infobulle.

:::

::::

## Design

---
boost: 0
sitemap:
  noindex: true
title: Design de l'Infobulle
shortTitle: Design de l'Infobulle
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Infobulle.
shortDescription: Afficher une aide contextuelle discrète.
keywords: infobulle, aide contextuelle, tooltip, accessibilité, survol, interface, UX, design system, indication, contenu complémentaire
cover: ../_asset/cover/cover.png
excerpt: L’infobulle permet de fournir une information non essentielle de manière discrète et temporaire. Elle s’affiche au survol ou au clic et reste limitée en contenu.
summary: Ce contenu décrit les usages du composant Infobulle, conçu pour afficher une information complémentaire lorsqu’elle ne peut être intégrée directement dans la page. Il en précise les cas d’usage, les limites d’affichage sur mobile, et les bonnes pratiques d’écriture et de comportement. L’infobulle doit être concise, sans mise en forme ni interaction, et n’être utilisée que pour des précisions non essentielles. Ce guide s’adresse aux concepteurs d’interfaces souhaitant améliorer la compréhension utilisateur sans alourdir la structure de la page.
mesh:
  - component/modal
  - component/display
---

## Infobulle

L’infobulle (ou bulle d’aide, aide contextuelle) est un élément d’indication permettant d’afficher un contenu complémentaire lié à un élément précis de l’interface.

Elle est cachée par défaut et s’affiche par-dessus le reste de la page lors du survol ou au clic de l’élément associé.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie de l'infobulle](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un texte simple]{add="sans formatage riche" required=true}

::dsfr-doc-pin[Un cadre]{required=true}

::dsfr-doc-pin[Une flèche pointant vers l’élément associé]{required=true}

::dsfr-doc-pin[Une zone de déclenchement]{add="sous forme de bouton tertiaire sans contour avec icône, dans le cas d’un déclenchement au clic" required=true}

:::

### Variations

L’infobulle compte deux variations, suivant le type de déclenchement.

**Déclenchement au clic (ou information contextuelle)**

::dsfr-doc-storybook{storyId=tooltip--tooltip-click-button}

- Privilégier cette variation si le contexte le permet.
- Adosser l’icône représentant le point d’interrogation et permettant de déclencher l’infobulle à l’élément auquel elle se rapporte.

**Déclenchement au survol (ou au focus)**

::dsfr-doc-storybook{storyId=tooltip--tooltip}

- Réserver son usage aux cas où il n’est pas possible d’afficher l’information autrement ou qu’il n’y a pas la place d’intégrer une zone de déclenchement, et aux parcours majoritairement en desktop car elle ne s’affiche pas en mobile.

### Tailles

La taille de l’infobulle s’adapte à son contenu.

### États

L’infobulle n’est sujette à aucun changement d’état.

### Personnalisation

L’infobulle n'est pas personnalisable.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur de fond de l’infobulle.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas personnaliser l’icône de l’infobulle.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code de l'Infobulle
shortTitle: Code de l'Infobulle
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Infobulle.
shortDescription: Afficher une aide contextuelle discrète.
keywords: infobulle, aide contextuelle, tooltip, accessibilité, survol, interface, UX, design system, indication, contenu complémentaire
cover: ../_asset/cover/cover.png
excerpt: L’infobulle permet de fournir une information non essentielle de manière discrète et temporaire. Elle s’affiche au survol ou au clic et reste limitée en contenu.
summary: Ce contenu décrit les usages du composant Infobulle, conçu pour afficher une information complémentaire lorsqu’elle ne peut être intégrée directement dans la page. Il en précise les cas d’usage, les limites d’affichage sur mobile, et les bonnes pratiques d’écriture et de comportement. L’infobulle doit être concise, sans mise en forme ni interaction, et n’être utilisée que pour des précisions non essentielles. Ce guide s’adresse aux concepteurs d’interfaces souhaitant améliorer la compréhension utilisateur sans alourdir la structure de la page.
mesh:
  - component/modal
  - component/display
---

## Infobulle

L’infobulle (ou bulle d’aide, aide contextuelle) est un élément d’indication permettant d’afficher un contenu complémentaire lié à un élément précis de l’interface.

Elle est cachée par défaut et s’affiche par-dessus le reste de la page lors du survol ou au clic de l’élément associé.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Il existe deux types d’**Infobulles** suivant son déclenchement.

##### Déclenchement au survol

L’infobulle au survol se compose des éléments suivants :

1. Une zone de déclenchement :
    - Doit être un element focusable (`<a>`, `<input>`, `<select>`, `<textarea>`, etc) pour déclencher l'affichage du conteneur à la prise de focus.
    - Elle est liée au conteneur via l'attribut `aria-describedby`, sa valeur doit correspondre à l'attribut `id` du conteneur.
2. Un conteneur pour le texte de l'infobulle :
    - Représenté par un élément `<span>`.
    - Doit avoir un attribut `id` obligatoire, pour être lié à la zone de déclenchement.
    - Doit avoir un attribut `role="tooltip"`.
    - Doit avoir les classes `fr-tooltip` et `fr-placement`.

**Exemple de structure HTML**

```HTML
<a class="fr-link" aria-describedby="tooltip-1" href="[à modifier]">
    Exemple
</a>
<span class="fr-tooltip fr-placement" id="tooltip-1" role="tooltip">
    Lorem [...] elit ut.
</span>
```

##### Déclenchement au clic

L’infobulle au clic se compose des éléments suivants :

1. Une zone de déclenchement :
    - La zone de déclenchement est une balise `<button type="button">`.
    - Elle est liée au conteneur via l'attribut `aria-describedby`, sa valeur doit correspondre à l'attribut `id` du conteneur.
    - Doit avoir les classes `fr-btn--tooltip fr-btn`.
2. Un conteneur pour le texte de l'infobulle :
    - Représenté par un élément `<span>`.
    - Doit avoir un attribut `id` obligatoire, pour être lié à la zone de déclenchement.
    - Doit avoir un attribut `role="tooltip"`.
    - Doit avoir les classes `fr-tooltip` et `fr-placement`.

**Exemple de structure HTML**

```HTML
<button class="fr-btn--tooltip fr-btn" type="button" aria-describedby="tooltip-2">
    Information contextuelle
</button>
<span class="fr-tooltip fr-placement" id="tooltip-2" role="tooltip">
    Lorem [...] elit ut.
</span>
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
| tooltip    | Oui         |          |
| Button     | Non         | Pour la version avec ouverture au clic |
| Link       | Non         | Pour la version avec ouverture au survol |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/tooltip/tooltip.min.css" rel="stylesheet">
```

---

### JavaScript

L'infobulle est un composant qui nécessite l'importation de fichiers JavaScript spécifiques pour son fonctionnement de base.

#### Installation du JavaScript

Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/tooltip/tooltip.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/tooltip/tooltip.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur le tooltip, les éléments suivants sont instanciés :

- Le conteneur, via la classe : `fr-tooltip`
- Le déclencheur, via l'attribut : `aria-describedby` lié à l'`id` du conteneur

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_TOOLTIP');
dsfr(elem).tooltip.show();
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

###### tooltip

:::fr-table[parent]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parente |
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
| **Exemple** | `dsfr(elem).tooltip.node` |

:::

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'infobulle est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tooltip.isEnabled = false` |

:::

:::fr-table[isShown]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si l'infobulle est affichée ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tooltip.isShown = false` |

:::

:::fr-table[show]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Affiche l'infobulle |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).tooltip.show()` |

:::

:::fr-table[hide]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Cache l'infobulle |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).tooltip.hide()` |

:::

:::fr-table[mode]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini le mode de placement de l'infobulle |
| **Type** | property |
| **Retour** | 'placement_auto' \| 'placement_manual' |
| **Exemple** | `dsfr(elem).tooltip.mode = 'placement_manual'` |

:::

:::fr-table[align]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini l'alignement vertical de l'infobulle en `mode='placement_manual'` |
| **Type** | property |
| **Retour** | 'align_start' \| 'align_center' \| 'align_end' |
| **Exemple** | `dsfr(elem).tooltip.align = 'align_start'` |

:::

:::fr-table[place]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Définit le placement horizontal de l'infobulle par rapport au déclencheur en `mode='placement_manual'` |
| **Type** | property |
| **Retour** | 'place_top' \| 'place_bottom' \| 'place_left' \| 'place_right' |
| **Exemple** | `dsfr(elem).tooltip.place = 'place_top'` |

:::

###### tooltipReferent

:::fr-table[parent]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parente |
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
| **Exemple** | `dsfr(elem).tooltipReferent.node` |

:::

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement du déclencheur est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tooltipReferent.isEnabled = false` |

:::

#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l'[API Javascript](path:/getting-started/developer/javascript).

Sur l’infobulle, les événements suivants sont disponibles :

:::fr-table[événements]{valign=top multiline=true caption=false}

| Événement | Action | Élément | Attribut |
|------|------|------|------|
| `dsfr.show` | Affichage de l’infobulle | tooltip | `data-fr-js-tab-tooltip` |
| `dsfr.hide` | Masquage de l’infobulle | tooltip | `data-fr-js-tab-tooltip` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+tooltip+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de l'Infobulle
shortTitle: Démonstration de l'Infobulle
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Infobulle.
shortDescription: Afficher une aide contextuelle discrète.
keywords: infobulle, aide contextuelle, tooltip, accessibilité, survol, interface, UX, design system, indication, contenu complémentaire
cover: ../_asset/cover/cover.png
excerpt: L’infobulle permet de fournir une information non essentielle de manière discrète et temporaire. Elle s’affiche au survol ou au clic et reste limitée en contenu.
summary: Ce contenu décrit les usages du composant Infobulle, conçu pour afficher une information complémentaire lorsqu’elle ne peut être intégrée directement dans la page. Il en précise les cas d’usage, les limites d’affichage sur mobile, et les bonnes pratiques d’écriture et de comportement. L’infobulle doit être concise, sans mise en forme ni interaction, et n’être utilisée que pour des précisions non essentielles. Ce guide s’adresse aux concepteurs d’interfaces souhaitant améliorer la compréhension utilisateur sans alourdir la structure de la page.
mesh:
  - component/modal
  - component/display
---

## Infobulle

L’infobulle (ou bulle d’aide, aide contextuelle) est un élément d’indication permettant d’afficher un contenu complémentaire lié à un élément précis de l’interface.

Elle est cachée par défaut et s’affiche par-dessus le reste de la page lors du survol ou au clic de l’élément associé.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Infobulle** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

L’infobulle doit être accessible au clavier, lorsque le focus est placé sur l'élément déclencheur de l'infobulle, celle-ci devient visible.

`Échap` ferme l’infobulle que le focus soit placé sur l’élément déclencheur ou non.

### Règles d’accessibilité

- L’élément qui déclenche l’infobulle a l'attribut `aria-describedby` défini sur l’`id` de l'infobulle.
- L’élément qui sert de conteneur d’infobulle a l'attribut `role="tooltip"`.
- Assurez-vous que le texte de l'infobulle est clair et concis.

>[!WARNING]
>L’utilisation d’une infobulle déclenchée au survol n'est pas une bonne pratique en soi. L’information ne sera pas visible pour les personnes handicapées qui utilisent le contrôle vocal. Il est impossible de garantir l’accessibilité de cette variante du composant.
>Évitez tant que possible son utilisation. Préférez des libellés clairs ou un texte descriptif visible.

#### Contrastes des textes

Le composant Infobulle est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

Les lecteurs d’écran restituent différemment le composant Infobulle.

#### Infobulle déclenchée au survol

Seul le Narrateur ne restitue pas l’infobulle déclenchée au survol.

> [!NOTE]
> Avec NVDA et JAWS, en navigation en mode revue (curseur virtuel), la liaison aria-describedby n’est pas restituée sur l’infobulle déclenchée au survol. Il est nécessaire de naviguer sur le lien à la tabulation.

#### Infobulle déclenchée au clic

Tous les lecteurs d’écran restituent le contenu de l’infobulle déclenchée au clic.

> [!NOTE]
> Avec NVDA, en mode revue, la liaison aria-describedby n’est pas restituée sur l’infobulle déclenchée au clic. Il est nécessaire de naviguer sur le lien à la tabulation.
> Il s’agit d’un comportement référencé par NVDA. Voir [commentaire Github](https://github.com/nvaccess/nvda/issues/9153#issuecomment-578381262).

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
- **Liens&nbsp;:** 6.1, 6.2
- **Scripts&nbsp;:** 7.1, 7.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12, 10.13, 10.14
- **Consultation&nbsp;:** 13.9

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Rôle tooltip](https://www.w3.org/TR/wai-aria/#tooltip)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/tooltip/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Information contextuelle et Infobulle - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/component/tooltip/tooltip.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/component/share/share.main.css" rel="stylesheet">
    <link href="../../../dist/component/input/input.main.css" rel="stylesheet"...
```

(Truncated for brevity. See source file for full HTML)
