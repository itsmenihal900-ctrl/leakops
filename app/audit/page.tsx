"use client";
import { useEffect, useState } from "react";

export default function AuditPage() {
  const [spotsLeft, setSpotsLeft] = useState<number | null>(null);

  useEffect(() => {
    async function fetchSpots() {
      try {
        const res = await fetch(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vRmZTx0V-83_HZtMp_AaPIAUz96XiC6HEcRYOdt1CbUjJQ4J_OnAHA0jzWN93cQ7Cgr69Wp-KnjQkw4/pub?output=csv"
        );
        const text = await res.text();
        const rows = text.split("\n");
        const secondRow = rows[1].split(",");
        const spots = parseInt(secondRow[18]);
        setSpotsLeft(spots);
      } catch (err) {
        console.error("Failed to fetch spots:", err);
      }
    }

    fetchSpots();
  }, []);

  return (
    <main className="relative text-white overflow-hidden bg-slate-950">

      {/* Background Gradient Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] bg-purple-600/20 blur-[140px] rounded-full" />
      </div>

      {/* HERO */}
      <section className="px-6 py-24 max-w-5xl mx-auto bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/60">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          A brutal audit that finds where creators lose leads, sales, and money — and how to fix it fast.
        </h1>

        <p className="mt-6 text-slate-300 text-lg">
          Most creators don’t have a traffic problem. <br />
          <span className="font-semibold text-white">They have a leak problem.</span>
        </p>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            What the Revenue Leak Audit looks at
          </h2>

          <ul className="space-y-3 text-slate-300">
            <li>• Lead capture & funnels</li>
            <li>• Offers & pricing logic</li>
            <li>• DM flows & conversion gaps</li>
            <li>• Systems, tools, and handoffs</li>
          </ul>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="px-6 py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-y border-slate-800/60">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">This is for you if:</h2>

          <ul className="space-y-3 text-slate-300 mb-12">
            <li>• You already have an audience (10k+ followers)</li>
            <li>• You’re making money, but it’s inconsistent</li>
            <li>• You feel growth is slower than it should be</li>
            <li>• You don’t know where you’re bleeding revenue</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Important expectations</h3>
          <p className="text-slate-400 mb-4">This is not a tool, course, or done-for-you service.</p>
          <p className="text-slate-400 mb-4">This is a diagnostic audit.</p>
          <p className="text-slate-400">
            You’ll receive clear identification of leaks, prioritized fixes, and what to address first.
          </p>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="px-6 py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Clarity Guarantee</h2>
          <p className="text-slate-300">
            If you don’t leave with a clearer understanding of where your revenue leaks are and what to fix first, you’ll get a refund.
          </p>
        </div>
      </section>

      {/* APPLICATION FORM (TALLY EMBED) */}
      <section className="px-6 pb-32">
        <div className="relative max-w-3xl mx-auto bg-slate-900/80 backdrop-blur border border-slate-700/60 rounded-2xl p-6 md:p-10 shadow-2xl">
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-xl -z-10"></div>

          <h2 className="text-3xl font-bold mb-2 text-center">Apply for the Revenue Leak Audit</h2>
          <p className="text-slate-400 mb-8 text-center">
            Fill this out so we can understand where your revenue leaks are happening. Serious creators only.
          </p>

          {spotsLeft !== null && spotsLeft > 0 ? (
            <>
              <iframe
                src="https://tally.so/r/yPYNQB"
                width="100%"
                height="900"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Revenue Leak Audit Application"
                className="rounded-xl"
              ></iframe>

              <p className="text-xs text-slate-500 mt-6 text-center">
                ⚠ We only take {spotsLeft} more audits this week to keep reviews high quality.
              </p>
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                🚫 This Week’s Audit Slots Are Full
              </h3>
              <p className="text-slate-400 mb-6">
                We only take 5 audits per week to maintain quality.  
                Join the waitlist and you’ll get priority when spots reopen.
              </p>
              <a
  href="https://tally.so/r/mWAITLIST"
  className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-slate-200 transition"
>
  Join the Waitlist
</a>

            </div>
          )}
        </div>
      </section>

    </main>
  );
}
