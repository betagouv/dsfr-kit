# DSFR Search Component

*Generated from local node_modules*

## Presentation

---
title: Barre de recherche
shortTitle: Barre de recherche
titleId: Search
description: Présentation du composant Barre de recherche permettant d’accéder rapidement à un contenu via un mot clé ou une phrase.
shortDescription: Accès rapide à un contenu par mot clé
keywords: recherche, barre de recherche, navigation, formulaire, interface, DSFR, accessibilité, moteur de recherche
cover: ./_asset/cover/cover.png
excerpt: La barre de recherche permet à l’usager d’accéder à un contenu ciblé en saisissant un mot clé ou une phrase. Elle peut être globale ou contextuelle selon l’usage.
summary: Ce composant propose un champ de saisie avec bouton pour rechercher un contenu spécifique au sein d’un site ou d’un bloc fonctionnel. Elle s’intègre idéalement à l’en-tête pour un usage global ou dans une section précise pour des recherches contextuelles. Le composant suit des recommandations strictes en matière d’accessibilité, de largeur minimale, de rédaction des libellés et ne permet pas de personnalisation graphique.
mesh:
  - component/header
---

## Barre de recherche

La barre de recherche est un système de navigation permettant à l'usager d’accéder rapidement à un contenu en lançant une recherche sur un mot clé ou une phrase.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=search--search}

### Quand utiliser ce composant

Utiliser la barre de recherche pour proposer une recherche globale (au sein d’un site) ou une recherche contextuelle (au sein d’une page, d’un composant dédié etc.).

### Comment utiliser ce composant

- **Proposer une barre de recherche assez large pour afficher 27 caractères minimum**. Cela permet à l’usager de saisir plusieurs termes qui restent visibles au sein du champ. Il peut ainsi facilement vérifier sa recherche avant de la soumettre.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Proposer une barre de recherche de largeur correcte permettant d’afficher 27 caractères minimum.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas utiliser de barre de recherche trop étroite où les 27 caractères ne sont pas lisibles.

:::

::::

- **Intégrer la barre de recherche globale à l’en-tête** (cf. composant “[En-tête](../../../header/_part/doc/index.md)”) pour qu’elle soit accessible depuis l’ensemble des pages de votre site. Dans ce cas, la recherche doit se faire sur tout le contenu du site.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/use/do-2.png)

Intégrer la barre de recherche globale à l’en-tête du site.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](./_asset/use/dont-2.png)

Ne pas placer la barre de recherche globale ailleurs que dans l’en-tête ou modifier son positionnement au sein de l’en-tête.

:::

::::

- **Valoriser la barre de recherche globale sur la page d’accueil** dès lors qu’elle constitue le point de départ de la navigation pour l’usager. Dans ce cas, elle doit être présentée comme l’élément le plus important de votre page d’accueil.
- **Ne pas afficher deux barres de recherches sur un même écran**

### Règles éditoriales

- **Rédiger un libellé de champ de saisie clair et concis**. L’usager doit comprendre facilement le contexte de la recherche (globale, par type de contenu, etc.)

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-1.png)

Rédiger un libellé de champ de saisie clair permettant à l’usager de comprendre le contexte de la recherche.

:::

::::

- **Conserver le libellé “Rechercher” pour le bouton de recherche**. Il est clair pour l’usager et respecte les règles éditoriales préconisées pour le contenu des boutons.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design de la Barre de recherche
shortTitle: Design de la Barre de recherche
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Barre de recherche.
shortDescription: Accès rapide à un contenu par mot clé
keywords: recherche, barre de recherche, navigation, formulaire, interface, DSFR, accessibilité, moteur de recherche
cover: ../_asset/cover/cover.png
excerpt: La barre de recherche permet à l’usager d’accéder à un contenu ciblé en saisissant un mot clé ou une phrase. Elle peut être globale ou contextuelle selon l’usage.
summary: Ce composant propose un champ de saisie avec bouton pour rechercher un contenu spécifique au sein d’un site ou d’un bloc fonctionnel. Elle s’intègre idéalement à l’en-tête pour un usage global ou dans une section précise pour des recherches contextuelles. Le composant suit des recommandations strictes en matière d’accessibilité, de largeur minimale, de rédaction des libellés et ne permet pas de personnalisation graphique.
mesh:
  - component/header
