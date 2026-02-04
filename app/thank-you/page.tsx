export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-6">You're on the Priority Waitlist 🚀</h1>

        <p className="text-slate-300 text-lg mb-6">
          Audit spots for this week are full, but your application has been received.
        </p>

        <p className="text-slate-400 mb-8">
          We review submissions every week and invite selected creators when new spots open.
          If chosen, you'll receive an email with the next steps.
        </p>

        <a
          href="/"
          className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-slate-200 transition"
        >
          Back to Home
        </a>
      </div>
    </main>
  )
}

