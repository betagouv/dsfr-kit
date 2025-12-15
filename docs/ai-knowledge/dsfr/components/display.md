# DSFR Display Component

*Generated from local node_modules*

## Presentation

---
title: Paramètres d'affichage
shortTitle: Paramètres d'affichage
titleId: Display
description: Présentation du composant Paramètres d’affichage permettant à l’usager de modifier le thème visuel d’un site entre mode clair et mode sombre.
shortDescription: Choisir le thème clair ou sombre d’un site.
keywords: paramètres d’affichage, thème clair, thème sombre, accessibilité, modale, interface, design system, expérience utilisateur, header, footer
cover: ./_asset/cover/cover.png
excerpt: Le composant Paramètres d’affichage permet de basculer entre un thème clair ou sombre. Il s’intègre dans l’en-tête ou le pied de page et s’utilise via une modale dédiée.
summary: Ce document décrit les usages du composant Paramètres d’affichage, qui offre à l’usager le choix entre un thème clair ou sombre pour améliorer son confort de navigation. Il précise où et comment intégrer ce composant, les comportements attendus lors de l’ouverture de la modale et la gestion de l’arrière-plan. Le changement de thème s’opère instantanément, sans validation supplémentaire. Ce guide s’adresse aux concepteurs souhaitant offrir une personnalisation simple et accessible de l’interface.
mesh:
  - component/header
  - component/modal
  - component/footer
---

## Paramètres d'affichage

Les paramètres d’affichage représentent un parcours simple permettant à l’usager d’interagir avec l’interface afin de modifier le thème d’un site.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=display--display}

### Quand utiliser ce composant ?

Utiliser les paramètres d’affichage pour donner la possibilité à l’usager de choisir d’afficher le site en thème clair ou en thème sombre (pour en savoir plus sur ces deux thèmes, consultez [la page relative aux couleurs](../../../../core/_part/doc/color/index.md)).

### Comment utiliser ce composant ?

- **Intégrer les paramètres d’affichage dans l’en-tête ou le pied de page** de votre site, selon vos préférences.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/use/do-1.png)

Intégrer les paramètres d’affichage au sein de l’en-tête, à l’emplacement de l’un des accès rapides.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=12 valid=false}

![](./_asset/use/dont-1.png)

Ne pas proposer les paramètres d’affichage en dehors des accès rapides.

:::

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/use/do-2.png)

Intégrer les paramètres d’affichage au sein du pied de page.

:::

::::

- **Figer la page en arrière plan** lorsque la modale de paramètres est ouverte. L’usager ne peut pas scroller le contenu d’arrière plan avant d’avoir clôturé la modale.
- **Opérer la modification du thème dès lors que l’usager a effectué son choix au sein de la modale**. Le changement est immédiat et ne nécessite aucune action complémentaire.
- **Permettre à l’usager de reprendre sa navigation** à l’endroit où il se trouvait auparavant dans la page simplement en fermant la modale de paramètres.

### Règles éditoriales

Les paramètres d’affichage ne sont régis par aucune règle éditoriale spécifique.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design des Paramètres d'affichage
shortTitle: Design des Paramètres d'affichage
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Paramètres d'affichage.
shortDescription: Choisir le thème clair ou sombre d’un site.
keywords: paramètres d’affichage, thème clair, thème sombre, accessibilité, modale, interface, design system, expérience utilisateur, header, footer
cover: ../_asset/cover/cover.png
excerpt: Le composant Paramètres d’affichage permet de basculer entre un thème clair ou sombre. Il s’intègre dans l’en-tête ou le pied de page et s’utilise via une modale dédiée.
summary: Ce document décrit les usages du composant Paramètres d’affichage, qui offre à l’usager le choix entre un thème clair ou sombre pour améliorer son confort de navigation. Il précise où et comment intégrer ce composant, les comportements attendus lors de l’ouverture de la modale et la gestion de l’arrière-plan. Le changement de thème s’opère instantanément, sans validation supplémentaire. Ce guide s’adresse aux concepteurs souhaitant offrir une personnalisation simple et accessible de l’interface.
mesh:
  - component/header
  - component/modal
  - component/footer
