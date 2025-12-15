# DSFR Card Component

*Generated from local node_modules*

## Presentation

---
title: Carte
shortTitle: Carte
titleId: Card
description: Présentation du composant Carte permettant de rediriger l’usager vers une page éditoriale, en lui donnant un aperçu. Elle peut intégrer des médias, actions, tags ou boutons et se décline en différents formats.
shortDescription: Carte cliquable redirigeant vers une page éditoriale avec aperçu.
keywords: carte, composant, aperçu, lien, redirection, contenu, média, badge, tag, bouton, DSFR, tuile
cover: ./_asset/cover/cover.png
excerpt: Le composant carte permet d’accéder à un contenu éditorial à partir d’un aperçu visuel structuré, sous forme verticale ou horizontale.
summary: Le composant carte est un point d’entrée vers une page éditoriale ou un contenu spécifique. Il permet d’afficher un aperçu clair à travers une structure visuelle contenant un titre, une description, des éléments comme badges ou tags, une image ou vidéo, et des actions. Il existe en formats vertical et horizontal, en plusieurs tailles, et peut inclure des variations esthétiques comme le fond gris ou l’absence de bordure. Des règles UX précises guident son usage pour garantir la cohérence, l’accessibilité et la bonne hiérarchisation de l’information.
mesh:
  - component/badge
  - component/tag
  - component/tile
---

## Carte

La carte est un élément d’interaction avec l’interface permettant de rediriger l’usager vers une page éditoriale donc elle donne un aperçu.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=card--card}

### Quand utiliser ce composant ?

Proposer la carte pour créer un raccourci ou un point d’entrée vers des pages de contenu, en permettant un aperçu.

La carte n’a pas d’usage imposé mais elle fait généralement partie d'une collection de contenus similaires. Elle peut en effet servir à construire des listes de liens, des grilles de contenus, des blocs de mise en avant ou des boutons d’actions habillés, par exemple.

> [!NOTE]
> Depuis la version 1.5.0, il n’y a plus de différence d’usage entre la carte et la tuile. La différence entre les deux composants est donc uniquement visuelle.

### Comment utiliser ce composant ?

- **Utiliser les cartes pour créer des collections ou listes d’éléments similaires**. La carte est rarement présentée de manière isolée.
- **Harmoniser la hauteur des cartes par ligne**, en prenant la plus importante comme référence, lorsque celles-ci sont disposées au sein d’une liste. Au sein d’une grille (plusieurs lignes), les hauteurs peuvent varier mais l’ensemble doit garder une cohérence visuelle.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/use/do-1.png)

Contraindre toutes les cartes d’une même ligne à la même hauteur.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](./_asset/use/dont-1.png)

Ne pas créer de disparité dans la hauteur des cartes d’une même ligne.

:::

::::

- **Proposer des cartes de même structure** lorsque celles-ci composent une liste ou une collection.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/use/do-2.png)

Conserver un contenu commun au sein des cartes qui forment un même ensemble.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](./_asset/use/dont-2.png)

Ne pas proposer des contenus différents entre chacune des cartes d’un même ensemble.

:::

::::

- **Conserver l’intégralité de la carte cliquable** lorsque vous proposez cette variation.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-3.png)

Proposer un titre sans soulignement et une zone d’action pour signifier que le lien est étendu à toute la carte.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-3.png)

Ne pas souligner le titre si le lien est étendu à toute la carte. Cela apporte de la confusion pour l’usager.

:::

::::

- **Respecter la structure de la carte telle qu’existante**, les différentes zones qui la constituent ayant un rôle défini.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-4.png)

Proposer les liens et actions dans la zone d’action, prévue à cet effet.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-4.png)

Ne pas mettre de liens ou actions dans la zone de détail.

:::

::::

### Règles éditoriales

