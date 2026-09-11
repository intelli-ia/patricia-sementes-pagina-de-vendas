import { ArrowRight, MessageCircle } from 'lucide-react';
import { Accordion, Badge, ButtonLink, Reveal, Section, type AccordionItem } from '@/components/ui';
import { OFERTA_ANCHOR, WHATSAPP_URL } from '@/lib/links';

const PERGUNTAS: AccordionItem[] = [
  {
    question: 'A Comunidade Sementes da Prosperidade é um curso?',
    answer:
      'Não. A comunidade tem encontros e conteúdos, mas sua proposta vai além de assistir a aulas. Você também participa de desafios, amplia suas referências e compartilha seus movimentos com outras mulheres.',
  },
  {
    question: 'Preciso ter muito tempo disponível para participar?',
    answer:
      'Não. Existe um encontro ao vivo por mês e desafios semanais pensados para serem levados à vida real. Você não precisa esperar um período perfeito ou concluir toda a metodologia para começar.',
  },
  {
    question: 'Como funcionam os encontros e os desafios?',
    answer:
      'A cada encontro, um tema relacionado às 8 Sementes é trabalhado. Depois, os desafios ajudam você a observar como esse tema aparece na sua vida e a experimentar novas escolhas na prática.',
  },
  {
    question: 'A comunidade fala apenas sobre dinheiro?',
    answer:
      'Não. O dinheiro é uma das dimensões da prosperidade, mas a comunidade também trabalha história, padrões, merecimento, ambiente, comportamento, espiritualidade, liderança e legado.',
  },
  {
    question: 'A comunidade emite certificado?',
    answer:
      'Não. A Comunidade Sementes da Prosperidade não é uma formação credencialista. Seu foco é o desenvolvimento, a aplicação e a construção de novos movimentos na vida real.',
  },
  {
    question: 'Por quanto tempo terei acesso?',
    answer: 'O acesso à comunidade é de 1 ano.',
  },
  {
    question: 'E se eu entrar e perceber que a comunidade não é para mim?',
    answer:
      'Você conta com 15 dias de garantia para conhecer a proposta e solicitar o cancelamento, conforme as condições da compra.',
  },
];

export function Faq() {
  return (
    // Mesma inversão dos Depoimentos: verde como superfície, texto quase-preto.
    <Section id="faq" tone="light">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal className="align-editorial flex flex-col items-center md:items-start">
          <div className="lg:sticky lg:top-24 flex flex-col items-center md:items-start">
            <Badge tone="light">Dúvidas</Badge>
            <h2 className="mt-6 text-balance font-display text-h2 font-medium leading-[1.2] tracking-tight text-background/65">
              Perguntas <span className="text-background">frequentes</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion items={PERGUNTAS} defaultOpen={null} tone="light" />
        </Reveal>
      </div>

      {/* ── Ainda tem dúvidas? ───────────────────────────────────────── */}
      <Reveal delay={0.1} className="mt-16 md:mt-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-background px-6 py-10 text-center shadow-[0_40px_90px_-40px_rgb(15_15_15/0.6)] md:px-12 md:py-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(110% 80% at 50% 100%, rgb(var(--color-primary-rgb) / 0.12) 0%, transparent 60%)',
            }}
          />

          <div className="relative flex flex-col items-center">
            <h3 className="font-display text-h3 font-medium tracking-tight text-white">
              Ainda tem dúvidas?
            </h3>

            <p className="mt-3 max-w-xl font-sans text-body font-light leading-relaxed text-white/65">
              Fale com a equipe e conheça melhor a Comunidade Sementes da Prosperidade.
            </p>

            <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
              <ButtonLink
                href={WHATSAPP_URL}
                variant="ghost"
                size="compact"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full uppercase tracking-wide sm:w-auto"
              >
                <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden />
                Falar com a equipe
              </ButtonLink>

              <ButtonLink
                href={OFERTA_ANCHOR}
                size="compact"
                className="w-full whitespace-normal uppercase tracking-wide sm:w-auto sm:whitespace-nowrap"
              >
                Quero começar a construir uma nova história
                <ArrowRight
                  className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export default Faq;
