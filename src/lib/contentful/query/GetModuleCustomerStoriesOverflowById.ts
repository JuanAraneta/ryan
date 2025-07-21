import { graphql } from 'gql.tada';
import { RichTextFragment } from '../fragments/RichTextFragment';
import { ComponentLinkFragment } from '../fragments/ComponentLinkFragment';
import { ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment } from '../fragments/ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment';

export const GetModuleCustomerStoriesOverflowById = graphql(
  `
    query GetModuleCustomerStoriesOverflowById(
      $locale: String
      $preview: Boolean
      $id: String!
    ) {
      moduleCustomerStoriesCarousel(
        id: $id
        preview: $preview
        locale: $locale
      ) {
        ...ModuleCustomerStoriesOverflowFragment
      }
    }

    fragment ModuleCustomerStoriesOverflowFragment on ModuleCustomerStoriesCarousel {
      title {
        ...RichTextFragment
      }
      callToAction {
        ...ComponentLinkFragment
      }
      customerStoriesCollection {
        ...ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment
      }
    }
  `,
  [
    RichTextFragment,
    ComponentLinkFragment,
    ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment,
  ]
);
