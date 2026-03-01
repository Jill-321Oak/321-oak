"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const SOURCES = [
  {
    name: "Illustrative Mathematics (IM)",
    description:
      "Rigorous, problem-based math curriculum used in thousands of classrooms.",
    license: "CC BY 4.0",
  },
  {
    name: "Core Knowledge",
    description:
      "Content-rich, sequenced curriculum for ELA and science that builds background knowledge year over year.",
    license: "Open Use",
  },
  {
    name: "CZI Learning Commons",
    description:
      "Structured curriculum data and learning standards infrastructure from the Chan Zuckerberg Initiative.",
    license: "Open Access",
  },
] as const;

export function Curriculum() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} className="bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[720px] text-center">
        <h2
          className={cn(
            "font-display text-3xl font-semibold leading-snug tracking-tight text-warm-900 sm:text-4xl",
            "motion-safe:transition-all motion-safe:duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Built on world-class open curriculum.
        </h2>
        <p
          className={cn(
            "mt-8 text-base leading-relaxed text-warm-600 sm:text-lg sm:leading-relaxed",
            "motion-safe:transition-all motion-safe:duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          We don&rsquo;t write our own curriculum. We build on the best open
          educational resources available, created by experts and used in
          classrooms nationwide. We believe great curriculum should be free and
          accessible. These organizations made that possible. We&rsquo;re
          building the delivery system to match.
        </p>
      </div>

      {/* Source list */}
      <div className="mx-auto mt-14 max-w-2xl space-y-4">
        {SOURCES.map((source, index) => (
          <div
            key={source.name}
            className={cn(
              "flex items-start gap-4 rounded-xl border border-warm-200 bg-warm-50 p-6",
              "motion-safe:transition-all motion-safe:duration-700 ease-out",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: inView ? `${300 + index * 100}ms` : "0ms" }}
          >
            {/* Decorative initial */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 font-display text-lg font-bold text-primary-700">
              {source.name[0]}
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-base font-semibold text-warm-900">
                  {source.name}
                </h3>
                <span className="rounded-full bg-warm-200/60 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-warm-500">
                  {source.license}
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-warm-600">
                {source.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
