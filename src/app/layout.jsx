import { roboto } from "@/fonts";

// style
import "./globals.css";

import "@/lib/fontawesome";

import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JotaiProvider from "@/components/JotaiProvider";

// Metadata
export const metadata = {
  metadataBase: new URL("https://www.groundeliteacademy.fr"),
  title: "Club de lutte et grappling à Nice - GEA",
  description:
    "Ground Elite Academy à Nice, club de lutte et grappling ouvert à tous : enfant, ado et adulte, débutant ou confirmé. Ambiance conviviale, entraînement de qualité.",
  keywords: [
    "club de lutte nice",
    "club de grappling nice",
    "Ground Elite Academy",
    "Nazim et Gaetan",
    "nice",
    "remise en forme",
    "perte de poids",
    "sport enfant",
    "sport ado",
    "sport adulte",
    "sport débutant",
    "sport confirmé",
    "ambiance conviviale",
    "entraînement de qualité",
  ],
  authors: [{ name: "Ground Elite Academy", url: "groundeliteacademy.fr" }],
  creator: "Ground Elite Academy",
  publisher: "Ground Elite Academy",
  siteName: "Ground Elite Academy",
  openGraph: {
    title: "Club de lutte et grappling à Nice - GEA",
    description:
      "Ground Elite Academy à Nice, club de lutte et grappling ouvert à tous : enfant, ado et adulte, débutant ou confirmé. Ambiance conviviale, entraînement de qualité.",
    siteName: "Ground Elite Academy",
    domain: "groundeliteacademy.fr",
    type: "website",
    images: [
      {
        url: "/seo-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Club de lutte et grappling à Nice - GEA",
    description:
      "Ground Elite Academy à Nice, club de lutte et grappling ouvert à tous : enfant, ado et adulte, débutant ou confirmé. Ambiance conviviale, entraînement de qualité.",
    images: ["/seo-image.jpg"],
    domain: "groundeliteacademy.fr",
  },
  type: "website",
  domain: "groundeliteacademy.fr",
  locale: "fr",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={roboto.variable}>
        <AuthProvider>
          <JotaiProvider>
            <Header />
            <div className="flex min-h-screen flex-col">{children}</div>
            <Footer />
          </JotaiProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
