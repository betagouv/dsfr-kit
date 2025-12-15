# DSFR Link Component

*Generated from local node_modules*

## Presentation

---
title: Lien
shortTitle: Lien
titleId: Link
description: Présentation du composant Lien permettant à l’usager d’accéder à un autre contenu, sur la même page ou sur une autre page, interne ou externe.
shortDescription: Navigation secondaire vers d’autres contenus
keywords: lien, navigation, ancre, téléchargement, retour, DSFR, accessibilité
cover: ./_asset/cover/cover.png
excerpt: Le composant Lien facilite la navigation de l’usager dans une même page, vers une autre page du site ou vers un site tiers, en complément de la navigation principale.
summary: Le lien est un composant essentiel pour structurer la navigation au sein des interfaces numériques. Il se décline en différentes formes selon son usage - dans un texte, hors contenu, vers une page externe ou pour un téléchargement. Non personnalisable, il suit des règles d’usage strictes afin de préserver la lisibilité, l’accessibilité et l’uniformité graphique. Son usage s’inscrit dans une hiérarchie d’interaction bien définie, distincte de celle du bouton.
mesh:
  - component/breadcrumb
  - component/sidemenu
  - component/summary
---

## Lien

Le lien est un système de navigation secondaire qui permet à l’usager de se déplacer au sein d’une même page, entre deux pages d’un même site ou vers un site externe.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=link--link}

### Quand utiliser ce composant ?

Proposer le lien pour permettre à l’usager de naviguer au sein d’un site, en complément de la [navigation principale](../../../navigation/_part/doc/index.md).

> [!NOTE]
> Bien différencier le lien des autres composant permettant une interaction avec l’interface.

Le lien a vocation à faciliter la navigation vers d’autres contenus. Pour les actions d’un autre type, comme la soumission d’un formulaire par exemple, il faut utiliser [le bouton](../../../button/_part/doc/index.md).

### Comment utiliser ce composant ?

- **Utiliser le lien pour renvoyer l’usager vers davantage de contenus**.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Proposer un lien pour consulter plus d’actualités.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas utiliser un bouton pour renvoyer vers davantage de contenus.

:::

::::

- **Adapter le type de lien choisi au besoin rencontré**. Par exemple, le lien simple ne doit pas être utilisé au sein d’un paragraphe mais bien en dehors de tout contenu. Pour insérer un lien dans un paragraphe, utiliser les liens contextuels au fil du texte.
- **Eviter de démultiplier les liens** au sein d’une même page afin de préserver une navigation simple et claire par l’usager.

### Règles éditoriales

- **Privilégier des liens courts et explicites** garantissant la compréhension de l’usager.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design du du Lien
shortTitle: Design du Lien
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Lien.
shortDescription: Navigation secondaire vers d’autres contenus
keywords: lien, navigation, ancre, téléchargement, retour, DSFR, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Le composant Lien facilite la navigation de l’usager dans une même page, vers une autre page du site ou vers un site tiers, en complément de la navigation principale.
summary: Le lien est un composant essentiel pour structurer la navigation au sein des interfaces numériques. Il se décline en différentes formes selon son usage - dans un texte, hors contenu, vers une page externe ou pour un téléchargement. Non personnalisable, il suit des règles d’usage strictes afin de préserver la lisibilité, l’accessibilité et l’uniformité graphique. Son usage s’inscrit dans une hiérarchie d’interaction bien définie, distincte de celle du bouton.
mesh:
  - component/breadcrumb
  - component/sidemenu
  - component/summary
---

## Lien

Le lien est un système de navigation secondaire qui permet à l’usager de se déplacer au sein d’une même page, entre deux pages d’un même site ou vers un site externe.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie du lien](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Une icône]{add="placée à droite ou à gauche du texte visible ou seule"}

::dsfr-doc-pin[Un libellé]{required=true}

:::

### Variations

**Lien au fil du texte**

::dsfr-doc-storybook{storyId=link--text-link}

- **Utiliser ce lien au sein d’un texte**. Il reprend les caractéristiques typographiques de celui-ci (font, couleur, taille) tout en étant souligné. Il peut également être suivi d’une icône (par exemple : lien externe).

**Lien simple**

Le lien simple se décline en différentes variations :

- Texte seul

::dsfr-doc-storybook{storyId=link--link}

- Avec une icône à droite
- Avec une icône à gauche

::dsfr-doc-storybook{storyId=link--icon}

