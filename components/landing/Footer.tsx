import Link from "next/link";
import { Building2 } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

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
              Decision Intelligence for the Built World
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-white/55">
            <a href="#how-it-works" className="hover:text-white/85">
              How it works
            </a>
            <a href="#pillars" className="hover:text-white/85">
              Pillars
            </a>
            <a href="#coverage" className="hover:text-white/85">
              Coverage
            </a>
            <a href="#roadmap" className="hover:text-white/85">
              Roadmap
            </a>
            <Link href={`${APP_URL}/signin`} className="hover:text-white/85">
              Sign in
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
