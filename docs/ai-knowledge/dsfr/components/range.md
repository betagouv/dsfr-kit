# DSFR Range Component

*Generated from local node_modules*

## Presentation

---
title: Curseur
shortTitle: Curseur
titleId: Range
description: Présentation du composant Curseur permettant à l’usager de sélectionner une valeur entre un minimum et un maximum de manière intuitive.
shortDescription: Sélection d’une valeur sur une échelle
keywords: curseur, range, sélection, valeur, interface, DSFR, accessibilité, filtre, composant
cover: ./_asset/cover/cover.png
excerpt: Le composant Curseur permet à l’usager de définir une valeur dans une plage donnée, souvent utilisée pour ajuster un paramètre de façon dynamique et visuelle.
summary: Le curseur est utile lorsque la saisie d’une valeur approximative est suffisante, comme pour filtrer des contenus ou ajuster des préférences. Il propose différentes variantes - simple, double ou cranté, avec ou sans affichage des bornes. Non personnalisable, il est conçu pour un usage fluide et accessible, avec retour visuel en temps réel sur les valeurs sélectionnées.
mesh:
  - component/input
  - component/select
  - component/radio
---

## Curseur

Le curseur est un élément d’interaction avec l’interface permettant à l’usager de délimiter manuellement une sélection par rapport à une valeur minimale et maximale.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=range--range}

### Quand utiliser ce composant ?

**Utiliser un curseur lorsque la valeur saisie est imprécise ou à déterminer**, par exemple, la luminosité d’un écran. Il sert à montrer en temps réel l’impact des options choisies et à éclairer la prise de décision.

> [!NOTE]
> Préférer un [champ de saisie](../../../input/_part/doc/index.md) ou une [liste déroulante](../../../select/_part/doc/index.md) lorsque la valeur à renseigner est précise, comme une année de naissance par exemple, ou que le nombre de valeurs spécifiques parmi lesquelles choisir est important.

Le curseur n’a pas vocation à communiquer un état d’avancement quelconque. Pour ce type d’usage, utiliser l’[indicateur d’étapes](../../../stepper/_part/doc/index.md).

### Comment utiliser ce composant ?

- **Eviter d’intégrer un curseur au sein d’un formulaire**, sauf cas exceptionnel.
- **Lier l’usage du curseur à une actualisation du résultat en temps réel**, en fonction de la valeur sélectionnée. Par exemple, en tant que filtre déterminant l’affichage de donnée dans une liste ou un tableau.
- **Considérer que la valeur du curseur est toujours en nombre**. Des unités peuvent ensuite y être ajoutées (k€, €, kg, etc).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Proposer une fourchette de valeurs exclusivement en nombre.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas proposer des valeurs littérales et approximatives.

:::

::::


- **Proposer des échelles de valeur adaptées,** ni trop petites ni trop larges.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-2.png)

Utiliser des cases à cocher ou des boutons radios, en cas d’échelle de valeur trop petite.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-2.png)

Ne pas proposer une échelle de valeur non-adaptée, ici trop petite.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-3.png)

Proposer des échelles de valeur adaptées, ni trop petites ni trop larges.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-3.png)

Ne pas proposer une échelle de valeur non-adaptée, ici trop grande.

:::

::::

- **Utiliser le curseur lorsque vous avez l’espace de le faire**, notamment lorsque l’échelle de valeur est large. Si l’espace est limité, un [champ de saisie](../../../input/_part/doc/index.md) est certainement un meilleur choix.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-4.png)

Utiliser un champ de saisie est certainement un meilleur choix lorsque l’échelle de valeur est large et l’espace limité.

:::

::::

### Règles éditoriales

Le curseur n’est régit par aucune règle éditoriale spécifique.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design du curseur
shortTitle: Design du Curseur
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Curseur.
shortDescription: Sélection d’une valeur sur une échelle
keywords: curseur, range, sélection, valeur, interface, DSFR, accessibilité, filtre, composant
cover: ../_asset/cover/cover.png
excerpt: Le composant Curseur permet à l’usager de définir une valeur dans une plage donnée, souvent utilisée pour ajuster un paramètre de façon dynamique et visuelle.
summary: Le curseur est utile lorsque la saisie d’une valeur approximative est suffisante, comme pour filtrer des contenus ou ajuster des préférences. Il propose différentes variantes - simple, double ou cranté, avec ou sans affichage des bornes. Non personnalisable, il est conçu pour un usage fluide et accessible, avec retour visuel en temps réel sur les valeurs sélectionnées.
mesh:
  - component/input
  - component/select
  - component/radio
---

