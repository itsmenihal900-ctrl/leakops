export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 px-6 py-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>

        <p>
          By purchasing or applying for services from CreatorOps Studio, you agree
          to the following terms and conditions.
        </p>

        <h2 className="text-xl font-semibold text-sky-400">Service Nature</h2>
        <p>
          The Revenue Leak Audit is a strategic analysis service. We provide insights,
          recommendations, and observations about your monetization systems. We do not
          implement changes on your behalf.
        </p>

        <h2 className="text-xl font-semibold text-sky-400">No Guarantees</h2>
        <p>
          We do not guarantee specific revenue results. Your outcomes depend on how
          effectively you implement the recommendations provided in the audit.
        </p>

        <h2 className="text-xl font-semibold text-sky-400">Payments & Refunds</h2>
        <p>
          All payments are final. Due to the digital and consulting nature of the
          service, refunds are not provided once the audit process has started.
        </p>

        <h2 className="text-xl font-semibold text-sky-400">Client Responsibility</h2>
        <p>
          You are responsible for the accuracy of the information you provide. CreatorOps
          Studio is not liable for decisions made based on incomplete or incorrect data.
        </p>

        <h2 className="text-xl font-semibold text-sky-400">Limitation of Liability</h2>
        <p>
          CreatorOps Studio is not responsible for business losses, revenue decline,
          or performance issues resulting from the use or misuse of our recommendations.
        </p>

        <h2 className="text-xl font-semibold text-sky-400">Updates</h2>
        <p>
          We may update these terms at any time. Continued use of our services indicates
          acceptance of the latest version.
        </p>

        <p className="text-sm text-slate-400 pt-6">
          Last updated: {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}
