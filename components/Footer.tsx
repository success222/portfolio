import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#17231c] text-[#fffef8]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#d5f36a]">
              Get in touch
            </p>

            <h2 className="max-w-xl text-4xl font-bold tracking-tight md:text-4xl">
              Let's build something meaningful.
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/65">
              I'm always interested in discussing AI, machine learning,
              research, and opportunities to build impactful products.
            </p>
          </div>

          <div className="space-y-6 md:justify-self-end md:text-right">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-white/40">
                Email
              </p>
              <Link
                href="mailto:sotonwasuccess1@gmail.com"
                className="text-lg font-medium text-[#d5f36a] transition hover:text-white"
              >
                sotonwasuccess1@gmail.com
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm md:justify-end">
              <Link
                href="https://www.linkedin.com/in/success-sotonwa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition hover:text-[#d5f36a]"
              >
                LinkedIn ↗
              </Link>

              <Link
                href="https://github.com/success222"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition hover:text-[#d5f36a]"
              >
                GitHub ↗
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Success Sotonwa. All rights reserved.</p>

          <p className="font-mono uppercase tracking-widest">
            AI Engineer · Building with intelligence & purpose
          </p>
        </div>
      </div>
    </footer>
  );
}