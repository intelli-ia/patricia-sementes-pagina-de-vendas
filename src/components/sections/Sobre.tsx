import Image from 'next/image';
import { CinematicLight } from '@/components/effects';
import { Reveal, Section } from '@/components/ui';

const PARAGRAFOS: string[] = [
  'Patrícia é psicoterapeuta e atua com mulheres em consultório, palestras e treinamentos. Ao acompanhar de perto diferentes histórias, percebeu que muitas dificuldades de realização não estão ligadas apenas à falta de conhecimento ou capacidade. Muitas vezes, padrões emocionais, experiências, crenças e a forma como cada mulher aprendeu a enxergar a si mesma continuam influenciando suas escolhas.',
  'Foi a partir desse olhar que nasceu a Comunidade Sementes da Prosperidade. Uma experiência criada para ajudar mulheres a compreender o que existe por trás de alguns dos seus bloqueios, ampliar suas referências e transformar essa consciência em novas formas de pensar, escolher e agir.',
  'Na comunidade, Patrícia reúne reflexão, aplicação e troca para que cada participante possa olhar para a própria história com mais clareza e começar a construir uma prosperidade coerente com a vida que deseja viver e com o legado que deseja deixar.',
];

export function Sobre() {
  return (
    <Section id="sobre">
      <CinematicLight
        position="custom"
        blur="wide"
        opacity={25}
        blend="dodge"
        className="-left-32 top-1/4 h-[32rem] w-[32rem] md:-left-40 md:h-[44rem] md:w-[44rem]"
      />

      {/* Título, retrato e texto em uma única coluna centralizada. */}
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Reveal delay={0.1}>
          <h2 className="text-balance font-display text-[length:clamp(1.75rem,3vw,2.75rem)] font-medium leading-[1.15] tracking-tight text-white">
            Quem conduz a Comunidade <span className="text-primary">Sementes da Prosperidade</span>
          </h2>
        </Reveal>

        {/* ── Retrato ──────────────────────────────────────────────────
            Emoldurado, não sangrado: diferencia do Hero e mantém o rosto
            como objeto editorial dentro da composição.                    */}
        <Reveal className="relative mx-auto mt-10 w-full max-w-md md:mt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-[80px]"
            style={{
              background:
                'radial-gradient(circle at 40% 30%, rgb(var(--color-primary-rgb) / 0.28) 0%, transparent 65%)',
            }}
          />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08)]">
            {/* `object-top`: a foto é 2:3 e a moldura é 4:5, então sobram ~17%
                de altura para cortar. Ancorando no topo, o corte inteiro sai da
                barra inferior — onde já entra o gradiente e a legenda. */}
            <Image
              src="/patricia-sobre.webp"
              alt="Patrícia Souza sentada, de blazer claro, sorrindo para a câmera"
              fill
              sizes="(min-width: 512px) 448px, 90vw"
              className="object-cover object-top"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/45 to-transparent"
            />

            <div className="absolute inset-x-6 bottom-6 flex flex-col">
              <span className="font-display text-lg font-medium tracking-tight text-white">
                Patrícia Souza
              </span>
              <span className="font-sans text-xs font-light uppercase tracking-[0.16em] text-primary-light/80">
                Psicoterapeuta
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} stagger={0.1} className="mt-10 flex flex-col gap-5 md:mt-12">
          {PARAGRAFOS.map((paragrafo) => (
            <p
              key={paragrafo.slice(0, 40)}
              className="font-sans text-body font-light leading-relaxed text-white/70"
            >
              {paragrafo}
            </p>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}

export default Sobre;
