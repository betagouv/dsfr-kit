# DSFR Connect Component

*Generated from local node_modules*

## Presentation

---
title: Bouton FranceConnect
shortTitle: Bouton FranceConnect
titleId: Connect
description: Présentation du Bouton FranceConnect permettant à l’usager de s’authentifier via un fournisseur d’identité officiel reconnu par l’État.
shortDescription: Authentification avec FranceConnect
keywords: FranceConnect, authentification, identité numérique, connexion, bouton, DSFR, sécurité, accessibilité
cover: ./_asset/cover/cover.png
excerpt: Le bouton FranceConnect permet de proposer une méthode de connexion sécurisée en utilisant l’identité numérique d’un fournisseur agréé. Il s’intègre dans les interfaces comme premier choix d’authentification.
summary: Ce composant permet à l’usager de se connecter à un service public en ligne via FranceConnect, solution officielle d’identification. Il garantit la fiabilité de l’identité transmise et s’intègre comme option d’authentification prioritaire. Le bouton suit des règles d’intégration strictes pour assurer sa clarté, éviter toute confusion avec d’autres services et maintenir la confiance dans la marque FranceConnect.
mesh:
  - component/button
  - layout/page/register
  - layout/page/login
---

## Bouton FranceConnect

Le bouton FranceConnect est un élément d’interaction avec l’interface proposant à l’usager d’utiliser ses identifiants de connexion à l’un des fournisseurs d’identités ([impots.gouv.fr](http://impots.gouv.fr/), [ameli.fr](http://ameli.fr/), [l’Identité Numérique La Poste](https://lidentitenumerique.laposte.fr/), etc.) pour se connecter à un autre site.

Le fournisseur de service récupère auprès de FranceConnect un identifiant unique et une identité vérifiée par l’INSEE. Il est primordial dans l’usage du service FranceConnect et garantit sa reconnaissance et la confiance en la marque.

Retrouver le fonctionnement en détail ici : [https://docs.partenaires.franceconnect.gouv.fr/](https://docs.partenaires.franceconnect.gouv.fr/)

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=connect--connect}

### Quand utiliser ce composant ?

Utiliser le bouton FranceConnect pour proposer une connexion ou une création de compte simplifiée à l’usager.

> [!WARNING]
> Ce service est uniquement accessible des administrations ou fournisseurs de logiciel agissant pour le compte d’une administration.

### Comment utiliser ce composant ?

- **Proposer le bouton FranceConnect en premier mode d’authentification.** Il est positionner au-dessus des autres moyens de connexion proposés.
- **Accompagner le bouton FranceConnect du lien « Qu’est-ce que FranceConnect ? »**, positionné en-dessous, redirigeant vers l’URL [www.franceconnect.gouv.fr](http://www.franceconnect.gouv.fr) (cf. rubrique “Design”).
- **Dissocier visuellement vos moyens de connexion natifs** du bouton FranceConnect. Une séparation visible doit être mise en place.
- **Présenter le bouton FranceConnect comme une alternative** à un autre mode d’identification. La notion de "ou" doit figurer clairement (FranceConnect ou un autre mode d’identification).
- **Eviter toute confusion sur la nature du service proposé** en évitant de le positionner près de liens, d’icônes ou de services d'identification liés à des réseaux sociaux ou autres services similaires. FranceConnect n’est pas un réseau social et ne doit pas être présenté ou susceptible d’être perçu comme tel par l’usager.
- **Ouvrir la page de choix du fournisseur d’identité dans l’onglet actif de l’usager**. Elle ne doit pas être proposée dans une modale ou une pop-up au-dessus du site.

### Règles éditoriales

- **Garantir la compréhension de l’utilisateur** en accompagnant le bouton FranceConnect de la phrase : « FranceConnect est la solution proposée par l’État pour sécuriser et simplifier la connexion à vos services en ligne ».
- **Faire attention à l’écriture du terme « FranceConnect »** en accolant les deux mots France et Connect partout où « FranceConnect » est mentionné.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design du Bouton FranceConnect
shortTitle: Design du Bouton FranceConnect
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Bouton FranceConnect.
shortDescription: Authentification avec FranceConnect
keywords: FranceConnect, authentification, identité numérique, connexion, bouton, DSFR, sécurité, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Le bouton FranceConnect permet de proposer une méthode de connexion sécurisée en utilisant l’identité numérique d’un fournisseur agréé. Il s’intègre dans les interfaces comme premier choix d’authentification.
summary: Ce composant permet à l’usager de se connecter à un service public en ligne via FranceConnect, solution officielle d’identification. Il garantit la fiabilité de l’identité transmise et s’intègre comme option d’authentification prioritaire. Le bouton suit des règles d’intégration strictes pour assurer sa clarté, éviter toute confusion avec d’autres services et maintenir la confiance dans la marque FranceConnect.
mesh:
  - component/button
  - layout/page/register
  - layout/page/login
---

## Bouton FranceConnect

Le bouton FranceConnect est un élément d’interaction avec l’interface proposant à l’usager d’utiliser ses identifiants de connexion à l’un des fournisseurs d’identités ([impots.gouv.fr](http://impots.gouv.fr/), [ameli.fr](http://ameli.fr/), [l’Identité Numérique La Poste](https://lidentitenumerique.laposte.fr/), etc.) pour se connecter à un autre site.

Le fournisseur de service récupère auprès de FranceConnect un identifiant unique et une identité vérifiée par l’INSEE. Il est primordial dans l’usage du service FranceConnect et garantit sa reconnaissance et la confiance en la marque.

Retrouver le fonctionnement en détail ici : [https://docs.partenaires.franceconnect.gouv.fr/](https://docs.partenaires.franceconnect.gouv.fr/)

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie du bouton FranceConnect](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Le logo FranceConnect]{required=true}

::dsfr-doc-pin[Un libellé “S’identifier avec FranceConnect”]{required=true}

::dsfr-doc-pin[Une icône plus]

::dsfr-doc-pin[Un lien “Qu’est-ce que FranceConnect ?”]{required=true add='qui redirige vers l’URL franceconnect.gouv.fr'}

:::

### Variations

**FranceConnect+**

Si le service utilise FranceConnect+ (pour les démarches nécessitant une sécurité renforcée), il faut utiliser la variante du bouton FranceConnect+.

La structure est sensiblement la même que celle du bouton FranceConnect, à l’exception du lien “Qu’est-ce que FranceConnect+ ?” qui pointe vers l’URL [https://franceconnect.gouv.fr/france-connect-plus](https://franceconnect.gouv.fr/france-connect-plus).

### Tailles

La taille du bouton FranceConnect n’est pas personnalisable. Elle s’ajuste à son contenu.

### États

**Etat désactivé**

L’état désactivé indique que l'usager ne peut pas interagir avec le bouton FranceConnect.

::dsfr-doc-storybook{storyId="connect--default" args="{ disabled: true }"}

> [!NOTE]
> Utiliser cet état que très ponctuellement, pour indiquer à l’usager qu’il doit procéder à une action en amont par exemple.

**État au survol**

L’état au survol correspond au comportement constaté par l’usager lorsqu’il survole le bouton FranceConnect avec sa souris.

### Personnalisation

Le bouton FranceConnect n’est pas personnalisable.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Utiliser le bouton en l’état.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser la couleur du bouton.

:::

::::


::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas personnaliser la typographie du bouton.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-3.png)

Ne pas modifier le libellé du bouton.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code du Bouton FranceConnect
shortTitle: Code du Bouton FranceConnect
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Bouton FranceConnect.
shortDescription: Authentification avec FranceConnect
keywords: FranceConnect, authentification, identité numérique, connexion, bouton, DSFR, sécurité, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Le bouton FranceConnect permet de proposer une méthode de connexion sécurisée en utilisant l’identité numérique d’un fournisseur agréé. Il s’intègre dans les interfaces comme premier choix d’authentification.
summary: Ce composant permet à l’usager de se connecter à un service public en ligne via FranceConnect, solution officielle d’identification. Il garantit la fiabilité de l’identité transmise et s’intègre comme option d’authentification prioritaire. Le bouton suit des règles d’intégration strictes pour assurer sa clarté, éviter toute confusion avec d’autres services et maintenir la confiance dans la marque FranceConnect.
mesh:
  - component/button
  - layout/page/register
  - layout/page/login
---

## Bouton FranceConnect

Le bouton FranceConnect est un élément d’interaction avec l’interface proposant à l’usager d’utiliser ses identifiants de connexion à l’un des fournisseurs d’identités ([impots.gouv.fr](http://impots.gouv.fr/), [ameli.fr](http://ameli.fr/), [l’Identité Numérique La Poste](https://lidentitenumerique.laposte.fr/), etc.) pour se connecter à un autre site.

Le fournisseur de service récupère auprès de FranceConnect un identifiant unique et une identité vérifiée par l’INSEE. Il est primordial dans l’usage du service FranceConnect et garantit sa reconnaissance et la confiance en la marque.

Retrouver le fonctionnement en détail ici : [https://docs.partenaires.franceconnect.gouv.fr/](https://docs.partenaires.franceconnect.gouv.fr/)

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Bouton FranceConnect** permet de proposer une connexion via le service FranceConnect. Sa structure est la suivante :

- Un élément `<div>` de classe `fr-connect-group` contient le bouton FranceConnect et un lien d'information.
  - Le bouton FranceConnect est un élément HTML `<button>` défini par la classe `fr-connect`. Il doit contenir deux éléments `<span>` :
    - Un texte de connexion "S'identifier avec", un `<span>` avec la classe `fr-connect__login`. Ce texte peut être traduit mais ne doit pas être modifié.
    - L'intitulé du service "FranceConnect", un `<span>` avec la classe `fr-connect__brand`.
  - Le bouton doit être accompagné d'un lien d'information sur FranceConnect. Il s'agit d'un élément `<p>` contenant un lien `<a>` vers la page d'information de FranceConnect.
    - Le lien doit être ouvert dans une nouvelle fenêtre.
    - L'intitulé du lien peut être traduit mais ne doit pas être modifié.

Pour plus de clarté, le bouton est peut être accompagné de la phrase :
« FranceConnect est la solution proposée par l’État pour sécuriser et simplifier la connexion à vos services en ligne ».

**Structure HTML du bouton FranceConnect**

```HTML
<div class="fr-connect-group">
    <button class="fr-connect" type="button">
        <span class="fr-connect__login">S’identifier avec</span>
        <span class="fr-connect__brand">FranceConnect</span>
    </button>
    <p>
        <a href="https://franceconnect.gouv.fr/" target="_blank" rel="noopener" title="Qu’est-ce que FranceConnect ? - nouvelle fenêtre">Qu’est-ce que FranceConnect ?</a>
    </p>
</div>
```

**Structure HTML du bouton FranceConnect+**

```HTML
<div class="fr-connect-group">
    <button class="fr-connect fr-connect--plus" type="button">
        <span class="fr-connect__login">S’identifier avec</span>
        <span class="fr-connect__brand">FranceConnect</span>
    </button>
    <p>
        <a href="https://franceconnect.gouv.fr/france-connect-plus" target="_blank" rel="noopener" title="Qu’est-ce que FranceConnect+ ? - nouvelle fenêtre">Qu’est-ce que FranceConnect+ ?</a>
    </p>
</div>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top scroll=false}

| Dépendance | Obligatoire |
|------------|-------------|
| Core       | Oui         |
| Connect    | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/connect/connect.min.css" rel="stylesheet">
```

Une version <span lang="en">**standalone**</span> du bouton FranceConnect est également disponible, permettant de l'utiliser **en dehors du DSFR**.
Ce fichier CSS comprend le minimum requis du core du DSFR et le style du bouton FranceConnect.

```HTML
<link href="standalone/component/connect/connect.standalone.min.css" rel="stylesheet">
```

#### Variantes de style

Le composant Bouton FranceConnect est stylisé par les classes CSS suivantes :

- `.fr-connect-group` : Conteneur du bouton FranceConnect et du lien d'information.
- `.fr-connect` : Bouton FranceConnect.
- `.fr-connect__login` : Texte "S'identifier avec".
- `.fr-connect__brand` : Intitulé du service
- `.fr-connect-group p` : Conteneur du lien d'information.
- `.fr-connect-group a` : Lien d'information.

Une classe supplémentaire `.fr-connect--plus` peut être ajoutée au bouton FranceConnect pour proposer une connexion via FranceConnect+.

---

### JavaScript

La documentation technique pour la mise en place de FranceConnect en tant que fournisseur de service peut être consulter sur le [site de FranceConnect](https://partenaires.franceconnect.gouv.fr/fcp/fournisseur-service)

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+connect+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Bouton FranceConnect
shortTitle: Accessibilité du Bouton FranceConnect
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Bouton FranceConnect.
shortDescription: Authentification avec FranceConnect
keywords: FranceConnect, authentification, identité numérique, connexion, bouton, DSFR, sécurité, accessibilité
cover: ../_asset/cover/cover.png
excerpt: Le bouton FranceConnect permet de proposer une méthode de connexion sécurisée en utilisant l’identité numérique d’un fournisseur agréé. Il s’intègre dans les interfaces comme premier choix d’authentification.
summary: Ce composant permet à l’usager de se connecter à un service public en ligne via FranceConnect, solution officielle d’identification. Il garantit la fiabilité de l’identité transmise et s’intègre comme option d’authentification prioritaire. Le bouton suit des règles d’intégration strictes pour assurer sa clarté, éviter toute confusion avec d’autres services et maintenir la confiance dans la marque FranceConnect.
mesh:
  - component/button
  - layout/page/register
  - layout/page/login
---

## Bouton FranceConnect

Le bouton FranceConnect est un élément d’interaction avec l’interface proposant à l’usager d’utiliser ses identifiants de connexion à l’un des fournisseurs d’identités ([impots.gouv.fr](http://impots.gouv.fr/), [ameli.fr](http://ameli.fr/), [l’Identité Numérique La Poste](https://lidentitenumerique.laposte.fr/), etc.) pour se connecter à un autre site.

Le fournisseur de service récupère auprès de FranceConnect un identifiant unique et une identité vérifiée par l’INSEE. Il est primordial dans l’usage du service FranceConnect et garantit sa reconnaissance et la confiance en la marque.

Retrouver le fonctionnement en détail ici : [https://docs.partenaires.franceconnect.gouv.fr/](https://docs.partenaires.franceconnect.gouv.fr/)

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Bouton FranceConnect** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

## Interactions clavier

Aucune interaction au clavier spécifique au composant.

## Règles d’accessibilité

### Structure

Le **bouton de connexion** est structuré dans un élément `button`.
Il est possible de le structurer dans un élément `a href` également si besoin.

Le **lien «&nbsp;Qu’est-ce que FranceConnect&nbsp;?&nbsp;»** s’ouvre dans un nouvel onglet ou une nouvelle fenêtre.

Il est nécessaire d’ajouter un attribut `title` qui reprend l’intitulé du lien pour l’indiquer.
Ex. `title="Qu’est-ce que FranceConnect ? - nouvelle fenêtre"`

### Contenu inséré en CSS

Sur la variante FranceConnect+, le + est inséré en CSS avec la propriété `content` et le pseudo-élément `::after` sur le bouton de connexion.

> [!NOTE]
> **La [technique F87](https://www.w3.org/WAI/WCAG21/Techniques/failures/F87) de WCAG, encore référencée sur le critère 10.2 du RGAA, est désormais obsolète**.
> En effet, les contenus porteurs d’information insérés avec la propriété CSS `content` sont désormais bien restitués par les technologies d’assistance.

**Il est néanmoins plus robuste d’utiliser le HTML pour les contenus porteurs d’information**.

À noter que les contenus porteurs d’information insérés avec CSS peuvent poser des problèmes d’utilisabilité.
Selon les navigateurs, le contenu ne peut pas être recherché, sélectionné, copié, collé. Il n’apparaît pas non plus dans certains modes de lecture des navigateurs.

### Contrastes de couleurs

Le composant est suffisament contrasté en thème clair et en thème sombre.

:::fr-table[Contrastes des textes]{valign=top multiline=true caption=false}
| Texte |  Thème clair | Thème sombre |
|------|-----|-----|
|Bouton|14,9:1|4,7:1|
|Lien|14,9:1|5,8:1|

---

### Restitution par les lecteurs d’écran

Des tests de restitution ont été effectués avec les différents lecteurs d’écran ainsi qu’avec d’autres technologies d’assistance (contrôle vocal, loupe d’écran vocalisée) sur le contenu inséré en CSS.

**L’implémentation est bien supportée et restituée partout.**

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

- **Couleurs&nbsp;:** 3.2, 3.3
- **Liens&nbsp;:** 6.1, 6.2
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Technique F87 - WCAG](https://www.w3.org/WAI/WCAG21/Techniques/failures/F87)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/connect/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Bouton FranceConnect - Système de design</title>
    <meta name="theme-color" content="#000091"><!-- Défini la couleur de thème du navigateur (Safari/Android) -->
    <link rel="apple-touch-icon" href="../../../dist/favicon/apple-touch-icon.png"><!-- 180×180 -->
    <link rel="icon" href="../../../dist/favicon/favicon.svg" type="image/svg+xml">
    <!-- si favicon.ico peut etre placé à la racine du serveur, retirer la ligne ci-dessous -->
    <link rel="shortcut icon" href="../../../dist/favicon/favicon.ico" type="image/x-icon"><!-- 32×32 -->
    <link rel="manifest" href="../../../dist/favicon/manifest.webmanifest" crossorigin="use-credentials">
    <!-- Modifier les chemins relatifs des favicons en fonction de la structure du projet -->
    <!-- Dans le fichier manifest.webmanifest aussi, modifier les chemins vers les images -->
    <link href="../../../dist/core/core.main.css" rel="stylesheet">
    <link href="../../../dist/component/connect/connect.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../dist/c...
```

(Truncated for brevity. See source file for full HTML)
