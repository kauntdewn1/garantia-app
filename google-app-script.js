/**
 * Google App Script para receber dados via webhook
 * 
 * INSTRUÇÕES:
 * 1. Vá na sua planilha "MG Riscos - Solicitações"
 * 2. Extensões > Apps Script
 * 3. Cole este código
 * 4. Clique em Implantar > Gerenciar implantações
 * 5. Novo deploy > Tipo: App da web > Quem pode acessar: Qualquer pessoa
 * 6. Copie a URL gerada
 * 7. Configure como VITE_WEBHOOK_URL no seu arquivo .env local
 */

function doPost(e) {
  try {
    console.log('Webhook recebido:', e.postData.contents);
    
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Validar dados obrigatórios
    if (!data.edital || !data.empresa_tomador || !data.cnpj_tomador || 
        !data.empresa_assegurado || !data.cnpj_assegurado) {
      throw new Error('Dados obrigatórios não fornecidos');
    }

    // Adicionar linha na planilha
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.edital,
      data.empresa_tomador,
      data.cnpj_tomador,
      data.endereco_tomador || '',
      data.empresa_assegurado,
      data.cnpj_assegurado,
      data.endereco_assegurado || '',
      data.licitacao_url || '',
      data.cartao_cnpj_tomador_url || '',
      data.cartao_cnpj_assegurado_url || '',
      data.status || 'Nova Solicitação via IPFS'
    ]);

    // Enviar notificação por email
    sendNotificationEmail(data);

    console.log('Dados salvos e email enviado');

    return ContentService.createTextOutput(JSON.stringify({ 
      result: "success", 
      message: "Processado com sucesso" 
    }))
    .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    console.error('Erro no webhook:', err.message);
    
    return ContentService.createTextOutput(JSON.stringify({ 
      result: "error", 
      message: err.message 
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Envia notificação por email usando os serviços do Google
 */
function sendNotificationEmail(data) {
  const recipient = "segurgary@gmail.com"; // Altere conforme necessário
  const subject = "🚨 NOVA COTAÇÃO - Edital: " + data.edital;
  
  const body = 
    "🚨 NOVA SOLICITAÇÃO DE COTAÇÃO\n\n" +
    "Edital: " + data.edital + "\n" +
    "Tomador: " + data.empresa_tomador + " (CNPJ: " + data.cnpj_tomador + ")\n" +
    "Assegurado: " + data.empresa_assegurado + " (CNPJ: " + data.cnpj_assegurado + ")\n\n" +
    "Arquivos:\n" +
    "- Licitação: " + (data.licitacao_url || 'N/A') + "\n" +
    "- CNPJ Tomador: " + (data.cartao_cnpj_tomador_url || 'N/A') + "\n" +
    "- CNPJ Assegurado: " + (data.cartao_cnpj_assegurado_url || 'N/A') + "\n\n" +
    "Acesse a planilha para mais detalhes.";
    
  MailApp.sendEmail(recipient, subject, body);
}


/**
 * Função para testar o webhook
 * Execute esta função para verificar se está funcionando
 */
function testWebhook() {
  const testData = {
    timestamp: new Date().toISOString(),
    edital: "TESTE-WEBHOOK",
    empresa_tomador: "Empresa Teste",
    cnpj_tomador: "11.222.333/0001-81",
    endereco_tomador: "Endereço Teste",
    empresa_assegurado: "Assegurado Teste",
    cnpj_assegurado: "22.333.444/0001-92",
    endereco_assegurado: "Endereço Assegurado",
    licitacao_url: "https://exemplo.com/licitacao.pdf",
    cartao_cnpj_tomador_url: "https://exemplo.com/cartao1.pdf",
    cartao_cnpj_assegurado_url: "https://exemplo.com/cartao2.pdf",
    status: "Teste Webhook"
  };
  
  console.log('Dados de teste:', testData);
  
  // Simular doPost
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Resultado do teste:', result.getContent());
}