- **Rédiger des titres et descriptions synthétiques**.
- **Proposer des contenus distincts pour chaque carte**, en évitant de réutiliser plusieurs fois la même image d’illustration.
- **Être vigilant sur les dimensions des images d’illustration utilisées** afin de garantir leur adaptation aux différents types d’affichages responsive.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design de la Carte
shortTitle: Design de la Carte
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Carte.
shortDescription: Carte cliquable redirigeant vers une page éditoriale avec aperçu.
keywords: carte, composant, aperçu, lien, redirection, contenu, média, badge, tag, bouton, DSFR, tuile
cover: ../_asset/cover/cover.png
excerpt: Le composant carte permet d’accéder à un contenu éditorial à partir d’un aperçu visuel structuré, sous forme verticale ou horizontale.
summary: Le composant carte est un point d’entrée vers une page éditoriale ou un contenu spécifique. Il permet d’afficher un aperçu clair à travers une structure visuelle contenant un titre, une description, des éléments comme badges ou tags, une image ou vidéo, et des actions. Il existe en formats vertical et horizontal, en plusieurs tailles, et peut inclure des variations esthétiques comme le fond gris ou l’absence de bordure. Des règles UX précises guident son usage pour garantir la cohérence, l’accessibilité et la bonne hiérarchisation de l’information.
mesh:
  - component/badge
  - component/tag
  - component/tile
---

## Carte

La carte est un élément d’interaction avec l’interface permettant de rediriger l’usager vers une page éditoriale donc elle donne un aperçu.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie de la carte](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un badge]{add="placé dans la zone de média"}

::dsfr-doc-pin[Un média (image ou vidéo)]{add="issu ou en lien avec la page de destination"}

::dsfr-doc-pin[Une précision]{add="sous forme de tag (cliquable ou non) ou de badge (jusqu'à 4 éléments maximum)"}

::dsfr-doc-pin[Une première zone de détail]{add="comprenant un texte accompagné d’une icône (si souhaité)"}

::dsfr-doc-pin[Un titre]{required=true add="reprenant celui de l’objet visé (page de destination, action, site etc.) et comprenant un lien dont la zone de clic peut s’étendre à toute la carte (mais incompatible avec une zone d’action ou des tags cliquables)"}

::dsfr-doc-pin[Une description]{add="de 5 lignes maximum (tronquée au-delà)"}

::dsfr-doc-pin[Une seconde zone de détail]{add="identique à la première"}

::dsfr-doc-pin[Une zone d’action]{add="composée de bouton ou de liens (jusqu'à 4 éléments maximum) mais incompatible avec la deuxième zone de détail"}

:::

### Variations

La carte existe en deux formats (horizontal et vertical) déclinés sur deux supports (desktop et mobile). Les cartes horizontales sont réservées au desktop et à la carte de téléchargement en format mobile. A cette exception près, une carte horizontale devient systématiquement verticale sur mobile.

**Carte verticale**

::dsfr-doc-storybook{storyId=card--vertical}

**Carte horizontale**

::dsfr-doc-storybook{storyId=card--horizontal}

Aucun ratio n’est imposé dans une carte horizontale.

La taille de l’image est déduite :

- En hauteur, par la hauteur du contenu.
- En largeur, par les proportions choisies de la carte parmi celles proposées : 33%, 40% et 50%.

Le ratio par défaut est de 40% pour l’image et 60% pour le contenu.

**Carte de téléchargement**

::dsfr-doc-storybook{storyId=card--download}

- Utiliser la carte de téléchargement pour mettre à disposition de l’usager un fichier en téléchargement.
- Le titre de la carte de téléchargement reprend le nom du fichier et doit systématiquement être précédé de la mention “Télécharger”. Préciser la langue du document dans le libellé si elle est différente de celle de la page courante.
- La seconde zone de détail affiche obligatoirement le format et le poids du fichier.
- L’icône de téléchargement est ici obligatoire.
- En mobile, la carte de téléchargement est toujours en format horizontal.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/variation/dont-1.png)

Ne pas cumuler plus de 4 cartes de téléchargement.

:::

::::

**Variantes esthétiques**

