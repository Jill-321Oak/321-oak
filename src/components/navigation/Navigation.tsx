"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { CTA } from "./CTA";
import { MobileMenu } from "./MobileMenu";
import { useScrollState } from "./useScrollState";
import { useActiveSection } from "./useActiveSection";

const NAV_HEIGHT = 72;
const SECTION_IDS = ["about", "approach", "roadmap", "contact"];

export function Navigation() {
  const isScrolled = useScrollState(10);
  const activeSection = useActiveSection(SECTION_IDS);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - NAV_HEIGHT,
          behavior: "smooth",
        });
      }
      setIsMobileMenuOpen(false);
    },
    []
  );

  const handleCTAClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      handleLinkClick(e, "contact");
    },
    [handleLinkClick]
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "motion-safe:transition-all motion-safe:duration-300 ease-in-out",
          isScrolled
            ? "bg-warm-50/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
          aria-label="Main navigation"
        >
          <Logo />

          {/* Desktop links */}
          <NavLinks
            activeSection={activeSection}
            onLinkClick={handleLinkClick}
            className="hidden md:flex"
          />

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-4">
            <CTA
              className="hidden md:inline-flex"
              onClick={handleCTAClick}
            />

            {/* Hamburger / close button */}
            <button
              className={cn(
                "relative flex h-10 w-10 items-center justify-center rounded-lg md:hidden",
                "text-warm-700 hover:bg-warm-200/50",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
                "motion-safe:transition-colors duration-200"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="flex h-5 w-6 flex-col justify-between">
                <span
                  className={cn(
                    "block h-0.5 w-full rounded-full bg-current",
                    "motion-safe:transition-all motion-safe:duration-300 origin-center",
                    isMobileMenuOpen && "translate-y-[9px] rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-full rounded-full bg-current",
                    "motion-safe:transition-all motion-safe:duration-300",
                    isMobileMenuOpen && "scale-x-0 opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-full rounded-full bg-current",
                    "motion-safe:transition-all motion-safe:duration-300 origin-center",
                    isMobileMenuOpen && "-translate-y-[9px] -rotate-45"
                  )}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        onLinkClick={handleLinkClick}
      />
    </>
  );
}
