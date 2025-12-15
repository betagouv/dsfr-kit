# DSFR Alert Component

*Generated from local node_modules*

## Presentation

---
title: Alerte
shortTitle: Alerte
titleId: Alert
description: Présentation du composant Alerte utilisé pour relayer une information importante à l’usager de façon contextuelle sans interrompre sa navigation.
shortDescription: Relayer une information importante
keywords: alerte, message, erreur, succès, information, attention, DSFR, accessibilité, interface
cover: ./_asset/cover/cover.png
excerpt: Le composant Alerte informe l’usager d’un événement ou d’un état du système, comme une erreur, une confirmation ou une information complémentaire, de manière non bloquante.
summary: Ce composant permet de transmettre à l’usager un message important en lien avec une action ou un état du système, sans interrompre sa tâche. Il est utilisé dans des contextes variés, comme un formulaire ou un événement technique. Il propose plusieurs variations (succès, erreur, information, attention), deux tailles, et des règles éditoriales strictes pour garantir une communication claire, courtoise et accessible.
mesh:
  - component/form
---

## Alerte

L’alerte est un élément d’indication poussé par l’interface pour relayer une information à l’usager.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=alert--alert}

### Quand utiliser ce composant ?

**Intégrer des alertes pour attirer l’attention de l’usager** sur une information sans interrompre sa tâche en cours.

Les alertes s’affichent de manière contextuelle dans une page ou un formulaire, suite à une interaction de l’usager (exemple : à la soumission d’un formulaire) ou lors d’événements côté application/système (exemple : au rechargement d’une page).

### Comment utiliser ce composant ?

- **Choisir la variation de l’alerte adéquate**, correspondant à la nature de l’information qu’elle relaie (erreur, succès, information etc.)

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/use/do-1.png)

Adapter l’alerte à la nature de l’information relayée.

:::

::::

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](./_asset/use/dont-1.png)

Ne pas proposer une variation de l’alerte ne correspondant pas à la nature de l’information relayée.

:::

::::

- **Placer l’alerte en première place du contenu auquel elle est associée** (exemple : en haut d’une page, d’un formulaire, d’un container etc.)

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-2.png)

Placer l’alerte de succès en haut de page suite à la soumission d’un formulaire, par exemple.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-2.png)

Ne pas placer l’alerte de succès en bas de page suite à la soumission d’un formulaire.

:::

::::

- **Rendre toute action induite suite à l’affichage d’une alerte aussi simple que possible**, notamment en détaillant ce qui est attendu de l’usager dans la description.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-3.png)

Préciser à l’usager l’action attendue suite à l’apparition de l’alerte.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-3.png)

Ne pas laisser l’usager supposer du problème rencontré. La marche à suivre doit être claire.

:::

::::

### Règles éditoriales

- **Choisir un titre d'alerte clair et concis** permettant à l’usager de comprendre facilement la situation.
- **Détailler clairement l’information ou le problème ainsi que l’action attendue** (si elle existe) à l’usager à l’aide de la description.
- **Arborer un ton courtois**, l’objectif étant d’accompagner l’usager et non de le blâmer.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-1.png)

Employer un ton courtois, l’objectif étant d’accompagner l’usager au sein de son parcours.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-1.png)

Ne pas employer un ton laissant suggérer que l’on blâme l’usager pour son erreur.

:::

::::

- **Employer un langage compréhensible facilement** en évitant tout jargon technique.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-2.png)

S’affranchir de tout terme technique pour permettre la compréhension par un plus grand nombre.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-2.png)

Ne pas inclure de termes techniques à une alerte, au risque d’altérer la bonne compréhension des usagers.

:::

::::

- **Expliciter la nature du message** porté par le composant (succès, erreur, information etc.) dans le titre de l’alerte. L’icône et la couleur ne garantissent pas à elles seules la bonne compréhension du message pour la totalité des usagers.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-3.png)

Préciser la nature du message porté par l’alerte dans son titre.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-2.png)

Ne pas s’appuyer uniquement sur l’icône et la couleur de l’alerte pour restituer la nature du message.

:::

