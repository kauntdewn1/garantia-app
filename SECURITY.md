# 🔒 Guia de Segurança - mg-riscos-seguro (IPFS Lite)

## 🏗️ Arquitetura Soberana
Este projeto foi migrado para uma arquitetura descentralizada (IPFS) com backend via Google App Script (GAS). A dependência do Firebase foi **removida em 100%**.

## ✅ Ações de Segurança Necessárias

### 1. Proteção de Webhooks
O envio de formulários é feito via POST para um Webhook configurado no Google App Script.
- **VITE_WEBHOOK_URL**: Esta URL deve ser mantida privada. Embora esteja no frontend (Vite), certifique-se de configurar o seu script do Google para aceitar requisições apenas de domínios específicos (CORS) ou implementar tokens de validação se necessário.

### 2. Variáveis de Ambiente

Sempre utilize o arquivo `.env` para configurações sensíveis e **nunca** o envie para o repositório.

```bash
# Copie o arquivo de exemplo
cp env.example .env

# Configure sua URL do Google App Script no .env
```

## 🛡️ Boas Práticas

### Credenciais e Tokens
- ✅ Utilize variáveis de ambiente para a URL do Webhook.
- ✅ O arquivo `.env` deve estar listado no `.gitignore`.
- ❌ Nunca insira URLs de produção diretamente no código-fonte.

### Hospedagem IPFS
- ✅ Ao fazer o deploy no IPFS, lembre-se que o conteúdo é estático e público. 
- ✅ Não inclua arquivos de configuração (`.env`, `.git`, `node_modules`) no seu diretório de build (`dist`).

## 📋 Checklist de Segurança (Pós-Migração)
- [ ] Chaves de API do Firebase antigas foram revogadas no console do Google Cloud (Ação Manual Recomendada).
- [ ] `VITE_WEBHOOK_URL` está configurado corretamente no `.env`.
- [ ] O Google App Script possui validação básica de dados.
- [ ] O `.gitignore` está protegendo arquivos sensíveis.

## 🔧 Comandos de Auditoria
```bash
# Verificar vulnerabilidades nas dependências (pnpm)
make security-check
```

---
*Este documento foi atualizado após a remoção total das dependências do Firebase.*