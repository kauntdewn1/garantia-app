# 🚀 Configuração do Webhook SOBERANO (IPFS Lite)

Este guia ensina como configurar o backend do MG Riscos usando apenas ferramentas do Google (Sheets + Apps Script), sem depender de servidores Node.js ou provedores como Netlify/Firebase.

## 📊 **Parte 1: Planilha Google**

1.  **Criar Planilha**: Acesse [sheets.google.com](https://sheets.google.com) e crie uma nova planilha chamada `MG Riscos - Solicitações`.
2.  **Preparar Colunas**: Na primeira linha, crie os seguintes cabeçalhos (opcional, o script adicionará linhas mesmo sem eles):
    - `Timestamp`, `Edital`, `Tomador`, `CNPJ Tomador`, `Endereço Tomador`, `Assegurado`, `CNPJ Assegurado`, `Endereço Assegurado`, `Licitação URL`, `CNPJ Tomador URL`, `CNPJ Assegurado URL`, `Status`.

## ⚡ **Parte 2: Google App Script (O Webhook)**

1.  **Abrir Editor**: Na sua planilha, vá em `Extensões` > `Apps Script`.
2.  **Copiar Código**: Cole o conteúdo do arquivo `google-app-script.js` que está na raiz deste projeto.
3.  **Configurar Email**: No código do Apps Script, localize a função `sendNotificationEmail` e altere o email do destinatário (atualmente `segurgary@gmail.com`) se desejar.
4.  **Implantar**:
    - Clique em `Implantar` > `Nova implantação`.
    - Selecione o tipo `App da web`.
    - Descrição: `MG Riscos Webhook`.
    - Executar como: `Eu` (seu email).
    - **Quem pode acessar: Qualquer pessoa** (Crucial para o IPFS conseguir enviar os dados).
    - Clique em `Implantar` e autorize as permissões solicitadas.
5.  **Copiar URL**: Ao final, você receberá uma **URL da Web App**. Copie esta URL.

## 🔗 **Parte 3: Conectar ao Frontend**

1.  **Configurar Local**: No seu computador, abra ou crie o arquivo `.env`.
2.  **Variável de Ambiente**:
    ```bash
    VITE_WEBHOOK_URL=COLE_A_URL_DO_APPS_SCRIPT_AQUI
    ```
3.  **Build**: Execute `pnpm build`. O Vite injetará essa URL no seu app estático de forma segura para o deploy no IPFS.

## 🧪 **Teste do Sistema**

### 1. **Teste no Apps Script**
- No editor do Apps Script, selecione a função `testWebhook` e clique em `Executar`.
- Verifique se uma nova linha apareceu na sua planilha.

### 2. **Teste no App (Local)**
- Execute `pnpm dev`.
- Preencha o formulário e clique em enviar.
- Se aparecer a mensagem de sucesso com o Checkmark animado, os dados já estão no seu Google Drive!

## 🚨 **Troubleshooting**

### **Erro de Acesso (CORS):**
- Certifique-se de que a implantação do Apps Script está configurada para acesso por **"Qualquer pessoa"**.
- Se você alterou o código, precisa criar uma **Nova Versão** ou atualizar a implantação existente para as mudanças entrarem em vigor.

### **Email não chega:**
- Verifique a pasta de SPAM.
- O Google MailApp tem limites diários de envio (geralmente 100/dia para contas gratuitas), o que é mais que suficiente para este formulário.

---
**✅ Seu backend soberano está configurado e pronto para o IPFS!**
