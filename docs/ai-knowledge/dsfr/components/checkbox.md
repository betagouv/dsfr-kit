# DSFR Checkbox Component

*Generated from local node_modules*

## Presentation

---
title: Case à cocher
shortTitle: Case à cocher
titleId: Checkbox
description: Présentation du composant Case à cocher permettant à l’usager de sélectionner une ou plusieurs options dans une liste de manière indépendante.
shortDescription: Sélection multiple dans une liste
keywords: case à cocher, checkbox, sélection multiple, formulaire, DSFR, design système, accessibilité, interface
cover: ./_asset/cover/cover.png
excerpt: Le composant Case à cocher permet à l’usager de sélectionner librement une ou plusieurs options dans un ensemble de choix. Il est utilisé seul ou en groupe, avec ou sans texte d’aide.
summary: Ce composant permet une sélection multiple ou binaire dans les interfaces, particulièrement dans les formulaires. Il peut être utilisé seul pour un choix isolé, ou en liste pour plusieurs options. Des variantes avec texte d’aide sont proposées pour améliorer la compréhension. Il respecte les contraintes d’ergonomie, d’accessibilité et de cohérence éditoriale, sans personnalisation graphique.
mesh:
  - component/radio
  - component/input
  - component/form
---

## Case à cocher

La case à cocher est un élément d’interaction avec l’interface permettant à l’usager de sélectionner une ou plusieurs options dans une liste.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=checkbox--checkbox}

### Quand utiliser ce composant ?

Utiliser les cases à cocher pour permettre à l’utilisateur de sélectionner une ou plusieurs options dans une liste.

> [!NOTE]
> Bien différencier les cases à cocher des boutons radio ou liste déroulante. Les cases à cocher sont recommandées lorsque l’utilisateur doit effectuer une sélection multiple (de 0 à N éléments) dans une liste ou pour permettre un choix binaire (lorsque l’utilisateur peut sélectionner ou désélectionner une seule option).

Au-delà de 5 choix ou lorsque l’espace est restreint, utilisez une liste déroulante.

Si vous souhaitez contraindre le choix de l’utilisateur à une seule option, choisissez les boutons radio.

### Comment utiliser ce composant ?

- **Utiliser la case à cocher seule ou en liste**, selon son contexte d’utilisation.

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/use/do-1.png)

Utiliser la case à cocher au sein d’un formulaire.

:::

- **Privilégier une disposition en liste verticale** des cases à cocher lorsqu’elles sont en liste, la version horizontale étant plus difficile à lire pour les utilisateurs, notamment lorsque les options sont nombreuses.

### Règles éditoriales

- Il est important de **rédiger des libellés clairs et concis** pour faciliter la compréhension des options et du choix à réaliser.
- **Maintenir une cohérence dans les libellés** des boutons radio en utilisant des termes logiques entre eux et cohérents avec le reste du site.
- **Conserver une unité dans le format** d’écriture de tous les libellés de case à cocher, en mettant uniquement la première lettre en majuscule et sans ponctuer la fin d’un libellé.
- **Accompagner la ou les cases à cocher d’un texte d’aide pour clarifier la nature du contenu attendu,** lorsque nécessaire. Si cette information est essentielle, éviter de la masquer dans une infobulle.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-1.png)

Accompagner les cases à cocher d’un texte d’aide pour clarifier la nature du contenu attendu.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-1.png)

Ne pas masquer le texte d’aide dans une infobulle.

:::

::::


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design de la Case à cocher
shortTitle: Design de la Case à cocher
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Case à cocher.
shortDescription: Sélection multiple dans une liste
keywords: case à cocher, checkbox, sélection multiple, formulaire, DSFR, design système, accessibilité, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Case à cocher permet à l’usager de sélectionner librement une ou plusieurs options dans un ensemble de choix. Il est utilisé seul ou en groupe, avec ou sans texte d’aide.
summary: Ce composant permet une sélection multiple ou binaire dans les interfaces, particulièrement dans les formulaires. Il peut être utilisé seul pour un choix isolé, ou en liste pour plusieurs options. Des variantes avec texte d’aide sont proposées pour améliorer la compréhension. Il respecte les contraintes d’ergonomie, d’accessibilité et de cohérence éditoriale, sans personnalisation graphique.
mesh:
  - component/radio
  - component/input
  - component/form