- Carte avec fond gris
- Carte avec ombre portée
- Carte sans bordure
- Carte sans fond

### Tailles

La carte est disponible en trois tailles :

- SM pour small
- MD pour medium
- LG pour large

La hauteur de la carte s’adapte à son contenu. La largeur, elle, est définie selon [la grille](../../../../../core/_part/doc/grid/index.md) et les recommandations suivantes.

Pour une carte verticale, en desktop :

- SM : 3 à 4 colonnes

::dsfr-doc-storybook{storyId=card--size-sm}

- MD : 4 à 6 colonnes

::dsfr-doc-storybook{storyId=card--size-md}

- LG : 6 à 8 colonnes

::dsfr-doc-storybook{storyId=card--size-lg}

En mobile, peu importe la taille d’origine, la carte verticale prend systématiquement 12 colonnes de large.

Pour une carte horizontale, en desktop uniquement :

- SM : 4 à 6 colonnes

::dsfr-doc-storybook{storyId=card--horizontal-sm}

- MD : 6 à 8 colonnes

::dsfr-doc-storybook{storyId=card--horizontal-md}

- LG : 8 à 12 colonnes

::dsfr-doc-storybook{storyId=card--horizontal-lg}

En mobile, seule la carte de téléchargement conserve un format horizontal. Dans ce cas, elle prend systématiquement 12 colonnes de large.

> [!NOTE]
> La taille choisie a une influence sur les espacements, la taille du titre, de l’icône et des tags ou badges au sein de la carte.

### États

**État désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec la carte.

::dsfr-doc-storybook{storyId=card--disabled}

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole la carte avec sa souris.

### Personnalisation

La carte comporte des variantes esthétiques (voir section “Variations”).

L’ensemble des composants imbriqués ([média](../../../../../core/_part/doc/media/index.md), [icône](../../../../../core/_part/doc/icon/index.md), [tag](../../../../tag/_part/doc/index.md), [badge](../../../../badge/_part/doc/index.md) et [bouton](../../../../button/_part/doc/index.md)) peuvent également être personnalisés selon leurs propres règles de personnalisation.

