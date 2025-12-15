# DSFR Navigation Component

*Generated from local node_modules*

## Presentation

---
title: Navigation principale
shortTitle: Navigation principale
titleId: Navigation
description: Présentation du composant Navigation principale organisant les grandes rubriques d’un site et permettant à l’usager de s’orienter dans son arborescence.
shortDescription: Orienter l’usager dans les sections du site.
keywords: navigation principale, menu, rubriques, arborescence, design system, UX, interface, usager, header, mega menu
cover: ./_asset/cover/cover.png
excerpt: La navigation principale guide l’usager dans les sections clés d’un site et structure les niveaux d’accès à l’information. Elle se place sous l’en-tête et peut inclure des menus déroulants ou mega menus.
summary: Ce document décrit la navigation principale comme un composant central d’un site web, servant à organiser et hiérarchiser les principales rubriques. Il présente les cas d’usage, les variantes possibles, les limites en matière de profondeur et de densité, ainsi que les bonnes pratiques éditoriales. Il donne aussi des recommandations sur l’association avec d’autres composants comme la barre de recherche ou le menu latéral, afin de renforcer l’expérience utilisateur dans la navigation globale du site.
mesh:
  - component/header
  - component/footer
---

## Navigation principale

La navigation principale est le système central de navigation au sein d’un site. Elle permet d’orienter l’usager à travers les rubriques principales et secondaires du site.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=navigation--navigation}

### Quand utiliser ce composant ?

**Utiliser la navigation principale pour orienter l’usager à travers les grandes sections du site**, éventuellement sur plusieurs niveaux de profondeur.

> [!NOTE]
> La navigation principale est liée à [l’en-tête](../../../header/_part/doc/index.md) et, lorsqu'elle est utilisée, doit donc se placer juste en-dessous. Néanmoins, contrairement à l’en-tête, elle n’est pas obligatoire.

### Comment utiliser ce composant ?

- **Moduler la navigation principale** selon vos besoins et l’arborescence de votre site. Elle permet d'afficher jusqu'à 8 entrées principales.
- **Opter pour la variation de la navigation principale qui convient le mieux à l’architecture de l’information de votre site**.
- **Considérer que la navigation principale est contrainte en hauteur**, même dans sa version la plus grande avec mega menu. Il faut donc l’anticiper lors de la conception de l’architecture de l’information afin d'éviter un nombre trop important de liens et de niveaux (et donc réfléchir la densité de l’information en conséquence).
- **Accompagner la navigation principale d’autres composants** permettant de guider encore davantage l’usager dans sa navigation, tels que la barre de recherche, le menu latéral, ou le pied de page par exemple.
- **Associer liens directs et menus déroulants ou mega menu** dans une même navigation. En revanche, il n’est pas recommandé de mélanger l’usage de menus déroulants et de mega menus.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/use/do-1.png)

Proposer des liens directs et des menus déroulants au sein d’une même navigation selon le besoin identifié.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](./_asset/use/dont-1.png)

Ne pas mélanger menus déroulants et mega menus pour ne pas apporter de la confusion à la navigation.

:::

::::

### Règles éditoriales

- **Proposer des libellés d’entrées de menu et de liens clairs et concis** pour permettre à l’usager de facilement comprendre où il se rend.
- **Profiter de la variation mega menu pour éditorialiser vos rubriques** et ainsi apporter un complément de contexte à l’usager.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design de la Navigation principale
shortTitle: Design de la Navigation principale
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Navigation principale.
shortDescription: Orienter l’usager dans les sections du site.
keywords: navigation principale, menu, rubriques, arborescence, design system, UX, interface, usager, header, mega menu
cover: ../_asset/cover/cover.png
excerpt: La navigation principale guide l’usager dans les sections clés d’un site et structure les niveaux d’accès à l’information. Elle se place sous l’en-tête et peut inclure des menus déroulants ou mega menus.
summary: Ce document décrit la navigation principale comme un composant central d’un site web, servant à organiser et hiérarchiser les principales rubriques. Il présente les cas d’usage, les variantes possibles, les limites en matière de profondeur et de densité, ainsi que les bonnes pratiques éditoriales. Il donne aussi des recommandations sur l’association avec d’autres composants comme la barre de recherche ou le menu latéral, afin de renforcer l’expérience utilisateur dans la navigation globale du site.
mesh:
  - component/header
  - component/footer
