export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        LeakOps
      </h1>

      <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
        We identify where creators are silently losing money —
        leads, conversations, offers, and systems.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        
        {/* PRIMARY CTA */}
        <a
          href="https://www.instagram.com/creatorops_studio/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition cursor-pointer"
        >
          Get a Revenue Leak Audit
        </a>

        {/* SECONDARY CTA */}
        <a
          href="#how-it-works"
          className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition cursor-pointer"
        >
          See How It Works
        </a>

      </div>

      <p className="text-sm text-gray-400 mt-8">
        Built for creators already making money — not beginners.
      </p>

    </main>
  );
}
