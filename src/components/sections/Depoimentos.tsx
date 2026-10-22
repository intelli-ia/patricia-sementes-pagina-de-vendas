import { Badge, Reveal, Section } from '@/components/ui';
import { VideoPlayer } from '@/components/ui/VideoPlayer';
import { VIDEOS_DEPOIMENTOS } from '@/lib/links';

/**
 * DOBRA 5 — Depoimentos.
 *
 * Dois depoimentos em vídeo, em quadro 4:5 (o vídeo é 1:1; o frame mais alto recorta as laterais). As URLs ficam em `lib/links.ts`.
 */
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

      <Reveal
        stagger={0.1}
        className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2"
      >
        {VIDEOS_DEPOIMENTOS.map((src) => (
          <VideoPlayer
            key={src}
            src={src}
            label="Assista"
            className="aspect-[4/5] w-full rounded-2xl bg-background shadow-2xl"
          />
        ))}
      </Reveal>
    </Section>
  );
}

export default Depoimentos;
