import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Let's build something meaningful.
            </h2>

            <p className="mt-3 max-w-lg leading-7 text-slate-400">
              I'm always interested in discussing AI, machine learning,
              research, and opportunities to build impactful products.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-2 text-slate-400 md:justify-self-end">
            <p>
              Email:{" "}
              <Link
                href="mailto:sotonwasuccess1@gmail.com"
                className="transition hover:text-white"
              >
                sotonwasuccess1@gmail.com
              </Link>
            </p>

            <p>
              LinkedIn:{" "}
              <Link
                href="https://www.linkedin.com/in/success-sotonwa/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                linkedin.com/in/success-sotonwa
              </Link>
            </p>

            <p>
              GitHub:{" "}
              <Link
                href="https://github.com/success222"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                github.com/success222
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-800 pt-3 text-sm text-slate-500">
          © 2026 Success Sotonwa
        </div>
      </div>
    </footer>
  );
}