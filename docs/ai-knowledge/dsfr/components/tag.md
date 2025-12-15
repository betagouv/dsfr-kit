# DSFR Tag Component

*Generated from local node_modules*

## Presentation

---
title: Tag
shortTitle: Tag
titleId: Tag
description: Présentation du composant Tag destiné à la catégorisation ou au filtrage de contenus dans une interface.
shortDescription: Le tag sert à classer ou filtrer les contenus.
keywords: tag, composant, design system, catégorisation, filtre, accessibilité, UI, UX, badge, interface, contenu
cover: ./_asset/cover/cover.png
excerpt: Le tag est un composant utilisé pour classer ou filtrer des contenus à l'aide de mots clés. Il s'adapte selon le contexte d'utilisation et respecte des règles éditoriales précises.
summary: Ce contenu présente le composant Tag dans un design system. Il explique ses usages principaux, notamment pour la catégorisation de contenus ou comme filtre interactif dans les interfaces. Des conseils pratiques et règles éditoriales y sont fournis pour garantir une intégration cohérente et accessible. Ce guide s’adresse aux designers et développeurs travaillant sur des interfaces nécessitant une organisation claire et intuitive de l’information.
mesh:
  - component/badge
  - component/card
---

## Tag

Le tag est un élément d’indication ou d’interaction (selon les contextes) permettant de catégoriser, classer, organiser les contenus d’un site à l’aide de mots clés. Il aide les usagers à rechercher et à trouver facilement une information.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=tag--tag}

### Quand utiliser ce composant ?

- **Utiliser le tag en l’associant à un contenu** (carte, en-tête etc.) pour le catégoriser (par thème, sujet, type de contenu etc). Dans ce contexte, le tag peut être cliquable ou non cliquable.

> [!NOTE]
> Bien différencier le tag du [badge](../../../badge/_part/doc/index.md). Le tag ne sert pas à donner le statut du contenu auquel il est associé.<br>
> Il ne sert pas non plus à donner des informations de complément à la catégorisation (auteur, date, lieu par exemple). Pour ce faire, utiliser l’élément « détail » prévu sur [les cartes](../../../card/_part/doc/index.md), et la typo XS « mention » pour les page de contenu.

- **Utiliser le tag en tant que filtre**, dans une page liste ou de recherche par exemple. Dans ce contexte, le tag peut être sélectionnable ou supprimable.

### Comment utiliser ce composant ?

- **Utiliser le tag non cliquable** pour afficher une information sur un contenu.
- **Utiliser le tag cliquable** pour donner accès à une page avec des contenus associés à ce tag (liste de contenus, liste de résultats de recherche etc).
- **Utiliser le tag sélectionnable** pour permettre d’activer ou désactiver un filtre.
- **Utiliser le tag supprimable** pour permettre de désactiver un filtre. Il sert de rappel à un filtre qui a préalablement été coché dans une sidebar ou une liste déroulante.
- **Limiter le nombre de tags proposés au sein d’un groupe** pour ne pas noyer l’usager d’informations ou, dans le contexte de filtres, lui permettre de rapidement scanner la liste disponible.
- **Préférer l’usage de tags supprimables associés à une liste déroulantes** plutôt que d’un groupe de tags sélectionnables lorsque leur nombre excède 6 tags.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/use/do-1.png)

Utiliser des tags supprimables associés à une liste déroulante dès lors qu’il y a plus de 6 options possibles.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](./_asset/use/dont-1.png)

Ne pas utiliser plus de 6 tags sélectionnables pour un même filtre.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-2.png)

Ne pas utiliser un tag pour mettre en forme du contenu.

:::

::::

### Règles éditoriales

- **Préférer des libellés courts et clairs** pour que l’information relayée par le tag soit facilement identifiable de l’usager.
- **Construire des libellés en base d’un mot-clé ou d’une expression** permettant de catégoriser le contenu auquel les tags sont associés.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/edit/do-1.png)

Penser des libellés pertinents, qui vont à l’essentiel.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](./_asset/edit/dont-1.png)

Ne pas proposer des libellés longs et complexes.

:::

::::

## Design

---
boost: 0
sitemap:
  noindex: true