---

## Case à cocher

La case à cocher est un élément d’interaction avec l’interface permettant à l’usager de sélectionner une ou plusieurs options dans une liste.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie de la case à cocher](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Une légende]{required=true add="décrivant le contexte du groupe de cases à cocher"}

::dsfr-doc-pin[Une description additionnelle]{add="pour la légende"}

::dsfr-doc-pin[Une case à cocher]{required=true}

::dsfr-doc-pin[Un libellé]{required=true add="associé à la case à cocher"}

::dsfr-doc-pin[Un texte additionnel]{add="accompagnant chaque case à cocher / libellé"}

:::

### Variations

**Liste verticale**

::dsfr-doc-storybook{storyId=checkboxes-group--default-group}

La variation verticale d’une liste de cases à cocher est la plus courante et la plus facile à lire pour l’utilisateur.

**Liste horizontale**

::dsfr-doc-storybook{storyId=checkboxes-group--inline}

La variation horizontale d’une liste de cases à cocher est à utiliser uniquement lorsqu’il n’y a 2 options ou que les libellés des entrées sont courts.

**Liste avec texte d’aide**

Il est recommandé d’ajouter un texte d’aide qui accompagne les cases à cocher afin de faciliter le choix de l’utilisateur. Ces précisions peuvent être apportées de deux façons :

- Par l’ajout d’un texte sous le titre du groupe de cases à cocher, afin d’apporter une précision à l’intitulé du groupe.

::dsfr-doc-storybook{storyId=checkboxes-group--hint}

- Par l’ajout d’un texte sous le libellé de chaque case à cocher, afin d’apporter une précision à chaque élément.

::dsfr-doc-storybook{storyId=checkboxes-group--hint-group}

### Tailles

La case à cocher est proposée en taille MD par défaut (24px) afin d’optimiser son ergonomie et son accessibilité en ayant une zone cliquable confortable.

::dsfr-doc-storybook{storyId=checkboxes-group--size-md}

Il existe également une version en taille SM (16 px) correspondant à la taille standard proposée par les navigateurs.

::dsfr-doc-storybook{storyId=checkboxes-group--size-sm}

### États

**État d’erreur**

L'état d’erreur est signalé par un changement de couleur ainsi que l’affichage d’une ligne rouge (cf. couleurs fonctionnelles : le rouge est la couleur de l’état erreur) et d’un message d’erreur en-dessous du composant.

::dsfr-doc-storybook{storyId=checkboxes-group--error}

**État de succès**

L'état de succès est signalé par un changement de couleur ainsi que l’affichage d’une ligne verte (cf. couleurs fonctionnelles : le vert est la couleur de l’état succès) et d’un message de succès en-dessous du composant.

::dsfr-doc-storybook{storyId=checkboxes-group--success}

**État désactivé**

L'état désactivé indique que l’utilisateur ne peut pas interagir avec la case à cocher.

::dsfr-doc-storybook{storyId=checkboxes-group--disabled}

> [!NOTE]
> L'état “Indeterminate” n’est pas géré actuellement par le Système de Design de l'Etat.

### Personnalisation

