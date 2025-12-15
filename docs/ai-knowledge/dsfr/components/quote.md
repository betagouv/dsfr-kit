# DSFR Quote Component

*Generated from local node_modules*

## Presentation

---
title: Citation
shortTitle: Citation
titleId: Quote
description: Présentation du composant Citation permettant d’intégrer un extrait de discours ou de texte au sein d’un contenu éditorial, en respectant des règles précises de forme.
shortDescription: Citer un texte dans un contenu éditorial.
keywords: citation, contenu éditorial, extrait, source, typographie, italique, UX, accessibilité, design system, mise en forme
cover: ./_asset/cover/cover.png
excerpt: Le composant Citation permet d’intégrer un extrait textuel dans une page, avec des champs de détails pour ajouter des précisions sur la source. Il doit respecter une présentation typographique soignée.
summary: Ce document décrit les usages du composant Citation, destiné à intégrer des extraits de textes ou de discours dans un contenu éditorial. Il explique comment distinguer la citation des composants de mise en avant ou de mise en exergue, précise les règles typographiques à appliquer, comme l’usage de guillemets et de l’italique, et recommande d’éviter les citations trop longues pour préserver la lisibilité. Il fournit également des indications sur la structuration, l’usage des champs de détails, et les règles de propriété intellectuelle à respecter.
mesh:
  - component/callout
  - component/highlight
---

## Citation

La citation est un élément éditorial permettant de mettre en forme du contenu dans une page.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=quote--quote}

### Quand utiliser ce composant ?

Insérer la citation dans une page éditoriale pour citer un texte. La citation peut provenir d'un extrait d’un discours oral ou d’un texte écrit.

> [!WARNING]
> Bien différencier la citation de la mise en avant ou mise en exergue.

[La mise en avant](../../../callout/_part/doc/index.md) est utilisée pour mettre l’accent sur une information importante, venant compléter le contenu principal.

La [mise en exergue](../../../highlight/_part/doc/index.md) quant à elle permet d’identifier plus facilement une information au sein d’un contenu existant.

### Comment utiliser ce composant ?

- **Utiliser les champs de détails pour préciser des informations complémentaires**, telles que l’édition, la collection, la fonction ou le titre de l’auteur par exemple. Il est également possible d’indiquer une URL au sein de ces champs en ajoutant un soulignement pour en faire un lien.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/use/do-1.png)

Préciser les informations complémentaires à la citation au sein des champs de détails.

:::

- **Veiller à ce que deux citations ne se suivent pas directement** au sein d’un contenu éditorial.

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-2.png)

Veiller à ce que deux citations ne se suivent pas directement au sein d’un contenu éditorial.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas positionner deux citations à la suite au sein d’un même contenu éditorial.

:::

::::

### Règles éditoriales

- **Intégrer des guillemets avec espaces insécables** au début et à la fin du texte de la citation.
- **Appliquer systématiquement de l’italique** au nom d’un ouvrage lorsqu’il est mentionné dans la source.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-1.png)

Indiquer le nom d’un ouvrage en italique lorsqu’il est mentionné dans la source.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-1.png)

Ne pas indiquer un nom d’un ouvrage sans italique lorsqu’il est mentionné dans la source.

:::

- **Eviter les citations trop longues** pour qu’elles ne prennent pas trop de place, notamment en mobile. La citation n’est pas nativement limité en nombre de caractères mais il convient de ne pas excéder une taille trop importante.

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/edit/do-2.png)

Limiter les citations à une longueur raisonnable.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](./_asset/edit/dont-2.png)

Ne pas proposer des citations trop longues, pour qu’elles ne prennent pas trop de place, notamment en mobile.

:::

::::

> [!IMPORTANT]
> Les citations courtes d’une oeuvre publiée sont autorisées et encadrées en France par le Code de la Propriété Intellectuelle et plus précisément l'[article L122-5](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000006069414&idArticle=LEGIARTI000037388886&dateTexte=20191211).


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design de la Citation
shortTitle: Design de la Citation
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Citation.
shortDescription: Citer un texte dans un contenu éditorial.
keywords: citation, contenu éditorial, extrait, source, typographie, italique, UX, accessibilité, design system, mise en forme
cover: ../_asset/cover/cover.png
excerpt: Le composant Citation permet d’intégrer un extrait textuel dans une page, avec des champs de détails pour ajouter des précisions sur la source. Il doit respecter une présentation typographique soignée.
summary: Ce document décrit les usages du composant Citation, destiné à intégrer des extraits de textes ou de discours dans un contenu éditorial. Il explique comment distinguer la citation des composants de mise en avant ou de mise en exergue, précise les règles typographiques à appliquer, comme l’usage de guillemets et de l’italique, et recommande d’éviter les citations trop longues pour préserver la lisibilité. Il fournit également des indications sur la structuration, l’usage des champs de détails, et les règles de propriété intellectuelle à respecter.
mesh:
  - component/callout
  - component/highlight
