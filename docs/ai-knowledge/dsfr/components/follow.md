# DSFR Follow Component

*Generated from local node_modules*

## Presentation

---
title: Lettre d'information et réseaux sociaux
shortTitle: Lettre d'information et réseaux sociaux
titleId: Follow
description: Présentation du composant Lettre d'information et réseaux sociaux permettant de proposer l’inscription à une lettre d’information et de diriger vers les réseaux sociaux de l’entité.
shortDescription: Inscription à une lettre d’info et accès aux réseaux sociaux.
keywords: lettre d’information, newsletter, réseaux sociaux, footer, interface, composant, design system, RGPD, accessibilité, usager
cover: ./_asset/cover/cover.png
excerpt: Ce document présente le composant Lettre d’information et réseaux sociaux, destiné à favoriser l’abonnement et la consultation des comptes sociaux, avec recommandations d’intégration et règles éditoriales.
summary: Ce contenu décrit le composant Lettre d’information et réseaux sociaux, conçu pour permettre aux usagers de s’abonner à une ou plusieurs lettres d’information et de consulter les réseaux sociaux de l’entité. Il précise les recommandations d’intégration, notamment sa position dans la page, et les consignes éditoriales telles que l’adaptation du message selon le contexte ou les mentions relatives à l’utilisation des données personnelles. Ce guide s’adresse aux équipes chargées de la conception éditoriale et technique des sites web publics.
mesh:
  - component/button
  - component/input
---

## Lettre d'information et Réseaux Sociaux

La lettre d’information et réseaux sociaux est un ensemble d’éléments d’interaction avec l’interface permettant à l’usager de s’inscrire à (aux) lettre(s) d’information proposée(s), ainsi que des liens vers les réseaux sociaux de l’entité.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=follow--follow}

### Quand utiliser ce composant ?

Proposer la lettre d’information et réseaux sociaux pour permettre à l’usager de s’inscrire à la (aux) lettre(s) d’information proposée(s) et/ou de consulter les comptes de vos réseaux sociaux.

### Comment utiliser ce composant ?

- **Intégrer le composant à l’ensemble des pages du site**, juste au-dessus du footer.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=12 valid=true}

![](./_asset/use/do-1.png)

Mise en situation juste au dessus du pied de page.

:::

::::

### Règles éditoriales

- **Adapter le titre et la description en fonction du contexte**. Il s’agit ici de présenter la lettre d’information et la nature des contenus qu’elle traite.
- **Ajuster le texte explicatif “RGPD” sur l’utilisation des données personnelles** selon la politique de votre organisation.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design de la Lettre d'information et des réseaux sociaux
shortTitle: Design de la Lettre d'information et réseaux sociaux
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Lettre d'information et des réseaux sociaux.
shortDescription: Inscription à une lettre d’info et accès aux réseaux sociaux.
keywords: lettre d’information, newsletter, réseaux sociaux, footer, interface, composant, design system, RGPD, accessibilité, usager
cover: ./_asset/cover/cover.png
excerpt: Ce document présente le composant Lettre d’information et réseaux sociaux, destiné à favoriser l’abonnement et la consultation des comptes sociaux, avec recommandations d’intégration et règles éditoriales.
summary: Ce contenu décrit le composant Lettre d’information et réseaux sociaux, conçu pour permettre aux usagers de s’abonner à une ou plusieurs lettres d’information et de consulter les réseaux sociaux de l’entité. Il précise les recommandations d’intégration, notamment sa position dans la page, et les consignes éditoriales telles que l’adaptation du message selon le contexte ou les mentions relatives à l’utilisation des données personnelles. Ce guide s’adresse aux équipes chargées de la conception éditoriale et technique des sites web publics.
mesh:
  - component/button
  - component/input
---

## Lettre d'information et Réseaux Sociaux

La lettre d’information et réseaux sociaux est un ensemble d’éléments d’interaction avec l’interface permettant à l’usager de s’inscrire à (aux) lettre(s) d’information proposée(s), ainsi que des liens vers les réseaux sociaux de l’entité.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie de la lettre d'information et des réseaux sociaux](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un titre pour la lettre d’information]{required=true}

::dsfr-doc-pin[Une description]

