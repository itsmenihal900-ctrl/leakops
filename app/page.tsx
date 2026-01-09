'use client';

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-3xl space-y-6">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            You’re Losing Revenue Every Month —<br />
            And You Don’t Know Where.
          </h1>

          <p className="text-gray-400 text-lg">
            LeakOps audits your creator business to uncover hidden leaks in
            leads, funnels, offers, DMs, and systems.
          </p>

          <button
            type="button"
            onClick={() =>
              window.open('https://forms.gle/UoUtjkZrhz5bbJ7f6', '_blank')
            }
            className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Get a Revenue Leak Audit
          </button>

          <p className="text-sm text-gray-500">
            Built for creators already making money (10k+ followers)
          </p>

        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center space-y-12">

          <h2 className="text-3xl md:text-4xl font-bold">
            How the Revenue Leak Audit Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-left">

            <div className="bg-zinc-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">1. Diagnose</h3>
              <p className="text-gray-400">
                We analyze your traffic, offers, funnels, and DMs to identify
                exactly where money is leaking.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">2. Reveal</h3>
              <p className="text-gray-400">
                You get a clear breakdown of what’s broken, missing, or
                underperforming.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">3. Fix</h3>
              <p className="text-gray-400">
                We give you exact actions to plug leaks and increase revenue —
                fast.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHERE MONEY IS LEAKING ================= */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center space-y-12">

          <h2 className="text-3xl md:text-4xl font-bold">
            Where Your Money Is Actually Leaking
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Most creators are making money — but losing a shocking amount due to
            invisible system gaps.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">

            <div className="bg-zinc-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">🚰 Lead Leaks</h3>
              <p className="text-gray-400">
                Visitors watch, scroll, or DM — then disappear. No capture. No
                follow-up.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">🧩 Funnel Breaks</h3>
              <p className="text-gray-400">
                Funnels exist, but friction and confusion kill conversions.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">💬 DM Monetization Gaps</h3>
              <p className="text-gray-400">
                Conversations happen — sales don’t. No structure. No close.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">📉 Weak Offers</h3>
              <p className="text-gray-400">
                You’re selling — but not at your real potential.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHO THIS IS FOR ================= */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center space-y-10">

          <h2 className="text-3xl md:text-4xl font-bold">
            This Is For You If…
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">

            <div className="bg-zinc-900 p-6 rounded-xl">
              <p className="text-gray-300">
                ✅ You already make money as a creator or coach  
                <br />✅ You feel growth has plateaued  
                <br />✅ You know systems matter but haven’t fixed them
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl">
              <p className="text-gray-300">
                ❌ Not for beginners  
                <br />❌ Not for “post more content” advice  
                <br />❌ Not for theory — this is execution
              </p>
            </div>

          </div>

        </div>
      </section>
{/* FINAL CTA SECTION */}
<section className="bg-black text-white py-24 px-6 border-t border-gray-800">
  <div className="max-w-4xl mx-auto text-center space-y-8">
    
    <h2 className="text-3xl md:text-4xl font-bold">
      Fix the Leaks Before You Scale More Traffic
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto">
      Scaling broken systems doesn’t grow revenue — it burns money faster.
      This audit shows you exactly what to fix before you scale.
    </p>

    <div className="grid md:grid-cols-3 gap-6 text-left mt-10">
      <div className="bg-gray-900 rounded-xl p-6">
        <h3 className="font-semibold mb-2">🔍 Full Leak Audit</h3>
        <p className="text-sm text-gray-400">
          Deep review of funnels, DMs, offers, and traffic paths.
        </p>
      </div>

      <div className="bg-gray-900 rounded-xl p-6">
        <h3 className="font-semibold mb-2">🧠 Exact Fixes</h3>
        <p className="text-sm text-gray-400">
          Clear, prioritized actions — what to fix first and why.
        </p>
      </div>

      <div className="bg-gray-900 rounded-xl p-6">
        <h3 className="font-semibold mb-2">⚡ Fast Execution</h3>
        <p className="text-sm text-gray-400">
          No theory. Only execution steps you can apply immediately.
        </p>
      </div>
    </div>

    <p className="text-sm text-gray-500 mt-8">
      ⚠️ Limited capacity: Only 5 audits per week to maintain quality.
    </p>

    <button
      type="button"
      onClick={() =>
        window.open("https://forms.gle/UoUtjkZrhz5bbJ7f6", "_blank")
      }
      className="inline-block mt-6 rounded-md bg-white px-8 py-4 font-semibold text-black hover:opacity-90 transition"
    >
      Show Me Where I'm Losing Money
    </button>
  </div>
</section>

    </main>
  );
}

