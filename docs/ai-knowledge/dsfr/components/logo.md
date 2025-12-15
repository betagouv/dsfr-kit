# DSFR Logo Component

*Generated from local node_modules*

## Presentation

---
title: Bloc marque
shortTitle: Bloc marque
titleId: Logo
description: Présentation du composant Bloc marque, élément de la charte graphique de l'État français utilisé pour représenter l'identité visuelle de l'État.
shortDescription: Élément de la charte graphique de l'État français utilisé pour représenter l'identité visuelle de l'État.
cover: ./_asset/cover/cover.png
mesh:
  - component/header
  - component/footer
---

## Bloc marque

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](demo/index.md)
- [Design](design/index.md)
- [Code](code/index.md)
- [Accessibilité](accessibility/index.md)

:::

Page en cours de création...

## Design

---
boost: 0
sitemap:
  noindex: true
title: Design du Bloc marque
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Bloc marque.
shortDescription: Le bloc marque est un élément de la charte graphique de l'État français. Il est utilisé pour représenter l'identité visuelle de l'État.
cover: ../_asset/cover/cover.png
mesh:
  - component/header
  - component/footer
---

## Bloc marque

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

Page en cours de création...


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code du Bloc marque
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Bloc marque.
shortDescription: Le bloc marque est un élément de la charte graphique de l'État français. Il est utilisé pour représenter l'identité visuelle de l'État.
cover: ../_asset/cover/cover.png
mesh:
  - component/header
  - component/footer
---

## Bloc marque

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

Le **Bloc marque** de l'état est constitué d'un bloc Marianne, d'un intitulé officiel, et de la devise républicaine. Le bloc Marianne et la devise républicaine sont ajouté automatiquement par le composant.
Le composant est composé d'un élément `<p>` avec la classe `.fr-logo`. Seul l'intitulé officiel doit être ajouté dans cet élément.

**Exemple de structure HTML**

```html
<p class="fr-logo">
    Intitulé
    <br>officiel
</p>
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
| Logo       | Oui         |

:::

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/logo/logo.min.css" rel="stylesheet">
```

#### Variantes de taille

Le composant Bloc marque (logo) est disponible en 3 tailles différentes via les classes suivantes :

- Par défaut : Taille `medium`
- `fr-logo--sm` : Taille `small`
- `fr-logo--lg` : Taille `large`

```html
<p class="fr-logo fr-logo--sm">
    Intitulé
    <br>officiel
</p>

<p class="fr-logo fr-logo--lg">
    Intitulé
    <br>officiel
</p>
```

---

### JavaScript

Le composant Bloc marque **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

Un Javascript disponible dans le **core** permet de gérer le passage **en berne** des blocs marque lors des périodes de deuil national. Le fond bleu et rouge du bloc Marianne est alors remplacé par un fond noir.

#### Installation du JavaScript

Pour faire fonctionner la fonction de passage des blocs marque en berne, le script JavaScript du core doit être importé. L'import doit se faire en fin de page, avant la fermeture du body, et de préférence avec le fichier minifié, car plus léger.

```html
<script type="module" src="dist/core/core.module.min.js"></script>
```

<small>NB : Il est aussi possible d'importer le JavaScript global du DSFR `dsfr.module.min.js`.</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy peut aussi être importé :

```html
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
```

#### Utilisation du JavaScript

Le script permet de passer les blocs marque en berne lors des deuils nationaux. Pour cela, il suffit d'ajouter l'attribut `data-fr-mourning` sur l'élément `<html>`.

```html
<html lang="fr" data-fr-mourning>
```

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+logo+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Bloc marque
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Bloc marque.
shortDescription: Le bloc marque est un élément de la charte graphique de l'État français. Il est utilisé pour représenter l'identité visuelle de l'État.
cover: ../_asset/cover/cover.png
mesh:
  - component/header
  - component/footer
---

## Bloc marque

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le bloc marque est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction spécifique n’est associée au bloc marque.

### Règles d’accessibilité

Les logos doivent être accessibles pour tous les utilisateurs, y compris ceux utilisant des technologies d'assistance. Voici quelques recommandations&nbsp;:

- Utiliser l’élément HTML `<p>` ou un niveau de titre `<h1>` à `<h6>` pour décrire l’intitulé officiel.
- Un lien est généralement ajouté autour du bloc marque pour permettre à l'utilisateur de naviguer vers la page d'accueil du site.
  - Dans ce cas, l’attribut `title` doit être utilisé pour décrire la destination du lien.
  - Lorsqu’un logo opérateur est présent à côté du bloc marque, le lien doit être placé autour du logo opérateur et étendu, avec la classe `fr-enlarge-link`, à toute la zone contenant le logo opérateur et le bloc marque.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Bloc marque.

---

### Critères RGAA applicables

- **Couleurs :** 3.2
- **Liens :** 6.1, 6.2
- **Éléments obligatoires :** 8.9
- **Structuration :** 9.1
- **Présentation de l’information :** 10.1, 10.2, 10.4, 10.5, 10.11, 10.12
- **Navigation :** 12.8, 12.9
- **Consultation&nbsp;:** 13.9

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Le bloc-marque](https://www.info.gouv.fr/marque-de-letat/le-bloc-marque)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/logo/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Bloc marque - Système de design</title>
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
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../dist/component/logo/l...
```

(Truncated for brevity. See source file for full HTML)
