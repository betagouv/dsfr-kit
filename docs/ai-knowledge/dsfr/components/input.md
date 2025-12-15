# DSFR Input Component

*Generated from local node_modules*

## Presentation

---
title: Champ de saisie
shortTitle: Champ de saisie
titleId: Input
description: Présentation du composant Champ de saisie permettant à l’usager d’entrer des données dans une interface en respectant des règles de clarté et d’accessibilité.
shortDescription: Saisie de données dans une interface.
keywords: champ de saisie, formulaire, saisie, interface, accessibilité, design system, UX, UI, libellé, texte d’aide
cover: ./_asset/cover/cover.png
excerpt: Ce document présente l’usage du champ de saisie pour permettre à l’usager d’entrer des informations, en précisant les cas d’usage appropriés et les bonnes pratiques d’interface.
summary: Ce contenu décrit le champ de saisie comme un composant d’interface permettant à l’usager de saisir du contenu ou des données. Il indique quand l’utiliser, avec quelles alternatives dans le cas de choix fermés, et fournit des recommandations précises sur son usage, la disposition des éléments, les messages de retour, l’accessibilité et les libellés. Il s’adresse aux concepteurs et développeurs souhaitant garantir une saisie claire, efficace et cohérente dans leurs interfaces.
mesh:
  - component/radio
  - component/checkbox
  - component/toggle
---

## Champ de saisie

Le champ de saisie est un élément d’interaction avec l’interface permettant à l’usager d’entrer du contenu et/ou des données.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=input--input}

### Quand utiliser ce composant ?

Utiliser le champ de saisie pour permettre à un usager de saisir du contenu et/ou des données.

> [!NOTE]
> N’utiliser pas un champ de saisie pour des **choix fermés**. Préférer plutôt une [liste déroulante](../../../select/_part/doc/index.md), des [boutons radio](../../../radio/_part/doc/index.md) ou des [cases à cocher](../../../checkbox/_part/doc/index.md).
>
> Pour les champs de recherche spécifiquement, utiliser la [barre de recherche](../../../search/_part/doc/index.md).

### Comment utiliser ce composant ?

- **Placer le libellé au-dessus du champ de saisie**, pour faciliter la lecture.
- **Ajouter un texte d’aide sous le libellé** afin de faciliter la saisie par l’usager, notamment pour clarifier la nature du contenu attendu. Si un format précis est requis, il faut l’indiquer de la manière la plus claire possible (et y inclure des exemples lorsque c’est possible).
- **Rendre visible toute information essentielle à la saisie**. Ne pas cacher du contenu dans un tooltip ou une infobulle.
- **Limiter l’utilisation de placeholder** car il peut créer de la confusion chez l’usager. Si toutefois vous souhaitez l’utiliser, il est nécessaire de respecter la couleur proposée afin de rester accessible, et son contenu doit présenter des informations non indispensables à la compréhension du champ. En aucun cas il ne peut remplacer un libellé et il est uniquement à réserver pour des aides à la saisie secondaires.
- **Afficher les champs en liste verticale** pour faciliter la lecture et optimiser l’ergonomie. L’oeil lit spontanément de bas en haut.
- **Utiliser un bouton primaire** pour valider un champ de saisie ou un formulaire. Le bouton secondaire sera quant à lui utilisé pour réinitialiser le formulaire ou abandonner la saisie.
- **Indiquer systématiquement la réussite ou non de la soumission d’un champ** à l’aide d’un message de succès ou d’erreur.

### Règles éditoriales

