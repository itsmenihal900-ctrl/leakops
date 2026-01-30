import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "CreatorOps Studio",
  description: "Revenue Leak Audit for Creators",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
