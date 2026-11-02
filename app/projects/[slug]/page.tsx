import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f4f2e9]">
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-20">
        <Link
          href="/projects"
          className="fixed left-[max(1.5rem,calc((100vw-64rem)/2+1.5rem))] top-24 z-40 inline-flex items-center gap-2 rounded-full border border-[#d7dbce] bg-[#fffef8]/95 px-4 py-2 text-sm font-medium text-[#687268] shadow-sm backdrop-blur-md transition hover:border-[#17231c] hover:text-[#17231c]"
        >
          ← All Projects
        </Link>

        <header className="border-b border-[#d7dbce] pb-12">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#687268]">
            Project Details
          </p>

          <div className="flex flex-wrap items-start justify-between gap-4">
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#17231c] md:text-4xl">
              {project.title}
            </h1>

            {"status" in project && project.status && (
              <span className="rounded-full border border-[#b9c9a5] bg-[#edf2e5] px-4 py-2 text-xs font-medium text-[#40583b]">
                {project.status}
              </span>
            )}
          </div>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#687268]">
            {project.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#17231c] px-6 py-3 text-sm font-semibold text-[#fffef8] transition hover:bg-[#52644f]"
              >
                GitHub Repository
                <span>↗</span>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#d7dbce] bg-[#fffef8] px-6 py-3 text-sm font-semibold text-[#17231c] transition hover:border-[#17231c]"
              >
                Live Demo
                <span>↗</span>
              </a>
            )}
          </div>
        </header>

        <section className="border-b border-[#d7dbce] py-10">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#17231c]">
              Technologies Used
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#d7dbce] bg-[#fffef8] px-4 py-2 text-sm font-medium text-[#52644f]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <div className="space-y-0">
          <Section
            number="01"
            title="Overview"
            content={project.overview}
          />

          <Section
            number="02"
            title="Approach"
            content={project.approach}
          />

          <Section
            number="03"
            title="Outcome"
            content={project.outcome}
          />
        </div>

        <div className="mt-16 border-t border-[#d7dbce] pt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#52644f] transition hover:text-[#17231c]"
          >
            ← Explore more projects
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