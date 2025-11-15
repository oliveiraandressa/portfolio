/**
 * Portfolio Dinâmico com Multi-idioma
 */

class EnhancedPortfolioLoader {
  constructor() {
    this.data = {};
    this.currentLang = 'pt'; // Idioma padrão
    this.cache = new Map();
    this.initLoader();
  }

  initLoader() {
    try {
      // Verificar se dados estão disponíveis
      if (!window.PortfolioData) {
        throw new Error('Dados do portfolio não encontrados. Certifique-se de que portfolio-data.js foi carregado.');
      }

      // Detectar idioma do navegador ou localStorage
      this.detectLanguage();
      this.loadDataFromInlineSource();
      this.renderContent();
      this.updateNavigationTexts();
      this.setupLanguageSelector();
      this.initializeAnimations();

    } catch (error) {
      console.error('Erro ao carregar dados do portfolio:', error);
      this.showError();
    }
  }

  detectLanguage() {
    // Verificar se há idioma salvo no localStorage
    const savedLang = localStorage.getItem('portfolio-lang');
    if (savedLang && ['pt', 'en'].includes(savedLang)) {
      this.currentLang = savedLang;
      return;
    }

    // Detectar idioma do navegador
    const browserLang = navigator.language.substring(0, 2);
    this.currentLang = ['pt', 'en'].includes(browserLang) ? browserLang : 'pt';

    // Verificar se os dados para o idioma detectado existem
    if (!this.isLanguageDataComplete(this.currentLang)) {
      this.currentLang = 'pt';
    }
  }

  isLanguageDataComplete(lang) {
    const data = window.PortfolioData?.[lang];
    if (!data) return false;

    // Verificar se as seções principais existem
    const requiredSections = ['personal', 'services', 'projects', 'skills', 'testimonials', 'contact'];
    return requiredSections.every(section => data[section] && typeof data[section] === 'object');
  }

  loadDataFromInlineSource() {
    const portfolioData = window.PortfolioData[this.currentLang];

    if (!portfolioData) {
      this.currentLang = 'pt';
      this.data = window.PortfolioData['pt'];
    } else {
      this.data = portfolioData;
    }

  }

  setupLanguageSelector() {
    const langSelect = document.getElementById('langSelect');
    if (!langSelect) return;

    // Definir valor atual
    langSelect.value = this.currentLang;

    // Listener para mudança de idioma
    langSelect.addEventListener('change', (e) => {
      const newLang = e.target.value;
      if (newLang !== this.currentLang) {
        this.switchLanguage(newLang);
      }
    });
  }

  switchLanguage(newLang) {
    try {

      // Verificar se o idioma de destino tem dados completos
      if (!this.isLanguageDataComplete(newLang)) {

        // Atualizar o seletor para o idioma atual
        const langSelect = document.getElementById('langSelect');
        if (langSelect) langSelect.value = this.currentLang;

        return;
      }

      // Mostrar loading
      this.showLoadingOverlay('Mudando idioma...');

      this.currentLang = newLang;
      localStorage.setItem('portfolio-lang', newLang);

      // Atualizar o seletor
      const langSelect = document.getElementById('langSelect');
      if (langSelect) langSelect.value = this.currentLang;

      // Recarregar dados no novo idioma
      this.loadDataFromInlineSource();
      this.renderContent();
      this.updateNavigationTexts();
      this.initializeAnimations();

      // Esconder loading
      this.hideLoadingOverlay();

    } catch (error) {
      console.error('Erro ao trocar idioma:', error);
      this.hideLoadingOverlay();
    }
  }

  showLoadingOverlay(message = 'Carregando...') {
    const overlay = document.getElementById('pageOverlay');
    if (overlay) {
      overlay.classList.add('show');
    }
  }

  hideLoadingOverlay() {
    const overlay = document.getElementById('pageOverlay');
    if (overlay) {
      overlay.classList.remove('show');
    }
  }

  updateNavigationTexts() {
    const { navigation } = this.data;
    if (!navigation) return;

    // Atualizar links de navegação desktop
    document.querySelectorAll('[data-nav]').forEach(element => {
      const navKey = element.getAttribute('data-nav');
      if (navigation[navKey]) {
        if (element.tagName.toLowerCase() === 'button') {
          element.setAttribute('aria-label', navigation[navKey]);
        } else {
          element.textContent = navigation[navKey];
        }
      }
    });
  }

  renderContent() {
    this.renderPersonalInfo();
    this.renderServices();
    this.renderProjects();
    this.renderSkills();
    this.renderTestimonials();
    this.renderContact();
  }

