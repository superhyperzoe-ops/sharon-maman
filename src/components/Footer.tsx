import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-sand bg-sand/40">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/70">
              Coordonnées
            </p>
            <p className="text-sm text-ink">
              16 rue Washington - 75008 Paris
              <br />
              +33 6 35 41 74 67
              <br />
              sharonmaman.law@gmail.com
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/70">
              Contact
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/sharon-maman-8b74b5154/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5c0 1.38-1.1 2.5-2.48 2.5S0 4.88 0 3.5 1.1 1 2.5 1s2.48 1.12 2.48 2.5zM0.5 8h4v15h-4V8zM8 8h3.8v2.1h0.1c0.5-1 1.9-2.2 3.9-2.2 4.2 0 5 2.8 5 6.4V23h-4v-7.1c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V23H8V8z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/sharonmaman_avocat/?hl=fr"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm6.25-2.9a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                </svg>
              </Link>
              <Link
                href="mailto:sharonmaman.law@gmail.com"
                aria-label="Email"
                className="text-ink transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v0.2l9 5.4 9-5.4V7H3zm18 10V9.7l-8.5 5.1a1 1 0 0 1-1 0L3 9.7V17h18z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/70">
              Liens légaux
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                href="/mentions-legales"
                className="text-ink transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Mentions légales
              </Link>
              <Link
                href="/confidentialite"
                className="text-ink transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 text-xs uppercase tracking-[0.2em] text-ink/60">
          © {new Date().getFullYear()} Sharon Maman. Tous droits réservés.
        </div>
      </Container>
    </footer>
  );
}
