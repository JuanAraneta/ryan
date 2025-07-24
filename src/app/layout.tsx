import type { Metadata } from "next";
import "../global.css";

export const metadata: Metadata = {
  title: "Ryan Tax Firm",
  description:
    "Ryan is a global tax services, software, and technology firm providing an integrated suite of federal, state, local, and international tax services to companies across the world.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en">{children}</html>;
}
