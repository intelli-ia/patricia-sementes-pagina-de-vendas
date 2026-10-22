import { Play } from 'lucide-react';
import { CinematicLight } from '@/components/effects';
import { Badge, Container, Reveal, Section } from '@/components/ui';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { VideoPlayer } from '@/components/ui/VideoPlayer';
import { type GalleryItem } from '@/components/ui/circular-gallery-2';
import { VIDEO_EXPERIENCIA_URL } from '@/lib/links';
import { SEMENTES } from '@/lib/sementes';
import { SementesGallery } from './SementesGallery';

interface Pilar {
  titulo: string;
  descricao: string;
}

const PILARES: Pilar[] = [
  {
    titulo: 'Reconhecer o que influencia as suas escolhas',
    descricao:
      'Entender como sua história e suas crenças moldam sua relação com a prosperidade.',
  },
  {
    titulo: 'Transformar consciência em movimento',
    descricao:
      'Sair da percepção e experimentar novas respostas na vida real.',
  },
  {
    titulo: 'Construir novas referências sobre si mesma',
    descricao:
      'Cada novo passo fortalece a confiança para seguir avançando.',
  },
];

/**
 * Itens da galeria WebGL. Construído no escopo do módulo: o array entra na
 * lista de dependências do useEffect do CircularGallery, então recriá-lo a cada
 * render destruiria e remontaria a cena inteira.
 */
const ITENS: GalleryItem[] = SEMENTES.map((semente, index) => ({
  image: `/sementes/${String(index + 1).padStart(2, '0')}.webp`,
  text: semente.titulo,
}));

/**
 * DOBRA 3 — a experiência, em dois blocos.
 *
 * O claro apresenta a proposta e os três movimentos. O escuro recebe as 8
 * Sementes: as capas são lâminas quase pretas, e voltar ao fundo escuro devolve
 * a elas o contraste para o qual foram desenhadas — o verde dos emblemas volta
 * a ler como luz, não como desenho sobre uma mesa clara.
 */
export function Mecanismo() {
  return (
    <>
      {/* ── A experiência (claro) ─────────────────────────────────────
          Verde como superfície, texto quase-preto. Sem CinematicLight:
          verde como luz sobre fundo verde não existe. */}
      <Section id="mecanismo" contained={false} tone="light">
        <Container>
          <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <Badge tone="light">A experiência</Badge>

            <h2 className="text-balance font-display text-[length:clamp(1.875rem,3.4vw,3.25rem)] font-medium leading-[1.15] tracking-tight text-background/65">
              Comece a construir prosperidade a partir das{' '}
              <span className="text-background">raízes</span> que sustentam as suas escolhas.
            </h2>

            <div className="mt-2 aspect-[9/16] w-full max-w-[min(22rem,calc(80svh*9/16))] overflow-hidden rounded-2xl bg-background shadow-2xl">
              {VIDEO_EXPERIENCIA_URL ? (
                <VideoPlayer
                  src={VIDEO_EXPERIENCIA_URL}
                  label="Assista"
                  className="h-full w-full"
                />
              ) : (
                <div className="relative h-full w-full">
                  <ImagePlaceholder label="Vídeo da experiência" />
                  <Play
                    className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-[calc(50%+2.25rem)] text-white/60"
                    strokeWidth={1.25}
                    aria-hidden
                  />
                </div>
              )}
            </div>
          </Reveal>

          {/* ── Os três movimentos ───────────────────────────────────── */}
          <Reveal delay={0.1} className="mx-auto mt-16 max-w-3xl md:mt-20">
            <p className="text-balance text-center font-display text-[length:clamp(1.0625rem,1.6vw,1.5rem)] font-normal leading-snug text-background/80">
              A partir dos encontros, das provocações e da troca com outras mulheres, você será
              convidada a:
            </p>
          </Reveal>

          <Reveal
            as="ol"
            stagger={0.12}
            className="mx-auto mt-10 max-w-5xl border-t border-background/15 md:mt-12"
          >
            {PILARES.map((pilar, index) => (
              <li
                key={pilar.titulo}
                className="grid grid-cols-1 gap-3 border-b border-background/15 py-8 text-center md:grid-cols-[6rem_1fr] md:gap-10 md:py-10 md:text-left"
              >
                <span
                  aria-hidden
                  className="font-display text-[length:clamp(1.75rem,3.6vw,3rem)] font-medium leading-none text-background/35"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div>
                  <h3 className="font-display text-h3 font-medium leading-snug tracking-tight text-background">
                    {pilar.titulo}
                  </h3>
                  <p className="mx-auto mt-3 max-w-2xl font-sans md:mx-0 text-body font-light leading-relaxed text-background/70">
                    {pilar.descricao}
                  </p>
                </div>
              </li>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* ── As 8 Sementes (escuro) ────────────────────────────────────
          Bloco próprio: a virada de fundo é o que separa "o que é a
          experiência" de "como ela se organiza". */}
      <Section id="sementes" contained={false}>
        <CinematicLight position="top" blur="wide" opacity={20} blend="dodge" drift />
        <CinematicLight
          position="custom"
          blur="wide"
          opacity={20}
          blend="dodge"
          className="-left-40 top-2/3 h-[34rem] w-[34rem] md:h-[46rem] md:w-[46rem]"
        />

        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance font-display text-h2 font-medium leading-[1.2] tracking-tight text-white">
              As <span className="text-primary">8 Sementes da Prosperidade</span> organizam essa
              jornada.
            </h2>
          </Reveal>
        </Container>

        {/* Full bleed: o arco precisa da largura inteira da viewport para existir. */}
        <div className="relative mt-12 h-[560px] w-full sm:h-[620px] md:mt-16 md:h-[700px]">
          <SementesGallery items={ITENS} />
        </div>

        {/* A galeria é <canvas>: o texto dentro dela não existe para o Google nem
            para leitores de tela. Esta lista carrega a mesma copy em DOM real. */}
        <ul className="sr-only">
          {SEMENTES.map((semente) => (
            <li key={semente.titulo}>
              <strong>{semente.titulo}</strong> — {semente.descricao}
            </li>
          ))}
        </ul>

        <Container className="mt-16 md:mt-20">
          <Reveal>
            <p className="mx-auto max-w-2xl text-balance text-center font-display text-[length:clamp(1.0625rem,1.4vw,1.375rem)] font-normal leading-relaxed text-white/80">
              Toda a experiência é atravessada por encontros ao vivo, desafios semanais, referências
              de filmes, séries e documentários, playlists e a troca entre mulheres que também estão
              construindo novos movimentos.
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

export default Mecanismo;