---

## Navigation principale

La navigation principale est le système central de navigation au sein d’un site. Elle permet d’orienter l’usager à travers les rubriques principales et secondaires du site.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie de la navigation principale](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un libellé]{add="de lien direct, de menu déroulant ou d’un méga-menu" required=true}

::dsfr-doc-pin[Un chevron]{add="dans le cas du menu déroulant et du mega menu" required=true}

::dsfr-doc-pin[Un fond blanc]{required=true}

::dsfr-doc-pin[Un bouton “Fermer”]{add="dans le cas du mega menu uniquement" required=true}

::dsfr-doc-pin[Un titre de rubrique du méga menu]

::dsfr-doc-pin[Un texte de description du méga menu]

::dsfr-doc-pin[Un lien vers la rubrique du méga menu]

::dsfr-doc-pin[Un titre de catégorie dans le méga menu]{add="pouvant être cliquable"}

::dsfr-doc-pin[Des liens direct vers les pages du site]{required=true}

::dsfr-doc-pin[Un séparateur en-dessous du titre de la catégorie]{required=true}

:::

### Variations

**Liens directs**

::dsfr-doc-storybook{storyId=navigation--link}

- Utiliser les liens directs vers des pages destination pour les sites ou les rubriques qui n’ont pas ou peu de second niveau d’arborescence, en les combinant par exemple avec un [menu latéral](../../../../sidemenu/_part/doc/index.md).

**Menu déroulant**

::dsfr-doc-storybook{storyId=navigation--menu}

- Utiliser les menus déroulant dans le cadre d’une architecture de l’information peu profonde, pour afficher les niveaux secondaires d’une rubrique.
- Proposer un maximum de 8 liens au sein d’un menu déroulant.

**Mega menu**

::dsfr-doc-storybook{storyId=navigation--mega-menu}

- Utiliser le mega menu lorsqu’une arborescence est profonde. Il s’agit d’un menu de navigation plus complexe qui donne accès à plusieurs niveaux de profondeur.
- Proposer un maximum de 8 liens au sein de chaque sous catégorie.

**Responsive**

En version mobile, la navigation principale est accessible depuis le pictogramme “burger”. Le clic sur le pictogramme déclenche l’affichage d’un overlay présentant les éléments de la navigation et les liens directs de l’en-tête, si présents.

Le système d’overlay permet l’affichage du contenu des différentes variations de menu, précédemment décrites.

### Tailles

La largeur de la navigation principale est de taille fixe et prend les 12 colonnes disponibles de la grille.

### États

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole une entrée de la navigation principale.

**État au clic**

L’état au clic correspond au comportement constaté par l’usager après avoir cliqué sur une entrée de la navigation principale. Il existe 2 états au clic, selon la variation choisie :

- Lien direct

- Menu déroulant ou mega menu

### Personnalisation

La navigation principale n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](#navigation-principale).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](../_asset/custom/do-1.png)

Conserver un fond de couleur blanc derrière les entrées de la navigation principale.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur des entrées de la navigation principale

:::

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](../_asset/custom/do-2.png)

Utiliser uniquement la couleur bleu pour les entrées de menu déroulant ou mega menu dans leur état cliqué.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas personnaliser la couleur des entrées menu déroulant ou mega menu lorsqu’elles sont cliquées.

:::

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](../_asset/custom/do-3.png)

Conserver le fond de couleur blanc du mega menu.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](../_asset/custom/dont-3.png)

Ne pas personnaliser ou retirer la couleur de fond du mega menu.

:::

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](../_asset/custom/do-4.png)

Conserver les tailles, types et couleurs de typographie des différents libellés en l’état.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](../_asset/custom/dont-4.png)

