"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

export function Problem() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-white px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[720px]">
        {/* Headline */}
        <h2
          className={cn(
            "text-center font-display text-3xl font-semibold leading-snug tracking-tight text-warm-900 sm:text-4xl",
            "motion-safe:transition-all motion-safe:duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Learning tools weren&rsquo;t built for how students actually learn.
        </h2>

        {/* Body */}
        <div
          className={cn(
            "mt-10 space-y-6 text-center text-base leading-relaxed text-warm-600 sm:text-lg sm:leading-relaxed",
            "motion-safe:transition-all motion-safe:duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          <p>
            Most ed-tech platforms treat learning like a conveyor belt: everyone
            moves at the same speed, gets the same practice, and
            &ldquo;passes&rdquo; whether they&rsquo;ve truly understood the
            material or not. Students who need more time get left behind.
            Students who need less get bored. And the students who need different
            approaches entirely? They&rsquo;re often an afterthought.
          </p>

          {/* Pull-quote */}
          <blockquote
            className={cn(
              "my-10 border-l-4 border-accent py-2 pl-6 text-left font-display text-xl leading-snug text-warm-800 sm:text-2xl sm:leading-snug",
              "motion-safe:transition-all motion-safe:duration-700 ease-out",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            )}
            style={{ transitionDelay: "400ms" }}
          >
            Shallow learning that doesn&rsquo;t stick, and a system that works
            best for the students who needed it least.
          </blockquote>

          <p>
            The result: a generation of learners trained to pass tests rather
            than build understanding&nbsp;&mdash; and a widening gap between
            those the system was designed for and everyone else.
          </p>
        </div>
      </div>
    </section>
  );
}
