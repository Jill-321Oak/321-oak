import { cn } from "@/lib/utils";

interface CTAProps {
  className?: string;
  tabIndex?: number;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function CTA({ className, tabIndex, onClick }: CTAProps) {
  return (
    <a
      href="#contact"
      onClick={onClick}
      tabIndex={tabIndex}
      className={cn(
        "inline-flex items-center rounded-full px-5 py-2",
        "bg-primary-600 text-white text-sm font-body font-semibold",
        "motion-safe:transition-all duration-200 ease-out",
        "hover:bg-primary-700 hover:shadow-md hover:scale-[1.02]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
        "active:scale-[0.98]",
        className
      )}
    >
      Partner With Us
    </a>
  );
}