- Icône seule
- **Utiliser le lien simple en dehors de tout contenu**.
- **Ajouter une icône pour rendre l’action à venir ou la destination plus explicite** pour l’usager. L’icône n’est pas à vocation décorative.
- **Préférer les liens avec libellé.** L’icône seule n’est à utiliser que très rarement, pour des actions facilement identifiables par l’usager.

**Lien interne**

::dsfr-doc-storybook{storyId=link--link}

- **Utiliser le lien interne pour pointer vers d’autres pages d’un même site**.

**Lien externe**

::dsfr-doc-storybook{storyId=link--external}

- **Utiliser le lien externe pour pointer vers un autre site**, en ouvrant un nouvel onglet ou une nouvelle page dans le navigateur. Le lien externe est matérialisé par une icône obligatoire placée à droite du lien.

**Lien de téléchargement**

::dsfr-doc-storybook{storyId=link--download}

- **Utiliser le lien de téléchargement pour permettre à l’usager de télécharger un fichier** depuis votre site.
- **Précéder le nom du document de la mention “Télécharger”.** L’usager doit comprendre l’action qu’il réalise.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/variation/do-1.png)

Précéder le nom du document de la mention “Télécharger”.

:::

::::

- **Accompagner le lien d’une icône** qui explicite l’action.
- **Préciser le format et le poids du fichier** de façon systématique.
- **Indiquer la langue du document** si elle est différente de la langue de la page courante.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/variation/do-2.png)

Préciser la langue du document si elle est différente de la langue de la page courante.

:::

::::

**Lien de retour en haut de page**

::dsfr-doc-storybook{storyId=link--back-to-top}

- **Utiliser le retour en haut de page dans les pages de contenu longues** pour éviter à l’usager de trop scroller.
- **Placer le retour en haut de page à la fin du contenu de la page**, avant le pied de page. Si il y a des blocs de poursuite de lecture (exemple : liens vers d’autres articles), il est conseillé de placer le retour en haut de page avant ces blocs.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/variation/do-3.png)

Positionner le retour en haut de page avant le maillage.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/variation/dont-1.png)

Ne pas positionner le retour en haut de page après le maillage.

:::

::::

- **Conserver le même emplacement** pour le retour en haut de page sur toutes les pages où vous le proposez. Aligné à gauche avec le contenu par défaut, il peut aussi être centré ou aligné à droite.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](../_asset/variation/do-4.png)

Choisir l’un des trois emplacements ci-dessus pour le retour en haut de page. Il doit être harmoniser à travers l’ensemble des pages du site.

:::

::::

**Groupe de liens**

- Liste de liens

::dsfr-doc-storybook{storyId=links-group--size-md}

- Liste de liens de téléchargement

::dsfr-doc-storybook{storyId=links-group--download}

- Groupe de liens en ligne

::dsfr-doc-storybook{storyId=links-group--horizontal}

- **Utiliser un groupe de liens afin de mettre à disposition plusieurs liens consécutivement**, qu’ils soient complémentaires ou substituables.

### Tailles

Le lien est disponible en trois tailles :

- SM pour small

::dsfr-doc-storybook{storyId=links-group--size-sm}

- MD pour medium - taille par défaut

::dsfr-doc-storybook{storyId=links-group--size-md}

- LG pour large

::dsfr-doc-storybook{storyId=links-group--size-lg}

- **Adapter la taille de votre lien à votre besoin**.

### États

**État désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec le lien.

::dsfr-doc-storybook{storyId=link--disabled}

> [!WARNING]
> N’utiliser cet état que très ponctuellement, pour indiquer à l’usager qu’il doit procéder à une action en amont par exemple.

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole le lien avec sa souris.

### Personnalisation

Le lien n’est pas personnalisable.

