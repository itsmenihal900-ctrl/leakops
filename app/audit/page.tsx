"use client";

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-white text-black flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-3xl font-bold">
          Revenue Leak Audit
        </h1>

        <p className="text-gray-600">
          Answer a few quick questions so we can identify where revenue is leaking
          in your current setup.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd9MStmB247Cx4-AlC0AdqaP0BoGGqX8_v3xVTkTcFMda_jgA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium"
        >
          Start the Audit →
        </a>

        <p className="text-sm text-gray-500">
          Takes ~2 minutes • Human-reviewed • No spam
        </p>
      </div>
    </main>
  );
}





