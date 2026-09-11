import { ArrowRight, ShieldCheck } from 'lucide-react';
import { CinematicLight } from '@/components/effects';
import { ButtonLink, Reveal, Section } from '@/components/ui';
import { OFERTA_ANCHOR } from '@/lib/links';

export function CtaFinal() {
  return (
    <Section
      id="cta-final"
      rhythm={false}
      className="flex min-h-[70svh] items-center py-24 md:min-h-[80svh] md:py-32"
    >
      {/* Fechamento cinematográfico: três fontes de luz convergindo no centro. */}
      <CinematicLight position="top" blur="wide" opacity={30} blend="dodge" drift />
      <CinematicLight
        position="custom"
        blur="wide"
        opacity={20}
        blend="dodge"
        className="-bottom-56 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 md:h-[52rem] md:w-[52rem]"
      />

      <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Linha-semente: filete vertical que desce até o título, fechando a
            metáfora de raiz aberta na dobra 3. */}
        <span
          aria-hidden
          className="mb-10 h-20 w-px bg-gradient-to-b from-transparent via-primary/45 to-primary/70 md:h-28"
        />

        <h2 className="text-balance font-display text-[length:clamp(2rem,4.6vw,4rem)] font-medium leading-[1.1] tracking-tight text-white">
          A próxima história começa com uma <span className="text-primary">escolha</span>.
        </h2>

        <ButtonLink
          href={OFERTA_ANCHOR}
          size="compact"
          className="mt-10 w-full max-w-md whitespace-normal uppercase tracking-wide sm:w-auto sm:max-w-none sm:whitespace-nowrap"
        >
          Quero entrar na Comunidade Sementes da Prosperidade
          <ArrowRight
            className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </ButtonLink>

        <p className="mt-6 inline-flex items-center gap-2 font-sans text-xs font-light text-white/45">
          <ShieldCheck className="h-3.5 w-3.5 text-primary/70" strokeWidth={1.75} aria-hidden />
          Compra segura · 15 dias de garantia
        </p>
      </Reveal>
    </Section>
  );
}

export default CtaFinal;
