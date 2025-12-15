# DSFR Toggle Component

*Generated from local node_modules*

## Presentation

---
title: Interrupteur
shortTitle: Interrupteur
titleId: Toggle
description: Présentation du composant Interrupteur permettant de basculer entre deux états opposés sans validation supplémentaire.
shortDescription: Basculer entre deux états opposés
keywords: interrupteur, switch, interface, interaction, accessibilité, design système, DSFR, état activé, état désactivé
cover: ./_asset/cover/cover.png
excerpt: Le composant Interrupteur permet à l’usager de choisir entre deux états opposés, comme activer ou désactiver une fonctionnalité, avec effet immédiat.
summary: Ce composant est conçu pour gérer rapidement des actions binaires dans une interface, notamment pour paramétrer des fonctionnalités comme les notifications. Il permet un usage fluide grâce à un affichage clair, des libellés explicites et une structure accessible. Il peut être utilisé seul ou en groupe et s’adapte visuellement aux contraintes d’affichage sans nécessiter de validation supplémentaire.
mesh:
  - component/radio
  - component/checkbox
  - component/segmented
---

## Interrupteur

L’interrupteur est un élément d’interaction avec l’interface qui permet à l’usager de faire un choix entre deux états opposés (activé / désactivé).

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=toggle--toggle}

### Quand utiliser ce composant ?

Privilégier l’usage des interrupteurs pour paramétrer des fonctionnalités transverses (exemple : activation / désactivation des notifications). Le changement d'état de l’interrupteur doit avoir un effet immédiat et ne nécessite pas de validation.

### Comment utiliser ce composant ?

- **Prioriser la composition interrupteur avec statut Activé/désactivé** qui est la plus accessible et la plus intelligible.
- **Utiliser l’interrupteur en groupe** pour constituer une liste d’actions de même nature.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Utiliser l’interrupteur en groupe pour constituer une liste d’actions de même nature.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas regrouper des interrupteurs qui n’ont rien à voir.

:::

::::

- **Respecter un format unique pour tous les interrupteurs d’un même groupe** (ajout d’une description, d'un statut etc.) ****

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-2.png)

Respecter un format unique pour tous les interrupteurs d’un même groupe.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-2.png)

Ne pas proposer des formats différents entre les interrupteurs d’un même groupe.

:::

::::

### Règles éditoriales

- **Rédiger un libellé clair, explicite et concis** pour faciliter la compréhension de l’usager.
- **Accompagner le libellé d’une description** lorsque celui-ci ne permet pas, à lui seul, de comprendre l’action requise par l’usager.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-1.png)

Accompagner le libellé d’une description lorsqu’il ne permet pas, à lui seul, de comprendre l’action requise par l’usager.

:::

::::

- **Ajouter un titre au composant** pour clarifier le cadre dans lequel il est utilisé.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-2.png)

Ajouter un titre au composant pour clarifier le cadre dans lequel il est utilisé.

:::

::::


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design de l'interrupteur
shortTitle: Design de l'Interrupteur
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Interrupteur.
shortDescription: Basculer entre deux états opposés
keywords: interrupteur, switch, interface, interaction, accessibilité, design système, DSFR, état activé, état désactivé
cover: ../_asset/cover/cover.png
excerpt: Le composant Interrupteur permet à l’usager de choisir entre deux états opposés, comme activer ou désactiver une fonctionnalité, avec effet immédiat.
summary: Ce composant est conçu pour gérer rapidement des actions binaires dans une interface, notamment pour paramétrer des fonctionnalités comme les notifications. Il permet un usage fluide grâce à un affichage clair, des libellés explicites et une structure accessible. Il peut être utilisé seul ou en groupe et s’adapte visuellement aux contraintes d’affichage sans nécessiter de validation supplémentaire.
mesh:
  - component/radio
  - component/checkbox
  - component/segmented
---

## Interrupteur

L’interrupteur est un élément d’interaction avec l’interface qui permet à l’usager de faire un choix entre deux états opposés (activé / désactivé).

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie de l'interrupteur](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Une légende décrivant le contexte]{required=true add="uniquement dans le cadre d'un groupe d'interrupteurs"}

