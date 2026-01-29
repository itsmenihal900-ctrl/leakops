import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "LeakOps",
  description: "Revenue Leak Audit",
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
