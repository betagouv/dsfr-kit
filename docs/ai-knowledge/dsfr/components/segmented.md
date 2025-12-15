# DSFR Segmented Component

*Generated from local node_modules*

## Presentation

---
title: Contrôle segmenté
shortTitle: Contrôle segmenté
titleId: Segmented
description: Présentation du composant Contrôle segmenté permettant à l’usager de choisir une vue parmi plusieurs options d’affichage disponibles dans une interface.
shortDescription: Sélection de vues avec un contrôle segmenté.
keywords: contrôle segmenté, vue, affichage, interface, UX, UI, design system, libellé, navigation, accessibilité
cover: ./_asset/cover/cover.png
excerpt: Ce document présente le contrôle segmenté comme un moyen de basculer entre différentes vues d’un même contenu tout en assurant clarté et cohérence dans l’interface.
summary: Ce contenu décrit l’usage du contrôle segmenté dans les interfaces pour permettre à l’usager de basculer entre plusieurs types d’affichage d’un même contenu, comme une vue en liste ou en carte. Il insiste sur les bonnes pratiques à respecter telles que la limitation du nombre de segments, la nécessité d’un libellé clair pour chaque option et l’obligation d’une valeur par défaut. Ce guide s’adresse aux concepteurs et développeurs souhaitant garantir une navigation fluide, explicite et accessible.
mesh:
  - component/form
---

## Contrôle segmenté

Le contrôle segmenté est un élément d’interaction avec l’interface permettant à l'usager de choisir un type de vue parmi plusieurs options d'affichage disponibles.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=segmented--segmented}

### Quand utiliser ce composant ?

Utiliser le contrôle segmenté pour proposer différents types d’affichage d’une même vue (exemple : liste versus carte).

> [!NOTE]
> Le contrôle segmenté n’est pas un système de filtre et ne doit donc pas être utilisé comme tel. Préférer des tags sélectionnables ou listes déroulantes, selon les cas d’usage.

### Comment utiliser ce composant ?

- **Minimiser le nombre de segments proposés.** Il est recommandé de se limiter à 2 ou 3 bien que le maximum possible soit de 5.
- **Définir une valeur par défaut** qui sera la vue présentée à l’usager lors de son arrivée sur la page.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Sélectionner une valeur par défaut lorsque vous proposez le contrôle segmenté.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas proposer le contrôle segmenté sans valeur par défaut. Il faut obligatoirement une vue pré-sélectionnée pour l’usager.

:::

- **Conserver un libellé pour chaque segment** afin de rendre l’action réalisée par l’usager explicite. L’utilisation d’un segment avec une icône seule n’est pas autorisée.

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-2.png)

Conserver le libellé pour chaque segment. L’action réalisée par l’usager doit être explicite.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-2.png)

Ne pas proposer de segments sans libellé, avec icône seule.

:::

- **Harmoniser les segments** en utilisant le même format pour tous (avec ou sans icône). Il n'est pas autorisé de mélanger des segments de formats différents dans le même composant.

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-3.png)

Harmoniser les segments en utilisant le même format pour tous.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-3.png)

Ne pas mélanger des segments de formats différents.

:::

::::

- **Le changement de vue a une conséquence directe sur la page consultée**, un seul segment peut être sélectionné à la fois.

### Règles éditoriales

- **Rédiger des libellés de segment clairs et concis**. L’usager doit comprendre facilement ses options.
- Des libellés courts permettent également d’éviter que les éléments ne passent en vertical.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design du Contrôle segmenté
shortTitle: Design du Contrôle segmenté
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Contrôle segmenté.
shortDescription: Sélection de vues avec un contrôle segmenté.
keywords: contrôle segmenté, vue, affichage, interface, UX, UI, design system, libellé, navigation, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Ce document présente le contrôle segmenté comme un moyen de basculer entre différentes vues d’un même contenu tout en assurant clarté et cohérence dans l’interface.
summary: Ce contenu décrit l’usage du contrôle segmenté dans les interfaces pour permettre à l’usager de basculer entre plusieurs types d’affichage d’un même contenu, comme une vue en liste ou en carte. Il insiste sur les bonnes pratiques à respecter telles que la limitation du nombre de segments, la nécessité d’un libellé clair pour chaque option et l’obligation d’une valeur par défaut. Ce guide s’adresse aux concepteurs et développeurs souhaitant garantir une navigation fluide, explicite et accessible.
mesh:
  - component/form
