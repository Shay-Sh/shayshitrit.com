import type { Metadata } from "next";
import { Heebo, Outfit } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "שי שטרית | The Builder Mindset",
    template: "%s | שי שטרית",
  },
  description: "The world doesn't need more AI strategy. It needs more builders. בונה מערכות AI שעובדות בפרודקשן.",
  metadataBase: new URL("https://shayshitrit.com"),
  openGraph: {
    title: "שי שטרית | The Builder Mindset",
    description: "The world doesn't need more AI strategy. It needs more builders.",
    url: "https://shayshitrit.com",
    siteName: "שי שטרית",
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${outfit.variable} antialiased`}>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-heebo), sans-serif" }}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
