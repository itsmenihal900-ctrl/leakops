import type { Metadata } from "next";
import Script from "next/script";
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

export const metadata: Metadata = {
  title: "CreatorOps Studio – Fix Hidden Revenue Leaks",
  description:
    "A brutal audit that finds where creators lose leads, sales, and money — and what to fix first.",
  metadataBase: new URL("https://creatorops.studio"),

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    
  },

  openGraph: {
    title: "You’re Losing Revenue Every Month — And You Don’t Know Where",
    description:
      "A brutal revenue leak audit for creators to uncover where leads, sales, and money are slipping — and what to fix first.",
    url: "https://creatorops.studio",
    siteName: "CreatorOps Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CreatorOps Revenue Leak Audit",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "You’re Losing Revenue Every Month",
    description:
      "A brutal audit that finds where creators lose leads, sales, and money.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RZKXDZ1947"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RZKXDZ1947');
        `}
      </Script>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


