import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <section className="relative min-h-screen bg-white">
      <Image
        src="/images/hero2.jpeg"
        alt="Vue sobre de Paris évoquant un cabinet d'avocat"
        fill
        priority
        className="object-cover object-[center_65%]"
      />
      <div className="absolute inset-0 bg-white/60" aria-hidden="true" />
      <Container className="relative z-10 flex min-h-screen items-center justify-center pt-28 pb-16 md:pt-32">
        <div className="w-full max-w-[720px] space-y-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-ink sm:text-6xl">
            Maître Sharon Maman
          </h1>
          <p className="font-display text-xl font-semibold leading-relaxed text-ink/90 sm:text-2xl">
            Cabinet d'avocat spécialisé en droit des affaires
          </p>
          <p className="font-display text-base italic font-semibold text-ink/80 sm:text-lg">
            L'exigence au service de vos ambitions
          </p>
          <div className="flex justify-center">
            <Button href="/contact" className="tracking-[0.12em]">
              Prendre Rendez-vous
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
