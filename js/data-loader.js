/**
 * DATA LOADER - Portfolio Dinâmico
 * Carrega conteúdo via JSONs e renderiza dinamicamente
 */

class PortfolioLoader {
  constructor() {
    this.data = {};
    this.initLoader();
  }

  async initLoader() {
    try {
      await this.loadAllData();
      this.renderContent();
      this.initializeAnimations();
    } catch (error) {
      console.error('Erro ao carregar dados do portfolio:', error);
      this.showError();
    }
  }

  async loadAllData() {
    const files = [
      'personal', 'services', 'projects', 
      'skills', 'testimonials', 'contact'
    ];

    const promises = files.map(async (file) => {
      const response = await fetch(`./data/${file}.json`);
      if (!response.ok) throw new Error(`Erro ao carregar ${file}.json`);
      this.data[file] = await response.json();
    });

    await Promise.all(promises);
  }

  renderContent() {
    this.renderPersonalInfo();
    this.renderServices();
    this.renderProjects();
    this.renderSkills();
    this.renderTestimonials();
    this.renderContact();
    this.updatePageTitle();
  }

  renderPersonalInfo() {
    const { personal } = this.data;
    
    // Atualizar título da página e navbar
    document.getElementById('page-title').textContent = `${personal.nome} — Portfolio`;
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
            <a data-link href="#projects" class="inline-flex items-center gap-2 bg-rose-400 text-black font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg">${personal.botoes.ver_projetos}</a>
            <a data-link href="#contact" class="inline-flex items-center gap-2 border border-white/6 text-gray-200 px-4 py-2 rounded-full hover:bg-white/2">${personal.botoes.contato}</a>
          </div>

          <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-gray-400">
            <div class="flex flex-col">
              <span class="text-gray-300 font-semibold">Local</span>
              <span>${personal.localizacao}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-gray-300 font-semibold">Disponível</span>
              <span>${personal.disponibilidade}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-gray-300 font-semibold">Stack</span>
              <span>${personal.stack}</span>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" class="relative">
          <div class="glass-heavy rounded-2xl p-4 shadow-xl">
            <div class="flex items-center justify-between mb-3">
              <div class="w-12 h-8 rounded bg-white/5"></div>
              <div class="text-xs text-gray-400">Preview • Mobile</div>
            </div>
            <img src="${personal.imagens.hero_main}" alt="Developer workspace" class="thumb rounded-lg mx-auto">
            <div class="mt-3 grid grid-cols-2 gap-2">
              <img src="${personal.imagens.hero_small_1}" class="rounded-md" />
              <img src="${personal.imagens.hero_small_2}" class="rounded-md" />
            </div>
          </div>

          <div class="absolute -left-6 -bottom-6 glass-heavy rounded-xl px-4 py-2 text-sm shadow-md">
            <div class="font-semibold">${personal.projetos_count}</div>
            <div class="text-gray-400 text-xs">${personal.projetos_desc}</div>
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
      <button class="px-3 py-1 rounded-full ${index === 0 ? 'bg-white/3' : ''} text-xs">${filtro}</button>
    `).join(' ');

    const projectsHTML = projects.projetos.map(projeto => `
      <article data-aos="zoom-in" data-aos-delay="${projeto.delay}" class="card-custom glass-heavy rounded-2xl p-4 float-slow">
        <img src="${projeto.imagem}" class="rounded-lg thumb" alt="${projeto.titulo}">
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
        <div class="text-sm text-gray-400">Filtros: ${filtrosHTML}</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${projectsHTML}
      </div>
    `;
  }

  renderSkills() {
    const { skills } = this.data;
    const skillsContent = document.getElementById('skills-content');
    
    const categoriesHTML = skills.categorias.map(categoria => {
      const skillsHTML = categoria.skills.map(skill => `
        <div class="text-xs text-gray-300 ${categoria.skills.indexOf(skill) > 0 ? 'mt-4' : ''}">${skill.nome} <span class="float-right">${skill.nivel}%</span></div>
        <div class="w-full h-3 bg-white/5 rounded-full mt-2 overflow-hidden">
          <div class="h-3 bg-gradient-to-r ${skill.gradiente}" style="width:${skill.nivel}%"></div>
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
      <a class="contact-btn ${contato.tipo} glass-heavy inline-flex items-center gap-3 px-5 py-3 rounded-full" 
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

  updatePageTitle() {
    const { personal } = this.data;
    document.title = `${personal.nome} — Portfolio`;
  }

  initializeAnimations() {
    // Re-inicializar AOS para elementos carregados dinamicamente
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }

  showError() {
    document.body.innerHTML = `
      <div class="min-h-screen flex items-center justify-center">
        <div class="glass-heavy rounded-2xl p-8 text-center max-w-md">
          <h2 class="text-xl font-bold mb-4 text-red-300">Erro ao Carregar Portfolio</h2>
          <p class="text-gray-300 mb-4">Não foi possível carregar os dados do portfolio.</p>
          <button onclick="location.reload()" class="bg-rose-400 text-black px-4 py-2 rounded-full">
            Tentar Novamente
          </button>
        </div>
      </div>
    `;
  }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioLoader();
});