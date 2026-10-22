import type { Metadata } from 'next';
import { LegalPage } from '@/components/sections/LegalPage';
import { LEGAL_ATUALIZADO_EM, RESPONSAVEL } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Comunidade Sementes da Prosperidade',
  description:
    'Como tratamos os dados pessoais de quem acessa a página e participa da Comunidade Sementes da Prosperidade.',
};

export default function PoliticaDePrivacidade() {
  return (
    <LegalPage
      titulo="Política de Privacidade"
      atualizadoEm={LEGAL_ATUALIZADO_EM}
      intro={`Esta Política explica como ${RESPONSAVEL.nome} (${RESPONSAVEL.razaoSocial}, CNPJ ${RESPONSAVEL.cnpj}), controladora dos dados, coleta, usa e protege as informações pessoais de quem acessa esta página e participa da Comunidade Sementes da Prosperidade, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018, a LGPD).`}
      secoes={[
        {
          titulo: 'Dados que coletamos',
          paragrafos: ['Podemos tratar as seguintes categorias de dados:'],
          itens: [
            'dados informados na compra e no cadastro, como nome, e-mail, telefone e CPF;',
            'dados de pagamento, tratados diretamente pela plataforma de pagamento, sem que tenhamos acesso ao número completo do cartão;',
            'dados de navegação, como endereço IP, tipo de dispositivo, navegador, páginas visitadas e tempo de permanência;',
            'informações que você compartilhar ao entrar em contato, como mensagens enviadas por WhatsApp ou e-mail.',
          ],
        },
        {
          titulo: 'Para que usamos os dados',
          paragrafos: ['Usamos os dados pessoais para:'],
          itens: [
            'processar a compra e liberar o seu acesso à comunidade;',
            'enviar avisos sobre encontros, aulas, desafios e demais informações do serviço;',
            'responder às suas dúvidas e solicitações;',
            'enviar comunicações sobre novidades e ofertas, quando você tiver consentido;',
            'medir o desempenho da página e das campanhas de divulgação, para melhorá-las;',
            'cumprir obrigações legais, fiscais e regulatórias.',
          ],
        },
        {
          titulo: 'Bases legais',
          paragrafos: [
            'O tratamento é feito com base na execução do contrato de que você é parte, no cumprimento de obrigações legais, no legítimo interesse (por exemplo, para segurança e melhoria da página) e no seu consentimento, quando necessário. Você pode retirar o consentimento a qualquer momento.',
          ],
        },
        {
          titulo: 'Compartilhamento',
          paragrafos: [
            'Não vendemos os seus dados. Eles podem ser compartilhados apenas com prestadores de serviço necessários à operação, como plataforma de pagamento, hospedagem, armazenamento de arquivos, envio de e-mails, ferramentas de atendimento e de análise de dados e de anúncios, e com autoridades, quando houver obrigação legal.',
            'Esses prestadores só podem usar os dados para a finalidade contratada e devem adotar medidas de segurança compatíveis.',
          ],
        },
        {
          titulo: 'Cookies e tecnologias semelhantes',
          paragrafos: [
            'Esta página pode usar cookies e ferramentas de análise e de publicidade para entender como ela é utilizada e medir campanhas. Você pode bloquear ou apagar cookies nas configurações do seu navegador, ciente de que algumas funções podem ser afetadas.',
          ],
        },
        {
          titulo: 'Segurança e retenção',
          paragrafos: [
            'Adotamos medidas técnicas e organizacionais para proteger os dados contra acessos não autorizados, perda e uso indevido. Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas aqui e as obrigações legais, e depois os eliminamos ou anonimizamos.',
          ],
        },
        {
          titulo: 'Seus direitos',
          paragrafos: ['Nos termos da LGPD, você pode solicitar a qualquer momento:'],
          itens: [
            'a confirmação de que tratamos os seus dados e o acesso a eles;',
            'a correção de dados incompletos, inexatos ou desatualizados;',
            'a anonimização, o bloqueio ou a eliminação de dados desnecessários ou tratados em desconformidade;',
            'a portabilidade dos dados;',
            'a informação sobre com quem os dados são compartilhados;',
            'a revogação do consentimento e a eliminação dos dados tratados com base nele.',
          ],
        },
        {
          titulo: 'Como exercer seus direitos',
          paragrafos: [
            `Para exercer qualquer desses direitos ou tirar dúvidas sobre esta Política, entre em contato pelo e-mail ${RESPONSAVEL.email}. Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).`,
          ],
        },
        {
          titulo: 'Alterações nesta Política',
          paragrafos: [
            'Esta Política pode ser atualizada para refletir mudanças no serviço ou na legislação. A versão vigente é sempre a publicada nesta página, com a data da última atualização no topo.',
          ],
        },
      ]}
    />
  );
}
