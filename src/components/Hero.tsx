"use client";

import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
      <span className="text-xs font-body tracking-wide text-warm-400">Scroll</span>
      <svg
        width="20"
        height="28"
        viewBox="0 0 20 28"
        fill="none"
        aria-hidden="true"
        className="text-warm-400 animate-gentle-bounce"
      >
        <path
          d="M10 4 L10 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M4 16 L10 22 L16 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure CSS transitions trigger after mount
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleCTAClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("approach");
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 72,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section className="relative flex min-h-[calc(100vh-72px)] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center hero-bg">
      {/* Badge */}
      <div
        className={cn(
          "mb-8 inline-flex items-center rounded-full border border-warm-200 bg-white/60 px-4 py-1.5 text-xs font-body tracking-wide text-warm-500 backdrop-blur-sm",
          "motion-safe:transition-all motion-safe:duration-700 ease-out",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        )}
      >
        Open Source &middot; Forever Free &middot; Future Non-profit
      </div>

      {/* Headline */}
      <h1
        className={cn(
          "max-w-3xl font-display text-4xl font-semibold leading-[1.15] tracking-tight text-warm-900 sm:text-5xl lg:text-6xl",
          "motion-safe:transition-all motion-safe:duration-700 ease-out",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ transitionDelay: "200ms" }}
      >
        Every student can master anything.{" "}
        <span className="text-primary-700">
          We&rsquo;re building the platform to prove it.
        </span>
      </h1>

      {/* Subheadline */}
      <p
        className={cn(
          "mt-8 max-w-[680px] text-lg leading-relaxed text-warm-600 sm:text-xl sm:leading-relaxed",
          "motion-safe:transition-all motion-safe:duration-700 ease-out",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ transitionDelay: "400ms" }}
      >
        321Oak is a free, open learning platform that combines
        mastery-based progression, spaced repetition, and built-in
        accommodations&nbsp;&mdash; so every learner gets what they actually need.
      </p>

      {/* CTA */}
      <div
        className={cn(
          "mt-10 motion-safe:transition-all motion-safe:duration-700 ease-out",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ transitionDelay: "600ms" }}
      >
        <a
          href="#approach"
          onClick={handleCTAClick}
          className={cn(
            "inline-flex items-center rounded-full px-7 py-3",
            "bg-primary-600 text-white font-body font-semibold text-base",
            "motion-safe:transition-all duration-200 ease-out",
            "hover:bg-primary-700 hover:shadow-lg hover:scale-[1.02]",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
            "active:scale-[0.98]"
          )}
        >
          See Our Approach
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className={cn(
          "motion-safe:transition-opacity motion-safe:duration-1000 ease-out",
          visible ? "opacity-100" : "opacity-0"
        )}
        style={{ transitionDelay: "1000ms" }}
      >
        <ScrollIndicator />
      </div>
    </section>
  );
}
