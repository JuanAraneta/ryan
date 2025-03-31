import type { Metadata } from "next";
import { getPage } from "@/lib/query/pages";
import { Header } from "@/modules/Header/Header";
import { Footer } from "@/modules/Footer/Footer";
import { headerMorpher } from "@/modules/Header/header.morpher";

import { footerMorpher } from "@/modules/Footer/footer.morpher";
import { getPageParams } from "@/helpers/getPageParams";

export const metadata: Metadata = {
  title: "Next.js Template",
  description: "Template for Next.js apps",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const pageParams = await getPageParams();
  const page = await getPage({ ...pageParams, lang });

  const header = page?.header?.fields;
  const footer = page?.footer?.fields;

  return (
    <main>
      {header && <Header {...headerMorpher(header, pageParams)} />}
      {children}
      {footer && <Footer {...footerMorpher(footer, pageParams)} />}
    </main>
  );
}