---

## Paramètres d'affichage

Les paramètres d’affichage représentent un parcours simple permettant à l’usager d’interagir avec l’interface afin de modifier le thème d’un site.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie des paramètres d'affichage](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un bouton]{add="à intégrer à l’en-tête ou au pied de page de votre site" required=true}

::dsfr-doc-pin[Un titre]{required=true}

::dsfr-doc-pin[Un bouton “Fermer”]{required=true}

::dsfr-doc-pin[Une description]{required=true}

::dsfr-doc-pin[Des boutons radio riches]{add="au moins deux" required=true}

::dsfr-doc-pin[Une modale]{add="s’ouvrant au clic sur le lien" required=true}

:::

### Variations

**Paramètres d’affichage intégrés dans l’en-tête du site**

::dsfr-doc-storybook{storyId=display--header-display}

Lorsque le bouton “paramètres d’affichage” est mis en avant dans l’en-tête de la page, il prend la forme d’un lien d’accès rapide.

En version mobile, l’accès rapide au bouton “paramètres d’affichage” se trouve dans le menu.

**Paramètres d’affichage intégrés dans le pied de page**

::dsfr-doc-storybook{storyId=display--footer-display}

Lorsque le bouton “paramètres d’affichage” est mis en avant dans le pied de page, il est intégré au niveau des mentions légales.

Quelque soit la variation choisie, en responsive, les éléments du parcours paramètres d’affichage affichent automatiquement les versions mobiles des composants en-tête avec accès rapide et [modale](../../../../modal/_part/doc/index.md).

### Tailles

La taille des paramètres d’affichage reprend les options disponibles au sein de la [modale](../../../../modal/_part/doc/index.md).

### États

Les paramètres d’affichage ne sont sujets à aucun changement d’état.

### Personnalisation

Les paramètres d’affichage ne sont pas personnalisables, à l’exception du texte de description.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Personnaliser le texte de description des paramètres d’affichage.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser les pictogrammes par défaut des boutons riches.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code des Paramètres d'affichage
shortTitle: Code des Paramètres d'affichage
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Paramètres d'affichage.
shortDescription: Choisir le thème clair ou sombre d’un site.
keywords: paramètres d’affichage, thème clair, thème sombre, accessibilité, modale, interface, design system, expérience utilisateur, header, footer
cover: ../_asset/cover/cover.png
excerpt: Le composant Paramètres d’affichage permet de basculer entre un thème clair ou sombre. Il s’intègre dans l’en-tête ou le pied de page et s’utilise via une modale dédiée.
summary: Ce document décrit les usages du composant Paramètres d’affichage, qui offre à l’usager le choix entre un thème clair ou sombre pour améliorer son confort de navigation. Il précise où et comment intégrer ce composant, les comportements attendus lors de l’ouverture de la modale et la gestion de l’arrière-plan. Le changement de thème s’opère instantanément, sans validation supplémentaire. Ce guide s’adresse aux concepteurs souhaitant offrir une personnalisation simple et accessible de l’interface.
mesh:
  - component/header
  - component/modal
  - component/footer
---

## Paramètres d'affichage

Les paramètres d’affichage représentent un parcours simple permettant à l’usager d’interagir avec l’interface afin de modifier le thème d’un site.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

Le composant **Paramètre d'affichage** est composé d'un **bouton** qui ouvre une **modale** contenant des boutons radios pour choisir le thème du site.

- Le bouton d'ouverture de la modale doit avoir l'attribut `aria-controls` avec la valeur de l'id de la modale et l'attribut `data-fr-opened="false"`.
- La modale en taille SM doit contenir un bouton de fermeture, un titre "Paramètres d’affichage" lié au `aria-labelledby` de la dialog, et un élément `fr-display` contenant un groupe de boutons radios pour choisir le thème. Chaque bouton radio doit avoir un `id` unique, un attribut `name="fr-radios-theme"`, et un attribut `value` correspondant à la valeur du thème.

