# DSFR Badge Component

*Generated from local node_modules*

## Presentation

---
title: Badge
shortTitle: Badge
titleId: Badge
description: Présentation du composant Badge utilisé pour afficher une information de type statut ou état liée à un élément de l’interface.
shortDescription: Affichage d’un statut informatif
keywords: badge, statut, état, information, design système, DSFR, accessibilité, non cliquable, interface
cover: ./_asset/cover/cover.png
excerpt: Le composant Badge permet de mettre en avant une information courte liée à un élément précis de l’interface, comme un statut ou un état, sans interaction de la part de l’usager.
summary: Utilisé pour signaler un état ou un statut dans une interface, le composant Badge apporte une information rapide à lire, positionnée au plus près de l’élément concerné. Il peut apparaître dans des menus, des tuiles, des tableaux ou des pages. Les badges système suivent des règles strictes de design et d’accessibilité, tandis que les badges standards autorisent une personnalisation encadrée.
mesh:
  - component/tag
---

## Badge

Le badge est un élément d’indication permettant de valoriser une information liée à un élément précis du site.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=badge--badge}

### Quand utiliser ce composant ?

Utiliser le badge pour mettre en avant une information de type “statut” ou “état” sur un élément du site.

> [!NOTE]
> Bien différencier le badge du tag. Opter pour le tag pour catégoriser, classer ou organiser des contenus à l'aide de mots-clés.

### Comment utiliser ce composant ?

- **Associer le badge à une information donnée** pour en préciser le statut ou l’état associé. Il ne s’agit pas d’un composant cliquable, son unique usage est informatif.
- **Placer le badge directement à côté** **de l’élément** qu’il illustre. Peu importe le contexte, le système veut que le badge soit au premier niveau de lecture.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Associer un badge à du texte ou un lien, en haut d’une page article par exemple.

:::

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-2.png)

Placer un badge au sein d’un élément de navigation, par exemple le menu latéral, pour apporter des précisions.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-3.png)

Intégrer un badge au sein de cartes ou de tuiles.e.

:::

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-4.png)

Utiliser un badge au sein d’une cellule d’un tableau.

:::

::::


### Règles éditoriales

- **Préférer un texte concis et explicite** afin de limiter la taille du badge.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-1.png)

Proposer un libellé court et explicite.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-1.png)

Ne pas rédiger des libellés trop longs. La taille du badge doit rester raisonnable.

:::

::::


- **Conserver une unité dans l’usage des badges** à travers le site pour en garantir la bonne compréhension par l’usager.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-2.png)

Utiliser des badges identiques pour indiquer une information similaire à travers le site.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-2.png)

Ne pas utiliser le même badge pour traduire des informations distinctes.

:::

::::


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design du Badge
shortTitle: Design du Badge
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Badge.
shortDescription: Affichage d’un statut informatif
keywords: badge, statut, état, information, design système, DSFR, accessibilité, non cliquable, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Badge permet de mettre en avant une information courte liée à un élément précis de l’interface, comme un statut ou un état, sans interaction de la part de l’usager.
summary: Utilisé pour signaler un état ou un statut dans une interface, le composant Badge apporte une information rapide à lire, positionnée au plus près de l’élément concerné. Il peut apparaître dans des menus, des tuiles, des tableaux ou des pages. Les badges système suivent des règles strictes de design et d’accessibilité, tandis que les badges standards autorisent une personnalisation encadrée.
mesh:
  - component/tag
---

## Badge

Le badge est un élément d’indication permettant de valoriser une information liée à un élément précis du site.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie du badge](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Une icône]{add='uniquement pour les badges système'}

::dsfr-doc-pin[Un libellé]{required=true add='en majuscule'}

::dsfr-doc-pin[Un fond]{required=true}

:::

### Variations

**Badge standard**

::dsfr-doc-storybook{storyId=badge--default}

**Badge système avec icône**

- Succès
- Avertissement
- Erreur
- Information
- Nouveauté

::dsfr-doc-storybook{storyId=badge--status}

Utiliser cette variation pour préciser l’information donnée par le texte du badge avec l’icône correspondante.

L’ajout d’une icône est autorisée, et automatique en code, uniquement pour les badges système.

**Badge système sans icône**

Il est possible d’utiliser un badge système sans icône.

::dsfr-doc-storybook{storyId=badge--status-no-icon}

### Tailles

Le badge est disponible en 2 tailles :

- SM pour small

::dsfr-doc-storybook{storyId=badge--size-sm}

- MD pour medium - taille par défaut

