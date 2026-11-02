import { notFound } from "next/navigation";
import Link from "next/link";
import { experiences } from "@/data/experience";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ExperiencePage({ params }: Props) {
  const { slug } = await params;

  const experience = experiences.find((exp) => exp.slug === slug);

  if (!experience) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f4f2e9]">
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-20">
        <Link
          href="/experience"
          className="fixed left-[max(1.5rem,calc((100vw-64rem)/2+1.5rem))] top-24 z-40 inline-flex items-center gap-2 rounded-full border border-[#d7dbce] bg-[#fffef8]/95 px-4 py-2 text-sm font-medium text-[#687268] shadow-sm backdrop-blur-md transition hover:border-[#17231c] hover:text-[#17231c]"
        >
          ← All Experience
        </Link>

        <header className="border-b border-[#d7dbce] pb-12">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#687268]">
            Professional Experience
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#17231c] md:text-4xl">
            {experience.company}
          </h1>

          <p className="mt-6 text-xl font-semibold text-[#52644f] md:text-1xl">
            {experience.role}
          </p>

          {experience.team && (
            <p className="mt-3 text-sm text-[#687268]">
              {experience.team}
            </p>
          )}

          <p className="mt-2 font-mono text-xs tracking-wide text-[#9a9f91]">
            {experience.duration}
          </p>
        </header>

        <section className="border-b border-[#d7dbce] py-10">
          <h2 className="mb-6 text-xl font-bold text-[#17231c]">
            Skills Applied
          </h2>

          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#d7dbce] bg-[#fffef8] px-4 py-2 text-sm font-medium text-[#52644f]"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <div>
          <Section
            number="01"
            title="Overview"
            content={experience.overview}
          />

          <section className="grid gap-5 border-b border-[#d7dbce] py-12 md:grid-cols-[100px_1fr] md:gap-10">
            <span className="font-mono text-xs tracking-widest text-[#9a9f91]">
              02
            </span>

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#17231c] md:text-3xl">
                Responsibilities
              </h2>

              <ul className="mt-6 space-y-4">
                {experience.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-base leading-8 text-[#687268]"
                  >
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d5f36a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {experience.featuredWork.length > 0 && (
            <section className="border-b border-[#d7dbce] py-12">
              <div className="mb-8 grid gap-5 md:grid-cols-[100px_1fr] md:gap-10">
                <span className="font-mono text-xs tracking-widest text-[#9a9f91]">
                  03
                </span>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-[#17231c] md:text-3xl">
                    Featured Work
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-[#687268]">
                    Selected projects and contributions from this experience.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {experience.featuredWork.map((item) => (
                  <article
                    key={item.title}
                    className="overflow-hidden rounded-2xl border border-[#d7dbce] bg-[#fffef8] transition-all duration-300 hover:-translate-y-1 hover:border-[#17231c]/40 hover:shadow-lg hover:shadow-[#17231c]/5"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-48 w-full object-cover"
                      />
                    )}

                    <div className="p-6">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#687268]">
                          {item.type}
                        </p>

                        {"status" in item && item.status && (
                          <span className="rounded-full border border-[#d7dbce] bg-[#f4f2e9] px-3 py-1 text-xs font-medium text-[#52644f]">
                            {item.status}
                          </span>
                        )}
                      </div>

                      <h3 className="mt-4 text-xl font-bold tracking-tight text-[#17231c]">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[#687268]">
                        {item.summary}
                      </p>

                      {item.link && (
                        <Link
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#52644f] transition hover:text-[#17231c]"
                        >
                          Read {item.type}
                          <span>↗</span>
                        </Link>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="mt-12">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#52644f] transition hover:text-[#17231c]"
          >
            ← Explore more experience
          </Link>
        </div>
      </div>
    </main>
  );
}

function Section({
  number,
  title,
  content,
}: {
  number: string;
  title: string;
  content: string;
}) {
  if (!content?.trim()) return null;

  return (
    <section className="grid gap-5 border-b border-[#d7dbce] py-12 md:grid-cols-[100px_1fr] md:gap-10">
      <span className="font-mono text-xs tracking-widest text-[#9a9f91]">
        {number}
      </span>

      <div>
        <h2 className="text-2xl font-bold tracking-tight text-[#17231c] md:text-3xl">
          {title}
        </h2>

        <p className="mt-5 max-w-3xl whitespace-pre-line text-base leading-8 text-[#687268]">
          {content}
        </p>
      </div>
    </section>
  );
}