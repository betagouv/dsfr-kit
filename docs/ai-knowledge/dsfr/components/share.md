# DSFR Share Component

*Generated from local node_modules*

## Presentation

---
title: Partage
shortTitle: Partage
titleId: Share
description: Présentation du composant Partage permettant à l’usager de diffuser un contenu via les réseaux sociaux, un email ou un lien direct.
shortDescription: Partager un contenu via différents canaux
keywords: partage, réseaux sociaux, interaction, DSFR, accessibilité, design système, bouton, lien
cover: ./_asset/cover/cover.png
excerpt: Le composant Partage permet à l’usager de diffuser une page ou un contenu en quelques clics à travers plusieurs canaux comme les réseaux sociaux, l’email ou un lien copié.
summary: Ce composant facilite la diffusion de contenus numériques en permettant aux usagers de partager une page via des boutons accessibles et adaptés à chaque canal. Il garantit une intégration cohérente avec les règles d’accessibilité, une présentation compacte et une compatibilité avec les outils de gestion du consentement pour les services tiers.
mesh:
  - component/button
---

## Partage

Le partage est un groupe d’éléments d’interaction avec l’interface permettant à l’usager de partager le contenu consulté via différents canaux.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=share--share}

### Quand utiliser ce composant ?

**Utiliser le partage pour permettre à l’usager de partager facilement le contenu qu’il consulte** à d’autres usagers, via les réseaux sociaux, par le biais d’un envoi par mail ou en copiant simplement le lien de la page.

### Comment utiliser ce composant ?

- **Conserver des boutons et liens d’icônes seules**. Ces derniers sont assez explicites pour ne pas avoir a être accompagnés de libellés visible.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas ajouter le nom du réseau en libellé du bouton, en plus de l’icône.

:::

::::

- **Positionner le partage en haut ou en bas** de vos pages de contenu riches.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-2.png)

Positionner le partage en haut de page.

:::

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-3.png)

Positionner le partage en bas de page.
:::

::::

- **Rationaliser le nombre d’éléments proposés** afin que le partage reste sur une même ligne et ne prenne pas trop de place. Il est recommandé de ne pas excéder 5 boutons (3 liens pour les réseaux sociaux et les deux boutons de partage, par exemple).

### Règles éditoriales

Le partage n’est régit par aucune règle éditoriale spécifique.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design du Partage
shortTitle: Design du Partage
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Partage.
shortDescription: Partager un contenu via différents canaux
keywords: partage, réseaux sociaux, interaction, DSFR, accessibilité, design système, bouton, lien
cover: ../_asset/cover/cover.png
excerpt: Le composant Partage permet à l’usager de diffuser une page ou un contenu en quelques clics à travers plusieurs canaux comme les réseaux sociaux, l’email ou un lien copié.
summary: Ce composant facilite la diffusion de contenus numériques en permettant aux usagers de partager une page via des boutons accessibles et adaptés à chaque canal. Il garantit une intégration cohérente avec les règles d’accessibilité, une présentation compacte et une compatibilité avec les outils de gestion du consentement pour les services tiers.
mesh:
  - component/button
---


## Partage

Le partage est un groupe d’éléments d’interaction avec l’interface permettant à l’usager de partager le contenu consulté via différents canaux.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie du partage](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un libellé « Partager la page »]{required=true}

::dsfr-doc-pin[Un ou plusieurs bouton(s) de partage sur les réseaux sociaux]{required=true add='Facebook et/ou X et/ou LinkedIn et/ou Instagram et/ou autre'}

::dsfr-doc-pin[Un bouton d’envoi par mail]

::dsfr-doc-pin[Un bouton pour copier le lien de la page]{required=true}

:::

### Variations

Le partage ne propose aucune variation.

### Tailles

La largeur du partage s’adapte à son contenu.

### États

**État désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec les boutons.

::dsfr-doc-storybook{storyId=share--disabled}

> [!NOTE]
> Le code d’intégration des boutons et liens de partage proposé ici correspond à de simples liens externes vers les services de partage.
>
> Si vous souhaitez utiliser les différentes intégrations (javascript) proposées par les différents réseaux sociaux, vous devrez très probablement les intégrer à votre gestionnaire de consentement afin que l’usager puisse accepter ou non les cookies déposés.
>
> Par défaut, les services devant être désactivés, les boutons sont donc passés en inactif et une mention d’information s’affiche pour rediriger l’usager vers la modale de consentement.

