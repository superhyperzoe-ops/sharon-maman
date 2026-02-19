"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data?.error || "Une erreur est survenue.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Une erreur est survenue."
      );
    }
  }

  return (
    <div className="bg-white text-ink">
      <Section className="pt-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-stretch">
            <div className="flex h-full flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.3em] text-ink/70">
                Contact
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Parlons de votre situation.
              </h1>
              <p className="text-base leading-relaxed text-ink/80">
                Le cabinet vous contactera dans les plus brefs délais.
              </p>
              <Card className="space-y-3 !bg-accent/10 !border-accent/10">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink">
                  Coordonnées
                </h2>
                <p className="text-sm text-ink/80">
                  16 rue Washington - 75008 Paris
                  <br />
                  +33 6 35 41 74 67
                  <br />
                  <a
                    href="mailto:sharonmaman.law@gmail.com"
                    className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    sharonmaman.law@gmail.com
                  </a>
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-ink/60">
                  Du lundi au vendredi, de 9h à 20h, sur rendez-vous uniquement
                </p>
              </Card>
              <div className="flex-1 pb-6">
                <div className="h-full border border-sand bg-white">
                  <Image
                    src="/paris.jpg"
                    alt="Localisation du cabinet"
                    width={1200}
                    height={800}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    quality={70}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <Card className="h-full">
              <form className="flex h-full flex-col gap-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label
                    htmlFor="nom"
                    className="text-xs uppercase tracking-[0.2em] text-ink/70"
                  >
                    Nom complet
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    placeholder="Votre nom"
                    required
                    className="w-full border border-sand bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="entreprise"
                    className="text-xs uppercase tracking-[0.2em] text-ink/70"
                  >
                    Entreprise
                  </label>
                  <input
                    id="entreprise"
                    name="entreprise"
                    type="text"
                    placeholder="Nom de l’entreprise"
                    className="w-full border border-sand bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-[0.2em] text-ink/70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="nom@domaine.fr"
                    required
                    className="w-full border border-sand bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="telephone"
                    className="text-xs uppercase tracking-[0.2em] text-ink/70"
                  >
                    Téléphone
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    placeholder="+33 6 35 41 74 67"
                    className="w-full border border-sand bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  />
                </div>
                <div className="flex min-h-0 flex-1 flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs uppercase tracking-[0.2em] text-ink/70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Expliquez votre besoin en quelques lignes."
                    required
                    className="min-h-[180px] w-full flex-1 border border-sand bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  />
                </div>
                {status === "success" && (
                  <div
                    role="status"
                    className="rounded-sm border border-accent/30 bg-accent/10 px-3 py-2 text-sm text-accent"
                  >
                    Votre message a bien été envoyé.
                  </div>
                )}
                {status === "error" && (
                  <div className="rounded-sm border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                    {errorMessage}
                  </div>
                )}
                <Button type="submit" className="mt-auto" disabled={status === "loading"}>
                  {status === "loading" ? "Envoi..." : "Envoyer"}
                </Button>
              </form>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
