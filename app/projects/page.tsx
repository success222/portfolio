import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="relative mx-auto min-h-screen max-w-7xl px-6 py-20">
      <Link
        href="/"
        className="fixed left-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] top-24 z-40 inline-flex items-center gap-2 rounded-full border border-[#d7dbce] bg-[#fffef8]/95 px-4 py-2 text-sm font-medium text-[#687268] shadow-sm backdrop-blur-md transition hover:border-[#17231c] hover:text-[#17231c]"
      >
        ← Back to Home
      </Link>

      <div className="mb-12 mt-12">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#687268]">
          Selected work
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex min-h-[350px] flex-col justify-between rounded-3xl border border-[#d7dbce] bg-[#fffef8] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#17231c]/40 hover:shadow-xl hover:shadow-[#17231c]/10 md:p-9"
          >
            <div>
              <div className="mb-4 flex items-center justify-end">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7dbce] text-lg text-[#17231c] transition-all duration-300 group-hover:border-[#17231c] group-hover:bg-[#17231c] group-hover:text-[#d5f36a]">
                  ↗
                </span>
              </div>

              <span className="mb-3 block font-mono text-xs text-[#9a9f91]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2 className="text-2xl font-bold tracking-tight text-[#17231c] transition-colors group-hover:text-[#52644f] md:text-3xl">
                {project.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#687268]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#d7dbce] bg-[#f4f2e9] px-3 py-1.5 font-mono text-[10px] text-[#52644f]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}