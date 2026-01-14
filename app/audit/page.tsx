"use client";

import { useEffect } from "react";

export default function AuditPage() {
  useEffect(() => {
    window.location.replace(
      "https://docs.google.com/forms/d/e/1FAIpQLSd9MStmB247Cx4-AlC0AdqaP0BoGGqX8_v3xVTkTcFMda_jgA/viewform"
    );
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black">
      <p className="text-gray-600 text-lg">
        Redirecting to Revenue Leak Audit…
      </p>
    </main>
  );
}




