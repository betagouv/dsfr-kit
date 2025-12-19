/**
 * Auto-generated surgical wrapper for DSFR stories.
 * Source: node_modules/@gouvfr/dsfr/src/dsfr/component/breadcrumb/template/stories/breadcrumb.stories.js
 */
import OriginalMeta, {
  BreadcrumbStory as OriginalStory,
} from "../../../node_modules/@gouvfr/dsfr/src/dsfr/component/breadcrumb/template/stories/breadcrumb.stories.js";

const BreadcrumbStory = {
  ...OriginalStory,
  args: {
    ...OriginalMeta.args,
    id: 'breadcrumb',
    markup: 'a',
    segments: [
      {
        id: 'segment-0',
        label: 'Accueil',
        href: '/#',
        markup: 'a'
      },
      {
        id: 'segment-1',
        label: 'Segment 1: lorem ipsum',
        href: '#',
        markup: 'a'
      },
      {
        id: 'segment-2',
        label: 'Segment 2: lorem ipsum',
        href: '#',
        markup: 'a'
      },
      {
        id: 'segment-3',
        label: 'Page actuelle',
        href: undefined, // Last item usually has no href
        markup: 'a'
      }
    ]
  }
};

export { BreadcrumbStory };

const { id: _id, title: _title, ...meta } = OriginalMeta;

export default {
  ...meta,
  title: "DSFR/Breadcrumb",
};