::dsfr-doc-pin[Une description additionnelle pour la légende]

::dsfr-doc-pin[Un interrupteur]{required=true}

::dsfr-doc-pin[Un libellé]{required=true add="associé à l'interrupteur"}

::dsfr-doc-pin[Un texte "état" décrivant l'état de l'interrupteur (activé / désactivé)]{add="placé en dessous du bouton et conseillé afin de faciliter la compréhension de l'usager"}

::dsfr-doc-pin[Un séparateur]

::dsfr-doc-pin[Un texte additionnel]{add="accompagnant chaque interrupteur / libellé"}

:::

### Variations

**Interrupteur simple**

::dsfr-doc-storybook{storyId=toggle--toggle}

**Interrupteur avec description**

::dsfr-doc-storybook{storyId=toggle--description}

**Interrupteur avec état**

::dsfr-doc-storybook{storyId=toggle--state}

**Groupe d’interrupteurs**

Utiliser l’interrupteur en groupe pour constituer une liste d’actions de même nature.

::dsfr-doc-storybook{storyId=toggle-group--toggle-group}

Lorsqu’il est utilisé en groupe, l’interrupteur doit toujours respecter le même format. Si le premier interrupteur affiche l'état, une description, ou le séparateur optionnel, alors l’ensemble des interrupteurs du groupe devront également afficher ces éléments.

**Groupe d’interrupteurs avec séparateurs**

::dsfr-doc-storybook{storyId=toggle-group--border-group}

### Tailles

La largeur de l’interrupteur s’adapte à la taille de son conteneur. Si l’interrupteur se trouve dans un conteneur large avec le bouton à droite du libellé, attention à ce qu’il ne s’en détache pas visuellement.

### États

**État d’erreur**

L'état d’erreur est signalé par un changement de couleur ainsi que l’affichage d’une ligne rouge (cf. couleurs système : le rouge est la couleur de l’état erreur) et d’un message d’erreur en-dessous du composant.

::dsfr-doc-storybook{storyId=toggle--error}

**Etat de succès**

L'état de succès est signalé par un changement de couleur ainsi que l’affichage d’une ligne verte (cf. couleurs système : le vert est la couleur de l’état succès) et d’un message de succès en-dessous du composant.

::dsfr-doc-storybook{storyId=toggle--valid}

**État désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec le bouton.

::dsfr-doc-storybook{storyId=toggle--disabled}

Dans le cas d’un interrupteur, il permet d’afficher un choix déjà effectué et/ou ne pouvant être modifié par l’usager.

### Personnalisation

Les interrupteurs ne sont pas personnalisables.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](../../../../toggle/_part/doc/index.md).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Utiliser uniquement la couleur bleu pour les interrupteurs.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur des interrupteurs.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-2.png)

Conserver la coche lorsque l’interrupteur est activé.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas supprimer ou personnaliser l’icône de l’interrupteur.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code de l'Interrupteur
shortTitle: Code de l'Interrupteur
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Interrupteur.
shortDescription: Basculer entre deux états opposés
keywords: interrupteur, switch, interface, interaction, accessibilité, design système, DSFR, état activé, état désactivé
cover: ../_asset/cover/cover.png
excerpt: Le composant Interrupteur permet à l’usager de choisir entre deux états opposés, comme activer ou désactiver une fonctionnalité, avec effet immédiat.
summary: Ce composant est conçu pour gérer rapidement des actions binaires dans une interface, notamment pour paramétrer des fonctionnalités comme les notifications. Il permet un usage fluide grâce à un affichage clair, des libellés explicites et une structure accessible. Il peut être utilisé seul ou en groupe et s’adapte visuellement aux contraintes d’affichage sans nécessiter de validation supplémentaire.
mesh:
  - component/radio
  - component/checkbox
  - component/segmented
---

## Interrupteur

L’interrupteur est un élément d’interaction avec l’interface qui permet à l’usager de faire un choix entre deux états opposés (activé / désactivé).

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Interrupteur**, est un élément interactif permettant de basculer entre deux états.

Sa structure est la suivante :