Les cases à cocher ne sont pas personnalisables. Toutefois, certains éléments sont optionnels - voir [la structure du composant](#case-à-cocher).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Utiliser uniquement la couleur bleu pour les cases à cocher.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur des cases à cocher.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-2.png)

Utiliser uniquement une typographie noire.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas personnaliser la couleur des textes.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code de la Case à cocher
shortTitle: Code de la Case à cocher
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Case à cocher.
shortDescription: Sélection multiple dans une liste
keywords: case à cocher, checkbox, sélection multiple, formulaire, DSFR, design système, accessibilité, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Case à cocher permet à l’usager de sélectionner librement une ou plusieurs options dans un ensemble de choix. Il est utilisé seul ou en groupe, avec ou sans texte d’aide.
summary: Ce composant permet une sélection multiple ou binaire dans les interfaces, particulièrement dans les formulaires. Il peut être utilisé seul pour un choix isolé, ou en liste pour plusieurs options. Des variantes avec texte d’aide sont proposées pour améliorer la compréhension. Il respecte les contraintes d’ergonomie, d’accessibilité et de cohérence éditoriale, sans personnalisation graphique.
mesh:
  - component/radio
  - component/input
  - component/form
---

## Case à cocher

La case à cocher est un élément d’interaction avec l’interface permettant à l’usager de sélectionner une ou plusieurs options dans une liste.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Case à cocher**, ci-après nommée **Checkbox**, est un élément interactif permettant de sélectionner une ou plusieurs options. Sa structure est la suivante :

- La checkbox doit être **contenu** dans un élément HTML `<div>` défini par la classe `fr-checkbox-group`.
- La checkbox est un élément HTML `<input>` de type `checkbox` défini par la classe `fr-checkbox`.
- La checkbox doit être associée à un **label** `<label>` avec la classe `fr-label`.
- Une **description additionnelle** de l'option - optionnelle - peut être ajoutée dans le label, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Un **message** d'erreur ou de succès peut être associé à la checkbox en utilisant un élément `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`. Son attribut`id` doit être associé à l'attribut `aria-describedby` de la checkbox. Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.

**Exemple de structure HTML simple**

```HTML
<div class="fr-checkbox-group">
    <input id="checkbox" type="checkbox" aria-describedby="checkbox-messages">
    <label class="fr-label" for="checkbox">
        Libellé checkbox
        <span class="fr-hint-text">Description optionnelle</span>
    </label>
    <div class="fr-messages-group" id="checkbox-messages" aria-live="polite">
    </div>
</div>
```

#### Groupe de checkboxes

Pour **regrouper plusieurs checkboxes liées**, utilisez un élément `<fieldset>` avec une légende `<legend>`. Cela permet de structurer les options de manière accessible.

- L'élément `<fieldset>` est défini par la classe `fr-fieldset`.
- La légende `<legend>` est définie par la classe `fr-fieldset__legend`. Par défaut une légende sera en gras car le fieldset est utilisé pour regroupé plusieurs champs ayant chacun un label. Dans le cas des checkboxes la légende est visuellement perçue comme le label du groupe de checkboxes. On ajoutera donc la classe `fr-fieldset__legend--regular` pour repasser la légende sur une graisse standard.
- Une description additionnelle pour la légende - optionnelle - peut être ajoutée dans la légende, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Chaque élément de checkbox est contenu dans un élément `<div>` défini par la classe `fr-fieldset__element`. Ces éléments peuvent être placés en ligne avec la classe `fr-fieldset__element--inline`.
- Comme pour chaque checkbox, le groupe de checkbox, représenté par un fieldset, peut contenir un message d'erreur/information/succès via un bloc `fr-messages-group`.

**Exemple de groupe de checkboxes**

:::fr-accordion[Déplier pour voir le code]{id=checkboxes-structure}

```HTML
<fieldset class="fr-fieldset" aria-labelledby="checkboxes-legend checkboxes-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="checkboxes-legend">
        Légende pour l’ensemble des éléments
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">
            <input name="checkboxes-1" id="checkboxes-1" type="checkbox">
            <label class="fr-label" for="checkboxes-1">
                Libellé case à cocher
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">
            <input checked name="checkboxes-2" id="checkboxes-2" type="checkbox">
            <label class="fr-label" for="checkboxes-2">
                Libellé case à cocher
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">
            <input name="checkboxes-3" id="checkboxes-3" type="checkbox">
            <label class="fr-label" for="checkboxes-3">
                Libellé case à cocher
            </label>
        </div>
    </div>
    <div class="fr-messages-group" id="checkboxes-messages" aria-live="polite">
    </div>
</fieldset>
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
| Form       | Oui         |
| Checkbox   | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/checkbox/checkbox.min.css" rel="stylesheet">
```

#### Variantes de tailles

La checkbox est disponible en deux variantes de tailles :

- En taille MD : par défaut.
- En taille SM : définie par la classe `fr-checkbox-group--sm`.

**Exemples de variantes de tailles**

```HTML
<div class="fr-checkbox-group fr-checkbox-group--sm">
    <input id="checkbox-sm" type="checkbox">
    <label class="fr-label" for="checkbox-sm">
        Libellé checkbox taille SM
    </label>
</div>
```

#### Variantes d'états

La checkbox est disponible en plusieurs variantes d'états :

- La checkbox avec **erreur** : définie par la classe `fr-checkbox-group--error`.
- La checkbox avec **succès** : définie par la classe `fr-checkbox-group--valid`.
- La checkbox **désactivée** : définie par l'attribut `disabled` sur l'élément `<input>`.

Dans le cas d'utilisation d'un groupe de checkboxes, ces états sont définis sur le groupe (le fieldset), et non sur chaque checkbox.

- Groupe en **erreur** : définie par la classe `fr-fieldset--error`.
- Groupe en **succès** : définie par la classe `fr-fieldset--valid`.
- Groupe **désactivée** : définie par l'attribut `disabled`.

**Exemples de variantes d'états**

:::fr-accordion[Déplier pour voir le code]{id=checkbox-etats}

**Erreur**

```HTML
<div class="fr-checkbox-group fr-checkbox-group--error">
    <input id="checkbox-error" type="checkbox" aria-describedby="checkbox-messages-error">
    <label class="fr-label" for="checkbox-error">
        Libellé checkbox avec erreur
    </label>
    <div class="fr-messages-group" id="checkbox-messages-error" aria-live="polite">
        <p class="fr-message fr-message--error">Texte d’erreur</p>
    </div>
</div>
```

**Succès**

```HTML
<div class="fr-checkbox-group fr-checkbox-group--valid">
    <input id="checkbox-valid" type="checkbox" aria-describedby="checkbox-messages-valid">
    <label class="fr-label" for="checkbox-valid">
        Libellé checkbox avec succès
    </label>
    <div class="fr-messages-group" id="checkbox-messages-valid" aria-live="polite">
        <p class="fr-message fr-message--valid">Texte de succès</p>
    </div>
</div>
```

**Désactivé**

```HTML
<div class="fr-checkbox-group">
    <input id="checkbox-disabled" type="checkbox" disabled>
    <label class="fr-label" for="checkbox-disabled">
        Libellé checkbox désactivée
    </label>
</div>
```

:::

**Exemple de variante d'état au niveau du groupe**

:::fr-accordion[Déplier pour voir le code]{id=checkboxes-etats}

**Erreur**

```HTML
<fieldset class="fr-fieldset fr-fieldset--error" aria-labelledby="checkboxes-legend checkboxes-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="checkboxes-legend">
        Légende pour l’ensemble des éléments en erreur
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">(...)</div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">(...)</div>
    </div>
    <div class="fr-messages-group" id="checkboxes-messages" aria-live="polite">
        <p class="fr-message fr-message--error">Texte d’erreur globale</p>
    </div>
</fieldset>
```

**Succès**

```HTML
<fieldset class="fr-fieldset fr-fieldset--valid" aria-labelledby="checkboxes-legend checkboxes-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="checkboxes-legend">
        Légende pour l’ensemble des éléments en succès
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">(...)</div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">(...)</div>
    </div>
    <div class="fr-messages-group" id="checkboxes-messages" aria-live="polite">
        <p class="fr-message fr-message--error">Texte de succès global</p>
    </div>
</fieldset>
```

**Désactivé**

```HTML
<fieldset class="fr-fieldset" disabled aria-labelledby="checkboxes-legend checkboxes-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="checkboxes-legend">
        Légende pour l’ensemble des éléments déactivés
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">(...)</div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-checkbox-group">(...)</div>
    </div>
    <div class="fr-messages-group" id="checkboxes-messages" aria-live="polite">
    </div>
</fieldset>
```

:::

---

### JavaScript

Le composant Case à cocher **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

Un script est disponible pour faire remonter les évènements de changement d'état des checkboxes, mais il n'est pas nécessaire pour le fonctionnement du composant.
Ce script est notamment utilisé pour gérer la selection des lignes d'un tableau.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+checkbox+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de la Case à cocher
shortTitle: Accessibilité de la Case à cocher
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Case à cocher.
shortDescription: Sélection multiple dans une liste
keywords: case à cocher, checkbox, sélection multiple, formulaire, DSFR, design système, accessibilité, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Case à cocher permet à l’usager de sélectionner librement une ou plusieurs options dans un ensemble de choix. Il est utilisé seul ou en groupe, avec ou sans texte d’aide.
summary: Ce composant permet une sélection multiple ou binaire dans les interfaces, particulièrement dans les formulaires. Il peut être utilisé seul pour un choix isolé, ou en liste pour plusieurs options. Des variantes avec texte d’aide sont proposées pour améliorer la compréhension. Il respecte les contraintes d’ergonomie, d’accessibilité et de cohérence éditoriale, sans personnalisation graphique.
mesh:
  - component/radio
  - component/input
  - component/form
---

## Case à cocher

La case à cocher est un élément d’interaction avec l’interface permettant à l’usager de sélectionner une ou plusieurs options dans une liste.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Case à cocher** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur le composant&nbsp;:

- `Espace`&nbsp;: coche ou décoche la case à cocher.

Dans un groupe de cases à cocher&nbsp;:

- `Tab`&nbsp;: déplace le focus sur le prochain élément focalisable.
- `Maj + Tab`&nbsp;: déplace le focus sur l'élément focalisable précédent.

### Règles d’accessibilité

#### Intitulé pertinent : nom accessible

Une case à cocher doit avoir une **étiquette pertinente**. On doit en comprendre la fonction sans ambiguïté.

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
- de cocher ou décocher la case à cocher en cliquant sur l’étiquette et ainsi d’étendre la zone de clic.

#### Étiquette visible et accolée

L’étiquette est visible et accolée à la case à cocher.

#### État désactivé

> [!WARNING]
> **L’état désactivé d’une case à cocher peut poser des problèmes d’utilisabilité et d’accessibilité pour les personnes handicapées** (personnes déficientes visuelles ainsi que les personnes qui ont un handicap cognitif ou mental).

La bordure, la coche et l’étiquette de la case à cocher désactivée sont insuffisamment contrastées. Il ne s’agit néanmoins pas d’une non-conformité au RGAA (cas particulier).

#### Message d’information, d’avertissement ou d’erreur

Il existe différentes méthodes pour gérer les messages d’information, d’avertissement ou d’erreur d’un formulaire de manière accessible selon le contexte.

Il est possible d’indiquer l’information, l’avertissement ou l’erreur&nbsp;:
- dans l’étiquette du champ,
- dans un passage de texte avant le formulaire,
- dans un passage de texte relié au champ de saisie avec l’attribut `aria-describedby`,
- avec une <span lang="en">live region</span>&nbsp;: `role="alert"`, `role="status"`, `aria-live="assertive", aria-live="polite"` (dans certains contextes uniquement).

#### Champs obligatoires

Ajouter une mention visible pour tout le monde au début du formulaire et utiliser l’attribut `required` pour indiquer que la case à cocher est obligatoire.

#### Groupe de cases à cocher

- Utiliser des groupes de cases à cocher pour des options liées, en les regroupant dans un élément `<fieldset>` avec une légende `<legend>`.
  - La **légende** doit être explicite et décrire le groupe d'options. Elle ne doit pas être en gras puisqu’elle n’est pas considérée ici comme le titre d’un regroupement de champs mais comme le libellé de l'ensemble d'options.
  - Si le **fieldset contient des messages** d’erreur, d'informations ou de succès, il doit être associé à un attribut `aria-labelledby` pour lier la légende et les messages. Les id des éléments doivent être séparés par un espace. Il faudra également ajouter l’attribut `role="group"` à l’élément `<fieldset>` pour améliorer le rendu des technologies d’assistance.

#### Contrastes de couleurs

Par défaut, le composant Case à cocher est suffisamment contrasté en thème clair et en thème sombre.

:::fr-table[Contrastes par défaut]{valign=top multiline=true}
| Thème |  Bordure | Coche | Étiquette |
|------|-----|-----|-----|
|**Thème clair**| 14,9:1 | 14,9:1 | 18,1:1 |
|**Thème sombre**| 5,8:1| 4,7:1 | 18,1:1 |
:::

En cas de succès ou d’erreur, le ratio de contraste de la bordure et celui de l’étiquette sont de 5,8 en thème clair et sombre.

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
- **Formulaires&nbsp;:** 11.1, 11.2, 11.4, 11.5, 11.6, 11.7, 11.8, 11.10, 11.11
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Spécification HTML – élément input](https://html.spec.whatwg.org/#the-input-element)
- [Spécification HTML – type checkbox](https://html.spec.whatwg.org/#checkbox-state-(type=checkbox))
- [Live regions ARIA&nbsp;:bonnes et mauvaises pratiques](https://access42.net/quand-utiliser-live-regions-aria/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/checkbox/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Case à cocher - Système de design</title>
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
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/checkbox/checkbox.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../dist/compon...
```

(Truncated for brevity. See source file for full HTML)
