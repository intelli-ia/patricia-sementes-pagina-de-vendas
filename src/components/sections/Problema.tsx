import { BookOpen, Flame, Lock, type LucideIcon } from 'lucide-react';
import { CinematicLight } from '@/components/effects';
import { IconBadge, Reveal, Section } from '@/components/ui';

interface Problema {
  icon: LucideIcon;
  titulo: string;
  descricao: string;
}

const PROBLEMAS: Problema[] = [
  {
    icon: BookOpen,
    titulo: 'O excesso de conteúdo',
    descricao:
      'Você aprende, salva, anota e acumula novas ideias, mas continua sem um espaço que ajude você a transformar esse conhecimento em prática.',
  },
  {
    icon: Flame,
    titulo: 'A motivação passageira',
    descricao:
      'A aula emociona, a palestra inspira e o curso parece abrir novas possibilidades. Porém, quando a empolgação diminui, você volta a enfrentar sozinha os mesmos medos, dúvidas e adiamentos.',
  },
  {
    icon: Lock,
    titulo: 'A aplicação solitária',
    descricao:
      'Você pode saber o que precisa fazer e, ainda assim, travar quando chega a hora de se posicionar, cobrar, aparecer, escolher ou sustentar uma mudança diante das pessoas e da própria rotina.',
  },
];

export function Problema() {
  return (
    <Section id="problema">
      {/* Atmosfera: luz volumétrica quebrando a borda direita, atrás do último card */}
      <CinematicLight
        position="custom"
        blur="mid"
        opacity={20}
        blend="dodge"
        className="-right-28 top-1/2 h-[28rem] w-[28rem] -translate-y-1/3 md:-right-40 md:h-[40rem] md:w-[40rem]"
      />

      {/* ── Bloco narrativo ──────────────────────────────────────────── */}
      <Reveal className="mx-auto flex max-w-3xl flex-col gap-6 text-center">
        <p className="font-display text-h3 font-medium leading-snug text-white">
          Você assiste a cursos, anota, se empolga… mas, quando chega a hora de colocar tudo em
          prática, a sua vida continua praticamente no mesmo lugar?
        </p>

        <p className="font-sans text-body font-light leading-relaxed text-white/70">
          O mercado está cheio de cursos gravados, mentorias, palestras e conteúdos que ensinam o
          que pensar, o que fazer e até quem você deveria se tornar. Mas quase ninguém acompanha
          você no momento em que o conteúdo termina e começa a parte mais difícil: transformar uma
          nova consciência em escolhas concretas.
        </p>

        <p className="font-sans text-body font-light leading-relaxed text-white/70">
          Você já terminou um curso sentindo que finalmente entendeu o que precisava mudar, mas
          percebeu, algumas semanas depois, que continuava adiando aquela decisão, escondendo o seu
          trabalho, aceitando menos do que gostaria ou repetindo comportamentos que já não
          combinavam com a vida que deseja construir?
        </p>

        {/* Ponte para o grid — papel do H2 centralizado da referência */}
        <h2 className="mt-4 text-balance font-display text-h2 font-medium leading-[1.2] tracking-tight text-white">
          O problema não é a sua falta de{' '}
          <span className="text-primary">conhecimento</span>. O problema é que:
        </h2>
      </Reveal>

      {/* ── Grid: elementos flutuam direto no fundo, sem container ───── */}
      <Reveal
        stagger={0.1}
        className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:gap-12 lg:grid-cols-3"
      >
        {PROBLEMAS.map(({ icon, titulo, descricao }) => (
          <div key={titulo} className="flex flex-col items-start gap-4 text-left">
            <IconBadge icon={icon} />
            <h3 className="font-display text-h3 font-semibold leading-snug tracking-tight text-white">
              {titulo}
            </h3>
            <p className="font-sans text-body font-light leading-relaxed text-white/70">
              {descricao}
            </p>
          </div>
        ))}
      </Reveal>

      {/* ── Fechamento ───────────────────────────────────────────────── */}
      <Reveal delay={0.15} className="mt-16 md:mt-20">
        <p className="mx-auto max-w-2xl text-balance text-center font-display text-[length:clamp(1.0625rem,1.4vw,1.375rem)] font-normal leading-relaxed text-white/80">
          Não adianta ter uma biblioteca inteira de cursos se aquilo que você aprende não encontra
          espaço para se transformar em escolha, ação e uma nova forma de viver.
        </p>
      </Reveal>
    </Section>
  );
}

export default Problema;
