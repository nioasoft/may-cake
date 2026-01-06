import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  variable: "--font-assistant",
});

export const metadata: Metadata = {
  title: "May Cake - עוגות מעוצבות וסדנאות אפייה | מאי בן הרוש",
  description: "האתר הרשמי של מאי בן הרוש. עוגות מעוצבות, עוגיות אמסטרדם, מארזים מתוקים וסדנאות אפייה דיגיטליות.",
  keywords: ["עוגות מעוצבות", "קונדיטורית", "מאי בן הרוש", "סדנאות אפייה", "עוגיות אמסטרדם", "מגולגלות קינדר", "עוגות מוס", "בנטו", "עוגות מספרים"],
  openGraph: {
    title: "May Cake - עוגות מעוצבות וסדנאות אפייה",
    description: "בואו להכיר את העולם המתוק של מאי בן הרוש. הזמנת עוגות ורכישת סדנאות.",
    url: 'https://may-cake.vercel.app',
    siteName: 'May Cake',
    locale: 'he_IL',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png', // Apple touch icon usually likes PNGs
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
        className={`${assistant.variable} antialiased bg-[#FFF0F5] text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
