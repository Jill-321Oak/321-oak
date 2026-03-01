"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

function MasteryIcon({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Three stacked checkmarks representing tiered mastery */}
      <path
        d="M8 20 L12 24 L24 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 14 L12 18 L24 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <path
        d="M8 26 L12 30 L24 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}

function SpacedRepIcon({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Calendar with a circular arrow — spaced repetition loop */}
      <rect
        x="4"
        y="6"
        width="24"
        height="22"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M4 12 L28 12" stroke="currentColor" strokeWidth="2" />
      <path d="M10 3 L10 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 3 L22 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Loop arrow */}
      <path
        d="M12 20 A4 4 0 1 1 16 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M16 22 L16 25 L19 23.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AccessIcon({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Universal access — figure with open arms in a circle */}
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="10" r="2.5" fill="currentColor" />
      <path
        d="M16 14 L16 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 17 L16 15 L22 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 27 L16 21 L19 27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const FEATURES = [
  {
    icon: MasteryIcon,
    title: "Mastery-Based Progression",
    description:
      "Students advance when they've truly understood the material — not when the calendar says so. Our three-tier mastery model tracks factual recall, conceptual understanding, and procedural fluency separately.",
  },
  {
    icon: SpacedRepIcon,
    title: "Intelligent Spaced Repetition",
    description:
      "Practice is scheduled based on each student's actual retention patterns. Material returns right before you'd forget it, with intelligent interleaving that builds durable, flexible knowledge.",
  },
  {
    icon: AccessIcon,
    title: "Accommodation-First Design",
    description:
      "Accommodations aren't bolted on — they're built into the architecture. Extended time, simplified presentation, and other supports are core features for every student, not special exceptions.",
  },
] as const;

export function Product() {
  const { ref: headerRef, inView: headerInView } = useInView<HTMLDivElement>({
    threshold: 0.1,
  });
  const { ref: cardsRef, inView: cardsInView } = useInView<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <section className="bg-warm-50 px-6 py-24 sm:py-32">
      {/* Header */}
      <div ref={headerRef} className="mx-auto max-w-[720px] text-center">
        <h2
          className={cn(
            "font-display text-3xl font-semibold leading-snug tracking-tight text-warm-900 sm:text-4xl",
            "motion-safe:transition-all motion-safe:duration-700 ease-out",
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          )}
        >
          A learning platform designed around how memory and understanding
          actually work.
        </h2>
        <p
          className={cn(
            "mt-8 text-base leading-relaxed text-warm-600 sm:text-lg sm:leading-relaxed",
            "motion-safe:transition-all motion-safe:duration-700 ease-out",
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          321Oak is an intelligent practice platform for K&ndash;12
          learners. We use open educational resources&nbsp;&mdash; high-quality,
          freely licensed curriculum from sources like Illustrative Mathematics
          and Core Knowledge&nbsp;&mdash; and deliver them through a system built
          on learning science. No subscriptions. No ads. No data selling. Just
          effective learning, free forever for every student.
        </p>
      </div>

      {/* Feature cards */}
      <div
        ref={cardsRef}
        className="mx-auto mt-16 grid max-w-6xl gap-8 sm:mt-20 md:grid-cols-3"
      >
        {FEATURES.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className={cn(
                "rounded-xl border-t-4 border-accent bg-white p-8 shadow-sm",
                "motion-safe:transition-all motion-safe:duration-700 ease-out",
                "hover:shadow-md",
                cardsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: cardsInView ? `${index * 150}ms` : "0ms" }}
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary-50 p-2.5 text-primary-700">
                <Icon />
              </div>
              <h3 className="font-display text-lg font-semibold text-warm-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-warm-600">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