## Curseur

Le curseur est un élément d’interaction avec l’interface permettant à l’usager de délimiter manuellement une sélection par rapport à une valeur minimale et maximale.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie du bouton](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un libellé]{required=true add='associé au curseur'}

::dsfr-doc-pin[Un texte de description additionnel]

::dsfr-doc-pin[Une piste avec poignée et valeur sélectionnée]{required=true}

::dsfr-doc-pin[Une valeur minimale et maximale]

:::

### Variations

**Curseur simple**

::dsfr-doc-storybook{storyId=range--range}

- Utiliser le curseur simple pour permettre à l’usager de choisir une plage, en partant d’un minimum fixe prédéfini.

**Curseur double**

::dsfr-doc-storybook{storyId=range--range args="{ isDouble: true }"}

- Utiliser le curseur double pour permettre à l’usager de choisir une plage, sans valeur prédéfinie.

**Curseur cranté**

::dsfr-doc-storybook{storyId=range--range args="{ isStep: true }"}

- Utiliser le curseur cranté pour permettre à l’usager de choisir une plage, en contraignant les valeurs possibles.

**Sans indicateurs minimum et maximum**

::dsfr-doc-storybook{storyId=range--range args="{ indicators: false }"}

**Avec préfixe et suffixe**

::dsfr-doc-storybook{storyId=range--range args="{ prefix: prefix, suffix: suffix }"}

### Tailles

Le curseur est disponible en 2 tailles :

- SM pour small
- MD pour medium

En desktop, la taille minimum est de 180 px et la taille maximum est de 588 px.

En mobile, la taille minimum est de 136 px et la taille maximum est de 288 px mais il est conseillé de préférer la version MD.

### États

**État désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec le curseur.

::dsfr-doc-storybook{storyId=range--range args="{ disabled: true }"}

> [!WARNING]
> N’utiliser cet état que très ponctuellement, pour indiquer à l’usager qu’il doit procéder à une action en amont par exemple.

**Etat d’erreur**

L'état d’erreur est signalé par un changement de couleur du libellé ainsi que l’affichage d’une ligne rouge (cf. couleurs fonctionnelles : le rouge est la couleur de l’état erreur) et d’un message d’erreur en-dessous du composant.

::dsfr-doc-storybook{storyId=range--range args="{ status: error }"}

**Etat de succès**

L'état de succès est signalé par un changement de couleur du libellé ainsi que l’affichage d’une ligne verte (cf. couleurs fonctionnelles : le vert est la couleur de l’état succès) et d’un message de succès en-dessous du composant.

### Personnalisation

