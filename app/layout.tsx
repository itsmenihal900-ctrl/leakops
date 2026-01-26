import "./globals.css";

import type { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "CreatorOps Studio – Revenue Leak Audit for Creators",
  description:
    "A brutal revenue leak audit for creators to uncover where leads, sales, and money are silently leaking — and what to fix first.",
  metadataBase: new URL("https://creatorops.studio"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Revenue Leak Audit for Creators",
    description:
      "Find exactly where your creator business is leaking revenue — and what to fix first.",
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
      <Script id="ga" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RZKXDZ1947');
        `}
      </Script>

      {/* SCHEMA */}
      <Script
        id="schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CreatorOps Studio",
          url: "https://creatorops.studio",
          logo: "https://creatorops.studio/logo.png",
          description:
            "CreatorOps Studio provides revenue leak audits for creators to identify where money is lost and what to fix first.",
        })}
      </Script>

      <body className="bg-slate-950 text-white antialiased">
  {children}
</body>

    </html>
  );
}
