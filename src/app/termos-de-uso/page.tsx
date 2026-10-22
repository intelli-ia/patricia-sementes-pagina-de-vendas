import type { Metadata } from 'next';
import { LegalPage } from '@/components/sections/LegalPage';
import { LEGAL_ATUALIZADO_EM, RESPONSAVEL } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Termos de Uso | Comunidade Sementes da Prosperidade',
  description: 'Termos de uso da página e da Comunidade Sementes da Prosperidade.',
};

export default function TermosDeUso() {
  return (
    <LegalPage
      titulo="Termos de Uso"
      atualizadoEm={LEGAL_ATUALIZADO_EM}
      intro={`Estes Termos de Uso regulam o acesso a esta página e a contratação da Comunidade Sementes da Prosperidade, oferecida por ${RESPONSAVEL.nome} (${RESPONSAVEL.razaoSocial}, CNPJ ${RESPONSAVEL.cnpj}). Ao navegar pela página ou concluir a compra, você declara que leu e concorda com as condições abaixo.`}
      secoes={[
        {
          titulo: 'Sobre a Comunidade',
          paragrafos: [
            'A Comunidade Sementes da Prosperidade é um serviço de desenvolvimento pessoal voltado a mulheres, composto por encontros ao vivo, aulas interativas, desafios semanais, conteúdos de apoio e um grupo de troca entre participantes.',
            'O conteúdo tem caráter educativo e de desenvolvimento pessoal. Ele não substitui psicoterapia, atendimento psicológico ou psiquiátrico, nem aconselhamento médico, financeiro ou jurídico.',
          ],
        },
        {
          titulo: 'Cadastro e acesso',
          paragrafos: [
            'Para participar, é necessário ser maior de 18 anos e informar dados verdadeiros, completos e atualizados na compra. O acesso à comunidade é de 1 ano, contado a partir da confirmação do pagamento.',
            'O acesso é pessoal e intransferível. Você é responsável por manter a confidencialidade dos seus dados de acesso e por toda atividade realizada com eles.',
          ],
        },
        {
          titulo: 'Pagamento',
          paragrafos: [
            'Os valores, as formas de pagamento e as condições de parcelamento são apresentados na página de oferta, antes da finalização da compra. O pagamento é processado por plataforma de pagamento terceirizada, que é responsável pela segurança dos dados financeiros informados.',
          ],
        },
        {
          titulo: 'Cancelamento e reembolso',
          paragrafos: [
            'Nas compras realizadas fora do estabelecimento comercial, como esta, você pode desistir da contratação em até 7 (sete) dias corridos após a compra, conforme o artigo 49 do Código de Defesa do Consumidor, com a devolução integral dos valores pagos.',
            `Para exercer esse direito, basta enviar a solicitação para ${RESPONSAVEL.email}. Passado esse prazo, o cancelamento interrompe as cobranças futuras, quando houver, mas não gera reembolso proporcional do período já utilizado, salvo disposição legal em sentido contrário.`,
          ],
        },
        {
          titulo: 'Propriedade intelectual',
          paragrafos: [
            'Todo o conteúdo da página e da comunidade, incluindo textos, vídeos, aulas, materiais, imagens, marcas e a metodologia das 8 Sementes da Prosperidade, pertence a Patrícia Souza e é protegido pela legislação de direitos autorais.',
            'É proibido copiar, reproduzir, gravar, distribuir, revender ou compartilhar o conteúdo com terceiros, no todo ou em parte, sem autorização prévia e por escrito.',
          ],
        },
        {
          titulo: 'Conduta na comunidade',
          paragrafos: [
            'A comunidade é um espaço de troca entre mulheres, e o respeito é condição para participar. Você se compromete a:',
          ],
          itens: [
            'tratar as demais participantes com respeito e manter sigilo sobre o que for compartilhado nos encontros e no grupo;',
            'não publicar conteúdo ofensivo, discriminatório, ilegal ou que viole direitos de terceiros;',
            'não utilizar o espaço para divulgar produtos, serviços ou promoções sem autorização.',
          ],
        },
        {
          titulo: 'Resultados',
          paragrafos: [
            'Os resultados dependem do envolvimento, da aplicação e do contexto de vida de cada participante. Por isso, não há garantia de resultados financeiros, profissionais ou pessoais específicos. Depoimentos exibidos na página refletem experiências individuais.',
          ],
        },
        {
          titulo: 'Disponibilidade e alterações',
          paragrafos: [
            'Os encontros, as aulas e os demais conteúdos podem ter datas, formatos e plataformas ajustados, mantida a proposta da comunidade. Podemos suspender o acesso de quem descumprir estes Termos.',
            'Estes Termos podem ser atualizados a qualquer momento. A versão vigente é sempre a publicada nesta página, com a data da última atualização no topo.',
          ],
        },
        {
          titulo: 'Privacidade',
          paragrafos: [
            'O tratamento dos seus dados pessoais é descrito na Política de Privacidade, que integra estes Termos.',
          ],
        },
        {
          titulo: 'Contato e foro',
          paragrafos: [
            `Dúvidas sobre estes Termos podem ser enviadas para ${RESPONSAVEL.email}. Fica eleito o foro do domicílio do consumidor para resolver qualquer controvérsia decorrente deste contrato, nos termos da legislação brasileira.`,
          ],
        },
      ]}
    />
  );
}
