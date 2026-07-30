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
    <main className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
        Experience
      </p>

      <h1 className="mt-3 text-5xl font-bold tracking-tight text-slate-900">
        {experience.company}
      </h1>

      <p className="mt-5 text-xl leading-8 text-slate-600">
        {experience.role}
      </p>

      <p className="mt-2 text-slate-500">
        {experience.team} • {experience.duration}
      </p>

      <div className="mt-16 space-y-12">
        <Section
          title="Overview"
          content={experience.overview}
        />

        <section className="border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Responsibilities
          </h2>

          <ul className="mt-6 list-disc space-y-3 pl-6 leading-7 text-slate-600">
            {experience.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Skills Applied
          </h2>

          <div className="mt-6 flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Featured Work
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {experience.featuredWork.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:border-slate-300 hover:shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5">
                  <p className="text-sm font-medium uppercase tracking-[0.15em] text-slate-500">
                    {item.type}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.summary}
                  </p>

                  <Link
                    href={item.link}
                    target="_blank"
                    className="mt-6 inline-block font-medium text-slate-900"
                  >
                    Read {item.type} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function Section({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <section className="border-t border-slate-200 pt-10">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>

      <p className="mt-5 whitespace-pre-line leading-8 text-slate-600">
        {content}
      </p>
    </section>
  );
}