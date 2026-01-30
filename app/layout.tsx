import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "CreatorOps Studio — Revenue Leak Audit for Creators",
  description:
    "Find exactly where leads, sales, and money are leaking — and what to fix first. A deep diagnostic audit for serious creators.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Find Where Your Creator Revenue Is Leaking",
    description:
      "A deep diagnostic audit that shows creators exactly where money is slipping — and what to fix first.",
    url: "https://creatorops.studio",
    siteName: "CreatorOps Studio",
    images: [
      {
        url: "https://creatorops.studio/og-image.png",
        width: 1200,
        height: 630,
        alt: "Revenue Leak Audit for Creators",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Revenue Leak Audit for Creators",
    description:
      "Find where your leads, sales, and money are leaking — and fix it fast.",
    images: ["https://creatorops.studio/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}