---

## Barre de recherche

La barre de recherche est un système de navigation permettant à l'usager d’accéder rapidement à un contenu en lançant une recherche sur un mot clé ou une phrase.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie de la barre de recherche](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un champ]{required=true}

::dsfr-doc-pin[Un bouton]{required=true}

::dsfr-doc-pin[Un texte d’exemple]{required=true}

:::

### Variations

La barre de recherche n’a pas de variation.

### Tailles

La barre de recherche est disponible en 2 tailles :

- MD pour medium

::dsfr-doc-storybook{storyId=search--default}

- LG pour large

::dsfr-doc-storybook{storyId=search--size-lg}

La largeur de la barre de recherche s’adapte à la taille de son conteneur.

> [!NOTE]
> La taille du bouton est toujours définie par son libellé. Ici, c’est donc bien la taille du champ de saisie qui évolue jusqu’à prendre la totalité de la largeur du conteneur.

- **Choisir la barre de recherche MD** lorsqu'il y a des contraintes d'espace dans vos interfaces. Le cas d’usage principal est l’accès à la recherche globale depuis l’en-tête. Il peut également être spécifique à certains composants dans le cas de recherche contextuelle (exemple : recherche pour filtrer des listes ou à l’intérieur d’un tableau de données).
- **Choisir la barre de recherche LG** pour présenter un moteur de recherche global à l’intérieur d'une page (exemple : mise en avant de la recherche depuis la page d’accueil, moteur de recherche sur la liste de résultats de recherche etc.).

> [!NOTE]
> En responsive version mobile et tablette, il est obligatoire d’utiliser le format MD qui est le plus adapté.

Si vous utilisez le format LG en desktop, le composant sera donc automatiquement redimensionné au format MD.

### États

La barre de recherche n’est sujette à aucun changement d’état.

### Personnalisation

La barre de recherche n’est pas personnalisable.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur du bouton de recherche

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas personnaliser la couleur du liseré de la barre de recherche.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-3.png)

Ne pas personnaliser l’icône du bouton de recherche.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code de la Barre de recherche
shortTitle: Code de la Barre de recherche
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Barre de recherche.
shortDescription: Accès rapide à un contenu par mot clé
keywords: recherche, barre de recherche, navigation, formulaire, interface, DSFR, accessibilité, moteur de recherche
cover: ../_asset/cover/cover.png
excerpt: La barre de recherche permet à l’usager d’accéder à un contenu ciblé en saisissant un mot clé ou une phrase. Elle peut être globale ou contextuelle selon l’usage.
summary: Ce composant propose un champ de saisie avec bouton pour rechercher un contenu spécifique au sein d’un site ou d’un bloc fonctionnel. Elle s’intègre idéalement à l’en-tête pour un usage global ou dans une section précise pour des recherches contextuelles. Le composant suit des recommandations strictes en matière d’accessibilité, de largeur minimale, de rédaction des libellés et ne permet pas de personnalisation graphique.
mesh:
  - component/header
---

## Barre de recherche

La barre de recherche est un système de navigation permettant à l'usager d’accéder rapidement à un contenu en lançant une recherche sur un mot clé ou une phrase.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Barre de recherche** est un système de navigation qui permet à l'utilisateur d’accéder rapidement à un contenu en lançant une recherche sur un mot clé ou une expression.
Sa structure est la suivante :

- Le conteneur de la barre de recherche doit être un élément HTML `<div>` avec le rôle `search` défini par la classe `fr-search-bar`.
- Le champ de recherche est un élément HTML `<input>` de type `search` défini par la classe `fr-input`.
- Le champ de recherche doit être associée à un libellé `<label>` avec la classe `fr-label`.
- Le bouton de recherche est un élément HTML `<button>` de type `button` défini par la classe `fr-btn` et dispose d'un attribut `title` indiquant son action.
- Un message d'erreur ou de succès peut être associé au champ de recherche en utilisant un élément HTML `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`.
  - Son attribut`id` doit être associé à l'attribut `aria-describedby` du champ de recherche.
  - Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.

