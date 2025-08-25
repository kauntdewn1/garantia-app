# Makefile para mg-riscos-seguro
# Projeto de formulário de garantia de seguro - Versão Netlify

# Variáveis
NODE_MODULES = node_modules
PACKAGE_JSON = package.json
PUBLIC_DIR = public
DIST_DIR = dist

# Comandos npm
NPM = npm
NPM_INSTALL = $(NPM) install
NPM_DEV = $(NPM) run dev
NPM_TEST = $(NPM) test
NPM_TEST_WATCH = $(NPM) run test:watch
NPM_TEST_COVERAGE = $(NPM) run test:coverage
NPM_BUILD = $(NPM) run build

# Comandos Netlify
NETLIFY = netlify
NETLIFY_LOGIN = $(NETLIFY) login
NETLIFY_INIT = $(NETLIFY) init
NETLIFY_DEPLOY = $(NETLIFY) deploy --prod
NETLIFY_SERVE = $(NETLIFY) dev

# Comandos de desenvolvimento
SERVE = npx serve $(DIST_DIR)

# Cores para output
RED = \033[0;31m
GREEN = \033[0;32m
YELLOW = \033[1;33m
BLUE = \033[0;34m
NC = \033[0m # No Color

.PHONY: help install dev test test-watch test-coverage clean deploy netlify-login netlify-init netlify-serve build preview lint format security-setup

# Comando padrão
all: help

# Ajuda
help:
	@echo "$(BLUE)=== mg-riscos-seguro - Makefile (Netlify) ===$(NC)"
	@echo "$(GREEN)Comandos disponíveis:$(NC)"
	@echo "  $(YELLOW)install$(NC)          - Instala dependências do projeto"
	@echo "  $(YELLOW)dev$(NC)              - Inicia servidor de desenvolvimento"
	@echo "  $(YELLOW)test$(NC)             - Executa testes"
	@echo "  $(YELLOW)test-watch$(NC)       - Executa testes em modo watch"
	@echo "  $(YELLOW)test-coverage$(NC)    - Executa testes com cobertura"
	@echo "  $(YELLOW)clean$(NC)            - Remove node_modules e arquivos temporários"
	@echo "  $(YELLOW)build$(NC)            - Prepara build para produção"
	@echo "  $(YELLOW)preview$(NC)          - Preview do build de produção"
	@echo "  $(YELLOW)deploy$(NC)           - Faz deploy para Netlify"
	@echo "  $(YELLOW)netlify-login$(NC)    - Login no Netlify"
	@echo "  $(YELLOW)netlify-init$(NC)     - Inicializa configuração Netlify"
	@echo "  $(YELLOW)netlify-serve$(NC)    - Serve local com Netlify"
	@echo "  $(YELLOW)lint$(NC)             - Executa linting"
	@echo "  $(YELLOW)format$(NC)           - Formata código"

# Instalação de dependências
install:
	@echo "$(BLUE)Instalando dependências...$(NC)"
	@if [ ! -d "$(NODE_MODULES)" ]; then \
		$(NPM_INSTALL); \
	else \
		echo "$(YELLOW)node_modules já existe. Use 'make clean' para reinstalar.$(NC)"; \
	fi
	@echo "$(GREEN)✓ Dependências instaladas$(NC)"

# Desenvolvimento
dev:
	@echo "$(BLUE)Iniciando servidor de desenvolvimento...$(NC)"
	@$(NPM_DEV)

# Testes
test:
	@echo "$(BLUE)Executando testes...$(NC)"
	@$(NPM_TEST)

test-watch:
	@echo "$(BLUE)Executando testes em modo watch...$(NC)"
	@$(NPM_TEST_WATCH)

test-coverage:
	@echo "$(BLUE)Executando testes com cobertura...$(NC)"
	@$(NPM_TEST_COVERAGE)

# Build
build:
	@echo "$(BLUE)Preparando build para produção...$(NC)"
	@$(NPM_BUILD)
	@echo "$(GREEN)✓ Build pronto - arquivos em $(DIST_DIR)$(NC)"

# Preview do build
preview:
	@echo "$(BLUE)Iniciando preview do build...$(NC)"
	@$(NPM) run preview

# Limpeza
clean:
	@echo "$(BLUE)Limpando arquivos temporários...$(NC)"
	@rm -rf $(NODE_MODULES)
	@rm -rf $(DIST_DIR)
	@rm -rf coverage
	@rm -rf .nyc_output
	@find . -name "*.log" -type f -delete
	@echo "$(GREEN)✓ Limpeza concluída$(NC)"

# Netlify
netlify-login:
	@echo "$(BLUE)Fazendo login no Netlify...$(NC)"
	@$(NETLIFY_LOGIN)

netlify-init:
	@echo "$(BLUE)Inicializando configuração Netlify...$(NC)"
	@$(NETLIFY_INIT)

netlify-serve:
	@echo "$(BLUE)Servindo localmente com Netlify...$(NC)"
	@$(NETLIFY_SERVE)

# Deploy
deploy: build
	@echo "$(BLUE)Fazendo deploy para Netlify...$(NC)"
	@$(NETLIFY_DEPLOY)
	@echo "$(GREEN)✓ Deploy concluído$(NC)"

# Deploy apenas build
deploy-build:
	@echo "$(BLUE)Fazendo deploy apenas do build...$(NC)"
	@$(NETLIFY) deploy --dir=$(DIST_DIR)

# Linting
lint:
	@echo "$(BLUE)Executando linting...$(NC)"
	@$(NPM) run lint

# Formatação
format:
	@echo "$(YELLOW)Formatação não configurada. Configure Prettier se necessário.$(NC)"

# Verificação de dependências
check-deps:
	@echo "$(BLUE)Verificando dependências...$(NC)"
	@$(NPM) audit
	@$(NPM) outdated

# Atualização de dependências
update-deps:
	@echo "$(BLUE)Atualizando dependências...$(NC)"
	@$(NPM) update
	@echo "$(GREEN)✓ Dependências atualizadas$(NC)"

# Verificação de segurança
security-check:
	@echo "$(BLUE)Verificando vulnerabilidades de segurança...$(NC)"
	@$(NPM) audit --audit-level moderate

# Informações do projeto
info:
	@echo "$(BLUE)=== Informações do Projeto ===$(NC)"
	@echo "Nome: mg-riscos-seguro"
	@echo "Versão: 2.0.0"
	@echo "Descrição: Insurance guarantee request form - Netlify Version"
	@echo "Tecnologias: Netlify, React, Vite, Tailwind CSS"
	@echo "Testes: Jest"
	@echo "Deploy: Netlify"

# Setup inicial do projeto
setup: install netlify-login
	@echo "$(GREEN)✓ Setup inicial concluído$(NC)"
	@echo "$(BLUE)Próximos passos:$(NC)"
	@echo "  1. Configure o projeto no Netlify"
	@echo "  2. Execute 'make dev' para desenvolvimento"
	@echo "  3. Execute 'make test' para testar"
	@echo "  4. Execute 'make deploy' para fazer deploy"

# Verificação de build
check-build:
	@echo "$(BLUE)Verificando build...$(NC)"
	@if [ -d "$(DIST_DIR)" ]; then \
		echo "$(GREEN)✓ Build encontrado em $(DIST_DIR)$(NC)"; \
		ls -la $(DIST_DIR); \
	else \
		echo "$(RED)✗ Build não encontrado. Execute 'make build' primeiro.$(NC)"; \
	fi 