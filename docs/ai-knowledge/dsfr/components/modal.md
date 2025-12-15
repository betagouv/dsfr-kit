# DSFR Modal Component

*Generated from local node_modules*

## Presentation

---
title: Modale
shortTitle: Modale
titleId: Modal
description: Présentation du composant Modale permettant de focaliser l’attention de l’usager sur une tâche ou une information sans quitter la page.
shortDescription: Affichage focalisé d’un contenu secondaire
keywords: modale, fenêtre, focus, interaction, DSFR, accessibilité, interface, contenu secondaire
cover: ./_asset/cover/cover.png
excerpt: Le composant Modale permet d’afficher un contenu ou une interaction dans une fenêtre superposée à la page, bloquant le fond et recentrant l’attention de l’usager.
summary: La modale s’utilise pour présenter un contenu complémentaire ou une action simple sans sortir de la page en cours. Elle est conçue pour isoler une information importante tout en permettant de revenir au contexte initial en un clic. Non personnalisable, elle existe en plusieurs tailles, avec ou sans zone d’action, et respecte les standards d’accessibilité en figeant l’arrière-plan lors de son affichage.
mesh:
  - component/button
  - component/display
---

## Modale

La modale est un élément de mise en forme de contenu permettant de concentrer l’attention de l’usager exclusivement sur une tâche ou un élément d’information, sans perdre le contexte de la page en cours.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=modal--modal}

### Quand utiliser ce composant ?

Utiliser la modale pour hiérarchiser l’information au sein d’une page ou afficher un contenu à part. Elle permet de mettre en évidence une information importante, à la suite du clic sur un bouton.

**Exemples de cas d’usage fréquents :** gestionnaire de consentement, paramètres d’affichage, formulaire simple, demande d’un choix à l’utilisateur, affichage d’un média etc.

### Comment utiliser ce composant ?

- **Utiliser les modales pour afficher des informations importantes**. Il est toutefois recommandé de les utiliser avec parcimonie car elles sont invasives dans l’expérience de l’usager.
- **Permettre à l’usager de reprendre sa navigation** à l’endroit où il se trouvait auparavant dans la page simplement en fermant la modale.
- **Figer la page en arrière plan** lorsqu’une modale est ouverte. L’usager ne peut pas scroller le contenu d’arrière plan avant d’avoir clôturé la modale.
- **Limiter le nombre d'interactions** dans une modale, et si celle-ci en propose, rester sur des interactions simples (exemples : bouton, bouton radio, lien etc.).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Proposer uniquement des interactions simples et limités au sein de la modale.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas insérer de composants complexes, inadaptés à l’usage de la modale.

:::

::::

- **Éviter de présenter des décisions complexes** dans une modale, notamment lorsque celles-ci nécessitent la consultation de sources d’informations supplémentaires.
- **Privilégier l’usage de l’accordéon** si l’objectif est de proposer un complément de contenu (exemple : “En savoir plus”).

### Règles éditoriales

- **Ajouter tout type de contenu** à votre modale, dans le respect des règles d’utilisation précédemment mentionnées.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design de la Modale
shortTitle: Design de la Modale
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Modale.
shortDescription: Affichage focalisé d’un contenu secondaire
keywords: modale, fenêtre, focus, interaction, DSFR, accessibilité, interface, contenu secondaire
cover: ../_asset/cover/cover.png
excerpt: Le composant Modale permet d’afficher un contenu ou une interaction dans une fenêtre superposée à la page, bloquant le fond et recentrant l’attention de l’usager.
summary: La modale s’utilise pour présenter un contenu complémentaire ou une action simple sans sortir de la page en cours. Elle est conçue pour isoler une information importante tout en permettant de revenir au contexte initial en un clic. Non personnalisable, elle existe en plusieurs tailles, avec ou sans zone d’action, et respecte les standards d’accessibilité en figeant l’arrière-plan lors de son affichage.
mesh:
  - component/button
  - component/display
---

## Modale

