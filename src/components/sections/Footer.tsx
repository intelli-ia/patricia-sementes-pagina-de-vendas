import Link from 'next/link';
import { Container } from '@/components/ui';

const ANO = new Date().getFullYear();

/**
 * Rodapé mínimo. TODO: preencher razão social/CNPJ antes de publicar (os dados
 * das páginas legais ficam em `lib/legal.ts`).
 */
export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="font-sans text-xs font-light text-white/40">
          © {ANO} Comunidade Sementes da Prosperidade · Patrícia Souza. Todos os direitos
          reservados.
        </p>

        <nav aria-label="Links legais" className="flex items-center gap-6">
          <Link
            href="/termos-de-uso"
            className="font-sans text-xs font-light text-white/40 transition-colors duration-300 hover:text-white/70"
          >
            Termos de uso
          </Link>
          <Link
            href="/politica-de-privacidade"
            className="font-sans text-xs font-light text-white/40 transition-colors duration-300 hover:text-white/70"
          >
            Política de privacidade
          </Link>
        </nav>
      </Container>
    </footer>
  );
}

export default Footer;
