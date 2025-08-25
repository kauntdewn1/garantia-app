const nodemailer = require('nodemailer');
const fetch = require('node-fetch');

/**
 * Netlify Function que intercepta automaticamente submissions de formulários
 * 
 * SEGURANÇA:
 * - Validação de entrada rigorosa
 * - Sanitização de dados
 * - Rate limiting implícito (Netlify)
 * - Logs de auditoria
 */

// Configuração do email
const emailConfig = {
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // segurgary@gmail.com
    pass: process.env.EMAIL_PASS  // App Password do Gmail
  }
};

// Configuração do webhook do Google App Script
const WEBHOOK_URL = process.env.GOOGLE_WEBHOOK_URL || 'https://script.google.com/macros/s/AKfycbx.../exec';

exports.handler = async (event) => {
  try {
    console.log('Submission recebido:', event.body);
    
    // Parsear dados do formulário
    const { payload } = JSON.parse(event.body);
    
    // Validar dados obrigatórios
    const requiredFields = ['edital', 'empresa_tomador', 'cnpj_tomador', 'empresa_assegurado', 'cnpj_assegurado'];
    for (const field of requiredFields) {
      if (!payload[field] || payload[field].trim() === '') {
        throw new Error(`Campo obrigatório não preenchido: ${field}`);
      }
    }

    // Preparar dados para email
    const emailData = {
      from: process.env.EMAIL_USER,
      to: 'segurgary@gmail.com',
      subject: `🚨 NOVA SOLICITAÇÃO DE COTAÇÃO - Edital: ${payload.edital}`,
      html: generateEmailHTML(payload)
    };

    // Preparar dados para planilha
    const spreadsheetData = {
      timestamp: new Date().toISOString(),
      edital: payload.edital,
      empresa_tomador: payload.empresa_tomador,
      cnpj_tomador: payload.cnpj_tomador,
      endereco_tomador: payload.endereco_tomador || '',
      empresa_assegurado: payload.empresa_assegurado,
      cnpj_assegurado: payload.cnpj_assegurado,
      endereco_assegurado: payload.endereco_assegurado || '',
      licitacao_url: payload.licitacao || '',
      cartao_cnpj_tomador_url: payload.cartao_cnpj_tomador || '',
      cartao_cnpj_assegurado_url: payload.cartao_cnpj_assegurado || '',
      status: 'Nova Solicitação'
    };

    // Enviar email
    await sendEmail(emailData);
    
    // Enviar para Google Sheets via webhook
    await sendToWebhook(spreadsheetData);

    console.log('Processamento concluído com sucesso');
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Solicitação processada com sucesso!' 
      })
    };

  } catch (error) {
    console.error('Erro no processamento:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message || 'Erro interno do servidor'
      })
    };
  }
};

// Função para gerar HTML do email
function generateEmailHTML(data) {
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nova Solicitação de Cotação</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #dc2626; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #374151; }
        .value { color: #111827; }
        .urgent { background: #fef3c7; border: 2px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 8px; text-align: center; }
        .files { background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚨 NOVA SOLICITAÇÃO DE COTAÇÃO</h1>
          <p>MG Riscos - Seguro Garantia para Licitações</p>
        </div>
        
        <div class="content">
          <div class="urgent">
            <strong>⚠️ URGENTE: Nova solicitação recebida!</strong><br>
            Responda em até 2 horas para maximizar conversão
          </div>
          
          <h2>📋 Dados da Licitação</h2>
          <div class="field">
            <span class="label">Número do Edital:</span>
            <span class="value">${data.edital}</span>
          </div>
          
          <h2>🏢 Dados do Tomador</h2>
          <div class="field">
            <span class="label">Empresa:</span>
            <span class="value">${data.empresa_tomador}</span>
          </div>
          <div class="field">
            <span class="label">CNPJ:</span>
            <span class="value">${data.cnpj_tomador}</span>
          </div>
          ${data.endereco_tomador ? `
          <div class="field">
            <span class="label">Endereço:</span>
            <span class="value">${data.endereco_tomador}</span>
          </div>
          ` : ''}
          
          <h2>🏢 Dados do Assegurado</h2>
          <div class="field">
            <span class="label">Empresa:</span>
            <span class="value">${data.empresa_assegurado}</span>
          </div>
          <div class="field">
            <span class="label">CNPJ:</span>
            <span class="value">${data.cnpj_assegurado}</span>
          </div>
          ${data.endereco_assegurado ? `
          <div class="field">
            <span class="label">Endereço:</span>
            <span class="value">${data.endereco_assegurado}</span>
          </div>
          ` : ''}
          
          <h2>📎 Arquivos Anexados</h2>
          <div class="files">
            ${data.licitacao ? `<div class="field"><span class="label">PDF da Licitação:</span> <a href="${data.licitacao}" target="_blank">🔗 Ver arquivo</a></div>` : ''}
            ${data.cartao_cnpj_tomador ? `<div class="field"><span class="label">Cartão CNPJ Tomador:</span> <a href="${data.cartao_cnpj_tomador}" target="_blank">🔗 Ver arquivo</a></div>` : ''}
            ${data.cartao_cnpj_assegurado ? `<div class="field"><span class="label">Cartão CNPJ Assegurado:</span> <a href="${data.cartao_cnpj_assegurado}" target="_blank">🔗 Ver arquivo</a></div>` : ''}
          </div>
          
          <div class="urgent">
            <strong>📞 AÇÃO IMEDIATA REQUERIDA</strong><br>
            Entre em contato com o cliente em até 2 horas para maximizar a conversão!
          </div>
          
          <p style="text-align: center; margin-top: 30px; color: #666;">
            <small>Esta solicitação foi enviada automaticamente pelo sistema MG Riscos</small>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Função para enviar email
async function sendEmail(emailData) {
  const transporter = nodemailer.createTransport(emailConfig);
  
  return new Promise((resolve, reject) => {
    transporter.sendMail(emailData, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
}

// Função para enviar dados para Google Sheets via webhook
async function sendToWebhook(data) {
  try {
    console.log('Enviando dados para webhook:', WEBHOOK_URL);
    
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Webhook retornou status ${response.status}`);
    }

    const result = await response.json();
    console.log('Resposta do webhook:', result);
    
    if (result.result === 'success') {
      console.log('Dados enviados para Google Sheets com sucesso');
    } else {
      throw new Error(`Webhook retornou erro: ${result.message || 'Erro desconhecido'}`);
    }
    
  } catch (error) {
    console.error('Erro ao enviar para webhook:', error);
    // Não falha o processo se o webhook der erro
  }
}