La modale est un élément de mise en forme de contenu permettant de concentrer l’attention de l’usager exclusivement sur une tâche ou un élément d’information, sans perdre le contexte de la page en cours.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie du bouton](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Une icône]

::dsfr-doc-pin[Un titre]{required=true}

::dsfr-doc-pin[Un bouton “Fermer”]{required=true}

::dsfr-doc-pin[Une zone de contenu]{required=true}

::dsfr-doc-pin[Un overlay]{required=true add="disposé à l’arrière du composant"}

::dsfr-doc-pin[Une zone d’action fixe]

:::

### Variations

**Modale avec zone d’action**

::dsfr-doc-storybook{storyId=modal--footer}

La modale avec une zone d’action permet de guider l’utilisateur vers des actions attendues. Elle reprend les éléments de la modale simple, auxquels s’ajoute une zone d’action composée soit d’un bouton primaire, soit d’un [groupe de boutons hiérarchisé](../../../../button/_part/doc/design/index.md#variations).

**Modale alignée en haut en mobile**

::dsfr-doc-storybook{storyId=modal--modal args="{ top: true }" width=375}

Une variation permet à la modale d’être alignée en haut de l’écran en mobile plutôt qu’en bas.

### Tailles

La modale est disponible en trois tailles :

- SM pour small

::dsfr-doc-storybook{storyId=modal--size-sm}

- MD pour medium - taille par défaut

::dsfr-doc-storybook{storyId=modal--size-md}

- LG pour large

::dsfr-doc-storybook{storyId=modal--size-lg}

- **Adapter la taille de la modale au volume de votre contenu.**

En desktop, la hauteur maximum des modales est fixée à 80% de la hauteur de l'écran, seule la largeur varie selon la taille choisie. Si le contenu est trop long pour s’afficher dans la surface prévue par la modale, la barre de scroll du navigateur s’affiche et permet de faire défiler le contenu.

En version mobile, la modale s’affiche sur la quasi totalité de l'écran :

- 100% de largeur.
- La hauteur minimale dépend du contenu. 32px de marge laissée en haut de l'écran (ou en bas pour la variante avec modale alignée en haut).

::dsfr-doc-storybook{storyId=modal--modal width=375}

### États

La modale n’est sujette à aucun changement d’état.

### Personnalisation

La modale n’est pas personnalisable.

Toutefois, certains éléments sont optionnels et les icônes peuvent être changées - voir [la structure du composant](#modale).


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code de la Modale
shortTitle: Code de la Modale
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Modale.
shortDescription: Affichage focalisé d’un contenu secondaire
keywords: modale, fenêtre, focus, interaction, DSFR, accessibilité, interface, contenu secondaire
cover: ../_asset/cover/cover.png
excerpt: Le composant Modale permet d’afficher un contenu ou une interaction dans une fenêtre superposée à la page, bloquant le fond et recentrant l’attention de l’usager.
summary: La modale s’utilise pour présenter un contenu complémentaire ou une action simple sans sortir de la page en cours. Elle est conçue pour isoler une information importante tout en permettant de revenir au contexte initial en un clic. Non personnalisable, elle existe en plusieurs tailles, avec ou sans zone d’action, et respecte les standards d’accessibilité en figeant l’arrière-plan lors de son affichage.
mesh:
  - component/button
  - component/display
---

## Modale

La modale est un élément de mise en forme de contenu permettant de concentrer l’attention de l’usager exclusivement sur une tâche ou un élément d’information, sans perdre le contexte de la page en cours.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

## HTML

### Structure du composant

Le composant **Modale** permet d'afficher du contenu en plein écran.

Sa structure est la suivante :

- Le bouton d'ouverture de la modale est défini par la classe `fr-btn` et l'attribut `aria-controls` lié à l'ID de la modale.
  - Le bouton doit être de type "button".
  - Le bouton dispose d'un attribut `data-fr-opened`, sa valeur [true|false] défini si la modale est ouverte ou fermée.
- La modale, définie par la classe `fr-modal`, est un élément HTML `<dialog>`.
  - Elle dispose d'un attribut `id` obligatoire, pour être lié au bouton d'ouverture.
  - La modale est liée à son titre via l'attribut `aria-labelledby`, dont la valeur doit correspondre à l'attribut `id` du titre.
- Son contenu est structuré :
  - D'un premier conteneur défini par la classe `fr-container`.
  - D'une grille définie par les classes `fr-grid-row` et `fr-grid-row--center`.
  - D'un bloc de colonne définie par les classes `fr-col-12 fr-col-md-8 fr-col-lg-6` pouvant varier en fonction de la taille de la modale désirée.
  - Le corps de la modale défini par la classe `fr-modal__body`, contenant :
    - L'entête de la modale, obligatoire, défini par la classe `fr-modal__header`, contenant :
      - Le bouton de fermeture de la modale, obligatoire, est un élément HTML `<button>`, défini par les classes `fr-btn` et `fr-btn--close`, dont le titre est "Fermer".
      - Le bouton doit être de type "button".
      - Le bouton est lié à la modale via l'attribut `aria-controls`, sa valeur doit correspondre à l'attribut `id` de la modale.
    - D'un bloc de contenu, obligatoire, défini par la classe `fr-modal__content`, contenant :
      - Le titre de la modale, obligatoire, dans un niveau d'entête `<hx>` ou un paragraphe `<p>` et défini par la classe `fr-modal__title`.
      - Le contenu de la modale, obligatoire et libre, mais nécessitant l'utilisation de balises adéquates, il n'est pas correcte par exemple de placer du texte directement dans une `<div>`.
    - Le pied de page de la modale, optionnel défini par la classe `fr-modal__footer`, contenant :
      - Un groupe de boutons d'action défini par les classes `fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-lg fr-btns-group--icon-left` pouvant varier en fonction de l'affichage désiré des boutons, contenant :
        - Soit un bouton primaire ([Bouton](../../../../button/_part/doc/code/index.md)).
        - Soit un groupe de boutons hiérarchisé.

> [!NOTE]
> La balise `<dialog>` peut être placée n'importe où sur la page, toutefois nous vous conseillons, si vous en avez la possibilité, d'en faire un enfant direct de la balise `<body>`.

**Exemple de structure HTML**

```HTML
<button data-fr-opened="false" aria-controls="modal" type="button" class="fr-btn">Modale simple</button>
<dialog id="modal" class="fr-modal" aria-labelledby="modal-title" aria-modal="true">
    <div class="fr-container fr-container--fluid fr-container-md">
        <div class="fr-grid-row fr-grid-row--center">
            <div class="fr-col-12 fr-col-md-8 fr-col-lg-6">
                <div class="fr-modal__body">
                    <div class="fr-modal__header">
                        <button aria-controls="modal" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                    </div>
                    <div class="fr-modal__content">
                        <h2 id="modal-title" class="fr-modal__title">
                            <span class="fr-icon-arrow-right-line fr-icon--lg" aria-hidden="true"></span>
                            Titre de la modale
                        </h2>
                        <p>
                          <!-- contenu de la modale -->
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</dialog>
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
| Button     | Oui         |
| Modal      | Oui         |

:::

**Exemple d'imports CSS**

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/button/button.module.min.js"></script>
<script type="module" src="dist/component/modal/modal.module.min.js"></script>
```

#### Variantes de taille

La modale peut avoir différentes tailles en fonction du nombre de colonnes de la grille qui la compose (Voir [grille](../../../../../core/_part/doc/grid/index.md)), sur mobile la modale sera toujours sur 12 colonnes :

- 4 colonnes en LG et 6 colonnes en MD pour une modale SM.
- Par défaut : 6 colonnes en LG et 8 colonnes en MD pour une modale MD.
- 8 colonnes en LG et 10 colonnes en MD pour une modale LG.

**Exemples de variantes de taille**

```HTML
<div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
    <!-- Contenu de la grille de la modale SM -->
</div>
<div class="fr-col-12 fr-col-md-8 fr-col-lg-6">
    <!-- Contenu de la grille de la modale MD -->
</div>
<div class="fr-col-12 fr-col-md-10 fr-col-lg-8">
    <!-- Contenu de la grille de la modale LG -->
</div>
```

#### Variantes avec zone d'action et boutons

La modale avec une **zone d’action** permet de guider l’utilisateur vers des actions attendues. Par défaut elle reprend les éléments de la modale simple auxquels s’ajoute une zone d’action obligatoire, composée soit d’**un bouton primaire**, soit d’**un groupe de boutons hiérarchisé**.

> [!NOTE]
> Pour les contenus trop longs pour s’afficher dans la surface prévue par la modale, un scroll permet de faire défiler l’intégralité de l'information.

**Exemple de modale avec zone d'action et boutons**

```HTML
<button data-fr-opened="false" aria-controls="modal-action" type="button" class="fr-btn">Modale avec zone d'action</button>
<dialog id="modal-action" class="fr-modal" aria-labelledby="modal-action-title">
    <div class="fr-container fr-container--fluid fr-container-md">
        <div class="fr-grid-row fr-grid-row--center">
            <div class="fr-col-12 fr-col-md-8 fr-col-lg-6">
                <div class="fr-modal__body">
                    <div class="fr-modal__header">
                        <button aria-controls="modal-action" title="Fermer" type="button" class="fr-btn--close fr-btn">Fermer</button>
                    </div>
                    <div class="fr-modal__content">
                        <h2 id="modal-action-title" class="fr-modal__title">
                            <span class="fr-icon-arrow-right-line fr-icon--lg" aria-hidden="true"></span>
                            Titre de la modale
                        </h2>
                        <p><!-- contenu de la modale --></p>
                    </div>
                    <!-- Zone d'action de la modale -->
                    <div class="fr-modal__footer">
                        <ul class="fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-lg fr-btns-group--icon-left">
                            <li>
                                <button type="button" class="fr-btn fr-icon-checkbox-circle-line fr-btn--icon-left">Libellé bouton</button>
                            </li>
                            <li>
                                <button type="button" class="fr-btn fr-icon-checkbox-circle-line fr-btn--icon-left fr-btn--secondary">Libellé bouton</button>
                            <li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</dialog>
```

#### Variantes avec zone d'action ancré en haut en mobile

La **zone d’action** de la modale peut être placée en haut de la modale sur mobile avec l'utilisation de la classe `fr-modal--top`.

**Exemple de modale avec zone d'action ancré en haut en mobile**

```HTML
<dialog id="modal-action-top" class="fr-modal fr-modal--top" aria-labelledby="modal-action-top-title" aria-modal="true">
    <!-- Contenu de la modale -->
</dialog>
```

#### Variantes modale simple non refermable au clic sur le fond

Par défaut la modale se referme au clic sur le fond de la page, il est possible de contourner ce comportement avec l'utilisation de l'attribut `data-fr-concealing-backdrop="false"`.

**Exemple de modale simple non refermable au clic sur le fond**

```HTML
<dialog id="modal-backdrop" class="fr-modal" aria-labelledby="modal-backdrop-title" aria-modal="true" data-fr-concealing-backdrop="false">
    <!-- Contenu de la modale -->
</dialog>
```

---

### JavaScript

#### Installation du JavaScript

Pour fonctionner le composant modale nécessite l'utilisation de JavaScript. Chaque composant utilisant javascript possède un fichier Js spécifique et requiert le fichier Js du core.

Il est donc nécessaire d'importer ces fichiers à la fin de la page (avant `</body>`) :

```HTML
<script type="module" src="dist/core/core.module.min.js"></script>
<script type="module" src="dist/component/modal/modal.module.min.js"></script>
```

<small>NB: Il est aussi possible d'importer le Js global du DSFR `dsfr.module.min.js`</small>

Pour fonctionner sur Internet Explorer 11, un fichier legacy, en version nomodule ES5, peut aussi être importé :

```HTML
<script type="text/javascript" nomodule href="dist/legacy/legacy.nomodule.min.js" ></script>
<script type="text/javascript" nomodule src="dist/core/core.nomodule.min.js"></script>
<script type="text/javascript" nomodule src="dist/component/modal/modal.nomodule.min.js"></script>
```

Une fois le JavaScript chargé, le composant fonctionne automatiquement.

#### Instances

Sur la modale, les éléments suivants sont instanciés :

- La modale, via la classe : `fr-modal`
- Le bouton d'ouverture de la modale, via l'attribut `aria-controls`

Une fois chargé, le Js ajoute un attribut `data-fr-js-NOM_INSTANCE="true"` sur chacun des éléments instanciés

#### API

Il est possible d'interagir avec les instances du composants en JavaScript via une API.

Cette API est disponible depuis la méthode `window.dsfr(instance)` du core.

Exemple :

```js
const elem = document.getElementById('modal');
dsfr(elem).modal.disclose();
```

L'ensemble des propriétés et méthodes disponibles sont définies ci-après :

##### modal

:::fr-table[isEnabled]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Défini si le fonctionnement de la modale est activé ou non |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).modal.isEnabled = false` |

:::

:::fr-table[conceal]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Ferme la modale |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).modal.conceal()` |

:::

:::fr-table[disclose]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Ouvre la modale |
| **Type** | function |
| **Arguments** | none |
| **Retour** | none |
| **Exemple** | `dsfr(elem).modal.disclose()` |

:::

:::fr-table[isDisclosed]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Retourne vrai si la modale est ouverte |
| **Type** | property |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).modal.isDisclosed` |

:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).modal.node` |