---

## Contrôle segmenté

Le contrôle segmenté est un élément d’interaction avec l’interface permettant à l'usager de choisir un type de vue parmi plusieurs options d'affichage disponibles.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie du contrôle segmenté](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Une légende]{add='placé au-dessus ou à coté du composant'}

::dsfr-doc-pin[Un texte de description]{add='accompagnant la légende'}

::dsfr-doc-pin[Une icône]{add='placée à gauche du libellé uniquement'}

::dsfr-doc-pin[Un libellé explicite et court]{add='pour chaque segment' required=true}

:::

### Variations

Par défaut, le contrôle segmenté s’affiche horizontalement, en desktop comme en mobile. Toutefois, lorsque le contenu des segments est trop long, il bascule en affichage vertical. C’est pourquoi il est conseillé d’utiliser des libellés courts.

**Contrôle segmenté avec icônes**

::dsfr-doc-storybook{storyId=segmented--with-icon}

**Contrôlé segmenté avec légende**

- Placée au-dessus du composant (par défaut)

::dsfr-doc-storybook{storyId=segmented--default}

- Placée sur la même ligne que le composant

::dsfr-doc-storybook{storyId=segmented--legend-inline}

**Contrôlé segmenté avec légende et texte de description**

::dsfr-doc-storybook{storyId=segmented--hint}

### Tailles

Le contrôle segmenté est disponible en 2 tailles :

- SM pour small

::dsfr-doc-storybook{storyId=segmented--default args="{ size: sm }"}

- MD pour medium

::dsfr-doc-storybook{storyId=segmented--default}

> [!NOTE]
> Afin de garder une harmonie visuelle, en présence d’autres composants (type bouton, champs de saisie etc.), il est important de choisir la même taille que ces derniers (exemple : un bouton SM et un contrôle segmenté SM, côte à côte).

### États

**État actif**

L'état actif est signalé par un contour bleu.

**État désactivé**

L'état désactivé est signalé par le disabled-grey.

### Personnalisation

Le contrôle segmenté n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](../../../../segmented/_part/doc/index.md).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/dont-1.png)

Ne pas changer la couleur de bordure et/ou de fond du contrôle segmenté.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas changer la couleur du contour lorsque le segment est sélectionné.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code du Contrôle segmenté
shortTitle: Code du Contrôle segmenté
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Contrôle segmenté.
shortDescription: Sélection de vues avec un contrôle segmenté.
keywords: contrôle segmenté, vue, affichage, interface, UX, UI, design system, libellé, navigation, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Ce document présente le contrôle segmenté comme un moyen de basculer entre différentes vues d’un même contenu tout en assurant clarté et cohérence dans l’interface.
summary: Ce contenu décrit l’usage du contrôle segmenté dans les interfaces pour permettre à l’usager de basculer entre plusieurs types d’affichage d’un même contenu, comme une vue en liste ou en carte. Il insiste sur les bonnes pratiques à respecter telles que la limitation du nombre de segments, la nécessité d’un libellé clair pour chaque option et l’obligation d’une valeur par défaut. Ce guide s’adresse aux concepteurs et développeurs souhaitant garantir une navigation fluide, explicite et accessible.
mesh:
  - component/form
---

## Contrôle segmenté

Le contrôle segmenté est un élément d’interaction avec l’interface permettant à l'usager de choisir un type de vue parmi plusieurs options d'affichage disponibles.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Contrôle segmenté** permet à l'utilisateur de choisir une option parmi plusieurs segments.
Sa structure est la suivante :

