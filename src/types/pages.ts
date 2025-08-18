type SearchParams = Record<string, string | string[]>;

export interface PageProps {
  locale?: string;
  searchParams?: SearchParams;
  currentPath?: string;
}

export interface NextPageProps {
  params: Promise<{ slug?: string | Array<string> }>;
  searchParams: Promise<SearchParams>;
  currentPath?: Promise<string>;
}
