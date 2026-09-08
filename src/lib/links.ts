/**
 * Destinos externos da página. Centralizados aqui para que a troca antes do
 * lançamento seja de uma linha só, sem caçar href espalhado pelas seções.
 */

/** URL do checkout. TODO: substituir pela URL real da plataforma de pagamento. */
export const CHECKOUT_URL = '#oferta';

/** Atendimento no WhatsApp. TODO: substituir pelo número real (formato 55DDDNÚMERO). */
export const WHATSAPP_URL =
  'https://wa.me/5500000000000?text=' +
  encodeURIComponent('Olá! Quero saber mais sobre a Comunidade Sementes da Prosperidade.');