- Le conteneur du contrôle segmenté doit être un élément HTML `<fieldset>` défini par la classe `fr-segmented`.
- La légende du contrôle segmenté est un élément HTML `<legend>` défini par la classe `fr-segmented__legend`.
- La liste des segments est un élément HTML `<div>` défini par la classe `fr-segmented__elements`.
- Chaque segment est contenu dans un élément HTML `<div>` défini par la classe `fr-segmented__element`.
- Chaque segment est un élément `<input>` de type `radio` associé à un `<label>` avec la classe `fr-label`.
- Une description additionnelle, optionnelle, peut être ajoutée dans la légende, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.

**Exemple de structure HTML simple**

```HTML
<fieldset class="fr-segmented">
    <legend class="fr-segmented__legend">
        Légende
        <span class="fr-hint-text">Description additionnelle</span>
    </legend>
    <div class="fr-segmented__elements">
        <div class="fr-segmented__element">
            <input value="1" type="radio" id="segmented-1" name="segmented">
            <label class="fr-label" for="segmented-1">
                Libellé
            </label>
        </div>
        <div class="fr-segmented__element">
            <input value="2" checked type="radio" id="segmented-2" name="segmented">
            <label class="fr-label" for="segmented-2">
                Libellé
            </label>
        </div>
        <div class="fr-segmented__element">
            <input value="3" type="radio" id="segmented-3" name="segmented">
            <label class="fr-label" for="segmented-3">
                Libellé
            </label>
        </div>
    </div>
</fieldset>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------|----------|
| Core       | Oui         |          |
| Form       | Oui         |          |
| Segmented  | Oui         |          |
| Utility    | Non         | Uniquement pour l'ajout d'icône |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/segmented/segmented.min.css" rel="stylesheet">
```

#### Variante de taille

Le contrôle segmenté est disponible en deux variantes de tailles pour s'adapter à différents contextes d'utilisation.
Pour appliquer une variante de taille, ajoutez une des classes suivantes à l'élément `<fieldset class="fr-segmented">` :

- En taille MD : par défaut.
- En taille SM : définie par la classe `fr-segmented--sm`.

**Exemple de variante de taille**

```HTML
<fieldset class="fr-segmented fr-segmented--sm">
  <!-- Contenu du contrôle segmenté -->
</fieldset>
```

#### Variante avec légende en ligne

Le contrôle segmenté par défaut est affiché en dessous de sa légende mais il est possible de les afficher sur une même ligne avec l'utilisation de la classe `fr-segmented__legend--inline` sur l'élément `<legend>`.

**Exemple de contrôle segmenté avec légende en ligne**

```HTML
<fieldset class="fr-segmented">
    <legend class="fr-segmented__legend fr-segmented__legend--inline">
        Légende
    </legend>
    <div class="fr-segmented__elements">
        <!-- Contenu du contrôle segmenté -->
    </div>
</fieldset>
```

#### Variante sans légende visible

La légende `<legend>` du contrôle segmenté est obligatoire mais peut être positionné hors écran avec l'utilisation de la classe `fr-segmented--no-legend` sur l'élément `<fieldset>`.

**Exemple de contrôle segmenté sans légende visible**

```HTML
<fieldset class="fr-segmented fr-segmented--no-legend">
    <!-- Contenu du contrôle segmenté -->
</fieldset>
```

#### Variante avec icônes

Les libellés des segment du contrôle segmenté peuvent avoir une icône juxtaposée à gauche, elle est ajoutée via la **classe utilitaire d'icône** `fr-icon--NOM-ICONE` (voir [Icônes](../../../../../core/_part/doc/icon/index.md)).

**Exemple de variante avec icônes**

:::fr-accordion[Déplier pour voir le code]{id=code-segmented-icons}

```HTML
<fieldset class="fr-segmented">
    <legend class="fr-segmented__legend">
        Légende
    </legend>
    <div class="fr-segmented__elements">
        <div class="fr-segmented__element">
            <input value="1" type="radio" id="segmented-icon-1" name="segmented-icon">
            <label class="fr-icon-road-map-line fr-label" for="segmented-icon-1">
                Libellé
            </label>
        </div>
        <div class="fr-segmented__element">
            <input value="2" checked type="radio" id="segmented-icon-2" name="segmented-icon">
            <label class="fr-icon-road-map-line fr-label" for="segmented-icon-2">
                Libellé
            </label>
        </div>
        <div class="fr-segmented__element">
            <input value="3" type="radio" id="segmented-icon-3" name="segmented-icon">
            <label class="fr-icon-road-map-line fr-label" for="segmented-icon-3">
                Libellé
            </label>
        </div>
    </div>
</fieldset>
```

