import { PageParams } from "@/types/generic";
import { headers, type UnsafeUnwrappedHeaders } from "next/headers";

// method only for use inside a page
export const getPageParams = async () => {
  const headerList = (await headers()) as unknown as UnsafeUnwrappedHeaders;

  return { path: headerList.get("path") } as PageParams;
};
