// config.example.js - Copie para config.js e configure suas credenciais

module.exports = {
  // Email (Gmail)
  email: {
    user: 'segurgary@gmail.com',
    pass: 'your_gmail_app_password_here' // App Password do Gmail
  },
  
  // Google Sheets
  google: {
    spreadsheetId: 'your_spreadsheet_id_here',
    serviceAccountKey: {
      "type": "service_account",
      "project_id": "your_project_id",
      "private_key_id": "your_private_key_id",
      "private_key": "your_private_key",
      "client_email": "your_service_account_email",
      "client_id": "your_client_id",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "your_cert_url"
    }
  }
};

// INSTRUÇÕES DE CONFIGURAÇÃO:
//
// 1. EMAIL GMAIL:
//    - Ative 2FA no Gmail
//    - Gere App Password: https://myaccount.google.com/apppasswords
//    - Use o App Password como EMAIL_PASS
//
// 2. GOOGLE SHEETS:
//    - Crie uma planilha no Google Sheets
//    - Compartilhe com: your_service_account_email
//    - Copie o ID da planilha da URL
//    - Configure Service Account no Google Cloud Console
//
// 3. COPIE ESTE ARQUIVO:
//    cp config.example.js config.js
//    # Edite config.js com suas credenciais
