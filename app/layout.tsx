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

export const metadata: Metadata = {
  title: "CreatorOps Studio – Fix Hidden Revenue Leaks",

  description:
    "A brutal audit that finds where creators lose leads, sales, and money — and how to fix it fast.",

  metadataBase: new URL("https://creatorops.studio"),

  openGraph: {
    title: "You’re Losing Revenue Every Month — And You Don’t Know Where.",
    description:
      "A brutal audit that finds where creators lose leads, sales, and money — and how to fix it fast.",
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
      "A brutal audit that finds where creators lose leads, sales, and money — and how to fix it fast.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


