#!/bin/bash

# Script avançado para limpar credenciais do histórico do Git usando git filter-repo
# ⚠️ ATENÇÃO: Este script modifica o histórico do Git

echo "🚨 LIMPEZA AVANÇADA DO HISTÓRICO DO GIT"
echo "Usando git filter-repo para remover credenciais expostas"
echo ""

# Verificar se estamos no diretório correto
if [ ! -f ".git/config" ]; then
    echo "❌ Erro: Execute este script na raiz do repositório Git"
    exit 1
fi

# Verificar se git filter-repo está instalado
if ! command -v git-filter-repo &> /dev/null; then
    echo "❌ git filter-repo não encontrado. Instalando..."
    pip install git-filter-repo
fi

# Backup do repositório
echo "📦 Criando backup do repositório..."
cp -r .git .git.backup.advanced
echo "✅ Backup criado em .git.backup.advanced"

# Chave exposta
EXPOSED_KEY="AIzaSyBuh_XDxidMT-up0zyfUKYU1UgYya0DWzE"

echo "🔍 Procurando por credenciais expostas..."
if git log --all --full-history -- "$EXPOSED_KEY" > /dev/null 2>&1; then
    echo "⚠️  Encontradas credenciais expostas no histórico!"
    
    echo ""
    echo "🧹 Usando git filter-repo para limpar histórico..."
    
    # Criar arquivo de substituição
    cat > replace-credentials.txt << EOF
$EXPOSED_KEY==>REMOVED_API_KEY_SECURITY_FIX
EOF
    
    # Executar git filter-repo
    git filter-repo --replace-text replace-credentials.txt --force
    
    # Limpar arquivos temporários
    rm -f replace-credentials.txt
    
    echo "✅ Histórico limpo com git filter-repo"
    
    # Verificar se ainda há credenciais
    echo ""
    echo "🔍 Verificando se ainda há credenciais expostas..."
    if git log --all --full-history -- "$EXPOSED_KEY" > /dev/null 2>&1; then
        echo "⚠️  Ainda há credenciais expostas! Tentando método alternativo..."
        
        # Método alternativo: remover commits específicos
        git filter-repo --invert-paths --path-glob '*.js' --force
        echo "✅ Removidos arquivos JavaScript do histórico"
    else
        echo "✅ Credenciais removidas com sucesso!"
    fi
    
else
    echo "✅ Nenhuma credencial exposta encontrada no histórico atual"
fi

echo ""
echo "📋 Próximos passos:"
echo "1. Regenerar a chave da API no Google Cloud Console"
echo "2. Configurar variáveis de ambiente (.env)"
echo "3. Testar a aplicação"
echo "4. Fazer push das mudanças (force push necessário)"
echo ""
echo "⚠️  IMPORTANTE: Se fizer force push, avise sua equipe!"
echo "💡 Comando para force push: git push --force-with-lease origin main" 