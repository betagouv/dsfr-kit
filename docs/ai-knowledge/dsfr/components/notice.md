# DSFR Notice Component

*Generated from local node_modules*

## Presentation

---
title: Bandeau d'information importante
shortTitle: Bandeau d'information importante
titleId: Notice
description: Présentation du composant Bandeau d’information importante permettant de signaler temporairement une information urgente ou prioritaire en tête de page.
shortDescription: Afficher une alerte temporaire prioritaire.
keywords: bandeau, alerte, information importante, vigilance météo, composant éditorial, interface, UX, design system, accessibilité, urgence
cover: ./_asset/cover/cover.png
excerpt: Le bandeau d’information importante sert à attirer l’attention sur une information temporaire prioritaire comme une alerte météo. Il s’affiche sous la navigation principale sur l’ensemble des pages.
summary: Ce document présente les bonnes pratiques d’usage du bandeau d’information importante. Il décrit son rôle dans la diffusion d’informations urgentes ou prioritaires, précise les cas d’usage recommandés, notamment pour les alertes météo, et définit les règles de positionnement et de rédaction. Il insiste sur la nécessité de limiter son usage à des cas exceptionnels pour préserver son efficacité. Ce guide s’adresse aux équipes éditoriales et techniques souhaitant alerter efficacement les usagers dans un cadre cohérent et accessible.
mesh:
  - component/header
  - component/navigation
---

## Bandeau d'information importante

Le bandeau d’information importante est un élément éditorial permettant d’attirer l’attention des usagers sur une information importante et temporaire.

:::dsfr-doc-tab-navigation

- Présentation
- [Démo](./demo/index.md)
- [Design](./design/index.md)
- [Code](./code/index.md)
- [Accessibilité](./accessibility/index.md)

:::

::dsfr-doc-storybook{storyId=notice--notice}

### Quand utiliser ce composant ?

Utiliser le bandeau d’information importante pour permettre aux usagers d’être informés ou d’accéder à une information primordiale ou urgente, de façon temporaire.

> [!NOTE]
> Le bandeau d’information importante n’est pas conçu pour relayer une actualité, une information secondaire ou tout autre contenu informatif d’un site qui ne concernerait pas directement l’usager. Une utilisation excessive ou continue de ce type de bandeaux risquerait de rendre le composant invisible aux yeux des usagers, en les habituant à sa présence.

### Comment utiliser ce composant ?

- **Placer le bandeau d’information importante directement sous la navigation principale**, et visible sur toutes les pages du site, quel que soit l’appareil utilisé.
- **Transmettre l’essentiel de l’information dans le contenu du bandeau**. Il est toutefois possible d’ajouter un lien permettant de renvoyer l’usager vers une source d’information complète.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-1.png)

Permettre à l’usager d’obtenir l’information principale à la seule lecture du bandeau d’information importante.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-1.png)

Ne pas forcer l’usager à devoir consulter une source complémentaire pour comprendre l’information relayée.

:::

- **Utiliser de façon prioritaire l’état par défaut du bandeau** (voir ci-dessous), qui répond à la plupart des cas d’usages. Toutes les autres variations sont à utiliser dans un cadre strictement exceptionnel.

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-2.png)

Utiliser les bandeaux d’information importante selon les cas d’usage définis.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-2.png)

Ne pas utiliser un bandeau d’information importante dans un autre contexte que celui qui lui est strictement réservé.

:::

- **Afficher les bandeaux de manière pertinente**, notamment ceux de vigilance météo. Les niveaux de vigilance étant fixés à l’échelle départementale (sauf pour les phénomènes d’avalanches et vagues-submersion, localisés plus précisément), les bandeaux doivent être affichés en fonction de la localisation de l’usager.

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/use/do-3.png)

Afficher un bandeau de vigilance météo sur un site ciblant un département ou une région particulière concerné par l’alerte.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/use/dont-3.png)

Ne pas généraliser un bandeau de vigilance météo à des sites en dehors de la zone géographique concernée par l’alerte.

:::

::::

### Règles éditoriales

**Bandeaux de vigilance météo**

- **Inclure le nom du phénomène météorologique** en plus du niveau de vigilance au titre du bandeau d’information importante (ou le plus prégnant s’il s’agit d’une combinaison de plusieurs phénomènes) et ce, peu importe le niveau de vigilance relayé.

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-1.png)

Préciser le phénomène météorologique en plus du niveau de vigilance dans le titre du bandeau.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-1.png)