- **Conserver le même libellé pour les champs demandant la même information**.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design du Champ de saisie
shortTitle: Design du Champ de saisie
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Champ de saisie.
shortDescription: Saisie de données dans une interface.
keywords: champ de saisie, formulaire, saisie, interface, accessibilité, design system, UX, UI, libellé
cover: ../_asset/cover/cover.png
excerpt: Ce document présente l’usage du champ de saisie pour permettre à l’usager d’entrer des informations, en précisant les cas d’usage appropriés et les bonnes pratiques d’interface.
summary: Ce contenu décrit le champ de saisie comme un composant d’interface permettant à l’usager de saisir du contenu ou des données. Il indique quand l’utiliser, avec quelles alternatives dans le cas de choix fermés, et fournit des recommandations précises sur son usage, la disposition des éléments, les messages de retour, l’accessibilité et les libellés. Il s’adresse aux concepteurs et développeurs souhaitant garantir une saisie claire, efficace et cohérente dans leurs interfaces.
mesh:
  - component/radio
  - component/checkbox
  - component/toggle
---

## Champ de saisie

Le champ de saisie est un élément d’interaction avec l’interface permettant à l’usager d’entrer du contenu et/ou des données.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

### Design

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie du champ de saisie](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Une légende]{add='décrivant le contexte du groupe de champ' required=true}

::dsfr-doc-pin[Une description additionnelle pour la légende]

::dsfr-doc-pin[Un libellé]{add='associé au champ' required=true}

::dsfr-doc-pin[Un texte de description additionnelle]

::dsfr-doc-pin[Un champ]{required=true}

::dsfr-doc-pin[Un placeholder]

::dsfr-doc-pin[Une icône]{add="pouvant être modifiée"}

:::

### Variations

**Champ simple**

::dsfr-doc-storybook{storyId=input--default}

Le champ simple est un champ de saisie libre qui accepte une courte ligne de contenu (texte et/ou nombre).

**Zone de texte**

::dsfr-doc-storybook{storyId=input--textarea}

La zone de texte est un champ de saisie libre qui accepte plus d’une ligne de contenu (texte ou/et nombre). Il reprend le style du champ simple, seule sa hauteur augmente.

**Autres types de champs**

::dsfr-doc-storybook{storyId=input--icon}

::dsfr-doc-storybook{storyId=input--date}

::dsfr-doc-storybook{storyId=input--number}

::dsfr-doc-storybook{storyId=input--button}

::dsfr-doc-storybook{storyId=input--action}

L'ajout d'icône n'a qu'un but illustratif (voir [les icônes disponibles](../../../../../core/_part/doc/icon/index.md)).

### Tailles

La largeur du champ ne peut pas excéder la taille de son conteneur.

Toutefois, il est important de l’ajuster en fonction de la quantité de contenu attendu, afin d’accompagner l’usager dans sa saisie. Par exemple, les champs de saisie de codes postaux doivent avoir une largeur inférieure à celle des champs d’e-mails.

### États

**État d’erreur**

L'état d’erreur est signalé par un changement de couleur ainsi que l’affichage d’une ligne rouge (cf. couleurs système : le rouge est la couleur de l’état erreur) et d’un message d’erreur en-dessous du composant.

::dsfr-doc-storybook{storyId=input--error}

**État de succès**

L'état de succès est signalé par un changement de couleur ainsi que l’affichage d’une ligne verte (cf. couleurs système : le vert est la couleur de l’état succès) et d’un message de succès en-dessous du composant.

::dsfr-doc-storybook{storyId=input--valid}

**État désactivé**

L'état désactivé indique que l’usager ne peut pas interagir avec le champ.

::dsfr-doc-storybook{storyId=input--disabled}

Dans le cas d’un champ de saisie, il indique à l’usager qu’il ne peut pas saisir de contenu jusqu'à ce qu'une autre action soit terminée, par exemple.

> [!NOTE]
> Utiliser l’état désactivé que très ponctuellement. Il est notamment recommandé de masquer le champ si sa complétion n’est pas requise.

### Personnalisation

Le champ de saisie n’est pas personnalisable.

