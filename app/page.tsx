import Script from "next/script";

export const metadata = {
  title: "Revenue Leak Audit for Creators | CreatorOps",
  description:
    "Discover where your leads, sales, and revenue are leaking. CreatorOps audits funnels, DMs, and offers to fix hidden conversion leaks.",
  openGraph: {
    title: "You're Losing Revenue Every Month — And You Don't Know Where.",
    description:
      "We audit your funnels, offers, and DMs to uncover hidden revenue leaks killing your creator business.",
    url: "https://creatorops.studio",
    siteName: "CreatorOps",
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
    title: "Revenue Leak Audit for Creators",
    description:
      "Find and fix hidden revenue leaks in your funnels, offers, and DMs.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Schema Markup */}
      <Script id="schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "CreatorOps Revenue Leak Audit",
          url: "https://creatorops.studio",
          description:
            "We help creators find and fix hidden revenue leaks in funnels, DMs, and offers.",
          areaServed: "Worldwide",
          serviceType: "Revenue Optimization Audit",
        })}
      </Script>

      <main className="bg-[#0f172a] text-white min-h-screen px-6 py-16">
        <div className="max-w-5xl mx-auto space-y-28">

          {/* HERO */}
          <section className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              You're Losing Revenue Every Month —
              <br /> And You Don’t Know Where.
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              CreatorOps audits your creator business to uncover hidden leaks in leads, funnels, offers, and DMs.
            </p>
            <a
              href="/audit"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Get a Revenue Leak Audit
            </a>
            <p className="text-sm text-gray-400">
              Built for creators already making money (10k+ audience)
            </p>
          </section>

          {/* LEAK PROBLEMS */}
          <section className="space-y-10">
            <h2 className="text-3xl font-bold text-center">
              Where Your Money Is Actually Leaking
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div className="bg-white/5 p-6 rounded-xl">Lead Leaks — Visitors watch, scroll, DM… then disappear.</div>
              <div className="bg-white/5 p-6 rounded-xl">Funnel Breaks — Friction and confusion kill conversions.</div>
              <div className="bg-white/5 p-6 rounded-xl">DM Monetization Gaps — Conversations happen, sales don’t.</div>
              <div className="bg-white/5 p-6 rounded-xl">Weak Offers — You’re selling, but not your real potential.</div>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section className="space-y-10">
            <h2 className="text-3xl font-bold text-center">
              How the Revenue Leak Audit Works
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-gray-300">
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="font-semibold mb-2">1. Diagnose</h3>
                We analyze your traffic, funnels, offers, and DMs.
              </div>
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="font-semibold mb-2">2. Reveal</h3>
                You get a breakdown of what’s broken or missing.
              </div>
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="font-semibold mb-2">3. Fix</h3>
                We give exact actions to plug leaks and increase revenue.
              </div>
            </div>
          </section>

          {/* CTA SECTION */}
          <section className="text-center space-y-6 bg-white/5 p-10 rounded-2xl">
            <h2 className="text-3xl font-bold">
              Fix the Leaks Before You Scale More Traffic
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Scaling broken systems burns money. This audit shows exactly what to fix first.
            </p>
            <a
              href="/audit"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Get a Revenue Leak Audit
            </a>
            <p className="text-sm text-yellow-400">
              Limited capacity — Only 5 audits per week
            </p>
          </section>

        </div>
      </main>
    </>
  );
}
