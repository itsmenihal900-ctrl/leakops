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
  title: "CreatorOps Studio — Fix Hidden Revenue Leaks",
  description:
    "CreatorOps audits your creator business to uncover hidden leaks in leads, funnels, offers, DMs, and systems.",

  openGraph: {
    title: "You’re Losing Revenue Every Month — And You Don’t Know Where",
    description:
      "CreatorOps audits your creator business to uncover hidden leaks in leads, funnels, offers, DMs, and systems.",
    url: "https://creatorops.studio",
    siteName: "CreatorOps Studio",
    images: [
      {
        url: "https://creatorops.studio/og.png",
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
      "CreatorOps audits your creator business to uncover hidden leaks in leads, funnels, offers, DMs, and systems.",
    images: ["https://creatorops.studio/og.png"],
  },

  metadataBase: new URL("https://creatorops.studio"),
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
