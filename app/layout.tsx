import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "NYN Detailing | Premium Vehicle Wrapping, PPF & Window Tinting — Slacks Creek QLD",
  description:
    "Brisbane's premium vehicle wrapping, paint protection film (PPF) and window tinting specialists. 5.0★ Google rated. Detail-obsessed work by Sam at NYN Detailing in Slacks Creek QLD. Get a free quote today.",
  keywords: [
    "vehicle wrapping Brisbane",
    "paint protection film Brisbane",
    "PPF Brisbane",
    "window tinting Brisbane",
    "car detailing Slacks Creek",
    "paint correction Logan",
    "NYN Detailing",
  ],
  metadataBase: new URL("https://nyn-detailing.local"),
  openGraph: {
    title: "NYN Detailing | Wrapping · PPF · Window Tinting",
    description:
      "Premium automotive styling and detailing in Slacks Creek QLD. 5.0★ Google rated.",
    type: "website",
    locale: "en_AU",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06070A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${sora.variable} ${inter.variable}`}>
      <body className="bg-ink-950 text-chrome-100 antialiased">
        {children}
      </body>
    </html>
  );
}
