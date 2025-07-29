import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { RichTextFragments } from "@/lib/contentful/fragments/RichTextFragments.generated";
import { graphql } from "gql.tada";

export const ComponentCardDeviceMockFragment = graphql(
  `
    fragment ComponentCardDeviceMockFragment on ComponentCardDeviceMock {
      title
      moduleBackground
      richTextBody {
        ...ComponentCardDeviceMock_richTextBodyFragment
      }
      callToAction {
        ...ComponentLinkFragment
      }
      deviceMock {
        ...AssetFragment
      }
    }
  `,
  [
    RichTextFragments.ComponentCardDeviceMock_richTextBody,
    ComponentLinkFragment,
    AssetFragment,
  ],
);
