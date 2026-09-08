import {
  CtaFinal,
  Depoimentos,
  Faq,
  Footer,
  Hero,
  Mecanismo,
  Oferta,
  Problema,
  Sobre,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <main className="relative">
        <Hero />
        <Problema />
        <Mecanismo />
        {/* TODO — Dobra 4: a copy ainda não foi enviada. Entra aqui. */}
        <Depoimentos />
        <Oferta />
        <Sobre />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