Le curseur n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - [voir la structure du composant](#curseur).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur de la piste.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas personnaliser la forme de la poignée.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code du Curseur
shortTitle: Code du Curseur
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Curseur.
shortDescription: Sélection d’une valeur sur une échelle
keywords: curseur, range, sélection, valeur, interface, DSFR, accessibilité, filtre, composant
cover: ../_asset/cover/cover.png
excerpt: Le composant Curseur permet à l’usager de définir une valeur dans une plage donnée, souvent utilisée pour ajuster un paramètre de façon dynamique et visuelle.
summary: Le curseur est utile lorsque la saisie d’une valeur approximative est suffisante, comme pour filtrer des contenus ou ajuster des préférences. Il propose différentes variantes - simple, double ou cranté, avec ou sans affichage des bornes. Non personnalisable, il est conçu pour un usage fluide et accessible, avec retour visuel en temps réel sur les valeurs sélectionnées.
mesh:
  - component/input
  - component/select
  - component/radio
---

## Curseur

Le curseur est un élément d’interaction avec l’interface permettant à l’usager de délimiter manuellement une sélection par rapport à une valeur minimale et maximale.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Curseur** permet à l'utilisateur de sélectionner une valeur dans une plage définie.
Sa structure est la suivante :

- Le conteneur global du composant curseur doit être un élément HTML `<div>` défini par la classe `fr-range-group`.
- Le libellé du curseur, obligatoire, doit être un élément HTML `<label>` avec la classe `fr-label`.
  - Son attribut `id` doit être associé à l'attribut `aria-labelledby` du curseur.
- Une description additionnelle du curseur, optionnelle, peut être ajoutée dans le libellé, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- L'élément curseur est contenu dans un élément HTML `<div>` défini par la classe `fr-range`.
- La valeur courante affichée du curseur est un élément HTML `<span>` défini par la classe `fr-range__output`.
- Le curseur est un élément HTML `<input>` de type `range` défini par la classe `fr-range__input`.
  - La valeur par défaut du curseur est définie par l'attribut `value`.
  - Les valeurs minimales et maximale du curseur autorisées sont définies par les attribut `min` et `max` du curseur.
  - Le pas du curseur est défini par l'attribut `step`.
- Les valeurs minimales et maximales affichées, optionnelles, sont des éléments HTML `<span>` définis par les classes `fr-range__min` et `fr-range__max` et disposant d'un attribut `aria-hidden="true"`.
- Un message d'erreur ou de succès peut être associé au curseur en utilisant un élément HTML `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`.
  - Son attribut `id` doit être associé à l'attribut `aria-describedby` du curseur.
  - Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.

**Exemple de structure HTML**

```HTML
<div class="fr-range-group">
    <label id="range-label" class="fr-label">
        Libellé
        <span class="fr-hint-text">Texte de description additionnel, valeur de 0 à 100.</span>
    </label>
    <div class="fr-range">
        <span class="fr-range__output">50</span>
        <input name="range" type="range" aria-labelledby="range-label" max="100" value="50" aria-describedby="range-messages">
        <span class="fr-range__min" aria-hidden="true">0</span>
        <span class="fr-range__max" aria-hidden="true">100</span>
    </div>
    <div class="fr-messages-group" id="range-messages" aria-live="polite">
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
| Range      | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/range/range.min.css" rel="stylesheet">
```

#### Variante de taille

Le curseur est disponible en deux variantes de tailles pour s'adapter à différents contextes d'utilisation.
Pour appliquer une variante de taille, ajoutez une des classes suivantes à l'élément `<div class="fr-range">` :

- En taille MD : par défaut.
- En taille SM : définie par la classe `fr-range--sm`.

**Exemple de variante de taille**

```HTML
<div class="fr-range-group">
    <label id="range-sm-label" class="fr-label">Libellé</label>
    <div class="fr-range fr-range--sm">
      <!-- Contenu du curseur -->
    </div>
</div>
```

#### Variante de curseur cranté

Le curseur peut afficher des crans avec l'utilisation de la classe `fr-range--step`.

**Exemple de curseur cranté**

```HTML
<div class="fr-range-group">
    <label id="range-step-label" class="fr-label">Libellé</label>
    <div class="fr-range fr-range--step">
      <!-- Contenu du curseur -->
    </div>
</div>
```

#### Variante de curseur avec préfixe et suffixe

Le curseur peut afficher des préfixe et suffixe autour des valeurs courante, minimale et maximale avec l'utilisation des attributs `data-fr-prefix` et `data-fr-suffix` sur l'élément `<div class="fr-range">`.

**Exemple de curseur avec préfixe et suffixe**

```HTML
<div class="fr-range-group">
    <label id="range-prefix-suffix-label" class="fr-label">Libellé</label>
    <div class="fr-range" data-fr-prefix="~" data-fr-suffix="%">
      <!-- Contenu du curseur -->
    </div>
</div>
```

#### Variantes d'états

Les états d'erreur/succès/désactivé sont gérés au niveau du groupe.
Pour ajouter un état à un curseur, ajoutez une des classes suivantes :

- La classe `fr-range-group--error` : Indique une erreur.
- La classe `fr-range-group--valid` : Indique un succès.
- L'attribut `fr-range-group--disabled` : Indique un état désactivé.
  - Dans le cas du curseur désactivé l'ajout de l'attribut `disabled` sur le ou les éléments `<input>` est nécessaire.

Un message d'erreur ou de succès doit être ajouté dans un bloc `fr-messages-group` à la fin du groupe du curseur et doit être lié au curseur via un attribut `aria-describedby`.

**Exemple de curseur avec erreur**

:::fr-accordion[Déplier pour voir le code]{id=code-range-erreur}

```HTML
<div class="fr-range-group fr-range-group--error">
    <label id="range-error-label" class="fr-label">
        Libellé
        <span class="fr-hint-text">Texte de description additionnel, valeur de 0 à 100.</span>
    </label>
    <div class="fr-range">
        <span class="fr-range__output">50</span>
        <input id="range-error" name="range-error" type="range" aria-labelledby="range-error-label" max="100" value="50" aria-describedby="range-error-messages">
        <span class="fr-range__min" aria-hidden="true">0</span>
        <span class="fr-range__max" aria-hidden="true">100</span>
    </div>
    <div class="fr-messages-group" id="range-error-messages" aria-live="polite">
        <p class="fr-message fr-message--error" id="range-error-message-error">Valeur sélectionnée impossible</p>
    </div>
</div>
```

:::

**Exemple de curseur avec succès**

:::fr-accordion[Déplier pour voir le code]{id=code-range-succes}

```HTML
<div class="fr-range-group fr-range-group--succes">
    <label id="range-error-label" class="fr-label">
        Libellé
        <span class="fr-hint-text">Texte de description additionnel, valeur de 0 à 100.</span>
    </label>
    <div class="fr-range">
        <span class="fr-range__output">50</span>
        <input name="range-error" type="range" aria-labelledby="range-error-label" max="100" value="50" aria-describedby="range-error-messages">
        <span class="fr-range__min" aria-hidden="true">0</span>
        <span class="fr-range__max" aria-hidden="true">100</span>
    </div>
    <div class="fr-messages-group" id="range-error-messages" aria-live="polite">
        <p class="fr-message fr-message--valid" id="select-valid-message-valid">Texte de validation</p>
    </div>
</div>
```

:::

**Exemple de curseur désactivée**

:::fr-accordion[Déplier pour voir le code]{id=code-range-disabled}

```HTML
<div class="fr-range-group fr-range-group--disabled">
    <label id="range-disabled-label" class="fr-label">
        Libellé
        <span class="fr-hint-text">Texte de description additionnel, valeur de 0 à 100.</span>
    </label>
    <div class="fr-range fr-range--double">
        <span class="fr-range__output">20</span>
        <input name="range-disabled" type="range" aria-labelledby="range-disabled-label" max="100" value="20" disabled aria-describedby="range-disabled-messages">
        <span class="fr-range__min" aria-hidden="true">0</span>
        <span class="fr-range__max" aria-hidden="true">100</span>
    </div>
    <div class="fr-messages-group" id="range-disabled-messages" aria-live="polite">
    </div>
</div>
```

:::

#### Variante de curseur double

Le curseur double permet de disposer de deux poignées de selection pour les valeurs minimale et maximale par l'ajout d'un second élément HTML `<input>` de type `range`.

**Exemple de curseur double**

```HTML
<div class="fr-range-group">
    <label id="range-double-label" class="fr-label">
        Libellé
        <span class="fr-hint-text">Texte de description additionnel, valeur de 0 à 100.</span>
    </label>
    <div class="fr-range fr-range--double">
        <span class="fr-range__output">25</span>
        <input name="range-double" type="range" aria-labelledby="range-double-label" max="100" value="25" aria-describedby="range-double-messages">
        <input name="range-double-2" type="range" aria-labelledby="range-double-label" max="100" value="75" aria-describedby="range-double-messages">
        <span class="fr-range__min" aria-hidden="true">0</span>
        <span class="fr-range__max" aria-hidden="true">100</span>
    </div>
    <div class="fr-messages-group" id="range-double-messages" aria-live="polite">
    </div>
</div>
```

---

### JavaScript

#### Installation du JavaScript

Pour fonctionner, le composant curseur nécessite l'utilisation de JavaScript.
Chaque composant utilisant JavaScript possède un fichier JS spécifique et requiert le fichier JS du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/range/range.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/range/range.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur le curseur, les éléments suivants sont instanciés :

- Le conteneur, via la classe : `fr-range`
- Le ou les curseurs dans leur conteneur, via la classe : `fr-range` et les éléments `<input>` de type `<range>`
- La valeur courante, via la classe : `fr-range__output`
- Les valeurs minimale et maximale, via les classes `fr-range__min` et `fr-range__max`

Une fois chargé, le JS ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composant en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_TAB');
dsfr(elem).range.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

###### range

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement du curseur est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).range.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).range.node` |

:::

###### rangeInput

:::fr-table[value]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Retourne la valeur courante du curseur. |
| **Type** | property |
| **Retour** | Number |
| **Exemple** | `dsfr(elem).rangeInput.value` |

:::

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement du curseur est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).rangeInput.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).rangeInput.node` |

