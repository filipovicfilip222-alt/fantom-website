import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-geist-sans',
});

export const metadata: Metadata = {
  title: "Fantom — Arhitektura Digitalnih Sistema",
  description: "Napredni web razvoj i AI rešenja. Mi gradimo nevidljivu infrastrukturu.",
  keywords: ["web development", "AI solutions", "digital architecture", "high-end agency"],
  authors: [{ name: "Fantom" }],
  openGraph: {
    title: "Fantom — Arhitektura Digitalnih Sistema",
    description: "Napredni web razvoj i AI rešenja. Mi gradimo nevidljivu infrastrukturu.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

