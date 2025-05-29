/**
 * Testes de integração para upload de arquivos
 */

describe('Upload de Arquivos', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="container">
        <form id="seguroForm">
          <input type="file" id="licitacao" />
          <input type="file" id="cartao_cnpj_tomador" />
          <input type="file" id="cartao_cnpj_assegurado" />
        </form>
      </div>
    `;
  });

  test('deve rejeitar arquivo maior que 10MB', async () => {
    const file = new File(['x'.repeat(11 * 1024 * 1024)], 'test.pdf', { type: 'application/pdf' });
    const input = document.getElementById('licitacao');
    Object.defineProperty(input, 'files', { value: [file] });

    await expect(processFileUploads()).rejects.toThrow('excede o tamanho máximo permitido');
  });

  test('deve rejeitar tipo de arquivo não permitido', async () => {
    const file = new File(['test'], 'test.txt', { type: 'text/plain' });
    const input = document.getElementById('licitacao');
    Object.defineProperty(input, 'files', { value: [file] });

    await expect(processFileUploads()).rejects.toThrow('deve ser PDF, JPEG ou PNG');
  });

  test('deve mostrar barra de progresso durante upload', async () => {
    const file = new File(['test'], 'test.pdf', { type: 'application/pdf' });
    const input = document.getElementById('licitacao');
    Object.defineProperty(input, 'files', { value: [file] });

    // Mock do Firebase Storage
    const mockUploadTask = {
      on: jest.fn((event, next, error) => {
        if (event === 'state_changed') {
          next({ bytesTransferred: 50, totalBytes: 100 });
        }
      }),
      then: jest.fn().mockResolvedValue()
    };

    const mockRef = {
      put: jest.fn().mockReturnValue(mockUploadTask),
      getDownloadURL: jest.fn().mockResolvedValue('https://example.com/test.pdf')
    };

    const mockStorage = {
      ref: jest.fn().mockReturnValue(mockRef)
    };

    global.storage = mockStorage;

    await processFileUploads();

    expect(document.querySelector('.progress-container').style.display).toBe('block');
    expect(document.querySelector('.progress-bar').style.width).toBe('50%');
  });

  test('deve mostrar erro de rede quando upload falhar', async () => {
    const file = new File(['test'], 'test.pdf', { type: 'application/pdf' });
    const input = document.getElementById('licitacao');
    Object.defineProperty(input, 'files', { value: [file] });

    // Mock do Firebase Storage com erro
    const mockUploadTask = {
      on: jest.fn((event, next, error) => {
        if (event === 'state_changed') {
          error(new Error('Erro de rede'));
        }
      })
    };

    const mockRef = {
      put: jest.fn().mockReturnValue(mockUploadTask)
    };

    const mockStorage = {
      ref: jest.fn().mockReturnValue(mockRef)
    };

    global.storage = mockStorage;

    await expect(processFileUploads()).rejects.toThrow('Erro de rede');
    expect(document.querySelector('.network-error')).toBeTruthy();
  });
}); 