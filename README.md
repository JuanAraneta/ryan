# Ryan CMS Project

A Next.js application with Contentful CMS using a modular architecture for flexible page composition.

## Architecture Overview

### CMS Structure

The CMS uses a "page" content type ([page.ts](/src/models/page.ts)) with a modular approach:

- **Pages** contain a `modules` field linking to reusable content modules
- **Modules** are registered in [moduleRegistry.tsx](/src/modules/moduleRegistry.tsx)
- **Components** are reusable content parts (e.g., [componentLink.ts](/src/models/componentLink.ts), [componentStatistic.ts](/src/models/componentStatistic.ts)) used within modules
- **Content models** are managed as TypeScript code using contentful-code-models

### Code Structure

```
src/
├── models/           # Contentful content model definitions
│   ├── component*.ts # Reusable content components
│   └── module*.ts    # Module definitions
├── modules/          # React components for each module type
│   └── moduleRegistry.tsx
├── components/core/  # React components (Link.tsx, Button.tsx, etc.)
└── lib/contentful/   # GraphQL queries and fragments
```

## 🚀 Module Creation Guide

### 1. Create Content Model

**Location**: `src/models/moduleNewModule.ts`

- Define fields using [createField.ts](/src/models/utils/createField.ts) helper.
- Always include `createField("contentfulLabel")`
- Set appropriate field types, validation, and help text

### 2. Register Content Model

**Files to update**:

- [`src/models/index.ts`](/src/models/index.ts) - Add to modules array
- [`src/models/moduleContainer.ts`](/src/models/moduleContainer.ts) - Add to linkContentType array

### 3. Deploy to Contentful

When testing out new modules, it may be beneficial to test in a separate environment. You can create your own Contentful environment forked from your intended target in the `Environments` menu in Contentful.
This can help you to safely test migrations while developing or before finally committing to a new environment shape.

```bash
npm run contentful-code-models-migrate
```

_Uses contentful-code-models to push models to Contentful and automatically runs schema generation via post-hook_

**If schema generation doesn't run automatically, execute manually**:

```bash
npm run generate-contentful-schema
```

### 4. Create Module Files

**Location**: `src/modules/ModuleNewModule/`

**Required files**:

- `GetModuleNewModuleById.ts` - GraphQL query
- `ModuleNewModule.tsx` - React component
- `index.ts` - Exports

**Optional files** (if needed):

- **Single extra component/fragment**: Place directly in module folder
- **Multiple extra components**: Create `components/` folder
- **Multiple extra fragments**: Create `fragments/` folder

### 5. Register in Module Registry

**File**: [`src/modules/moduleRegistry.tsx`](/src/modules/moduleRegistry.tsx)

- Import component and query
- Add to registry object

### 6. Verify Implementation

```bash
npm run check     # Run lint, TypeScript check, and tests
npm run dev       # Development server
```

## 📝 Development Guidelines

### Naming Conventions

- **Content Model ID**: camelCase (e.g., `moduleNewModule`)
- **Display Name**: Descriptive (e.g., `"Module / New Module"`)
- **GraphQL Fragments**: Match content type names

### Component Standards

- Wrap new modules in the `Section` component. Set the required prop `data-testid` to the name of the module to easily find the component in the DOM.
- Use `getInspector()` for @contentful/live-preview integration
- Add `"use client"` only for client-side features
- Use existing core components (`Section`, `Button`, `Link`, `Card`)
- Check data exists before rendering
- Use optional chaining (`?.`) and filter null/undefined items
- Test out your new component in the Contentful Preview mode to see how it will feel for content-editors.

### GraphQL Best Practices

- Reuse existing fragments (`ComponentLinkFragment`, `ComponentInsightFragment`, etc.)
- Fragment names should match content type names
- RichText fragments are auto-generated in `RichTextFragments.generated.ts` - import the entire object, use the property in the query dependencies
  e.g., `RichTextFragments.ModuleInsightsBento_headline`, but reference the fragment in queries with "Fragment" suffix `...ModuleInsightsBento_headlineFragment`

## Development Scripts

### Content Model Management

- `npm run contentful-code-models-migrate` - Deploy content models to Contentful (runs schema generation automatically)
- `npm run generate-contentful-schema` - Generate GraphQL schema after manual Contentful changes

### Code Quality & Testing

- `npm run check` - Complete verification (lint + TypeScript + tests)
- `npm run lint` - Fix code style issues
- `npm run test` - Run test suite
- `npm run format` - Format code with prettier

### Development Server

- `npm run dev` - Start development server
