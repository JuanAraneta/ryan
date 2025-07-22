import type { Metadata } from "next";
import "../global.css";

export const metadata: Metadata = {
  title: "Next.js Template",
  description: "Template for Next.js apps",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en">{children}</html>;
}