---

## Citation

La citation est un élément éditorial permettant de mettre en forme du contenu dans une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie de la citation](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Une icône]{add="permettant d’informer l’usager qu’il s’agit de la mise en avant d’une citation" required=true}

::dsfr-doc-pin[Le texte de la citation]{required=true}

::dsfr-doc-pin[Une image d’illustration]{add="pour incarner la citation"}

::dsfr-doc-pin[Un séparateur]{required=true}

::dsfr-doc-pin[Une signature]{add="pour préciser l’auteur de la citation"}

::dsfr-doc-pin[Une zone de détails]{add="pour préciser l’origine du texte cité"}

:::

### Variations

**Citation sans illustration**

::dsfr-doc-storybook{storyId=quote--imageless}

- Utiliser la citation sans illustration lorsqu’il n’est pas nécessaire ou possible d’incarner l’auteur de la citation.

En version mobile, le séparateur passe en dessous de la zone de détails.

**Citation avec illustration**

::dsfr-doc-storybook{storyId=quote--default}

- Utiliser la citation avec illustration pour incarner l’auteur.

En version mobile, le comportement du séparateur est le même que pour la variation sans illustration. En complément, l’illustration est affichée en dessous du texte de la citation.

### Tailles

La largeur de la citation s’adapte à la taille de son conteneur.

Toutefois, il est recommandé de ne pas excéder une largeur de 8 colonnes, s’agissant d’un composant de mise en forme de contenu.

Le texte de la citation est quant à lui disponible en 3 tailles :

- MD pour medium - taille par défaut.

::dsfr-doc-storybook{storyId=quote--default}

- LG pour large.

::dsfr-doc-storybook{storyId=quote--default args="{ size: lg }"}

- XL pour extra large.

::dsfr-doc-storybook{storyId=quote--default args="{ size: xl }"}

### États

La citation n’est sujette à aucun changement d’état.

### Personnalisation

Seule la couleur de l’icône de la citation est personnalisable. Elle peut utiliser l’ensemble des couleurs illustratives en indice $main uniquement.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Personnaliser la couleur de l’icône de la citation parmi les couleurs illustratives, en indice $main.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas utiliser une couleur illustrative d’un indice autre que $main.

:::

::::

:::fr-table[Titre du tableau]{valign=top multiline=true caption=false}
|  Éléments | Indice thème clair | Indice thème sombre |
|:-----|:-----|:-----|
| **Icône `$artwork-minor-blue-france`** | Indice **main**<br> exemple : `$pink-tuile-main-556` | Indice **main**<br> exemple : `$pink-tuile-main-556` |
:::

