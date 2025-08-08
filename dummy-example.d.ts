export type Page = {
  metadata: Metadata;
  slug: string;
  pageContent?: PageContent;
  parentPage: Page;
  region: Region;
};

type PageContent = Expert | NewsAndInsights | HierarchicalPage;

expert / foo / bar;

type HierarchicalPage = {
  __typename: "HierarchicalPage";
  moduleContainers: Array<ModuleContainer>;
};

// declare function getPageByPath(path: string): Page;
// # How to find the proper path, based on the Page instance
// Page.market.slug is first segment, unless that's the default market, in which case we omit that segment
// Take the Page.slug as the rightmost segment.
// Take the slug from every Page.parent until you hit `null` and append them RTL
// ALWAYS KEEP TRACK OF EVERYTHING IN THE CURRENT CHAIN TO AVOID LOOPS
// TRY TO CACHE AS MANY OF THESE QUERIES AND CALCULATIONS AS POSSIBLE

// declare function getPathByPage(page: Page): string;
// # How to find the proper Page instance, based on the URL
// 1. Determine the market based on the first segment
// 2. If no market matches the first segment, assume default market
// 3. Take the whole URL without the market segment and work RTL
// 4. For each segment, find all Page instances whose market matches and slug matches that segment
// 5. If there is no current slug because the path is "" or "/", search instead for the slug "index"
// 6. For each page, if there is a parent and another segment, go back a step with the rest of the path and the parent
// 7. If you've run out of segments and you have no parent, resolve the first Page instance in the chain
// 8. If you have more segments but no parent, or vice versa, continue to the next page from the query in step 4
// 9. If you run out of returned pages from step 4, `notFound()`
// ALWAYS KEEP TRACK OF EVERYTHING IN THE CURRENT CHAIN TO AVOID LOOPS
// TRY TO CACHE AS MANY OF THESE QUERIES AND CALCULATIONS AS POSSIBLE

// declare function getPageByContent(content: Page["content"]): Page;
// # How to link to a specific content item, like an expert
// 1. Query for the pages within the current market whose content references that expert.
// 2. Always use the first one. I don't think we can avoid the case where multiple pages have the same content instance. It's an inherent footgun. We could also say that it must be a parent whose parent.slug is "expert" and whose parent.parent is null.
// TRY TO CACHE AS MANY OF THESE QUERIES AND CALCULATIONS AS POSSIBLE
