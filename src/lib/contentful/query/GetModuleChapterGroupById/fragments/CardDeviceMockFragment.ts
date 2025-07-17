import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { RichTextFragment } from "@/lib/contentful/fragments/RichTextFragment";
import { ThemeBackgroundFragment } from "@/lib/contentful/fragments/ThemeBackgroundFragment";
import { graphql } from "gql.tada";

export const ComponentCardDeviceMockFragment = graphql(
  `
    fragment ComponentCardDeviceMockFragment on ComponentCardDeviceMock {
      title
      backgroundColor {
        ...ThemeBackgroundFragment
      }
      body {
        ...RichTextFragment
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
    ThemeBackgroundFragment,
    RichTextFragment,
    ComponentLinkFragment,
    AssetFragment,
  ]
);
