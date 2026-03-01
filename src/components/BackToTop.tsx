"use client";

import { cn } from "@/lib/utils";
import { useScrollState } from "@/components/navigation/useScrollState";

export function BackToTop() {
  const isPastHero = useScrollState(600);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full",
        "bg-primary-600 text-white shadow-lg",
        "motion-safe:transition-all duration-300 ease-out",
        "hover:bg-primary-700 hover:shadow-xl hover:scale-105",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
        "active:scale-95",
        isPastHero
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path
          d="M9 14 L9 4 M4 8 L9 3 L14 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
