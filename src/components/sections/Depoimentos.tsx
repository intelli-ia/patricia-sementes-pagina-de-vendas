import { Play, Quote } from 'lucide-react';
import { Badge, ImagePlaceholder, Reveal, Section } from '@/components/ui';

/**
 * DOBRA 5 — Depoimentos.
 *
 * A copy ainda não definiu se os depoimentos serão em texto ou em vídeo, então
 * a seção suporta os dois formatos no mesmo grid: preencher `video` transforma
 * o card em player; deixá-lo vazio mantém o card de citação.
 *
 * TODO: substituir os textos abaixo pelos depoimentos reais. Eles estão
 * propositalmente marcados como espaço reservado — depoimento inventado em
 * página de vendas é problema jurídico, não decisão de design.
 */
interface Depoimento {
  /** Texto do depoimento (card de citação). */
  citacao: string;
  nome: string;
  contexto: string;
  /** Preenchido = card de vídeo. Ex.: 'https://player.vimeo.com/video/...'. */
  video?: string;
}

const DEPOIMENTOS: Depoimento[] = [
  {
    citacao:
      'Espaço reservado para o depoimento da participante. Substitua por um trecho real de duas a quatro linhas, que descreva a mudança concreta vivida durante a jornada.',
    nome: 'Nome da participante',
    contexto: 'Cidade · Estado',
  },
  {
    citacao:
      'Espaço reservado para o depoimento da participante. Depoimentos que citam uma escolha específica — uma conversa, um limite, um preço cobrado — convertem mais do que elogios genéricos.',
    nome: 'Nome da participante',
    contexto: 'Cidade · Estado',
  },
  {
    citacao:
      'Espaço reservado para o depoimento da participante. Se houver depoimento em vídeo, basta preencher o campo de vídeo deste item e o card assume o formato de player.',
    nome: 'Nome da participante',
    contexto: 'Cidade · Estado',
  },
];

function DepoimentoCard({ citacao, nome, contexto, video }: Depoimento) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-background/15 bg-background/[0.06] transition-all duration-500 ease-out hover:border-background/35">
      {video ? (
        <div className="relative aspect-video shrink-0 overflow-hidden">
          {/* Substituir por <iframe src={video} … /> ou <video poster=… /> */}
          <ImagePlaceholder className="absolute inset-0" label="Depoimento em vídeo" />
          <span
            aria-hidden
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-background/75 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
              <Play className="ml-0.5 h-5 w-5 fill-primary text-primary" aria-hidden />
            </span>
          </span>
        </div>
      ) : (
        <Quote
          className="ml-7 mt-7 h-7 w-7 shrink-0 text-background/35"
          strokeWidth={1.5}
          aria-hidden
        />
      )}

      <div className="flex flex-1 flex-col p-7">
        <p className="flex-1 font-sans text-body font-light leading-relaxed text-background/75">
          {citacao}
        </p>

        <div className="mt-7 flex items-center gap-3 border-t border-background/15 pt-5">
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <ImagePlaceholder className="absolute inset-0" label="" />
          </span>
          <span className="flex flex-col">
            <span className="font-display text-sm font-medium text-background">{nome}</span>
            <span className="font-sans text-xs font-light text-background/55">{contexto}</span>
          </span>
        </div>
      </div>
    </article>
  );
}

export function Depoimentos() {
  return (
    // Seção invertida: o verde vira superfície e o texto, o quase-preto. Sem
    // CinematicLight — verde como luz sobre fundo verde não existe.
    <Section id="depoimentos" tone="light">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <Badge tone="light">Depoimentos</Badge>

        <h2 className="text-balance font-display text-h2 font-medium leading-[1.2] tracking-tight text-background/65">
          Mulheres que já estão construindo{' '}
          <span className="text-background">novos movimentos</span>.
        </h2>
      </Reveal>

      <Reveal stagger={0.1} className="mt-12 grid grid-cols-1 gap-6 md:mt-16 lg:grid-cols-3">
        {DEPOIMENTOS.map((depoimento) => (
          <DepoimentoCard key={depoimento.citacao} {...depoimento} />
        ))}
      </Reveal>
    </Section>
  );
}

export default Depoimentos;
