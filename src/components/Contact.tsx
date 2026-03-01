"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const CONTACT_LINKS = [
  {
    label: "Email Us",
    href: "mailto:hello@321oak.com",
    description: "hello@321oak.com",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-primary-600">
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M2 7 L12 13 L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const;

export function Contact() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-primary-900 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[720px] text-center">
        <h2
          className={cn(
            "font-display text-3xl font-semibold leading-snug tracking-tight text-white sm:text-4xl",
            "motion-safe:transition-all motion-safe:duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Let&rsquo;s build this together.
        </h2>
        <p
          className={cn(
            "mt-6 text-base leading-relaxed text-primary-200 sm:text-lg sm:leading-relaxed",
            "motion-safe:transition-all motion-safe:duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          321Oak is in active development. Whether you&rsquo;re an
          educator, a developer, a curriculum expert, or just someone who
          believes every student deserves better&nbsp;&mdash; we&rsquo;d love to
          hear from you.
        </p>

        {/* Contact links */}
        <div
          className={cn(
            "mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6",
            "motion-safe:transition-all motion-safe:duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: "400ms" }}
        >
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={cn(
                "group flex items-center gap-3 rounded-xl border border-primary-700 bg-primary-800/50 px-6 py-4",
                "motion-safe:transition-all duration-200 ease-out",
                "hover:bg-primary-800 hover:border-primary-600 hover:shadow-lg",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              )}
            >
              <span className="motion-safe:transition-transform duration-200 group-hover:scale-110">
                {link.icon}
              </span>
              <div className="text-left">
                <span className="block text-sm font-semibold text-white">{link.label}</span>
                <span className="block text-xs text-primary-300">{link.description}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Closing note */}
        <p
          className={cn(
            "mt-14 text-sm text-primary-400",
            "motion-safe:transition-all motion-safe:duration-700 ease-out",
            inView ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: "600ms" }}
        >
          321Oak is building toward non-profit status.
          <br />
          Every dollar will go directly to building free learning tools.
        </p>
      </div>
    </section>
  );
}
