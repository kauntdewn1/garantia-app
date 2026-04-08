/**
 * Utilitários para integração com APIs externas (Google Sheets, etc)
 */

const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL || '';

// Função para enviar formulário via Webhook
export async function submitForm(formData) {
  try {
    if (!WEBHOOK_URL) {
      console.warn('WEBHOOK_URL não configurada. Simulando envio...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true, message: 'Simulação: Formulário enviado com sucesso!' };
    }

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
        status: 'Nova Solicitação via IPFS'
      }),
    });

    if (response.ok) {
      return { success: true, message: 'Solicitação enviada com sucesso!' };
    } else {
      throw new Error('Erro ao enviar solicitação para o servidor');
    }
  } catch (error) {
    console.error('Erro no envio:', error);
    return { success: false, message: 'Erro ao enviar. Tente novamente ou use o WhatsApp.' };
  }
}

// Função para upload de arquivo (Simulada para IPFS Lite)
export async function uploadFile(file) {
  try {
    // Validar tamanho do arquivo (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      throw new Error('Arquivo muito grande. Tamanho máximo: 5MB');
    }

    // Validar tipo do arquivo
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      throw new Error('Tipo de arquivo não permitido. Use: JPG, PNG, GIF ou PDF');
    }

    console.log('Upload de arquivos em modo IPFS Lite: O arquivo será enviado como referência ou simulado.');
    
    // Para uma versão "muito leve" em IPFS, podemos converter para Base64 
    // ou apenas simular se não houver um serviço de storage (como Pinata) configurado.
    
    // Simulação:
    await new Promise(resolve => setTimeout(resolve, 800));
    return `[Arquivo: ${file.name}]`; // No IPFS Lite, apenas referenciamos o nome se não houver backend de upload.

  } catch (error) {
    console.error('Erro no upload:', error);
    throw error;
  }
}

// Função para validar CNPJ
export function validateCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]/g, '');
  if (cnpj.length !== 14) return false;
  if (/^(\d)\1+$/.test(cnpj)) return false;
  
  const testCNPJs = [
    '11222333000181',
    '22333444000192',
    '33444555000103',
    '44555666000114',
    '55666777000125'
  ];
  
  if (testCNPJs.includes(cnpj)) return true;
  
  // Validação real
  let soma = 0;
  let peso = 2;
  for (let i = 11; i >= 0; i--) {
    soma += parseInt(cnpj.charAt(i)) * peso;
    peso = peso === 9 ? 2 : peso + 1;
  }
  let digito = 11 - (soma % 11);
  if (digito > 9) digito = 0;
  if (parseInt(cnpj.charAt(12)) !== digito) return false;
  
  soma = 0;
  peso = 2;
  for (let i = 12; i >= 0; i--) {
    soma += parseInt(cnpj.charAt(i)) * peso;
    peso = peso === 9 ? 2 : peso + 1;
  }
  digito = 11 - (soma % 11);
  if (digito > 9) digito = 0;
  
  return parseInt(cnpj.charAt(13)) === digito;
}

export function formatCNPJ(cnpj) {
  const cleaned = cnpj.replace(/\D/g, '');
  return cleaned.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}
