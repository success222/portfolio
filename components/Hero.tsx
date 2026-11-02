import Link from "next/link";

const concepts = ["MACHINE LEARNING", "LLMs", "COMPUTER VISION", "APIs"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f4f2e9]">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#d5f36a]/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:min-h-[680px] md:grid-cols-[1.15fr_0.85fr] md:py-28">
        {/* Hero introduction */}
        <div className="relative z-10">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#a3c83c]" />
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#687268]">
              AI Engineer / Machine Learning / Software Systems
            </p>
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-[-0.055em] text-[#17231c] sm:text-6xl lg:text-7xl">
            Building
            <span className="relative mx-2 inline-block">
              intelligent
              <span className="absolute -bottom-1 left-0 -z-10 h-3 w-full -rotate-1 bg-[#d5f36a]" />
            </span>
            solutions for real-world problems.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-[#687268] md:text-lg">
            I'm an AI Engineer focused on building intelligent applications
            and practical AI solutions. My work spans machine learning,
            deep learning, LLM-powered applications, AI automation, and
            backend development, with an interest in applying these
            technologies to meaningful real-world challenges.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-4 rounded-full bg-[#17231c] px-7 py-4 text-sm font-semibold text-[#f4f2e9] transition-all duration-300 hover:-translate-y-1 hover:bg-[#314638]"
            >
              Explore my work
              <span className="text-[#d5f36a] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </Link>

            <Link
              href="/research"
              className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#17231c] transition-colors hover:text-[#687268]"
            >
              Research & publications
              <span>→</span>
            </Link>
          </div>

          <div className="mt-16 flex items-center gap-4">
            <span className="font-mono text-xs text-[#687268]">
              01 — BUILDING WITH INTELLIGENCE & PURPOSE
            </span>
          </div>
        </div>

        {/* Abstract AI systems visual */}
        <div className="relative mx-auto w-full max-w-[480px]">
          <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-[#d7dbce]" />
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full border border-[#d7dbce]" />

          <div className="relative overflow-hidden rounded-[2rem] border border-[#d7dbce] bg-[#17231c] p-7 shadow-2xl shadow-[#17231c]/10 sm:p-9">
            <div className="flex items-center justify-between border-b border-white/15 pb-5">
              <span className="font-mono text-xs tracking-widest text-[#d5f36a]">
                SYSTEMS / 001
              </span>
              <span className="font-mono text-xs text-white/40">
                AI ENGINEERING
              </span>
            </div>

            <div className="relative my-10 flex aspect-square items-center justify-center">
              <div className="absolute h-[85%] w-[85%] rounded-full border border-dashed border-white/20 animate-[spin_35s_linear_infinite]" />
              <div className="absolute h-[65%] w-[65%] rounded-full border border-white/15" />
              <div className="absolute h-[45%] w-[45%] rounded-full border border-[#d5f36a]/40" />

              <div className="absolute h-3 w-3 translate-x-[-115px] translate-y-[-85px] rounded-full bg-[#ff795e] shadow-[0_0_20px_#ff795e]" />
              <div className="absolute h-2.5 w-2.5 translate-x-[115px] translate-y-[65px] rounded-full bg-[#d5f36a] shadow-[0_0_20px_#d5f36a]" />
              <div className="absolute h-2 w-2 translate-x-[35px] translate-y-[-130px] rounded-full bg-white" />

              <div className="relative flex h-36 w-36 items-center justify-center rounded-[2rem] border border-[#d5f36a]/50 bg-[#d5f36a] shadow-[0_0_70px_rgba(213,243,106,0.15)] transition-transform duration-500 hover:rotate-6">
                <div className="text-center">
                  <span className="block text-5xl font-bold tracking-tighter text-[#17231c]">
                    AI
                  </span>
                  <span className="mt-1 block font-mono text-[9px] tracking-[0.2em] text-[#17231c]/70">
                    INTELLIGENCE
                  </span>
                </div>
              </div>

              <span className="absolute left-0 top-[12%] rounded-full border border-white/20 bg-white/5 px-3 py-2 font-mono text-[10px] text-white/80 backdrop-blur-sm">
                ML
              </span>

              <span className="absolute right-0 top-[10%] rounded-full border border-white/20 bg-white/5 px-3 py-2 font-mono text-[10px] text-white/80 backdrop-blur-sm">
                DL
              </span>

              <span className="absolute left-[-2%] top-[38%] rounded-full border border-white/20 bg-white/5 px-3 py-2 font-mono text-[10px] text-white/80 backdrop-blur-sm">
                COMPUTER VISION
              </span>

              <span className="absolute right-[-2%] top-[36%] rounded-full border border-white/20 bg-white/5 px-3 py-2 font-mono text-[10px] text-white/80 backdrop-blur-sm">
                GEN AI
              </span>

              <span className="absolute left-[5%] bottom-[25%] rounded-full border border-white/20 bg-white/5 px-3 py-2 font-mono text-[10px] text-white/80 backdrop-blur-sm">
                LLMs
              </span>

              <span className="absolute right-[5%] bottom-[25%] rounded-full border border-white/20 bg-white/5 px-3 py-2 font-mono text-[10px] text-white/80 backdrop-blur-sm">
                AI AUTOMATION
              </span>

              <span className="absolute left-[12%] bottom-[5%] rounded-full border border-white/20 bg-white/5 px-3 py-2 font-mono text-[10px] text-white/80 backdrop-blur-sm">
                DATA SCIENCE
              </span>

              <span className="absolute right-[8%] bottom-[5%] rounded-full border border-white/20 bg-white/5 px-3 py-2 font-mono text-[10px] text-white/80 backdrop-blur-sm">
                BACKEND & APIs
              </span>
            </div>

            <div className="border-t border-white/15 pt-5">
              <p className="mb-4 font-mono text-[10px] tracking-[0.2em] text-white/40">
                AREAS OF FOCUS
              </p>

              <div className="flex flex-wrap gap-2">
                {concepts.map((concept) => (
                  <span
                    key={concept}
                    className="rounded-full border border-white/15 px-3 py-2 font-mono text-[9px] tracking-wide text-white/70"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <span className="absolute -bottom-12 right-2 font-mono text-[10px] tracking-[0.2em] text-[#687268]">
            IDEAS → SYSTEMS → IMPACT
          </span>
        </div>
      </div>
    </section>
  );
}