::dsfr-doc-storybook{storyId=badge--default}

### États

Le badge n’est sujet à aucun changement d’état.

### Personnalisation

Les badges systèmes ne sont pas personnalisables.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Utiliser l’icône et la couleur système correspondantes à l’information fournie.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas changer l’icône et la couleur d’un badge système.

:::

::::

La couleur des badges standard peut être personnalisée, parmi les couleurs illustratives autorisées uniquement.

:::fr-table[Tableau personnalisation design]{valign=top multiline=true caption=false}
| Éléments | Indice thème clair | Indice thème sombre |
|:-----|:-----|:-----|
| **Fond** | Indice **950**<br>_exemple : `$pink-tuile-950`_ | Indice **100**<br>_exemple : `$pink-tuile-100`_ |
| **Texte** | Indice **sun**<br>_exemple : `$pink-tuile-sun-425`_ | Indice **moon**<br>_exemple : `$pink-tuile-moon-750`_ |
:::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-2.png)

Utiliser une couleur illustrative sur un badge standard (exemple : `$Pink-tuile`).

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas utiliser une icône dans un badge standard.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-3.png)

Ne pas utiliser une couleur système pour un badge standard.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code du Badge
shortTitle: Code du Badge
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Badge.
shortDescription: Affichage d’un statut informatif
keywords: badge, statut, état, information, design système, DSFR, accessibilité, non cliquable, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Badge permet de mettre en avant une information courte liée à un élément précis de l’interface, comme un statut ou un état, sans interaction de la part de l’usager.
summary: Utilisé pour signaler un état ou un statut dans une interface, le composant Badge apporte une information rapide à lire, positionnée au plus près de l’élément concerné. Il peut apparaître dans des menus, des tuiles, des tableaux ou des pages. Les badges système suivent des règles strictes de design et d’accessibilité, tandis que les badges standards autorisent une personnalisation encadrée.
mesh:
  - component/tag
---

## Badge

Le badge est un élément d’indication permettant de valoriser une information liée à un élément précis du site.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Badge** est un élément visuel destiné à fournir des informations contextuelles ou des indicateurs d'état.
Sa structure est la suivante :

- Le Badge est un élément HTML `<p>` avec la classe `fr-badge`.
- Son contenu est textuel et doit être succinct (exemple : "Libellé badge").

**Exemple de structure HTML**

```HTML
<p class="fr-badge">Libellé badge</p>
```

#### Groupe de badges

Lorsque plusieurs badges sont utilisés ensemble, ils doivent être regroupés dans un conteneur, de classe `fr-badges-group`, afin de maintenir une cohérence visuelle et fonctionnelle.

```HTML
<ul class="fr-badges-group">
  <li>
      <p class="fr-badge">Badge 1</p>
  </li>
  <li>
      <p class="fr-badge">Badge 2</p>
  </li>
</ul>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------|----------|
| Core       | Oui         |          |
| Badge      | Oui         |          |
| Utility    | Non         | Uniquement pour l'ajout d'icône |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/badge/badge.min.css" rel="stylesheet">
```

#### Variantes systèmes

Les badges systèmes peuvent avoir des styles définis pour différents status. Pour appliquer une variante système, ajoutez une des classes suivantes à l'élément `<p class="fr-badge">` :

- `fr-badge--info` : Indique une information.
- `fr-badge--warning` : Indique un avertissement.
- `fr-badge--error` : Indique une erreur.
- `fr-badge--success` : Indique un succès.
- `fr-badge--new` : Indique une nouveauté

Les badges système sont liés à une icône, celle-ci n'est pas modifiable mais peut être retirée. Pour cela utilisez la classe : `fr-badge--no-icon`

**Exemples de badges systèmes**

```HTML
<p class="fr-badge fr-badge--info">Information</p>
<p class="fr-badge fr-badge--warning">Avertissement</p>
<p class="fr-badge fr-badge--error">Erreur</p>
<p class="fr-badge fr-badge--success">Succès</p>
<p class="fr-badge fr-badge--new">Nouveau</p>
```

#### Variantes d'accentuation

Les badges sont disponibles dans toutes les couleurs d'accentuation via la classe : `fr-badge--NOM-COULEUR`.
Retrouver la liste des couleurs d'accentuation sur la [page couleurs](../../../../../core/_part/doc/color/index.md).

**Exemples de badges systèmes**

```HTML
<p class="fr-badge fr-badge--yellow-moutarde">intitulé</p>
<p class="fr-badge fr-badge--green-menthe">intitulé</p>
```

#### Variantes de taille