title: Design du Tag
shortTitle: Design du Tag
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Tag.
shortDescription: Le design du tag décliné selon ses usages.
keywords: tag, design system, composant, UI, UX, accessibilité, variations, états, personnalisation, DSFR
cover: ../_asset/cover/cover.png
excerpt: Ce document décrit la structure visuelle et interactive du composant Tag, ses différentes variantes, tailles, états et possibilités de personnalisation dans un design system.
summary: Ce contenu présente en détail le design du composant Tag, utilisé pour catégoriser ou filtrer des contenus. Il couvre les éléments constitutifs du tag, ses différentes variations (cliquable, sélectionnable, supprimable), les tailles disponibles, les états interactifs (survol, cliqué) et les règles de personnalisation. Ce guide s’adresse aux designers UI souhaitant intégrer le composant dans des interfaces cohérentes et accessibles, tout en respectant les standards du système de design.
mesh:
  - component/badge
  - component/card
---

## Tag

Le tag est un élément d’indication ou d’interaction (selon les contextes) permettant de catégoriser, classer, organiser les contenus d’un site à l’aide de mots clés. Il aide les usagers à rechercher et à trouver facilement une information.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie du tag](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Une icône]

::dsfr-doc-pin[Un fond de couleur]{required=true}

::dsfr-doc-pin[Un libellé]{required=true}

::dsfr-doc-pin[Une coche]{required=true add="uniquement s'il s'agit d'un tag sélectionnable en état cliqué"}

::dsfr-doc-pin[Une croix]{required=true add="uniquement s'il s'agit d'un tag supprimable"}

:::

### Variations

**Tag non cliquable**

::dsfr-doc-storybook{storyId=tag--size-md}

**Tag cliquable**

::dsfr-doc-storybook{storyId=tag--tag-clickable}

**Tag sélectionnable**

::dsfr-doc-storybook{storyId=tag--tag-pressable}

**Tag supprimable**

::dsfr-doc-storybook{storyId=tag--tag-dismissible}

> [!NOTE]
> Cette variation n’autorise pas l’utilisation d’icône, autre que la croix de suppression présente par défaut.

**Groupe de tags**

::dsfr-doc-storybook{storyId=tags-group--size-md}

Tous les tags peuvent être utilisés à plusieurs dans des groupes de tags. Dans ce cas-là ils appliquent des espacement préalablement définis par le DSFR.

### Tailles

Toutes les variations de tags sont disponibles en 2 tailles, pour pouvoir s’adapter au contexte d’affichage :

- SM pour small

::dsfr-doc-storybook{storyId=tag--size-sm}

- MD pour medium - taille par défaut

::dsfr-doc-storybook{storyId=tag--size-md}

À noter que pour le groupe de tags en taille SM, le padding autour du tag est plus important que lorsqu’il est utilisé seul pour faciliter le clic en mobile.

### États

Le tag non cliquable est le seul qui n’est sujet à aucun changement d’état.

**Etat au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole le tag avec sa souris.

- Tag cliquable

- Tag sélectionnable

- Tag supprimable

**Etat cliqué**

L’état au clic correspond au comportement constaté par l’usager une fois un tag sélectionné, après avoir cliqué dessus.

- Tag sélectionnable

### Personnalisation

Seule la couleur des tags cliquables peut être personnalisée, parmi les couleurs illustratives autorisées uniquement.

:::fr-table[Tableau personnalisation design]{valign=top multiline=true caption=false}

|  Éléments | Indice thème clair | Indice thème sombre |
|:-----|:-----|:-----|
| **Fond** | Indice **925**<br> exemple : `$pink-tuile-925` | Indice **125**<br> exemple : `$pink-tuile-125` |
| **Texte et icône**| Indice **sun**<br> exemple : `$pink-tuile-sun-425` | Indice **moon**<br> exemple : `$pink-tuile-moon-750` |

:::

La personnalisation des tags doit se faire avec parcimonie et avec un objectif précis (permettre d'en faire ressortir un type ou le sens, par exemple).

> [!NOTE]
> Si vous personnalisez la couleur illustrative des badges, attention à la couleur d’arrière-plan sur laquelle ils sont positionnés à travers l’ensemble du site.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Personnaliser uniquement la couleur des tags cliquables.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas proposer les autres variations de tags en couleur.

:::

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-2.png)

