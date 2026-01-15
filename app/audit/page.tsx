"use client";

import { useEffect } from "react";

export default function AuditPage() {
  useEffect(() => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSd9MStmB247Cx4-AlC0AdqaP0BoGGqX8_v3xVTkTcFMda_jgA/viewform";
  }, []);

  return (
    <main className="min-h-screen bg-white text-black flex items-center justify-center px-6">
      <p className="text-gray-500 text-sm">
        Redirecting to Revenue Leak Audit…
      </p>
    </main>
  );
}






