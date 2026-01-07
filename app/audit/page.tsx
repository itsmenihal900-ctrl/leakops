export default function AuditPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Revenue Leak Audit
        </h1>

        <p className="text-gray-300 mb-8">
          Fill this form. We’ll identify where you’re silently losing money.
        </p>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded bg-neutral-900 border border-neutral-700"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded bg-neutral-900 border border-neutral-700"
          />

          <input
            type="text"
            placeholder="Instagram Username"
            className="w-full px-4 py-3 rounded bg-neutral-900 border border-neutral-700"
          />

          <select className="w-full px-4 py-3 rounded bg-neutral-900 border border-neutral-700">
            <option>Monthly Revenue</option>
            <option>$1k – $5k</option>
            <option>$5k – $10k</option>
            <option>$10k – $50k</option>
            <option>$50k+</option>
          </select>

          <a
  href="https://forms.gle/6dvQC5dKS2cyJcqq7"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full text-center bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition"
>
  Request Audit
</a>



        </form>
      </div>
    </main>
  );
}