Associer le tag cliquable à une couleur pour valoriser l’information transmise, ici le type de support.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas dépasser une ou deux couleurs de tags par page.

:::

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-3.png)

Ajouter une icône au tag au besoin.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-3.png)

Ne pas cumuler la croix du tag supprimable (icône par défaut) avec une seconde icône.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code du Tag
shortTitle: Code du Tag
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Tag.
shortDescription: Le tag sert à classer ou filtrer les contenus.
keywords: tag, composant, design system, catégorisation, filtre, accessibilité, UI, UX, badge, interface, contenu
cover: ../_asset/cover/cover.png
excerpt: Le tag est un composant utilisé pour classer ou filtrer des contenus à l'aide de mots clés. Il s'adapte selon le contexte d'utilisation et respecte des règles éditoriales précises.
summary: Ce contenu présente le composant Tag dans un design system. Il explique ses usages principaux, notamment pour la catégorisation de contenus ou comme filtre interactif dans les interfaces. Des conseils pratiques et règles éditoriales y sont fournis pour garantir une intégration cohérente et accessible. Ce guide s’adresse aux designers et développeurs travaillant sur des interfaces nécessitant une organisation claire et intuitive de l’information.
mesh:
  - component/badge
  - component/card
---

## Tag

Le tag est un élément d’indication ou d’interaction (selon les contextes) permettant de catégoriser, classer, organiser les contenus d’un site à l’aide de mots clés. Il aide les usagers à rechercher et à trouver facilement une information.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Tag** est un élément permettant de marquer ou de catégoriser des éléments et peut être utilisé dans deux contextes :

- Dans le contenu (carte, en-tête, liste) : il catégorise le contenu auquel il est apposé. Il peut être cliquable ou non cliquable.
- En tant que filtre (dans une page de résultats de recherche par exemple). Dans ce cas il peut-être :
  - activable comme filtre en place à sélectionner/désélectionner,
  - supprimable, il sert de rappel à un filtre qui a été coché dans une sidebar ou une liste déroulante.

##### Tag non cliquable

Sa structure est la suivante :

- Le **Tag** est un élément HTML `<p>` défini par la classe `fr-tag`.

**Exemple de Tag non cliquable**

```HTML
<p class="fr-tag">Libellé tag non cliquable</p>
```

##### Tag cliquable

Sa structure est la suivante :

- Le **Tag cliquable** est un élément HTML `<a>` ou `<button>` avec la classe `fr-tag`.

**Exemple de Tag cliquable**

```HTML
<a href="#" class="fr-tag">Tag cliquable lien</a>
<button type="button" class="fr-tag">Libellé tag cliquable bouton</button>
```

##### Tag activable

Sa structure est la suivante :

- Le **Tag activable** est un élément HTML `<button>` avec la classe `fr-tag` et l'attribut `aria-pressed`, sa valeur [true|false] défini si le tag est activé.

**Exemple de Tag activable**

```HTML
<button type="button" class="fr-tag" aria-pressed="false">Libellé tag activable</button>
```

##### Tag supprimable

Sa structure est la suivante :

- Le **Tag activable** est un élément HTML `<button>` avec les classes `fr-tag` et `fr-tag--dismiss`.

**Exemple de Tag supprimable**

```HTML
<button class="fr-tag fr-tag--dismiss" type="button" aria-label="Retirer [À MODIFIER - le filtre Libellé tag supprimable]">Libellé tag supprimable</button>
```

##### Groupe de tags

Les tags peuvent être utilisés à plusieurs dans des groupes de tags `fr-tags-group`. Dans ce cas-là ils appliquent des espacement préalablement définis par le DSFR.

**Exemple de groupe de tags**

