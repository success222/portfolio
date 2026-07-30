import Link from "next/link";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter(
  (project) => project.featured
);

export default function FeaturedProjects() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Projects
            </p>

            <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
              Featured Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="font-medium text-slate-700 transition hover:text-slate-900"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-slate-900">
                {project.title}
              </h3>

              <p className="mt-3 text-sm font-medium text-slate-500">
                {project.tagline}
              </p>

              <p className="mt-5 leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-8 font-semibold text-slate-900 transition-transform duration-300 group-hover:translate-x-1">
                View Project →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}