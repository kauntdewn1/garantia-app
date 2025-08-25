# Configuração do Ambiente de Desenvolvimento

## Problema Resolvido ✅
O erro 404 ao acessar `/.netlify/functions/upload` foi resolvido implementando uma solução híbrida.

## Solução Implementada
A função `uploadFile` agora funciona em dois modos:

### Modo Desenvolvimento (DEV)
- Simula o upload do arquivo
- Retorna uma URL simulada
- Não requer servidor Netlify dev
- Funciona apenas com `npm run dev`

### Modo Produção
- Usa as funções Netlify reais
- Funciona automaticamente no Netlify

## Como usar

### Para desenvolvimento:
```bash
npm run dev
```
- Acesse: http://localhost:5173
- Uploads são simulados (modo DEV)
- Console mostra logs de simulação

### Para testar funções Netlify:
```bash
npm run dev:netlify
```
- Inicia servidor Netlify dev na porta 8888
- Funções reais disponíveis em http://localhost:8888

## URLs de acesso
- Frontend: http://localhost:5173
- Funções Netlify (quando disponível): http://localhost:8888

## Vantagens da solução
- ✅ Funciona imediatamente em desenvolvimento
- ✅ Não requer configuração complexa
- ✅ Uploads simulados para testes
- ✅ Produção usa funções reais
- ✅ Fácil de debugar