::::


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design de l'Alerte
shortTitle: Design de l'Alerte
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Alerte.
shortDescription: Relayer une information importante
keywords: alerte, message, erreur, succès, information, attention, DSFR, accessibilité, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Alerte informe l’usager d’un événement ou d’un état du système, comme une erreur, une confirmation ou une information complémentaire, de manière non bloquante.
summary: Ce composant permet de transmettre à l’usager un message important en lien avec une action ou un état du système, sans interrompre sa tâche. Il est utilisé dans des contextes variés, comme un formulaire ou un événement technique. Il propose plusieurs variations (succès, erreur, information, attention), deux tailles, et des règles éditoriales strictes pour garantir une communication claire, courtoise et accessible.
mesh:
  - component/form
---

## Alerte

L’alerte est un élément d’indication poussé par l’interface pour relayer une information à l’usager.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie de l'alerte](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Une icône]{required=true}

::dsfr-doc-pin[Un titre]{required=true add="en option sur la version SM"}

::dsfr-doc-pin[Une croix de fermeture]

::dsfr-doc-pin[Un texte de description]{add="obligatoire sur la version SM"}

:::

### Variations

**Alerte simple**

::dsfr-doc-storybook{storyId=alert--title}

Utiliser l’alerte simple lorsqu’un titre seul permet de donner l’information à l’usager.

**Alerte avec description**

::dsfr-doc-storybook{storyId=alert--description}

Préférer l’alerte avec description pour donner des informations complémentaires et nécessaire à l’usager, en plus du titre.

**Alerte avec bouton de fermeture**

::dsfr-doc-storybook{storyId=alert--dismissible}

Ajouter un bouton de fermeture à l’alerte pour permettre à l’usager de la masquer une fois consultée.

Les variations suivantes permettent de donner des informations de natures différentes.

**Erreur**

::dsfr-doc-storybook{storyId=alert--error}

Utiliser l'alerte erreur lorsqu’il y a plusieurs erreurs dans un formulaire ou des erreurs bloquantes à remonter à l’usager.

**Succès**

::dsfr-doc-storybook{storyId=alert--success}

Utiliser l'alerte succès pour indiquer à l’usager qu’une action ou une tâche a été terminée avec succès.

**Information**

::dsfr-doc-storybook{storyId=alert--information}

Utiliser l'alerte information pour mettre en exergue des informations importantes.

**Attention**

::dsfr-doc-storybook{storyId=alert--warning}

Utiliser l'alerte attention (warning) pour mettre en exergue des risques ou points d’attention importants.

### Tailles

L’alerte est disponibles en 2 tailles :

- SM pour small

::dsfr-doc-storybook{storyId=alert--size-sm}

Utiliser l’alerte en small lorsque l’espace d’affichage est réduit.

- MD pour medium - taille par défaut

::dsfr-doc-storybook{storyId=alert--size-md}

Utiliser l’alerte en medium lorsque l’espace d’affichage est important.

### États

L’alerte n’est sujette à aucun changement d’état.

### Personnalisation

