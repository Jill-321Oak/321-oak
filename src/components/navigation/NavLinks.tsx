import { cn } from "@/lib/utils";

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
] as const;

interface NavLinksProps {
  activeSection: string | null;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
  className?: string;
}

export function NavLinks({ activeSection, onLinkClick, className }: NavLinksProps) {
  return (
    <ul className={cn("flex items-center gap-8", className)}>
      {NAV_ITEMS.map((item) => {
        const sectionId = item.href.slice(1);
        const isActive = activeSection === sectionId;

        return (
          <li key={sectionId}>
            <a
              href={item.href}
              onClick={(e) => onLinkClick(e, sectionId)}
              className={cn(
                "relative font-body text-sm font-medium transition-colors duration-200",
                "hover:text-primary-700",
                "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600 focus-visible:rounded-sm",
                isActive ? "text-primary-700" : "text-warm-600"
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary-600",
                  "motion-safe:transition-all motion-safe:duration-300",
                  isActive ? "w-full opacity-100" : "w-0 opacity-0"
                )}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
