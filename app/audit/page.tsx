"use client";

export const metadata = {
  title: "Revenue Leak Audit for Creators – Find What’s Costing You Sales",
  description:
    "A paid revenue leak audit that reveals exactly where creators lose leads, sales, and money — and how to fix it fast.",
};

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-3xl mx-auto space-y-12">

        {/* HERO */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Revenue Leak Audit
          </h1>

          <p className="text-lg text-gray-600">
            A paid diagnostic that shows exactly where your creator business is
            leaking leads, sales, and money — and what to fix first.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSd9MStmB247Cx4-AlC0AdqaP0BoGGqX8_v3xVTkTcFMda_jgA/viewform",
                "_blank"
              )
            }
            className="mt-6 inline-block rounded-md bg-black px-8 py-4 text-white font-semibold hover:opacity-90 transition"
          >
            Start the Audit
          </button>
        </section>

        {/* WHAT YOU GET */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">
            What This Audit Reveals
          </h2>

          <ul className="grid gap-4 md:grid-cols-2 text-gray-700">
            <li>• Where leads drop before converting</li>
            <li>• Offer or pricing mistakes killing sales</li>
            <li>• DM & funnel friction points</li>
            <li>• Traffic that isn’t monetized properly</li>
          </ul>
        </section>

        {/* WHO IT'S FOR */}
        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-3">This is for you if:</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• You already have an audience</li>
              <li>• You’re making money but stuck</li>
              <li>• You want clarity, not motivation</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">This is NOT for you if:</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• You want free advice</li>
              <li>• You haven’t started yet</li>
              <li>• You’re not ready to act</li>
            </ul>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="text-center pt-12 border-t">
          <p className="text-gray-600 mb-4">
            This audit is limited to serious creators only.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSd9MStmB247Cx4-AlC0AdqaP0BoGGqX8_v3xVTkTcFMda_jgA/viewform",
                "_blank"
              )
            }
            className="inline-block rounded-md bg-black px-8 py-4 text-white font-semibold hover:opacity-90 transition"
          >
            Get Your Revenue Leak Audit
          </button>
        </section>

      </div>
    </main>
  );
}