L’alerte n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](#alerte).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas changer la couleur d’une alerte car elle est directement liée au message qu’elle porte.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-2.png)

Ne pas changer le pictogramme d’une alerte car il est directement lié au message qu’elle porte.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code de l'Alerte
shortTitle: Code de l'Alerte
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Alerte.
shortDescription: Relayer une information importante
keywords: alerte, message, erreur, succès, information, attention, DSFR, accessibilité, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Alerte informe l’usager d’un événement ou d’un état du système, comme une erreur, une confirmation ou une information complémentaire, de manière non bloquante.
summary: Ce composant permet de transmettre à l’usager un message important en lien avec une action ou un état du système, sans interrompre sa tâche. Il est utilisé dans des contextes variés, comme un formulaire ou un événement technique. Il propose plusieurs variations (succès, erreur, information, attention), deux tailles, et des règles éditoriales strictes pour garantir une communication claire, courtoise et accessible.
mesh:
  - component/form
---

## Alerte

L’alerte est un élément d’indication poussé par l’interface pour relayer une information à l’usager.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Alerte** est utilisé pour afficher des messages contextuels comme des informations, avertissements, erreurs ou succès. Il est composé de trois éléments principaux :

- Un conteneur principal de type `<div>` avec la classe `fr-alert`, représentant l'alerte elle-même.
- Un titre facultatif contenu dans un niveau d'entête `<hx>`, variable en fonction de sa hiérarchie dans la page (par défaut h3), avec la classe `fr-alert__title`, qui décrit la nature du message.
- Un paragraphe `<p>` qui contient le texte du message.
- Un bouton de fermeture facultatif `<button>` de type "button" pour permettre à l'utilisateur de fermer l'alerte. Ce bouton doit être lié à une fonction JavaScript pour supprimer l'alerte du DOM lorsqu'il est cliqué.

Le composant Alerte utilise des classes spécifiques pour définir son type (info, warning, error, success) et sa taille (sm, md).

**Exemple de structure HTML**

```HTML
<div class="fr-alert">
  <h3 class="fr-alert__title">Titre de l'alerte</h3>
  <p>Description de l'alerte</p>
  <button title="Masquer le message" onclick="const alert = this.parentNode; alert.parentNode.removeChild(alert)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
</div>
```

#### Déclinaisons d'alertes

Le composant Alerte propose plusieurs variations en fonction du type de message :

- **info** : pour les messages d'information
- **warning** : pour les messages d'avertissement
- **error** : pour les messages d'erreur
- **success** : pour les messages de succès

Ces variations sont définies par l'ajout de classes correspondantes sur le conteneur principal :

- `fr-alert--info`
- `fr-alert--warning`
- `fr-alert--error`
- `fr-alert--success`

**Exemple de structure HTML avec des déclinaisons**

```HTML
<div class="fr-alert fr-alert--error">
  <h3 class="fr-alert__title">Erreur critique</h3>
  <p>Une erreur est survenue, veuillez réessayer plus tard.</p>
  <button title="Masquer le message" onclick="const alert = this.parentNode; alert.parentNode.removeChild(alert)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
</div>
```

#### Taille des alertes

Le composant Alerte peut être utilisé avec différentes tailles :

- **SM** (small) : pour les alertes petites
- **MD** (medium) : pour les alertes de taille normale (par défaut)

Les tailles sont définies par l'ajout des classes :

- Par défaut, les alertes sont de taille moyenne
- `fr-alert--sm` pour les alertes petites

**Exemple de structure HTML avec taille SM**

```HTML
<div class="fr-alert fr-alert--success fr-alert--sm">
  <h3 class="fr-alert__title">Succès</h3>
  <p>Votre demande a été traitée avec succès.</p>
  <button title="Masquer le message" onclick="const alert = this.parentNode; alert.parentNode.removeChild(alert)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
</div>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------|----------|
| Core       | Oui         |          |
| Alert      | Oui         |          |
| Button     | Non         | Uniquement pour la version refermable |
| Utility    | Non         | Uniquement pour l'ajout d'icône custom |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/alert/alert.min.css" rel="stylesheet">
```

#### Variantes de style

L'alerte dispose des variations visuelles suivantes en fonction du type de message :

- `fr-alert--info` : pour un message informatif (bleu)
- `fr-alert--warning` : pour un message d'avertissement (jaune)
- `fr-alert--error` : pour un message d'erreur (rouge)
- `fr-alert--success` : pour un message de succès (vert)

Chaque type d'alerte se distingue par une couleur de fond et une icône spécifique.

Les tailles d'alerte sont définies par :

- `fr-alert--sm` pour les petites alertes, qui ont une hauteur réduite et un espacement intérieur plus petit.
- La taille est médium par défaut.

---

### JavaScript

Le composant Alerte nécessite un JavaScript minimal pour la gestion de la fermeture de l'alerte. En cliquant sur le bouton de fermeture, l'alerte est retirée du DOM grâce à un événement JavaScript. Le DSFR ne gère pas cette fonctionnalité car trop dépendante de la technologie utilisée.

#### Fermeture de l'alerte

Le bouton de fermeture doit être lié à une fonction JavaScript pour supprimer l'alerte du DOM. Voici un exemple de code en javascript vanilla pour gérer la suppression de l'alerte :

```javascript
document.querySelector('.fr-alert__close').addEventListener('click', function() {
  this.closest('.fr-alert').remove();
});
```

Dans l'exemple HTML fourni, cette fonction est déjà intégrée directement dans l'attribut `onclick` du bouton de fermeture.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+alert+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de l'Alerte
shortTitle: Accessibilité de l'Alerte
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Alerte.
shortDescription: Relayer une information importante
keywords: alerte, message, erreur, succès, information, attention, DSFR, accessibilité, interface
cover: ../_asset/cover/cover.png
excerpt: Le composant Alerte informe l’usager d’un événement ou d’un état du système, comme une erreur, une confirmation ou une information complémentaire, de manière non bloquante.
summary: Ce composant permet de transmettre à l’usager un message important en lien avec une action ou un état du système, sans interrompre sa tâche. Il est utilisé dans des contextes variés, comme un formulaire ou un événement technique. Il propose plusieurs variations (succès, erreur, information, attention), deux tailles, et des règles éditoriales strictes pour garantir une communication claire, courtoise et accessible.
mesh:
  - component/form
---

## Alerte

L’alerte est un élément d’indication poussé par l’interface pour relayer une information à l’usager.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Alerte** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

#### Contenu de l’alerte

- Le niveau de titre dépend du contexte de la page et ne sera pas toujours un `<h3>`.
- Le type d’alerte (info, error, success, warning) doit être indiqué textuellement dans le contenu de l'alerte par les termes : «&nbsp;information&nbsp;», «&nbsp;erreur&nbsp;», «&nbsp;succès&nbsp;», ou «&nbsp;attention&nbsp;».

#### Alertes avec bouton de fermeture

- Les alertes refermables ont un bouton de fermeture avec un intitulé explicite («&nbsp;Masquer le message&nbsp;»).
- À la fermeture de l’alerte, le focus doit être repositionné à un endroit pertinent pour l’utilisateur

#### Alertes ajoutées dynamiquement

Une alerte ajoutée après le chargement de la page doit être perçue par tous les utilisateurs.

Pour les alertes simples, ajouter sur le conteneur de l’alerte&nbsp;:
- un `role="alert"` pour les messages d’erreur ou les avertissements
- un `role="status"` pour les messages de succès ou d’information.

> [!WARNING]
> Ne pas faire disparaître l’alerte sans action de l’utilisateur. Les alertes temporaires (<span lang="en">toast</span>) posent d’importants problèmes d’accessibilité et d’utilisabilité.

### Restitution par les lecteurs d’écran

La restitution des rôles `alert` et `status` par les lecteurs d’écran varie selon les implémentations.

Le `role="alert"` est toujours correctement restitué par tous les lecteurs d’écran, peu importe la méthode d’implémentation, contrairement au `role="status"`.

En cas de problème de restitution avec le `role="status"`, il peut également être utilisé sur les messages d’information ou de succès.

### Critères RGAA applicables

- **Couleurs**&nbsp;: 3.2, 3.3
- **Scripts&nbsp;:** 7.1, 7.3, 7.5
- **Éléments obligatoires&nbsp;:** 8.9
- **Structuration&nbsp;:** 9,1
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- <a href="https://www.w3.org/TR/wai-aria-1.1/#live_region_roles"  target="_blank" rel="noopener external" title="W3C - nouvelle fenêtre">Spécification ARIA - <span lang="en">Live regions</span></a>
- [Rôle alert](https://www.w3.org/TR/wai-aria-1.1/#alert)
- [Rôle status](https://www.w3.org/TR/wai-aria-1.1/#status)

#### Ressources

- <a href="https://access42.net/live-regions-aria-live-analogues-alert-log-status/" title="access42 - nouvelle fenêtre" target="_blank" rel="noopener external"><span lang="en">Live regions</span> ARIA : aria-live et ses analogues alert, log, status</a>
- <a href="https://access42.net/live-regions-aria-restitution-lecteurs-ecran/" title="access42 - nouvelle fenêtre" target="_blank" rel="noopener external"><span lang="en">Live regions</span> ARIA : comment garantir leur restitution par les lecteurs d’écran</a>
- <a href="https://www.sarasoueidan.com/blog/accessible-notifications-with-aria-live-regions-part-1/" title="sarasoueidan - nouvelle fenêtre" target="_blank" rel="noopener external" lang="en">Accessible notifications with ARIA Live Regions (Part 1)</a>
- <a href="https://www.sarasoueidan.com/blog/accessible-notifications-with-aria-live-regions-part-2/" title="sarasoueidan - nouvelle fenêtre" target="_blank" rel="noopener external" lang="en">Accessible notifications with ARIA Live Regions (Part 2)</a>


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/alert/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Alerte - Système de design</title>
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
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/component/alert/alert.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/utility/utility.main.css" rel="stylesheet">
    <link href="../../../dist/core/core.legacy.css" rel="stylesheet">
    <link href="../../../dist/component/button/bu...
```

(Truncated for brevity. See source file for full HTML)