### Personnalisation

Le partage n’est pas personnalisable, à l’exception du choix des réseaux sociaux proposés.

N’hésitez pas à [contacter l’équipe DSFR](path:/help) si vous avez besoin d’ajouter d’autres boutons de réseaux sociaux.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser les icônes des réseaux sociaux.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code du Partage
shortTitle: Code du Partage
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Partage.
shortDescription: Partager un contenu via différents canaux
keywords: partage, réseaux sociaux, interaction, DSFR, accessibilité, design système, bouton, lien
cover: ../_asset/cover/cover.png
excerpt: Le composant Partage permet à l’usager de diffuser une page ou un contenu en quelques clics à travers plusieurs canaux comme les réseaux sociaux, l’email ou un lien copié.
summary: Ce composant facilite la diffusion de contenus numériques en permettant aux usagers de partager une page via des boutons accessibles et adaptés à chaque canal. Il garantit une intégration cohérente avec les règles d’accessibilité, une présentation compacte et une compatibilité avec les outils de gestion du consentement pour les services tiers.
mesh:
  - component/button
---

## Partage

Le partage est un groupe d’éléments d’interaction avec l’interface permettant à l’usager de partager le contenu consulté via différents canaux.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Les **boutons de partage** permettent aux utilisateurs de partager facilement un contenu qu’il consulte à d’autres utilisateur.
Sa structure est la suivante :

- Le conteneur principal, obligatoire, du menu latéral est un élément HTML `<div>` défini par la classe `fr-share` et contenant :
  - Le titre, obligatoire, des boutons de partage est un élément HTML `<p>` défini par la classe `fr-share__title` dont le libellé est "Partager la page".
  - La liste de liens ou boutons de partage, obligatoire, est un élément HTML `<ul>` placé après le titre et défini par la classe `fr-btns-group`.
    - Chaque élément `<li>` de la liste contient :
      - Un lien ou bouton de partage, un élément HTML `<a>` ou `<button>` défini par la classe `fr-btn` associée à la classe utilitaire du reseau social ou de l'action de partage correspondante (ex: `fr-btn--facebook`).

**Exemple de structure HTML**

:::fr-accordion[Déplier pour voir le code]{id=share-structure}

```HTML
<div class="fr-share">
    <p class="fr-share__title">Partager la page</p>
    <ul class="fr-btns-group">
        <li>
            <a onclick="window.open(this.href,'Partager sur Facebook','toolbar=no,location=yes,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=450'); event.preventDefault();" href="https://www.facebook.com/sharer.php?u=[À MODIFIER - url de la page]" target="_blank" rel="noopener external" class="fr-btn--facebook fr-btn">Partager sur Facebook</a>
        </li>
        <li>
            <!-- Les paramètres de la reqûete doivent être URI-encodés (ex: encodeURIComponent() en js) -->
            <a onclick="window.open(this.href,'Partager sur X (anciennement Twitter)','toolbar=no,location=yes,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=420'); event.preventDefault();" href="https://twitter.com/intent/tweet?url=[À MODIFIER - url de la page]&text=[À MODIFIER - titre ou texte descriptif de la page]&via=[À MODIFIER - via]&hashtags=[À MODIFIER - hashtags]" target="_blank" rel="noopener external" class="fr-btn--twitter-x fr-btn">Partager sur X (anciennement Twitter)</a>
        </li>
        <li>
            <a onclick="window.open(this.href,'Partager sur LinkedIn','toolbar=no,location=yes,status=no,menubar=no,scrollbars=yes,resizable=yes,width=550,height=550'); event.preventDefault();" href="https://www.linkedin.com/shareArticle?url=[À MODIFIER - url de la page]&title=[À MODIFIER - titre ou texte descriptif de la page]" target="_blank" rel="noopener external" class="fr-btn--linkedin fr-btn">Partager sur LinkedIn</a>
        </li>
        <li>
            <a href="mailto:?subject=[À MODIFIER - objet du mail]&body=[À MODIFIER - titre ou texte descriptif de la page] [À MODIFIER - url de la page]" target="_blank" rel="noopener external" class="fr-btn--mail fr-btn">Partager par email</a>
        </li>
        <li>
            <button onclick="[navigator.clipboard.writeText(window.location).then(function() {alert('Adresse copiée dans le presse papier.')});]" type="button" class="fr-btn--copy fr-btn">Copier dans le presse-papier</button>
        </li>
    </ul>
</div>
```