Toutefois, certains éléments sont optionnels et les icônes peuvent être changées (à l’exception des icônes lien externe et lien de téléchargement) - [voir la structure du composant](#lien).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas changer la couleur du lien.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas supprimer le soulignement du lien.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code du Lien
shortTitle: Code du Lien
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Lien.
shortDescription: Navigation secondaire vers d’autres contenus
keywords: lien, navigation, ancre, téléchargement, retour, DSFR, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Le composant Lien facilite la navigation de l’usager dans une même page, vers une autre page du site ou vers un site tiers, en complément de la navigation principale.
summary: Le lien est un composant essentiel pour structurer la navigation au sein des interfaces numériques. Il se décline en différentes formes selon son usage - dans un texte, hors contenu, vers une page externe ou pour un téléchargement. Non personnalisable, il suit des règles d’usage strictes afin de préserver la lisibilité, l’accessibilité et l’uniformité graphique. Son usage s’inscrit dans une hiérarchie d’interaction bien définie, distincte de celle du bouton.
mesh:
  - component/breadcrumb
  - component/sidemenu
  - component/summary
---

## Lien

Le lien est un système de navigation secondaire qui permet à l’usager de se déplacer au sein d’une même page, entre deux pages d’un même site ou vers un site externe.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Lien** est un élément interactif permettant de naviguer vers une autre page ou section. Sa structure est la suivante :

- Le Lien est un élément HTML `<a>` défini par la classe `fr-link`.
- Son contenu est textuel, il doit indiquer clairement sa destination.

**Exemple de structure HTML**

```HTML
<a href="#" class="fr-link">
  Libellé lien
</a>
```

#### Lien externe

Lorsque le lien redirige vers un site externe, celui-ci doit s'ouvrir dans un nouvelle fenêtre. Pour cela, il convient d'ajouter l'attribut `target="blank"` ainsi qu'un attribut `title="[intitulé du lien à modifier] - nouvelle fenêtre"` pour indiquer au survol que la page s'ouvrira dans un nouvelle fenêtre.
L'ajout d'un attribut `rel="noopener external"` sera aussi recommandé pour des raisons de sécurité.

**Exemple de lien externe**

```HTML
<a href="#" target="_blank" rel="noopener external" title="Libellé lien - nouvelle fenêtre" class="fr-link">
  Libellé lien
</a>
```

#### Lien de téléchargement

La variante lien de téléchargement permet de télécharger un fichier.

- Il est formé par un élément HTML `<a>` défini par la classe `fr-link` et la classe `fr-link--download`.
- Son contenu est constitué de :
  - un texte commençant par "Télécharger ..."
  - les détails du fichier : un élément HTML `<span>` avec la classe `fr-link__detail` et décrivant le type, le poids, et la langue du fichier (si différente).

**Exemples de lien de téléchargement**

```HTML
<a download="true" href="image.jpg" class="fr-link fr-link--download">
  Télécharger le document lorem ipsum
  <span class="fr-link__detail">JPG – 61,88 ko</span>
</a>
```

Dans le cas d'un fichier en langue étrangère, l'attribut `hreflang` avec le code langue doit être ajouté, et la langue doit être indiquée dans le détail.

```HTML
<a hreflang="en" download="true" href="exemple.pdf" class="fr-link fr-link--download">
  Télécharger le document lorem ipsum
  <span class="fr-link__detail">PDF – 1,81 Mo - Anglais</span>
</a>
```

Il est possible de remplir automatiquement le détail en JS grâce à l'attribut `data-fr-assess-file` (Voir section [Javascript](#javascript)).

#### Lien au fil du texte

Au sein d'un texte, ne pas utiliser le composant Lien. Préférer l'ajout d'un lien standard sans la classe `fr-link`, celui-ci reprend les caractéristiques typographiques du texte (font, couleur, taille) tout en étant souligné.

**Exemples de liens au fil du texte**

```HTML
<p>Lorem ipsum <a href="#">lien dans le texte</a> dolor sit amet</p>
```

#### Groupes de liens

Les liens peuvent être regroupés pour former des ensembles de navigation. Le groupe est formé par la succession de liens enveloppés par un conteneur de classe `fr-links-group`. Utiliser une liste de `<ul>` `<li>` dans le cas d'une liste de liens. Insérer les liens directement dans un conteneur `<div>` lorsque qu'une liste n'est pas nécessaire, par exemple : deux liens indépendants qui ne forment pas un ensemble logique.

**Exemple de groupe de liens**

```HTML
<ul class="fr-links-group">
  <li>
    <a href="#" class="fr-link">Lien 1</a>
  </li>
  <li>
    <a href="#" class="fr-link">Lien 2</a>
  </li>
</ul>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque    |
|------------|-------------|-------------|
| Core       | Oui         |             |
| Link       | Oui         |             |
| Utility    | Non         | Uniquement pour l'ajout d'icône |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/link/link.min.css" rel="stylesheet">
```

#### Variantes de taille

Le lien peut avoir différentes tailles qui auront un impact sur la taille du texte et des icônes :

- `fr-link--xs` : Très petit lien.
- `fr-link--sm` : Petit lien.
- Par défaut : Lien moyen.
- `fr-link--lg` : Grand lien.

**Exemples de variantes de taille**

```HTML
<a href="#" class="fr-link fr-link--xs">
    Très petit lien
</a>
<a href="#" class="fr-link fr-link--sm">
    Petit lien
</a>
<a href="#" class="fr-link">
    Lien moyen
</a>
<a href="#" class="fr-link fr-link--lg">
    Grand lien
</a>
```

#### Variantes d'icônes

Le Lien peut avoir une icône juxtaposé, elle est ajoutée via la **classe utilitaire d'icône** `fr-icon--NOM-ICONE` (voir [Icônes](../../../../../core/_part/doc/icon/index.md)).

Cette classe peut être associée à une **classe de positionnement** de l'icône :

- Par défaut : Icône seule, le libellé est caché.
- `fr-link--icon-left` : L'icône apparaît à gauche du libellé.
- `fr-link--icon-right` : L'icône apparaît à droite du libellé.

Dans le cas d'un groupe de boutons, le positionnement de l'icône des boutons peut être généralisé au niveau du groupe avec les classes `fr-links-group--icon-left` ou `fr-links-group--icon-right`.

**Exemples de variantes d'icônes**

```HTML
<a href="#" class="fr-link fr-icon-info-line fr-link--icon-left">
    Lien avec icône à gauche
</a>
<a href="#" class="fr-link fr-icon-info-line fr-link--icon-right">
    Lien avec icône à droite
</a>
<a href="#" class="fr-link fr-icon-info-line">
    Lien icône seule (non recommandé)
</a>
```

#### Variante Lien externe

L'attribut `target="blank"` amène l'ajout d'une icône "lien externe" à droite du lien. Si une icône à droite était ajoutée, l'icône "lien externe" prend le dessus.

#### Variante désactivé

Le style désactivé du Lien est appliqué par le retrait de l'attribut `href` sur l'élément `<a>`. Le Lien est alors grisé et les effets au survol et au clic sont retirés. Le pointeur de la souris prend la valeur "not-allowed" au survol du bouton ce qui change sont style.
Sur le Lien désactivé, l'attribut `role="link"` et `aria-disabled` seront nécessaires pour les technologies d'assistance.

#### Variantes du groupe de lien

Le groupe de bouton vient avec de nombreuses variations, telles que :

- **Taille des liens** : Des variations de taille sont accessibles au niveau du groupe avec les classes :
  - `fr-links-group--sm` : Groupe de liens SM
  - `fr-links-group--lg` : Groupe de liens LG
- **Positionnement des icônes des liens** : Les variations de position de l'icône des liens sont accessibles au niveau du groupe avec les classes :
  - `fr-links-group--icon-left` : Icône des liens à gauche
  - `fr-links-group--icon-right` : Icône des liens à droite
- **Groupe de liens horizontal** : Par défaut, le groupe de bouton positionne les liens les uns en dessous des autres sous forme de liste à puce. Les liens peuvent être placés en ligne par la classe `fr-links-group--inline` (avec passage à la ligne en cas de dépassement du conteneur)

**Exemple de groupe de lien**

```HTML
<ul class="fr-links-group fr-links-group--icon-left">
  <li>
    <a id="link-4612" href="#" class="fr-link fr-icon-info-line">Libellé lien 1</a>
  </li>
  <li>
    <a id="link-4613" href="#" class="fr-link fr-icon-success-line">Libellé lien 2</a>
  </li>
  <li>
    <a id="link-4614" href="#" class="fr-link fr-icon-warning-line">Libellé lien 3</a>
  </li>
</ul>
```

---

### JavaScript

Le composant Lien **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

Une fonctionnalité disponible dans le core, permet de remplir automatiquement le détail des **liens de téléchargement**.
Pour instancier le javascript de remplissage automatique du détail sur le lien de téléchargement, ajouter l'attribut `data-fr-assess-file` sur le lien.
Les propriétés de type, poids, et langue sont récupérées depuis le fichier. Le texte de détail est automatiquement remplacé au chargement du JS. Il est conseillé de tout de même remplir les infos connues dans le détail en solution de repli.
Si la page est en Anglais, l'attribut `data-fr-assess-file` doit prendre la valeur "bytes", pour afficher le poids en Bytes plutôt qu'en Octet.

Pour fonctionner le fichier à télécharger doit être sur le même cross-domain que le site.

**Exemple des details du lien de téléchargement automatiques**

```HTML
<a data-fr-assess-file download="true" href="image.jpg" class="fr-link fr-link--download">
  Télécharger le document lorem ipsum
  <span class="fr-link__detail">CE TEXTE EST REMPlACÉ</span>
</a>
```

#### Installation du Javascript

Pour fonctionner, le **remplissage automatique du détail des liens de téléchargement** nécessite l'utilisation de JavaScript.
Cette fonctionnalité est disponible dans le core.

Il est donc nécessaire d'importer les fichiers js du core à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
```

#### API

> [!NOTE]
> L'activation ou la désactivation de la fonction de remplissage automatique du détail des liens de téléchargement (assess-file) n'est pas disponible via l'API JS, elle se fait via l'ajout ou le retrait de l'attribut `data-fr-assess-file` sur le lien.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+link+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Lien
shortTitle: Accessibilité du Lien
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Lien.
shortDescription: Navigation secondaire vers d’autres contenus
keywords: lien, navigation, ancre, téléchargement, retour, DSFR, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Le composant Lien facilite la navigation de l’usager dans une même page, vers une autre page du site ou vers un site tiers, en complément de la navigation principale.
summary: Le lien est un composant essentiel pour structurer la navigation au sein des interfaces numériques. Il se décline en différentes formes selon son usage - dans un texte, hors contenu, vers une page externe ou pour un téléchargement. Non personnalisable, il suit des règles d’usage strictes afin de préserver la lisibilité, l’accessibilité et l’uniformité graphique. Son usage s’inscrit dans une hiérarchie d’interaction bien définie, distincte de celle du bouton.
mesh:
  - component/breadcrumb
  - component/sidemenu
  - component/summary
---

## Lien

Le lien est un système de navigation secondaire qui permet à l’usager de se déplacer au sein d’une même page, entre deux pages d’un même site ou vers un site externe.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Lien** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Lorsque le focus est positionné sur le Lien :

- `Entrée` :
  - actionne le lien,
  - redirige vers la destination définie par l’attribut `href`,
  - déplace le focus vers la page de destination,
  - si le lien est en `target="_blank"` ouvre la destination dans un nouvel onglet.
- `Tab`&nbsp;: place le focus sur le prochain élément focalisable.
- `Maj + Tab`&nbsp;: place le focus sur l'élément focalisable précédent.

### Règles d’accessibilité

#### Structuration

- Le lien doit avoir un attribut `href`.
- Le lien doit avoir un **intitulé accessible**.
- Si une information complémentaire au lien est présente, la lier au lien avec un `aria-describedby` défini sur l'ID de l'élément contenant l’information.

#### Intitulé du lien

- L’intitulé doit être explicite, l’utilisateur doit comprendre la destination ou la fonction du lien.
- Un lien peut être rendu explicite grâce à son contexte : [RGAA 4 : contexte du lien](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode/glossaire/#contexte-du-lien).

##### Lien-icône

- Un lien avec icône seule doivent avoir un nom accessible pertinent.
- Un attribut `title` identique à l’intitulé du lien peut être ajouté pour expliciter l’icône.

##### Lien externe

Les **liens externes** qui s’ouvrent dans un nouvel onglet / fenêtre (attribut `target="_blank"`) et qui sont suivis d’une icône doivent également avoir la mention "nouvelle fenêtre" dans un attribut `title` (ex&nbsp;: `title="intitulé du lien - nouvelle fenêtre"`).

##### Lien de téléchargement

- Le **lien de téléchargement** doit contenir la mention "Télécharger".
- Indiquer des informations sur le fichier dans la partie détail avec notamment le type ou l'extension du fichier, son poids, et sa langue si différente de la page est une bonne pratique et un critère d’accessibilité de niveau AAA.

##### Groupe de liens

Une succession de liens doit être structuré dans une liste `ul` `li`.

##### Lien désactivé

Pour **désactiver** un lien&nbsp;:

- retirer l’attribut `href`,
- ajouter les attributs `role="link"` et `aria-disabled="true"` pour indiquer aux technologies d'assistance qu’il s'agit d'un lien désactivé.

#### Bouton ou lien&nbsp;?

>[!NOTE]
>Il est nécessaire de distinguer un bouton d’un lien.
>
>Un bouton permet de **déclencher une action ou un événement**&nbsp;:
>- **nativement** en fonction du type du bouton&nbsp;: envoi d’un formulaire (`submit`), suppression de contenu de champs de formulaire (`reset`)&nbsp;;
>- **en JavaScript**&nbsp;: ouverture d’une fenêtre modale, fermeture d’un contenu, modification de la page…
>
>Un lien `<a href>` permet de rediriger vers une autre page ou à un autre endroit dans la page (ancre).

**Éviter d’utiliser le style du composant Bouton sur les liens et inversement**.

---

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [L’élément a](https://html.spec.whatwg.org/#the-a-element)

##### Ressources

- <a href="https://www.scottohara.me/blog/2021/05/28/disabled-links.html" rel="noopener external" target="_blank" title="article désactiver un lien - Nouvelle fenêtre" rel="noopener external" lang="en">Disabling a link</a>


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/link/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Lien - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.legacy.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/a...
```

(Truncated for brevity. See source file for full HTML)
