import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KS Laboratory — Chemicals & Equipment for Schools",
  description:
    "Quality laboratory chemicals and equipment for schools. Everything you need for safe and effective science learning.",
  keywords: [
    "laboratory",
    "chemicals",
    "lab equipment",
    "school laboratory",
    "science equipment",
    "KS Laboratory",
  ],
  openGraph: {
    title: "KS Laboratory — Chemicals & Equipment for Schools",
    description:
      "Quality laboratory chemicals and equipment for schools. Everything you need for safe and effective science learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