:::

###### modalButton

:::fr-table[focus]{valign=top multiline=true}
| | |
|:------|:-----|
| **Description** | Replace le focus sur le bouton |
| **Type** | function |
| **Arguments** | none |
| **Retour** | Boolean |
| **Exemple** | `dsfr(elem).modalButton.focus()` |

:::

:::fr-table[parent]{valign=top multiline=true}
| | |
|:-----|:-----|
| **Description** | Retourne l'instance du dsfr parente, ici la modale |
| **Type** | property |
| **Retour** | object \| null |
| **Exemple** | `dsfr(elem).parent` |

:::

:::fr-table[node]{valign=top multiline=true}
| | |
|------|-----|
| **Description** | Renvoie le noeud HTML de l'élément. |
| **Type** | property |
| **Retour** | DOMElement |
| **Exemple** | `dsfr(elem).modalButton.node` |

:::

#### Événements

Le Système de Design fournit des événements personnalisés pour les actions uniques de la part de certains composants réactifs listés sur la page de l'[API Javascript](path:/getting-started/developer/javascript).

Sur la modale, les événements suivants sont disponibles :

:::fr-table[événements]{valign=top multiline=true caption=false}

| Événement | Action | Élément | Attribut |
|------|------|------|------|
| `dsfr.conceal` | Fermeture de la modale | Modal | `data-fr-js-modal` |
| `dsfr.disclose` | Ouverture de la modale | Modal | `data-fr-js-modal` |
| `dsfr.click` | Click sur le bouton d'ouverture | ModalButton | `data-fr-js-modal-button` |

