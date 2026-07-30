import { notFound } from "next/navigation";
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
    <main className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
        Project
      </p>

      <h1 className="mt-3 text-5xl font-bold tracking-tight text-slate-900">
        {project.title}
      </h1>

      <p className="mt-5 text-xl leading-8 text-slate-600">
        {project.tagline}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-slate-300 px-5 py-2 font-medium text-slate-700 transition hover:bg-slate-100"
        >
          GitHub Repository
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-slate-900 px-5 py-2 font-medium text-white transition hover:bg-slate-800"
          >
            Live Demo
          </a>
        )}
      </div>

      <div className="mt-16 space-y-12">
        <Section title="Overview" content={project.overview} />

        <Section title="Approach" content={project.approach} />

        <Section title="Outcome" content={project.outcome} />
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
  if (!content.trim()) return null;

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