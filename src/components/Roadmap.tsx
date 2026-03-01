"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

type ItemStatus = "done" | "in-progress" | "future";

interface PhaseItem {
  label: string;
  status: ItemStatus;
}

interface Phase {
  number: number;
  title: string;
  subtitle: string;
  active: boolean;
  items: PhaseItem[];
}

const PHASES: Phase[] = [
  {
    number: 1,
    title: "Now",
    subtitle: "Research & Development",
    active: true,
    items: [
      { label: "Mastery tracking engine", status: "done" },
      { label: "Exercise and practice system", status: "done" },
      { label: "Lesson delivery engine", status: "in-progress" },
      { label: "Curriculum integration", status: "in-progress" },
    ],
  },
  {
    number: 2,
    title: "Next",
    subtitle: "Early Access",
    active: false,
    items: [
      { label: "Pilot with select classrooms and families", status: "future" },
      { label: "Math content (K\u20138) first", status: "future" },
      { label: "Feedback-driven iteration", status: "future" },
    ],
  },
  {
    number: 3,
    title: "Later",
    subtitle: "Public Launch",
    active: false,
    items: [
      { label: "Full K\u20138 math coverage", status: "future" },
      { label: "Additional subjects", status: "future" },
      { label: "School admin tools", status: "future" },
      { label: "Community features", status: "future" },
    ],
  },
];

function StatusIcon({ status }: { status: ItemStatus }) {
  if (status === "done") {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="shrink-0 text-primary-600">
        <circle cx="9" cy="9" r="8" fill="currentColor" opacity="0.15" />
        <path d="M5.5 9.5 L7.5 11.5 L12.5 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (status === "in-progress") {
    return (
      <span className="relative flex h-[18px] w-[18px] shrink-0 items-center justify-center" aria-hidden="true">
        <span className="absolute h-3 w-3 animate-ping rounded-full bg-accent opacity-30" />
        <span className="relative h-2.5 w-2.5 rounded-full bg-accent" />
      </span>
    );
  }

  return (
    <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center" aria-hidden="true">
      <span className="h-2 w-2 rounded-full bg-warm-300" />
    </span>
  );
}

function statusLabel(status: ItemStatus): string {
  if (status === "done") return "(completed)";
  if (status === "in-progress") return "(in progress)";
  return "";
}

function PhaseCard({ phase, index, inView }: { phase: Phase; index: number; inView: boolean }) {
  return (
    <div
      className={cn(
        "relative flex flex-col",
        "motion-safe:transition-all motion-safe:duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{ transitionDelay: inView ? `${200 + index * 150}ms` : "0ms" }}
    >
      {/* Phase number badge */}
      <div className="mb-4 flex items-center gap-3">
        <span
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-bold",
            phase.active
              ? "bg-primary-600 text-white"
              : "bg-warm-200 text-warm-500"
          )}
        >
          {phase.number}
        </span>
        <div>
          <span
            className={cn(
              "font-display text-lg font-semibold",
              phase.active ? "text-primary-700" : "text-warm-700"
            )}
          >
            {phase.title}
          </span>
          <span className="ml-2 text-sm text-warm-500">{phase.subtitle}</span>
        </div>
      </div>

      {/* Items */}
      <div
        className={cn(
          "ml-[18px] space-y-3 border-l-2 pl-7 pb-2",
          phase.active ? "border-primary-200" : "border-warm-200"
        )}
      >
        {phase.items.map((item) => (
          <div key={item.label} className="flex items-start gap-2.5">
            <StatusIcon status={item.status} />
            <span
              className={cn(
                "text-sm leading-snug",
                item.status === "done" && "text-warm-700",
                item.status === "in-progress" && "font-medium text-warm-800",
                item.status === "future" && "text-warm-500"
              )}
            >
              {item.label}
              <span className="sr-only"> {statusLabel(item.status)}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Roadmap() {
  const { ref: headerRef, inView: headerInView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const { ref: timelineRef, inView: timelineInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="roadmap" className="bg-warm-50 px-6 py-24 sm:py-32">
      {/* Header */}
      <div ref={headerRef} className="mx-auto max-w-[720px] text-center">
        <h2
          className={cn(
            "font-display text-3xl font-semibold leading-snug tracking-tight text-warm-900 sm:text-4xl",
            "motion-safe:transition-all motion-safe:duration-700 ease-out",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Where we are and where we&rsquo;re going.
        </h2>
        <p
          className={cn(
            "mt-6 text-base leading-relaxed text-warm-600 sm:text-lg",
            "motion-safe:transition-all motion-safe:duration-700 ease-out",
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          We believe in building in the open. Here&rsquo;s our honest status.
        </p>
      </div>

      {/* Timeline */}
      <div
        ref={timelineRef}
        className="mx-auto mt-16 grid max-w-5xl gap-12 sm:mt-20 md:grid-cols-3 md:gap-8"
      >
        {PHASES.map((phase, index) => (
          <PhaseCard
            key={phase.number}
            phase={phase}
            index={index}
            inView={timelineInView}
          />
        ))}
      </div>
    </section>
  );
}
