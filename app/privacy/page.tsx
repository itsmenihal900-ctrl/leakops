export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 px-6 py-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

        <p>
          CreatorOps Studio respects your privacy. This policy explains how we collect, use,
          and protect your information when you use our website and services.
        </p>

        <h2 className="text-xl font-semibold text-sky-400">Information We Collect</h2>
        <p>
          When you apply for a Revenue Leak Audit, we may collect your name, email address,
          social media profiles, business details, and revenue-related information that you
          voluntarily provide.
        </p>

        <h2 className="text-xl font-semibold text-sky-400">How We Use Your Information</h2>
        <p>
          Your information is used only to analyze your monetization systems and deliver your
          audit. We may also use your email to send updates related to your application or
          service.
        </p>

        <h2 className="text-xl font-semibold text-sky-400">Data Protection</h2>
        <p>
          We do not sell or share your personal information with third parties. Your data is
          kept confidential and used strictly for providing our services.
        </p>

        <h2 className="text-xl font-semibold text-sky-400">Third-Party Tools</h2>
        <p>
          We may use trusted third-party tools (such as analytics or form providers) to
          operate our website. These tools may collect limited technical data like browser
          type or device information.
        </p>

        <h2 className="text-xl font-semibold text-sky-400">Your Consent</h2>
        <p>
          By using our website and submitting your information, you consent to this Privacy
          Policy.
        </p>

        <h2 className="text-xl font-semibold text-sky-400">Updates</h2>
        <p>
          We may update this Privacy Policy from time to time. Continued use of our website
          means you accept any changes.
        </p>

        <p className="text-sm text-slate-400 pt-6">
          Last updated: {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}
