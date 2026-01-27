import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CreatorOps Studio | Revenue Leak Audit for Creators",
  description:
    "A brutal revenue leak audit for creators to uncover where leads, sales, and money are slipping away.",
  metadataBase: new URL("https://creatorops.studio"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Revenue Leak Audit for Creators",
    description:
      "Find exactly where your creator business is leaking revenue — and how to fix it.",
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
      <body>{children}</body>
    </html>
  );
}