:::

###### rangeOutput

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement du curseur est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).rangeOutput.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).rangeOutput.node` |

:::

###### rangeLimit

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement du curseur est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).rangeLimit.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).rangeLimit.node` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+range+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Curseur
shortTitle: Accessibilité du Curseur
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Curseur.
shortDescription: Sélection d’une valeur sur une échelle
keywords: curseur, range, sélection, valeur, interface, DSFR, accessibilité, filtre, composant
cover: ../_asset/cover/cover.png
excerpt: Le composant Curseur permet à l’usager de définir une valeur dans une plage donnée, souvent utilisée pour ajuster un paramètre de façon dynamique et visuelle.
summary: Le curseur est utile lorsque la saisie d’une valeur approximative est suffisante, comme pour filtrer des contenus ou ajuster des préférences. Il propose différentes variantes - simple, double ou cranté, avec ou sans affichage des bornes. Non personnalisable, il est conçu pour un usage fluide et accessible, avec retour visuel en temps réel sur les valeurs sélectionnées.
mesh:
  - component/input
  - component/select
  - component/radio
---

## Curseur

Le curseur est un élément d’interaction avec l’interface permettant à l’usager de délimiter manuellement une sélection par rapport à une valeur minimale et maximale.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Curseur** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur le curseur&nbsp;:

