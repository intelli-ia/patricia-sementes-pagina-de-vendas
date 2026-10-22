import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { Badge, ButtonLink, Reveal } from '@/components/ui';
import { CHECKOUT_URL } from '@/lib/links';
import { OfertaCard } from './OfertaCard';

/**
 * TODO: preencher com os valores reais antes do lançamento.
 * Os zeros são placeholders deliberados: mostram a escala tipográfica final sem
 * exibir um preço fictício ao público.
 */
const PRECO = {
  /** Valor de referência (âncora), sem o "R$". Ex.: '1.997'. */
  ancora: '0.000',
  parcelas: 12,
  /** Valor da parcela, sem o "R$". Ex.: '97'. */
  parcela: '000',
  /** Valor à vista, sem o "R$". Ex.: '997'. */
  avista: '0.000',
};

const ENTREGAVEIS: string[] = [
  '1 ano de acesso à comunidade.',
  'Encontros ao vivo.',
  'Aulas interativas.',
  'Desafios semanais de aplicação.',
  'A jornada completa das 8 Sementes da Prosperidade.',
  'Filmes, séries e documentários para ampliar suas referências.',
  'Playlists relacionadas aos temas dos encontros.',
  'Grupo ativo no WhatsApp para troca e acompanhamento entre mulheres.',
];

/**
 * A seção não usa <Section>/<Container>: o ritmo vertical, a largura da coluna
 * e o recuo do cartão são próprios daqui, e é deles que depende a sobreposição
 * da imagem no pé. Passar pelo container padrão desalinharia esse encaixe.
 */
export function Oferta() {
  return (
    <section
      id="oferta"
      className="relative w-full overflow-hidden px-6 pt-24 pb-52 md:pt-36 md:pb-64"
      style={{
        background:
          'radial-gradient(circle at 50% 30%, rgb(var(--color-surface-rgb)) 0%, rgb(var(--color-background-rgb)) 55%, #090a0a 100%)',
      }}
    >
      {/* Malha técnica: ancorada na viewport, fica parada enquanto a página rola */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(255 255 255 / 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.045) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          backgroundAttachment: 'fixed',
        }}
      />
      <div
        aria-hidden
        className="grain pointer-events-none absolute inset-0 z-0 opacity-[0.12] mix-blend-overlay"
      />

      {/* Costura entre a seção anterior e esta */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-white opacity-10" />

      {/* Clareira atrás do cartão: o fundo abre no centro e o cartão passa a
          flutuar sobre a luz, em vez de boiar num chapado. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[18%] h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-primary opacity-[0.16] blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-[880px]">
        {/* ── Manchete ─────────────────────────────── */}
        {/* Fica fora do cartão: é a última fala da seção, e o cartão logo abaixo
            é a resposta a ela. */}
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <Badge>A oferta</Badge>

          <h2 className="mx-auto max-w-[720px] text-balance text-center font-display text-[34px] font-medium leading-[1.1] tracking-tight text-white sm:text-[42px] md:text-[56px]">
            Tudo isso por <span className="text-primary">menos do que você imagina</span>.
          </h2>

          <p className="font-sans text-body font-light leading-relaxed text-white/70">
            Ao entrar na Comunidade Sementes da Prosperidade, você recebe:
          </p>
        </Reveal>

        <div aria-hidden className="mx-auto mt-7 h-px w-[110px] bg-primary opacity-40 md:mt-8" />

        {/* ── Cartão da oferta ─────────────────────── */}
        <Reveal delay={0.14} className="group relative mt-14 md:mt-16">
          {/* Halo que descola o cartão do fundo — adensa no hover */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-1/2 w-full max-w-[572px] -translate-x-1/2 rounded-[2rem] bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20"
          />

          <OfertaCard>
            {/* ── Entregas ───────────────────────────── */}
            {/* Coluna única: a lista é a espinha do cartão, e duas colunas
                quebrariam a leitura de cima a baixo que desemboca no preço. */}
            <ul className="relative mx-auto max-w-[480px] space-y-1">
              {ENTREGAVEIS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 rounded-lg border border-transparent px-4 py-1.5"
                >
                  {/* Selo cheio: o verde vazado sobre a superfície do cartão
                      quase some, e preenchido ele ainda lê como luz. */}
                  <span
                    aria-hidden
                    className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-primary text-background"
                  >
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="font-sans text-[15px] font-light leading-snug text-white md:text-[17px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* ── Preço ──────────────────────────────── */}
            <div className="relative mt-7 border-t border-white/10 pt-7 text-center md:mt-8 md:pt-8">
              <p className="font-sans text-base font-light text-white/60 md:text-lg">
                De <s className="decoration-primary/60 decoration-1">R$ {PRECO.ancora}</s> por
                apenas:
              </p>

              <p className="mt-3 font-display text-[22px] font-medium leading-none tracking-tight md:text-[30px]">
                <span className="text-sheen">{PRECO.parcelas}x de</span>
              </p>
              {/* O corpo cai no menor mobile só para o preço caber em uma linha:
                  quebrado em duas ele deixa de ler como preço. */}
              <p className="mt-1.5 font-display text-[40px] font-medium leading-none tracking-tight min-[380px]:text-[48px] sm:text-[56px] md:text-[72px]">
                <span className="text-sheen">R$ {PRECO.parcela}</span>
              </p>

              <p className="mt-3 font-sans text-base font-light text-white/60 md:text-lg">
                ou <span className="font-semibold text-white">R$ {PRECO.avista}</span> à vista
              </p>

              <ButtonLink
                href={CHECKOUT_URL}
                size="compact"
                className="mt-7 w-full max-w-[420px] whitespace-normal px-8 py-4 text-sm uppercase tracking-wide md:py-5 md:text-base"
              >
                Quero entrar na Comunidade Sementes da Prosperidade
                <ArrowRight
                  className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </ButtonLink>

              <p className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-sans text-xs font-light text-white/45">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck
                    className="h-3.5 w-3.5 text-primary/70"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  Compra segura
                </span>
              </p>
            </div>
          </OfertaCard>
        </Reveal>
      </div>

      {/* ── Patrícia ─────────────────────────────── */}
      {/* Filha direta da <section>, não do cartão: é o que permite colar no pé
          da seção e passar por cima de todo o resto. Dentro da coluna ela
          herdaria o empilhamento de lá e o `bottom` mediria a partir do cartão.
          O `pb` generoso do cartão é a sobra que ela ocupa. */}
      {/* No mobile a calha lateral zera e a foto ainda sangra 10% para fora, o
          que a `overflow-hidden` da seção apara dos dois lados. É sangria de
          verdade: o alfa do PNG mostra conteúdo até ~0,5% da borda, então não
          existe margem transparente de graça — o que cresce sai pela lateral,
          nas quinas dos painéis externos. Do md para cima a calha volta, a
          sangria some e o teto de 820px reassume.

          O teto de 540px vale para toda a faixa abaixo do md por causa do
          cartão: ali ele ainda usa `pb-48`, e não `pb-[21rem]`. A sobra no pé
          cai de 592px para ~400px, e sem esse teto a foto subiria por cima da
          linha "Compra segura" entre 640 e 767px de viewport. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex justify-center px-0 md:px-6">
        <Image
          src="/patricia-oferta.webp"
          alt="Patrícia em três retratos, de blazer claro, sorrindo e olhando para a câmera"
          width={1450}
          height={999}
          sizes="(max-width: 767px) 125vw, 820px"
          draggable={false}
          className="block h-auto w-[125%] max-w-[540px] shrink-0 select-none md:w-full md:max-w-[820px]"
        />
      </div>
    </section>
  );
}

export default Oferta;
