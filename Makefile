# Makefile para mg-riscos-seguro
# Projeto de formulário de garantia de seguro - Versão IPFS Lite (Soberana)

# Variáveis
NODE_MODULES = node_modules
PACKAGE_JSON = package.json
PNPM_LOCK = pnpm-lock.yaml
PUBLIC_DIR = public
DIST_DIR = dist

# Comandos pnpm
PNPM = pnpm
PNPM_INSTALL = $(PNPM) install
PNPM_DEV = $(PNPM) dev
PNPM_TEST = $(PNPM) test
PNPM_TEST_WATCH = $(PNPM) test:watch
PNPM_TEST_COVERAGE = $(PNPM) test:coverage
PNPM_BUILD = $(PNPM) build
PNPM_LINT = $(PNPM) lint
PNPM_PREVIEW = $(PNPM) preview

# Comandos de desenvolvimento
SERVE = npx serve $(DIST_DIR)

# Cores para output
RED = \033[0;31m
GREEN = \033[0;32m
YELLOW = \033[1;33m
BLUE = \033[0;34m
NC = \033[0m # No Color

.PHONY: help install dev test test-watch test-coverage clean build preview lint format security-check info setup check-build

# Comando padrão
all: help

# Ajuda
help:
	@echo "$(BLUE)=== mg-riscos-seguro - Makefile (IPFS Lite) ===$(NC)"
	@echo "$(GREEN)Comandos disponíveis:$(NC)"
	@echo "  $(YELLOW)install$(NC)          - Instala dependências usando pnpm"
	@echo "  $(YELLOW)dev$(NC)              - Inicia servidor de desenvolvimento"
	@echo "  $(YELLOW)test$(NC)             - Executa testes"
	@echo "  $(YELLOW)test-watch$(NC)       - Executa testes em modo watch"
	@echo "  $(YELLOW)test-coverage$(NC)    - Executa testes com cobertura"
	@echo "  $(YELLOW)clean$(NC)            - Remove node_modules e arquivos de build"
	@echo "  $(YELLOW)build$(NC)            - Prepara build estático para IPFS (./base)"
	@echo "  $(YELLOW)preview$(NC)          - Preview local do build de produção"
	@echo "  $(YELLOW)lint$(NC)             - Executa linting e verificação estática"
	@echo "  $(YELLOW)security-check$(NC)   - Verifica vulnerabilidades (pnpm audit)"
	@echo "  $(YELLOW)info$(NC)             - Mostra informações da arquitetura atual"

# Instalação de dependências
install:
	@echo "$(BLUE)Instalando dependências com pnpm...$(NC)"
	@$(PNPM_INSTALL)
	@echo "$(GREEN)✓ Dependências instaladas$(NC)"

# Desenvolvimento
dev:
	@echo "$(BLUE)Iniciando servidor de desenvolvimento...$(NC)"
	@$(PNPM_DEV)

# Testes
test:
	@echo "$(BLUE)Executando testes...$(NC)"
	@$(PNPM_TEST)

test-watch:
	@echo "$(BLUE)Executando testes em modo watch...$(NC)"
	@$(PNPM_TEST_WATCH)

test-coverage:
	@echo "$(BLUE)Executando testes com cobertura...$(NC)"
	@$(PNPM_TEST_COVERAGE)

# Build para IPFS
build:
	@echo "$(BLUE)Gerando build estático otimizado para IPFS...$(NC)"
	@$(PNPM_BUILD)
	@echo "$(GREEN)✓ Build pronto em $(DIST_DIR) - Pronto para Pinata/Fleek/IPFS Gateway$(NC)"

# Preview do build
preview:
	@echo "$(BLUE)Iniciando preview do build...$(NC)"
	@$(PNPM_PREVIEW)

# Limpeza
clean:
	@echo "$(BLUE)Limpando ambiente...$(NC)"
	@rm -rf $(NODE_MODULES)
	@rm -rf $(DIST_DIR)
	@rm -rf coverage
	@rm -rf .nyc_output
	@find . -name "*.log" -type f -delete
	@echo "$(GREEN)✓ Limpeza concluída$(NC)"

# Linting
lint:
	@echo "$(BLUE)Executando linting...$(NC)"
	@$(PNPM_LINT)

# Verificação de segurança
security-check:
	@echo "$(BLUE)Auditando dependências...$(NC)"
	@$(PNPM) audit

# Informações do projeto
info:
	@echo "$(BLUE)=== Arquitetura IPFS Lite ===$(NC)"
	@echo "Foco: Soberania e Descentralização"
	@echo "Hospedagem: Estática (IPFS/IPNS)"
	@echo "Roteamento: HashRouter (Client-side)"
	@echo "Backend: Webhook / Google App Script (MailApp)"
	@echo "Gerente: pnpm"
	@echo "Base URL: ./"

# Setup inicial
setup: clean install
	@echo "$(GREEN)✓ Ambiente regenerado com pnpm$(NC)"

# Verificação de build
check-build:
	@echo "$(BLUE)Verificando integridade do build...$(NC)"
	@if [ -d "$(DIST_DIR)" ]; then \
		echo "$(GREEN)✓ Build encontrado em $(DIST_DIR)$(NC)"; \
		ls -lh $(DIST_DIR); \
	else \
		echo "$(RED)✗ Build não encontrado. Execute 'make build'$(NC)"; \
	fi 