import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/experience", label: "Experience" },
];

function MobileMenu({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  return (
    <div className="md:hidden">
      <details className="group relative">
        <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[#d7dbce] px-4 py-2 text-sm font-medium text-[#17231c] transition hover:bg-[#e9eadf]">
          Menu
          <span className="text-xs transition-transform group-open:rotate-180">
            ↓
          </span>
        </summary>

        <div className="absolute right-0 top-full mt-3 w-56 rounded-2xl border border-[#d7dbce] bg-[#fffef8] p-2 shadow-xl shadow-[#17231c]/10">
          <nav className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[#687268] transition-colors hover:bg-[#e9eadf] hover:text-[#17231c]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              className="mt-1 rounded-xl bg-[#d5f36a] px-4 py-3 text-sm font-semibold text-[#17231c] transition hover:bg-[#c3e64e]"
            >
              Let's talk ↗
            </Link>
          </nav>
        </div>
      </details>
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d7dbce]/80 bg-[#f4f2e9]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#17231c] text-sm font-bold tracking-tight text-[#d5f36a] transition-transform group-hover:rotate-6">
            SS.
          </span>

          <span className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-[#17231c]">
              Success Sotonwa
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#687268]">
              AI Engineer
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-[#d7dbce] bg-[#fffef8] p-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[#687268] transition-all hover:bg-[#e9eadf] hover:text-[#17231c]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#contact"
          className="hidden items-center gap-2 rounded-full bg-[#d5f36a] px-5 py-3 text-sm font-semibold text-[#17231c] transition-all hover:-translate-y-0.5 hover:bg-[#c3e64e] md:flex"
        >
          Let's talk
          <span>↗</span>
        </Link>

        <MobileMenu links={navLinks} />
      </nav>
    </header>
  );
}