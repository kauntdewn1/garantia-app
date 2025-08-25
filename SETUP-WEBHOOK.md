# 🚀 Configuração do Webhook MG Riscos

## 📧 **Configuração do Email (Gmail)**

### 1. **Ativar 2FA no Gmail**
- Acesse: https://myaccount.google.com/security
- Ative "Verificação em duas etapas"

### 2. **Gerar App Password**
- Acesse: https://myaccount.google.com/apppasswords
- Selecione "Email" e "Outro (nome personalizado)"
- Digite: "MG Riscos Webhook"
- Clique em "Gerar"
- **Copie a senha de 16 caracteres**

### 3. **Configurar Variáveis de Ambiente**
```bash
# No Netlify Dashboard > Site settings > Environment variables
EMAIL_USER=segurgary@gmail.com
EMAIL_PASS=sua_senha_de_16_caracteres
```

## 📊 **Configuração da Planilha Google**

### 1. **Criar Planilha**
- Acesse: https://sheets.google.com
- Crie nova planilha: "MG Riscos - Solicitações"
- **Copie o ID da planilha da URL**

### 2. **Configurar Google Cloud Console**
- Acesse: https://console.cloud.google.com
- Crie novo projeto ou selecione existente
- Ative Google Sheets API
- Crie Service Account
- Baixe arquivo JSON de credenciais

### 3. **Compartilhar Planilha**
- Compartilhe com: `seu_service_account_email@projeto.iam.gserviceaccount.com`
- Permissão: "Editor"

### 4. **Configurar Variáveis de Ambiente**
```bash
# No Netlify Dashboard
GOOGLE_SPREADSHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account",...}
```

## 🔧 **Estrutura da Planilha**

### **Colunas Automáticas:**
| Coluna | Descrição | Exemplo |
|--------|-----------|---------|
| timestamp | Data/Hora | 2025-01-25T10:30:00Z |
| edital | Número do Edital | 001/2025 |
| empresa_tomador | Empresa Tomadora | Empresa ABC Ltda |
| cnpj_tomador | CNPJ Tomador | 12.345.678/0001-90 |
| endereco_tomador | Endereço Tomador | Rua A, 123 |
| empresa_assegurado | Empresa Assegurada | Empresa XYZ Ltda |
| cnpj_assegurado | CNPJ Assegurado | 98.765.432/0001-10 |
| endereco_assegurado | Endereço Assegurado | Av B, 456 |
| licitacao_url | URL PDF Licitação | https://... |
| cartao_cnpj_tomador_url | URL CNPJ Tomador | https://... |
| cartao_cnpj_assegurado_url | URL CNPJ Assegurado | https://... |
| status | Status da Solicitação | Nova Solicitação |

## 📱 **Teste do Sistema**

### 1. **Deploy no Netlify**
```bash
make deploy
```

### 2. **Testar Formulário**
- Preencha o formulário
- Verifique email em `segurgary@gmail.com`
- Verifique planilha Google

### 3. **Logs de Debug**
- Netlify Dashboard > Functions > Logs
- Verifique erros e sucessos

## 🚨 **Troubleshooting**

### **Email não enviado:**
- Verifique `EMAIL_USER` e `EMAIL_PASS`
- Confirme App Password do Gmail
- Verifique logs do Netlify

### **Planilha não atualizada:**
- Verifique `GOOGLE_SPREADSHEET_ID`
- Confirme permissões da planilha
- Verifique Service Account

### **Erro de CORS:**
- Verifique headers na função
- Confirme origem das requisições

## 📞 **Suporte**

- **Email**: segurgary@gmail.com
- **Documentação**: [Netlify Functions](https://docs.netlify.com/functions/overview/)
- **Google Sheets API**: [Documentação](https://developers.google.com/sheets/api)

---

**✅ Sistema configurado e funcionando!**