Par ailleurs, certains éléments sont optionnels - voir [la structure du composant](#carte).


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code de la Carte
shortTitle: Code de la Carte
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Carte.
shortDescription: Carte cliquable redirigeant vers une page éditoriale avec aperçu.
keywords: carte, composant, aperçu, lien, redirection, contenu, média, badge, tag, bouton, DSFR, tuile
cover: ../_asset/cover/cover.png
excerpt: Le composant carte permet d’accéder à un contenu éditorial à partir d’un aperçu visuel structuré, sous forme verticale ou horizontale.
summary: Le composant carte est un point d’entrée vers une page éditoriale ou un contenu spécifique. Il permet d’afficher un aperçu clair à travers une structure visuelle contenant un titre, une description, des éléments comme badges ou tags, une image ou vidéo, et des actions. Il existe en formats vertical et horizontal, en plusieurs tailles, et peut inclure des variations esthétiques comme le fond gris ou l’absence de bordure. Des règles UX précises guident son usage pour garantir la cohérence, l’accessibilité et la bonne hiérarchisation de l’information.
mesh:
  - component/badge
  - component/tag
  - component/tile
---

## Carte

La carte est un élément d’interaction avec l’interface permettant de rediriger l’usager vers une page éditoriale donc elle donne un aperçu.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Carte** est un élément interactif permettant de donner des aperçus cliquables d’une page de contenu. Elle fait généralement partie d'une collection ou liste d’aperçus de contenus similaires.
Sa structure est la suivante :

- La **Carte** est un élément HTML `<div>` défini par la classe `fr-card`.
- Les cartes sont généralement utilisées au sein d'une **grille**, disponible dans les fondamentaux (voir [grille](../../../../../core/_part/doc/grid/index.md)).
- Son contenu est structuré en deux parties :
  - Le **corps de la carte** `fr-card__body` est obligatoire, il contient le contenu de la carte :
    - Un **bloc de contenu** `fr-card__content`, obligatoire, qui contient les informations propres à la carte :
      - Le **titre** de la carte, obligatoire, un élément HTML avec un niveau d'entête `<hx>` et la classe `fr-card__title` pouvant contenir un lien ou un simple texte. Le zone de clic du lien peut être **étendu** à toute la carte en ajoutant la classe `fr-enlarge-link` sur la carte.
      - Une **description**, optionnelle, `fr-card__desc`, un élément HTML de type `<p>`.
      - Une zone se plaçant **avant** le contenu `fr-card__start` et une zone se plaçant **après** le contenu `fr-card__end` qui peuvent toutes deux accueillir :
        - Un groupe de badge ou un groupe de tag, optionnels, (voir composants [badge](../../../../badge/_part/doc/code/index.md) et [tag](../../../../tag/_part/doc/code/index.md)).
        - Un texte de détail `fr-card__detail`, optionnel, auquel on peut associer une icône.
    - Un bloc de **zone d'action**  `fr-card__footer`, optionnel, qui permet l'ajout de boutons ou de liens supplémentaires.
  - **L'entête de la carte** `fr-card__header`, optionnel, pouvant contenir :
    - Une **image** dans un élément `fr-card__img`. L'image doit posséder la classe `fr-responsive-img` pour s'adapter au conteneur.
    - Un groupe de **badges** ou un groupe de **tags**, optionnels, placé par dessus l'image (voir composants [badge](../../../../badge/_part/doc/code/index.md) et [tag](../../../../tag/_part/doc/code/index.md)).

**Exemple de structure HTML simple**

```HTML
<div class="fr-grid-row">
    <div class="fr-col fr-col-md-6">
        <div class="fr-card fr-enlarge-link">
            <div class="fr-card__body">
                <div class="fr-card__content">
                    <h3 class="fr-card__title">
                        <a href="#">Titre de la carte</a>
                    </h3>
                    <p class="fr-card__desc">Description de la carte</p>
                </div>
            </div>
            <div class="fr-card__header">
                <div class="fr-card__img">
                    <img class="fr-responsive-img" src="/img/placeholder.16x9.png" alt="[À MODIFIER - vide ou texte alternatif de l’image]">
                </div>
            </div>
        </div>
    </div>
</div>
```

#### Carte de téléchargement

Une variante carte de téléchargement existe, comme pour les composants [Lien](../../../../link/_part/doc/code/index.md) et [Tuile](../../../../tile/_part/doc/code/index.md), pour proposer le téléchargement d'un fichier. La carte de téléchargement est toujours en format horizontale en desktop.
Cette variante reprend la même structure que la carte standard à l'exception de certains éléments :

- La Carte doit avoir la classe `fr-card--download`.
- L'intitulé du titre doit avoir ce format : **Télécharger le/la [Typologie de document] « [Nom du document] »**.
- Le **lien** du titre doit avoir :
  - l'attribut `download`, y ajouter une valeur permet de renommer le fichier au moment du téléchargement.
  - l'attribut `hreflang` avec comme valeur le code langue du document à télécharger s'il est dans une autre langue.
- **Étendre le clic** à toute la carte est obligatoire.
  - Ajouter la classe : `fr-enlarge-link` sur la carte pour étendre le lien.
  - Dans le cas d'un téléchargement programmatique, le téléchargement peut venir d'un bouton. Il est possible de remplacer le lien du titre par un `button`. Il faudra alors utiliser la classe `fr-enlarge-button` sur la carte.
- La zone `fr-card__end` placée après le contenu est obligatoire et doit contenir impérativement et uniquement un **texte de détail** `fr-card__details`.
  - Il doit indiquer le type de fichier (son extension), son poids, et sa langue si différente de la page.
  - Il est possible de remplir automatiquement le détail en JS grâce à l'attribut `data-fr-assess-file` sur le lien (Voir section [Javascript](#javascript)).

**Exemple de carte de téléchargement**

```HTML
<div class="fr-card fr-enlarge-link fr-card--download">
    <div class="fr-card__body">
        <div class="fr-card__content">
            <h3 class="fr-card__title">
                <a download href="/example/img/placeholder.3x4.pdf">Télécharger le/la [Typologie de document] « [Nom du document] »</a>
            </h3>
            <p class="fr-card__desc">Lorem [...] elit ut.</p>
            <div class="fr-card__start">
                <ul class="fr-badges-group">
                    <li>
                        <p class="fr-badge fr-badge--purple-glycine">Libellé badge</p>
                    </li>
                    <li>
                        <p class="fr-badge fr-badge--green-menthe">Libellé badge</p>
                    </li>
                </ul>
                <p class="fr-card__detail fr-icon-info-line">détail (optionnel)</p>
            </div>
            <div class="fr-card__end">
                <p class="fr-card__detail">PDF - 48 ko</p>
            </div>
        </div>
    </div>
    <div class="fr-card__header">
        <div class="fr-card__img">
            <img class="fr-responsive-img" src="../../../../example/img/placeholder.3x4.png" alt="[À MODIFIER - vide ou texte alternatif de l’image]" />
        </div>
    </div>
</div>
```

#### Groupe de cartes

Il n'existe pas à proprement parlé de groupe de carte. Néanmoins, les cartes sont généralement utilisées sous forme d'un ensemble d'élément. Elles peuvent être disposées côte à côte grâce à la **grille** disponible dans les fondamentaux.
La grille permet de définir un nombre de colonne pour chaque carte, sur une base de 12 colonnes, et peut varier en fonction de la taille de l'écran (breakpoint) (Voir [grille](../../../../../core/_part/doc/grid/index.md)).

**Exemple de grille de carte**

```HTML
<div class="fr-grid-row fr-grid-row--gutters">
    <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
        <div class="fr-card fr-enlarge-link">(...)</div>
    </div>
    <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
        <div class="fr-card fr-enlarge-link">(...)</div>
    </div>
    <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
        <div class="fr-card fr-enlarge-link">(...)</div>
    </div>
</div>
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
| Card       | Oui         |          |
| Link       | Oui         |          |
| Button     | Non         | Uniquement si zone d'action avec boutons |
| Badge      | Non         | Uniquement si ajout de badge dans la carte |
| Tag        | Non         | Uniquement si ajout de tag dans la carte |

:::

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/link/link.min.css" rel="stylesheet">
<link href="dist/component/card/card.min.css" rel="stylesheet">
```

#### Variantes de taille

La carte peut avoir différentes tailles qui auront un impact sur la taille du texte, des espacements, et de l'icône :

- `fr-card--sm` : Petite carte.
- Par défaut : Carte moyenne.
- `fr-card--lg` : Grande carte.

Par défaut, la carte prend 100% de la largeur de son conteneur et sa hauteur varie en fonction de son contenu. La largeur des cartes peut être ajustée via le nombre de colonnes de la grille (Voir [grille](../../../../../core/_part/doc/grid/index.md)).

Utiliser une taille de carte adaptée à la largeur de son conteneur :

- 3 à 4 colonne pour une carte SM.
- 4 à 6 colonne pour une carte MD.
- 6 à 12 colonnes pour une carte LG.

**Exemples de variantes de taille**

```HTML
<div class="fr-card fr-card--sm">
    <!-- Contenu de la carte SM -->
</div>
<div class="fr-card">
    <!-- Contenu de la carte MD -->
</div>
<div class="fr-card fr-card--lg">
    <!-- Contenu de la carte LG -->
</div>
```

#### Variantes de style

La carte est disponible en plusieurs autres variantes :

- La Carte avec **fond gris** : définie par la classe `fr-card--grey`.
- La Carte sur **fond transparent** : définie par la classe `fr-card--no-background`.
- La Carte **sans bordure** : définie par la classe `fr-card--no-border`.
- La Carte **avec ombre portée** : définie par la classe `fr-card--shadow`.

**Exemples de variantes de style**

```HTML
<div class="fr-card fr-card--grey">
    <!-- Contenu de la carte sur fond gris -->
</div>
<div class="fr-card fr-card--no-background">
    <!-- Contenu de la carte sur fond transparent -->
</div>
<div class="fr-card fr-card--no-border">
    <!-- Contenu de la carte sans bordure -->
</div>
<div class="fr-card fr-card--shadow">
    <!-- Contenu de la carte avec ombre -->
</div>
```

#### Variantes d'orientation

Les carte sont disponibles, par défaut, en format vertical (image en haut et contenu en bas). Il existe aussi des variantes permettant de passer la carte en format **horizontal** en desktop (image à gauche et contenu à droite). La classe `fr-card--horizontal` passe la carte en format horizontal à partir du breakpoint MD (768px).

Le **ratio image/contenu** de la carte horizontale est par défaut de 40% de la largeur pour l'image, et 60% de la largeur pour le contenu. Il existe des variantes permettant de modifier ce ratio :

- `fr-card--horizontal-half` : passe le ratio image/contenu à 50%/50%.
- `fr-card--horizontal-tier` : passe le ratio image/contenu à 1 tier / 2 tiers.

**Exemples de carte horizontale**

```HTML
<div class="fr-card fr-card--horizontal">
    <!-- Contenu de la carte horizontale -->
</div>
<div class="fr-card fr-card--horizontal fr-card--horizontal-half">
    <!-- Contenu de la carte horizontale 50/50 -->
</div>
<div class="fr-card fr-card--horizontal fr-card--horizontal-tier">
    <!-- Contenu de la carte horizontale 33/66 -->
</div>
```

#### Ratio d'images

L'image placée dans la partie "header" de la carte doit avoir la classe `fr-responsive-img` pour s'adapter à la largeur de la carte. Sa hauteur dépend de son ratio largeur/hauteur.
Le ratio de l'image est par défaut en 16/9ème. Celui-ci peut être modifié en fonction du besoin grâce aux [classes utilitaires de ratio](../../../../../core/_part/doc/media/index.md) disponibles dans le core :

- `fr-ratio-32x9` : pour un ratio largeur/hauteur de 32/9.
- `fr-ratio-3x2` : pour un ratio largeur/hauteur de 3/2.
- `fr-ratio-4x3` : pour un ratio largeur/hauteur de 4/3.
- `fr-ratio-1x1` : pour un ratio largeur/hauteur de 1/1, soit carré.
- `fr-ratio-3x4` : pour un ratio largeur/hauteur de 3/4. (non recommandé)
- `fr-ratio-3x4` : pour un ratio largeur/hauteur de 2/3. (non recommandé)
- `fr-ratio-32x9` : pour un ratio largeur/hauteur de 32/9. (non recommandé)

Les ratios avec une hauteur plus grande que la largeur ne sont pas conseillés, car le rendu mobile n'est pas approprié.

Sur les cartes horizontales, la hauteur de l'image de la carte est fixée par celle du contenu. L'image est donc croppée pour conserver 100% de la hauteur de la carte. L'utilisation de classes de ratio n'est ici pas possible.

#### Variantes d'icônes

Par défaut, sur les **cartes avec lien étendu et non externe**, une icône "arrow-right" apparaît en bas à droite. Dans certains cas, comme pour réduire la taille de la carte, il peut être utile de **retirer cette icône**. Il suffit pour cela d'ajouter la classe `fr-card--no-icon` sur la carte.
Si le lien est un **lien externe**, l'icône "external-link" reste obligatoire.

**Exemple de retrait d'icône**

```HTML
<div class="fr-card fr-enlarge-link fr-card--no-icon">
    <!-- Contenu de la carte -->
</div>
```

---

### JavaScript

Le composant Carte **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

Une fonctionnalité disponible dans le core, permet de remplir automatiquement le détail des **cartes de téléchargement**.
Pour instancier le javascript de remplissage automatique du détail sur la carte de téléchargement, ajouter l'attribut `data-fr-assess-file` sur le lien du titre.
Les propriétés de type, poids, et langue sont récupérées depuis le fichier. Le texte de détail est automatiquement remplacé au chargement du JS. Il est conseillé de tout de même remplir les infos connues dans le détail en solution de repli.
Si la page est en Anglais, l'attribut `data-fr-assess-file` doit prendre la valeur "bytes", pour afficher le poids en Bytes plutôt qu'en Octet.

Pour fonctionner le fichier à télécharger doit être sur le même cross-domain que le site.

#### Installation du JavaScript

Pour fonctionner, le **remplissage automatique du détail des cartes de téléchargement** nécessite l'utilisation de JavaScript.
Cette fonctionnalité est disponible dans le core.

Il est donc nécessaire d'importer les fichiers js du core à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
```

#### API

> [!NOTE]
> L'activation ou la désactivation de la fonction de remplissage automatique du détail des cartes de téléchargement (assess-file) n'est pas disponible via l'API JS, elle se fait via l'ajout ou le retrait de l'attribut `data-fr-assess-file` sur le lien.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+card+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de la Carte
shortTitle: Accessibilité de la Carte
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Carte.
shortDescription: Carte cliquable redirigeant vers une page éditoriale avec aperçu.
keywords: carte, composant, aperçu, lien, redirection, contenu, média, badge, tag, bouton, DSFR, tuile
cover: ../_asset/cover/cover.png
excerpt: Le composant carte permet d’accéder à un contenu éditorial à partir d’un aperçu visuel structuré, sous forme verticale ou horizontale.
summary: Le composant carte est un point d’entrée vers une page éditoriale ou un contenu spécifique. Il permet d’afficher un aperçu clair à travers une structure visuelle contenant un titre, une description, des éléments comme badges ou tags, une image ou vidéo, et des actions. Il existe en formats vertical et horizontal, en plusieurs tailles, et peut inclure des variations esthétiques comme le fond gris ou l’absence de bordure. Des règles UX précises guident son usage pour garantir la cohérence, l’accessibilité et la bonne hiérarchisation de l’information.
mesh:
  - component/badge
  - component/tag
  - component/tile
---

## Carte

La carte est un élément d’interaction avec l’interface permettant de rediriger l’usager vers une page éditoriale donc elle donne un aperçu.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Carte** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

#### Structuration

- Le niveau de titre dépend du contexte de la page et ne sera pas toujours un `<h3>`.
- Les éléments média, description, badges, tags, détails, boutons sont situés après le titre dans le code HTML.
- L’image de la carte peut être décorative ou porteuse d’information selon le contexte.

#### Zone cliquable étendue

- Le lien est placé uniquement sur le titre de la carte qui doit être explicite.
- Si aucun autre élément cliquable n’est présent dans la carte, il est possible d’étendre la zone cliquable du lien à toute la carte pour améliorer l’expérience utilisateur.
- L’indication de prise de focus se positionne alors autour de la carte plutôt qu’autour du lien.

Voir les [règles d’accessibilité du composant Lien](../../../../link/_part/doc/accessibility/index.md#regles-d-accessibilite).

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Carte.

### Critères RGAA applicables

- **Images&nbsp;:** 1.1, 1.2, 1.3
- **Couleurs&nbsp;:** 3.2
- **Liens&nbsp;:** 6.1, 6.2
- **Scripts&nbsp;:** 7.1, 7.3
- **Éléments obligatoires&nbsp;:** 8.9
- **Structuration&nbsp;:** 9.1, 9.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/card/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Carte - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/badge/badge.main.css" rel="stylesheet">
    <link href="../../../dist/component/tag/tag.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/card/card.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/ut...
```

(Truncated for brevity. See source file for full HTML)