- L'Interrupteur doit être contenu dans un élément HTML `<div>` défini par la classe `fr-toggle`.
- L'interrupteur est un élément HTML `<input>` de type `checkbox` défini par la classe `fr-toggle__input`.
- L'interrupteur doit être associé à un libellé `<label>` avec la classe `fr-toggle__label`.
  - L'interrupteur peut afficher de manière optionnelle un état par l'utilisation des attributs `data-fr-checked-label` et `data-fr-unchecked-label` dont les valeurs seront affichées si l'interrupteur est coché ou non.
- Une description additionnelle de l'option - optionnelle - peut être ajoutée après le libellé, elle est définie par un élément `<p>` et la classe utilitaire `fr-hint-text`.
- Un message d'erreur ou de succès peut être associé à l'interrupteur en utilisant un élément `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`. Son attribut `id` doit être associé à l'attribut `aria-describedby` de l'interrupteur. Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.

**Exemple de structure HTML simple**

```HTML
<div class="fr-toggle">
    <input type="checkbox" class="fr-toggle__input" id="toggle" aria-describedby="toggle-messages toggle-hint">
    <label class="fr-toggle__label" for="toggle" data-fr-checked-label="Activé" data-fr-unchecked-label="Désactivé">Libellé de l'interrupteur</label>
    <p class="fr-hint-text" id="toggle-hint">Texte de description additionnel</p>
    <div class="fr-messages-group" id="toggle-messages" aria-live="polite">
    </div>
</div>
```

#### Groupe d'interrupteurs

Pour **regrouper plusieurs interrupteurs liées**, utilisez un élément `<fieldset>` avec une légende `<legend>`. Cela permet de structurer les options de manière accessible.

- L'élément `<fieldset>` est défini par la classe `fr-fieldset`.
- La légende `<legend>` est définie par la classe `fr-fieldset__legend`. Par défaut une légende sera en gras car le fieldset est utilisé pour regroupé plusieurs champs ayant chacun un label. Dans le cas des interrupteurs la légende est visuellement perçue comme le label du groupe d'interrupteurs. On ajoutera donc la classe `fr-fieldset__legend--regular` pour repasser la légende sur une graisse standard.
- Une description additionnelle pour la légende - optionnelle - peut être ajoutée dans la légende, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Chaque élément interrupteur est contenu dans un élément `<div>` défini par la classe `fr-fieldset__element`. Ces éléments peuvent être placés en ligne avec la classe `fr-fieldset__element--inline`.
- Comme pour chaque interrupteur, le groupe d'interrupteurs, représenté par un fieldset, peut contenir un message d'erreur/information/succès via un bloc `fr-messages-group`.

**Exemple de groupe d'interrupteurs**

:::fr-accordion[Déplier pour voir le code]{id=toggles-structure}

```HTML
<fieldset class="fr-fieldset" aria-labelledby="toggles-legend toggles-messages">
    <legend class="fr-fieldset__legend" id="toggles-legend">
        Légende pour l’ensemble des éléments
    </legend>
    <div class="fr-fieldset__element">
        <ul class="fr-toggle__list">
            <li>
                <div class="fr-toggle">
                    <input type="checkbox" class="fr-toggle__input" id="toggle-01" aria-describedby="toggle-01-messages">
                    <label class="fr-toggle__label" for="toggle-01">Libellé de l'interrupteur</label>
                    <div class="fr-messages-group" id="toggle-01-messages" aria-live="polite">
                    </div>
                </div>
            </li>
            <li>
                <div class="fr-toggle">
                    <input type="checkbox" class="fr-toggle__input" id="toggle-02" aria-describedby="toggle-02-messages">
                    <label class="fr-toggle__label" for="toggle-02">Libellé de l'interrupteur</label>
                    <div class="fr-messages-group" id="toggle-02-messages" aria-live="polite">
                    </div>
                </div>
            </li>
            <li>
                <div class="fr-toggle">
                    <input type="checkbox" class="fr-toggle__input" id="toggle-03" aria-describedby="toggle-03-messages">
                    <label class="fr-toggle__label" for="toggle-03">Libellé de l'interrupteur</label>
                    <div class="fr-messages-group" id="toggle-03-messages" aria-live="polite">
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="fr-messages-group" id="toggles-messages" aria-live="polite">
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
| Toggle     | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/toggle/toggle.min.css" rel="stylesheet">
```

