# DSFR Upload Component

*Generated from local node_modules*

## Presentation

---
title: Ajout de fichier
shortTitle: Ajout de fichier
titleId: Upload
description: Présentation du composant Ajout de fichier permettant à l’usager de sélectionner et envoyer un ou plusieurs fichiers via une interface.
shortDescription: Sélection et envoi de fichiers
keywords: ajout de fichier, upload, formulaire, interaction, accessibilité, design système, DSFR, sélection, fichier multiple
cover: ./_asset/cover/cover.png
excerpt: Le composant Ajout de fichier permet à l’usager de transmettre un ou plusieurs fichiers à travers une interface, avec des indications claires sur les formats attendus et les erreurs éventuelles.
summary: Ce composant facilite l’envoi de documents par l’usager, en l’intégrant aux formulaires de façon accessible et informative. Il prend en compte les contraintes liées aux fichiers (format, poids, nature), propose des variantes pour l’envoi multiple et signale les erreurs rencontrées lors de l’interaction. Son design est standardisé et non personnalisable pour garantir la cohérence visuelle dans l’ensemble du service.
mesh:
  - component/form
---

## Ajout de fichier

L’ajout de fichier est un élément d’interaction avec l’interface qui permet à l’usager de sélectionner et d’envoyer un ou plusieurs fichiers.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=upload--upload}

### Quand utiliser ce composant ?

Proposer l’ajout de fichier uniquement si l’envoi d’un ou plusieurs fichier est essentiel à votre service.

### Comment utiliser ce composant ?

- **Intégrer l’ajout de fichier à un formulaire** pour permettre le chargement de fichiers.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/use/do-1.png)

Cas d’usage au sein d’un formulaire.

:::

::::

- **Afficher le format, poids et autres consignes pour que le fichier soit conforme** à ce qui est attendu.
- **Préciser les erreurs rencontrées** lors de l’envoi de fichier (format, poids etc.)

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-2.png)

Traduire précisément l’erreur pour qu’elle soit clairement identifiable.

:::

::::

- **Utiliser l’ajout de fichiers multiples** lorsque l’usager doit sélectionner des fichiers de mêmes natures et respectant les mêmes contraintes.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-3.png)

Utiliser l’ajout multiple de fichiers si les fichiers à sélectionner sont de mêmes natures et/ou respectent les mêmes contraintes.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas proposer plusieurs champs d’ajout de fichier si les fichiers à sélectionner sont de mêmes natures et/ou respectent les mêmes contraintes.

:::

::::

- **Préférer plusieurs champs d’ajout de fichier unique** lorsque l’usager doit sélectionner des fichiers de différentes natures, avec des contraintes spécifiques.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-4.png)

Préférer plusieurs champs d’ajout de fichier si les fichiers à sélectionner sont de différentes natures et/ou ont des contraintes spécifiques.

:::

::::

### Règles éditoriales

Il est à noter que le navigateur ajoute automatiquement un message à coté du bouton d’ajout de fichier. Ce message n’est pas modifiable et dépend du navigateur utilisé.

Ce message indique le nom du fichier ajouté ou le nombre de fichiers ajoutés lorsqu’il y en a plusieurs.

La langue de ce texte dépend de la langue configurée sur le navigateur de l’utilisateur.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design de l'Ajout de fichier
shortTitle: Design de l'Ajout de fichier
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Ajout de fichier.
shortDescription: Sélection et envoi de fichiers
keywords: ajout de fichier, upload, formulaire, interaction, accessibilité, design système, DSFR, sélection, fichier multiple
cover: ../_asset/cover/cover.png
excerpt: Le composant Ajout de fichier permet à l’usager de transmettre un ou plusieurs fichiers à travers une interface, avec des indications claires sur les formats attendus et les erreurs éventuelles.
summary: Ce composant facilite l’envoi de documents par l’usager, en l’intégrant aux formulaires de façon accessible et informative. Il prend en compte les contraintes liées aux fichiers (format, poids, nature), propose des variantes pour l’envoi multiple et signale les erreurs rencontrées lors de l’interaction. Son design est standardisé et non personnalisable pour garantir la cohérence visuelle dans l’ensemble du service.
mesh:
  - component/form
---


## Ajout de fichier

