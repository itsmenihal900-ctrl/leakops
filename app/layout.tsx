"use client";

export default function Home() {
  return (
    <main className="bg-white text-black px-6">

      {/* LOGO */}
      <div className="flex justify-center pt-8">
        <img
          src="/logo.png"
          alt="CreatorOps Studio"
          width="160"
          height="40"
        />
      </div>

      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center pt-16 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Revenue Leak Audit for Creators Making $5K+/Month
        </h1>

        <p className="text-lg text-gray-700">
          Find exactly where sales, leads, and money are leaking — and what to fix first.
        </p>

        <p className="text-gray-600 max-w-2xl mx-auto">
          CreatorOps audits your funnels, offers, DMs, and systems to uncover hidden leaks
          silently killing your revenue — without guesswork or generic advice.
        </p>

        <a
          href="/audit"
          className="inline-block mt-6 rounded-md bg-black px-8 py-4 font-semibold text-white hover:opacity-90 transition"
        >
          Get My Revenue Leak Breakdown →
        </a>

        <p className="text-sm text-gray-500">
          For creators already monetizing through coaching, courses, communities, or digital products
        </p>
      </section>

      {/* TRUST */}
      <section className="max-w-4xl mx-auto text-center mt-16 text-gray-700">
        <p className="font-semibold mb-4">Used by creators monetizing through:</p>
        <p>
          Courses • Coaching & Consulting • Newsletters • Communities • Digital Products
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-4xl mx-auto mt-24 space-y-6">
        <h2 className="text-3xl font-bold text-center">
          How the Revenue Leak Audit Works
        </h2>

        <ol className="space-y-4 text-gray-700">
          <li>1. You answer a short audit questionnaire</li>
          <li>2. We map your full revenue path</li>
          <li>3. We identify the biggest leaks first</li>
          <li>4. You get a clear, prioritized fix plan</li>
        </ol>

        <p className="text-gray-600">
          No dashboards. No hype. Just clarity.
        </p>
      </section>

      {/* WHERE MONEY LEAKS */}
      <section className="max-w-4xl mx-auto mt-24 space-y-6">
        <h2 className="text-3xl font-bold text-center">
          Where Most Creators Actually Lose Money
        </h2>

        <ul className="space-y-2 text-gray-700">
          <li>• Confusing or underpriced offers</li>
          <li>• DMs that stall instead of close</li>
          <li>• Funnels that drop attention mid-way</li>
          <li>• No follow-up or systemized conversion</li>
          <li>• Scaling traffic into broken systems</li>
        </ul>

        <p className="text-gray-600">
          More content won’t fix this. Diagnosis will.
        </p>
      </section>

      {/* WHO IT'S FOR */}
      <section className="max-w-4xl mx-auto mt-24 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">This Audit Is For You If:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• You’re already making money</li>
            <li>• You have an active offer</li>
            <li>• You want clarity, not motivation</li>
            <li>• You’re tired of guessing</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">This Audit Is NOT For You If:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• You’re just starting out</li>
            <li>• You don’t have an offer yet</li>
            <li>• You want growth hacks</li>
            <li>• You expect traffic to fix everything</li>
          </ul>
        </div>
      </section>

      {/* OFFER RECAP */}
      <section className="max-w-4xl mx-auto mt-24 text-center space-y-6">
        <h2 className="text-3xl font-bold">
          Fix the Leaks Before You Scale
        </h2>

        <p className="text-gray-700">
          Scaling broken systems burns money faster.
          This audit shows you what to fix before you scale.
        </p>

        <a
          href="/audit"
          className="inline-block rounded-md bg-black px-8 py-4 font-semibold text-white hover:opacity-90 transition"
        >
          Get My Revenue Leak Breakdown →
        </a>
      </section>

      {/* AUTHORITY */}
      <section className="max-w-4xl mx-auto mt-24 text-center space-y-6 text-gray-700">
        <h2 className="text-2xl font-bold text-black">
          Why CreatorOps Exists
        </h2>

        <p>
          Most creators are taught how to grow — not how to operate.
          Revenue doesn’t scale from motivation.
          It scales when systems stop leaking.
        </p>

        <p>
          We don’t sell hype.
          We fix operations.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto mt-24 mb-32 text-center space-y-6">
        <h2 className="text-3xl font-bold">
          Stop Guessing Where the Money Went
        </h2>

        <p className="text-gray-700">
          If you’re already making money, the fastest growth
          comes from fixing what’s leaking.
        </p>

        <a
          href="/audit"
          className="inline-block rounded-md bg-black px-8 py-4 font-semibold text-white hover:opacity-90 transition"
        >
          Get My Revenue Leak Breakdown →
        </a>

        <p className="text-sm text-gray-500">
          Limited capacity to keep audits high-quality.
        </p>
      </section>

    </main>
  );
}


