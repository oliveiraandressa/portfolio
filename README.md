# 🌟 Portfolio Andressa Oliveira

> **Front-End Developer • UI/UX Designer • QA Specialist**

Portfolio moderno e responsivo desenvolvido com HTML5, CSS3, JavaScript e TailwindCSS. Apresenta projetos, habilidades e experiência profissional de forma interativa e elegante.

## ✨ Características

- 🎨 **Design Moderno** - Interface clean com glassmorphism e animações suaves
- 🌍 **Multi-idioma** - Suporte completo para Português e Inglês
- 📱 **100% Responsivo** - Otimizado para desktop, tablet e mobile
- ⚡ **Performance** - Carregamento rápido e otimizado
- 🎭 **Interativo** - Animações AOS e transições fluidas
- 🔧 **Modular** - Código organizado e fácil manutenção

## 🚀 Demo

[**Ver Portfolio Online**](https://oliveiraandressa.github.io/portfolio/) 

## 📋 Seções

### 🏠 **Home**
Apresentação pessoal com call-to-actions e informações de disponibilidade

### 💼 **Serviços**
- Prototipagem (Figma)
- Web Design & UI
- Sistemas (Angular)
- Aplicativos (Ionic)
- Arte para Redes Sociais
- QA & Testes

### 🎯 **Projetos**
Portfolio de trabalhos realizados com filtros por categoria:
- **Web** - Dashboards e landing pages
- **Mobile** - Apps híbridos
- **Design** - Prototipagem e arte digital

### 🛠️ **Habilidades**
Visualização interativa das competências técnicas:
- **Front-End** - HTML, CSS, JavaScript, Angular
- **Design** - Figma, UI/UX
- **QA** - Automação e testes manuais

### 💬 **Depoimentos**
Feedbacks de clientes e colaboradores

### 📞 **Contato**
Links diretos para WhatsApp, LinkedIn e e-mail

## 🔧 Tecnologias

### **Core**
- HTML5 semântico
- CSS3 com Custom Properties
- JavaScript ES6+
- TailwindCSS

### **Libraries & Frameworks**
- AOS (Animate On Scroll)
- Inter Font (Google Fonts)

### **Features**
- Glassmorphism effects
- Smooth scrolling
- Lazy loading
- Progressive enhancement
- Cross-browser compatibility

## 📁 Estrutura do Projeto

```
portfolio/
├── 📁 css/
│   └── styles.css              # Estilos organizados e comentados
├── 📁 js/
│   ├── portfolio-data.js       # Dados PT/EN centralizados
│   ├── enhanced-loader.js      # Sistema de carregamento avançado
│   ├── simple-loader.js        # Loader básico
│   └── script.js               # Funcionalidades gerais
├── index-dynamic.html          # Página principal
├── debug-lang.html             # Ferramenta de debug
└── README.md                   # Documentação
```

## 🚀 Como Executar

### **Opção 1: Servidor Local (Recomendado)**

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

Acesse: `http://localhost:8000`

### **Opção 2: Live Server (VS Code)**

1. Instale a extensão **Live Server**
2. Clique com botão direito em `index-dynamic.html`
3. Selecione "Open with Live Server"

### **Opção 3: Arquivo Local**

Abra `index-dynamic.html` diretamente no navegador
*(pode ter limitações de CORS)*

## 📝 Personalização

### **Alterando Conteúdo**

Edite o arquivo `js/portfolio-data.js`:

```javascript
const PortfolioData = {
  pt: {
    personal: {
      nome: "Seu Nome",
      titulo: "Seu Título Profissional",
      // ...
    }
  }
};
```

### **Adicionando Projetos**

```javascript
projects: {
  projetos: [
    {
      id: 1,
      titulo: "Novo Projeto",
      descricao: "Descrição do projeto",
      tecnologias: "React • Node.js",
      imagem: "url-da-imagem",
      categoria: ["web"],
      destaque: true
    }
  ]
}
```

### **Customizando Cores**

No arquivo `css/styles.css`, altere as variáveis:

```css
:root {
  --primary-color: #sua-cor;
  --bg-dark: #sua-cor-de-fundo;
}
```

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+ em todas as métricas
- 🎯 **First Contentful Paint**: < 1.5s
- 📱 **Mobile Friendly**: 100% responsivo
- 🔧 **Cross-browser**: Chrome, Firefox, Safari, Edge

## 🎨 Design System

### **Cores Principais**
- **Primary**: `#9b6bff` (Roxo vibrante)
- **Background**: Gradiente dark
- **Text**: `#e6eef8` (Branco suave)

### **Tipografia**
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 600, 800

### **Efeitos**
- **Glassmorphism**: Transparências e blur
- **Animações**: AOS + CSS transitions
- **Hover States**: Transform e shadow

## 🔍 SEO & Acessibilidade

- ✅ Estrutura HTML semântica
- ✅ Meta tags otimizadas
- ✅ Alt text em imagens
- ✅ Contraste adequado
- ✅ Navegação por teclado
- ✅ Aria labels

## 📱 Responsividade

### **Breakpoints**
- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

### **Grid Adaptativo**
- Cards se reorganizam automaticamente
- Tipografia escala proporcionalmente
- Navegação mobile otimizada

## 🛠️ Manutenção

### **Atualizando Dados**
1. Edite `js/portfolio-data.js`
2. Recarregue a página
3. Não é necessário mexer no HTML

### **Adicionando Idiomas**
1. Adicione nova chave no `PortfolioData`
2. Inclua o idioma no array de detecção
3. Atualize o seletor de idiomas

### **Debug**
Use `debug-lang.html` para testar mudanças de idioma e validar dados.

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

## 👤 Contato

**Andressa Oliveira**
- 💼 LinkedIn: [linkedin.com/in/oliveiraandressa](https://linkedin.com/in/oliveiraandressa)
- 📧 Email: contato@andressaoliveira.dev
- 📱 WhatsApp: [wa.me/5511999999999](https://wa.me/5511999999999)

---

⭐ **Se gostou do projeto, deixe uma estrela!** ⭐
