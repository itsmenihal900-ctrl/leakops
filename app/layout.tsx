import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "LeakOps — Revenue Leak Audit for Creators",
  description:
    "Find exactly where leads, sales, and money are leaking — and what to fix first. A brutal revenue leak audit for serious creators.",
  
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "LeakOps — Find Where Your Revenue Is Leaking",
    description:
      "A brutal audit that shows creators exactly where money is leaking — and how to fix it fast.",
    url: "https://creatorops.studio",
    siteName: "LeakOps",
    images: [
      {
        url: "https://creatorops.studio/og-image.png",
        width: 1200,
        height: 630,
        alt: "LeakOps Revenue Leak Audit",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LeakOps — Revenue Leak Audit",
    description:
      "Discover where your creator business is leaking revenue and what to fix first.",
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
