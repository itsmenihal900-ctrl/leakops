export async function GET() {
  try {
    const res = await fetch("YOUR_CSV_LINK_HERE", { cache: "no-store" });
    const text = await res.text();

    const rows = text.split("\n").map(r => r.split(","));
    const headers = rows[0];

    const statusIndex = headers.indexOf("status");
    const countedIndex = headers.indexOf("approved_counted");

    const currentWeek = getWeekNumber(new Date());

    let approvedThisWeek = 0;

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (!row[statusIndex] || !row[countedIndex]) continue;

      if (row[statusIndex].trim() === "Approved" && row[countedIndex].trim() === "NO") {
        approvedThisWeek++;
      }
    }

    const spotsLeft = Math.max(5 - approvedThisWeek, 0);

    return Response.json({ spotsLeft });

  } catch (err) {
    return Response.json({ spotsLeft: 5 });
  }
}

function getWeekNumber(d: Date) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
}
