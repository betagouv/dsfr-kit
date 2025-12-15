# DSFR Radio Component

*Generated from local node_modules*

## Presentation

---
title: Bouton radio
shortTitle: Bouton radio
titleId: Radio
description: Présentation du composant Bouton radio permettant à l’usager de sélectionner une option unique parmi un ensemble limité de choix.
shortDescription: Sélection d’une option unique
keywords: bouton radio, sélection, interface, formulaire, design système, DSFR, accessibilité, choix unique
cover: ./_asset/cover/cover.png
excerpt: Le composant Bouton radio permet de proposer à l’usager un choix unique parmi plusieurs options. Il est recommandé pour les listes de 2 à 5 éléments maximum.
summary: Ce composant est conçu pour faciliter le choix unique dans une interface, en particulier dans les formulaires. Il offre différentes dispositions et variations, y compris des versions enrichies avec pictogrammes. Il s’utilise en groupe, avec des libellés clairs et une hiérarchie visuelle cohérente. L’intégration respecte des règles d’ergonomie, d’accessibilité et d’uniformité éditoriale.
mesh:
  - component/checkbox
  - component/input
  - component/select
---

## Bouton radio

Le bouton radio est un élément d’interaction avec l’interface permettant à l’usager de réaliser un choix unique parmi plusieurs options.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=radio--radio}

### Quand utiliser ce composant ?

Utiliser les boutons radio pour permettre à l’utilisateur de sélectionner une option unique dans une liste.

> [!NOTE]
> Bien différencier les boutons radio des cases à cocher ou liste déroulante. Les boutons radio sont recommandés lorsque l’utilisateur doit choisir un seul élément parmi 2 à 5 choix possibles.

Si plusieurs choix sont possibles ou que la sélection n’est pas obligatoire, privilégiez le composant case à cocher.

Au-delà de 5 choix ou lorsque l’espace est restreint, utilisez pour une liste déroulante.

### Comment utiliser ce composant ?

- **Considérer toujours le bouton radio comme un groupe de boutons radio**. Le bouton radio ne peut pas être utilisé seul, dans la mesure où il permet de faire un choix entre différentes options (minimum 2).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Utiliser les boutons radios pour permettre à l’usager de faire un choix entre différentes options.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas proposer de bouton radio seul.

:::

::::


- **Privilégier une disposition en liste verticale** des boutons radio, une liste horizontale étant plus difficile à lire, notamment lorsque les options sont nombreuses.
- **Éviter de sélectionner une option par défaut** pour que le choix de l’usager soit conscient (en particulier si celui-ci est obligatoire).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-2.png)

Proposer des choix sans sélectionner une option par défaut.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-2.png)

Ne pas pousser une option par défaut afin de laisser l’usager faire son choix en conscience.

:::

::::

### Règles éditoriales

- Il est important de **rédiger des libellés clairs et concis** pour faciliter la compréhension des options et du choix à réaliser.
- **Maintenir une cohérence dans les libellés** des boutons radio en utilisant des termes logiques entre eux et cohérents avec le reste du site.
- **Conserver une unité dans le format** d’écriture de tous les libellés de boutons radio, en mettant uniquement la première lettre en majuscule et sans ponctuer la fin d’un libellé.
- **Accompagner les boutons radio d’un texte d’aide pour clarifier la nature du contenu attendu** lorsque nécessaire. Si cette information est essentielle, éviter de la masquer dans une infobulle.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-1.png)

Accompagner les boutons radio d’un texte d’aide pour clarifier la nature du contenu attendu.

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
title: Design du Bouton radio
shortTitle: Design du Bouton radio
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Bouton radio.
shortDescription: Sélection d’une option unique
keywords: bouton radio, sélection, interface, formulaire, design système, DSFR, accessibilité, choix unique
cover: ../_asset/cover/cover.png
excerpt: Le composant Bouton radio permet de proposer à l’usager un choix unique parmi plusieurs options. Il est recommandé pour les listes de 2 à 5 éléments maximum.
summary: Ce composant est conçu pour faciliter le choix unique dans une interface, en particulier dans les formulaires. Il offre différentes dispositions et variations, y compris des versions enrichies avec pictogrammes. Il s’utilise en groupe, avec des libellés clairs et une hiérarchie visuelle cohérente. L’intégration respecte des règles d’ergonomie, d’accessibilité et d’uniformité éditoriale.
mesh:
  - component/checkbox
  - component/input
  - component/select