:::

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+modal)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité de la Modale
shortTitle: Accessibilité de la Modale
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Modale.
shortDescription: Affichage focalisé d’un contenu secondaire
keywords: modale, fenêtre, focus, interaction, DSFR, accessibilité, interface, contenu secondaire
cover: ../_asset/cover/cover.png
excerpt: Le composant Modale permet d’afficher un contenu ou une interaction dans une fenêtre superposée à la page, bloquant le fond et recentrant l’attention de l’usager.
summary: La modale s’utilise pour présenter un contenu complémentaire ou une action simple sans sortir de la page en cours. Elle est conçue pour isoler une information importante tout en permettant de revenir au contexte initial en un clic. Non personnalisable, elle existe en plusieurs tailles, avec ou sans zone d’action, et respecte les standards d’accessibilité en figeant l’arrière-plan lors de son affichage.
mesh:
  - component/button
  - component/display
---

## Modale

La modale est un élément de mise en forme de contenu permettant de concentrer l’attention de l’usager exclusivement sur une tâche ou un élément d’information, sans perdre le contexte de la page en cours.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Modale** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

À l’intérieur de la fenêtre modale&nbsp;:

- `Échap`&nbsp;: referme la modale et place le focus sur le bouton d’ouverture de la modale ou à un endroit approprié si le bouton disparaît.
- `Tab`&nbsp;: place le focus sur le prochain élément focalisable de la modale.
- `Maj` + `Tab`&nbsp;: place le focus sur l'élément focalisable précédent.