```HTML
<ul class="fr-tags-group">
    <li>
        <p class="fr-tag">Libellé tag 1</p>
    </li>
    <li>
        <p class="fr-tag">Libellé tag 2</p>
    </li>
    <li>
        <p class="fr-tag">Libellé tag 3</p>
    </li>
</ul>
```

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------| ---------|
| Core       | Oui         |          |
| Tag        | Oui         |          |
| Utility    | Non         | Uniquement pour l'ajout d'icône |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/tag/tag.min.css" rel="stylesheet">
```

#### Variantes de tailles

Le tag est disponible en deux variantes de tailles :

- En taille MD : par défaut.
- En taille SM : définie par la classe `fr-tag--sm`.

**Exemples de variantes de taille**

```HTML
<p class="fr-tag fr-tag--sm">Libellé tag non cliquable taille SM</p>
<a class="fr-tag fr-tag--sm" href="#">Libellé tag cliquable taille SM</a>
<button class="fr-tag fr-tag--sm" aria-pressed="false" type="button">Libellé tag activable taille SM</button>
<button class="fr-tag fr-tag--sm fr-tag--dismiss" type="button" aria-label="Retirer [À MODIFIER - le filtre Libellé tag taille SM]">Libellé tag supprimable taille SM</button>
```

#### Variante avec icône

Le tag peut avoir une icône juxtaposée à gauche, elle est ajoutée via la **classe utilitaire d'icône** `fr-icon--NOM-ICONE` (voir [Icônes](../../../../../core/_part/doc/icon/index.md)), associée à une **classe de positionnement** de l'icône `fr-tag--icon-left`.

**Exemples de variantes avec icône**

```HTML
<p class="fr-tag fr-icon-arrow-left-line fr-tag--icon-left">Libellé tag non cliquable avec icône</p>
<a class="fr-tag fr-icon-arrow-left-line fr-tag--icon-left" href="#">Libellé tag cliquable avec icône</a>
<button class="fr-tag fr-icon-information-line fr-tag--icon-left" aria-pressed="false" type="button">Libellé tag activable avec icône</button>
```

#### Variante désactivée

Le style désactivé du tag cliquable est appliqué par le retrait de l'attribut `href` sur l'élément `<a>` ou par l'ajout de l'attribut `disabled` sur l'élément `<button>`. Le tag est alors grisé et les effets au survol et au clic sont retirés. Le pointeur de la souris prend la valeur "not-allowed" au survol du bouton ce qui change son style.
Sur le tag cliquable désactivé avec l'élément `<a>`, l'attribut `role="link"` et `aria-disabled` seront nécessaires pour les technologies d'assistance.

**Exemples de variantes désactivées**

```HTML
<a class="fr-tag" aria-disabled="true" role="link">Libellé tag cliquable désactivé</a>
<button class="fr-tag" type="button" disabled>Libellé tag cliquable désactivé</button>
<button class="fr-tag" aria-pressed="false" type="button" disabled>Libellé tag activable désactivé</button>
<button class="fr-tag fr-tag--dismiss" type="button" aria-label="Retirer [À MODIFIER - le filtre Libellé tag supprimable désactivé]" disabled>Libellé tag supprimable désactivé</button>
```

#### Accentuation

Le tag cliquable est accentuable, permettant le changement de la couleur de fond. Pour cela, ajouter la classe `fr-tag--NOM-COULEUR` au même niveau que la classe `fr-tag`.

**Exemple de variante accentuée**

```HTML
<a class="fr-tag fr-tag--green-emeraude" href="#">Libellé tag cliquable accentué</a>
```

#### Variantes de taille du groupe de tag

Le groupe de tag est disponible en deux variantes de tailles :

- En taille MD : par défaut.
- En taille SM : définie par la classe `fr-tags-group--sm`.

**Exemples de variantes de taille**

:::fr-accordion[Déplier pour voir le code]{id=tags-sizes}

**Groupe de tags non cliquables SM**

```HTML
<ul class="fr-tags-group fr-tags-group--sm">
    <li>
        <p class="fr-tag">Libellé tag non cliquable SM 1</p>
    </li>
    <li>
        <p class="fr-tag">Libellé tag non cliquable SM 2</p>
    </li>
    <li>
        <p class="fr-tag">Libellé tag non cliquable SM 3</p>
    </li>
</ul>
```

**Groupe de tags cliquables SM**

```HTML
<ul class="fr-tags-group fr-tags-group--sm">
    <li>
        <a class="fr-tag" href="#">Libellé tag cliquable SM 1</a>
    </li>
    <li>
        <a class="fr-tag" href="#">Libellé tag cliquable SM 2</a>
    </li>
    <li>
        <a class="fr-tag" href="#">Libellé tag cliquable SM 3</a>
    </li>