Les badges peuvent être affichés dans deux tailles différentes. Par défaut, la taille standard est utilisée, mais il est possible d'ajouter la classe suivante pour ajuster la taille :

- `fr-badge--sm` : Petit badge.

**Exemples de tailles de badges**

```HTML
<p class="fr-badge fr-badge--sm">Petit badge</p>
<p class="fr-badge">Badge moyen</p>
```

---

### JavaScript

Le composant Badge **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+badge+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du badge
shortTitle: Accessibilité du Badge
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Badge.
shortDescription: Affichage d’un statut informatif
keywords: badge, statut, état, information, design système, DSFR, accessibilité, non cliquable, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Badge permet de mettre en avant une information courte liée à un élément précis de l’interface, comme un statut ou un état, sans interaction de la part de l’usager.
summary: Utilisé pour signaler un état ou un statut dans une interface, le composant Badge apporte une information rapide à lire, positionnée au plus près de l’élément concerné. Il peut apparaître dans des menus, des tuiles, des tableaux ou des pages. Les badges système suivent des règles strictes de design et d’accessibilité, tandis que les badges standards autorisent une personnalisation encadrée.
mesh:
  - component/tag
---

# Badge

Le badge est un élément d’indication permettant de valoriser une information liée à un élément précis du site.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Anatomie](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Badge** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Le composant Badge n’est pas interactif. Il n’y a donc pas d'interaction au clavier associée.

### Règles d’accessibilité

#### Structuration

- Par défaut, utiliser un élément `<p>` lorsque le badge est utilisé seul.
- Si le badge est utilisé à l’intérieur d’un élément qui possède une sémantique (`<p>`, `li`…), utiliser un élément `<span>`.
- En cas d’utilisation de plusieurs badges à la suite, les structurer dans une liste.

#### Badge système avec icône

L’information doit être donnée par le texte du badge. L’icône est purement décorative.

#### Contrastes de couleurs

Le composant Badge est suffisamment contrasté en thème clair et en thème sombre dans ses différentes versions.

>[!CAUTION]
>En cas de personnalisation, la couleur du texte et la couleur du fond doivent être suffisamment contrastées (ratio minimum de 4.5:1).

##### Badge par défaut

En thème clair et en thème sombre, le ratio de contraste du composant Badge par défaut est de 9,8:1.

##### Accentuations

:::fr-table[Contrastes des accentuations]{valign=top multiline=true caption=false}
| Accentuation |  Thème clair | Thème sombre |
|------|-----|-----|
|**green-tilleul-verveine**| 5:1 | 8,91:1|
|**green-bourgeon**| 4,9:1 | 7,42:1|
|**green-emeraude**| 4,95:1 |7,33:1 |
|**green-menthe**| 5,78:1 | 5,41:1|
|**green-archipel** |5,47:1 | 6,54:1|
|**blue-ecume** | 8,49:1 | 5,73:1|
|**blue-cumulus** | 5,87:1 |6,88:1 |
|**purple-glycine** | 6,84:1 | 5,05:1|
|**pink-macaron** | 5,24:1 | 9,34:1|
|**pink-tuile** | 4,94:1 | 7,22:1|
|**yellow-tournesol** | 5,21:1 | 12,21:1|
|**yellow-moutarde** | 6,25:1 | 10,13:1|
|**orange-terre-battue** | 5,83:1 |5,72:1 |
|**brown-cafe-creme** | 5,59:1 |10,89:1 |
|**brown-caramel** | 4,94:1 |11,47:1 |
|**brown-opera** | 5,43:1 |9,01:1|
|**beige-gris-galet** | 5,22:1 | 9,01:1|
:::

##### Badge système

:::fr-table[Contrastes des badges système]{valign=top multiline=true caption=false}
| Statut |  Thème clair | Thème sombre |
|------|-----|-----|
|**Succès**| 4,95:1 | 4,95:1 |
|**Avertissement**| 4,95:1| 4,94:1 |
|**Erreur**| 4,96:1|4,95:1 |
|**Information**| 4,93:1| 4,94:1 |
|**Nouveauté**| 6,25:1| 10,13:1 |
:::

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Badge.

---

### Critères RGAA applicables
- **Couleurs&nbsp;:** 3.2
- **Éléments obligatoires&nbsp;** 8.9
- **Structuration&nbsp;:** 9.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.4, 10.5, 10.11, 10.12
- **Consultation&nbsp;:** 13.9

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/badge/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Badge - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/component/badge/badge.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../dist/component/badge/badg...
```

(Truncated for brevity. See source file for full HTML)
