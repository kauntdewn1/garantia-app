exports.handler = async (event) => {
  // Habilitar CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Responder a requisições OPTIONS (preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Verificar se é uma requisição POST
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Método não permitido' })
      };
    }

    // Para arquivos pequenos, podemos processar diretamente
    // Para arquivos maiores, seria necessário usar um serviço como Cloudinary ou AWS S3
    
    // Simular upload bem-sucedido (em produção, você usaria um serviço real)
    const timestamp = Date.now();
    const fileId = `file_${timestamp}`;
    
    // Retornar URL simulada
    const fileUrl = `https://api.netlify.com/files/${fileId}`;
    
    return {
      statusCode: 200,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: true,
        url: fileUrl,
        fileId: fileId,
        message: 'Arquivo processado com sucesso'
      })
    };

  } catch (error) {
    console.error('Erro no upload:', error);
    
    return {
      statusCode: 500,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: false,
        error: 'Erro interno do servidor'
      })
    };
  }
};