**Le focus doit rester dans la fenêtre modale tant qu’elle n’est pas fermée.**

### Règles d’accessibilité

Le composant **Modale** s’appuie sur le motif de conception ARIA <span lang="en">Dialog</span> de l’<a href="https://www.w3.org/WAI/ARIA/apg/about/introduction/" lang="en">Authoring Practices Guide</a> (APG).

- L’élément qui déclenche l’ouverture de la fenêtre modale doit être un `button`.
- La modale utilise l’élément HTML `<dialog>`.
- Elle dispose d’un attribut `aria-modal="true"` pour indiquer aux lecteurs d'écran que l’élément est une modale lorsqu'il est affiché.
- La modale doit avoir un **nom accessible**. Elle est nommée avec un attribut `aria-labelledby` défini sur l’ID du titre de la fenêtre modale.
- La modale a un titre de niveau `h2` à `h6`, en fonction de son positionnement dans le DOM, ou sous forme de balise `<p>`.

> [!TIP]
> Le role="dialog" n’est plus nécessaire sur l’élément HTML `<dialog>`.
>
>Pour que le focus soit bien capturé à l’intérieur de la modale, utiliser la méthode `showModal()` avec l’élément `<dialog>`.

### Restitution par les lecteurs d’écran

L’élément `<dialog>` est restitué différemment selon les lecteurs d’écran.

