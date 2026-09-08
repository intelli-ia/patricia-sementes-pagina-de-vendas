'use client';

import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItem {
  question: string;
  answer: string;
}

/** Acompanha o `tone` da <Section> que hospeda o acordeão. */
type Tone = 'dark' | 'light';

const TONES = {
  dark: {
    linhas: 'divide-white/10 border-white/10',
    foco: 'focus-visible:ring-primary/50 focus-visible:ring-offset-background',
    perguntaAberta: 'text-white',
    perguntaFechada: 'text-white/80 hover:text-white',
    sinalAberto: 'rotate-[135deg] border-primary/45 bg-primary/15 text-primary-light',
    sinalFechado: 'border-white/15 text-white/50 group-hover:border-white/30',
    resposta: 'text-white/65',
  },
  light: {
    linhas: 'divide-background/15 border-background/15',
    foco: 'focus-visible:ring-background/40 focus-visible:ring-offset-primary',
    perguntaAberta: 'text-background',
    perguntaFechada: 'text-background/70 hover:text-background',
    sinalAberto: 'rotate-[135deg] border-background/45 bg-background/15 text-background',
    sinalFechado: 'border-background/20 text-background/50 group-hover:border-background/40',
    resposta: 'text-background/70',
  },
} satisfies Record<Tone, Record<string, string>>;

export interface AccordionProps {
  items: AccordionItem[];
  /** Índice aberto na carga. `null` abre nenhum. Padrão: 0. */
  defaultOpen?: number | null;
  /** Paleta. Padrão: 'dark'. */
  tone?: Tone;
  className?: string;
}

/**
 * Acordeão de item único.
 *
 * A altura anima por `grid-template-rows: 0fr → 1fr`, então a resposta pode ter
 * qualquer altura sem `max-height` chutado. A resposta permanece no DOM em todos
 * os estados (`visibility` cuida do foco e do leitor de tela), o que mantém o
 * texto das FAQs indexável.
 */
export function Accordion({ items, defaultOpen = 0, tone = 'dark', className }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const uid = useId();
  const t = TONES[tone];

  return (
    <div className={cn('divide-y border-y', t.linhas, className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const buttonId = `${uid}-trigger-${index}`;
        const panelId = `${uid}-panel-${index}`;

        return (
          <div key={item.question} className="group">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className={cn(
                  'flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-300',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4',
                  t.foco,
                  isOpen ? t.perguntaAberta : t.perguntaFechada,
                )}
              >
                <span className="font-display text-[length:clamp(1.0625rem,1.5vw,1.25rem)] font-medium leading-snug tracking-tight">
                  {item.question}
                </span>

                <span
                  aria-hidden
                  className={cn(
                    'mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500',
                    isOpen ? t.sinalAberto : t.sinalFechado,
                  )}
                  style={{ transitionTimingFunction: 'var(--ease-cinematic)' }}
                >
                  <Plus className="h-4 w-4" strokeWidth={1.75} />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                'grid transition-[grid-template-rows,opacity] duration-500',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
              style={{ transitionTimingFunction: 'var(--ease-cinematic)' }}
            >
              <div className={cn('overflow-hidden', !isOpen && 'invisible')}>
                <p
                  className={cn(
                    'max-w-3xl pb-7 pr-10 font-sans text-body font-light leading-relaxed',
                    t.resposta,
                  )}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
