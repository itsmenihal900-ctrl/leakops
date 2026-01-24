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
    "A brutal revenue leak audit for creators to uncover where leads, funnels, offers, DMs, and systems are silently losing money.",
  metadataBase: new URL("https://creatorops.studio"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "You’re Losing Revenue Every Month — And You Don’t Know Where",
    description:
      "LeakOps audits creator businesses to uncover hidden revenue leaks and show exactly what to fix first.",
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
      "A brutal audit that shows creators where money is leaking — and how to fix it.",
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

      {/* ===== SCHEMA: GOOGLE TRUST ACCELERATION ===== */}
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CreatorOps Studio",
          url: "https://creatorops.studio",
          logo: "https://creatorops.studio/logo.png",
          sameAs: [],
        })}
      </Script>

      <Script
        id="schema-website"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "CreatorOps Studio",
          url: "https://creatorops.studio",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://creatorops.studio/?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </Script>

      <Script
        id="schema-service"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Revenue Leak Audit for Creators",
          provider: {
            "@type": "Organization",
            name: "CreatorOps Studio",
            url: "https://creatorops.studio",
          },
          areaServed: "Worldwide",
          description:
            "A system-level audit that identifies hidden revenue leaks in creator funnels, leads, offers, DMs, and backend systems.",
          serviceType: "Business Audit",
        })}
      </Script>
      {/* ===== END SCHEMA ===== */}

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
