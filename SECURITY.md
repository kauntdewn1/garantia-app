# 🔒 Guia de Segurança - mg-riscos-seguro

## 🚨 ALERTA DE SEGURANÇA CRÍTICO

**Sua chave da API do Firebase foi exposta publicamente!**

### Chave Comprometida:
- **API Key**: `AIzaSyBuh_XDxidMT-up0zyfUKYU1UgYya0DWzE`
- **Projeto**: garantia-app-f58a1
- **Localização**: GitHub público

## ✅ Ações Imediatas Necessárias

### 1. Regenerar Chave da API
1. Acesse [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Encontre a chave comprometida
3. Clique em "Regenerate Key"
4. **IMPORTANTE**: Configure restrições na nova chave

### 2. Configurar Restrições de Segurança
- **Restrições de Domínio**: Apenas domínios autorizados
- **Restrições de API**: Apenas APIs necessárias
- **Quotas**: Limite de uso diário/mensal
- **Monitoramento**: Ative alertas de uso

### 3. Limpar Histórico do Git
```bash
# Execute o script de limpeza
./scripts/clean-git-history.sh
```

### 4. Configurar Variáveis de Ambiente
```bash
# Copie o arquivo de exemplo
cp env.example .env

# Configure suas credenciais no .env
# NUNCA commite o arquivo .env!
```

## 🛡️ Boas Práticas de Segurança

### Credenciais
- ✅ Use variáveis de ambiente
- ✅ Nunca commite credenciais
- ✅ Use arquivos .env (no .gitignore)
- ❌ Nunca hardcode credenciais

### Firebase
- ✅ Configure regras de segurança do Firestore
- ✅ Use autenticação quando possível
- ✅ Monitore uso da API
- ✅ Configure quotas de uso

### Desenvolvimento
- ✅ Use HTTPS em produção
- ✅ Valide dados de entrada
- ✅ Implemente rate limiting
- ✅ Monitore logs de erro

## 📋 Checklist de Segurança

- [ ] Regenerar chave da API
- [ ] Configurar restrições de domínio
- [ ] Configurar quotas de uso
- [ ] Limpar histórico do Git
- [ ] Configurar variáveis de ambiente
- [ ] Testar aplicação com novas credenciais
- [ ] Configurar monitoramento
- [ ] Documentar procedimentos de segurança

## 🔧 Comandos Úteis

```bash
# Configuração de segurança
make security-setup

# Verificar dependências vulneráveis
make security-check

# Backup de configurações
make backup-config

# Limpeza de arquivos temporários
make clean
```

## 📞 Contatos de Emergência

- **Google Cloud Support**: https://cloud.google.com/support
- **Firebase Support**: https://firebase.google.com/support
- **GitHub Security**: https://github.com/security

## 📚 Recursos Adicionais

- [Google Cloud Security Best Practices](https://cloud.google.com/security/best-practices)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)
- [GitHub Security](https://docs.github.com/en/github/managing-security-in-vulnerabilities)

---

**⚠️ IMPORTANTE**: Este é um incidente de segurança crítico. Aja imediatamente para proteger suas credenciais e dados. 