::dsfr-doc-pin[Un champ d’inscription ou un bouton primaire]{required=true}

::dsfr-doc-pin[Un texte explicatif]

::dsfr-doc-pin[Un titre pour les réseaux sociaux]

::dsfr-doc-pin[Un ou plusieurs bouton(s) de lien vers les réseaux sociaux]

:::

### Variations

**Lettre d’information seule**

La lettre d’information seule permet uniquement à l’usager de s’inscrire à votre newsletter.

Elle est déclinée selon deux variantes :

- **Une mise en avant** avec un bouton redirigeant vers un formulaire d’inscription riche.

::dsfr-doc-storybook{storyId=follow--newsletter-button}

Utiliser la mise en avant pour les lettres d’information plus complexes qui nécessitent de recueillir plusieurs informations.

La description qui accompagne le titre du bloc sert à présenter la newsletter et le bouton redirige vers le formulaire d’inscription.

- **Un formulaire d’inscription** qui intègre directement un champ de saisie d’e-mail pour s’inscrire depuis le pied de page.

::dsfr-doc-storybook{storyId=follow--newsletter-form}

Utiliser le formulaire d’inscription pour les lettres d’information simples qui nécessitent de recueillir uniquement l’adresse mail et le consentement de l’usager.

La description qui accompagne le titre du bloc sert à présenter la newsletter.

Les mentions pour obtenir le consentement et les indications pour la désinscription sont à adapter en fonction des cas de figure.

Cette variante peut également servir à pré-saisir l’adresse mail de l’utilisateur pour ensuite renvoyer vers un formulaire plus détaillé, au clic sur le bouton.

**Réseaux sociaux seuls**

::dsfr-doc-storybook{storyId=follow--socials}

Les réseaux sociaux seuls permettent à l’usager d’accéder aux comptes de vos réseaux sociaux.

**Lettre d’information et réseaux sociaux**

Lorsque les deux éléments sont proposés, ils s’affichent l’un à coté de l’autre.

Il est possible d’utiliser les différentes déclinaisons de la lettre d’information (formulaire ou mise en avant).

- Formulaire d’inscription à la lettre d’information et réseaux sociaux

::dsfr-doc-storybook{storyId=follow--socials-newsletter-form}

- Mise en avant de la lettre d’information et réseaux sociaux

::dsfr-doc-storybook{storyId=follow--socials-newsletter-button}

### Tailles

La lettre d’information et réseaux sociaux a une largeur fixe, non personnalisable, quelle que soit la variation choisie.

### États

La gestion des messages d'erreur lors de la soumission du formulaire d’inscription suit les mêmes états que le composant [champ de saisie](../../../../input/_part/doc/index.md).

Utiliser le composant alerte pour indiquer le succès de l’inscription.

### Personnalisation

