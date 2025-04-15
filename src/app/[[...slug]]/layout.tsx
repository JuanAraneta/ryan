import { getPage } from "@/lib/query/pages";
import { Header } from "@/modules/Header/Header";
import { Footer } from "@/modules/Footer/Footer";
import { headerMorpher } from "@/modules/Header/header.morpher";
import { footerMorpher } from "@/modules/Footer/footer.morpher";
import { getPageParams } from "@/helpers/getPageParams";
import { ISeoMetadataFields } from "@/models/contentful";
import { SEOMetadata } from "@/components/SEOMetadata/SEOMetadata";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string[] }>;
}>) {
  const { slug } = await params;

  const pageParams = await getPageParams(slug);

  const page = await getPage(pageParams);

  const header = page?.header?.fields;
  const footer = page?.footer?.fields;
  const metadata = page?.seoMetadata?.fields as ISeoMetadataFields;

  console.log(metadata);

  return (
    <>
      <head>
        <SEOMetadata metadata={metadata} />
      </head>
      <body>
        <main>
          {header && <Header {...headerMorpher(header, pageParams)} />}
          {children}
          {footer && <Footer {...footerMorpher(footer, pageParams)} />}
        </main>
      </body>
    </>
  );
}
