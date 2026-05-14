import Link from "next/link";
import { Building2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-[hsl(220_15%_3.5%)] py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5 text-white/80">
            <Building2 className="h-4 w-4 text-cyan-300/80" />
            <span className="text-[12.5px] font-semibold uppercase tracking-[0.22em]">
              ArqFlo
            </span>
            <span className="ml-2 text-[11.5px] text-white/35">
              Agentic preconstruction platform
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-white/55">
            <Link href="/signin" className="hover:text-white/85">
              Sign in
            </Link>
            <Link href="/signup" className="hover:text-white/85">
              Sign up
            </Link>
            <Link href="/signin" className="hover:text-white/85">
              Live demo
            </Link>
            <span className="text-white/15">·</span>
            <span className="text-white/35">
              © {new Date().getFullYear()} ArqFlo
            </span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