#### Variante d’interrupteurs avec statut

Il est conseillé d’afficher un statut sous l'interrupteur pour signifier textuellement l'activation et la désactivation du champ. Des attributs placés sur le `label` permettent d'ajouter ces textes, de cette manière ils peuvent être traduits. Utiliser l'attribut `data-fr-checked-label` pour le status "Activer" et `data-fr-unchecked-label` pour le status "Désactivé".

**Exemple de variante d’interrupteur avec statut**

```HTML
<div class="fr-toggle">
    <input type="checkbox" class="fr-toggle__input" id="toggle-status" aria-describedby="toggle-status-messages">
    <label class="fr-toggle__label" for="toggle-status" data-fr-checked-label="Activé" data-fr-unchecked-label="Désactivé">Libellé de l'interrupteur</label>
    <div class="fr-messages-group" id="toggle-status-messages" aria-live="polite">
    </div>
</div>
```

#### Variante d’interrupteurs avec séparateur

Il est possible d’afficher un séparateur horizontal sous l’interrupteur, avec l'utilisation de la classe `fr-toggle--border-bottom`.

**Exemple de variante d’interrupteur avec séparateur**

```HTML
<div class="fr-toggle fr-toggle--border-bottom">
    <input type="checkbox" class="fr-toggle__input" id="toggle-label-left" aria-describedby="toggle-label-left-messages">
    <label class="fr-toggle__label" for="toggle-label-left">Libellé de l'interrupteur</label>
    <div class="fr-messages-group" id="toggle-label-left-messages" aria-live="polite">
    </div>
</div>
```

#### Variantes d'états

L’interrupteur est disponible en plusieurs variantes d'états :

- L’interrupteur avec **erreur** : défini par la classe `fr-toggle----error`.
- L’interrupteur avec **succès** : défini par la classe `fr-toggle----valid`.
- L’interrupteur **désactivé** : défini par l'attribut `disabled` sur l'élément `<input>`.

Dans le cas d'utilisation d'un groupe d’interrupteurs, ces états sont définis sur le groupe (le fieldset), et non sur chaque interrupteur.

- Groupe en **erreur** : défini par la classe `fr-fieldset--error`.
- Groupe en **succès** : défini par la classe `fr-fieldset--valid`.
- Groupe **désactivé** : défini par l'attribut `disabled`.

**Exemples de variantes d'états**

:::fr-accordion[Déplier pour voir le code]{id=toggle-states}

**Erreur**

```HTML
<div class="fr-toggle fr-toggle--error">
    <input type="checkbox" class="fr-toggle__input" id="toggle-error" aria-describedby="toggle-error-messages">
    <label class="fr-toggle__label" for="toggle-error">Libellé de l'interrupteur avec erreur</label>
    <div class="fr-messages-group" id="toggle-error-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="toggle-error-message-error">Texte d’erreur obligatoire</p>
    </div>
</div>
```

**Succès**

```HTML
<div class="fr-toggle fr-toggle--valid">
    <input type="checkbox" class="fr-toggle__input" id="toggle-valid" aria-describedby="toggle-valid-messages">
    <label class="fr-toggle__label" for="toggle-valid">Libellé de l'interrupteur avec succès</label>
    <div class="fr-messages-group" id="toggle-valid-messages" aria-live="polite">
        <p class="fr-message fr-message--valid" id="toggle-valid-message-valid">Texte de validation</p>
    </div>
</div>
```

**Désactivé**

```HTML
<div class="fr-toggle">
    <input type="checkbox" class="fr-toggle__input" id="toggle-disabled" disabled aria-describedby="toggle-disabled-messages">
    <label class="fr-toggle__label" for="toggle-disabled">Libellé de l'interrupteur désactivé</label>
    <div class="fr-messages-group" id="toggle-disabled-messages" aria-live="polite">
    </div>
</div>
```

:::