</ul>
```

**Groupe de tags sélectionnables SM**

```HTML
<ul class="fr-tags-group fr-tags-group--sm">
    <li>
        <button class="fr-tag" type="button" aria-pressed="false">Libellé tag sélectionnable SM 1</button>
    </li>
    <li>
        <button class="fr-tag" type="button" aria-pressed="false">Libellé tag sélectionnable SM 2</button>
    </li>
    <li>
        <button class="fr-tag" type="button" aria-pressed="false">Libellé tag sélectionnable SM 3</button>
    </li>
</ul>
```

**Groupe de tags supprimables SM**

```HTML
<ul class="fr-tags-group fr-tags-group--sm">
    <li>
        <button class="fr-tag fr-tag--dismiss" type="button" aria-label="Retirer [À MODIFIER - le filtre Libellé tag supprimable SM 1]">Libellé tag supprimable SM 1</button>
    </li>
    <li>
        <button class="fr-tag fr-tag--dismiss" type="button" aria-label="Retirer [À MODIFIER - le filtre Libellé tag supprimable SM 2]">Libellé tag supprimable SM 2</button>
    </li>
    <li>
        <button class="fr-tag fr-tag--dismiss" type="button" aria-label="Retirer [À MODIFIER - le filtre Libellé tag supprimable SM 3]">Libellé tag supprimable SM 3</button>
    </li>
</ul>
```

:::

---

### JavaScript

#### Installation du JavaScript

Pour fonctionner, le composant Tag nécessite l'utilisation de JavaScript pour les tags activables supprimables.
Chaque composant utilisant JavaScript possède un fichier JS spécifique et requiert le fichier JS du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/tag/tag.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/tag/tag.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur le Tag, les éléments suivants sont instanciés :

- Le Tag activable, via la classe : `fr-tag` et l'attribut `aria-pressed`.
- Le Tag supprimable, via la classe `fr-tag--dismiss`.

Une fois chargé, le JS ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composant en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('ID_TAG');
dsfr(elem).tagDismissible.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

###### toggle

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement du tag activable est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).toggle.isEnabled = false` |

:::

:::fr-table[pressed]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoi l'état du tag activable |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).toggle.pressed = false` |

:::

:::fr-table[toggle]{valign=top multiline=true}

| | |
|:------|:-----|
| **Description** | Fait varier l'état checked/unchecked et la valeur de l'attribut `aria-pressed` du tag activable |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).toggle.toggle()` |

:::

:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).toggle.node` |

:::

###### tagDismissible

:::fr-table[isEnabled]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Défini si le fonctionnement du tag supprimable est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).tagDismissible.isEnabled = false` |

:::

:::fr-table[node]{valign=top multiline=true}

| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).tagDismissible.node` |

:::

#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l'[API Javascript](path:/getting-started/developer/javascript).

Sur le tag, les événements suivants sont disponibles :

:::fr-table[événements]{valign=top multiline=true caption=false}

| Événement | Action | Élément | Attribut |
|------|------|------|------|
| `dsfr.dismiss` | Suppression du tag supprimable | TagDismissible | `data-fr-js-tag-dismissible` |
| `dsfr.click` | Click sur le tag supprimable | TagDismissible | `data-fr-js-tag-dismissible` |
| `dsfr.click` | Click sur le tag sélectionnable | Toggle | `data-fr-js-toggle` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+tag+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Tag
shortTitle: Accessibilité du Tag
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Tag.
shortDescription: Le tag sert à classer ou filtrer les contenus.
keywords: tag, composant, design system, catégorisation, filtre, accessibilité, UI, UX, badge, interface, contenu
cover: ../_asset/cover/cover.png
excerpt: Le tag est un composant utilisé pour classer ou filtrer des contenus à l'aide de mots clés. Il s'adapte selon le contexte d'utilisation et respecte des règles éditoriales précises.
summary: Ce contenu présente le composant Tag dans un design system. Il explique ses usages principaux, notamment pour la catégorisation de contenus ou comme filtre interactif dans les interfaces. Des conseils pratiques et règles éditoriales y sont fournis pour garantir une intégration cohérente et accessible. Ce guide s’adresse aux designers et développeurs travaillant sur des interfaces nécessitant une organisation claire et intuitive de l’information.
mesh:
  - component/badge
  - component/card
