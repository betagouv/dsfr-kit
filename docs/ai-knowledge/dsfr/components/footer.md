# DSFR Footer Component

*Generated from local node_modules*

## Presentation

---
title: Pied de page
shortTitle: Pied de page
titleId: Footer
description: Présentation du composant Pied de page destiné à structurer les informations complémentaires et les liens secondaires en bas de page.
shortDescription: Informations complémentaires en bas de page
keywords: pied de page, footer, navigation secondaire, DSFR, accessibilité, informations légales, design système
cover: ./_asset/cover/cover.png
excerpt: Le composant Pied de page structure les informations secondaires d’un site, comme les mentions légales, les liens institutionnels et les coordonnées, tout en facilitant la navigation de fin de parcours.
summary: Ce composant permet de clore chaque page avec un ensemble structuré d’informations complémentaires, de liens obligatoires et de repères institutionnels. Il peut inclure des blocs de liens, une description du service, un bloc marque, et une mention légale normalisée. Le pied de page est non personnalisable, s’intègre sur l’ensemble des pages d’un site public, et respecte les exigences d’accessibilité et de cohérence éditoriale.
mesh:
  - component/header
  - component/navigation
  - component/follow
---

## Pied de page

Le pied de page est un élément de navigation secondaire mis à disposition de l’usager pour qu’il poursuive son parcours. Il propose également des éléments d’information complémentaires.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=footer--footer}

### Quand utiliser ce composant ?

**Intégrer le pied de page sur l’ensemble des sites de la sphère gouvernementale**. Au sein d’un site, le pied de page doit être affiché en bas de chacune des pages.

### Comment utiliser ce composant ?

- **Proposer a minima le pied de page simple** (bloc Marque, liens obligatoires et mention de la licence).
- **Utiliser le pied de page complet** (avec listes de liens) pour les sites profonds nécessitant de réintégrer des liens en rebond de la navigation.
- **Classer les listes de liens** lorsque vous le pouvez, pour faciliter la lecture par l’usager. Il est possible d’inclure jusqu'à 6 colonnes de liens et nous recommandons de ne pas dépasser des listes de 8 liens.
- **Penser le pied de page comme un élément complémentaire à la navigation principale**. Il ne doit pas être le miroir de cette dernière. Un travail de conception particulier est de fait nécessaire pour proposer des contenus adaptés, qui répondent par exemple aux questions restantes de l’usager.

### Règles éditoriales

- **Utiliser le texte de présentation pour donner des informations complémentaires** sur le service (description) ou l’organisation (contact, adresse etc.).
- **Proposer des libellés de liens clairs et concis** afin que l’usager comprenne facilement les pages auxquelles il peut accéder.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design du pied de page
shortTitle: Design du Pied de page
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Pied de page.
shortDescription: Informations complémentaires en bas de page
keywords: pied de page, footer, navigation secondaire, DSFR, accessibilité, informations légales, design système
cover: ../_asset/cover/cover.png
excerpt: Le composant Pied de page structure les informations secondaires d’un site, comme les mentions légales, les liens institutionnels et les coordonnées, tout en facilitant la navigation de fin de parcours.
summary: Ce composant permet de clore chaque page avec un ensemble structuré d’informations complémentaires, de liens obligatoires et de repères institutionnels. Il peut inclure des blocs de liens, une description du service, un bloc marque, et une mention légale normalisée. Le pied de page est non personnalisable, s’intègre sur l’ensemble des pages d’un site public, et respecte les exigences d’accessibilité et de cohérence éditoriale.
mesh:
  - component/header
  - component/navigation
  - component/follow
---

## Pied de page

Le pied de page est un élément de navigation secondaire mis à disposition de l’usager pour qu’il poursuive son parcours. Il propose également des éléments d’information complémentaires.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie du pied de page](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Une bordure supérieure]{required=true add="marquant la séparation entre le corps de la page et le pied de page"}

::dsfr-doc-pin[Un titre de catégorie]

::dsfr-doc-pin[Un fond gris]{required=true add="dédié au bloc de liens de navigation"}

::dsfr-doc-pin[Un logo opérateur]{add="au format vertical ou horizontal"}

::dsfr-doc-pin[Le bloc marque]{required=true}

::dsfr-doc-pin[Un libellé “Nos partenaires”]

::dsfr-doc-pin[Un séparateur entre les blocs]{required=true}

