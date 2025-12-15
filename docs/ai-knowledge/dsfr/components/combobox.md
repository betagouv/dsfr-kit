# DSFR Combobox Component

*Generated from local node_modules*

## Presentation

---
title: Liste déroulante riche
shortTitle: Liste déroulante riche
titleId: Combobox
description: Présentation du composant Liste déroulante riche permettant à l’usager de choisir une ou plusieurs options dans une liste étendue, incluant recherche, sélection multiple et options par défaut.
shortDescription: Composant de sélection multiple enrichi avec fonctions de recherche.
keywords: bêta, liste déroulante, sélection multiple, formulaire, combobox, recherche, accessibilité, UX, options, DSFR
cover: ./_asset/cover/cover.png
excerpt: Cette liste déroulante avancée permet à l’usager de sélectionner une ou plusieurs options, tout en bénéficiant de fonctions supplémentaires comme la recherche, la sélection globale ou des groupes d’options.
summary: La liste déroulante riche est un composant en version bêta qui facilite les interactions complexes au sein des formulaires. Conçue pour aller au-delà des listes déroulantes classiques, elle prend en charge les sélections multiples, les recherches en direct et des retours visuels en cas d’erreur ou de succès. Bien que son code ne soit pas encore disponible, ses maquettes sont proposées sur Figma.
badge: beta
mesh:
  - component/radio
  - component/checkbox
  - component/select
---

## Liste déroulante riche

> [!NOTE]
> **Ce composant est en version bêta.** Il n'existe pas en code et son design ou ses fonctionnalités peuvent encore être amenés à évoluer. N'hésitez pas à nous partager vos cas d'usage ou retours qui le concerne via notre formulaire de contact ou notre Tchap pour que nous puissions les étudier.

Retrouvez ces composants sur Figma [dans un fichier dédié bêta disponible sur Community](https://www.figma.com/community/file/1096003483468520396).

La liste déroulante riche est un élément d’interaction avec l’interface permettant à l’usager de choisir une ou plusieurs options dans une liste donnée.

:::dsfr-doc-tab-navigation

- Présentation
- [Design](./design/index.md)

:::

![](./_asset/presentation/presentation-1.png)

### Quand utiliser ce composant ?

Utiliser la liste déroulante riche pour permettre à l’usager de sélectionner une ou plusieurs options dans une liste ou si vous souhaitez lui permettre de faire une recherche ou d’appliquer un filtrage dans la liste d’options mise à disposition.

> [!NOTE]
> Bien différencier la liste déroulante riche de la [liste déroulante](../../../select/_part/doc/index.md) simple. Opter pour cette dernière si vous souhaitez restreindre l’usager à un choix unique.

Évitez également l’usage de listes déroulantes lorsqu’elles comportent peu de propositions (moins de 3 options). Dans ce cas, préférez des [boutons radio](../../../radio/_part/doc/index.md), si le choix est unique, ou des [cases à cocher](../../../checkbox/_part/doc/index.md), si c’est un choix multiple.

Si les options doivent être facilement comparables (exemple : le prix de produits), préférez les [boutons radio](../../../radio/_part/doc/index.md) aux listes déroulantes.

### Comment utiliser ce composant ?

- **Utiliser les listes déroulantes au sein de formulaire** afin de distinguer leur usage de celui des menus déroulants.
- **Effectuer la validation des entrées côté client en temps réel**, si possible, et fournir un retour immédiat à l’usager après la sélection.
- **Fournir une description textuelle de l’erreur**, dans le cas d’une sélection erronée, ainsi que des instructions claires sur la manière de la corriger à l'usager.
- **Définir une option par défaut pour une liste déroulante de sélection unique** est recommandé. Si l'option par défaut est également l'option recommandée, vous pouvez marquer l'option avec le texte « (recommandé) ».

### Règles éditoriales

- **Rédiger des libellés clairs et concis** pour faciliter la compréhension des options et du choix à réaliser.
- **Évitez de proposer des options longues**, qui s'étendraient sur plusieurs lignes.


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design de la Liste déroulante riche
shortTitle: Design de la Liste déroulante riche
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Liste déroulante riche.
shortDescription: Composant de sélection multiple enrichi avec fonctions de recherche.
keywords: bêta, liste déroulante, sélection multiple, formulaire, combobox, recherche, accessibilité, UX, options, DSFR
cover: ../_asset/cover/cover.png
excerpt: Cette liste déroulante avancée permet à l’usager de sélectionner une ou plusieurs options, tout en bénéficiant de fonctions supplémentaires comme la recherche, la sélection globale ou des groupes d’options.
summary: La liste déroulante riche est un composant en version bêta qui facilite les interactions complexes au sein des formulaires. Conçue pour aller au-delà des listes déroulantes classiques, elle prend en charge les sélections multiples, les recherches en direct et des retours visuels en cas d’erreur ou de succès. Bien que son code ne soit pas encore disponible, ses maquettes sont proposées sur Figma.
badge: beta
mesh:
  - component/radio
  - component/checkbox
  - component/select
---

## Liste déroulante riche

> [!NOTE]
> **Ce composant est en version bêta.** Il n'existe pas en code et son design ou ses fonctionnalités peuvent encore être amenés à évoluer. N'hésitez pas à nous partager vos cas d'usage ou retours qui le concerne via notre formulaire de contact ou notre Tchap pour que nous puissions les étudier.

Retrouvez ces composants sur Figma [dans un fichier dédié bêta disponible sur Community](https://www.figma.com/community/file/1096003483468520396).

La liste déroulante riche est un élément d’interaction avec l’interface permettant à l’usager de choisir une ou plusieurs options dans une liste donnée.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- Design

:::

:::dsfr-doc-anatomy{imageWidth=384 col=12}

![Anatomie de la liste déroulante riche](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Un libellé]{required=true}

::dsfr-doc-pin[Une description]

::dsfr-doc-pin[Un chevron]{required=true add="permettant de déplier la liste"}

::dsfr-doc-pin[Un bouton “Tout sélectionner” ou “Tout désélectionner”]

::dsfr-doc-pin[Un champ de recherche]

::dsfr-doc-pin[Une légende]{add="qui peut être masquée à l’écran"}

::dsfr-doc-pin[Une description du groupe]{add="qui peut être masquée à l’écran"}

::dsfr-doc-pin[Une liste]{required=true add="composée d’un ensemble d’options sélectionnables"}

:::

### Variations

La liste déroulante riche ne propose aucune variation.

### Tailles

La liste déroulante riche existe en une taille MD unique.

Les composants imbriqués à l’intérieur sont quant à eux en taille SM.

### États

**Etat d’erreur**

L'état d’erreur est signalé par un changement de couleur ainsi que l’affichage d’une ligne rouge (cf. couleurs fonctionnelles : le rouge est la couleur de l’état erreur) et d’un message d’erreur en-dessous du composant.

**Etat de succès**

L'état de succès est signalé par un changement de couleur ainsi que l’affichage d’une ligne verte (cf. couleurs fonctionnelles : le vert est la couleur de l’état succès) et d’un message de succès en-dessous du composant.

**Etat désactivé**

L'état désactivé indique que l’usager ne peux pas interagir avec la liste déroulante riche.

Cet état peut être utilisé pour empêcher l'usager d'interagir avec la liste jusqu'à ce qu'une autre action soit terminée.

### Personnalisation

La liste déroulante riche n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](#liste-déroulante-riche).


