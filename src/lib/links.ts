/**
 * Destinos externos da página. Centralizados aqui para que a troca antes do
 * lançamento seja de uma linha só, sem caçar href espalhado pelas seções.
 */

/**
 * Âncora da seção de oferta (preço + botão de compra). É para cá que apontam
 * todos os CTAs da página: eles levam o visitante até o preço, e só o botão de
 * dentro do cartão vai para o checkout.
 */
export const OFERTA_ANCHOR = '#oferta';

/** URL do checkout. TODO: substituir pela URL real da plataforma de pagamento. */
export const CHECKOUT_URL = OFERTA_ANCHOR;

/** Vídeo da seção "A experiência" (bucket). Vazio exibe o placeholder. */
export const VIDEO_EXPERIENCIA_URL =
  'https://qfqgnlgfhnqlzgybglel.supabase.co/storage/v1/object/public/files/chaves-da-prosperidade.mp4';

/** Vídeos de depoimento (bucket), em quadro 1:1. */
export const VIDEOS_DEPOIMENTOS = [
  'https://qfqgnlgfhnqlzgybglel.supabase.co/storage/v1/object/public/files/patricia-depoimento01.mp4',
  'https://qfqgnlgfhnqlzgybglel.supabase.co/storage/v1/object/public/files/patricia-depoimento02.mp4',
];

/** Atendimento no WhatsApp. TODO: substituir pelo número real (formato 55DDDNÚMERO). */
export const WHATSAPP_URL =
  'https://wa.me/5500000000000?text=' +
  encodeURIComponent('Olá! Quero saber mais sobre a Comunidade Sementes da Prosperidade.');
