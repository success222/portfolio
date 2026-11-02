import Link from "next/link";

const researchPapers = [
  {
    id: 1,
    title:
      "Automated Detection of Pulmonary Tuberculosis from Chest X-Ray Images Using Artificial Intelligence: A Systematic Review",
    author: "Success Sotonwa",
    role: "Principal Investigator",
    status: "Published",
    journal: "International Journal of Computer Science and Security (IJCSS)",
    details: "Volume 20, Issue 4 · 2026",
    publicationId: "IJCSS-1778",
    url: "https://www.cscjournals.org/library/manuscriptinfo.php?mc=IJCSS-1778",
  },
  {
    id: 2,
    title:
      "Comparative Evaluation of Deep Learning Models for Pulmonary Tuberculosis Detection Using Nigerian Chest X-ray Images",
    author: "Success Sotonwa",
    role: "Principal Investigator",
    status: "Under review",
  },
];

export default function ResearchPage() {
  return (
    <main className="relative mx-auto min-h-screen max-w-5xl px-6 py-20">
      <Link
        href="/"
        className="fixed left-[max(1.5rem,calc((100vw-64rem)/2+1.5rem))] top-24 z-40 inline-flex items-center gap-2 rounded-full border border-[#d7dbce] bg-[#fffef8]/95 px-4 py-2 text-sm font-medium text-[#687268] shadow-sm backdrop-blur-md transition hover:border-[#17231c] hover:text-[#17231c]"
      >
        ← Back to Home
      </Link>

      <div className="mb-14 mt-12">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#687268]">
          Research & Publications
        </p>
      </div>

      <div className="space-y-6">
        {researchPapers.map((paper, index) => (
          <article
            key={paper.id}
            className="rounded-3xl border border-[#d7dbce] bg-[#fffef8] p-7 transition-all duration-300 hover:border-[#17231c]/40 hover:shadow-xl hover:shadow-[#17231c]/10 md:p-9"
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <span className="font-mono text-xs text-[#9a9f91]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className={`rounded-full border px-3 py-1 text-xs font-medium ${
                  paper.status === "Published"
                    ? "border-[#b9c9a5] bg-[#edf2e5] text-[#40583b]"
                    : "border-[#e4d7b9] bg-[#f7f0df] text-[#80652e]"
                }`}
              >
                {paper.status}
              </span>
            </div>

            <h2 className="text-2xl font-bold leading-snug tracking-tight text-[#17231c] md:text-3xl">
              {paper.title}
            </h2>

            <div className="mt-7 space-y-2 text-sm text-[#687268]">
              <p>
                <span className="font-semibold text-[#17231c]">Author:</span>{" "}
                {paper.author}
              </p>
              <p>
                <span className="font-semibold text-[#17231c]">Role:</span>{" "}
                {paper.role}
              </p>
            </div>

            {"journal" in paper && (
              <div className="mt-7 border-t border-[#e5e7dc] pt-6">
                <p className="font-semibold text-[#17231c]">
                  {paper.journal}
                </p>

                <p className="mt-2 text-sm text-[#687268]">
                  {paper.details}
                </p>

                <p className="mt-2 text-sm text-[#687268]">
                  <span className="font-semibold text-[#17231c]">
                    Publication ID:
                  </span>{" "}
                  {paper.publicationId}
                </p>

                <Link
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#52644f] transition hover:text-[#17231c]"
                >
                  View publication
                  <span>↗</span>
                </Link>
              </div>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}