Ne pas indiquer uniquement le niveau de vigilance au sein du bandeau d’information importante. Il ne se suffit pas à lui-même.

:::

- **Préciser une zone géographique et une temporalité** au sein du texte d’accompagnement du bandeau d’information. Celui-ci doit comporter une notion du département concerné ou du nombre de départements concernés, pour les sites à portée nationale, ainsi que le moment de la journée auquel l’alerte s’applique (sans nécessairement détailler les heures, mais pour donner une idée de la temporalité).

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](./_asset/edit/do-2.png)

Utiliser le texte d’accompagnement pour donner des précisions géographiques et temporelles liées au phénomène météorologique.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](./_asset/edit/dont-2.png)

Ne pas se contenter de simplement alerter sur le phénomène météorologique attendu.

:::

::::

- **Respecter les termes définis par la [circulaire interministérielle](https://www.legifrance.gouv.fr/download/pdf/circ?id=45225) et les icônes leur étant associées** en ce qui concerne les 8 phénomènes couverts par les bandeaux de vigilance météo.

Vent - <span class="fr-icon-windy-fill" aria-hidden="true"></span>

Orages - <span class="fr-icon-thunderstorms-fill" aria-hidden="true"></span>

Pluie-Inondation - <span class="fr-icon-heavy-showers-fill" aria-hidden="true"></span>

Vagues-submersion - <span class="fr-icon-flood-fill" aria-hidden="true"></span>

Grand froid - <span class="fr-icon-temp-cold-fill" aria-hidden="true"></span>

Canicule - <span class="fr-icon-sun-fill" aria-hidden="true"></span>

Avalanches - <span class="fr-icon-avalanches-fill" aria-hidden="true"></span>

Neige-Verglas - <span class="fr-icon-snowy-fill" aria-hidden="true"></span>


## Design

---
boost: 0
sitemap:
  noindex: true
title: Design du Bandeau d'information importante
shortTitle: Design du Bandeau d'information importante
description: Présentation des choix graphiques, des principes visuels et des variantes disponibles du composant Bandeau d'information importante.
shortDescription: Afficher une alerte temporaire prioritaire.
keywords: bandeau, alerte, information importante, vigilance météo, composant éditorial, interface, UX, design system, accessibilité, urgence
cover: ../_asset/cover/cover.png
excerpt: Le bandeau d’information importante sert à attirer l’attention sur une information temporaire prioritaire comme une alerte météo. Il s’affiche sous la navigation principale sur l’ensemble des pages.
summary: Ce document présente les bonnes pratiques d’usage du bandeau d’information importante. Il décrit son rôle dans la diffusion d’informations urgentes ou prioritaires, précise les cas d’usage recommandés, notamment pour les alertes météo, et définit les règles de positionnement et de rédaction. Il insiste sur la nécessité de limiter son usage à des cas exceptionnels pour préserver son efficacité. Ce guide s’adresse aux équipes éditoriales et techniques souhaitant alerter efficacement les usagers dans un cadre cohérent et accessible.
mesh:
  - component/header
  - component/navigation
---

## Bandeau d'information importante

Le bandeau d’information importante est un élément éditorial permettant d’attirer l’attention des usagers sur une information importante et temporaire.

Le bandeau d’information importante est un élément éditorial permettant d’attirer l’attention des usagers sur une information importante et temporaire.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- Design
- [Code](../code/index.md)
- [Accessibilité](../accessibility/index.md)

:::

:::dsfr-doc-anatomy{col=12}

![Anatomie du bandeau d'information importante](../_asset/anatomy/anatomy-1.png)

::dsfr-doc-pin[Une icône]{add="obligatoire et normée pour les bandeaux de vigilance météo et les bandeaux d’alertes"}

::dsfr-doc-pin[Un titre en gras]{add="normé pour les bandeaux de vigilance météo et les bandeaux d’alertes" required=true}

::dsfr-doc-pin[Une description]{add="recommandée pour apporter du contexte"}

::dsfr-doc-pin[Un lien]{add="obligatoire et normé pour les bandeaux de vigilance météo et les bandeaux d’alertes"}

::dsfr-doc-pin[Un fond]{required=true}

::dsfr-doc-pin[Une croix de fermeture]

:::

### Variations

**Bandeaux génériques**

- Bandeau d'information importante - par défaut.

::dsfr-doc-storybook{storyId=notice--notice}

Utiliser le bandeau d’information importante pour afficher une information exceptionnelle, mais non critique pour la santé ou la sécurité de l’utilisateur.

- Bandeau d’avertissement

::dsfr-doc-storybook{storyId=notice--warning}

Utiliser le bandeau d’avertissement pour afficher une information qui peut affecter l’usager dans son usage du service (indisponibilité majeure du site ou d’une démarche importante par exemple) ou pour avertir d’un risque de sécurité lié au site ou au service (risque de phishing, usurpations etc.)

- Bandeau d’alerte

::dsfr-doc-storybook{storyId=notice--alert}

Utiliser le bandeau d’alerte pour afficher une information critique pour la santé ou la sécurité de l’utilisateur.

**Bandeaux de vigilance météo**

Ces bandeaux servent à relayer des informations sur les niveaux de vigilance et risques météorologiques communiqués par Météo France.

Une vidéo présentant les niveaux de vigilance est disponible sur la chaîne YouTube du Système de Météo France :

[Voir la vidéo sur YouTube](https://www.youtube.com/watch?v=pT98qCs58h4)

Le Système de Design de l’État prévoit que ces bandeaux soient affichés à partir du niveau de vigilance orange. Les niveaux de vigilance vert et jaune ne justifiant pas d’afficher un bandeau d’information sur les sites de l’État.

Les niveaux de vigilance étant revus quotidiennement par Météo France, il est demandé de ne plus afficher ces bandeaux dès lors que le niveau de vigilance revient à la normale.

- Vigilance orange

::dsfr-doc-storybook{storyId=notice--weather-orange}

Utiliser ce niveau de vigilance lorsque des phénomènes dangereux sont prévus. Son rôle est d’inciter l’usager à suivre l'évolution de la situation ainsi que les conseils de sécurité émis par les pouvoirs publics.

- Vigilance rouge

::dsfr-doc-storybook{storyId=notice--weather-red}

Utiliser ce niveau de vigilance lorsque des phénomènes dangereux, d'intensité exceptionnelle, sont prévus. Il doit inciter l’usager à suivre la situation et à impérativement respecter les consignes de sécurité émises par les pouvoirs publics.

- Vigilance violette

::dsfr-doc-storybook{storyId=notice--weather-purple}

Réserver ce niveau de vigilance aux territoires ultra-marins où les phénomènes météorologiques liés aux cyclones y font l’objet de dispositifs d’alertes spécifiques à chaque territoire ou région, donnant lieu à une couleur d’alerte violette figurant le niveau d’alerte maximale.

La vigilance violette ne fait pas partie du référentiel de Météo France, mais à un référentiel différent : celui de l’alerte cyclonique.

**Bandeaux d’alerte**

Les bandeaux d’alerte sont conçus pour relayer des alertes relatifs aux risques majeurs pour la Nation, mettant en danger la sécurité des biens et des personnes. **Ils sont utilisables uniquement dans les cas précis pour lesquels ils sont prévus**.

- Alerte attentat

::dsfr-doc-storybook{storyId=notice--attack}

Afficher ce bandeau uniquement lorsqu'un attentat est en cours. Cette information étant émise par le Ministère de l’Intérieur, les intitulés officiels doivent être respectés.

> [!WARNING]
> Ne pas utiliser ce bandeau pour signifier un relèvement, un abaissement ou le niveau en cours du plan Vigipirate : il s’agit d’une information et non d’une alerte.

- Appel à témoins

::dsfr-doc-storybook{storyId=notice--witness}

Afficher ce bandeau uniquement lorsqu'un appel à témoins est émis par le Ministère de l’Intérieur ou une préfecture. Les intitulés officiels doivent être respectés.

- Alerte technologique

::dsfr-doc-storybook{storyId=notice--cyberattack}

Afficher ce bandeau uniquement en cas de cyber-attaque d’ampleur nationale ou d’alerte technologique émise par le Ministère de l’Intérieur. Les intitulés officiels doivent être respectés.

### Tailles

La largeur du bandeau d’information importante est de taille fixe et prend les 12 colonnes disponibles de la grille, au même titre que [l’en-tête](../../../../header/_part/doc/index.md) et la [navigation principale](../../../../navigation/_part/doc/index.md) sous lesquelles il se positionne.

### États

Le bandeau d’information importante n’est sujet à aucun changement d’état.

### Personnalisation

Le bandeau d’information importante n’est pas personnalisable.

Toutefois, certains éléments sont optionnels - voir [la structure du composant](#bandeau-dinformation-importantee).

::::dsfr-doc-guidelines

:::dsfr-doc-guideline[✅ À faire]{col=6 valid=true}

![](../_asset/custom/do-1.png)

Conserver les icônes et couleurs de fond proposées par défaut, chacune étant liée à un cas d’usage spécifique.

:::

:::dsfr-doc-guideline[❌ À ne pas faire]{col=6 valid=false}

![](../_asset/custom/dont-1.png)

Ne pas personnaliser les icônes et couleurs de fond, au risque de compromettre le message transmis et sa bonne compréhension par l’usager.

:::

::::


## Code

---
boost: 0
sitemap:
  noindex: true
title: Code du Bandeau d'information importante
shortTitle: Code du Bandeau d'information importante
description: Mise à disposition des extraits de code, de l’API et de la documentation technique du composant Bandeau d'information importante.
shortDescription: Afficher une alerte temporaire prioritaire.
keywords: bandeau, alerte, information importante, vigilance météo, composant éditorial, interface, UX, design system, accessibilité, urgence
cover: ../_asset/cover/cover.png
excerpt: Le bandeau d’information importante sert à attirer l’attention sur une information temporaire prioritaire comme une alerte météo. Il s’affiche sous la navigation principale sur l’ensemble des pages.
summary: Ce document présente les bonnes pratiques d’usage du bandeau d’information importante. Il décrit son rôle dans la diffusion d’informations urgentes ou prioritaires, précise les cas d’usage recommandés, notamment pour les alertes météo, et définit les règles de positionnement et de rédaction. Il insiste sur la nécessité de limiter son usage à des cas exceptionnels pour préserver son efficacité. Ce guide s’adresse aux équipes éditoriales et techniques souhaitant alerter efficacement les usagers dans un cadre cohérent et accessible.
mesh:
  - component/header
  - component/navigation
---

## Bandeau d'information importante

Le bandeau d’information importante est un élément éditorial permettant d’attirer l’attention des usagers sur une information importante et temporaire.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- Code
- [Accessibilité](../accessibility/index.md)

:::

### HTML

#### Structure du composant

Le **bandeau d’information importante** permet aux utilisateurs de voir ou d’accéder à une information importante et temporaire.

Sa structure comprend les éléments suivants :

- Un conteneur principal est un élément HTML `<div>` défini par les classe `fr-notice` et `fr-notice--info`, représentant le bandeau lui-même.
- Un conteneur est un élément HTML `<div>` défini par la classe `fr-container`.
- Le corps du bandeau est un élément HTML `<div>` défini par la classe `fr-notice__body`.
- Un paragraphe `<p>` qui contient le texte du message dont :
  - Le titre du bandeau d’information importante, obligatoire, dans un élément HTML `<span>` défini par la classe `fr-notice__title`.
  - Le texte du bandeau, optionnel, dans un élément HTML `<span>` défini par la classe `fr-notice__desc`.
  - Un lien, optionnel, dans un élément HTML `<a>` défini par la classe `fr-notice__link`.
- Un bouton de fermeture, optionnel, dans un élément HTML `<button>` de type `button` et défini par les classes `fr-btn--close` et `fr-btn` pour permettre à l'utilisateur de fermer le bandeau.
  - Il doit être lié à une fonction JavaScript pour supprimer le bandeau du DOM lorsque celui-ci est cliqué.

**Exemple de structure HTML**

```HTML
<div class="fr-notice fr-notice--info">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Titre du bandeau assez long</span>
                <span class="fr-notice__desc">Texte de description plutot long lorem ipsum sit consectetur adipiscing elit. Sed</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
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
| notice     | Oui         |          |
| Button     | Non         | Uniquement sur la variation refermable |

:::

**Exemple d'imports CSS**

```HTML
<link href="dist/core/core.min.css" rel="stylesheet">
<link href="dist/component/notice/notice.min.css" rel="stylesheet">
```

#### Variante avec bouton de fermeture

Le composant Bandeau d'information importante peut comporter un bouton de fermeture pour permettre à l'utilisateur de fermer le bandeau.

**Exemple de variante avec bouton de fermeture**

```HTML
<div class="fr-notice fr-notice--info">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Titre du bandeau</span>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

#### Variante avec avec icône personnalisée

Le composant Bandeau d'information importante comporte une icone par defaut qui peut être personnalisée avec l'utilisation d'une classe utilitaire d'icône `fr-icon--NOM-ICONE` (voir [Icônes](../../../../../core/_part/doc/icon/index.md)) sur le conteneur du titre du bandeau.

**Exemple de variante avec icône personnalisée**

```HTML
<div class="fr-notice fr-notice--info">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title fr-icon-virus-fill">Titre du bandeau</span>
            </p>
        </div>
    </div>
</div>
```

#### Déclinaisons de bandeaux génériques

Le composant Bandeau d'information importante propose 3 variations de bandeaux génériques utilisables en fonction du niveau de gravité de l'information.

L'icône peut être modifiée et seul le titre est obligatoire :

- **Bandeau d'information importante** (par défaut)
- **Bandeau d'avertissement**
- **Bandeau d'alerte**

Ces variations sont définies par l'ajout de classes correspondantes sur le conteneur principal :

- `fr-notice--info`
- `fr-notice--warning`
- `fr-notice--alert`

**Exemple de structure HTML du bandeau d'information**

```HTML
<div class="fr-notice fr-notice--info">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Titre du bandeau d'information</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

**Exemple de structure HTML du bandeau d'avertissement**

```HTML
<div class="fr-notice fr-notice--warning">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Titre du bandeau d'avertissement</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

**Exemple de structure HTML du bandeau d'alerte**

```HTML
<div class="fr-notice fr-notice--alert">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Titre du bandeau d'alerte</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

#### Déclinaisons de bandeaux vigilance météo

Le composant Bandeau d'information importante propose 3 variations de bandeaux météo utilisables en fonction du niveau d'alerte météo.

L'icône peut être modifiée et seul le titre est obligatoire :

- **Vigilance météo orange**
- **Vigilance météo rouge**
- **Vigilance météo violette**

Ces variations sont définies par l'ajout de classes correspondantes sur le conteneur principal :

- `fr-notice--weather-orange`
- `fr-notice--weather-red`
- `fr-notice--weather-purple`

**Exemple de structure HTML du bandeau Vigilance météo orange**

```HTML
<div class="fr-notice fr-notice--weather-orange">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Vigilance météo orange</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

**Exemple de structure HTML du bandeau Vigilance météo rouge**

```HTML
<div class="fr-notice fr-notice--weather-red">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Vigilance météo rouge</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

**Exemple de structure HTML du bandeau Vigilance météo violette**

```HTML
<div class="fr-notice fr-notice--weather-purple">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Vigilance météo violette</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

#### Déclinaisons de bandeaux d'alertes

Le composant Bandeau d'information importante propose 3 variations de bandeaux d'alertes utilisables en fonction du type d'alerte.

L'icône ne peut pas être modifiée et les intitulés officiels doivent être utilisés :

- **Alerte attentat**
- **Appel à témoins**
- **Alerte technologique**

Ces variations sont définies par l'ajout de classes correspondantes sur le conteneur principal :

- `fr-notice--attack`
- `fr-notice--witness`
- `fr-notice--cyberattack`

**Exemple de structure HTML du bandeau Alerte attentat**

```HTML
<div class="fr-notice fr-notice--attack">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Attentat en cours</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

**Exemple de structure HTML du bandeau Appel à témoins**

```HTML
<div class="fr-notice fr-notice--witness">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Appel à témoins</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

**Exemple de structure HTML du bandeau Alerte technologique**

```HTML
<div class="fr-notice fr-notice--cyberattack">
    <div class="fr-container">
        <div class="fr-notice__body">
            <p>
                <span class="fr-notice__title">Cyber-attaque</span>
                <span class="fr-notice__desc">Texte de description lorem ipsum sit consectetur adipiscing.</span>
                <a title="Lien de consultation - nouvelle fenêtre" href="#" target="_blank" rel="noopener external" class="fr-notice__link">Lien de consultation</a>
            </p>
            <button title="Masquer le message" onclick="const notice = this.parentNode.parentNode.parentNode; notice.parentNode.removeChild(notice)" type="button" class="fr-btn--close fr-btn">Masquer le message</button>
        </div>
    </div>
</div>
```

---

### JavaScript

Le composant **Bandeau d'information importante** nécessite un JavaScript minimal pour la gestion de la fermeture du bandeau. En cliquant sur le bouton de fermeture, le bandeau est retiré du DOM grâce à un événement JavaScript. Le DSFR ne gère pas cette fonctionnalité car trop dépendant de la technologie utilisée.

#### Fermeture du bandeau

Le bouton de fermeture doit être lié à une fonction JavaScript pour supprimer le bandeau du DOM. Voici un exemple de code en javascript vanilla pour gérer la suppression du bandeau :

```javascript
document.querySelector('.fr-notice__close').addEventListener('click', function() {
  this.closest('.fr-notice').remove();
});
```

Dans l'exemple HTML fourni, cette fonction est déjà intégrée directement dans l'attribut `onclick` du bouton de fermeture.

---

### Note de version

[Voir les évolutions sur github](https://github.com/GouvernementFR/dsfr/pulls?q=is%3Apr+is%3Aclosed+is%3Amerged+notice+)

::dsfr-doc-changelog


## Accessibility

---
boost: 0
sitemap:
  noindex: true
title: Accessibilité du Bandeau d'information importante
shortTitle: Accessibilité du Bandeau d'information importante
description: Description des exigences, recommandations et bonnes pratiques d’accessibilité du composant Bandeau d'information importante.
shortDescription: Afficher une alerte temporaire prioritaire.
keywords: bandeau, alerte, information importante, vigilance météo, composant éditorial, interface, UX, design system, accessibilité, urgence
cover: ../_asset/cover/cover.png
excerpt: Le bandeau d’information importante sert à attirer l’attention sur une information temporaire prioritaire comme une alerte météo. Il s’affiche sous la navigation principale sur l’ensemble des pages.
summary: Ce document présente les bonnes pratiques d’usage du bandeau d’information importante. Il décrit son rôle dans la diffusion d’informations urgentes ou prioritaires, précise les cas d’usage recommandés, notamment pour les alertes météo, et définit les règles de positionnement et de rédaction. Il insiste sur la nécessité de limiter son usage à des cas exceptionnels pour préserver son efficacité. Ce guide s’adresse aux équipes éditoriales et techniques souhaitant alerter efficacement les usagers dans un cadre cohérent et accessible.
mesh:
  - component/header
  - component/navigation
---

## Bandeau d'information importante

Le bandeau d’information importante est un élément éditorial permettant d’attirer l’attention des usagers sur une information importante et temporaire.

:::dsfr-doc-tab-navigation

- [Présentation](../index.md)
- [Démo](../demo/index.md)
- [Design](../design/index.md)
- [Code](../code/index.md)
- Accessibilité

:::

Le composant **Bandeau d'information importante** est conçu pour être accessible et respecter les critères du RGAA. Voici les points clés à prendre en compte pour en garantir l’accessibilité.

### Interactions clavier

Aucune interaction au clavier spécifique au composant.

### Règles d’accessibilité

- Ne pas sauter ce composant avec les liens d'évitement, le bandeau doit être lu quand l’utilisateur choisit d’aller directement au contenu.
- Les **bandeaux refermables** doivent inclure un bouton clairement identifiable pour fermer le bandeau.
- Le bouton de fermeture doit avoir un label explicite via un texte caché et un attribut `title`.
- À la fermeture, repositionner le focus à un endroit pertinent pour l’utilisateur.

### Contrastes de couleurs

Le composant Bandeau d’information importante est suffisamment contrasté en thème clair et en thème sombre dans ses différentes versions.

---

### Restitution par les lecteurs d’écran

Aucun test de restitution n’est nécessaire pour le composant Bandeau d’information importante.

---

### Critères RGAA applicables
- **Couleurs&nbsp;:** 3.2, 3.3
- **Liens&nbsp;:** 6.1, 6.2
- **Scripts&nbsp;:** 7.1, 7.
- **Éléments obligatoires&nbsp;** 8.9
- **Présentation de l’information&nbsp;:** 10.1, 10.2, 10.3, 10.4, 10.5, 10.11, 10.12
- **Consultation&nbsp;:** 13.9, 13.11

---

#### Références

- [Référentiel général d’amélioration de l’accessibilité (RGAA 4.1.2)](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/)


## Demo Reference

Source: `/Users/luis/Code/betagouv/dsfr-kit/apps/storybook/node_modules/@gouvfr/dsfr/example/component/notice/index.html`

```html
<!doctype html>
<html lang="fr" data-fr-theme>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no">
    <title>Bandeau d&#39;information importante - Système de design</title>
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
    <link href="../../../dist/component/logo/logo.main.css" rel="stylesheet">
    <link href="../../../dist/component/breadcrumb/breadcrumb.main.css" rel="stylesheet">
    <link href="../../../dist/component/notice/notice.main.css" rel="stylesheet">
    <link href="../../../dist/component/radio/radio.main.css" rel="stylesheet">
    <link href="../../../dist/component/modal/modal.main.css" rel="styles...
```

(Truncated for brevity. See source file for full HTML)
