import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-geist-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fantom.systems'),
  title: "Izrada Sajta | Profesionalno Pravljenje Web Sajtova | Fantom",
  description: "Profesionalna izrada sajta i web aplikacija. Pravljenje sajtova, web dizajn, razvoj web stranica, kreiranje e-commerce sajtova. Najbolja agencija za izradu sajtova u Srbiji.",
  keywords: [
    "izrada sajta",
    "pravljenje sajtova",
    "kreiranje sajtova",
    "izrada web sajta",
    "web dizajn",
    "dizajn sajta",
    "razvoj sajtova",
    "pravljenje web stranica",
    "kreiranje web stranica",
    "izrada web stranica",
    "web development",
    "izrada web aplikacija",
    "pravljenje web aplikacija",
    "e-commerce sajt",
    "izrada internet prezentacije",
    "web dizajner",
    "agencija za izradu sajtova",
    "profesionalna izrada sajtova",
    "izrada sajta cena",
    "koliko kosta izrada sajta",
    "najbolja agencija za sajtove",
    "web sajt na kljuc",
    "izrada sajta Srbija",
    "izrada sajta Beograd",
    "responsive web dizajn",
    "SEO optimizacija",
    "brz sajt",
    "moderna izrada sajtova"
  ],
  authors: [{ name: "Fantom Web Agency" }],
  openGraph: {
    title: "Izrada Sajta | Profesionalno Pravljenje Web Sajtova | Fantom",
    description: "Profesionalna izrada sajta i web aplikacija. Pravljenje sajtova, web dizajn, razvoj web stranica. Najbolja agencija za izradu sajtova.",
    type: "website",
    url: "https://fantom.systems",
    siteName: "Fantom - Agencija za Izradu Sajtova",
    locale: "sr_RS",
  },
  alternates: {
    canonical: "https://fantom.systems",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

