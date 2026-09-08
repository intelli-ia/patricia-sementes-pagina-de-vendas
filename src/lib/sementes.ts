export interface Semente {
  titulo: string;
  descricao: string;
}

/**
 * Fonte única da copy das 8 Sementes.
 *
 * Consumida em dois lugares: a seção Mecanismo (título como legenda da galeria,
 * copy completa na lista acessível) e `scripts/gerar-capas.mjs`, que desenha a
 * descrição dentro de cada capa. Editar aqui e rodar `node scripts/gerar-capas.mjs`
 * mantém imagem e DOM dizendo a mesma coisa.
 */
export const SEMENTES: Semente[] = [
  {
    titulo: 'O Despertar',
    descricao:
      'Você começa reconhecendo padrões, crenças e heranças emocionais que podem continuar influenciando suas escolhas.',
  },
  {
    titulo: 'A Travessia',
    descricao:
      'Você olha para o lugar que ocupa hoje e começa a fazer escolhas mais coerentes com a mulher que deseja se tornar.',
  },
  {
    titulo: 'O Poder do Merecimento',
    descricao:
      'Você fortalece a percepção do seu valor e abre espaço para crescer, receber e expandir sem precisar diminuir a si mesma.',
  },
  {
    titulo: 'Seu Ecossistema',
    descricao:
      'Você observa como os ambientes, as relações e as referências ao seu redor podem favorecer ou dificultar a prosperidade que deseja construir.',
  },
  {
    titulo: 'Mulheres, Prosperidade e Dinheiro',
    descricao:
      'Você amplia a compreensão sobre a relação emocional, histórica e prática que desenvolveu com o dinheiro e com as possibilidades de prosperar.',
  },
  {
    titulo: 'Ressignifique Sua Jornada',
    descricao:
      'Você começa a construir comportamentos e hábitos capazes de sustentar novas escolhas ao longo do tempo.',
  },
  {
    titulo: 'Conexão Espiritual e a Força da Prosperidade',
    descricao:
      'Você fortalece a identidade, a liderança, a autoridade e a conexão com aquilo que dá sentido à sua caminhada.',
  },
  {
    titulo: 'Herdeira de Si Mesma',
    descricao:
      'Você compreende a história que recebeu e escolhe o que deseja preservar, transformar e transmitir para as próximas gerações.',
  },
];
