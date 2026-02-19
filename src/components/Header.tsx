"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import { Container } from "./Container";
import { NavLink } from "./NavLink";

const navItems = [{ label: "Actualités", href: "/actualites" }];

export function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCabinetOpen, setIsCabinetOpen] = useState(false);
  const [isExpertisesOpen, setIsExpertisesOpen] = useState(false);
  const cabinetRef = useRef<HTMLDivElement | null>(null);
  const expertisesRef = useRef<HTMLDivElement | null>(null);

  const isCabinetActive = pathname === "/cabinet" || pathname.startsWith("/cabinet/");
  const isExpertisesActive =
    pathname === "/expertises" || pathname.startsWith("/expertises/");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cabinetRef.current && !cabinetRef.current.contains(event.target as Node)) {
        setIsCabinetOpen(false);
      }
      if (
        expertisesRef.current &&
        !expertisesRef.current.contains(event.target as Node)
      ) {
        setIsExpertisesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-sand bg-white">
      <Container>
        <div className="flex items-center gap-6 py-5">
          <Link href="/" className="group text-center">
            <span className="block text-base font-semibold uppercase tracking-[0.3em] text-ink font-display">
              Sharon Maman
            </span>
            <span className="mt-1 block text-[11px] tracking-[0.18em] text-ink/70 uppercase">
              Avocat à la Cour
            </span>
          </Link>
          <button
            type="button"
            className="ml-auto flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink md:hidden"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileOpen((prev) => !prev)}
          >
            Menu
            <span aria-hidden="true">{isMobileOpen ? "✕" : "☰"}</span>
          </button>
          <nav className="ml-auto hidden items-center gap-6 pr-24 md:flex" aria-label="Menu">
            <div
              className="relative flex items-center gap-2"
              ref={cabinetRef}
              onMouseEnter={() => setIsCabinetOpen(true)}
              onMouseLeave={() => setIsCabinetOpen(false)}
            >
              <Link
                href="/cabinet"
                className={`text-xs font-medium uppercase tracking-[0.12em] transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  isCabinetActive ? "text-accent" : "text-ink"
                }`}
              >
                Le cabinet
              </Link>
              <button
                type="button"
                onClick={() => setIsCabinetOpen((prev) => !prev)}
                className="flex items-center text-[10px] text-ink/60 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-haspopup="menu"
                aria-expanded={isCabinetOpen}
                aria-label="Ouvrir le menu Le cabinet"
              >
                ▾
              </button>
              {isCabinetOpen && (
                <div className="absolute left-0 top-full z-50 w-64 pt-3">
                  <div className="border border-sand bg-white py-2 shadow-sm">
                    <Link
                      href="/cabinet#presentation"
                      className="block px-4 py-2 text-sm text-ink/80 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      onClick={() => setIsCabinetOpen(false)}
                    >
                      Présentation
                    </Link>
                    <Link
                      href="/cabinet#valeurs-et-engagement"
                      className="block px-4 py-2 text-sm text-ink/80 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      onClick={() => setIsCabinetOpen(false)}
                    >
                      Valeurs et Engagement
                    </Link>
                    <Link
                      href="/cabinet#honoraires"
                      className="block px-4 py-2 text-sm text-ink/80 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      onClick={() => setIsCabinetOpen(false)}
                    >
                      Honoraires
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative flex items-center gap-2"
              ref={expertisesRef}
              onMouseEnter={() => setIsExpertisesOpen(true)}
              onMouseLeave={() => setIsExpertisesOpen(false)}
            >
              <Link
                href="/expertises"
                className={`text-xs font-medium uppercase tracking-[0.12em] transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  isExpertisesActive ? "text-accent" : "text-ink"
                }`}
              >
                Expertises
              </Link>
              <button
                type="button"
                onClick={() => setIsExpertisesOpen((prev) => !prev)}
                className="flex items-center text-[10px] text-ink/60 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-haspopup="menu"
                aria-expanded={isExpertisesOpen}
                aria-label="Ouvrir le menu Expertises"
              >
                ▾
              </button>
              {isExpertisesOpen && (
                <div className="absolute left-0 top-full z-50 w-64 pt-3">
                  <div className="border border-sand bg-white py-2 shadow-sm">
                    <Link
                      href="/expertises/droit-des-affaires"
                      className="block px-4 py-2 text-sm text-ink/80 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      onClick={() => setIsExpertisesOpen(false)}
                    >
                      Corporate & Fusions-Acquisitions
                    </Link>
                    <Link
                      href="/expertises/transmission-structures-reglementees"
                      className="block px-4 py-2 text-sm text-ink/80 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      onClick={() => setIsExpertisesOpen(false)}
                    >
                      Transmission et acquisition d’entreprises et de structures
                      réglementées
                    </Link>
                    <Link
                      href="/expertises/droit-commercial"
                      className="block px-4 py-2 text-sm text-ink/80 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      onClick={() => setIsExpertisesOpen(false)}
                    >
                      Droit commercial et de la concurrence
                    </Link>
                    <Link
                      href="/expertises/mandataires-sportifs"
                      className="block px-4 py-2 text-sm text-ink/80 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      onClick={() => setIsExpertisesOpen(false)}
                    >
                      Mandataire Sportif
                    </Link>
                  </div>
                </div>
              )}
            </div>
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </Container>
      {isMobileOpen && (
        <div id="mobile-menu" className="border-t border-sand bg-white md:hidden">
          <Container>
            <div className="py-4 space-y-4">
              <div className="space-y-2">
                <Link
                  href="/cabinet"
                  className={`block text-xs font-medium uppercase tracking-[0.12em] transition-colors hover:text-accent focus-visible:text-accent active:text-accent ${
                    isCabinetActive ? "text-accent" : "text-ink"
                  }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  Le cabinet
                </Link>
                <div className="space-y-2 pl-4 text-sm text-ink/80">
                  <Link
                    href="/cabinet#presentation"
                    className="block transition-colors hover:text-accent"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Présentation
                  </Link>
                  <Link
                    href="/cabinet#valeurs-et-engagement"
                    className="block transition-colors hover:text-accent"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Valeurs et Engagement
                  </Link>
                  <Link
                    href="/cabinet#honoraires"
                    className="block transition-colors hover:text-accent"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Honoraires
                  </Link>
                </div>
              </div>
              <div className="space-y-2">
                <Link
                  href="/expertises"
                  className={`block text-xs font-medium uppercase tracking-[0.12em] transition-colors hover:text-accent focus-visible:text-accent active:text-accent ${
                    isExpertisesActive ? "text-accent" : "text-ink"
                  }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  Expertises
                </Link>
                <div className="space-y-2 pl-4 text-sm text-ink/80">
                  <Link
                    href="/expertises/droit-des-affaires"
                    className="block transition-colors hover:text-accent"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Corporate & Fusions-Acquisitions
                  </Link>
                  <Link
                    href="/expertises/transmission-structures-reglementees"
                    className="block transition-colors hover:text-accent"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Transmission et acquisition d’entreprises et de structures réglementées
                  </Link>
                  <Link
                    href="/expertises/droit-commercial"
                    className="block transition-colors hover:text-accent"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Droit commercial et de la concurrence
                  </Link>
                  <Link
                    href="/expertises/mandataires-sportifs"
                    className="block transition-colors hover:text-accent"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Mandataire Sportif
                  </Link>
                </div>
              </div>
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-2">
                <Button href="/contact" className="px-4 py-2 text-[11px]">
                  Prendre rendez-vous
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 md:block">
        <Button href="/contact" className="px-4 py-2 text-[11px] tracking-[0.12em]">
          Prendre rendez-vous
        </Button>
      </div>
    </header>
  );
}