L’ajout de fichier est un élément d’interaction avec l’interface qui permet à l’usager de sélectionner et d’envoyer un ou plusieurs fichiers.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie de l'interrupteur](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un libellé]{required=true add='exprimant clairement l’action attendue pour l’usager (par défaut “Ajouter un fichier")'}

::dsfr-doc-pin[Un texte explicatif]{required=true add='précisant les contraintes au niveau du ou des fichiers attendus (format, poids, nombre de fichiers possible etc.)'}

::dsfr-doc-pin[Un bouton “Parcourir”]{required=true add='le texte dépendant du navigateur utilisé'}

::dsfr-doc-pin[Le nom du ou des fichiers]{required=true add='par défaut “Aucun fichier sélectionné”'}

:::

Au clic sur “Parcourir”, la boite de dialogue de sélection de fichier s’affiche. Les noms des fichiers sélectionnés viennent s’afficher à la place du texte par défaut.

### Variations

**Ajout multiple**

Utiliser l’ajout multiple dès lors que l’usager doit sélectionner plus d’un fichier.

::dsfr-doc-storybook{storyId=upload--multiple}

### Tailles

L’ajout de fichier est disponible dans une seule taille. Sa largeur n’est pas contrainte, toutefois, dans le respect des bonnes pratiques UX, il est recommandé de conserver les éléments textuels sur une largeur de 8 colonnes maximum.

### États

**Etat d’erreur**

L'état d’erreur est signalé par un changement de couleur (cf. couleurs système : le rouge est la couleur de l’état erreur) et l’affichage d’un message d’erreur en-dessous du composant.

::dsfr-doc-storybook{storyId=upload--error}

**Etat désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec le bouton.

::dsfr-doc-storybook{storyId=upload--disabled}

> [!NOTE]
> **N’utiliser cet état que très ponctuellement**, pour indiquer à l’usager qu’il doit procéder à une action en amont par exemple.

### Personnalisation

L’ajout de fichier n’est pas personnalisable.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur du bouton par défaut.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas personnaliser la couleur des textes d’accompagnement.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code de l'Ajout de fichier
shortTitle: Code de l'Ajout de fichier
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Ajout de fichier.
shortDescription: Sélection et envoi de fichiers
keywords: ajout de fichier, upload, formulaire, interaction, accessibilité, design système, DSFR, sélection, fichier multiple
cover: ../_asset/cover/cover.png
excerpt: Le composant Ajout de fichier permet à l’usager de transmettre un ou plusieurs fichiers à travers une interface, avec des indications claires sur les formats attendus et les erreurs éventuelles.
summary: Ce composant facilite l’envoi de documents par l’usager, en l’intégrant aux formulaires de façon accessible et informative. Il prend en compte les contraintes liées aux fichiers (format, poids, nature), propose des variantes pour l’envoi multiple et signale les erreurs rencontrées lors de l’interaction. Son design est standardisé et non personnalisable pour garantir la cohérence visuelle dans l’ensemble du service.
mesh:
  - component/form
---

## Ajout de fichier

L’ajout de fichier est un élément d’interaction avec l’interface qui permet à l’usager de sélectionner et d’envoyer un ou plusieurs fichiers.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Ajout de fichier** permet aux utilisateurs de sélectionner et envoyer un ou plusieurs fichiers.

Sa structure est la suivante :

- Le composant ajout de fichier est un élément HTML `<div>` défini par la classe `fr-upload-group` et contenant :
  - Le libellé est un élément HTML de type `<label>`, obligatoire :
    - Défini par la classe `fr-label`.
    - Il dispose de l'attribut `for` dont la valeur est égale à l'ID du champ de fichier.
    - Il doit inclure un texte explicatif, obligatoire, dans un élément HTML `<span>` défini par la classe `fr-hint-text`.
  - Le champ de fichier est un élément HTML `<input>` de type `file`, obligatoire :
    - Défini par la classe `fr-upload`.
    - Il dispose d'un attribut `id` obligatoire, pour être lié au libellé et d'un attribut `name` dont la valeur est libre.
    - Il peut disposer d'un attribut `aria-describedby` dont la valeur est égale à l'ID du groupe de messages.
    - Il peut disposer d'un attribut `multiple` dans le cas d'un composant ajout de fichiers multiples.
  - Le groupe de messages est un élément HTML `<div>` défini par la classe `fr-messages-group`.
    - Il dispose d'un attribut `id` pour être lié au champ de fichier et d'un attribut `aria-live="polite"`.
    - Le groupe de messages peut contenir un message d'erreur de type `<p>` défini par les classes `fr-message` et `fr-message--error`.

**Exemple de structure HTML**

```HTML
<div class="fr-upload-group">
    <label class="fr-label" for="file-upload">
        Ajouter un fichier
        <span class="fr-hint-text">Indication : taille maximale : 500 Mo. Formats supportés : jpg, png, pdf. Plusieurs fichiers possibles. Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
    </label>
    <input class="fr-upload" aria-describedby="file-upload-messages" type="file" id="file-upload" name="file-upload">
    <div class="fr-messages-group" id="file-upload-messages" aria-live="polite"></div>
</div>
```

> [!NOTE]
> L'ajout d'un attribut `accept` sur l'`<input>` permet de restreindre les formats de fichiers sélectionnables par l'usager. Il est recommandé d'utiliser cet attribut pour indiquer les formats attendus (par exemple, `accept=".jpg,.png,.pdf"`). Cet attribut ne peut se substituer à la validation côté serveur, mais il améliore l'expérience utilisateur en filtrant les fichiers proposés.

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top scroll=false}

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Form       | Oui         |
| Upload     | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/upload/upload.min.css" rel="stylesheet">
```

#### Variante d'ajout de fichier avec erreur

Le composant Ajout de fichier peut être affiché en état d'erreur avec l'utilisation de la classe `fr-upload-group--error` et comporter dans le groupe de messages un message d'erreur.

**Exemple de variante d'ajout de fichier avec erreur**

```HTML
<div class="fr-upload-group fr-upload-group--error">
    <label class="fr-label" for="file-upload-with-error">
        Ajouter un fichier
        <span class="fr-hint-text">Indication : taille maximale : 500 Mo. Formats supportés : jpg, png, pdf. Plusieurs fichiers possibles. Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
    </label>
    <input class="fr-upload" aria-describedby="file-upload-with-error-messages" type="file" id="file-upload-with-error" name="file-upload-with-error">
    <div class="fr-messages-group" id="file-upload-with-error-messages" aria-live="polite">
        <p class="fr-message fr-message--error">Format de fichier non supporté</p>
    </div>