Tous les lecteurs d’écran restituent le nom accessible et le rôle de la modale.

- Talkback, Narrateur et Jaws&nbsp;: nom, boîte de dialogue
- NVDA : nom, dialogue
- VO iOS / VO macOS : nom, boîte de dialogue web

Note&nbsp;: VoiceOver macOS ne restitue pas le nom de la modale avec Firefox et Chrome.

#### Capture du focus

Note : le focus n’est pas capturé avec les lecteurs d’écran mobiles sur la version actuelle du composant Modale.

:::fr-accordion[#### Versions navigateurs et lecteurs d’écran]{id=sr-le-desktop}

Les tests de restitution ont été effectués en ajoutant le lecteur d’écran intégré à Windows 11 (Narrateur) et le navigateur web Chrome à l’environnement de tests du RGAA.

Versions des navigateurs web&nbsp;:

- Firefox 138
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
- **Couleurs&nbsp;:** 3.2
- **Scripts&nbsp;:** 7.1, 7.3
- **Éléments obligatoires&nbsp;:** 8.9
- **Structuration&nbsp;:** 9.1
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 10.8, 10.11, 10.12
- **Navigation&nbsp;:** 12.8, 12.9
- **Consultation&nbsp;:** 13.9, 13.11

---

### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)
- [Motif de conception WAI-ARIA Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [L’élément HTML dialog](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element)
- [Attribut aria-modal](https://www.w3.org/TR/wai-aria/#aria-modal)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/modal/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Modale - Système de design</title>
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
    <link href="../../../dist/component/tooltip/tooltip.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/input/input.main.css" rel="stylesheet">
    <link href="../../../dist/component/checkbox/checkbox.main.css" rel="stylesheet">
    <link href="../../....
```

(Truncated for brevity. See source file for full HTML)
