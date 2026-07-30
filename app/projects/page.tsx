import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold tracking-tight text-slate-900">
        Projects
      </h1>

      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
        AI, machine learning, and data-driven applications I've worked on.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:border-slate-300 hover:shadow-md"
          >
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                {project.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-8 font-medium text-slate-900">
              View Project →
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}