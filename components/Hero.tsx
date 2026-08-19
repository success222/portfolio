import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-7xl items-center px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            Data • Machine Learning • AI
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Building intelligent products with data and AI.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            I build intelligent software that transforms data into practical solutions. 
            My work combines machine learning, AI, and software engineering to create systems 
            that are useful, scalable, and grounded in real-world problems.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-sky-800 px-6 py-3 font-medium text-white transition hover:bg-sky-400"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}