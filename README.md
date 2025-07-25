## CMS:

The CMS should have a contentType called "page", and this page should include a field named modules, which will be a list of linked items corresponding to the modules that will be rendered in the application.

## Code:

For each module created in the CMS, the corresponding component should be created within the modules directory. Additionally, it should be registered in the moduleRegistry file, including both the component and the morpher. The morpher is the function responsible for making the CMS data compatible with the component.

## Contentful Code Models Scripts

This project uses Contentful Code Models to keep content models synchronized between TypeScript code and Contentful.

### Scripts

- `contentful-code-models-migrate` - Runs content migrations for breaking changes
- `generate-contentful-schema` - Generates GraphQL schema from Contentful
- `postcontentful-code-models-migrate` - Hook that regenerates schema after migrations

### Workflow

1. Modify models in `src/models/`
2. Run `contentful-code-models-migrate` for breaking changes
3. Schema regenerates automatically
