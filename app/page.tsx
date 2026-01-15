export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl">
          You’re Losing Revenue Every Month — <br /> And You Don’t Know Where.
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          LeakOps audits your creator business to uncover hidden leaks in leads,
          funnels, offers, DMs, and systems.
        </p>

        <a
          href="/audit"
          className="mt-8 inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium"
        >
          Get a Revenue Leak Audit
        </a>

        <p className="mt-4 text-sm text-gray-400">
          Built for creators already making money (10k+ followers)
        </p>
      </section>

      {/* WHERE MONEY IS LEAKING */}
      <section className="py-24 px-6 bg-[#0f172a]">
        <h2 className="text-3xl font-semibold text-center">
          Where Your Money Is Actually Leaking
        </h2>

        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          Most creators are making money — but losing a shocking amount due to
          invisible system gaps.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="bg-[#111827] p-6 rounded-lg">
            <h3 className="font-semibold">Lead Leaks</h3>
            <p className="text-gray-400 mt-2">
              Visitors watch, scroll, or DM — then disappear. No capture. No follow-up.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-lg">
            <h3 className="font-semibold">Funnel Breaks</h3>
            <p className="text-gray-400 mt-2">
              Funnels exist, but friction and confusion kill conversions.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-lg">
            <h3 className="font-semibold">DM Monetization Gaps</h3>
            <p className="text-gray-400 mt-2">
              Conversations happen — sales don’t. No structure. No close.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-lg">
            <h3 className="font-semibold">Weak Offers</h3>
            <p className="text-gray-400 mt-2">
              You’re selling — but not at your real potential.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-black">
        <h2 className="text-3xl font-semibold text-center">
          How the Revenue Leak Audit Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          <div className="bg-[#111827] p-6 rounded-lg">
            <h3 className="font-semibold">1. Diagnose</h3>
            <p className="text-gray-400 mt-2">
              We analyze your traffic, offers, funnels, and DMs to find leaks.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-lg">
            <h3 className="font-semibold">2. Reveal</h3>
            <p className="text-gray-400 mt-2">
              You get a clear breakdown of what’s broken or underperforming.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-lg">
            <h3 className="font-semibold">3. Fix</h3>
            <p className="text-gray-400 mt-2">
              Exact actions to plug leaks and increase revenue — fast.
            </p>
          </div>
        </div>
      </section>

      {/* FOR / NOT FOR */}
      <section className="py-24 px-6 bg-[#0f172a]">
        <h2 className="text-3xl font-semibold text-center">
          This Is For You If…
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="bg-[#111827] p-6 rounded-lg">
            <ul className="space-y-2 text-gray-300">
              <li>✔ You already make money as a creator or coach</li>
              <li>✔ Your growth has plateaued</li>
              <li>✔ You know systems matter but haven’t fixed them</li>
            </ul>
          </div>

          <div className="bg-[#111827] p-6 rounded-lg">
            <ul className="space-y-2 text-gray-300">
              <li>✖ Not for beginners</li>
              <li>✖ Not for “post more content” advice</li>
              <li>✖ Not theory — this is execution</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center bg-black">
        <h2 className="text-3xl font-semibold">
          Fix the Leaks Before You Scale More Traffic
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Scaling broken systems doesn’t grow revenue — it burns money faster.
        </p>

        <a
          href="/audit"
          className="mt-8 inline-block bg-white text-black px-8 py-4 rounded-lg text-lg"
        >
          Get a Revenue Leak Audit
        </a>

        <p className="mt-4 text-sm text-gray-500">
          Limited capacity — only a few audits per week.
        </p>
      </section>

    </main>
  );
}
