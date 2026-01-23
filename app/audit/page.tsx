import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revenue Leak Audit for Creators | Find Where You’re Losing Money",
  description:
    "A brutal revenue leak audit for creators to uncover where leads, sales, and money are slipping — and what to fix first. Clarity, not guesswork.",
};

export default function AuditPage() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 1.5rem" }}>
      {/* HERO */}
      <section>
        <h1 style={{ fontSize: "2.4rem", fontWeight: "700", lineHeight: "1.2" }}>
          A brutal audit that finds where creators lose leads, sales, and money —
          <span style={{ opacity: 0.7 }}> and how to fix it fast.</span>
        </h1>

        <p style={{ marginTop: "1.5rem", fontSize: "1.2rem", opacity: 0.85 }}>
          Most creators don’t have a traffic problem.
          <br />
          They have a <strong>leak problem</strong>.
        </p>
      </section>

      {/* WHAT IT IS */}
      <section style={{ marginTop: "3rem" }}>
        <p style={{ fontSize: "1.15rem", lineHeight: "1.7" }}>
          The <strong>Revenue Leak Audit</strong> is a deep diagnostic of your:
        </p>

        <ul style={{ marginTop: "1rem", lineHeight: "1.8" }}>
          <li>• Lead capture & funnels</li>
          <li>• Offers & pricing logic</li>
          <li>• DM flows & conversion gaps</li>
          <li>• Systems, tools, and handoffs</li>
        </ul>
      </section>

      {/* WHO IT IS FOR */}
      <section
        style={{
          marginTop: "3rem",
          padding: "2rem",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ fontSize: "1.6rem", fontWeight: "600" }}>
          This is for you if:
        </h2>

        <ul style={{ marginTop: "1rem", lineHeight: "1.8" }}>
          <li>• You already have an audience (10k+ followers)</li>
          <li>• You’re making some money, but it’s inconsistent</li>
          <li>• Growth feels slower than it should</li>
          <li>• You don’t know where you’re bleeding revenue</li>
        </ul>
      </section>

      {/* PRICING */}
      <section style={{ marginTop: "3.5rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "600" }}>
          Pricing
        </h2>

        <p style={{ marginTop: "1rem", fontSize: "1.25rem" }}>
          <strong>Revenue Leak Audit — ₹4,999 (Founding Price)</strong>
        </p>

        <ul style={{ marginTop: "1rem", lineHeight: "1.8" }}>
          <li>• Deep review of your monetization & funnels</li>
          <li>• Identify where leads, sales, or money are leaking</li>
          <li>• Clear priority fixes (what to do first)</li>
          <li>• Private Loom video walkthrough (20–30 mins)</li>
        </ul>
      </section>

      {/* GUARANTEE */}
      <section style={{ marginTop: "2.5rem" }}>
        <h3 style={{ fontSize: "1.4rem", fontWeight: "600" }}>
          Clarity Guarantee
        </h3>

        <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>
          If you don’t walk away with at least{" "}
          <strong>3 clear, actionable revenue leaks and next steps</strong>,
          you’ll get a <strong>full refund</strong>. No questions asked.
        </p>
      </section>

      {/* EXPECTATION */}
      <p
        style={{
          marginTop: "2rem",
          fontSize: "0.95rem",
          opacity: 0.75,
        }}
      >
        This audit focuses on diagnosis and prioritization.
        Implementation is not included.
      </p>

      {/* CTA */}
      <section style={{ marginTop: "3rem" }}>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd9MStmB247Cx4-AlC0AdqaP0BoGGqX8_v3xVTkTcFMda_jgA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "1rem 2rem",
            backgroundColor: "#ffffff",
            color: "#000000",
            fontWeight: "600",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Apply for the Revenue Leak Audit
        </a>

        <p style={{ marginTop: "0.75rem", fontSize: "0.9rem", opacity: 0.7 }}>
          Not everyone is accepted. If it’s a good fit, you’ll receive next
          steps by email.
        </p>
      </section>
    </main>
  );
}
