import type { Metadata } from "next";
import { Assistant, Dancing_Script } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  variable: "--font-assistant",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://may-cake.vercel.app'),
  title: "May Cake - עוגות מעוצבות וסדנאות אפייה | מאי בן הרוש",
  description: "האתר הרשמי של מאי בן הרוש. עוגות מעוצבות, עוגיות אמסטרדם, מארזים מתוקים וסדנאות אפייה דיגיטליות.",
  keywords: ["עוגות מעוצבות", "קונדיטורית", "מאי בן הרוש", "סדנאות אפייה", "עוגיות אמסטרדם", "מגולגלות קינדר", "עוגות מוס", "בנטו", "עוגות מספרים", "שולחנות קינוחים", "סדנאות זילוף", "עוגות יום הולדת", "מארזים מתוקים"],
  openGraph: {
    title: "May Cake - עוגות מעוצבות וסדנאות אפייה",
    description: "בואו להכיר את העולם המתוק של מאי בן הרוש. הזמנת עוגות ורכישת סדנאות.",
    url: 'https://may-cake.vercel.app',
    siteName: 'May Cake',
    locale: 'he_IL',
    type: 'website',
    images: [
      {
        url: 'https://may-cake.vercel.app/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'May Cake - עוגות מעוצבות',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'May Cake - עוגות מעוצבות וסדנאות אפייה',
    description: 'בואו להכיר את העולם המתוק של מאי בן הרוש. הזמנת עוגות ורכישת סדנאות.',
    images: ['https://may-cake.vercel.app/og-image.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${assistant.variable} ${dancingScript.variable} antialiased bg-[#FFF0F5] text-gray-800`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              "name": "May Cake - מאי בן הרוש",
              "image": "https://may-cake.vercel.app/og-image.webp",
              "description": "האתר הרשמי של מאי בן הרוש. עוגות מעוצבות, עוגיות אמסטרדם, מארזים מתוקים וסדנאות אפייה דיגיטליות.",
              "url": "https://may-cake.vercel.app",
              "telephone": "+972500000000", // Replace with real number if available or user provides it
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Israel",
                "addressCountry": "IL"
              },
              "priceRange": "$$",
              "author": {
                "@type": "Person",
                "name": "May Ben Harush"
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