---

## Tag

Le tag est un élément d’indication ou d’interaction (selon les contextes) permettant de catégoriser, classer, organiser les contenus d’un site à l’aide de mots clés. Il aide les usagers à rechercher et à trouver facilement une information.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Tag** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

#### Tag non cliquable

- Par défaut, utiliser un élément `<p>` lorsque le tag est utilisé seul.
- Si le tag est utilisé à l’intérieur d’un élément qui possède une sémantique (`<p>`, `li`), utiliser un élément `<span>`.
- En cas d’utilisation de plusieurs tags à la suite, les structurer dans une liste.

#### Tag cliquable

- Un tag cliquable doit être un lien (élément `<a href>`).
- En cas d’utilisation de plusieurs tags cliquables à la suite, les structurer dans une liste.

Voir les [règles d'accessibilité du composant Lien](../../../../link/_part/doc/accessibility/index.md#regles-d-accessibilite).

#### Tag sélectionnable / supprimable

- Un tag sélectionnable ou supprimable doit être un bouton (élément `<button>`).
- Le tag sélectionnable possède un attribut `aria-pressed` avec les valeurs `false` ou `true` pour transmettre son état aux personnes aveugles.
- Le tag supprimable possède un attribut `aria-label` pour donner un libellé explicite au bouton. La valeur de l’attribut doit obligatoirement contenir l’intitulé visible du tag. Ex. `aria-label="Retirer le filtre [label tag]"`.
- Attention à repositionner le focus à un endroit pertinent lors de la suppression du tag.

Voir les [règles d’accessibilité du composant Bouton](../../../../button/_part/doc/accessibility/index.md#regles-d-accessibilite).

### Contrastes de couleurs

Le composant Tag est suffisamment contrasté en thème clair. Il l’est également en thème sombre dans sa version par défaut.

:::fr-table[Contrastes de couleurs]{valign=top multiline=true caption=false}
| Élément|  Thème clair | Thème sombre |
|------|-----|-----|
|**Tag par défaut**| 15,6:1 | 15,52:1 |
|**Tag cliquable / Tag non sélectionné**| 11,83:1 | 4,55:1 |
|**Tag cliquable / Tag non sélectionné au survol**| 8,72:1 | 2,6:1 |
|**Tag sélectionné / Tag supprimable**| 13,75:1 | 4,74:1 |
|**Tag sélectionné / Tag supprimable au survol**| 7,58:1 | 7,47:1 |
:::

---

### Restitution par les lecteurs d’écran

Par défaut, les lecteurs d’écran restituent le **nom, la description, l’état et le type**. L’ordre peut varier en fonction des lecteurs d’écran et de leur configuration.

L’attribut `aria-pressed` est restitué différemment selon les lecteurs d’écran&nbsp;:

- **VoiceOver macOS et iOS&nbsp;:** «&nbsp;bouton de basculement&nbsp;». Sur macOS, seul l’état sélectionné est restitué «&nbsp;sélectionné&nbsp;». Sur iOS, VoiceOver restitue l’état («&nbsp;non enfoncé / enfoncé&nbsp;» ou «&nbsp;coché / non coché&nbsp;» à l’activation ou désactivation du bouton).
- **NVDA et JAWS&nbsp;:** «&nbsp;bouton bascule&nbsp;» pour NVDA et «&nbsp;bouton à bascule&nbsp;» pour JAWS, les états sont restitués «&nbsp;non enfoncé / enfoncé&nbsp;».
- **Narrateur et Talkback&nbsp;:** «&nbsp;bouton d'activation / désactivation&nbsp;», les états sont restitués «&nbsp;désactivé / activé&nbsp;».

---

### Critères RGAA applicables

- **Couleurs** : 3.2, 3.3
- **Liens** : 6.1, 6.2
- **Scripts** : 7.1, 7.3
- **Éléments obligatoires** : 8.9
- **Structuration** : 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation** : 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/tag/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Tag - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/component/tag/tag.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../dist/component/tag/tag.legacy.c...
```

(Truncated for brevity. See source file for full HTML)
