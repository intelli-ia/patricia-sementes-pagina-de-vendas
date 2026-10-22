import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui';
import { Footer } from './Footer';

export interface LegalSection {
  titulo: string;
  /** Cada item vira um parágrafo. */
  paragrafos: string[];
  /** Lista opcional, exibida depois dos parágrafos. */
  itens?: string[];
}

export interface LegalPageProps {
  titulo: string;
  /** Ex.: '21 de outubro de 2026'. */
  atualizadoEm: string;
  intro: string;
  secoes: LegalSection[];
}

/** Casca das páginas legais: título, texto corrido numerado e o rodapé da página. */
export function LegalPage({ titulo, atualizadoEm, intro, secoes }: LegalPageProps) {
  return (
    <>
      <main className="relative py-16 md:py-24">
        <Container className="max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-sans text-xs font-light uppercase tracking-wider text-white/50 transition-colors duration-300 hover:text-white/80"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            Voltar para a página inicial
          </Link>

          <h1 className="mt-10 text-balance font-display text-[length:clamp(2rem,4vw,3.25rem)] font-medium leading-[1.15] tracking-tight text-white">
            {titulo}
          </h1>
          <p className="mt-3 font-sans text-xs font-light text-white/45">
            Última atualização: {atualizadoEm}
          </p>

          <p className="mt-8 font-sans text-body font-light leading-relaxed text-white/70">
            {intro}
          </p>

          {secoes.map((secao, index) => (
            <section key={secao.titulo} className="mt-12">
              <h2 className="font-display text-h3 font-medium leading-snug tracking-tight text-white">
                {index + 1}. {secao.titulo}
              </h2>

              <div className="mt-4 flex flex-col gap-4">
                {secao.paragrafos.map((paragrafo) => (
                  <p
                    key={paragrafo.slice(0, 40)}
                    className="font-sans text-body font-light leading-relaxed text-white/70"
                  >
                    {paragrafo}
                  </p>
                ))}

                {secao.itens && (
                  <ul className="flex list-disc flex-col gap-2 pl-6 font-sans text-body font-light leading-relaxed text-white/70 marker:text-primary/70">
                    {secao.itens.map((item) => (
                      <li key={item.slice(0, 40)}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default LegalPage;
