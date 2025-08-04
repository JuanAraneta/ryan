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

  const draft = await draftMode();
  draft.enable();

  if (!slug || slug === "home") {
    redirect("/");
  }

  redirect(`/${slug}`);
}
