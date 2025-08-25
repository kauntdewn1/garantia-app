/**
 * Funções de validação de formulário
 */

// Função para formatar CNPJ durante digitação
function formatCNPJ(input) {
  let value = input.value.replace(/\D/g, '');
  if (value.length > 14) value = value.slice(0, 14);
  
  if (value.length > 12) {
    value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/, "$1.$2.$3/$4-$5");
  } else if (value.length > 8) {
    value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d*).*/, "$1.$2.$3/$4");
  } else if (value.length > 5) {
    value = value.replace(/^(\d{2})(\d{3})(\d*).*/, "$1.$2.$3");
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d*).*/, "$1.$2");
  }
  
  input.value = value;
  validateField(input);
}

// Função para validar CNPJ
function validarCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]/g, '');
  
  if (cnpj.length !== 14) return false;
  
  // Elimina CNPJs inválidos conhecidos
  if (/^(0{14}|1{14}|2{14}|3{14}|4{14}|5{14}|6{14}|7{14}|8{14}|9{14})$/.test(cnpj)) {
    return false;
  }
  
  // Valida DVs
  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  const digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  
  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0)) return false;
  
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1)) return false;
  
  return true;
}

// Função para validar campo em tempo real
function validateField(input) {
  const errorElement = document.getElementById(`${input.id}-error`);
  const validationMessage = document.getElementById(`${input.id}-validation`);
  
  if (!validationMessage) {
    const message = document.createElement('div');
    message.id = `${input.id}-validation`;
    message.className = 'validation-message';
    input.parentNode.appendChild(message);
  }
  
  let isValid = true;
  let message = '';
  
  switch(input.id) {
    case 'edital':
      isValid = input.value.trim().length > 0;
      message = isValid ? '✓ Edital válido' : '✗ Edital é obrigatório';
      break;
      
    case 'empresa_tomador':
    case 'empresa_assegurado':
      isValid = input.value.trim().length > 0;
      message = isValid ? '✓ Nome da empresa válido' : '✗ Nome da empresa é obrigatório';
      break;
      
    case 'cnpj_tomador':
    case 'cnpj_assegurado':
      isValid = input.value.trim().length === 18 && validarCNPJ(input.value);
      message = isValid ? '✓ CNPJ válido' : '✗ CNPJ inválido';
      break;
      
    case 'licitacao':
      isValid = input.files && input.files.length > 0;
      message = isValid ? '✓ Arquivo selecionado' : '✗ Arquivo é obrigatório';
      break;
  }
  
  input.classList.remove('input-valid', 'input-invalid');
  input.classList.add(isValid ? 'input-valid' : 'input-invalid');
  
  if (errorElement) {
    errorElement.style.display = isValid ? 'none' : 'block';
  }
  
  if (validationMessage) {
    validationMessage.textContent = message;
    validationMessage.className = `validation-message ${isValid ? 'valid' : 'invalid'}`;
  }
  
  return isValid;
}

// Função para validar o formulário
function validarFormulario() {
  let isValid = true;
  const camposObrigatorios = [
    'edital', 'empresa_tomador', 'cnpj_tomador', 'empresa_assegurado', 'cnpj_assegurado'
  ];
  
  // Validar campos obrigatórios
  camposObrigatorios.forEach(campo => {
    const input = document.getElementById(campo);
    if (!validateField(input)) {
      isValid = false;
      input.classList.add('shake');
      setTimeout(() => input.classList.remove('shake'), 500);
    }
  });
  
  // Validar arquivo da licitação
  const licitacaoFile = document.getElementById('licitacao');
  if (!validateField(licitacaoFile)) {
    isValid = false;
    licitacaoFile.classList.add('shake');
    setTimeout(() => licitacaoFile.classList.remove('shake'), 500);
  }
  
  return isValid;
}

// Adicionar listeners para validação em tempo real
document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('input', () => validateField(input));
    input.addEventListener('blur', () => validateField(input));
  });
});