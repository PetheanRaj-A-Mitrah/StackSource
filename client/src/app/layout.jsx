import { Quicksand } from "next/font/google";
import "./globals.css"

import { getGlobalSettings } from "@/data/loaders";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata = {
  title: "Strapi Next.js Landing Page",
  description: "Strapi Next.js Landing Page is a starter template for building landing pages with Strapi and Next.js.",
};

async function loader() {
  const { data } = await getGlobalSettings();
  if (!data) throw new Error("Failed to fetch global settings");
  return { header: data?.header, footer: data?.footer };
}


export default async function RootLayout({
  children,
}) {
  const { header, footer } = await loader();
  return (
    <html lang="en">
      <body className={`${quicksand.variable}`}>
        <Header data={header} />
        {children}
        <Footer data={footer} />
      </body>
    </html>
  );
}