Toutefois, certains éléments sont optionnels et les icônes peuvent être changées - voir [la structure du composant](#champ-de-saisie).


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code du Champ de saisie
shortTitle: Code du Champ de saisie
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Champ de saisie.
shortDescription: Saisie de données dans une interface.
keywords: champ de saisie, formulaire, saisie, interface, accessibilité, design system, UX, UI, libellé, texte d’aide
cover: ../_asset/cover/cover.png
excerpt: Ce document présente l’usage du champ de saisie pour permettre à l’usager d’entrer des informations, en précisant les cas d’usage appropriés et les bonnes pratiques d’interface.
summary: Ce contenu décrit le champ de saisie comme un composant d’interface permettant à l’usager de saisir du contenu ou des données. Il indique quand l’utiliser, avec quelles alternatives dans le cas de choix fermés, et fournit des recommandations précises sur son usage, la disposition des éléments, les messages de retour, l’accessibilité et les libellés. Il s’adresse aux concepteurs et développeurs souhaitant garantir une saisie claire, efficace et cohérente dans leurs interfaces.
mesh:
  - component/radio
  - component/checkbox
  - component/toggle
---

## Champ de saisie

Le champ de saisie est un élément d’interaction avec l’interface permettant à l’usager d’entrer du contenu et/ou des données.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

Un **champ de saisie** permet à l'utilisateur de saisir des données. Il existe plusieurs types de champs de saisie en fonction du type de données à saisir.

#### Champ de saisie simple

La structure HTML d'un champ de saisie de base est la suivante :

- Un conteneur `<div>` de classe `fr-input-group`, contenant :
  - Un intitulé, obligatoire, dans un élément `<label>` de classe `fr-label` et lié au champ via un attribut `for` pour décrire le champ de saisie
  - Une description additionnelle, optionnelle, dans un élément `<span>` de classe `fr-hint-text` à placer dans le `<label>`. Cette description peut être utilisée pour donner des indications sur le format attendu.
  - Un champ `<input>` de classe `fr-input` pour saisir les données. Pour une plus grande zone de saisie, il est possible d'utiliser un élément `<textarea>`.
  - Un message d'erreur/information/avertissement/succès, optionnel, dans un bloc `fr-messages-group`, lié au `aria-describedby` du champ de saisie

**Exemple de structure simple**

```html
<div class="fr-input-group">
    <label class="fr-label" for="text-input">
        Libellé champ de saisie
        <span class="fr-hint-text">Texte de description additionnel</span>
    </label>
    <input class="fr-input" aria-describedby="input-messages" id="text-input" type="text">
    <div class="fr-messages-group" id="input-messages" aria-live="polite">
    </div>
</div>
```

#### Champ de saisie avec bouton

Un champ de saisie peut être associé à un bouton pour déclencher une action. La structure HTML est la suivante :

- La structure du champ de saisie avec bouton est identique à celle du champ de saisie simple.
- La différence réside dans l'ajout d'un bouton `<button>` de classe `fr-btn` à la suite du champ de saisie `<input>`. Le champ de saisie et le bouton doivent être enveloppé dans un élément `<div>` de classe `fr-input-wrap` et une des classes suivantes :
  - `fr-input-wrap--addon` : Pour accoler un bouton d'envoi et ajouter une bordure bleue sous le champ de saisie (s'utilise avec un bouton primaire).
  - `fr-input-wrap--action` : Pour placer un bouton d'action à coté (s'utilise avec un bouton secondaire).

**Exemple de structure avec bouton d'envoi**

```html
<div class="fr-input-group">
    <label class="fr-label" for="text-input-button">
        Libellé champ de saisie
    </label>
    <div class="fr-input-wrap fr-input-wrap--addon">
        <input class="fr-input" aria-describedby="text-input-button-messages" id="text-input-button" type="text">
        <button type="button" class="fr-btn">Envoyer</button>
    </div>
    <div class="fr-messages-group" id="text-input-button-messages" aria-live="polite">
    </div>
</div>
```

**Exemple de structure avec bouton d'action**

```html
<div class="fr-input-group">
    <label class="fr-label" for="text-input-action">
        Libellé champ de saisie
    </label>
    <div class="fr-input-wrap fr-input-wrap--action">
        <input class="fr-input" aria-describedby="text-input-action-messages" id="text-input-action" type="text">
        <button type="button" class="fr-btn fr-icon-delete-line fr-btn--secondary">Supprimer le champ</button>
    </div>
    <div class="fr-messages-group" id="text-input-action-messages" aria-live="polite">
    </div>
</div>
```