:::

#### Méta données

Les meta données à placer dans la balise `<head>` de la page, pour gérer les informations de partage sur les réseaux sociaux.

**Exemple de méta données**

```HTML
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="[À MODIFIER - @usernameTwitter]">
<meta property="og:title" content="[À MODIFIER - Système de Design de l&#39;État]">
<meta property="og:description" content="[À MODIFIER - Développer vos sites et applications en utilisant des composants prêts à l&#39;emploi, accessibles et ergonomiques]">
<meta property="og:image" content="[À MODIFIER - https://systeme-de-design.gouv.fr/src/img/systeme-de-design.gouv.fr.jpg]">
<meta property="og:type" content="website">
<meta property="og:url" content="[À MODIFIER - https://systeme-de-design.gouv.fr/]">
<meta property="og:site_name" content="[À MODIFIER - Site officiel du Système de Design de l&#39;État]">
<meta property="og:image:alt" content="[À MODIFIER - République Française - Système de Design de l&#39;État]">
<meta name="twitter:image:alt" content="[À MODIFIER - République Française - Système de Design de l&#39;État]">
```

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------|----------|
| Core       | Oui         |          |
| Button     | Oui         |          |
| Share      | Oui         |          |
| Utility    | Non         | Uniquement pour l'ajout d'icône custom |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/button/button.min.css" rel="stylesheet">
<link href="dist/component/share/share.min.css" rel="stylesheet">
```

#### Variante de boutons et liens de partage en version inactive

Le code d’intégration des boutons et liens de partage proposé ici sont de simples liens externes vers les services de partage.

Si vous souhaitez utiliser les différentes intégrations (javascript) proposées par les différents réseaux sociaux, vous devrez très probablement les intégrer à votre gestionnaire de consentement afin de que l’utilisateur puisse accepter ou non les cookies déposés.
Par défaut, les services doivent être désactivés, les boutons sont donc passés en inactifs et une mention d’information s’affiche pour rediriger vers la modale de consentement.

**Exemples de variante de boutons et liens de partage en version inactive**

```HTML
<div class="fr-share">
    <p class="fr-share__title">Partager la page</p>
    <p class="fr-share__text">Veuillez <a href=[À MODIFIER - url page autorisation cookies]>autoriser le dépôt de cookies</a> pour partager sur Facebook, Twitter et LinkedIn.</p>
    <ul class="fr-btns-group">
        <li>
            <a target="_blank" rel="noopener external" aria-disabled="true" role="link" class="fr-btn--facebook fr-btn">Partager sur Facebook</a>
        </li>
        <li>
            <a target="_blank" rel="noopener external" aria-disabled="true" role="link" class="fr-btn--twitter-x fr-btn">Partager sur X (anciennement Twitter)</a>
        </li>
        <li>
            <a target="_blank" rel="noopener external" aria-disabled="true" role="link" class="fr-btn--linkedin fr-btn">Partager sur LinkedIn</a>
        </li>
        <li>
            <a href="mailto:?subject=[À MODIFIER - objet du mail]&body=[À MODIFIER - titre ou texte descriptif de la page] [À MODIFIER - url de la page]" target="_blank" rel="noopener external" class="fr-btn--mail fr-btn">Partager par email</a>
        </li>
        <li>
            <button onclick="navigator.clipboard.writeText(window.location).then(function() {alert('Adresse copiée dans le presse papier.')});" type="button" class="fr-btn--copy fr-btn">Copier dans le presse-papier</button>
        </li>
    </ul>