---

## Bouton radio

Le bouton radio est un élément d’interaction avec l’interface permettant à l’usager de réaliser un choix unique parmi plusieurs options.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie du bouton](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Une légende]{required=true add='décrivant le contexte du groupe de boutons radio'}

::dsfr-doc-pin[Une description additionnelle]{add='pour la légende'}

::dsfr-doc-pin[Un bouton radio]{required=true}

::dsfr-doc-pin[Un libellé]{required=true add='associé à chaque bouton'}

::dsfr-doc-pin[Un texte additionnel]{add='accompagnant chaque bouton / libellé'}

:::

### Variations

**Liste horizontale**

Privilégier les listes verticales aux listes horizontales, plus difficiles à lire pour l’utilisateur.

::dsfr-doc-storybook{storyId=radios-group--inline-group}

Cette variation horizontale est donc à utiliser uniquement lorsqu’il n’y a que 2 options possibles ou que les libellés des entrées sont courts.

**Liste avec texte d’aide**

Il est recommandé d’ajouter un texte d’aide qui accompagne les boutons radio afin de faciliter le choix de l’utilisateur. Ces précisions peuvent être apportées de deux façons :

- Par l’ajout d’un texte sous le titre du groupe de boutons radio, afin d’apporter une précision à l’intitulé du groupe.

::dsfr-doc-storybook{storyId=radios-group--hint}

- Par l’ajout d’un texte sous le libellé de chaque bouton radio, afin d’apporter une précision à chaque élément.

::dsfr-doc-storybook{storyId=radios-group--hint-group}

**Boutons radio riches**

Utiliser les boutons radio riches pour permettre à l’usager de sélectionner une option unique dans une liste d’options illustrées.

À la différence des boutons radio simples, le [pictogramme](../../../../../core/_part/doc/pictogram/index.md) du bouton radio riche permet d’illustrer et d’accompagner l’usager dans son choix.

Celui-ci est personnalisable.

**Liste horizontale**

- Avec description

::dsfr-doc-storybook{storyId=radios-group--radios-rich-inline-hint-group}

- Sans description

::dsfr-doc-storybook{storyId=radios-group--radios-rich-inline-group}

- Sans pictogramme

::dsfr-doc-storybook{storyId=radios-group--radios-rich-no-image-inline-group}

**Liste verticale**

- Avec description

::dsfr-doc-storybook{storyId=radios-group--radios-rich-hint-group}

- Sans description

::dsfr-doc-storybook{storyId=radios-group--radios-rich-group}

- Sans pictogramme

::dsfr-doc-storybook{storyId=radios-group--radios-rich-no-image-group}

### Tailles

Le bouton radio est proposé en taille MD par défaut (24px) afin d’optimiser son ergonomie et son accessibilité en ayant une zone cliquable confortable.

::dsfr-doc-storybook{storyId=radios-group--size-md}

Il existe également une version en taille SM (16 px) correspondant à la taille standard proposée par les navigateurs.

::dsfr-doc-storybook{storyId=radios-group--size-sm}

### États

**Etat d’erreur**

L'état d’erreur est signalé par un changement de couleur ainsi que l’affichage d’une ligne rouge (cf. couleurs fonctionnelles : le rouge est la couleur de l’état erreur) et d’un message d’erreur en-dessous du composant.

::dsfr-doc-storybook{storyId=radios-group--status-error}

**Etat de succès**

L'état de succès est signalé par un changement de couleur ainsi que l’affichage d’une ligne verte (cf. couleurs fonctionnelles : le vert est la couleur de l’état succès) et d’un message de succès en-dessous du composant.

::dsfr-doc-storybook{storyId=radios-group--status-valid}

**Etat désactivé**

L'état désactivé indique que l’utilisateur ne peux pas interagir avec le bouton radio.

