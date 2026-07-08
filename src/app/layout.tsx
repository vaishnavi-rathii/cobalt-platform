import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cobalt — Engineering Simulation Platform",
    template: "%s | Cobalt",
  },
  description:
    "Model, simulate, and validate complex systems fast. Cobalt gives engineering teams the power of a full simulation lab in one platform.",
  keywords: [
    "engineering simulation",
    "systems engineering software",
    "SaaS platform",
    "component simulation",
    "power systems",
  ],
  openGraph: {
    title: "Cobalt — Engineering Simulation Platform",
    description:
      "Model, simulate, and validate complex systems fast — before a single prototype gets built.",
    url: siteUrl,
    siteName: "Cobalt",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cobalt — Engineering Simulation Platform",
    description:
      "Model, simulate, and validate complex systems fast — before a single prototype gets built.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-foreground">
        {children}
      </body>
    </html>
  );
}
