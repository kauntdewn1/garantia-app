/**
 * Schemas para o Firestore
 */

// Schema para a coleção de solicitações
const solicitacaoSchema = {
  timestamp: 'timestamp', // Data e hora da solicitação
  edital: 'string', // Número do edital
  licitacaoURL: 'string', // URL do arquivo da licitação
  tomador: {
    empresa: 'string', // Nome da empresa tomadora
    cnpj: 'string', // CNPJ do tomador
    endereco: 'string', // Endereço do tomador
    cartaoCNPJURL: 'string | null' // URL do cartão CNPJ (opcional)
  },
  assegurado: {
    empresa: 'string', // Nome da empresa assegurada
    cnpj: 'string', // CNPJ do assegurado
    endereco: 'string', // Endereço do assegurado
    cartaoCNPJURL: 'string | null' // URL do cartão CNPJ (opcional)
  },
  status: 'string', // Status da solicitação (novo, em_analise, aprovado, rejeitado)
  observacoes: 'string | null', // Observações adicionais
  ultimaAtualizacao: 'timestamp', // Data da última atualização
  responsavel: 'string | null' // ID do responsável pela análise
};

// Schema para a coleção de usuários (futura implementação)
const usuarioSchema = {
  email: 'string',
  nome: 'string',
  cargo: 'string',
  dataCriacao: 'timestamp',
  ultimoAcesso: 'timestamp',
  permissoes: ['string'] // Array de permissões
};

// Schema para a coleção de logs
const logSchema = {
  timestamp: 'timestamp',
  acao: 'string', // Tipo de ação (criacao, atualizacao, exclusao)
  colecao: 'string', // Nome da coleção
  documentoId: 'string', // ID do documento
  usuarioId: 'string | null', // ID do usuário que realizou a ação
  dados: 'object' // Dados alterados
};

// Exportar schemas
export const schemas = {
  solicitacoes: solicitacaoSchema,
  usuarios: usuarioSchema,
  logs: logSchema
}; 