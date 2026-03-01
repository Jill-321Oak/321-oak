"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

function OrchestrationDiagram({ inView }: { inView: boolean }) {
  return (
    <div
      className={cn(
        "mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-0",
        "motion-safe:transition-all motion-safe:duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      style={{ transitionDelay: "400ms" }}
      aria-hidden="true"
    >
      {/* Structure pillar */}
      <div className="flex flex-col items-center rounded-xl border border-warm-200 bg-white px-8 py-6 shadow-sm sm:w-56">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="mb-3 text-primary-700">
          <rect x="3" y="3" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M3 10 L25 10" stroke="currentColor" strokeWidth="2" />
          <path d="M10 10 L10 25" stroke="currentColor" strokeWidth="2" />
        </svg>
        <span className="font-display text-base font-semibold text-warm-800">Structure</span>
        <span className="mt-1 text-xs text-warm-500 text-center">Standards-aligned curriculum</span>
      </div>

      {/* Bridge / arrow */}
      <div className="flex flex-col items-center gap-1 px-4 py-2 sm:px-6">
        {/* Vertical arrow on mobile */}
        <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="text-accent sm:hidden">
          <path d="M12 0 L12 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 26 L12 34 L18 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {/* Horizontal arrow on desktop */}
        <svg width="80" height="24" viewBox="0 0 80 24" fill="none" className="hidden text-accent sm:block">
          <path d="M0 12 L68 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M62 6 L72 12 L62 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-display text-sm font-semibold text-accent-dark">Orchestration</span>
      </div>

      {/* Personalization pillar */}
      <div className="flex flex-col items-center rounded-xl border border-warm-200 bg-white px-8 py-6 shadow-sm sm:w-56">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="mb-3 text-primary-700">
          <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="2" />
          <path d="M4 26 C4 19, 9 16, 14 16 C19 16, 24 19, 24 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 8 L22 10 L26 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-display text-base font-semibold text-warm-800">Personalization</span>
        <span className="mt-1 text-xs text-warm-500 text-center">Adaptive pacing &amp; support</span>
      </div>
    </div>
  );
}

export function Approach() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="approach"
      ref={ref}
      className="bg-primary-50/40 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[720px]">
        <h2
          className={cn(
            "text-center font-display text-3xl font-semibold leading-snug tracking-tight text-warm-900 sm:text-4xl",
            "motion-safe:transition-all motion-safe:duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Structure and personalization aren&rsquo;t opposites.{" "}
          <span className="text-primary-700">We orchestrate both.</span>
        </h2>

        <div
          className={cn(
            "mt-10 space-y-6 text-center text-base leading-relaxed text-warm-600 sm:text-lg sm:leading-relaxed",
            "motion-safe:transition-all motion-safe:duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          <p>
            The tension in education has always been: do you give students
            structure (clear curriculum, sequenced lessons) or personalization
            (adaptive pacing, individual support)? Our answer: both, through
            orchestration.
          </p>
          <p>
            321Oak uses structured, standards-aligned curriculum as the
            foundation, then personalizes <em>how</em> and <em>when</em> each
            student practices. The content stays rigorous. The delivery adapts to
            the learner.
          </p>
          <p>
            We call this <strong className="font-semibold text-warm-800">orchestrated learning</strong>&nbsp;&mdash;
            and it&rsquo;s what makes deep, lasting understanding possible at
            scale.
          </p>
        </div>
      </div>

      {/* Visual diagram */}
      <div className="mx-auto max-w-2xl">
        <OrchestrationDiagram inView={inView} />
      </div>
    </section>
  );
}