:::

---

### JavaScript

Le composant Contrôle segmenté nécessite l'utilisation de JavaScript pour son fonctionnement de base, notamment pour gérer le passage à la ligne des éléments lorsque l'espace disponible est insuffisant. La classe `fr-segmented--vertical` est ainsi ajoutée par le JavaScript lorsqu'il est nécessaire de passer en mode vertical.

#### Installation du JavaScript

Chaque composant utilisant JavaScript possède un fichier JS spécifique et requiert le fichier JS du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/segmented/segmented.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/segmented/segmented.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le comportement fonctionne automatiquement.

#### Instances

Sur le contrôle segmenté, l'élément suivant est instancié :

- Le composant "segmented", via la classe : `fr-segmented`
- Chaque "segmentedElement" du composant, via le sélecteur : `fr-segmented__element input`

Une fois chargé, le JS ajoute l'attribut `data-fr-js-segmented="true"` sur les éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composant en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### segmented

:::fr-table[resize]{valign=top scroll=false}

| | |
|------|-----|
| **Description** | Permet de mettre à jour le composant après un changement de libellé. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(segmented).segmented.resize()` |

:::

:::fr-table[node]{valign=top scroll=false}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(segmented).segmented.node` |

:::

##### segmentedElement

:::fr-table[node]{valign=top scroll=false}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(segmentedElement).segmentedElement.node` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+segmented+)


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Contrôle segmenté
shortTitle: Accessibilité du Contrôle segmenté
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Contrôle segmenté.
shortDescription: Sélection de vues avec un contrôle segmenté.
keywords: contrôle segmenté, vue, affichage, interface, UX, UI, design system, libellé, navigation, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Ce document présente le contrôle segmenté comme un moyen de basculer entre différentes vues d’un même contenu tout en assurant clarté et cohérence dans l’interface.
summary: Ce contenu décrit l’usage du contrôle segmenté dans les interfaces pour permettre à l’usager de basculer entre plusieurs types d’affichage d’un même contenu, comme une vue en liste ou en carte. Il insiste sur les bonnes pratiques à respecter telles que la limitation du nombre de segments, la nécessité d’un libellé clair pour chaque option et l’obligation d’une valeur par défaut. Ce guide s’adresse aux concepteurs et développeurs souhaitant garantir une navigation fluide, explicite et accessible.
mesh:
  - component/form
---

## Contrôle segmenté

Le contrôle segmenté est un élément d’interaction avec l’interface permettant à l'usager de choisir un type de vue parmi plusieurs options d'affichage disponibles.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Contrôle segmenté** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur un segment&nbsp;:

- `Flèche droite` ou `Flèche du bas`&nbsp;: sélectionne le segment suivant.
- `Flèche gauche` ou `Flèche du haut`&nbsp;: sélectionne le segment précédent.

### Règles d’accessibilité

L’ensemble des règles d’accessibilité du [champs de saisie](../../../../input/_part/doc/accessibility/index.md) doivent être respectées.

#### Structuration

- Le contrôle segmenté est contenu dans un élément `<fieldset>` avec élément `<legend>`.
- Chaque segment est un `<input>` de type `radio`.
- Les **segments d’un contrôle segmenté sont liés** par leur attribut `name` qui doit être identique.
- Le **libellé des segments** doit être explicite et décrire clairement l'option que le segment représente.

#### Contrastes de couleurs

Le composant **Contrôle segmenté** est suffisamment contrasté en thème clair et en thème sombre.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Contrôle segmenté.

---

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires&nbsp;:** 11.1, 11.2, 11.4, 11.5, 11.6, 11.7
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/segmented/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Contrôle segmenté - Système de design</title>
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
    <link href="../../../dist/component/segmented/segmented.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../dist/...
```

(Truncated for brevity. See source file for full HTML)
