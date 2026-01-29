export default function HomePage() {
  return (
    <main className="bg-slate-950 text-white">

      {/* HERO SECTION */}
      <section className="px-6 py-24 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          You’re Losing Revenue Every Month — <br />
          <span className="text-slate-300">And You Don’t Know Where.</span>
        </h1>

        <p className="mt-6 text-lg text-slate-400">
          LeakOps audits your creator business to uncover hidden leaks in leads,
          funnels, offers, DMs, and systems.
        </p>

        <a
          href="/audit"
          className="inline-block mt-8 bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-slate-200 transition"
        >
          Get a Revenue Leak Audit
        </a>

        <p className="mt-4 text-sm text-slate-500">
          Built for creators already making money (10k+ followers)
        </p>
      </section>

      {/* QUALIFICATION SECTION */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          This Is For You If...
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 p-6 rounded-xl">
            <ul className="space-y-3 text-slate-300">
              <li>✔ You already make money as a creator or coach</li>
              <li>✔ Your growth has plateaued</li>
              <li>✔ You know systems matter but haven’t fixed them</li>
              <li>✔ You want higher revenue without more content grind</li>
            </ul>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <ul className="space-y-3 text-slate-400">
              <li>❌ Not for beginners</li>
              <li>❌ Not for “post more content” advice</li>
              <li>❌ Not for theory — this is execution</li>
              <li>❌ Not if you aren’t ready to implement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FIX BEFORE SCALE */}
      <section className="px-6 py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Fix the Leaks Before You Scale More Traffic
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto mb-12">
            Scaling broken systems doesn’t grow revenue — it burns money faster.
            This audit shows you exactly what to fix before you scale.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">🔍 Full Leak Audit</h3>
              <p className="text-slate-400 text-sm">
                Deep review of funnels, DMs, offers, and traffic paths.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">🧠 Exact Fixes</h3>
              <p className="text-slate-400 text-sm">
                Clear, prioritized actions — what to fix first and why.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">⚡ Fast Execution</h3>
              <p className="text-slate-400 text-sm">
                No theory. Only execution steps you can apply immediately.
              </p>
            </div>
          </div>

          <p className="text-yellow-400 text-sm mt-8">
            ⚠ Limited capacity: Only 5 audits per week to maintain quality.
          </p>

          <a
            href="/audit"
            className="inline-block mt-6 bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-slate-200 transition"
          >
            Get a Revenue Leak Audit
          </a>
        </div>
      </section>

      {/* WHERE MONEY LEAKS */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Where Your Money Is Actually Leaking
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">📥 Lead Leaks</h3>
            <p className="text-slate-400 text-sm">
              Visitors watch, scroll, or DM — then disappear. No capture. No follow-up.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">🧩 Funnel Breaks</h3>
            <p className="text-slate-400 text-sm">
              Funnels exist, but friction and confusion kill conversions.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">💬 DM Monetization Gaps</h3>
            <p className="text-slate-400 text-sm">
              Conversations happen — sales don’t. No structure. No close.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">💸 Weak Offers</h3>
            <p className="text-slate-400 text-sm">
              You’re selling — but not your real potential.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            How the Revenue Leak Audit Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">1. Diagnose</h3>
              <p className="text-slate-400 text-sm">
                We analyze your traffic, offers, funnels, and DMs.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">2. Reveal</h3>
              <p className="text-slate-400 text-sm">
                You get a clear breakdown of what’s broken or missing.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">3. Fix</h3>
              <p className="text-slate-400 text-sm">
                Exact actions to plug leaks and increase revenue fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Find Where Your Revenue Is Leaking?
        </h2>

        <a
          href="/audit"
          className="inline-block bg-white text-black font-semibold px-10 py-4 rounded-lg hover:bg-slate-200 transition"
        >
          Get a Revenue Leak Audit
        </a>
      </section>

    </main>
  )
}