**Exemple de variante d'état au niveau du groupe**

:::fr-accordion[Déplier pour voir le code]{id=toggles-states}

**Erreur**

```HTML
<fieldset class="fr-fieldset fr-fieldset--error" aria-labelledby="toggles-error-legend toggles-error-messages">
    <legend class="fr-fieldset__legend" id="toggles-error-legend">
        Légende pour l’ensemble des éléments en erreur
    </legend>
    <div class="fr-fieldset__element">
        <ul class="fr-toggle__list">
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
        </ul>
    </div>
    <div class="fr-messages-group" id="toggles-error-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="toggles-error-message-error">Texte d’erreur globale</p>
    </div>
</fieldset>
```

**Succès**

```HTML
<fieldset class="fr-fieldset fr-fieldset--valid" aria-labelledby="toggles-valid-legend toggles-valid-messages">
    <legend class="fr-fieldset__legend" id="toggles-valid-legend">
        Légende pour l’ensemble des éléments en succès
    </legend>
    <div class="fr-fieldset__element">
        <ul class="fr-toggle__list">
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
        </ul>
    </div>
    <div class="fr-messages-group" id="toggles-valid-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="toggles-valid-message-error">Texte de succès global</p>
    </div>
</fieldset>
```

**Désactivé**

```HTML
<fieldset class="fr-fieldset" disabled aria-labelledby="toggles-disabled-legend toggles-disabled-messages">
    <legend class="fr-fieldset__legend" id="toggles-disabled-legend">
        Légende pour l’ensemble des éléments désactivés
    </legend>
    <div class="fr-fieldset__element">
        <ul class="fr-toggle__list">
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
            <li>
                <div class="fr-toggle fr-toggle--border-bottom">(...)</div>
            </li>
        </ul>
    </div>
    <div class="fr-messages-group" id="toggles-disabled-messages" aria-live="polite">
    </div>
</fieldset>
```

:::

---

### JavaScript

#### Installation du JavaScript

Pour fonctionner le composant interrupteur nécessite l'utilisation de JavaScript uniquement pour la variante avec état affiché.
Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/toggle/toggle.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/toggle/toggle.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur l'interrupteur, les éléments suivants sont instanciés :

- L'interrupteur, via la classe : `fr-toggle__input`.
- Le libellé, via la classe `fr-toggle__label` et les attributs `checked-label` ou `unchecked-label`.

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_COLLAPSE');
dsfr(elem).toggleInput.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### toggleInput

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'interrupteur est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).toggleInput.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).toggleInput.node` |

:::

##### toggleStatusLabel

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement de l'interrupteur est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).toggleStatusLabel.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).toggleStatusLabel.node` |

:::

:::fr-table[update]{valign=top multiline=true}

| | |
|:------|:-----|
| **Description** | Met a jour la taille de l'emplacement de l'état de l'interrupteur |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).toggleStatusLabel.update()` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+toggle+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de l'interrupteur
shortTitle: Accessibilité de l'Interrupteur
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Interrupteur.
shortDescription: Basculer entre deux états opposés
keywords: interrupteur, switch, interface, interaction, accessibilité, design système, DSFR, état activé, état désactivé
cover: ../_asset/cover/cover.png
excerpt: Le composant Interrupteur permet à l’usager de choisir entre deux états opposés, comme activer ou désactiver une fonctionnalité, avec effet immédiat.
summary: Ce composant est conçu pour gérer rapidement des actions binaires dans une interface, notamment pour paramétrer des fonctionnalités comme les notifications. Il permet un usage fluide grâce à un affichage clair, des libellés explicites et une structure accessible. Il peut être utilisé seul ou en groupe et s’adapte visuellement aux contraintes d’affichage sans nécessiter de validation supplémentaire.
mesh:
  - component/radio
  - component/checkbox
  - component/segmented
---

## Interrupteur

L’interrupteur est un élément d’interaction avec l’interface qui permet à l’usager de faire un choix entre deux états opposés (activé / désactivé).

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Interrupteur**, est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur l’interrupteur&nbsp;:

- `Espace`&nbsp;: active ou désactive l’interrupteur.

