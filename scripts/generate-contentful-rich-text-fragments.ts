import { buildSchema, GraphQLObjectType } from "graphql";
import { promises as fs } from "fs";
import path from "path";
import { $ } from "zx";

(async () => {
  const SCHEMA_PATH = "./contentful/schema.graphql";
  const OUTPUT_PATH =
    "./src/lib/contentful/fragments/RichTextFragments.generated.ts";
  const TARGET_FIELDS = ["json", "links"];

  // They must all remain unmasked so that they identify as the same type
  const fragmentGenerator = (
    fragmentName: string,
    typeName: string
  ) => /* GraphQL */ `
  fragment ${fragmentName}Fragment on ${typeName} @_unmask {
    json
    links {
      entries {
        hyperlink {
          sys {
            id
          }
          __typename
          ... on Page {
            slug
          }
        }
      }
    }
  }
`;

  const finalOutputGenerator = (
    richTextTypeRelationships: Array<{
      containerType: string;
      fieldName: string;
      richTextType: string;
    }>
  ) => `
  /* eslint-disable */
  // DO NOT MODIFY
  // Generated via \`pnpm run generate-contentful-rich-text-fragments\`
  import { graphql } from "gql.tada";

  export const RichTextFragments = {
    ${richTextTypeRelationships.reduce(
      (acc, { containerType, fieldName, richTextType }) => {
        const fragmentName = `${containerType}_${fieldName}`;
        return (acc += `${fragmentName}: graphql(\`${fragmentGenerator(fragmentName, richTextType)}\`),`);
      },
      ""
    )}
  };
`;

  try {
    const schemaSDL = await fs.readFile(SCHEMA_PATH, "utf-8");
    const schema = buildSchema(schemaSDL);
    const typeMap = schema.getTypeMap();
    const allObjectTypes = Object.entries(typeMap).filter(
      ([__typename, type]) =>
        !__typename.startsWith("__") && type instanceof GraphQLObjectType
    ) as Array<[string, GraphQLObjectType]>;

    const allRichTextTypes = allObjectTypes
      .map(([__typename, type]) => {
        const fields = type.getFields();
        const fieldNames = Object.keys(fields);

        if (!TARGET_FIELDS.every((f) => fieldNames.includes(f))) return null;
        return __typename;
      })
      .filter(Boolean);

    const allRichTextTypeRelationships = allObjectTypes.flatMap(
      ([__typename, type]) =>
        Object.entries(type.getFields())
          .map(([fieldName, field]) => {
            const matchingRichTextTypeIndex = allRichTextTypes.findIndex(
              (richTextType) =>
                "name" in field.type && field.type.name === richTextType
            );
            if (matchingRichTextTypeIndex === -1) return null;
            return {
              containerType: __typename,
              fieldName: fieldName,
              richTextType: allRichTextTypes[matchingRichTextTypeIndex],
            };
          })
          .filter(Boolean)
    );

    await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });

    await fs.writeFile(
      OUTPUT_PATH,
      finalOutputGenerator(allRichTextTypeRelationships),
      "utf-8"
    );
    $`prettier ${OUTPUT_PATH} --write`;
  } catch (e) {
    console.error(e);
  }
})();
