"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "./NavLinks";
import { CTA } from "./CTA";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string | null;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

export function MobileMenu({ isOpen, onClose, activeSection, onLinkClick }: MobileMenuProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    onLinkClick(e, sectionId);
    onClose();
  };

  return (
    <div
      id="mobile-menu"
      className={cn(
        "fixed inset-0 z-40 flex flex-col items-center justify-center bg-warm-50/[0.98]",
        "motion-safe:transition-all motion-safe:duration-300 ease-in-out",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      aria-hidden={!isOpen}
    >
      <nav className="flex flex-col items-center gap-8">
        {NAV_ITEMS.map((item, index) => {
          const sectionId = item.href.slice(1);
          const isActive = activeSection === sectionId;

          return (
            <a
              key={sectionId}
              href={item.href}
              onClick={(e) => handleLinkClick(e, sectionId)}
              tabIndex={isOpen ? 0 : -1}
              className={cn(
                "font-display text-2xl font-medium",
                "motion-safe:transition-all motion-safe:duration-300 ease-out",
                "hover:text-primary-700",
                "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600 focus-visible:rounded-sm",
                isActive ? "text-primary-700" : "text-warm-700",
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{
                transitionDelay: isOpen ? `${100 + index * 75}ms` : "0ms",
              }}
            >
              {item.label}
            </a>
          );
        })}

        <div
          className={cn(
            "mt-4 motion-safe:transition-all motion-safe:duration-300 ease-out",
            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
          style={{
            transitionDelay: isOpen ? `${100 + NAV_ITEMS.length * 75}ms` : "0ms",
          }}
        >
          <CTA
            tabIndex={isOpen ? 0 : -1}
            onClick={(e) => {
              handleLinkClick(e, "contact");
            }}
          />
        </div>
      </nav>

      <p
        className={cn(
          "absolute bottom-12 text-xs font-body tracking-wide text-warm-400",
          "motion-safe:transition-opacity motion-safe:duration-500",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        style={{ transitionDelay: isOpen ? "500ms" : "0ms" }}
      >
        Future Non-profit &middot; In Development
      </p>
    </div>
  );
}
