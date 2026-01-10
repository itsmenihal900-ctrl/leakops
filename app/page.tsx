'use client';

export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            You’re Losing Revenue Every Month —
            <br />
            And You Don’t Know Where.
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            LeakOps audits your creator business to uncover hidden leaks
            in leads, funnels, offers, DMs, and systems.
          </p>

          <a
            href="https://forms.gle/YOUR_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white font-semibold px-8 py-4 rounded-lg"
          >
            Get a Revenue Leak Audit
          </a>

          <p className="text-sm text-gray-500 mt-4">
            Built for creators already making money (10k+ followers)
          </p>

        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            How the Revenue Leak Audit Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-gray-100 p-6 rounded-xl text-left">
              <h3 className="text-xl font-semibold mb-2">1. Diagnose</h3>
              <p className="text-gray-600">
                We analyze your traffic, funnels, offers, and DMs to find
                exactly where money is leaking.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl text-left">
              <h3 className="text-xl font-semibold mb-2">2. Reveal</h3>
              <p className="text-gray-600">
                You get a clear breakdown of what’s broken, missing,
                or underperforming.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl text-left">
              <h3 className="text-xl font-semibold mb-2">3. Fix</h3>
              <p className="text-gray-600">
                Exact actions to plug leaks and increase revenue — fast.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FIX THE LEAKS ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Fix the Leaks Before You Scale More Traffic
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Scaling broken systems doesn’t grow revenue —
            it burns money faster. This audit shows you exactly
            what to fix before you scale.
          </p>

          <p className="text-yellow-600 mb-6">
            ⚠ Limited capacity: Only 5 audits per week
          </p>

          <a
            href="https://forms.gle/YOUR_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white font-semibold px-8 py-4 rounded-lg"
          >
            Get a Revenue Leak Audit
          </a>

        </div>
      </section>

      {/* ================= WHY LEAKOPS EXISTS ================= */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why LeakOps Exists
          </h2>

          <p className="text-gray-600 leading-relaxed">
            LeakOps was built after studying how creators with real
            audiences lose money — not because of traffic,
            but because of broken systems.
            <br /><br />
            Most creators don’t need more content.
            They need clarity on what’s leaking.
            <br /><br />
            This audit focuses on systems, not motivation.
          </p>

        </div>
      </section>

    </main>
  );
}