Par ailleurs, certains éléments sont optionnels - voir [la structure du composant](#citation).


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code de la Citation
shortTitle: Code de la Citation
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Citation.
shortDescription: Citer un texte dans un contenu éditorial.
keywords: citation, contenu éditorial, extrait, source, typographie, italique, UX, accessibilité, design system, mise en forme
cover: ../_asset/cover/cover.png
excerpt: Le composant Citation permet d’intégrer un extrait textuel dans une page, avec des champs de détails pour ajouter des précisions sur la source. Il doit respecter une présentation typographique soignée.
summary: Ce document décrit les usages du composant Citation, destiné à intégrer des extraits de textes ou de discours dans un contenu éditorial. Il explique comment distinguer la citation des composants de mise en avant ou de mise en exergue, précise les règles typographiques à appliquer, comme l’usage de guillemets et de l’italique, et recommande d’éviter les citations trop longues pour préserver la lisibilité. Il fournit également des indications sur la structuration, l’usage des champs de détails, et les règles de propriété intellectuelle à respecter.
mesh:
  - component/callout
  - component/highlight
---

## Citation

La citation est un élément éditorial permettant de mettre en forme du contenu dans une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

La **citation** permet de citer un texte dans une page éditoriale. La citation peut provenir d'un extrait d’un discours oral formulé par une tierce personne ou d’un texte écrit.

Sa structure est la suivante :

- Le conteneur principal, obligatoire, est un élément HTML `<figure>` défini par la classe `fr-quote` et contenant :
  - Le texte de la citation, obligatoire, est un élément HTML `<blockquote>` disposant d'un attribut `cite` doit la valeur est la source de la citation.
  - Les informations complémentaires de la citation, sont dans un élément HTML `<figcaption>` contenant :
    - Un premier paragraphe `<p>`, optionnel, afin de préciser quand nécessaire l’Auteur de la citation, défini par la classe `fr-quote__author`.
    - Une liste `<ul>`, optionnelle, afin de préciser l’origine du texte cité, définie par la classe `fr-quote__source`.
      - Les éléments `<li>` de la liste des informations complémentaires peuvent contenir un élément `<cite>` ou un lien `<a>` afin de préciser l'ouvrage cité ou la source de la citation.
    - Une image illustrative de la citation, optionnelle, dans un élément HTML `<div>` défini par la classe `fr-quote__image` et contenant un élément HTML `<img>` défini par la classe `fr-responsive-img`.

**Exemple de structure HTML**

```HTML
<figure class="fr-quote fr-quote--column">
    <blockquote cite="[À MODIFIER - https://lien-vers-la-source.fr]">
        <p>« Lorem [...] elit ut. »</p>
    </blockquote>
    <figcaption>
        <p class="fr-quote__author">Auteur</p>
        <ul class="fr-quote__source">
            <li>
                <cite>Ouvrage</cite>
            </li>
            <li>Détail 1</li>
            <li>Détail 2</li>
            <li>Détail 3</li>
            <li>
                <a href="">Détail 4</a>
            </li>
        </ul>
        <div class="fr-quote__image">
            <img class="fr-responsive-img" src="../../../example/img/placeholder.1x1.png" alt="" />
            <!-- L’alternative de l’image (attribut alt) doit rester vide car l’image est illustrative et ne doit pas être restituée aux technologies d’assistance -->
        </div>
    </figcaption>
</figure>
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
| Quote      | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/quote/quote.min.css" rel="stylesheet">
```

#### Variante de taille

La citation est disponible en deux variantes de tailles pour s'adapter à différents contextes d'utilisation.
Pour appliquer une variante de taille, ajoutez une des classes suivantes à l'élément paragraphe `<p>` contenant la citation :

- En taille XL : par défaut.
- En taille LG : définie par la classe `fr-text--lg`.

**Exemple de variante de taille**

```HTML
<figure class="fr-quote">
    <blockquote cite="[À MODIFIER - https://lien-vers-la-source.fr]">
        <p class="fr-text--lg">« Lorem [...] elit ut. »</p>
    </blockquote>
    <figcaption>
        <!-- Contenu des détails de la citation -->
    </figcaption>
</figure>
```

#### Accentuation

La citation est accentuable, permettant le changement de la couleur de l'icône illustrative. Pour cela, ajouter la classe `fr-quote--NOM-COULEUR` au même niveau que la classe `fr-quote`.

**Exemple de variante accentuée**

```HTML
<figure class="fr-quote fr-quote--green-emeraude">
    <!-- Contenu de la citation -->
</figure>
```

### JavaScript

Le composant Citation **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+quote+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de la Citation
shortTitle: Accessibilité de la Citation
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Citation.
shortDescription: Citer un texte dans un contenu éditorial.
keywords: citation, contenu éditorial, extrait, source, typographie, italique, UX, accessibilité, design system, mise en forme
cover: ../_asset/cover/cover.png
excerpt: Le composant Citation permet d’intégrer un extrait textuel dans une page, avec des champs de détails pour ajouter des précisions sur la source. Il doit respecter une présentation typographique soignée.
summary: Ce document décrit les usages du composant Citation, destiné à intégrer des extraits de textes ou de discours dans un contenu éditorial. Il explique comment distinguer la citation des composants de mise en avant ou de mise en exergue, précise les règles typographiques à appliquer, comme l’usage de guillemets et de l’italique, et recommande d’éviter les citations trop longues pour préserver la lisibilité. Il fournit également des indications sur la structuration, l’usage des champs de détails, et les règles de propriété intellectuelle à respecter.
mesh:
  - component/callout
  - component/highlight
---

## Citation

La citation est un élément éditorial permettant de mettre en forme du contenu dans une page.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Citation** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

- Le texte cité est contenu dans un élément `<blockquote>` inséré dans un bloc `<figure>` et les informations complémentaires (image, auteur, ouvrage… ) dans l'élément `<figcaption>`.
- L’ouvrage cité doit être placé dans une balise `<cite>` et ainsi apparaitre en italique.
- L’icône et l’image sont décoratives et ne doivent pas être restituées aux technologies d’assistance.

> [!NOTE]
> Ne pas confondre l’attribut `cite` qui permet d’ajouter l’URL de la source de la citation si celle-ci provient d’un autre site et l’élément `<cite>` à utiliser pour le titre de l’œuvre citée.
> L’attribut et l’élément n’ont pas d’importance pour l’accessibilité.

### Contrastes de couleurs

Le composant Citation est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

NVDA et JAWS sont les seuls lecteurs d’écran à restituer correctement la sémantique de l’élément blockquote.

---

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2
- **Liens&nbsp;:** 6.1, 6.2
- **Éléments obligatoires&nbsp;:** 8.9
- **Structuration&nbsp;:** 9.3, 9.4
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:**: 13.9, 13.11

---

### Références

- [Élément blockquote](https://html.spec.whatwg.org/#the-blockquote-element)
- [Élément cite](https://html.spec.whatwg.org/#the-cite-element)
- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/quote/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Citation - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/component/quote/quote.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../dist/component/quote/q...
```

(Truncated for brevity. See source file for full HTML)
