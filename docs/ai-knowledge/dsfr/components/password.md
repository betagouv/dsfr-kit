# DSFR Password Component

*Generated from local node_modules*

## Presentation

---
title: Mot de passe
shortTitle: Mot de passe
titleId: Password
description: Présentation du composant Champ mot de passe permettant à l’usager de créer ou saisir un mot de passe lors d’une connexion ou d’une création de compte, avec des règles de sécurité adaptées à chaque usage.
shortDescription: Saisie ou création de mot de passe, avec affichage masqué et recommandations de sécurité.
keywords: mot de passe, sécurité, connexion, création de compte, champ, saisie, formulaire, visibilité, ANSSI, DSFR
cover: ./_asset/cover/cover.png
excerpt: Le champ mot de passe permet d’accompagner l’usager lors de la création ou la saisie d’un mot de passe, avec affichage masqué, retour d’erreur et règles de sécurité.
summary: Le composant mot de passe est conçu pour les cas d’usage de création de compte ou de connexion. Il propose une saisie masquée par défaut avec la possibilité d’afficher le contenu saisi, une gestion des erreurs en cas de non-conformité aux règles de sécurité, ainsi que des textes d’accompagnement dynamiques. Ce composant respecte les recommandations de l’ANSSI et s’intègre au sein des pages d’authentification du DSFR.
mesh:
  - component/alert
  - component/input
---

## Mot de passe

Le mot de passe est un élément d’interaction avec l’interface permettant d’aider l’usager à créer ou saisir un mot de passe.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=password--password}

### Quand utiliser ce composant ?

Utiliser le mot de passe lorsque votre service nécessite de demander à l’usager de créer ou saisir un mot de passe, notamment dans les cas de création de compte ou de connexion.

Pour ces deux usages, des modèles de pages sont à disposition : [page de création de compte](../../../../layout/page/register/_part/doc/index.md) et [page de connexion](../../../../layout/page/login/_part/doc/index.md).

### Comment utiliser ce composant ?

