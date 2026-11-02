import Link from "next/link";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter(
  (project) => project.featured
);

export default function FeaturedProjects() {
  return (
    <section className="bg-[#f4f2e9] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-xl text-4xl font-bold tracking-tight text-[#17231c] md:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#687268]">
              A selection of projects I've worked on across AI and software development.
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex w-fit items-center gap-2 border-b border-[#17231c]/30 pb-2 text-sm font-semibold text-[#17231c] transition hover:border-[#17231c]"
          >
            View All Projects
            <span className="transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group flex min-h-[390px] flex-col rounded-3xl border border-[#d7dbce] bg-[#fffef8] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#17231c]/40 hover:shadow-xl hover:shadow-[#17231c]/10 md:p-9"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-[#687268]">
                  Selected Project
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7dbce] text-lg text-[#17231c] transition-all duration-300 group-hover:border-[#17231c] group-hover:bg-[#17231c] group-hover:text-[#d5f36a]">
                  ↗
                </span>
              </div>

              <div>
                <span className="mb-3 block font-mono text-xs text-[#9a9f91]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-2xl font-bold tracking-tight text-[#17231c] transition-colors group-hover:text-[#52644f] md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm font-semibold text-[#52644f]">
                  {project.tagline}
                </p>

                <p className="mt-5 text-sm leading-7 text-[#687268]">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 border-t border-[#e5e7dc] pt-6">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#d7dbce] bg-[#f4f2e9] px-3 py-1.5 font-mono text-[10px] text-[#52644f]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm font-semibold text-[#17231c] transition-transform duration-300 group-hover:translate-x-1">
                View Project →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}