::dsfr-doc-pin[Une liste de liens liés aux obligations légales]{required=true add="à définir en fonction du site mais incluant a minima “Accessibilité : non/partiellement/totalement conforme”, “Mentions légales” et “Données personnelles et gestions des cookies”"}

::dsfr-doc-pin[Une mention de la licence]{required=true add="“Sauf mention contraire, tous les contenus de ce site sont sous licence etalab-2.0”"}

::dsfr-doc-pin[Un texte de présentation]

::dsfr-doc-pin[Les quatre liens de références de l'écosystème institutionnel]{required=true}

::dsfr-doc-pin[Les logos des partenaires additionnels]{add="ferrés à droite"}

::dsfr-doc-pin[Des séparateurs verticaux]{required=true add="entre les liens d’obligations légales"}

::dsfr-doc-pin[Un bouton d’accès aux paramètres d’affichage]

:::

### Variations

**Pied de page en berne**

::dsfr-doc-storybook{storyId=footer--footer args="{ isMourning: true }"}

Lors des périodes de deuil national, il est possible d’utiliser la version en berne du footer. La Marianne s’affichera alors dans sa version en berne.

### Tailles

La largeur du pied de page est de taille fixe et prend les 12 colonnes disponibles de la grille.

### États

Le pied de page n’est sujet à aucun changement d’état.

### Personnalisation

Le pied de page n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](#pied-de-page).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](../_asset/custom/do-1.png)

Considérer que chaque élément du pied de page a une place définie.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas modifier le positionnement des éléments du pied de page.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas modifier les liens obligatoires de l’écosystème de l’Etat.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code du Pied de page
shortTitle: Code du Pied de page
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Pied de page.
shortDescription: Informations complémentaires en bas de page
keywords: pied de page, footer, navigation secondaire, DSFR, accessibilité, informations légales, design système
cover: ../_asset/cover/cover.png
excerpt: Le composant Pied de page structure les informations secondaires d’un site, comme les mentions légales, les liens institutionnels et les coordonnées, tout en facilitant la navigation de fin de parcours.
summary: Ce composant permet de clore chaque page avec un ensemble structuré d’informations complémentaires, de liens obligatoires et de repères institutionnels. Il peut inclure des blocs de liens, une description du service, un bloc marque, et une mention légale normalisée. Le pied de page est non personnalisable, s’intègre sur l’ensemble des pages d’un site public, et respecte les exigences d’accessibilité et de cohérence éditoriale.
mesh:
  - component/header
  - component/navigation
  - component/follow
---

## Pied de page

Le pied de page est un élément de navigation secondaire mis à disposition de l’usager pour qu’il poursuive son parcours. Il propose également des éléments d’information complémentaires.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

Le composant **Pied de page** est constitué d'un élément `<footer>` de classe `fr-footer`, avec l'attribut `role="contentinfo"`, et un attribut `id` pour le lier au lien d'évitement "pied de page" via une ancre.

- Un premier bloc, optionnel, de navigation permet d'ajouter des liens de navigations. Il s'agit d'un élément `<div>` de classe `fr-footer__top`.
  - Ce bloc doit contenir un élément `<div>` de classe `fr-container` qui permet de centrer le contenu ainsi qu'une [grille](../../../../../core/_part/doc/index.md) pour structurer les liens en colonnes.
  - Utiliser la grille avec espacement entre les colonnes `fr-grid-row--gutters`. Ajouter autant de colonnes que nécessaire pour structurer les liens.
  - Dans chaque colonne ajouter :
    - Une catégorie de liens, optionnelle, avec un titre `<h3>`, ou autre niveau d'entête, de classe `fr-footer__top-cat`. Le libellé de la catégorie peut être un lien `<a>`.
    - Une liste de liens, `<ul>` de classe `fr-footer__top-list`, avec des liens `<a>` de classe `fr-footer__top-link`.
- Puis les blocs suivant, contenu dans un élément `<div>` de classe `fr-container` pour centrer le contenu.
  - Le corps du pied de page, un élément `<div>` de classe `fr-footer__body` contenant :
    - Un bloc marque (voir [Marque de l'état](https://www.info.gouv.fr/marque-de-letat)), un élément `<div>` de classes `fr-footer__brand` et `fr-enlarge-link`.
      - Il contient à minima le bloc-marque, il s'agit du composant [bloc-marque de l'état](../../../../logo/_part/doc/code/index.md) de classe `fr-logo`. Celui-ci doit être inséré dans un lien `<a>` pointant vers la page d'accueil et avec un attribut `title="Retour à l’accueil du site - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)"`.
      - Il peut aussi contenir un logo opérateur de l'État, une image (ou SVG) de classe `fr-footer__logo`.
        - Utiliser un attribut `style="width:10rem;"`, avec comme valeur la largeur du logo en fonction de son format (10rem pour du 16:9). Ne pas dépasser 10rem (160px) de largeur et 5.625rem (90px) de hauteur.
        - L'attribut `alt` doit être renseigné avec le nom de l'opérateur.
        - Le lien pointant vers l'accueil est alors positionné au niveau du logo de l'opérateur, il est automatiquement étendu à toute la zone du bloc marque.
        - L'attribut `title` du lien doit être renseigné sous la forme "Retour à l’accueil du site - [texte alternatif de l’image (nom de l'opérateur ou du site serviciel)] - République Française".
    - Un bloc de contenu, un élément `<div>` de classe `fr-footer__content` contenant :
      - Une description du site, optionnelle, un élément `<p>` de classe `fr-footer__content-desc`. La description doit être concise et informative, ne pas dépasser 3 lignes.
      - Une liste de liens, **obligatoire et non modifiable**, `<ul>` de classe `fr-footer__content-list`, avec des `<li>` de classe `fr-footer__content-item`, et des liens `<a>` de classe `fr-footer__content-link`.
        - Les liens doivent être ordonnés dans cet ordre : info.gouv.fr, service-public.gouv.fr, legifrance.gouv.fr, data.gouv.fr
        - Les liens doivent pointer vers les sites respectifs en s'ouvrant dans une nouvelle fenêtre.
  - Le bloc logos partenaires, optionnel, une `<div>`de classe `fr-footer__partners`. Ce bloc contient :
    - Un titre `<h2>`, ou autre niveau d'entête, de classe `fr-footer__partners-title`.
    - Un conteneur `fr-footer__partners-logos` permettant de positionner un bloc de logo principal `<div>` de classe `fr-footer__partners-main` et/ou un bloc de logos secondaires `<div>` de classe `fr-footer__partners-sub` (utiliser une liste `<ul><li>` s'il y en a plusieurs).
      - Chaque logo est formé d'une image (ou SVG) de classe `fr-footer__logo`.
        - Utiliser un attribut `style="height: 5.625rem"`, avec comme valeur la hauteur max désirée. Uniformiser la hauteur des logos pour une meilleure lisibilité.
        - L'attribut `alt` doit être renseigné avec le nom du partenaire.
        - Un lien pointant vers le site du partenaire peut englober l'image du logo partenaire.
  - Le bas du pied de page, obligatoire, un élément `<div>` de classe `fr-footer__bottom` contenant :
    - Une liste de liens liés aux obligations légales, `<ul>` de classe `fr-footer__bottom-list`, `<li>` de classe `fr-footer__bottom-item`, et des liens `<a>` de classe `fr-footer__bottom-link`. Cette liste doit être définie en fonction du site, toutefois les liens & contenus suivants sont obligatoires : “accessibilité : non/partiellement/totalement conforme”, mentions légales, données personnelles et gestion des cookies.
    - Une mention de la licence, contenu dans une `<div>` de classe `fr-footer__bottom-copy`, sous forme d'un paragraphe avec l'intitulé : “Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous licence etalab-2.0” (ajouter un lien vers la licence)

**Exemple de structure minimale**

:::fr-accordion[Déplier pour voir le code]{id=footer-structure-minimale}

```html
<footer class="fr-footer" role="contentinfo">
    <div class="fr-container">
        <div class="fr-footer__body">
            <div class="fr-footer__brand fr-enlarge-link">
                <a id="footer-brand-link-6954" title="Retour à l’accueil du site - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)" href="/">
                    <p class="fr-logo">
                        Intitulé
                        <br>officiel
                    </p>
                </a>
            </div>
            <div class="fr-footer__content">
                <p class="fr-footer__content-desc">Lorem [...] elit ut.</p>
                <ul class="fr-footer__content-list">
                    <li class="fr-footer__content-item">
                        <a title="info.gouv.fr - nouvelle fenêtre" href="https://info.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">info.gouv.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a title="service-public.gouv.fr - nouvelle fenêtre" href="https://service-public.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">service-public.gouv.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a title="legifrance.gouv.fr - nouvelle fenêtre" href="https://legifrance.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">legifrance.gouv.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a title="data.gouv.fr - nouvelle fenêtre" href="https://data.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">data.gouv.fr</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="fr-footer__bottom">
            <ul class="fr-footer__bottom-list">
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Plan du site</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Accessibilité : non/partiellement/totalement conforme</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Mentions légales</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Données personnelles</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Gestion des cookies</a>
                </li>
            </ul>
            <div class="fr-footer__bottom-copy">
                <p>Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank" rel="noopener external" title="Licence etalab - nouvelle fenêtre">licence etalab-2.0</a>
                </p>
            </div>
        </div>
    </div>
</footer>
```

:::

**Exemple de structure complète**
Cet exemple inclut un bloc de navigation, un bloc-marque avec logo opérateur, et un bloc de logos partenaires, en plus du contenu minimal.

:::fr-accordion[Déplier pour voir le code]{id=footer-structure-complete}

```html
<footer class="fr-footer" role="contentinfo">
    <div class="fr-footer__top">
        <div class="fr-container">
            <div class="fr-grid-row fr-grid-row--start fr-grid-row--gutters">
                <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
                    <h3 class="fr-footer__top-cat">
                        Nom de la catégorie
                    </h3>
                    <ul class="fr-footer__top-list">
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                    </ul>
                </div>
                <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
                    <h3 class="fr-footer__top-cat">
                        Nom de la catégorie
                    </h3>
                    <ul class="fr-footer__top-list">
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                    </ul>
                </div>
                <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
                    <h3 class="fr-footer__top-cat">
                        Nom de la catégorie
                    </h3>
                    <ul class="fr-footer__top-list">
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                    </ul>
                </div>
                <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
                    <h3 class="fr-footer__top-cat">
                        Nom de la catégorie
                    </h3>
                    <ul class="fr-footer__top-list">
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                    </ul>
                </div>
                <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
                    <h3 class="fr-footer__top-cat">
                        Nom de la catégorie
                    </h3>
                    <ul class="fr-footer__top-list">
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                    </ul>
                </div>
                <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
                    <h3 class="fr-footer__top-cat">
                        Nom de la catégorie
                    </h3>
                    <ul class="fr-footer__top-list">
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                        <li>
                            <a href="#" class="fr-footer__top-link">Lien de navigation</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="fr-container">
        <div class="fr-footer__body">
            <div class="fr-footer__brand fr-enlarge-link">
                <p class="fr-logo">
                    République
                    <br>Française
                </p>
                <a title="Retour à l’accueil du site - [À MODIFIER - texte alternatif de l’image : nom de l'opérateur ou du site serviciel] - République Française" href="/" class="fr-footer__brand-link">
                    <img class="fr-footer__logo" style="width:10rem;" src="../../../example/img/placeholder.16x9.png" alt="[À MODIFIER - texte alternatif de l’image]" />
                </a>
            </div>
            <div class="fr-footer__content">
                <p class="fr-footer__content-desc">Lorem [...] elit ut.</p>
                <ul class="fr-footer__content-list">
                    <li class="fr-footer__content-item">
                        <a title="info.gouv.fr - nouvelle fenêtre" href="https://info.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">info.gouv.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a title="service-public.gouv.fr - nouvelle fenêtre" href="https://service-public.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">service-public.gouv.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a title="legifrance.gouv.fr - nouvelle fenêtre" href="https://legifrance.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">legifrance.gouv.fr</a>
                    </li>
                    <li class="fr-footer__content-item">
                        <a title="data.gouv.fr - nouvelle fenêtre" href="https://data.gouv.fr" target="_blank" rel="noopener external" class="fr-footer__content-link">data.gouv.fr</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="fr-footer__partners">
            <h2 class="fr-footer__partners-title">Nos partenaires</h2>
            <div class="fr-footer__partners-logos">
                <div class="fr-footer__partners-main">
                    <a class="fr-footer__partners-link" href="">
                        <img class="fr-footer__logo" style="height: 5.625rem" src="../../../example/img/placeholder.16x9.png" alt="[À MODIFIER - texte alternatif de l’image]" />
                    </a>
                </div>
                <div class="fr-footer__partners-sub">
                    <ul>
                        <li>
                            <a class="fr-footer__partners-link" href="">
                                <img class="fr-footer__logo" style="height: 5.625rem" src="../../../example/img/placeholder.16x9.png" alt="[À MODIFIER - texte alternatif de l’image]" />
                            </a>
                        </li>
                        <li>
                            <a class="fr-footer__partners-link" href="">
                                <img class="fr-footer__logo" style="height: 5.625rem" src="../../../example/img/placeholder.1x1.png" alt="[À MODIFIER - texte alternatif de l’image]" />
                            </a>
                        </li>
                        <li>
                            <a class="fr-footer__partners-link" href="">
                                <img class="fr-footer__logo" style="height: 5.625rem" src="../../../example/img/placeholder.9x16.png" alt="[À MODIFIER - texte alternatif de l’image]" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="fr-footer__bottom">
            <ul class="fr-footer__bottom-list">
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Plan du site</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Accessibilité : non/partiellement/totalement conforme</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Mentions légales</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Données personnelles</a>
                </li>
                <li class="fr-footer__bottom-item">
                    <a href="[url - à modifier]" class="fr-footer__bottom-link">Gestion des cookies</a>
                </li>
            </ul>
            <div class="fr-footer__bottom-copy">
                <p>Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank" rel="noopener external" title="Licence etalab - nouvelle fenêtre">licence etalab-2.0</a>
                </p>
            </div>
        </div>
    </div>
</footer>
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
| Logo       | Oui         |
| Footer     | Oui         |

:::

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/logo/logo.min.css" rel="stylesheet">
<link href="dist/component/footer/footer.min.css" rel="stylesheet">
```

---

### JavaScript

Le composant Pied de page **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+footer+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Pied de page
shortTitle: Accessibilité du Pied de page
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Pied de page.
shortDescription: Informations complémentaires en bas de page
keywords: pied de page, footer, navigation secondaire, DSFR, accessibilité, informations légales, design système
cover: ../_asset/cover/cover.png
excerpt: Le composant Pied de page structure les informations secondaires d’un site, comme les mentions légales, les liens institutionnels et les coordonnées, tout en facilitant la navigation de fin de parcours.
summary: Ce composant permet de clore chaque page avec un ensemble structuré d’informations complémentaires, de liens obligatoires et de repères institutionnels. Il peut inclure des blocs de liens, une description du service, un bloc marque, et une mention légale normalisée. Le pied de page est non personnalisable, s’intègre sur l’ensemble des pages d’un site public, et respecte les exigences d’accessibilité et de cohérence éditoriale.
mesh:
  - component/header
  - component/navigation
  - component/follow
---

## Pied de page

Le pied de page est un élément de navigation secondaire mis à disposition de l’usager pour qu’il poursuive son parcours. Il propose également des éléments d’information complémentaires.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Pied de page** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Il n'y a aucune interaction spécifique au composant **Pied de page**.

Les interactions clavier sont celles des [liens](../../../../link/_part/doc/accessibility/index.md) contenus dans le pied de page.

### Règles d’accessibilité

Les règles d’accessibilité du composant "Pied de page" découlent de celles des composants qui la compose.

L'élément `<footer>` doit posséder un `role="contentinfo"`.

#### Mention obligatoire

Une mention obligatoire de conformité au RGAA doit apparaître sur toutes les pages.

Cette mention peut être cliquable et conduire vers la page Accessibilité ou vers la déclaration d’accessibilité.

La mention se décline en :

- «&nbsp;Accessibilité : non conforme&nbsp;» si le taux de conformité est inférieur à 50% (ou qu’aucun audit n’a été effectué)
- «&nbsp;Accessibilité : partiellement conforme&nbsp;» si le taux de conformité est supérieur à 50%.
- «&nbsp;Accessibilité : totalement conforme&nbsp;» si le taux de conformité est égal à 100%.

Voir plus d'information sur les obligations légales sur l’[accessibilité des sites publics](https://design.numerique.gouv.fr/accessibilite-numerique/cadre-legal/).

### Contrastes de couleurs

Le pied de page est suffisamment contrasté en thème clair et en thème sombre.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant En-tête.

---

### Critères RGAA applicables

- **Images&nbsp;:** 1.1, 1.2, 1.3
- **Couleurs&nbsp;:** 3.2, 3.3
- **Liens&nbsp;:** 6.1, 6.2
- **Scripts&nbsp;:** 7.1, 7.3
- **Éléments obligatoires&nbsp;:** 8.9
- **Structuration&nbsp;:** 9.1, 9.2, 9.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation&nbsp;:** 12.6, 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Élément footer](https://html.spec.whatwg.org/#the-footer-element)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/footer/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Pied de page - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/component/logo/logo.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/footer/footer.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/cor...
```

(Truncated for brevity. See source file for full HTML)
