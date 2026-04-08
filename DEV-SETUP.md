# Guia de Desenvolvimento SOBERANO (IPFS Lite)

Este guia detalha o ambiente de desenvolvimento para o **MG Riscos**, agora totalmente migrado para a stack pnpm + IPFS + Google App Script.

## 🚀 Como Iniciar

### 1. Requisitos
- **Node.js**: v18 ou superior.
- **pnpm**: Recomendado para o ecossistema Protocolo NΞØ. Instale via `npm install -g pnpm`.

### 2. Preparação do Ambiente
```bash
# Instale as dependências (Makefile usa pnpm internamente)
make install

# Configure seu ambiente
cp env.example .env
# Edite o .env e adicione seu VITE_WEBHOOK_URL
```

### 3. Workflow de Desenvolvimento
```bash
# Inicie o servidor local (Vite)
make dev
# ou
pnpm dev
```
- Acesse: `http://localhost:5173`
- O formulário agora envia dados diretamente para o seu Webhook (ou simula sucessos caso não haja uma URL configurada).

## 🧩 Modos de Operação do Webhook

O sistema de integração do formulário (`src/utils/api.js`) opera de forma inteligente:

1.  **Modo Real (Production/Staging)**: Quando o arquivo `.env` contém uma `VITE_WEBHOOK_URL` válida, os dados são enviados via POST para o Google App Script.
2.  **Modo Simulação (Fallback)**: Caso a URL não esteja configurada ou o ambiente seja instável, o app simula o envio com um atraso de 1,5s para demonstrar a experiência do usuário (UX).

## 📦 Build e Deploy IPFS

Para gerar a versão final para o IPFS:
```bash
make build
```
- **Pasta de Saída**: `/dist`
- **Caminhos**: Estão configurados como `./` (relativos), obrigatórios para carregar assets corretamente em gateways IPFS.
- **Roteamento**: O sistema utiliza `HashRouter`, permitindo que as rotas funcionem mesmo sem configuração de fallback no servidor/nó.

## 🔒 Segurança em Desenvolvimento
- O arquivo `.env` **nunca** deve ser commitado.
- Utilize o `make security-check` para auditar vulnerabilidades.

---
**✅ Ambiente de desenvolvimento pronto e otimizado!**
