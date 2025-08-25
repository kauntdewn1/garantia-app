#!/bin/bash

# Script para limpar credenciais do histórico do Git
# ⚠️ ATENÇÃO: Este script modifica o histórico do Git

echo "🚨 LIMPEZA DO HISTÓRICO DO GIT"
echo "Este script irá remover credenciais expostas do histórico"
echo ""

# Verificar se estamos no diretório correto
if [ ! -f ".git/config" ]; then
    echo "❌ Erro: Execute este script na raiz do repositório Git"
    exit 1
fi

# Backup do repositório
echo "📦 Criando backup do repositório..."
cp -r .git .git.backup
echo "✅ Backup criado em .git.backup"

# Chave exposta
EXPOSED_KEY="AIzaSyBuh_XDxidMT-up0zyfUKYU1UgYya0DWzE"

echo "🔍 Procurando por credenciais expostas..."
if git log --all --full-history -- "$EXPOSED_KEY" > /dev/null 2>&1; then
    echo "⚠️  Encontradas credenciais expostas no histórico!"
    
    echo ""
    echo "Opções disponíveis:"
    echo "1. Usar git filter-branch (mais lento, mas mais seguro)"
    echo "2. Usar BFG Repo-Cleaner (mais rápido, requer Java)"
    echo "3. Cancelar"
    
    read -p "Escolha uma opção (1-3): " choice
    
    case $choice in
        1)
            echo "🧹 Usando git filter-branch..."
            git filter-branch --force --index-filter \
                "git ls-files -z | xargs -0 sed -i '' 's/$EXPOSED_KEY/REMOVED_API_KEY/g'" \
                --prune-empty --tag-name-filter cat -- --all
            echo "✅ Histórico limpo com git filter-branch"
            ;;
        2)
            echo "🧹 Usando BFG Repo-Cleaner..."
            if command -v java &> /dev/null; then
                # Download BFG se não existir
                if [ ! -f "bfg.jar" ]; then
                    echo "📥 Baixando BFG Repo-Cleaner..."
                    curl -L https://repo1.maven.org/maven2/com/madgag/bfg/1.14.0/bfg-1.14.0.jar -o bfg.jar
                fi
                
                # Criar arquivo com credenciais para remover
                echo "$EXPOSED_KEY" > credentials-to-remove.txt
                
                # Executar BFG
                java -jar bfg.jar --replace-text credentials-to-remove.txt
                
                # Limpar e reorganizar
                git reflog expire --expire=now --all
                git gc --prune=now --aggressive
                
                # Limpar arquivos temporários
                rm -f credentials-to-remove.txt bfg.jar
                
                echo "✅ Histórico limpo com BFG"
            else
                echo "❌ Java não encontrado. Instale Java para usar BFG."
                exit 1
            fi
            ;;
        3)
            echo "❌ Operação cancelada"
            exit 0
            ;;
        *)
            echo "❌ Opção inválida"
            exit 1
            ;;
    esac
else
    echo "✅ Nenhuma credencial exposta encontrada no histórico atual"
fi

echo ""
echo "🔍 Verificando se ainda há credenciais expostas..."
if git log --all --full-history -- "$EXPOSED_KEY" > /dev/null 2>&1; then
    echo "⚠️  Ainda há credenciais expostas! Verifique manualmente."
else
    echo "✅ Credenciais removidas com sucesso!"
fi

echo ""
echo "📋 Próximos passos:"
echo "1. Regenerar a chave da API no Google Cloud Console"
echo "2. Configurar variáveis de ambiente (.env)"
echo "3. Testar a aplicação"
echo "4. Fazer push das mudanças (force push se necessário)"
echo ""
echo "⚠️  IMPORTANTE: Se fizer force push, avise sua equipe!" 