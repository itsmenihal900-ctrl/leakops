import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revenue Leak Audit for Creators | Find Where You’re Losing Money",
  description:
    "A brutal revenue leak audit for creators to uncover where leads, sales, and money are slipping — and what to fix first. Clarity, not guesswork.",
};

export default function AuditPage() {
  return (
    <main
      style={{
        maxWidth: "860px",
        margin: "0 auto",
        padding: "4rem 1.5rem",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        lineHeight: 1.6,
      }}
    >
      {/* HERO */}
      <h1 style={{ fontSize: "2.6rem", fontWeight: 800, lineHeight: 1.2 }}>
        A brutal audit that finds where creators lose leads, sales, and money —
        <br />
        <span style={{ opacity: 0.7 }}>and how to fix it fast.</span>
      </h1>

      <p style={{ marginTop: "1.5rem", fontSize: "1.1rem", opacity: 0.85 }}>
        Most creators don’t have a traffic problem.
        <br />
        <strong>They have a leak problem.</strong>
      </p>

      {/* WHAT IT IS */}
      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 700 }}>
          What the Revenue Leak Audit looks at
        </h2>

        <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem" }}>
          <li>Lead capture & funnels</li>
          <li>Offers & pricing logic</li>
          <li>DM flows & conversion gaps</li>
          <li>Systems, tools, and handoffs</li>
        </ul>
      </section>

      {/* WHO IT IS FOR */}
      <section
        style={{
          marginTop: "3rem",
          padding: "2rem",
          border: "1px solid rgba(0,0,0,0.12)",
          borderRadius: "14px",
        }}
      >
        <h2 style={{ fontSize: "1.6rem", fontWeight: 700 }}>
          This is for you if:
        </h2>

        <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem" }}>
          <li>You already have an audience (10k+ followers)</li>
          <li>You’re making money, but it’s inconsistent</li>
          <li>You feel growth is slower than it should be</li>
          <li>You don’t know where you’re bleeding revenue</li>
        </ul>
      </section>

      {/* EXPECTATION SETTING */}
      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700 }}>
          Important expectations
        </h2>

        <p style={{ marginTop: "1rem", opacity: 0.85 }}>
          This is <strong>not</strong> a tool, course, or done-for-you service.
          <br />
          This is a <strong>diagnostic audit</strong>.
        </p>

        <p style={{ marginTop: "0.8rem", opacity: 0.85 }}>
          You’ll receive clear identification of leaks, prioritized fixes, and
          what to address first. Implementation is up to you or your team.
        </p>
      </section>

      {/* GUARANTEE */}
      <section
        style={{
          marginTop: "3rem",
          padding: "2rem",
          borderLeft: "4px solid #000",
          background: "rgba(0,0,0,0.03)",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700 }}>
          Clarity Guarantee
        </h2>

        <p style={{ marginTop: "0.8rem", opacity: 0.85 }}>
          If you don’t leave with a clearer understanding of where your revenue
          leaks are and what to fix first, you’ll get a refund.
        </p>
      </section>

      {/* PRICING + CTA */}
      <section
        style={{
          marginTop: "4rem",
          padding: "2.5rem",
          border: "2px solid #000",
          borderRadius: "18px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "1.9rem", fontWeight: 800 }}>
          Revenue Leak Audit
        </h2>

        <p style={{ marginTop: "0.4rem", opacity: 0.7 }}>
          One-time deep diagnostic
        </p>

        <div
          style={{
            marginTop: "1.5rem",
            fontSize: "2.5rem",
            fontWeight: 800,
          }}
        >
          $59
        </div>

        <p style={{ marginTop: "0.5rem", fontSize: "0.95rem", opacity: 0.7 }}>
          Paid upfront • Limited founding slots
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd9MStmB247Cx4-AlC0AdqaP0BoGGqX8_v3xVTkTcFMda_jgA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "2rem",
            padding: "1.2rem 3rem",
            backgroundColor: "#000",
            color: "#fff",
            fontWeight: 800,
            fontSize: "1.05rem",
            borderRadius: "14px",
            textDecoration: "none",
          }}
        >
          Apply for the Revenue Leak Audit
        </a>

        <p style={{ marginTop: "1rem", fontSize: "0.85rem", opacity: 0.6 }}>
          Not everyone is accepted. If it’s a good fit, you’ll receive next steps
          by email.
        </p>
      </section>
    </main>
  );
}
