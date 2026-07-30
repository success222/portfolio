import Link from "next/link";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold tracking-tight text-slate-900">
        Professional Experience
      </h1>

      <div className="mt-12 grid gap-6">
        {experiences.map((experience) => (
          <Link
            key={experience.id}
            href={`/experience/${experience.slug}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:border-slate-300 hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-slate-500">
              {experience.company}
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
              {experience.role}
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              {experience.summary}
            </p>

            <p className="mt-6 font-medium text-slate-900">
              View Experience →
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}