Voici un exemple de code pour utiliser le composant **Paramètre d'affichage** :

**Exemple de bouton d'ouverture**

```HTML
<button aria-controls="fr-theme-modal" data-fr-opened="false" title="Paramètres d'affichage" type="button" class="fr-btn--display fr-btn">
    Paramètres d'affichage
</button>
```

**Exemple de modale de paramètre d'affichage**

:::fr-accordion[Déplier pour voir le code]{id=display-structure}

```html
<dialog id="fr-theme-modal" class="fr-modal" aria-labelledby="fr-theme-modal-title">
    <div class="fr-container fr-container--fluid fr-container-md">
        <div class="fr-grid-row fr-grid-row--center">
            <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
                <div class="fr-modal__body">
                    <div class="fr-modal__header">
                        <button aria-controls="fr-theme-modal" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                    </div>
                    <div class="fr-modal__content">
                        <h1 id="fr-theme-modal-title" class="fr-modal__title">
                            Paramètres d’affichage
                        </h1>
                        <div id="fr-display" class="fr-display">
                            <fieldset class="fr-fieldset" id="display-fieldset">
                                <legend class="fr-fieldset__legend--regular fr-fieldset__legend" id="display-fieldset-legend">
                                    Choisissez un thème pour personnaliser l’apparence du site.
                                </legend>
                                <div class="fr-fieldset__element">
                                    <div class="fr-radio-group fr-radio-rich">
                                        <input value="light" type="radio" id="fr-radios-theme-light" name="fr-radios-theme">
                                        <label class="fr-label" for="fr-radios-theme-light">
                                            Thème clair
                                        </label>
                                        <div class="fr-radio-rich__pictogram">
                                            <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
                                                <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/environment/sun.svg#artwork-decorative"></use>
                                                <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/environment/sun.svg#artwork-minor"></use>
                                                <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/environment/sun.svg#artwork-major"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="fr-fieldset__element">
                                    <div class="fr-radio-group fr-radio-rich">
                                        <input value="dark" type="radio" id="fr-radios-theme-dark" name="fr-radios-theme">
                                        <label class="fr-label" for="fr-radios-theme-dark">
                                            Thème sombre
                                        </label>
                                        <div class="fr-radio-rich__pictogram">
                                            <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
                                                <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/environment/moon.svg#artwork-decorative"></use>
                                                <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/environment/moon.svg#artwork-minor"></use>
                                                <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/environment/moon.svg#artwork-major"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="fr-fieldset__element">
                                    <div class="fr-radio-group fr-radio-rich">
                                        <input value="system" type="radio" id="fr-radios-theme-system" name="fr-radios-theme">
                                        <label class="fr-label" for="fr-radios-theme-system">
                                            Système
                                            <span class="fr-hint-text">Utilise les paramètres système</span>
                                        </label>
                                        <div class="fr-radio-rich__pictogram">
                                            <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
                                                <use class="fr-artwork-decorative" href="../../../dist/artwork/pictograms/system/system.svg#artwork-decorative"></use>
                                                <use class="fr-artwork-minor" href="../../../dist/artwork/pictograms/system/system.svg#artwork-minor"></use>
                                                <use class="fr-artwork-major" href="../../../dist/artwork/pictograms/system/system.svg#artwork-major"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</dialog>
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
| Modal      | Oui         |
| Radio      | Oui         |
| Scheme     | Oui         |
| Display    | Oui         |

:::

**Exemple d'imports CSS**

```html
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/form/form.min.css" rel="stylesheet">
<link href="dist/component/modal/modal.min.css" rel="stylesheet">
<link href="dist/component/radio/radio.min.css" rel="stylesheet">
<link href="dist/scheme/scheme.min.css" rel="stylesheet">
<link href="dist/component/display/display.min.css" rel="stylesheet">
```

#### Variantes de bouton d'ouverture

- Lorsque le lien paramètres d’affichage est mis en avant dans l’en-tête de la page, il prend la forme d’un lien accès rapide, dans le bloc `fr-header__tools-links`.
- Lorsque le lien paramètres d’affichage est mis en avant dans le pied de page, il est intégré au niveau des mentions légales, il prend la forme d'un lien du pied de page, dans un `<li>` de classe `fr-footer__bottom-item`.

---

### JavaScript

Pour fonctionner le composant paramètre d'affichage nécessite l'utilisation de JavaScript.
Ce composant est aussi dépendant du **core** et de la **modale**.

#### Installation du JavaScript

Pour fonctionner correctement, les scripts JavaScript du paramètre d'affichage, du core, de scheme, et de la modale doivent être importés.
L'import doit se faire avant la fermeture du body, et de préférence avec le fichier minifié, car plus léger.

```html
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/scheme/scheme.module.min.js"></script>
<script type="module" src="dist/component/modal/modal.module.min.js"></script>
<script type="module" src="dist/component/display/display.module.min.js"></script>
```

<small>NB : Il est aussi possible d'importer le JavaScript global du DSFR `dsfr.module.min.js`.</small>

La gestion du thème ne fonctionne pas sur Internet Explorer 11 qui ne supporte pas les variables CSS.

#### Instances

Sur le paramètre d'affichage, les éléments suivants sont instanciés :

- Le bloc de paramètres, via la classe : `fr-display`.
- La modale, via la classe : `fr-modal`.
- Les boutons d'ouvertures et de fermeture de la modale, via l'attribut : `aria-controls` lié à l'id de la modale.

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés

#### API

Afin d’**activer la gestion du thème**, il est nécessaire d’ajouter l’attribut `data-fr-scheme` sur la balise `<html>`. Si l’attribut n’est pas présent, le site s’affichera en mode clair (thème par défaut) et le composant paramètre d'affichage ne fonctionnera pas.

Si l’attribut est présent, la valeur par défaut est `system` : les préférences par défaut du navigateur/OS sont prises en compte (en se basant sur la média query `prefers-color-scheme`). Les valeurs possibles sont `light`, `dark` et `system`.

Le **changement de thème** au clic sur les boutons radios du composant paramètre d'affichage n'est pas disponible via l'API JS, il se fait automatiquement via l'ajout de l'attribut `name="fr-radios-theme"` sur l'élément `<input>` du radio et de la valeur `light`, `dark` ou `system` au niveau de l'attribut `value`.

Il est possible de **changer la valeur du thème dynamiquement**, sans passer par le composant paramètre d'affichage, via l'API `dsfr(document.documentElement).scheme.scheme` :

- `dsfr(document.documentElement).scheme.scheme = 'light'` : pour le thème clair.
- `dsfr(document.documentElement).scheme.scheme = 'dark'` : pour le thème sombre.
- `dsfr(document.documentElement).scheme.scheme = 'system'` : pour le thème système.

>[!WARNING]
>La propriété `data-fr-theme` est injectée sur l'élément `<html>` à partir de la valeur du scheme, elle ne doit pas être modifiée directement. Elle prendra automatiquement la valeur `light` ou `dark` en fonction de la valeur du scheme, ou des préférences système de l'utilisateur.

#### Script de chargement du thème

Pour éviter un effet de flash lors du chargement de la page, il est possible d'ajouter un script qui va détecter le thème préféré de l'utilisateur et appliquer le thème correspondant.

Ce script doit **s'exécuter le plus tôt possible dans le `<head>` de la page**, avant le chargement du reste de la page.

```html
<script type="module">
    const e="system",t="dark",c="dark",o="data-fr-theme",a="data-fr-scheme",r=`:root[${o}], :root[${a}]`,m=()=>{document.documentElement.setAttribute(o,c),document.documentElement.style.colorScheme="dark"},n=()=>{window.matchMedia("(prefers-color-scheme: dark)").matches&&m()};(()=>{if(document.documentElement.matches(r)){const c=(()=>{try{return"localStorage"in window&&null!==window.localStorage}catch(e){return!1}})()?localStorage.getItem("scheme"):"",o=document.documentElement.getAttribute(a);switch(!0){case c===t:m();break;case c===e:n();break;case o===t:m();break;case o===e:n()}}})();