Ne pas modifier les tailles, types et couleurs de typographie des différents libellés.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code de la Navigation principale
shortTitle: Code de la Navigation principale
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Navigation principale.
shortDescription: Orienter l’usager dans les sections du site.
keywords: navigation principale, menu, rubriques, arborescence, design system, UX, interface, usager, header, mega menu
cover: ../_asset/cover/cover.png
excerpt: La navigation principale guide l’usager dans les sections clés d’un site et structure les niveaux d’accès à l’information. Elle se place sous l’en-tête et peut inclure des menus déroulants ou mega menus.
summary: Ce document décrit la navigation principale comme un composant central d’un site web, servant à organiser et hiérarchiser les principales rubriques. Il présente les cas d’usage, les variantes possibles, les limites en matière de profondeur et de densité, ainsi que les bonnes pratiques éditoriales. Il donne aussi des recommandations sur l’association avec d’autres composants comme la barre de recherche ou le menu latéral, afin de renforcer l’expérience utilisateur dans la navigation globale du site.
mesh:
  - component/header
  - component/footer
---

## Navigation principale

La navigation principale est le système central de navigation au sein d’un site. Elle permet d’orienter l’usager à travers les rubriques principales et secondaires du site.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Navigation principale** est l'élément central de la navigation au sein du site, il oriente l’utilisateur à travers les grandes sections du site et sur éventuellement plusieurs niveaux de profondeur.

Sa structure est conçue pour s’adapter aux écrans mobiles et comprend les éléments suivants :

- Le conteneur principal, obligatoire, de la navigation est un élément HTML `<nav>` avec le rôle `navigation` défini par la classe `fr-nav`.
  - Il dispose d'attribut `aria-label`, dont la valeur doit décrit la fonction de la navigation (ex: "Menu principal").
- La liste de liens ou de sous-sections, obligatoire, de la navigation est un élément HTML `<ul>` défini par la classe `fr-nav__list`.
  - Chaque élément `<li>` défini par la classe `fr-nav__item` de la liste peut contenir un lien direct, un menu déroulant ou un mega-menu.
- Un Lien direct est un élément HTML `<a>` de type `link` défini par la classe `fr-nav__link`.
  - Le lien actif dispose d'un attribut `aria-current="page"`.
- Un Menu déroulant est composé :
  - D'un Bouton d'ouverture, obligatoire, du menu déroulant, un élément HTML `<button>` de type `button` défini par la classe `fr-nav__btn`.
    - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le bloc refermable de la navigation est ouvert ou fermé.
    - Le bouton est lié au bloc refermable via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du bloc refermable.
    - Le bouton actif dispose d'un attribut `aria-current="true"`.
  - D'un bloc refermable, obligatoire, défini par les classes `fr-collapse` et `fr-menu`, est un élément HTML `<div>` placé après le bouton d'ouverture. Il s'agit d'un élément générique du core utilisé par d'autres composants tels que le menu latéral  ou l'accordéon.
    - Le bloc refermable contient une liste de liens directs, un élément HTML `<ul>` défini par la classe `fr-menu__list`.
      - Chaque élément `<li>` de la liste contient un lien direct défini par la classe `fr-nav__link`.
