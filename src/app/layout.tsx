import type { Metadata } from "next";
import { Newsreader, Albert_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { LanguageProvider } from "@/lib/language";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://liva-dental.vercel.app"),
  title: "Liva Dental - Gentle hands, honest prices",
  description: "A dental clinic in South Austin, Texas. Clear prices before any work starts, and extra time for nervous patients.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    title: "Liva Dental - Gentle hands, honest prices",
    description: "A dental clinic in South Austin, Texas. Clear prices before any work starts, and extra time for nervous patients.",
    siteName: "Liva Dental",
    images: [{ url: "/brand/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${newsreader.variable} ${albertSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-ink">
        <LanguageProvider>
          <SmoothScroll />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
