import { contentClient } from "@/lib/contentful/contentClient";
import { GetAllPagesQuery } from "@/lib/contentful/query/GetAllPagesQuery";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

const SECRET = process.env.DRAFT_MODE_SECRET;

if (!SECRET) {
  throw new Error("DRAFT_MODE_SECRET environment variable is not configured");
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const secret = searchParams.get("secret");

  if (secret !== SECRET) return new Response("Invalid token", { status: 401 });

  const slug = searchParams.get("slug");

  if (!slug) return new Response("Invalid slug", { status: 401 });

  const pagesResult = await contentClient.query(GetAllPagesQuery, {});

  const page = pagesResult.data?.pageCollection?.items.find(
    (page) => page?.slug === slug,
  );

  if (!page?.slug) {
    return new Response("Invalid slug", { status: 401 });
  }

  const draft = await draftMode();
  draft.enable();

  redirect(`/${page.slug}`);
}
