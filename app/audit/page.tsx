export default function AuditPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-4xl font-bold">
          Request a Revenue Leak Audit
        </h1>

        <p className="text-gray-400">
          Find exactly where money is leaking before you scale traffic.
        </p>

        <a
          href="https://forms.gle/UoUtjkZrhz5bbJ7f6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-white px-8 py-4 font-semibold text-black hover:opacity-90 transition"
        >
          Request Audit
        </a>
      </div>
    </main>
  );
}