**Exemple de structure HTML**

```HTML
<div class="fr-search-bar" role="search">
    <label class="fr-label" for="search-input">
        Rechercher
    </label>
    <input class="fr-input" aria-describedby="search-input-messages" placeholder="Rechercher" id="search-input" type="search">
    <div class="fr-messages-group" id="search-input-messages" aria-live="polite">
    </div>
    <button title="Rechercher" type="button" class="fr-btn">Rechercher</button>
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
| Input      | Oui         |
| Button     | Oui         |
| Search     | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/input/input.min.css" rel="stylesheet">
<link href="dist/component/button/button.min.css" rel="stylesheet">
<link href="dist/component/search/search.min.css" rel="stylesheet">
```

#### Variante de taille

La barre de recherche est disponible en deux variantes de tailles pour s'adapter à différents contextes d'utilisation.
Pour appliquer une variante de taille, ajoutez une des classes suivantes à l'élément `<div class="fr-search-bar">` :

- En taille MD : par défaut.
- En taille LG : définie par la classe `fr-search-bar--lg`.

**Exemple de variante de taille**

```HTML
<div class="fr-search-bar fr-search-bar--lg" role="search">
  <!-- Contenu de la barre de recherche -->
</div>
```

---

### JavaScript

Le composant Barre de recherche **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+search+)


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de la Barre de recherche
shortTitle: Accessibilité de la Barre de recherche
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Barre de recherche.
shortDescription: Accès rapide à un contenu par mot clé
keywords: recherche, barre de recherche, navigation, formulaire, interface, DSFR, accessibilité, moteur de recherche
cover: ../_asset/cover/cover.png
excerpt: La barre de recherche permet à l’usager d’accéder à un contenu ciblé en saisissant un mot clé ou une phrase. Elle peut être globale ou contextuelle selon l’usage.
summary: Ce composant propose un champ de saisie avec bouton pour rechercher un contenu spécifique au sein d’un site ou d’un bloc fonctionnel. Elle s’intègre idéalement à l’en-tête pour un usage global ou dans une section précise pour des recherches contextuelles. Le composant suit des recommandations strictes en matière d’accessibilité, de largeur minimale, de rédaction des libellés et ne permet pas de personnalisation graphique.
mesh:
  - component/header
---

## Barre de recherche

La barre de recherche est un système de navigation permettant à l'usager d’accéder rapidement à un contenu en lançant une recherche sur un mot clé ou une phrase.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Barre de recherche** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

L’ensemble des règles d’accessibilité du [champs de saisie](../../../../input/_part/doc/accessibility/index.md) doivent être respectées.

- Le conteneur de la barre de recherche possède un `role="search"`.
- Le champ de recherche est de type `search`.
- Le champ de recherche a une étiquette positionnée hors écran. Le bouton de recherche adjacent permet de comprendre la nature et fonction du champ.
- Le bouton de recherche a un intitulé et un attribut title explicite.

### Contrastes de couleurs

Le composant Barre de recherche est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Barre de recherche.

---

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2, 3.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires&nbsp;:** 11.1, 11.2, 11.9
- **Navigation&nbsp;:** 12.1, 12.5, 12.6, 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- <a href="https://www.w3.org/TR/wai-aria/#search" rel="noopener external" target="_blank" title="W3C - nouvelle fenêtre">Rôle <span lang="en">search</span></a>
- [Technique G167 WCAG](https://www.w3.org/WAI/WCAG21/Techniques/general/G167)&nbsp;: labelliser un champ avec un bouton adjacent explicite.


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/search/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Barre de recherche - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/input/input.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/component/search/search.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../...
```

(Truncated for brevity. See source file for full HTML)
