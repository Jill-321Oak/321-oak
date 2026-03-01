import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

function AcornIcon({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Stem */}
      <path
        d="M10 0.5 C10.5 1.5, 11 2.5, 10 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Cap */}
      <path
        d="M4 7.5 C4 4.5, 7 3.5, 10 3.5 C13 3.5, 16 4.5, 16 7.5 L15.5 9 C14 10, 12 10.5, 10 10.5 C8 10.5, 6 10, 4.5 9 Z"
        fill="currentColor"
        opacity="0.7"
      />
      {/* Cap texture lines */}
      <path
        d="M5.5 6.5 L14.5 6.5 M6 8.2 L14 8.2"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.3"
      />
      {/* Body */}
      <path
        d="M5 10.5 C4 15, 6 20, 10 22.5 C14 20, 16 15, 15 10.5 C13 10.5, 7 10.5, 5 10.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2.5 group",
        className
      )}
      aria-label="321Oak — return to homepage"
    >
      <AcornIcon className="text-primary-700 transition-transform duration-300 group-hover:scale-105" />
      <div className="flex flex-col">
        <span className="font-display text-xl font-semibold text-primary-800 leading-tight">
          321Oak
        </span>
        <span className="text-[10px] font-body tracking-widest uppercase text-warm-400 leading-none">
          Non-profit &middot; In Development
        </span>
      </div>
    </Link>
  );
}
