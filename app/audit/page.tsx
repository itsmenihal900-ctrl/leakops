import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revenue Leak Audit for Creators | Find Where You’re Losing Money",
  description:
    "A brutal revenue leak audit for creators to uncover where leads, sales, and money are slipping — and what to fix first. Clarity, not guesswork.",
};

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 flex justify-center">
      <div className="max-w-3xl w-full">
        {/* HERO */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          A brutal audit that finds where creators lose leads, sales, and money —
          <span className="text-gray-400"> and how to fix it fast.</span>
        </h1>

        <p className="text-gray-400 text-lg mb-10">
          Most creators don’t have a traffic problem.  
          They have a <strong>leak problem</strong>.
        </p>

        {/* WHAT IT IS */}
        <section className="mb-12">
          <p className="text-lg mb-4">
            The <strong>Revenue Leak Audit</strong> is a deep diagnostic of your:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Lead capture & funnels</li>
            <li>Offers & pricing logic</li>
            <li>DM flows & conversion gaps</li>
            <li>Systems, tools, and handoffs</li>
          </ul>
        </section>

        {/* WHO IT'S FOR */}
        <section className="border border-gray-800 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4">This is for you if:</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• You already have an audience (10k+ followers)</li>
            <li>• You’re making some money, but it’s inconsistent</li>
            <li>• You feel growth is slower than it should be</li>
            <li>• You don’t know where you’re bleeding revenue</li>
          </ul>
        </section>

        {/* CTA */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd9MStmB247Cx4-AlC0AdqaP0BoGGqX8_v3xVTkTcFMda_jgA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-white text-black font-semibold py-4 rounded-xl text-lg hover:bg-gray-200 transition"
        >
          Apply for the Revenue Leak Audit
        </a>

        <p className="text-gray-500 text-sm text-center mt-4">
          Not everyone is accepted. If it’s a good fit, you’ll receive next steps by email.
        </p>
      </div>
    </main>
  );
}