- **Permettre à l’usager de saisir le mot de passe par copier/coller** dans le champ de saisie afin de simplifier son expérience.
- **Masquer le mot de passe par défaut** mais donner la possibilité à l’usager de l'afficher au besoin. Sur certains navigateurs, le dernier caractère saisi reste visible.
- **Appliquer une contrainte sur le nombre de caractères maximum uniquement si vous le souhaitez**. Le composant ne l’impose pas par défaut et autorise la saisie de long mot de passe.
- **Adapter le niveau de contrainte du mot de passe demandé à l’usager au besoin de sécurité de votre service** afin de ne pas rendre la saisie difficile si cela ne le nécessite pas (cf. [Guide des règles de sécurisation de mot de passe de l’ANSSI](https://www.ssi.gouv.fr/guide/mot-de-passe/))
- **Éviter tant que possible de forcer le changement de mot de passe par l’usager** (tous les mois ou trimestres, par exemple). Cette pratique complexifie la mémorisation pour l’usager et donc l’accès à votre service. Cette recommandation est évidemment à adapter selon les contraintes de sécurité auxquelles votre service est soumis.
- **Veiller à ne jamais envoyer de mot de passe en clair par mail ou autre** si vous proposez un système de récupération de mot de place. Redirigez plutôt l’usager vers un formulaire temporaire lui permettant de mettre à jour son mot de passe.

### Règles éditoriales

Le mot de passe n’est régi par aucune règle éditoriale spécifique.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design du Mot de passe
shortTitle: Design du Mot de passe
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Mot de passe.
shortDescription: Saisie ou création de mot de passe, avec affichage masqué et recommandations de sécurité.
keywords: mot de passe, sécurité, connexion, création de compte, champ, saisie, formulaire, visibilité, ANSSI, DSFR
cover: ../_asset/cover/cover.png
excerpt: Le champ mot de passe permet d’accompagner l’usager lors de la création ou la saisie d’un mot de passe, avec affichage masqué, retour d’erreur et règles de sécurité.
summary: Le composant mot de passe est conçu pour les cas d’usage de création de compte ou de connexion. Il propose une saisie masquée par défaut avec la possibilité d’afficher le contenu saisi, une gestion des erreurs en cas de non-conformité aux règles de sécurité, ainsi que des textes d’accompagnement dynamiques. Ce composant respecte les recommandations de l’ANSSI et s’intègre au sein des pages d’authentification du DSFR.
mesh:
  - component/alert
  - component/input
---

## Mot de passe

Le mot de passe est un élément d’interaction avec l’interface permettant d’aider l’usager à créer ou saisir un mot de passe.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie du mot de passe](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un libellé “Mot de passe”]{required=true}

::dsfr-doc-pin[Un texte de description]{add="recommandé pour préciser les règles de sécurisation notamment dans les cas de création de compte"}

::dsfr-doc-pin[Une fonctionnalité d’affichage du mot de passe]{required=true}

::dsfr-doc-pin[Un champ de saisie “mot de passe”]{required=true}

::dsfr-doc-pin[Un message d’accompagnement]{required=true add="pour aider au remplissage"}

:::

### Variations

Le mot de passe se base sur le champ de saisie de type “mot de passe” et se décline en deux variations, couvrant les deux cas d’usages de référence.

**Demande de mot de passe pour la création d’un compte ou modification de mot de passe associé à un compte existant**

::dsfr-doc-storybook{storyId=password--login}

- Utiliser cette variation pour permettre à l’usager de créer ou modifier un mot de passe, soumis à des contraintes de règles de sécurisation.
- Préciser les règles à respecter et les éventuels formats attendus (longueurs, utilisation de caractères et de casse spécifiques, etc.) au sein du texte de description, prévu à cet effet.
- Rendre la description du champ dédié au mot de passe dynamique en fonction du contenu saisi.

**Demande de mot de passe pour la connexion**

::dsfr-doc-storybook{storyId=password--register}

- Utiliser cette variation pour permettre à l’usager de rentrer son mot de passe afin de se connecter à son compte.
- Proposer un lien vers la page de récupération de mot de passe en-dessous du champ de saisie.

### Tailles

La largeur du mot de passe s’adapte à la taille de son conteneur.

### États

**État d’erreur**

- Demande de mot de passe pour la création d’un compte ou modification de mot de passe associé à un compte existant

::dsfr-doc-storybook{storyId=password--register-validate}

Dans le cas d’une erreur de saisie, reprendre l’affichage d’erreur du champ de saisie et préciser dans le texte le type d’erreur rencontré en fonction des règles de sécurisation (exemple : “Le mot de passe doit comporter au moins un chiffre”).

- Demande de mot de passe pour la connexion

Dans le cas d’erreur de saisie, préférer l’usage d’une alerte proposant un message d’erreur global à l’identification (exemple : “Le couple mot de passe/identifiant saisi n’est pas correct” ou “Erreur d'identification : merci de vérifier votre email et votre mot de passe”).

Reprendre l’affichage d’erreur du champ de saisie inviduel risquerait en effet de donner des indications sur l’origine de l’erreur (entre l’identifiant ou le mot de passe).

### Personnalisation

Le mot de passe n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](#mot-de-passe).


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code du Mot de passe
shortTitle: Code du Mot de passe
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Mot de passe.
shortDescription: Saisie ou création de mot de passe, avec affichage masqué et recommandations de sécurité.
keywords: mot de passe, sécurité, connexion, création de compte, champ, saisie, formulaire, visibilité, ANSSI, DSFR
cover: ../_asset/cover/cover.png
excerpt: Le champ mot de passe permet d’accompagner l’usager lors de la création ou la saisie d’un mot de passe, avec affichage masqué, retour d’erreur et règles de sécurité.
summary: Le composant mot de passe est conçu pour les cas d’usage de création de compte ou de connexion. Il propose une saisie masquée par défaut avec la possibilité d’afficher le contenu saisi, une gestion des erreurs en cas de non-conformité aux règles de sécurité, ainsi que des textes d’accompagnement dynamiques. Ce composant respecte les recommandations de l’ANSSI et s’intègre au sein des pages d’authentification du DSFR.
mesh:
  - component/alert
  - component/input
---

## Mot de passe

Le mot de passe est un élément d’interaction avec l’interface permettant d’aider l’usager à créer ou saisir un mot de passe.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le composant **Mot de passe** permet à l'utilisateur de masquer ou révéler le texte du mot de passe.
Sa structure est la suivante :

- Le Conteneur du mot de passe, obligatoire, est un élément HTML `<div>` défini par la classe `fr-password`.
- Le libellé du mot de passe, obligatoire, doit être un élément HTML `<label>` avec les classe `fr-label` et `fr-password__label`, associé au mot de passe par son attribut `for` dont la valeur est égale à l'attribut `id` du mot de passe.
- Une description additionnelle du mot de passe, optionnelle, peut être ajoutée dans le libellé, elle est définie par un élément `<span>` et la classe utilitaire `fr-hint-text`.
- Le champ de mot de passe est contenu dans un élément HTML `<div>` défini par la classe `fr-input-wrap`.
- Le mot de passe est un élément HTML `<input>` de type `password`, obligatoire, défini par la classe `fr-password__input`.
  - Il dispose d'un attribut `autocomplete` dont la valeur varie selon l'usage du mot de passe entre `new-password` pour la création et `current-password` pour la connexion.
  - Les attributs `autocapitalize` et `autocorrect` ont pour valeur `false` par défaut.
- Un message d'information, d'erreur ou de succès peut être associé au mot de passe en utilisant un élément HTML `<div>` avec la classe `fr-messages-group` dans lequel on peut ajouter un message `fr-message`.
  - Son attribut `id` doit être associé à l'attribut `aria-describedby` du mot de passe.
  - Ce bloc peut être placé vide et être rempli dynamiquement, auquel cas il doit être annoncé à l'utilisateur en utilisant l'attribut `aria-live="polite"`.
- Une Fonctionnalité d’affichage du mot de passe, obligatoire, est contenue dans un élément `<div>` défini par les classes `fr-password__checkbox`, `fr-checkbox-group`, et `fr-checkbox-group--sm`, contenant :
  - La case à cocher pour révéler ou masquer le mot de passe est un élément `<input>` de type `checkbox`.
  - Le libellé de la case à cocher, obligatoire, doit être un élément HTML `<label>` avec la classe `fr-label` associé à la case à cocher par son attribut `for` dont la valeur est égale à l'attribut `id` de la case à cocher.

**Exemple de structure HTML**

```HTML
<div class="fr-password">
    <label class="fr-password__label fr-label" for="password-input">
        Mot de passe
        <span class="fr-hint-text">Texte de description additionnel</span>
    </label>
    <div class="fr-input-wrap">
        <input id="password-input" class="fr-password__input fr-input" autocapitalize="off" autocorrect="off" aria-describedby="password-input-messages" aria-required="true" name="password" autocomplete="new-password" type="password">
    </div>
    <div class="fr-messages-group" id="password-input-messages" aria-live="polite">
        <p class="fr-message">Votre mot de passe doit contenir :</p>
        <p class="fr-message fr-message--info" data-fr-valid="validé" data-fr-error="en erreur">12 caractères minimum</p>
        <p class="fr-message fr-message--info" data-fr-valid="validé" data-fr-error="en erreur">1 caractère spécial minimum</p>
        <p class="fr-message fr-message--info" data-fr-valid="validé" data-fr-error="en erreur">1 chiffre minimum</p>
    </div>
    <div class="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
        <input aria-label="Afficher le mot de passe" id="password-show" type="checkbox">
        <label class="fr-label" for="password-show">
            Afficher
        </label>
    </div>
</div>
```

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------| ---------|
| Core       | Oui         |          |
| Form       | Oui         |          |
| Input      | Oui         |          |
| checkbox   | Oui         |          |
| Password   | Oui         |          |
| Link       | Non         | Uniquement pour le lien de récupération du mot de passe |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/input/input.min.css" rel="stylesheet">
<link href="dist/component/checkbox/checkbox.min.css" rel="stylesheet">
<link href="dist/component/password/password.min.css" rel="stylesheet">
```

#### Variantes de validation

Un message d'information complémentaire, d'erreur ou de succès doit être ajouté dans un bloc `fr-messages-group` à la fin du groupe du mot de passe et doit être lié à la liste déroulante via un attribut `aria-describedby`.

Pour ajouter un état de validation à un message, ajoutez une des classes suivantes sur le paragraphe comportant le message `<p class="fr-message">` :

- Par défaut le message indique une information.
- La classe `fr-message--error` : Indique une erreur.
- La classe `fr-message--valid` : Indique un succès.

**Exemple de mot de passe après validation**

:::fr-accordion[Déplier pour voir le code]{id=code-password-validation}

```HTML
<div class="fr-password">
    <label class="fr-password__label fr-label" for="password-validation-input">
        Mot de passe
    </label>
    <div class="fr-input-wrap">
        <input class="fr-password__input fr-input" autocapitalize="off" autocorrect="off" aria-describedby="password-validation-input-messages" aria-required="true" name="password" value="x8A@" autocomplete="new-password" id="password-validation-input" type="password">
    </div>
    <div class="fr-messages-group" id="password-validation-input-messages" aria-live="polite">
        <p class="fr-message">Votre mot de passe doit contenir :</p>
        <p class="fr-message fr-message--error" data-fr-valid="validé" data-fr-error="en erreur">12 caractères minimum</p>
        <p class="fr-message fr-message--valid" data-fr-valid="validé" data-fr-error="en erreur">1 caractère spécial minimum</p>
        <p class="fr-message fr-message--valid" data-fr-valid="validé" data-fr-error="en erreur">1 chiffre minimum</p>
    </div>
    <div class="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
        <input aria-label="Afficher le mot de passe" id="password-validation-show" type="checkbox">
        <label class="fr--password__checkbox fr-label" for="password-validation-show">
            Afficher
        </label>
    </div>
</div>
```

:::

#### Variante de mot de passe de connexion

Le composant mot de passe peut être utilisé dans un contexte de connexion et proposer un lien vers une page de récupération du mot de passe.

**Exemple de mot de passe de connexion**

:::fr-accordion[Déplier pour voir le code]{id=code-password-connexion}

```HTML
<div class="fr-password">
    <label class="fr-password__label fr-label" for="password-connexion-input">
        Mot de passe
    </label>
    <div class="fr-input-wrap">
        <input class="fr-password__input fr-input" autocapitalize="off" autocorrect="off" aria-describedby="password-connexion-input-messages" aria-required="true" name="password" autocomplete="current-password" id="password-connexion-input" type="password">
    </div>
    <div class="fr-messages-group" id="password-connexion-input-messages" aria-live="polite">
    </div>
    <div class="fr-password__checkbox fr-checkbox-group fr-checkbox-group--sm">
        <input aria-label="Afficher le mot de passe" id="password-connexion-show" type="checkbox">
        <label class="fr--password__checkbox fr-label" for="password-connexion-show">
            Afficher
        </label>
    </div>
    <p>
        <a href="[À MODIFIER - url de la page de récupération]" class="fr-link">Mot de passe oublié ?</a>
    </p>
</div>
```

:::

---

### JavaScript

#### Installation du JavaScript

Pour fonctionner, le composant mot de passe nécessite l'utilisation de JavaScript.
Chaque composant utilisant JavaScript possède un fichier JS spécifique et requiert le fichier JS du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :
```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/password/password.module.min.js"></script>
```
<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :
```HTML
<script type="text/javascript" nomodule src="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/password/password.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur le mot de passe, les éléments suivants sont instanciés :

- Le conteneur, via la classe : `fr-password`
- Le champs de mot de passe, via la classe : `password__input`
- Le libellé, via la classe : `fr-password__label`
- La case à cocher pour révéler ou masquer le mot de passe, via la classe : `fr-password__checkbox` et l'élément `<input>` de type `checkbox`

Une fois chargé, le JS ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés.

#### API

Il est possible d'interagir avec les instances du composant en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :
```js
const elem = document.getElementById('ID_TAB');
dsfr(elem).passwordInput.isEnabled;
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### password

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement du mot de passe est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).password.isEnabled = false` |
:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).password.node` |
:::

##### passwordInput

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement du mot de passe est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).passwordInput.isEnabled = false` |
:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).passwordInput.node` |
:::

##### passwordLabel

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement du libellé du mot de passe est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).passwordLabel.isEnabled = false` |
:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).passwordLabel.node` |
:::

##### passwordToggle

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement d'affichage du mot de passe est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).passwordToggle.isEnabled = false` |
:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).passwordToggle.node` |
:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+password+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Mot de passe
shortTitle: Accessibilité du Mot de passe
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Mot de passe.
shortDescription: Saisie ou création de mot de passe, avec affichage masqué et recommandations de sécurité.
keywords: mot de passe, sécurité, connexion, création de compte, champ, saisie, formulaire, visibilité, ANSSI, DSFR
cover: ../_asset/cover/cover.png
excerpt: Le champ mot de passe permet d’accompagner l’usager lors de la création ou la saisie d’un mot de passe, avec affichage masqué, retour d’erreur et règles de sécurité.
summary: Le composant mot de passe est conçu pour les cas d’usage de création de compte ou de connexion. Il propose une saisie masquée par défaut avec la possibilité d’afficher le contenu saisi, une gestion des erreurs en cas de non-conformité aux règles de sécurité, ainsi que des textes d’accompagnement dynamiques. Ce composant respecte les recommandations de l’ANSSI et s’intègre au sein des pages d’authentification du DSFR.
mesh:
  - component/alert
  - component/input
---

## Mot de passe

Le mot de passe est un élément d’interaction avec l’interface permettant d’aider l’usager à créer ou saisir un mot de passe.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Mot de passe** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

Reprendre les éléments d'accessibilité liés au composant [champ de saisie](../../../../input/_part/doc/accessibility/index.md)

#### Structuration

- Le champ de mot de passe doit avoir :
  - un type `password`.
  - un attribut `autocomplete="new-password"` pour la création ou `autocomplete="current-password"` pour la connexion.
- La **case à cocher** pour révéler ou masquer le mot de passe a un intitulé explicite donné par l’attribut `aria-label` qui reprend l'intitulé visible.

#### Contrastes de couleurs

La navigation principale est suffisamment contrastée en thème clair et en thème sombre.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Mot de passe.

---

### Critères RGAA applicables
- **Couleurs&nbsp;:** 3.2, 3.3
- **Liens&nbsp;:** 6.1, 6.2
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3,10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Formulaires&nbsp;:** 11.1, 11.2, 11.9, 11.10, 11.11, 11.13
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/password/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Mot de passe - Système de design</title>
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
    <link href="../../../dist/component/button/button.main.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/input/input.main.css" rel="stylesheet">
    <link href="../../../dist/component/checkbox/checkbox.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/component/password/password.main.css" rel="stylesheet">
    <link href=...
```

(Truncated for brevity. See source file for full HTML)