</div>
```

---

### JavaScript

Le composant **Partage** ne nécessite pas d'import de JavaScript spécifique pour fonctionner.

Un script d'exemple dans l'attribut `onclick` de chaque élément est proposé pour le partage via l'API des réseau sociaux et la copie de l'URL de la page dans le presse-papier. Il est possible de le personnaliser selon les besoins.

Les liens ci-dessous vous permettent de tester et prévisualiser l’apparence des partages dans différents réseaux sociaux :

- [Open Graph Check](https://www.opengraph.xyz/)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Sharing debugger](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+share+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Partage
shortTitle: Accessibilité du Partage
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Partage.
shortDescription: Partager un contenu via différents canaux
keywords: partage, réseaux sociaux, interaction, DSFR, accessibilité, design système, bouton, lien
cover: ../_asset/cover/cover.png
excerpt: Le composant Partage permet à l’usager de diffuser une page ou un contenu en quelques clics à travers plusieurs canaux comme les réseaux sociaux, l’email ou un lien copié.
summary: Ce composant facilite la diffusion de contenus numériques en permettant aux usagers de partager une page via des boutons accessibles et adaptés à chaque canal. Il garantit une intégration cohérente avec les règles d’accessibilité, une présentation compacte et une compatibilité avec les outils de gestion du consentement pour les services tiers.
mesh:
  - component/button
---

## Partage

Le partage est un groupe d’éléments d’interaction avec l’interface permettant à l’usager de partager le contenu consulté via différents canaux.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Partage** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

- Les boutons ou liens de partage sont structurés dans une liste.
- Le bouton pour copier le lien de la page doit être un élément `button`.

Voir les [règles d'accessibilité du composant Lien](../../../../link/_part/doc/accessibility/index.md#regles-d-accessibilite) et les [règles d’accessibilité du composant Bouton](../../../../button/_part/doc/accessibility/index.md#regles-d-accessibilite).

#### Version inactive

- La mention d’information est située avant la liste de liens et de boutons de partage dans le code HTML.
- Les liens-icônes ou boutons-icônes désactivés conservent un ratio de contraste minimum de 3.
- Les liens désactivés n’ont pas d’attribut href et possèdent les attributs `aria-disabled="true"` et `role="link"`.

#### Bouton ou lien ?

>[!NOTE]
>Un bouton permet de **déclencher une action ou un événement**&nbsp;:
>
>- **nativement** en fonction du type du bouton&nbsp;: envoi d’un formulaire (`submit`), suppression de contenu de champs de formulaire (`reset`)&nbsp;;
>- **en JavaScript**&nbsp;: ouverture d’une fenêtre modale, fermeture d’un contenu, modification de la page…
>
>Un lien `<a href>` permet de rediriger vers une autre page ou à un autre endroit dans la page (ancre).

#### Contrastes de couleurs

Le composant Partage est suffisamment contrasté en thème clair et en thème sombre.

:::fr-table[Contraste des textes et des icônes]{valign=top multiline=true caption=true}
| Élément |  Thème clair | Thème sombre |
|------|-----|-----|
|**Texte Partager**| 11,4:1| 5,7:1 |
|**Lien-icône inactif**| 3:1 | 3,2:1 |
|**Lien-icône actif**| 14,9:1| 5,7:1 |
|**Mention d’information**| 5,7:1| 5,8:1 |
:::

---

### Restitution par les lecteurs d’écran

Par défaut, les lecteurs d’écran restituent le **nom, la description, l’état et le type**. L’ordre peut varier en fonction des lecteurs d’écran et de leur configuration.

L’attribut `disabled` est restitué différemment selon les lecteurs d’écran&nbsp;:

- VoiceOver macOS et iOS&nbsp;: «&nbsp;estompé&nbsp;»
- NVDA et JAWS&nbsp;: «&nbsp;non disponible&nbsp;»
- Narrateur et Talkback &nbsp;: «&nbsp;désactivé&nbsp;»

:::fr-accordion[#### Versions navigateurs et lecteurs d’écran]{id=sr-le-desktop}

Les tests de restitution ont été effectués en ajoutant le lecteur d’écran intégré à Windows 11 (Narrateur) et le navigateur web Chrome à l’environnement de tests du RGAA.

Versions des navigateurs web&nbsp;:

- Firefox 137
- Chrome 135
- Safari 18.4 (sur macOS uniquement)
- Microsoft Edge 135 (sur Windows 11 uniquement)

Version des lecteurs d’écran&nbsp;:
- NVDA 2024.4.2
- JAWS 2024
- VoiceOver macOS 15.4
- Narrateur (Windows 11)
- VoiceOver iOS
:::

---

### Critères RGAA applicables

- **Couleurs** : 3.2, 3.3
- **Liens** : 6.1, 6.2
- **Scripts** : 7.1, 7.3
- **Éléments obligatoires** : 8.9
- **Structuration** : 9.3
- **Présentation de l’information** : 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation** : 12.9
- **Consultation** : 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

#### Ressources

- [Disabling a link](https://www.scottohara.me/blog/2021/05/28/disabled-links.html)

## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/share/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Partage - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/share/share.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../dist/component/button/b...
```

(Truncated for brevity. See source file for full HTML)