::dsfr-doc-storybook{storyId=radios-group--disabled}

### **Personnalisation**

Les boutons radio ne sont pas personnalisables. Toutefois, certains éléments sont optionnels - voir [la structure du composant](#bouton-radio).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Utiliser uniquement la couleur bleu pour les boutons radio.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur des boutons radio.

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
title: Code du Bouton radio
shortTitle: Code du Bouton radio
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Bouton radio.
shortDescription: Sélection d’une option unique
keywords: bouton radio, sélection, interface, formulaire, design système, DSFR, accessibilité, choix unique
cover: ../_asset/cover/cover.png
excerpt: Le composant Bouton radio permet de proposer à l’usager un choix unique parmi plusieurs options. Il est recommandé pour les listes de 2 à 5 éléments maximum.
summary: Ce composant est conçu pour faciliter le choix unique dans une interface, en particulier dans les formulaires. Il offre différentes dispositions et variations, y compris des versions enrichies avec pictogrammes. Il s’utilise en groupe, avec des libellés clairs et une hiérarchie visuelle cohérente. L’intégration respecte des règles d’ergonomie, d’accessibilité et d’uniformité éditoriale.
mesh:
  - component/checkbox
  - component/input
  - component/select
---

## Bouton radio

Le bouton radio est un élément d’interaction avec l’interface permettant à l’usager de réaliser un choix unique parmi plusieurs options.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant Bouton radio, ci-après nommé **Radio**, est un élément interactif permettant de sélectionner une seule option parmi un groupe d'options. Il n'est pas utilisé seul, mais toujours dans un ensemble de radios. Un radio seul correspond en fait à une **option**.

Sa structure est la suivante :

- Le Radio doit être contenu dans un élément HTML `<div>` défini par la classe `fr-radio-group`.
- Le Radio est un élément HTML `<input>` de type `radio` défini par la classe `fr-radio`.
- Le radio doit être associé à un libellé `<label>` avec la classe `fr-label`.
- Une description additionnelle de l'option, optionnelle, peut être ajoutée dans le label, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.

**Exemple de structure HTML simple**

```HTML
<div class="fr-radio-group">
    <input id="radio" type="radio" name="radio" aria-describedby="radio-messages">
    <label class="fr-label" for="radio">
        Libellé bouton radio
        <span class="fr-hint-text">Description optionnelle</span>
    </label>
</div>
```

#### Groupe de radios

Un bouton radio seul ne fait pas sens, il doit **toujours être dans un ensemble de boutons radio**, pour cela, utilisez un élément `<fieldset>` avec une légende `<legend>`. Cela permet de structurer les options de manière accessible.

- L'élément `<fieldset>` est défini par la classe `fr-fieldset`.
- La légende `<legend>` est définie par la classe `fr-fieldset__legend`. Par défaut une légende sera en gras car le fieldset est utilisé pour regrouper plusieurs champs ayant chacun un label. Dans le cas des radios, la légende est visuellement perçue comme le label du groupe de radios. On ajoutera donc la classe `fr-fieldset__legend--regular` pour repasser la légende sur une graisse standard.
- Une description additionnelle pour la légende - optionnelle - peut être ajoutée dans la légende, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Chaque élément de radio est contenu dans un élément `<div>` défini par la classe `fr-fieldset__element`. Ces éléments peuvent être placés en ligne avec la classe `fr-fieldset__element--inline`.
- L'ensemble de radios, représenté par un fieldset, peut contenir un message d'erreur ou succès via un bloc `fr-messages-group`.

**Exemple de groupe de radios**

:::fr-accordion[Déplier pour voir le code]{id=radios-structure}

```HTML
<fieldset class="fr-fieldset" aria-labelledby="radio-legend radio-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="radio-legend">
        Légende pour l’ensemble des éléments
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="1" type="radio" id="radio-1" name="radio">
            <label class="fr-label" for="radio-1">
                Libellé bouton radio
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="2" type="radio" id="radio-2" name="radio">
            <label class="fr-label" for="radio-2">
                Libellé bouton radio
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="3" type="radio" id="radio-3" name="radio">
            <label class="fr-label" for="radio-3">
                Libellé bouton radio
            </label>
        </div>
    </div>
    <div class="fr-messages-group" id="radio-messages" aria-live="polite">
    </div>
</fieldset>
```

:::

#### Bouton radio riche

Le composant bouton radio propose une variante de bouton radio riche. Cette variante permet d'ajouter une bordure et un pictogramme, optionnel. La différence se caractérise par la classe `fr-radio-rich` et l'ajout d'un élément `<div>` de classe `fr-radio-rich__pictogram` contenant un pictogramme SVG.

Le regroupement de radios riches se fait de la même manière que pour les radios simples.

**Exemple de bouton radio riche**

```HTML
<div class="fr-radio-group fr-radio-rich">
    <input value="1" type="radio" id="radio-rich-1" name="radio-rich">
    <label class="fr-label" for="radio-rich-1">
        Libellé bouton radio
    </label>
    <div class="fr-radio-rich__pictogram">
        <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
            <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-decorative"></use>
            <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-minor"></use>
            <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/buildings/city-hall.svg#artwork-major"></use>
        </svg>
    </div>
</div>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top scroll=false}

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Radio      | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/radio/radio.min.css" rel="stylesheet">
```

#### Variante de taille

Le composant Bouton radio propose une variante de taille pour s'adapter à différents contextes d'utilisation. Pour appliquer une variante de taille, ajoutez une des classes suivantes à l'élément `<div class="fr-radio-group">` :

- Par défaut : Taille MD.
- `fr-radio-group--sm` : Taille SM.

#### Variantes du radio bouton riche

La variante de bouton radio riche est définie par la classe `fr-radio-rich`. Pour ajouter un pictogramme, ajoutez un élément `<div>` de classe `fr-radio-rich__pictogram` contenant un pictogramme SVG. Le pictogramme doit être ajouté avec ses 3 parties : `fr-artwork-decorative`, `fr-artwork-minor` et `fr-artwork-major`. La partie mineur peut être accentuée via les classes utilitaires d'artwork `fr-artwork--NOM-COULEUR`, ex : fr-artwork--green-emeraude. Voir la [documentation des pictogrammes](../../../../../core/_part/doc/pictogram/index.md) pour plus d'informations.

Il est aussi possible d'utiliser cette variante **sans pictogramme**. Il suffit pour cela de ne pas ajouter l'élément `<div>` de classe `fr-radio-rich__pictogram`.

Les boutons radios riches sont aussi disponibles en taille SM et MD.

#### Variantes d'états

Les boutons radios étant toujours utilisés en groupe, les états d'erreur/succès sont gérés au niveau du groupe. Pour ajouter un état à un bouton radio, ajoutez une des propriétés suivantes à l'élément `<fieldset class="fr-fieldset">` :

- La classe `fr-fieldset--error` : Indique une erreur.
- La classe `fr-fieldset--valid` : Indique un succès.
- L'attribut `disabled` : Indique un état désactivé.

Un message d'erreur ou de succès doit être ajouté dans un bloc `fr-messages-group` à la fin du fieldset et doit être lié au fieldset via un attribut `aria-describedby`.

**Exemple de groupe de radios avec erreur**

:::fr-accordion[Déplier pour voir le code]{id=code-radios-erreur}

```HTML
<fieldset class="fr-fieldset fr-fieldset--error" role="group" aria-labelledby="radio-legend radio-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="radio-legend">
        Légende pour l’ensemble des éléments en erreur
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="1" type="radio" id="radio-1" name="radio">
            <label class="fr-label" for="radio-1">
                Libellé bouton radio 1
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="2" type="radio" id="radio-2" name="radio">
            <label class="fr-label" for="radio-2">
                Libellé bouton radio 2
            </label>
        </div>
    </div>
    <div class="fr-messages-group" id="radio-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="radio-message-error">Texte d’erreur</p>
    </div>
</fieldset>
```

:::

**Exemple de groupe de radios avec succès**

:::fr-accordion[Déplier pour voir le code]{id=code-radios-succes}

```HTML
<fieldset class="fr-fieldset fr-fieldset--valid" role="group" aria-labelledby="radio-legend radio-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="radio-legend">
        Légende pour l’ensemble des éléments en succès
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="1" type="radio" id="radio-1" name="radio">
            <label class="fr-label" for="radio-1">
                Libellé bouton radio 1
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="2" type="radio" id="radio-2" name="radio">
            <label class="fr-label" for="radio-2">
                Libellé bouton radio 2
            </label>
        </div>
    </div>
    <div class="fr-messages-group" id="radio-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="radio-message-error">Texte de succès</p>
    </div>
</fieldset>
```

:::

**Exemple de groupe de radios désactivés**

:::fr-accordion[Déplier pour voir le code]{id=code-radios-disabled}

```HTML
<fieldset class="fr-fieldset" disabled role="group" aria-labelledby="radio-legend radio-messages">
    <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="radio-legend">
        Légende pour l’ensemble des éléments désactivés
    </legend>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="1" type="radio" id="radio-1" name="radio">
            <label class="fr-label" for="radio-1">
                Libellé bouton radio 1
            </label>
        </div>
    </div>
    <div class="fr-fieldset__element">
        <div class="fr-radio-group">
            <input value="2" type="radio" id="radio-2" name="radio">
            <label class="fr-label" for="radio-2">
                Libellé bouton radio 2
            </label>
        </div>
    </div>
    <div class="fr-messages-group" id="radio-messages" aria-live="polite">
    </div>
</fieldset>
```

:::

---

### JavaScript

Le composant Bouton radio **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+radio+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Bouton radio
shortTitle: Accessibilité du Bouton radio
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Bouton radio.
shortDescription: Sélection d’une option unique
keywords: bouton radio, sélection, interface, formulaire, design système, DSFR, accessibilité, choix unique
cover: ../_asset/cover/cover.png
excerpt: Le composant Bouton radio permet de proposer à l’usager un choix unique parmi plusieurs options. Il est recommandé pour les listes de 2 à 5 éléments maximum.
summary: Ce composant est conçu pour faciliter le choix unique dans une interface, en particulier dans les formulaires. Il offre différentes dispositions et variations, y compris des versions enrichies avec pictogrammes. Il s’utilise en groupe, avec des libellés clairs et une hiérarchie visuelle cohérente. L’intégration respecte des règles d’ergonomie, d’accessibilité et d’uniformité éditoriale.
mesh:
  - component/checkbox
  - component/input
  - component/select
---

## Bouton radio

Le bouton radio est un élément d’interaction avec l’interface permettant à l’usager de réaliser un choix unique parmi plusieurs options.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

## Accessibilité

Le composant **Bouton radio** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Au passage du focus, le bouton radio actif reçoit le focus. Si aucun radio du groupe n’est sélectionné, c’est le premier radio de l’ensemble qui obtient le focus. Lorsque le focus est positionné sur un radio&nbsp;:

- `Espace`&nbsp;: Sélectionne le radio s’il n’est pas déjà sélectionné.
- `Flèche droite` ou `Flèche bas`&nbsp;: place le focus sur le prochain radio de l'ensemble, décoche le radio précédent s’il est sélectionné et coche le radio qui reçoit le focus. Si le focus est sur le dernier radio de l'ensemble, place le focus sur le premier radio de l'ensemble.
- `Flèche gauche` ou `Flèche haut`&nbsp;: place le focus sur le radio précédent de l’ensemble, décoche le radio précédemment sélectionné et coche le radio qui reçoit le focus. Si le focus est sur le premier radio de l'ensemble, place le focus sur le dernier radio de l’ensemble.

### Règles d’accessibilité

#### Intitulé pertinent : nom accessible

Un bouton radio doit avoir une **étiquette pertinente**. On doit comprendre l’option sans ambiguïté.

Son nom accessible est calculé par ordre de priorité à partir de&nbsp;:

- l’attribut `aria-labelledby`,
- l’attribut `aria-label`,
- l’élément `<label>`,
- l’attribut `title` en l’absence d’une autre méthode de nommage.

**Privilégier l’élément `<label>`** pour nommer le composant.

>[!CAUTION]
>Le RGAA exige une **liaison explicite** entre l’attribut `for` de l’élément `<label>` et l'attribut `id` du bouton radio.
>
>L’attribut `for` du label doit correspondre à l'attribut `id` de la case à cocher. La valeur de l’attribut `id` doit être unique dans la page.

La liaison explicite `for`/`id` permet :
- d’assurer une compatibilité avec l’ensemble des technologies d’assistance (ex. le contrôle vocal),
- de cocher ou décocher le bouton radio en cliquant sur l’étiquette et ainsi d’étendre la zone de clic.

#### Étiquette visible et accolée

L’étiquette est visible et accolée au bouton radio.

#### État désactivé

> [!WARNING]
> **L’état désactivé d’un bouton radio peut poser des problèmes d’utilisabilité et d’accessibilité pour les personnes handicapées** (personnes déficientes visuelles ainsi que les personnes qui ont un handicap cognitif ou mental).

La bordure et l’étiquette du bouton radio désactivé sont insuffisamment contrastées. Il ne s’agit néanmoins pas d’une non-conformité au RGAA (cas particulier).

#### Message d’information, d’avertissement ou d’erreur

Il existe différentes méthodes pour gérer les messages d’information, d’avertissement ou d’erreur d’un formulaire de manière accessible selon le contexte.

Il est possible d’indiquer l’information, l’avertissement ou l’erreur&nbsp;:
- dans l’étiquette du champ,
- dans un passage de texte avant le formulaire,
- dans un passage de texte relié au champ de saisie avec l’attribut `aria-describedby`,
- avec une <span lang="en">live region</span>&nbsp;: `role="alert"`, `role="status"`, `aria-live="assertive", aria-live="polite"` (dans certains contextes uniquement).

#### Champs obligatoires

- Ajouter une mention visible pour tout le monde au début du formulaire et utiliser l’attribut `required` pour indiquer que sélectionner un bouton radio est obligatoire.

#### Regroupement des boutons radio

- Les boutons radio doivent être regroupés dans un élément `<fieldset>` avec une légende `<legend>`.
  - La **légende** doit être visible, explicite et décrire le groupe d'options. Elle ne doit pas être en gras puisqu’elle n’est pas considérée ici comme le titre d’un regroupement de champs mais comme le libellé de l'ensemble d'options.
  - Si le **fieldset contient des messages** d’erreur, d'informations ou de succès, il doit être associé à un attribut `aria-labelledby` pour lier la légende et les messages. Les id des éléments doivent être séparés par un espace. Il faudra également ajouter l’attribut `role="group"` à l’élément `<fieldset>` pour améliorer le rendu des technologies d’assistance.
- **Les radios d’un groupe sont liés** par leur attribut `name`. Les radios d’un même groupe doivent avoir le même attribut `name`. Cela permet notamment aux personnes handicapées motrices de ne pas avoir à tabuler sur chaque option.

#### Bouton radio riche

Les images des boutons radio riches doivent être décoratives.

#### Contrastes de couleurs

Par défaut, le composant Bouton radio est suffisamment contrasté en thème clair et en thème sombre.

:::fr-table[Contrastes par défaut]{valign=top multiline=true}
| Thème |  Bordure | Point | Étiquette |
|------|-----|-----|-----|
|**Thème clair**| 14,9:1 | 14,9:1 | 18,1:1 |
|**Thème sombre**| 5,8:1 | 5,8:1 | 18,1:1 |
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
- **Couleurs** : 3.2, 3.3
- **Présentation de l’information** : 10.1, 10.2, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires** : 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.9
- **Navigation** : 12.9

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Spécification HTML – élément input](https://html.spec.whatwg.org/#the-input-element)
- [Spécification HTML – type radio](https://html.spec.whatwg.org/#checkbox-state-(type=radio))
- [Live regions ARIA&nbsp;: bonnes et mauvaises pratiques](https://access42.net/quand-utiliser-live-regions-aria/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/radio/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Bouton radio - Système de design</title>
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
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.legacy.css" rel="stylesheet">
    <link href="../../../dist/component/lin...
```

(Truncated for brevity. See source file for full HTML)