</div>
```

#### Variante d'ajout de fichiers multiples

Afin de pouvoir sélectionner plusieurs fichiers, il faut ajouter l'attribut `multiple` à la balise input

**Exemple de variante d'ajout de fichiers multiples**

```HTML
<div class="fr-upload-group">
    <label class="fr-label" for="file-upload-multiple">
        Ajouter des fichiers
        <span class="fr-hint-text">Indication : taille maximale : 500 Mo. Formats supportés : jpg, png, pdf. Plusieurs fichiers possibles. Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
    </label>
    <input class="fr-upload" aria-describedby="file-upload-multiple-messages" multiple type="file" id="file-upload-multiple" name="file-upload-multiple">
    <div class="fr-messages-group" id="file-upload-multiple-messages" aria-live="polite">
    </div>
</div>
```

#### Variante d'ajout de fichier désactivé

Le composant Ajout de fichier peut être désactivé avec l'utilisation de la classe `fr-upload-group--disabled` et comporter dans le groupe de messages un message d'erreur.

**Exemple de variante d'ajout de fichier désactivé**

```HTML
<div class="fr-upload-group fr-upload-group--disabled">
    <!-- Contenu de l'ajout de fichier désactivé -->
</div>
```

---

### JavaScript

Le composant Ajout de fichier **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+upload)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de l'Ajout de fichier
shortTitle: Accessibilité de l'Ajout de fichier
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Ajout de fichier.
shortDescription: Sélection et envoi de fichiers
keywords: ajout de fichier, upload, formulaire, interaction, accessibilité, design système, DSFR, sélection, fichier multiple
cover: ../_asset/cover/cover.png
excerpt: Le composant Ajout de fichier permet à l’usager de transmettre un ou plusieurs fichiers à travers une interface, avec des indications claires sur les formats attendus et les erreurs éventuelles.
summary: Ce composant facilite l’envoi de documents par l’usager, en l’intégrant aux formulaires de façon accessible et informative. Il prend en compte les contraintes liées aux fichiers (format, poids, nature), propose des variantes pour l’envoi multiple et signale les erreurs rencontrées lors de l’interaction. Son design est standardisé et non personnalisable pour garantir la cohérence visuelle dans l’ensemble du service.
mesh:
  - component/form
---

## Ajout de fichier

L’ajout de fichier est un élément d’interaction avec l’interface qui permet à l’usager de sélectionner et d’envoyer un ou plusieurs fichiers.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Ajout de fichier** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur le champ d’ajout de fichier&nbsp;:

- `Entrée` ou `Espace`&nbsp;: ouvre la boîte de dialogue d’ajout de fichier.
- `Échap`&nbsp;: referme la boîte de dialogue d’ajout de fichier.

### Règles d’accessibilité

- Le champ d’ajout de fichier possède un nom accessible avec un `label` relié au champ avec une liaison entre l’attribut `for` et l’attribut id du champ d'ajout de fichier.
- Un **message** d'erreur, d'information, ou de succès peut être associé au champ d'ajout de fichier. Son attribut `id` doit être associé à l'attribut `aria-describedby` du champ d'ajout de fichier.

#### Contrastes de couleurs

Le composant est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Ajout de fichier.

> [!NOTE]
> Avec les lecteurs d’écran mobiles, le focus est repositionné en haut de page au lieu d’être repositionné sur le composant.

---

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires&nbsp;:** 11.1, 11.2, 11.4, 11.10, 11.11
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Input type file](https://html.spec.whatwg.org/#file-upload-state-(type=file))


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/upload/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Ajout de fichier - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/component/upload/upload.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
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
