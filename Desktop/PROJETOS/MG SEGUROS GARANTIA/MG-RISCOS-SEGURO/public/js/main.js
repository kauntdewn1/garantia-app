/**
 * Arquivo principal com inicialização e manipulação de eventos
 */

// Ensure DOM is fully loaded before running the code
document.addEventListener('DOMContentLoaded', function() {
  // Aplicar formatação de CNPJ nos campos
  document.getElementById('cnpj_tomador').addEventListener('input', function() {
    formatCNPJ(this);
  });

  document.getElementById('cnpj_assegurado').addEventListener('input', function() {
    formatCNPJ(this);
  });

  // Manipular envio do formulário
  document.getElementById('seguroForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    if (!validarFormulario()) return;
    
    // Mostrar loading
    document.getElementById('loading').style.display = 'block';
    document.getElementById('submitBtn').disabled = true;
    
    try {
      // Upload dos arquivos
      const uploads = await processFileUploads();
      
      // Preparar dados para o Firestore
      const formData = {
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        edital: document.getElementById('edital').value,
        licitacaoURL: uploads.licitacaoURL,
        tomador: {
          empresa: document.getElementById('empresa_tomador').value,
          cnpj: document.getElementById('cnpj_tomador').value,
          endereco: document.getElementById('endereco_tomador').value,
          cartaoCNPJURL: uploads.cartaoTomadorURL
        },
        assegurado: {
          empresa: document.getElementById('empresa_assegurado').value,
          cnpj: document.getElementById('cnpj_assegurado').value,
          endereco: document.getElementById('endereco_assegurado').value,
          cartaoCNPJURL: uploads.cartaoAsseguradoURL
        },
        status: 'novo'
      };
      
      // Salvar no Firestore
      await db.collection('solicitacoes').add(formData);
      
      // Mostrar mensagem de sucesso
      document.getElementById('loading').style.display = 'none';
      document.getElementById('success-message').style.display = 'block';
      document.getElementById('seguroForm').reset();
      
      // Rolar para a mensagem de sucesso
      document.getElementById('success-message').scrollIntoView({ behavior: 'smooth' });
      
      // Após 5 segundos, esconder a mensagem de sucesso
      setTimeout(() => {
        document.getElementById('success-message').style.display = 'none';
        document.getElementById('submitBtn').disabled = false;
      }, 5000);
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
      document.getElementById('loading').style.display = 'none';
      document.getElementById('submitBtn').disabled = false;
    }
  });
});