</script>
```

#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l'[API Javascript](path:/getting-started/developer/javascript).

Sur la modale du paramètre d'affichage, les événements suivants sont disponibles :

:::fr-table[événements]{valign=top multiline=true caption=false}

| Événement | Action | Élément | Attribut |
|------|------|------|------|
| `dsfr.conceal` | Fermeture de la modale | Modal | `data-fr-js-modal` |
| `dsfr.disclose` | Ouverture de la modale | Modal | `data-fr-js-modal` |
| `dsfr.click` | Click sur le bouton d'ouverture | ModalButton | `data-fr-js-modal-button` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+display+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité des Paramètres d'affichage
shortTitle: Accessibilité des Paramètres d'affichage
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Paramètres d'affichage.
shortDescription: Choisir le thème clair ou sombre d’un site.
keywords: paramètres d’affichage, thème clair, thème sombre, accessibilité, modale, interface, design system, expérience utilisateur, header, footer
cover: ../_asset/cover/cover.png
excerpt: Le composant Paramètres d’affichage permet de basculer entre un thème clair ou sombre. Il s’intègre dans l’en-tête ou le pied de page et s’utilise via une modale dédiée.
summary: Ce document décrit les usages du composant Paramètres d’affichage, qui offre à l’usager le choix entre un thème clair ou sombre pour améliorer son confort de navigation. Il précise où et comment intégrer ce composant, les comportements attendus lors de l’ouverture de la modale et la gestion de l’arrière-plan. Le changement de thème s’opère instantanément, sans validation supplémentaire. Ce guide s’adresse aux concepteurs souhaitant offrir une personnalisation simple et accessible de l’interface.
mesh:
  - component/header
  - component/modal
  - component/footer
---

## Paramètres d'affichage

Les paramètres d’affichage représentent un parcours simple permettant à l’usager d’interagir avec l’interface afin de modifier le thème d’un site.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Paramètres d’affichage** est conçu pour être accessible et respecter les critères du RGAA.

Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Il n'y a aucune interaction spécifique au composant **Paramètre d'affichage**.

Les interactions clavier sont celles liées à la [modale](../../../../modal/_part/doc/accessibility/index.md), aux [boutons](../../../../button/_part/doc/accessibility/index.md), et aux [boutons radios](../../../../radio/_part/doc/accessibility/index.md).

### Règles d’accessibilité

- Si la gestion du thème est activée, toujours intégrer le composant Paramètre d'affichage pour laisser la possibilité à l’utilisateur de choisir l’affichage qui lui convient le mieux.
- Privilégier le thème système par défaut pour garantir une expérience utilisateur optimale.
- Si l’utilisateur effectue un changement de thème, son choix est conservé (dans le local storage) pour les visites ultérieures.

Respecter les règles d’accessibilité pour&nbsp;:

- les [boutons](../../../../button/_part/doc/accessibility/index.md),
- la [modale](../../../../modal/_part/doc/accessibility/index.md),
- les [boutons radio](../../../../radio/_part/doc/accessibility/index.md).

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2, 3.3
- **Scripts&nbsp;:** 7.1, 7.3
- **Structuration&nbsp;:** 9.1
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires&nbsp;:** 11.1, 11.2, 11.4, 11.5, 11.6, 11.7
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.10, 13.11, 13.12

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)

#### Ressources

- [Thème sombre et accessibilité](https://stephaniewalter.design/fr/blog/theme-sombre-dark-mode-et-mythe-daccessibilite/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/display/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Paramètre d&#39;affichage - Système de design</title>
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
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/logo/logo.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/component/navigation/navigation.main.css" rel="stylesheet">
    <link href="../../../dist/component/input/input.main.css" rel="stylesheet">
    <l...
```

(Truncated for brevity. See source file for full HTML)