Dans un groupe d’interrupteurs&nbsp;:

- `Tab`&nbsp;: déplace le focus sur le prochain élément focalisable.
- `Maj + Tab`&nbsp;: déplace le focus sur l'élément focalisable précédent.

### Règles d’accessibilité

#### Intitulé pertinent : nom accessible

Un interrupteur doit avoir une **étiquette pertinente**. On doit en comprendre la fonction sans ambiguïté.

Son nom accessible est calculé par ordre de priorité à partir de&nbsp;:

- l’attribut `aria-labelledby`,
- l’attribut `aria-label`,
- l’élément `<label>`,
- l’attribut `title` en l’absence d’une autre méthode de nommage.

**Privilégier l’élément `<label>`** pour nommer le composant.

>[!CAUTION]
>Le RGAA exige une **liaison explicite** entre l’attribut `for` de l’élément `<label>` et l'attribut `id` de l’interrupteur.
>
>L’attribut `for` du label doit correspondre à l'attribut `id` de l’interrupteur. La valeur de l’attribut `id` doit être unique dans la page.

La liaison explicite `for`/`id` permet&nbsp;:

- d’assurer une compatibilité avec l’ensemble des technologies d’assistance (ex. le contrôle vocal),
- de cocher ou décocher l’interrupteur en cliquant sur l’étiquette et ainsi d’étendre la zone de clic.

#### Étiquette visible et accolée

L’étiquette est visible et doit être accolée à la case à cocher.

#### État désactivé

> [!WARNING]
> **L’état désactivé de l’interrupteur peut poser des problèmes d’utilisabilité et d’accessibilité pour les personnes handicapées** (personnes déficientes visuelles ainsi que les personnes qui ont un handicap cognitif ou mental).

La bordure, la coche et l’étiquette de l’interrupteur désactivé sont insuffisamment contrastées. Il ne s’agit néanmoins pas d’une non-conformité au RGAA (cas particulier).

#### Message d’information, d’avertissement ou d’erreur

Il existe différentes méthodes pour gérer les messages d’information, d’avertissement ou d’erreur d’un formulaire de manière accessible selon le contexte.

Il est possible d’indiquer l’information, l’avertissement ou l’erreur&nbsp;:

- dans l’étiquette du champ,
- dans un passage de texte avant le formulaire,
- dans un passage de texte relié au champ de saisie avec l’attribut `aria-describedby`,
- avec une <span lang="en">live region</span>&nbsp;: `role="alert"`, `role="status"`, `aria-live="assertive", aria-live="polite"` (dans certains contextes uniquement).

#### Groupe d’interrupteurs

- Utiliser des groupes d’interrupteurs pour des options liées, en les regroupant dans un élément `<fieldset>` avec une légende `<legend>`.
- Si le **fieldset contient des messages** d’erreur, d'informations ou de succès, il doit être associé à un attribut `aria-labelledby` pour lier la légende et les messages. Les id des éléments doivent être séparés par un espace. Il faudra également ajouter l’attribut `role="group"` à l’élément `<fieldset>` pour améliorer le rendu des technologies d’assistance.

#### Contrastes de couleurs

Par défaut, le composant Interrupteur est suffisamment contrasté en thème clair et en thème sombre.

:::fr-table[Contrastes par défaut]{valign=top multiline=true}
| Thème |  Bordure | Coche | Étiquette |
|------|-----|-----|-----|
|**Thème clair**| 14,9:1 | 14,9:1 | 18,1:1 |
|**Thème sombre**| 5,8:1| 4,7:1 | 18,1:1 |
:::

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

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Spécification HTML – élément input](https://html.spec.whatwg.org/#the-input-element)
- [Spécification HTML – type checkbox](https://html.spec.whatwg.org/#radio-button-state-(type=checkbox))
- [Live regions ARIA&nbsp;:bonnes et mauvaises pratiques](https://access42.net/quand-utiliser-live-regions-aria/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/toggle/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Interrupteur - Système de design</title>
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
    <link href="../../../dist/component/toggle/toggle.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../dist/component/f...
```

(Truncated for brevity. See source file for full HTML)