- Un Mega-menu est composé :
  - D'un bouton d'ouverture, obligatoire, est un élément HTML `<button>` de type `button` défini par la classe `fr-nav__btn`.
    - Le bouton dispose d'un attribut `aria-expanded`, sa valeur [true|false] défini si le bloc refermable de la navigation est ouvert ou fermé.
    - Le bouton est lié au bloc refermable via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du bloc refermable.
    - Le bouton actif dispose d'un attribut `aria-current="true"`.
  - D'un bloc refermable, obligatoire, défini par les classes `fr-collapse` et `fr-mega-menu`, est un élément HTML `<div>` placé après le bouton d'ouverture. Il s'agit d'un élément générique du core utilisé par d'autres composants tels que le menu latéral  ou l'accordéon.
    - Le bloc refermable contient le conteneur du mega-menu, un élément HTML `<div>` défini par les classes `fr-container`, `fr-container--fluid` et `fr-container-lg` et contenant :
      - Le bouton de fermeture du mega-menu, obligatoire, est un élément HTML `<button>` de type `button` défini par les classes `fr-btn` et `fr-btn--close`.
        - Le bouton est lié au bloc refermable via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` du bloc refermable.
        - Le bouton dispose d'un attribut `title` et un texte explicite pour indiquer son action.
      - La grille du mega-menu, dont la documentation est disponible dans les fondamentaux (voir [grille](../../../../../core/_part/doc/grid/index.md)) composée d'une ou plusieurs colonnes comprenant :
        - Des éléments de contexte (nom de la rubrique, texte de présentation, lien vers la home de rubrique), optionnels, définis par la classe `fr-mega-menu__leader`.
        - Des noms des sous catégories, optionnels, pouvant être cliquables, dans un niveau de titre hx et définis par la classe `fr-mega-menu__category`.
        - Une liste de liens directs, obligatoire, dans un élément HTML `<ul>` défini par la classe `fr-mega-menu__list`.
          - Chaque élément `<li>` de la liste contient un lien direct défini par la classe `fr-nav__link`.
          - Le lien actif dispose d'un attribut `aria-current="page"`.

**Exemple de structure HTML complet**

:::fr-accordion[Déplier pour voir le code]{id=navigation-complex-structure}

```HTML
<nav class="fr-nav" role="navigation" aria-label="Menu principal">
    <ul class="fr-nav__list">
        <li class="fr-nav__item">
            <button aria-expanded="false" aria-controls="collapse-menu-01" type="menu" class="fr-nav__btn">Entrée menu</button>
            <div class="fr-collapse fr-menu" id="collapse-menu-01">
                <ul class="fr-menu__list">
                    <li>
                        <a href="#" class="fr-nav__link">Lien de navigation</a>
                    </li>
                    <li>
                        <a href="#" class="fr-nav__link">Lien de navigation</a>
                    </li>
                    <li>
                        <a href="#" class="fr-nav__link">Lien de navigation</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="fr-nav__item">
            <button aria-expanded="false" aria-controls="collapse-mega-menu" type="mega-menu" class="fr-nav__btn">Entrée mega menu</button>
            <div class="fr-collapse fr-mega-menu" id="collapse-mega-menu">
                <div class="fr-container fr-container--fluid fr-container-lg">
                    <div class="fr-grid-row fr-grid-row-lg--gutters">
                        <div class="fr-col-12 fr-mb-n3v">
                            <button aria-controls="collapse-mega-menu" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a href="#" class="fr-nav__link">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a href="#" class="fr-nav__link">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a href="#" class="fr-nav__link">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a href="#" class="fr-nav__link">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                                <li>
                                    <a href="#" class="fr-nav__link">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="fr-nav__item">
            <a type="link" href="#" class="fr-nav__link">Lien accès direct</a>
        </li>
        <li class="fr-nav__item">
            <button aria-expanded="false" aria-controls="collapse-menu-01-active" aria-current="true" type="menu" class="fr-nav__btn">Entrée menu</button>
            <div class="fr-collapse fr-menu" id="collapse-menu-01-active">
                <ul class="fr-menu__list">
                    <li>
                        <a href="#" class="fr-nav__link">Lien de navigation</a>
                    </li>
                    <li>
                        <a href="#" class="fr-nav__link">Lien de navigation</a>
                    </li>
                    <li>
                        <a aria-current="page" href="#" class="fr-nav__link">Lien de navigation actif</a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</nav>
```

:::

**Exemple de structure HTML avec Liens directs**

:::fr-accordion[Déplier pour voir le code]{id=navigation-liens-directs}

```HTML
<nav class="fr-nav" role="navigation" aria-label="Menu principal">
      <ul class="fr-nav__list">
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self" aria-current="page">accès direct</a>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
    </ul>
</nav>
```

:::

**Exemple de structure HTML avec Menu déroulant**

:::fr-accordion[Déplier pour voir le code]{id=navigation-menu-deroulant}

```HTML
<nav class="fr-nav" role="navigation" aria-label="Menu principal">
    <ul class="fr-nav__list">
        <li class="fr-nav__item">
            <button class="fr-nav__btn" aria-expanded="false" aria-controls="collapse-menu-01" aria-current="true">Entrée menu active</button>
            <div class="fr-collapse fr-menu" id="collapse-menu-01">
                <ul class="fr-menu__list">
                    <li>
                        <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                    </li>
                    <li>
                      <a class="fr-nav__link" href="#" target="_self" aria-current="page">Lien de navigation</a>
                    </li>
                      <li>
                          <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                      </li>
                </ul>
            </div>
        </li>
        <li class="fr-nav__item">
            <button class="fr-nav__btn" aria-expanded="false" aria-controls="collapse-menu-02">Entrée menu</button>
            <div class="fr-collapse fr-menu" id="collapse-menu-02">
                <ul class="fr-menu__list">
                    <li>
                        <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                    </li>
                    <li>
                        <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                    </li>
                    <li>
                        <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                    </li>
                </ul>
            </div>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
    </ul>
