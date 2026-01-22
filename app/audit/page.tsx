export const metadata = {
  title: "Revenue Leak Audit for Creators | CreatorOps Studio",
  description:
    "A brutal audit that finds where creators lose leads, sales, and money — and how to fix it fast.",
};

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Hero */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          A brutal audit that finds where creators lose leads, sales, and money —
          <span className="block mt-2 text-gray-300">
            and how to fix it fast.
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-400">
          Most creators don’t have a traffic problem.
          <br />
          They have a <strong>leak problem</strong>.
        </p>

        {/* What this is */}
        <div className="mt-10 space-y-4 text-gray-300">
          <p>
            The <strong>Revenue Leak Audit</strong> is a deep diagnostic of your:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Lead capture & funnels</li>
            <li>Offers & pricing logic</li>
            <li>DM flows & conversion gaps</li>
            <li>Systems, tools, and handoffs</li>
          </ul>
        </div>

        {/* Who it's for */}
        <div className="mt-12 border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-3">This is for you if:</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• You already have an audience (10k+ followers)</li>
            <li>• You’re making some money, but it’s inconsistent</li>
            <li>• You feel growth is slower than it should be</li>
            <li>• You don’t know where you’re bleeding revenue</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-14">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd9MStmB247Cx4-AlC0AdqaP0BoGGqX8_v3xVTkTcFMda_jgA/viewform"

            target="_blank"
            className="inline-block w-full md:w-auto text-center bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition"
          >
            Apply for the Revenue Leak Audit
          </a>

          <p className="mt-4 text-sm text-gray-500">
            Not everyone is accepted. If it’s a good fit, you’ll receive next
            steps by email.
          </p>
        </div>
      </div>
    </main>
  );
}