#### Groupes de champs de saisie

Voir la documentation sur les [formulaires](../../../../form/_part/doc/code/index.md).

#### Attributs du champs de saisie

Les champs de saisie peuvent être enrichis avec des attributs HTML pour améliorer l'accessibilité et l'expérience utilisateur.

- `aria-describedby` : Permet d'associer un message d'erreur/information/avertissement/succès au champ de saisie. Cet attribut doit contenir l'ID du bloc de message associé.
- `spellcheck` : Permet de définir si le navigateur doit vérifier les fautes orthographiques. A désactiver, notamment, sur les champs de connexion et d'inscription. La valeur par défaut dépend du type d'élément et des navigateurs. Les valeurs possibles sont :
  - `true` pour activer la vérification orthographique.
  - `false` pour désactiver la vérification orthographique.
- `autocapitalize` : Permet de définir si le navigateur doit automatiquement capitaliser les mots saisis dans le champ. A désactivé, notamment, sur les champs d'identifiant et mot de passe. La valeur par défaut dépend de d'élément et des navigateurs. Seuls les navigateurs mobiles, et les données vocales, sont impactés. Les valeurs possibles sont :
  - `off` pour désactiver la capitalisation automatique.
  - `on` pour activer la capitalisation automatique de chaque phrase.
  - `words` pour activer la capitalisation automatique de chaque mot.
  - `characters` pour activer la capitalisation automatique de chaque caractère.
