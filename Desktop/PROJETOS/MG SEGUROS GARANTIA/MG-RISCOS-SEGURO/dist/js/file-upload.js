/**
 * Funções para upload de arquivos
 */

// Função para mostrar erro de rede
function showNetworkError(message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'network-error';
  errorDiv.textContent = message;
  document.querySelector('.container').insertBefore(errorDiv, document.querySelector('form'));
  
  setTimeout(() => {
    errorDiv.remove();
  }, 5000);
}

// Função para atualizar barra de progresso
function updateProgressBar(progress) {
  const container = document.querySelector('.progress-container');
  const bar = document.querySelector('.progress-bar');
  const text = document.querySelector('.progress-text');
  
  container.style.display = 'block';
  bar.style.width = `${progress}%`;
  text.textContent = `Upload: ${progress}%`;
  
  if (progress === 100) {
    setTimeout(() => {
      container.style.display = 'none';
      bar.style.width = '0%';
    }, 1000);
  }
}

// Função para enviar arquivos para o Firebase Storage
async function uploadFile(file, path) {
  if (!file) return null;
  
  try {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(path);
    
    // Configurar observador de progresso
    const uploadTask = fileRef.put(file);
    
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        updateProgressBar(Math.round(progress));
      },
      (error) => {
        console.error('Erro no upload:', error);
        showNetworkError('Erro ao fazer upload do arquivo. Por favor, tente novamente.');
        throw error;
      }
    );
    
    await uploadTask;
    return await fileRef.getDownloadURL();
  } catch (error) {
    console.error('Erro no upload:', error);
    showNetworkError('Erro ao fazer upload do arquivo. Por favor, tente novamente.');
    throw error;
  }
}

// Função para processar todos os uploads de arquivos
async function processFileUploads() {
  try {
    const timestamp = new Date().getTime();
    const licitacaoFile = document.getElementById('licitacao').files[0];
    const cartaoTomadorFile = document.getElementById('cartao_cnpj_tomador').files[0];
    const cartaoAsseguradoFile = document.getElementById('cartao_cnpj_assegurado').files[0];
    
    // Validar tamanho dos arquivos (máximo 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB em bytes
    if (licitacaoFile && licitacaoFile.size > maxSize) {
      throw new Error('O arquivo da licitação excede o tamanho máximo permitido (10MB)');
    }
    if (cartaoTomadorFile && cartaoTomadorFile.size > maxSize) {
      throw new Error('O cartão CNPJ do tomador excede o tamanho máximo permitido (10MB)');
    }
    if (cartaoAsseguradoFile && cartaoAsseguradoFile.size > maxSize) {
      throw new Error('O cartão CNPJ do assegurado excede o tamanho máximo permitido (10MB)');
    }
    
    // Validar tipos de arquivo
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (licitacaoFile && !allowedTypes.includes(licitacaoFile.type)) {
      throw new Error('O arquivo da licitação deve ser PDF, JPEG ou PNG');
    }
    if (cartaoTomadorFile && !allowedTypes.includes(cartaoTomadorFile.type)) {
      throw new Error('O cartão CNPJ do tomador deve ser PDF, JPEG ou PNG');
    }
    if (cartaoAsseguradoFile && !allowedTypes.includes(cartaoAsseguradoFile.type)) {
      throw new Error('O cartão CNPJ do assegurado deve ser PDF, JPEG ou PNG');
    }
    
    const licitacaoURL = await uploadFile(licitacaoFile, `licitacoes/${timestamp}_${licitacaoFile.name}`);
    const cartaoTomadorURL = cartaoTomadorFile ? 
      await uploadFile(cartaoTomadorFile, `cartoes/${timestamp}_tomador_${cartaoTomadorFile.name}`) : null;
    const cartaoAsseguradoURL = cartaoAsseguradoFile ? 
      await uploadFile(cartaoAsseguradoFile, `cartoes/${timestamp}_assegurado_${cartaoAsseguradoFile.name}`) : null;
    
    return {
      licitacaoURL,
      cartaoTomadorURL,
      cartaoAsseguradoURL
    };
  } catch (error) {
    console.error('Erro ao processar uploads:', error);
    showNetworkError(error.message || 'Erro ao processar os arquivos. Por favor, tente novamente.');
    throw error;
  }
}