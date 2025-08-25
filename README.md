# MG Riscos - Seguro Garantia para Licitações

## 🚀 **Versão Netlify - Formulário de Cotação Automatizado**

Sistema moderno para solicitação de cotação de seguro garantia para licitações públicas, construído com React, Vite e deployado no Netlify.

## ✨ **Funcionalidades**

- 📝 **Formulário inteligente** com validação em tempo real
- 📎 **Upload de arquivos** (PDFs, imagens) via Netlify Functions
- 🔒 **Validação de CNPJ** automática
- 📱 **Design responsivo** com Tailwind CSS
- ⚡ **Performance otimizada** com Vite
- 🚀 **Deploy automático** no Netlify

## 🛠️ **Tecnologias**

- **Frontend**: React 18 + Vite
- **Estilização**: Tailwind CSS
- **Animações**: Framer Motion
- **Formulários**: Netlify Forms
- **Upload**: Netlify Functions
- **Deploy**: Netlify
- **Testes**: Jest

## 🚀 **Quick Start**

### 1. **Instalação**
```bash
# Clone o repositório
git clone <url-do-repositorio>
cd mg-riscos-seguro-new

# Instale as dependências
make install
# ou
npm install
```

### 2. **Desenvolvimento**
```bash
# Inicie o servidor de desenvolvimento
make dev
# ou
npm run dev
```

### 3. **Build e Deploy**
```bash
# Build para produção
make build

# Deploy para Netlify
make deploy
```

## 📋 **Comandos Disponíveis**

```bash
make help          # Lista todos os comandos
make install       # Instala dependências
make dev           # Inicia servidor de desenvolvimento
make build         # Cria build de produção
make preview       # Preview do build
make test          # Executa testes
make clean         # Limpa arquivos temporários
make deploy        # Deploy para Netlify
```

## 🌐 **Configuração Netlify**

### **1. Login no Netlify**
```bash
make netlify-login
```

### **2. Inicializar Projeto**
```bash
make netlify-init
```

### **3. Deploy Automático**
```bash
make deploy
```

## 📁 **Estrutura do Projeto**

```
├── src/
│   ├── components/          # Componentes React
│   │   ├── RequestForm.jsx  # Formulário principal
│   │   ├── Header.jsx       # Cabeçalho
│   │   └── ...
│   ├── utils/
│   │   └── netlify.js       # Utilitários Netlify
│   └── App.jsx              # App principal
├── netlify/
│   └── functions/           # Netlify Functions
│       └── upload.js        # Função de upload
├── public/                  # Arquivos estáticos
├── netlify.toml            # Configuração Netlify
└── vite.config.js          # Configuração Vite
```

## 🔧 **Configuração de Formulários**

O projeto usa **Netlify Forms** para processamento automático:

```html
<form name="cotacao-seguro" method="POST" netlify>
  <!-- Campos do formulário -->
</form>
```

### **Campos Obrigatórios:**
- Número do Edital
- PDF da Licitação
- Dados do Tomador (Empresa + CNPJ)
- Dados do Assegurado (Empresa + CNPJ)

### **Campos Opcionais:**
- Endereços
- Cartões CNPJ

## 📤 **Upload de Arquivos**

Arquivos são processados via **Netlify Functions**:

- **Tamanho máximo**: 5MB
- **Formatos aceitos**: PDF, JPG, PNG, GIF
- **Validação**: Tipo e tamanho
- **Storage**: Simulado (em produção, use Cloudinary/AWS S3)

## 🧪 **Testes**

```bash
# Executar testes
make test

# Testes em modo watch
make test-watch

# Testes com cobertura
make test-coverage
```

## 🚀 **Deploy**

### **Deploy Automático**
```bash
make deploy
```

### **Deploy Manual**
```bash
# Build
make build

# Deploy apenas do build
make deploy-build
```

## 🔒 **Segurança**

- ✅ Validação de formulários no cliente e servidor
- ✅ Validação de tipos de arquivo
- ✅ Limite de tamanho de arquivo
- ✅ Validação de CNPJ
- ✅ Headers de segurança configurados

## 📊 **Monitoramento**

- **Formulários**: Dashboard Netlify
- **Funções**: Logs Netlify Functions
- **Performance**: Lighthouse + Core Web Vitals

## 🤝 **Contribuição**

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 **Licença**

Este projeto está sob a licença MIT.

## 📞 **Suporte**

- **Email**: licitacoes@mgriscos.com
- **Documentação**: [Netlify Docs](https://docs.netlify.com/)
- **Issues**: GitHub Issues

---

**Desenvolvido com ❤️ para MG Riscos**