- `autocomplete` : Permet de définir si le navigateur doit proposer des suggestions de saisie pour le champ. Les valeurs possibles sont :
  - `on` (par défaut)
  - `off` pour désactiver l'autocompletion qui pourrait être ajouté automatiquement par le navigateur.
  - Des valeurs en fonction du type de données. [Voir l'ensemble des valeurs disponibles](https://developer.mozilla.org/fr/docs/Web/HTML/Attributes/autocomplete).

---

### CSS

#### Installation du CSS


Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------| ---------|
| Core       | Oui         |          |
| Form       | Oui         |          |
| Input      | Oui         |          |
| Button     | Non         | Uniquement pour les variations avec bouton associé au champ |
| Utility    | Non         | Uniquement pour l'ajout d'icône dans le champ de saisie |

:::

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/input/input.min.css" rel="stylesheet">
```

#### Variantes de types

Le type de champ de saisie est défini par l'attribut `type` de l'élément `<input>`. Les types de champs de saisie disponibles sont les suivants :

- `text` : Champ de saisie de texte simple
- `email` : Champ de saisie d'adresse email
- `password` : Champ de saisie de mot de passe (privilégier l'utilisation du composant [mot de passe](../../../../password/_part/doc/index.md))
- `tel` : Champ de saisie de numéro de téléphone
- `number` : Champ de saisie de nombre
- `date` : Champ de saisie de date
- `time` : Champ de saisie d'heure
- `url` : Champ de saisie d'URL
- `search` : Champ de saisie de recherche

Suivant le type de champ de saisie, des styles spécifiques peuvent être appliqués par le navigateur.

- Le type `date` ajoute un bouton de sélection de date à droite dans champ de saisie. Cette icône est redéfinie par le DSFR pour utiliser les icônes du DSFR.
- Le type `search` ajoute un bouton de réinitialisation à droite dans champ de saisie lorsque du texte a été renseigné.

#### Variante de champ avec icône

Une icône peut être ajoutée dans le champ de saisie pour apporter une information visuelle supplémentaire. La structure HTML est la suivante :

- La structure du champ de saisie avec icône est similaire à celle du champ de saisie avec bouton, avec un le champ `<input>` dans un conteneur `fr-input-wrap`.
- L'icône est ajoutée sur ce conteneur avec la classe utilitaire de l'icône souhaitée `fr-icon-NOM-ICON`.

**Exemple de structure avec icône**

```html
<div class="fr-input-group">
    <label class="fr-label" for="text-input-icon">
        Libellé champ de saisie
        <span class="fr-hint-text">Texte de description additionnel</span>
    </label>
    <div class="fr-input-wrap fr-icon-alert-line">
        <input class="fr-input" aria-describedby="text-input-icon-messages" id="text-input-icon" type="text">
    </div>
    <div class="fr-messages-group" id="text-input-icon-messages" aria-live="polite">
    </div>
</div>
```

#### Variantes d'états

Le champ de saisie est disponible en plusieurs variantes d'états :

- Le champ en **erreur** : définie par la classe `fr-input-group--error`.
- Le champ avec **succès** : définie par la classe `fr-input-group--valid`.
- Le champ **désactivée** : définie par la classe `fr-input-group--disabled` **et** l'attribut `disabled` sur l'élément `<input>`.

**Exemple de champ de saisie en erreur**

```html
<div class="fr-input-group fr-input-group--error">
    <label class="fr-label" for="text-input-error">
        Libellé champ de saisie
    </label>
    <input class="fr-input" aria-describedby="text-input-error-messages" id="text-input-error" type="text">
    <div class="fr-messages-group" id="text-input-error-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="text-input-error-message-error">Texte d’erreur</p>
    </div>
</div>
```

**Exemple de champ de saisie avec succès**

```html
<div class="fr-input-group fr-input-group--valid">
    <label class="fr-label" for="text-input-valid">
        Libellé champ de saisie
    </label>
    <input class="fr-input" aria-describedby="text-input-valid-messages" id="text-input-valid" type="text">
    <div class="fr-messages-group" id="text-input-valid-messages" aria-live="polite">
        <p class="fr-message fr-message--valid" id="text-input-valid-message-valid">Texte de validation</p>
    </div>
</div>
```

**Exemple de champ de saisie désactivé**

```html
<div class="fr-input-group fr-input-group--disabled">
    <label class="fr-label" for="text-input-disabled">
        Libellé champ de saisie
    </label>
    <input class="fr-input" aria-describedby="text-input-disabled-messages" disabled id="text-input-disabled" type="text">
    <div class="fr-messages-group" id="text-input-disabled-messages" aria-live="polite">
    </div>
</div>
```

---

### JavaScript

Le composant Champ de saisie **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+input+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Champ de saisie
shortTitle: Accessibilité du Champ de saisie
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Champ de saisie.
shortDescription: Saisie de données dans une interface.
keywords: champ de saisie, formulaire, saisie, interface, accessibilité, design system, UX, UI, libellé, texte d’aide
cover: ../_asset/cover/cover.png
excerpt: Ce document présente l’usage du champ de saisie pour permettre à l’usager d’entrer des informations, en précisant les cas d’usage appropriés et les bonnes pratiques d’interface.
summary: Ce contenu décrit le champ de saisie comme un composant d’interface permettant à l’usager de saisir du contenu ou des données. Il indique quand l’utiliser, avec quelles alternatives dans le cas de choix fermés, et fournit des recommandations précises sur son usage, la disposition des éléments, les messages de retour, l’accessibilité et les libellés. Il s’adresse aux concepteurs et développeurs souhaitant garantir une saisie claire, efficace et cohérente dans leurs interfaces.
mesh:
  - component/radio
  - component/checkbox
  - component/toggle
---

## Champ de saisie

Le champ de saisie est un élément d’interaction avec l’interface permettant à l’usager d’entrer du contenu et/ou des données.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Les champs de saisie sont conçus pour être accessibles et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Il n’y a aucune interaction spécifique au composant **Champ de saisie**.

### Règles d’accessibilité

#### Intitulé pertinent&nbsp;: nom accessible

Un champ de saisie doit avoir une **étiquette pertinente**. On doit en comprendre la fonction sans ambiguïté.

Son nom accessible est calculé par ordre de priorité à partir de&nbsp;:

- l’attribut `aria-labelledby`,
- l’attribut `aria-label`,
- l’élément `<label>`,
- l’attribut `title` en l’absence d’une autre méthode de nommage.

**Privilégier l’élément `<label>`** pour nommer le composant.

>[!CAUTION]
>Le RGAA exige une **liaison explicite** entre l’attribut `for` de l’élément `<label>` et l'attribut `id` de la case à cocher.
>
>L’attribut `for` du label doit correspondre à l'attribut `id` de la case à cocher. La valeur de l’attribut `id` doit être unique dans la page.

La liaison explicite `for`/`id` permet&nbsp;:
- d’assurer une compatibilité avec l’ensemble des technologies d’assistance (ex. le contrôle vocal),
- de mettre le focus dans le champ en cliquant sur l’étiquette et ainsi d’étendre la zone de clic.

#### Étiquette visible et accolée

L’étiquette est visible et accolée au champ de saisie.

#### État désactivé

> [!WARNING]
> **L’état désactivé d’un champ de saisie peut poser des problèmes d’utilisabilité et d’accessibilité pour les personnes handicapées** (personnes déficientes visuelles ainsi que les personnes qui ont un handicap cognitif ou mental).

La bordure et l’étiquette du champ de saisie désactivé sont insuffisamment contrastées. Il ne s’agit néanmoins pas d’une non-conformité au RGAA (cas particulier).

#### Message d’information, d’avertissement ou d’erreur

Il existe différentes méthodes pour gérer les messages d’information, d’avertissement ou d’erreur d’un formulaire de manière accessible selon le contexte.

Il est possible d’indiquer l’information, l’avertissement ou l’erreur&nbsp;:
- dans l’étiquette du champ,
- dans un passage de texte avant le formulaire,
- dans un passage de texte relié au champ de saisie avec l’attribut `aria-describedby`,
- avec une <span lang="en">live region</span>&nbsp;: `role="alert"`, `role="status"`, `aria-live="assertive", aria-live="polite"` (dans certains contextes uniquement).

#### Champs obligatoires, format attendu et contrôle de saisie

- Ajouter une mention visible pour tout le monde au début du formulaire et utiliser l’attribut `required` pour indiquer que le champ est obligatoire.
- Le format de saisie attendu doit être indiqué et correctement relié au champ préalablement à la validation du formulaire.
- En cas d’erreur, le message d’erreur doit proposer un exemple de valeur attendue.

#### Informations personnelles et attribut `autocomplete`

Pour les champs de saisie se rapportant à une information concernant l’utilisateur, il est nécessaire d’ajouter un attribut `autocomplete` sur le champ.

Voir la [liste des valeurs disponibles](https://www.w3.org/Translations/WCAG21-fr/#input-purposes).

#### Contrastes de couleurs

Par défaut, le composant Champ de saisie est suffisamment contrasté en thème clair et en thème sombre.

---

### Restitution par les lecteurs d’écran

Par défaut, les lecteurs d’écran restituent le **nom, la description, l’état et le type**. L’ordre peut varier en fonction des lecteurs d’écran et de leur configuration.

L’attribut `disabled` est restitué différemment selon les lecteurs d’écran&nbsp;:

- VoiceOver macOS et iOS&nbsp;: «&nbsp;estompé&nbsp;»
- NVDA et JAWS&nbsp;: «&nbsp;bouton non disponible&nbsp;»
- Narrateur et Talkback &nbsp;: «&nbsp;bouton désactivé&nbsp;»

---

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.1, 3.2, 3.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires&nbsp;:** 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 11.10, 11.11, 11.12, 11.13,
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Spécification HTML – élément input](https://html.spec.whatwg.org/#the-input-element)
- [Live regions ARIA&nbsp;:bonnes et mauvaises pratiques](https://access42.net/quand-utiliser-live-regions-aria/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/input/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Champ de saisie - Système de design</title>
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
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../dist/component/...
```

(Truncated for brevity. See source file for full HTML)