- `Flèche gauche` ou `Flèche bas` : diminue la valeur du curseur.
- `Flèche droite` ou `Flèche haut` : augmente la valeur du curseur.

### Règles d’accessibilité

#### Intitulé pertinent : nom accessible

Un curseur doit avoir une **étiquette pertinente**. On doit en comprendre la fonction sans ambiguïté.

Son nom accessible est calculé par ordre de priorité à partir de&nbsp;:

- l’attribut `aria-labelledby`,
- l’attribut `aria-label`,
- l’élément `<label>`,
- l’attribut `title` en l’absence d’une autre méthode de nommage.

##### Curseur simple
Dans le cas du curseur simple, utiliser l’élément `<label>` avec une **liaison explicite** entre l’attribut `for` de l’élément `<label>` et l'attribut `id`.

Préciser les valeurs minimum et maximale dans le texte de description additionnel.

##### Curseur double

Pour le curseur double avec deux `input type="range"`, on peut utiliser l’attribut `aria-labelledby` ou l’attribut `aria-label`.

En cas d’utilisation de l’attribut `aria-labelledby`, le texte additionnel doit être très explicite pour permettre de comprendre qu’il y a deux curseurs (un minimum / un maximum).

Si `aria-label` est la méthode retenue, il faudra veiller à ce que le contenu de l’étiquette visible soit bien repris.

Exemple&nbsp;: `aria-label="[Minimum - Label Texte de description additionnel]"` et `aria-label="[Maximum - Label Texte de description additionnel]"`

#### Étiquette visible et accolée

L’étiquette est visible et accolée au curseur.

#### État désactivé

> [!WARNING]
> **L’état désactivé du curseur peut poser des problèmes d’utilisabilité et d’accessibilité pour les personnes handicapées** (personnes déficientes visuelles ainsi que les personnes qui ont un handicap cognitif ou mental).

Les éléments du curseur désactivé sont insuffisamment contrastés. Il ne s’agit néanmoins pas d’une non-conformité au RGAA (cas particulier).

#### Message d’information, d’avertissement ou d’erreur

Il existe différentes méthodes pour gérer les messages d’information, d’avertissement ou d’erreur d’un formulaire de manière accessible selon le contexte.

Il est possible d’indiquer l’information, l’avertissement ou l’erreur&nbsp;:
- dans l’étiquette du champ,
- dans un passage de texte avant le formulaire,
- dans un passage de texte relié au champ de saisie avec l’attribut `aria-describedby`,
- avec une <span lang="en">live region</span>&nbsp;: `role="alert"`, `role="status"`, `aria-live="assertive", aria-live="polite"` (dans certains contextes uniquement).

#### Contrastes de couleurs

Le composant Curseur est suffisamment contrasté en thème clair et en thème sombre.

---

### Restitution par les lecteurs d’écran

L’input type="range" est bien supporté par les différents lecteurs d’écran.

Il est vocalisé «&nbsp;curseur&nbsp;» (VoiceOver, TalkBack), «&nbsp;potentiomètre&nbsp;» (Narrateur, NVDA, JAWS).

Par défaut, les lecteurs d’écran restituent le **nom, la description, l’état et le type**. L’ordre peut varier en fonction des lecteurs d’écran et de leur configuration.

#### Restitution de l'état désactivé

L’attribut `disabled` est restitué différemment selon les lecteurs d’écran&nbsp;:

- VoiceOver macOS et iOS&nbsp;: «&nbsp;estompé&nbsp;»
- NVDA et JAWS&nbsp;: «&nbsp;bouton non disponible&nbsp;»
- Narrateur et Talkback &nbsp;: «&nbsp;bouton désactivé&nbsp;»

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Spécification HTML – élément input](https://html.spec.whatwg.org/#the-input-element)
- [Spécification HTML – type range](https://html.spec.whatwg.org/#range-state-(type=range))


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/range/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Curseur - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/component/range/range.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/component/range/range.legacy.css" rel="stylesheet">
    <link href="../../../dist/core/c...
```

(Truncated for brevity. See source file for full HTML)