</nav>
```

:::

**Exemple de structure HTML avec Mega menu**

:::fr-accordion[Déplier pour voir le code]{id=navigation-mega-menu}

```HTML
<nav class="fr-nav" role="navigation" aria-label="Menu principal">
    <ul class="fr-nav__list">
        <li class="fr-nav__item">
            <button class="fr-nav__btn" aria-expanded="false" aria-controls="mega-menu-01" aria-current="true">Entrée mega menu</button>
            <div class="fr-collapse fr-mega-menu" id="mega-menu-01" tabindex="-1">
                <div class="fr-container fr-container--fluid fr-container-lg">
                    <button class="fr-btn--close fr-btn" aria-controls="mega-menu-01">Fermer</button>
                    <div class="fr-grid-row fr-grid-row-lg--gutters">
                        <div class="fr-col-12 fr-col-lg-8 fr-col-offset-lg-4--right">
                            <div class="fr-mega-menu__leader">
                                <h4 class="fr-h4 fr-mb-2v">Titre éditorialisé</h4>
                                <p>Lorem [...] elit ut.</p>
                                <a class="fr-link fr-fi-arrow-right-line fr-link--icon-right fr-link--align-on-content" href="#">Voir toute la rubrique</a>
                            </div>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a class="fr-nav__link" href="#" target="_self">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self" aria-current="page">Page active</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a class="fr-nav__link" href="#" target="_self">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a class="fr-nav__link" href="#" target="_self">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self" aria-current="page">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fr-col-12 fr-col-lg-3">
                            <h5 class="fr-mega-menu__category">
                                <a class="fr-nav__link" href="#" target="_self">Nom de catégorie</a>
                            </h5>
                            <ul class="fr-mega-menu__list">
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                                <li>
                                    <a class="fr-nav__link" href="#" target="_self">Lien de navigation</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
        <li class="fr-nav__item">
            <a class="fr-nav__link" href="#" target="_self">accès direct</a>
        </li>
    </ul>
</nav>
```

:::

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------| ---------|
| Core       | Oui         |          |
| Navigation | Oui         |          |
| Button     | Non         | Uniquement sur le mega-menu (bouton de fermeture) |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/navigation/navigation.min.css" rel="stylesheet">
```

### JavaScript

#### Installation du JavaScript

Pour fonctionner le composant navigation nécessite l'utilisation de JavaScript.
Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/navigation/navigation.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/navigation/navigation.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur la navigation, les éléments suivants sont instanciés :

- Le conteneur principal, via la classe : `fr-nav`.
- Les éléments de la liste, via la classe : `fr-nav__item`.
- Le bouton d'ouverture, via la classe `fr-nav__btn`.
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

###### navigation

:::fr-table[current]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Retourne l'API de la sous-section ouverte. <br>_Si aucune sous-section n'est ouverte, ou si plusieurs sous-sections sont ouvertes, renvoie `null`._|
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).navigation.current` |

:::

:::fr-table[hasFocus]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie vrai si le focus est sur un des éléments du groupe. |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).navigation.hasFocus` |

:::

:::fr-table[index]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Retourne ou modifie l'index de la sous-section courante. <br>_Si aucune sous-section n'est ouverte, l'index vaut 0._ |
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).navigation.index` <br> `dsfr(elem).navigation.index = 2` |

:::

:::fr-table[isGrouped]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si les sous-sections du groupe sont liées en eux ou non. <br>_Si `true`, lorsqu'une sous-section est ouverte les autres se referment. Si `false`, il est possible d'en ouvrir plusieurs. Si l'attribut n'est pas défini les sous-sections sont groupées par défaut._|
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).navigation.isGrouped` <br> `dsfr(elem).navigation.isGrouped = true` |

:::

:::fr-table[length]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Retourne le nombre de sous-sections dans le groupe. |
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).navigation.length` |

:::

:::fr-table[members]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie un tableau d'objets correspondant aux sous-sections du groupe. |
| **Type** | property |
| **Retour** | Array |
| **Exemple** | `dsfr(elem).navigation.members` |

:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).navigation.node` |

:::

