/**
 * Testes unitários para validação de formulário
 */

describe('Validação de Formulário', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form id="seguroForm">
        <input type="text" id="edital" />
        <input type="text" id="empresa_tomador" />
        <input type="text" id="cnpj_tomador" />
        <input type="text" id="empresa_assegurado" />
        <input type="text" id="cnpj_assegurado" />
        <input type="file" id="licitacao" />
      </form>
    `;
  });

  test('deve validar CNPJ válido', () => {
    const cnpj = '12.345.678/0001-95';
    expect(validarCNPJ(cnpj)).toBe(true);
  });

  test('deve rejeitar CNPJ inválido', () => {
    const cnpj = '12.345.678/0001-00';
    expect(validarCNPJ(cnpj)).toBe(false);
  });

  test('deve formatar CNPJ corretamente', () => {
    const input = document.getElementById('cnpj_tomador');
    input.value = '12345678000195';
    formatCNPJ(input);
    expect(input.value).toBe('12.345.678/0001-95');
  });

  test('deve validar campo obrigatório', () => {
    const input = document.getElementById('edital');
    validateField(input);
    expect(input.classList.contains('input-invalid')).toBe(true);
  });

  test('deve validar campo preenchido corretamente', () => {
    const input = document.getElementById('edital');
    input.value = '12345';
    validateField(input);
    expect(input.classList.contains('input-valid')).toBe(true);
  });

  test('deve validar arquivo obrigatório', () => {
    const input = document.getElementById('licitacao');
    validateField(input);
    expect(input.classList.contains('input-invalid')).toBe(true);
  });
}); 