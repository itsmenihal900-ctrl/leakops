import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "CreatorOps Studio — Revenue Leak Audit for Creators",
  description:
    "Find exactly where leads, sales, and money are leaking — and what to fix first.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
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
      <body className="bg-slate-950 text-white">

        {/* 🔝 Top Navigation */}
        <header className="w-full border-b border-slate-800">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* Brand */}
            <a href="/" className="text-lg font-semibold tracking-wide">
              CreatorOps Studio
            </a>

            {/* Right Side Links */}
            <nav className="flex gap-6 text-sm text-slate-400">
              <a href="/faq" className="hover:text-white transition">FAQ</a>
              <a href="/privacy" className="hover:text-white transition">Privacy</a>
              <a href="/terms" className="hover:text-white transition">Terms</a>
            </nav>

          </div>
        </header>

        {/* Page Content */}
        {children}

      </body>
    </html>
  );
}