###### navigationItem

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement de la navigation est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).navigationItem.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).navigationItem.node` |

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

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement du bouton de la navigation est activé ou non |
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

###### collapse

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
| **Description** | Défini si le fonctionnement de la navigation est activé ou non |
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
| **Description** | Retourne l'instance du dsfr parent, ici la navigation |
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

Sur chaque menu déroulant de la navigation principale, les événements suivants sont disponibles :

:::fr-table[événements]{valign=top multiline=true caption=false}

| Événement | Action | Élément | Attribut |
|------|------|------|------|
| `dsfr.conceal` | Fermeture de l'élément | Collapse | `data-fr-js-collapse` |
| `dsfr.disclose` | Ouverture de l'élément | Collapse | `data-fr-js-collapse` |
| `dsfr.click` | Click sur le bouton d'ouverture | CollapseButton | `data-fr-js-collapse-button` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+navigation+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de la Navigation principale
shortTitle: Accessibilité de la Navigation principale
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Navigation principale.
shortDescription: Orienter l’usager dans les sections du site.
keywords: navigation principale, menu, rubriques, arborescence, design system, UX, interface, usager, header, mega menu
cover: ../_asset/cover/cover.png
excerpt: La navigation principale guide l’usager dans les sections clés d’un site et structure les niveaux d’accès à l’information. Elle se place sous l’en-tête et peut inclure des menus déroulants ou mega menus.
summary: Ce document décrit la navigation principale comme un composant central d’un site web, servant à organiser et hiérarchiser les principales rubriques. Il présente les cas d’usage, les variantes possibles, les limites en matière de profondeur et de densité, ainsi que les bonnes pratiques éditoriales. Il donne aussi des recommandations sur l’association avec d’autres composants comme la barre de recherche ou le menu latéral, afin de renforcer l’expérience utilisateur dans la navigation globale du site.
mesh:
  - component/header
  - component/footer
---

## Navigation principale

La navigation principale est le système central de navigation au sein d’un site. Elle permet d’orienter l’usager à travers les rubriques principales et secondaires du site.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Navigation principale** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

- `Entrée` ou `Espace` :
  - Lorsque le focus est placé sur un bouton d'ouverture de sous-section de la navigation principale, et que sa sous-section associée est fermée, ouvre la sous-section.
  - Lorsque le focus est placé sur un bouton d'ouverture de sous-section la navigation principale, et que sa sous-section associée est déjà ouverte, referme la sous-section.
  - Lorsque le focus est placé sur un lien direct active l’élément focalisé.
- `Tab` : place le focus sur le prochain élément focalisable.
- `Maj` + `Tab` : place le focus sur l'élément focalisable précédent.

### Règles d’accessibilité

#### Structuration

- La navigation principale est structurée dans un élément `nav role="navigation"`.
- L’attribut `aria-label="Menu principal"` est utilisé pour nommer et donner un contexte explicite à la navigation.
- Les éléments de la navigation principale sont structurés dans une liste avec les éléments `ul` et `li`.

##### Éléments actifs

- Le lien actif dispose d’un attribut `aria-current="page"`.
- Si une sous-section associée à un bouton d'ouverture de la navigation est active, le bouton a un attribut `aria-current` défini sur "true".

##### Entrée de menu

- Les boutons d’ouverture et de fermeture des menus déroulants et mega-menus possèdent&nbsp;:
  - un attribut `aria-expanded` défini à `true`lorsque le sous-menu est affiché, à `false`lorsque la sous-section est fermée.
  - un attribut `aria-controls` défini sur l'ID du bloc refermable associé.

##### Responsive

En version mobile, la navigation principale est disponible dans une fenêtre modale à partir du bouton burger «&nbsp;Menu&nbsp;».

#### Contrastes de couleurs

La navigation principale est suffisamment contrastée en thème clair.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Navigation principale.

---

### Critères RGAA applicables

- **Couleurs** : 3.1, 3.2, 3.3
- **Liens** : 6.1, 6.2
- **Scripts** : 7.1, 7.3
- **Structuration** : 9.1, 9.2, 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.3,10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation** : 12.2, 12.6, 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Élément nav](https://html.spec.whatwg.org/#the-nav-element)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/navigation/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Navigation principale - Système de design</title>
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
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../.....
```

(Truncated for brevity. See source file for full HTML)
