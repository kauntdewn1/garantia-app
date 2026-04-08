# MG Riscos - Seguro Garantia para Licitações (IPFS Lite)

## 🌐 **Arquitetura Soberana e Descentralizada**

Esta é a versão moderna e agnóstica do sistema de solicitação de cotação de seguro garantia. O projeto foi refatorado para operar em infraestrutura descentralizada (**IPFS**) e sem dependência de provedores de Nuvem tradicionais como Netlify ou Firebase.

## ✨ **Funcionalidades Core**

- 📝 **Formulário Premium**: Interface de alta fidelidade com Glassmorphism e animações suaves.
- 🚀 **IPFS Ready**: Build configurado com caminhos relativos para funcionar em qualquer gateway (Pinata, Fleek, IPFS Local).
- 🔗 **Roteamento Resiliente**: Utiliza `HashRouter` para garantir navegação perfeita em sistemas de arquivos estáticos.
- 📬 **Backend Serverless (GAS)**: Integração via Webhook com Google App Script para armazenamento em planilhas e notificações automáticas por e-mail.
- 🔒 **Privacidade Total**: Sem rastreadores de terceiros ou dependências proprietárias de nuvem.

## 🛠️ **Stack Tecnológica**

- **Frontend**: React 18 + Vite 5
- **Estilização**: Tailwind CSS + Custom HSL Tokens
- **Animações**: Framer Motion
- **Roteamento**: React Router (Hash Mode)
- **Backend**: Google App Script (Node-less)
- **Gerente de Pacotes**: pnpm

## 🚀 **Início Rápido**

### 1. **Instalação**

```bash
# Instale as dependências usando pnpm
make install
```

### 2. **Configuração**
Crie um arquivo `.env` baseado no `env.example`:
```bash
cp env.example .env
# Adicione sua VITE_WEBHOOK_URL do Google App Script
```

### 3. **Desenvolvimento**
```bash
make dev
```

### 4. **Build para IPFS**
```bash
make build
# Os arquivos estarão prontos na pasta /dist
```

## 📋 **Comandos Principais**

```bash
make help          # Lista todos os comandos
make build         # Gera o build estático para IPFS
make preview       # Preview local do build
make security-check # Verifica vulnerabilidades
make info          # Detalhes da arquitetura atual
```

## 📂 **Estrutura do Projeto**

```
├── src/
│   ├── components/      # UI Components (Hero, RequestForm)
│   ├── utils/           # API genérica via Fetch
│   └── App.jsx          # Entry point com HashRouter
├── dist/                # Pasta de saída para IPFS
├── google-app-script.js # Código para o backend no Google Drive
├── Makefile             # Automação de tarefas com pnpm
└── vite.config.js      # Configurações de caminhos relativos
```

## 🔒 **Segurança e Privacidade**

- ✅ **Soberania de Dados**: As submissões vão direto para o seu Google Drive.
- ✅ **Zero Lock-in**: O frontend pode ser hospedado em qualquer lugar (IPFS, Arweave, VPS).
- ✅ **Auditoria**: Verificações de segurança integradas via `pnpm audit`.

---
**Desenvolvido com ❤️ para MG Riscos - Versão Soberana**