La lettre d’information et réseaux sociaux n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](#lettre-d-information-et-reseaux-sociaux).


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code de la Lettre d'information et des réseaux sociaux
shortTitle: Code de la Lettre d'information et réseaux sociaux
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Lettre d'information et des réseaux sociaux.
shortDescription: Inscription à une lettre d’info et accès aux réseaux sociaux.
keywords: lettre d’information, newsletter, réseaux sociaux, footer, interface, composant, design system, RGPD, accessibilité, usager
cover: ./_asset/cover/cover.png
excerpt: Ce document présente le composant Lettre d’information et réseaux sociaux, destiné à favoriser l’abonnement et la consultation des comptes sociaux, avec recommandations d’intégration et règles éditoriales.
summary: Ce contenu décrit le composant Lettre d’information et réseaux sociaux, conçu pour permettre aux usagers de s’abonner à une ou plusieurs lettres d’information et de consulter les réseaux sociaux de l’entité. Il précise les recommandations d’intégration, notamment sa position dans la page, et les consignes éditoriales telles que l’adaptation du message selon le contexte ou les mentions relatives à l’utilisation des données personnelles. Ce guide s’adresse aux équipes chargées de la conception éditoriale et technique des sites web publics.
mesh:
  - component/button
  - component/input
---

## Lettre d'information et Réseaux Sociaux

La lettre d’information et réseaux sociaux est un ensemble d’éléments d’interaction avec l’interface permettant à l’usager de s’inscrire à (aux) lettre(s) d’information proposée(s), ainsi que des liens vers les réseaux sociaux de l’entité.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

Le composant **Lettre d'information et Réseaux Sociaux** est composé de :

- Un conteneur `<div` de classe `fr-follow` pour l'ensemble du composant avec à l'intérieur une grille d'une ou deux colonnes.
  - Un bloc `fr-follow__newsletter` pour la newsletter contenant :
    - Un élément `<div>` avec un titre `<h2>`de classe `fr-h5` et une description `<p class="fr-text--sm">`.
    - Un second élément `<div>` contenant :
      - Soit un formulaire `<form>` avec un champ de saisie de type `email`, un bouton, et un texte de description additionnelle.
      - Soit un bouton "S'abonner" qui ouvre une modale ou execute un script.
      - Une fois la souscription effectuée, une alerte de confirmation `fr-alert fr-alert--success` remplace le formulaire ou le bouton.
  - Et/ou un bloc `fr-follow__social` pour les réseaux sociaux contenant :
    - Un titre `<h2>` de classe `fr-h5`.
    - Un groupe de boutons de réseaux sociaux :
      - Les boutons sont des liens `<a>` avec une classe `fr-btn` et une classe `fr-btn--NOM-RESEAU`.

**Exemple de structure HTML complète**

:::fr-accordion[Déplier pour voir le code]{id=follow-structure}

```HTML
<div class="fr-follow">
    <div class="fr-container">
        <div class="fr-grid-row">
            <div class="fr-col-12 fr-col-md-8">
                <div class="fr-follow__newsletter">
                    <div>
                        <h2 class="fr-h5">Abonnez-vous à notre lettre d’information</h2>
                        <p class="fr-text--sm">Lorem ipsum (...) finibus et.</p>
                    </div>
                    <div>
                        <form action="">
                            <div class="fr-input-group">
                                <label class="fr-label" for="newsletter-email">
                                    Votre adresse électronique (ex. : nom@domaine.fr)
                                </label>
                                <div class="fr-input-wrap fr-input-wrap--addon">
                                    <input class="fr-input" title="Votre adresse électronique (ex. : nom@domaine.fr)" autocomplete="email" aria-describedby="newsletter-email-hint-text newsletter-email-messages" placeholder="Votre adresse électronique (ex. : nom@domaine.fr)" id="newsletter-email" type="email">
                                    <button title="S‘abonner à notre lettre d’information" type="button" class="fr-btn">S'abonner</button>
                                </div>
                                <div class="fr-messages-group" id="newsletter-email-messages" aria-live="polite">
                                </div>
                            </div>
                            <p id="newsletter-email-hint-text" class="fr-hint-text">En renseignant votre adresse électronique, vous acceptez de recevoir nos actualités par courriel. Vous pouvez vous désinscrire à tout moment à l’aide des liens de désinscription ou en nous contactant.</p>
                        </form>
                    </div>
                </div>
            </div>
            <div class="fr-col-12 fr-col-md-4">
                <div class="fr-follow__social">
                    <h2 class="fr-h5">Suivez-nous<br> sur les réseaux sociaux</h2>
                    <ul class="fr-btns-group">
                        <li>
                            <a title="[À MODIFIER - Intitulé du lien] - nouvelle fenêtre" href="[À MODIFIER - Lien vers le facebook de l'organisation]" target="_blank" rel="noopener external" class="fr-btn--facebook fr-btn">Facebook</a>
                        </li>
                        <li>
                            <a title="[À MODIFIER - Intitulé du lien] - nouvelle fenêtre" href="[À MODIFIER - Lien vers le twitter de l'organisation]" target="_blank" rel="noopener external" class="fr-btn--twitter-x fr-btn">X (anciennement Twitter)</a>
                        </li>
                        <li>
                            <a title="[À MODIFIER - Intitulé du lien] - nouvelle fenêtre" href="[À MODIFIER - Lien vers le linkedin de l'organisation]" target="_blank" rel="noopener external" class="fr-btn--linkedin fr-btn">Linkedin</a>
                        </li>
                        <li>
                            <a title="[À MODIFIER - Intitulé du lien] - nouvelle fenêtre" href="[À MODIFIER - Lien vers l'instagram de l'organisation]" target="_blank" rel="noopener external" class="fr-btn--instagram fr-btn">Instagram</a>
                        </li>
                        <li>
                            <a title="[À MODIFIER - Intitulé du lien] - nouvelle fenêtre" href="[À MODIFIER - Lien vers le youtube de l'organisation]" target="_blank" rel="noopener external" class="fr-btn--youtube fr-btn">Youtube</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
```

:::

**Exemple de bloc newsletter avec bouton**

:::fr-accordion[Déplier pour voir le code]{id=follow-bouton}

```HTML
<div class="fr-follow__newsletter">
    <div>
        <h2 class="fr-h5">Abonnez-vous à notre lettre d’information</h2>
        <p class="fr-text--sm">Lorem ipsum (...) finibus et.</p>
    </div>
    <div>
        <div class="fr-btns-group fr-btns-group--inline-md">
            <button title="S‘abonner à notre lettre d’information" type="button" class="fr-btn">S'abonner</button>
        </div>
    </div>
</div>
```

:::

**Exemple de bloc newsletter avec confirmation**

:::fr-accordion[Déplier pour voir le code]{id=follow-succes}

```HTML
<div class="fr-follow__newsletter">
    <div>
        <h2 class="fr-h5">Abonnez-vous à notre lettre d’information</h2>
        <p class="fr-text--sm">Lorem ipsum (...) finibus et.</p>
    </div>
    <div>
        <div class="fr-alert fr-alert--success">
            <p>Votre inscription a bien été prise en compte.</p>
        </div>
    </div>
</div>
```

:::

>[!NOTE]
> Si vous souhaitez n'utiliser qu'un seul bloc (newsletter ou réseaux sociaux), vous pouvez retirer le bloc inutilisé en retirant la colone de la grille correspondant. La colone restante doit prendre la classe `fr-col-12`.

---

### CSS

#### Installation du CSS

Pour fonctionner correctement le style CSS du composant et de ses dépendances doivent être importés. L'import doit se faire avant le contenu de la page dans la partie `<head>`, et de préférence avec les fichiers minifiés, car plus légers.

Il est possible d'importer les fichiers CSS avec un niveau de granularité adapté à vos besoins. Voir le découpage des fichiers CSS du DSFR dans la [documentation dédiée](path:/getting-started/developer/get-started#les-css).

:::fr-table[Dépendances CSS]{valign=top multiline=true}

| Dépendance | Obligatoire | Remarque |
|------------|-------------| ---------|
| Core       | Oui         |          |
| Button     | Oui         |          |
| Follow     | Oui         |          |
| Form       | Non         | Uniquement pour la variation avec champ de saisie |
| Input      | Non         | Uniquement pour la variation avec champ de saisie |
| Alert      | Non         | Uniquement pour ajouter une alerte de confirmation |
| Utility    | Non         | Uniquement pour l'ajout d'icône custom |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/button/button.min.css" rel="stylesheet">
<link href="dist/component/follow/follow.min.css" rel="stylesheet">
```

#### Icônes des réseaux sociaux

Les variantes de boutons avec icônes de réseaux sociaux sont intégrées dans le composant. Les classes suivantes sont disponibles :

- `fr-btn--bluesky` : Bluesky.
- `fr-btn-dailymotion` : Dailymotion.
- `fr-btn--facebook` : Facebook.
- `fr-btn--github` : GitHub.
- `fr-btn--instagram` : Instagram.
- `fr-btn--linkedin` : Linkedin.
- `fr-btn--mastodon` : Mastodon.
- `fr-btn--snapchat` : Snapchat.
- `fr-btn--telegram` : Telegram.
- `fr-btn--threads` : Threads.
- `fr-btn--tiktok` : TikTok.
- `fr-btn--twitch` : Twitch.
- `fr-btn--twitter` : Twitter (déprécié).
- `fr-btn--twitter-x` : X (anciennement Twitter).
- `fr-btn--vimeo` : Viméo.
- `fr-btn--youtube` : Youtube.

La liste des variantes de boutons réseaux-sociaux est définie dans le fichier : `src/component/share/style/_setting.scss`

>[!NOTE]
> Ces classes sont des raccourcis, il est aussi possible d'utiliser les [classes utilitaires d'icônes](../../../../../core/_part/doc/icon/index.md). Préférez l'utilisation des formats "fill" dans les boutons. Par exemple : `fr-icon-rss-fill` pour un flux RSS.

---

### JavaScript

Le composant Lettre d'information et Réseaux Sociaux **ne nécessite pas l'utilisation de JavaScript** pour son fonctionnement de base.

La souscription à la Lettre d'information doit être gérée par le développeur.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+follow+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de la Lettre d'information et des réseaux sociaux
shortTitle: Accessibilité de la Lettre d'information et réseaux sociaux
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Lettre d'information et réseaux sociaux.
shortDescription: Inscription à une lettre d’info et accès aux réseaux sociaux.
keywords: lettre d’information, newsletter, réseaux sociaux, footer, interface, composant, design system, RGPD, accessibilité, usager
cover: ./_asset/cover/cover.png
excerpt: Ce document présente le composant Lettre d’information et réseaux sociaux, destiné à favoriser l’abonnement et la consultation des comptes sociaux, avec recommandations d’intégration et règles éditoriales.
summary: Ce contenu décrit le composant Lettre d’information et réseaux sociaux, conçu pour permettre aux usagers de s’abonner à une ou plusieurs lettres d’information et de consulter les réseaux sociaux de l’entité. Il précise les recommandations d’intégration, notamment sa position dans la page, et les consignes éditoriales telles que l’adaptation du message selon le contexte ou les mentions relatives à l’utilisation des données personnelles. Ce guide s’adresse aux équipes chargées de la conception éditoriale et technique des sites web publics.
mesh:
  - component/button
  - component/input
---

## Lettre d’information et Réseaux Sociaux

La lettre d’information et réseaux sociaux est un ensemble d’éléments d’interaction avec l’interface permettant à l’usager de s’inscrire à (aux) lettre(s) d’information proposée(s), ainsi que des liens vers les réseaux sociaux de l’entité.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Lettre d’information et Réseaux Sociaux** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

L’ensembles des règles d'accessibilité des [liens](../../../../input/_part/doc/accessibility/index.md), des [boutons](../../../../button/_part/doc/accessibility/index.md) et des [champs de saisie](../../../../input/_part/doc/accessibility/index.md) doivent être respectées.

#### Liens réseaux sociaux

- Les liens des réseaux sociaux doivent être structurés dans une liste.
- Pour expliciter les liens-icônes, ajouter un attribut `title` sur le lien.

#### Lettre d’information

- Le `<label>` du champ de saisie de la <span lang="en">newsletter</span> doit être présent, même s'il est masqué visuellement.
- Un attribut `title` sur l'`<input>` explicite la fonction du champ.

### Contrastes de couleurs

Le composant est suffisamment contrasté en thème clair et en thème sombre.

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Lettre d’information et Réseaux Sociaux.

---

### Critères RGAA applicables

- **Couleurs&nbsp;:** 3.2, 3.3
- **Liens&nbsp;:** 6.1, 6.2
- **Scripts&nbsp;:** 7.1, 7.3, 7.5
- **Éléments obligatoires&nbsp;:** 8.9
- **Structuration&nbsp;:** 9.1, 9.3
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.11, 10.12
- **Formulaires&nbsp;:** 11.1, 11.2, 11.9, 11.10, 11.11, 11.13
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/follow/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Lettre d&#39;information et Réseaux Sociaux - Système de design</title>
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
    <link href="../../../dist/component/form/form.main.css" rel="stylesheet">
    <link href="../../../dist/scheme/scheme.css" rel="stylesheet">
    <link href="../../../dist/component/link/link.main.css" rel="stylesheet">
    <link href="../../../dist/component/accordion/accordion.main.css" rel="stylesheet">
    <link href="../../../dist/component/alert/alert.main.css" rel="stylesheet">
    <link href="../../../dist/component/input/input.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/component/follow/follow.main.css" rel="stylesh...
```

(Truncated for brevity. See source file for full HTML)