  renderPersonalInfo() {
    const { personal } = this.data;

    // Atualizar navbar
    document.getElementById('brandBtn').textContent = personal.nome;

    // Renderizar seção hero
    const homeContent = document.getElementById('home-content');
    homeContent.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right" data-aos-duration="900">
          <p class="text-sm text-rose-300/90 font-semibold mb-3">${personal.subtitulo}</p>
          <h1 class="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white max-w-xl">${personal.titulo}</h1>
          <p class="mt-4 text-gray-300 max-w-xl">${personal.descricao}</p>

          <div class="mt-6 flex flex-wrap gap-3">
            <a data-link href="#contact" class="inline-flex items-center gap-2 bg-rose-400 text-black font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg">${personal.botoes.contato}</a>
            <!-- <a data-link href="#contact" class="inline-flex items-center gap-2 border border-white/6 text-gray-200 px-4 py-2 rounded-full hover:bg-white/2">${personal.botoes.contato}</a> -->
          </div>

          <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-gray-400">
            <div class="flex flex-col">
              <span class="text-gray-300 font-semibold">${this.currentLang === 'pt' ? 'Disponível para' : 'Available for'}</span>
              <span>${personal.tipoTrabalho}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-gray-300 font-semibold">${this.currentLang === 'pt' ? 'Tipo de Contrato' : 'Contract'}</span>
              <span>${personal.contrato}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-gray-300 font-semibold">
              ${this.currentLang === 'pt' ? 'Formato de trabalho' : 'Work format'}
              </span>
              <span>${personal.formatoTrabalho}</span>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" class="relative">
          <div class="glass-heavy rounded-2xl p-4 shadow-xl">
            <img src="${personal.imagens.hero_main}" alt="Developer workspace" class="thumb rounded-lg mx-auto">
            <div class="mt-3 grid grid-cols-2 gap-2">
              <img src="${personal.imagens.hero_small_1}" class="rounded-md" />
              <img src="${personal.imagens.hero_small_2}" class="rounded-md" />
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderServices() {
    const { services } = this.data;
    const servicesContent = document.getElementById('services-content');

    const servicesHTML = services.servicos.map(servico => `
      <article data-aos="fade-up" data-aos-delay="${servico.delay}" class="glass-heavy rounded-2xl p-6">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-lg bg-${servico.cor}-400/10 flex items-center justify-center">
            <svg class="w-6 h-6 text-${servico.cor}-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="${servico.icon}"/>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold">${servico.titulo}</h3>
            <p class="text-gray-300 text-sm mt-1">${servico.descricao}</p>
          </div>
        </div>
        <div class="mt-4 text-xs text-gray-400">${servico.tecnologias}</div>
      </article>
    `).join('');

    servicesContent.innerHTML = `
      <h2 class="text-2xl font-extrabold mb-6" data-aos="fade-up">${services.titulo}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${servicesHTML}
      </div>
    `;
  }

  renderProjects() {
    const { projects } = this.data;
    const projectsContent = document.getElementById('projects-content');

    const filtrosHTML = projects.filtros.map((filtro, index) => `
      <button class="px-3 py-1 rounded-full ${index === 0 ? 'bg-white/3' : ''} text-xs project-filter" data-filter="${filtro.toLowerCase()}">${filtro}</button>
    `).join(' ');

    const projectsHTML = projects.projetos.map(projeto => `
      <article data-aos="zoom-in" data-aos-delay="${projeto.delay}" class="card-custom glass-heavy rounded-2xl p-4 float-slow project-item" data-categories="${projeto.categoria.join(' ').toLowerCase()}">
        <img src="${projeto.imagem}" class="rounded-lg thumb" alt="${projeto.titulo}" loading="lazy">
        <div class="mt-4">
          <h3 class="font-semibold ${projeto.destaque ? 'text-lg' : ''}">${projeto.titulo}</h3>
          <p class="text-gray-300 text-sm mt-1">${projeto.descricao}</p>
          <div class="mt-3 text-xs text-gray-400">${projeto.tecnologias}</div>
        </div>
      </article>
    `).join('');

    projectsContent.innerHTML = `
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-extrabold" data-aos="fade-up">${projects.titulo}</h2>
        <div class="text-sm text-gray-400">${this.currentLang === 'pt' ? 'Filtros:' : 'Filters:'} ${filtrosHTML}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6" id="projects-grid">
        ${projectsHTML}
      </div>
    `;

    // Adicionar funcionalidade de filtros
    this.setupProjectFilters();
  }

  setupProjectFilters() {
    const filters = document.querySelectorAll('.project-filter');
    const projects = document.querySelectorAll('.project-item');

    filters.forEach(filter => {
      filter.addEventListener('click', (e) => {
        const targetFilter = e.target.dataset.filter;

        // Atualizar botão ativo
        filters.forEach(f => f.classList.remove('bg-white/3'));
        e.target.classList.add('bg-white/3');

        // Filtrar projetos
        projects.forEach(project => {
          const categories = project.dataset.categories;
          // Verifica se é "todos/all" ou se a categoria inclui o filtro
          if (targetFilter === 'todos' || targetFilter === 'all' || categories.includes(targetFilter)) {
            project.style.display = 'block';
          } else {
            project.style.display = 'none';
          }
        });
      });
    });
  }

  renderSkills() {
    const { skills } = this.data;
    const skillsContent = document.getElementById('skills-content');

    const categoriesHTML = skills.categorias.map(categoria => {
      const skillsHTML = categoria.skills.map(skill => `
        <div class="text-xs text-gray-300 ${categoria.skills.indexOf(skill) > 0 ? 'mt-4' : ''}">${skill.nome} <span class="float-right">${skill.nivel}%</span></div>
        <div class="w-full h-3 bg-white/5 rounded-full mt-2 overflow-hidden">
          <div class="h-3 bg-gradient-to-r ${skill.gradiente} transition-all duration-1000 ease-out" style="width:0%" data-width="${skill.nivel}%"></div>
        </div>
      `).join('');

      return `
        <div data-aos="${categoria.animation}" class="skill-box glass-heavy rounded-2xl p-6">
          <h4 class="font-semibold mb-4">${categoria.nome}</h4>
          ${skillsHTML}
        </div>
      `;
    }).join('');

    skillsContent.innerHTML = `
      <h2 class="text-2xl font-extrabold mb-6" data-aos="fade-up">${skills.titulo}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${categoriesHTML}
      </div>
    `;

    // Animar barras de progresso
    this.animateSkillBars();
  }

  animateSkillBars() {
    setTimeout(() => {
      const skillBars = document.querySelectorAll('[data-width]');
      skillBars.forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
    }, 500);
  }

  renderTestimonials() {
    const { testimonials } = this.data;
    const testimonialsContent = document.getElementById('testimonials-content');

    const testimonialsHTML = testimonials.depoimentos.map(depoimento => `
      <div data-aos="fade-up" data-aos-delay="${depoimento.delay}" class="testimonial-card glass-heavy p-6 rounded-2xl">
        <p class="text-gray-200">"${depoimento.texto}"</p>
        <div class="mt-4 font-semibold">— ${depoimento.autor}</div>
      </div>
    `).join('');

    testimonialsContent.innerHTML = `
      <h2 class="text-2xl font-extrabold mb-6" data-aos="fade-up">${testimonials.titulo}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${testimonialsHTML}
      </div>
    `;
  }

  renderContact() {
    const { contact } = this.data;
    const contactContent = document.getElementById('contact-content');
    const footerContent = document.getElementById('footer-content');

    const contactsHTML = contact.contatos.map(contato => `
      <a class="contact-btn ${contato.tipo} glass-heavy inline-flex items-center gap-3 px-5 py-3 rounded-full hover:scale-105 transition-transform"
         href="${contato.url}"
         ${contato.target === '_blank' ? 'target="_blank" rel="noreferrer"' : ''}>
        <svg class="w-5 h-5 text-${contato.cor}" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="${contato.icon}"/>
        </svg>
        ${contato.nome}
      </a>
    `).join('');

    contactContent.innerHTML = `
      <h2 class="text-2xl font-extrabold mb-6" data-aos="fade-up">${contact.titulo}</h2>
      <p class="text-gray-300 mb-6">${contact.descricao}</p>
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        ${contactsHTML}
      </div>
    `;

    footerContent.innerHTML = `
      <div class="page-width mx-auto text-center text-sm text-gray-500">
        © <span id="year"></span> ${contact.footer.texto}
      </div>
    `;
  }

  initializeAnimations() {
    // Re-inicializar AOS para elementos carregados dinamicamente
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }

    // Aplicar animações customizadas se necessário
    this.setupCustomAnimations();
  }

  setupCustomAnimations() {
    // Exemplo: fade in suave para cards
    const cards = document.querySelectorAll('.glass-heavy');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';

      setTimeout(() => {
        card.style.transition = 'all 0.6s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }

  showError() {
    document.body.innerHTML = `
      <div class="min-h-screen flex items-center justify-center">
        <div class="glass-heavy rounded-2xl p-8 text-center max-w-md">
          <h2 class="text-xl font-bold mb-4 text-red-300">❌ Erro ao Carregar Portfolio</h2>
          <p class="text-gray-300 mb-4">Não foi possível carregar os dados do portfolio.</p>
          <button onclick="location.reload()" class="bg-rose-400 text-black px-4 py-2 rounded-full hover:bg-rose-300 transition-colors">
            🔄 Tentar Novamente
          </button>
        </div>
      </div>
    `;
  }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
  new EnhancedPortfolioLoader();
});
