const PortfolioData = {
  pt: {
    personal: {
      nome: "Andressa Oliveira",
      titulo: "Andressa Oliveira",
      subtitulo: "Full Stack • UI/UX • QA",
      descricao: "Desenvolvimento de sistemas web completos, aplicativos híbridos, prototipação em Figma e testes manuais e automatizados, em modelo fixo ou sob demanda.",
      tipoTrabalho: "Trabalho remoto",
      contrato: "Freelance / PJ",
      formatoTrabalho: "Fixo / sob demanda",
      projetos_count: "+12 projetos",
      projetos_desc: "web • mobile • design",
      imagens: {
        hero_main: "images/img_1.jpg",
        hero_small_1: "images/img_2.jpg",
        hero_small_2: "images/img_3.jpg"
      },
      botoes: {
        ver_projetos: "Ver projetos",
        contato: "Contato"
      }
    },

    services: {
      titulo: "Áreas de Atuação",
      servicos: [
        {
          id: 1,
          titulo: "Prototipagem (Figma)",
          descricao: "Protótipos funcionais e prontos para desenvolvimento.",
          tecnologias: "Figma • Wireframes • Prototipagem",
          icon: "M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 3h6v3h-6v-3zm0-10h2v6h-2V7zm-6 10h2v3H8v-3z",
          cor: "rose",
          delay: 80
        },
        {
          id: 2,
          titulo: "Web Design & UI",
          descricao: "Design responsivo, direto e focado em boas conversões.",
          tecnologias: "UI/UX • Responsivo • Acessibilidade",
          icon: "M3 4a1 1 0 011-1h16a1 1 0 011 1v12a1 1 0 01-1 1h-5v2h2a1 1 0 110 2H7a1 1 0 110-2h2v-2H4a1 1 0 01-1-1V4zm2 1v10h14V5H5z",
          cor: "indigo",
          delay: 160
        },
        {
          id: 3,
          titulo: "Sistemas",
          descricao: "Desenvolvimento de SPAs rápidas e seguras.",
          tecnologias: "Angular • React • TypeScript",
          icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
          cor: "sky",
          delay: 240
        },
        {
          id: 4,
          titulo: "Aplicativos (Ionic)",
          descricao: "Apps híbridos com integração nativa.",
          tecnologias: "Ionic • Capacitor • Integrations",
          icon: "M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h10V4H7zm3 14h4v-1h-4v1z",
          cor: "green",
          delay: 320
        },
        {
          id: 5,
          titulo: "Artes para redes",
          descricao: "Criação visual para campanhas e conteúdo.",
          tecnologias: "Photoshop • Illustrator • Canva",
          icon: "M7 2h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v12h10V4H7zm2 2h6v2H9V6zm0 3h6v2H9V9zm0 3h4v2H9v-2z",
          cor: "pink",
          delay: 400
        },
        {
          id: 6,
          titulo: "QA & Testes",
          descricao: "Automação, testes manuais e documentação objetiva.",
          tecnologias: "Cypress • Jest • Cases & Reports",
          icon: "M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4zm-2 16l7-7-1.41-1.41L10 14.17l-2.59-2.58L6 13l4 4z",
          cor: "amber",
          delay: 480
        }
      ]
    },

    projects: {
      titulo: "Projetos",
      filtros: ["Todos", "Web", "Mobile", "Design"],
      projetos: [
        {
          id: 1,
          titulo: "Dashboard Financeiro",
          descricao: "Dashboard em Angular com gráficos, filtros e SSO.",
          tecnologias: "Angular • TypeScript • Chart.js",
          imagem: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
          categoria: ["web"],
          delay: 120,
          destaque: true
        },
        {
          id: 2,
          titulo: "App Delivery (Ionic)",
          descricao: "App com mapa e pagamentos integrados.",
          tecnologias: "Ionic • Capacitor • APIs",
          imagem: "https://images.unsplash.com/photo-1551033541-2075d8363c62?q=80&w=1200&auto=format&fit=crop",
          categoria: ["mobile"],
          delay: 200,
          destaque: true
        },
        {
          id: 3,
          titulo: "Landing Pages",
          descricao: "Páginas rápidas, simples e bem otimizadas.",
          tecnologias: "HTML • CSS • SEO",
          imagem: "https://images.unsplash.com/photo-1604147706283-d711311a5b99?q=80&w=1200&auto=format&fit=crop",
          categoria: ["web"],
          delay: 280,
          destaque: true
        },
        {
          id: 4,
          titulo: "Design Social",
          descricao: "Artes para campanhas e engajamento.",
          tecnologias: "Photoshop • Illustrator",
          imagem: "https://images.unsplash.com/photo-1581276879432-15a19d654956?q=80&w=1200&auto=format&fit=crop",
          categoria: ["design"],
          delay: 360,
          destaque: false
        },
        {
          id: 5,
          titulo: "Prototipagem",
          descricao: "Fluxos navegáveis e protótipos no Figma.",
          tecnologias: "Figma • Prototyping",
          imagem: "https://images.unsplash.com/photo-1559027615-f6f1b9eaff6a?q=80&w=1200&auto=format&fit=crop",
          categoria: ["design"],
          delay: 420,
          destaque: false
        },
        {
          id: 6,
          titulo: "QA / Automação",
          descricao: "Testes manuais, automação e relatórios.",
          tecnologias: "Selenium • Cypress",
          imagem: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop",
          categoria: ["web"],
          delay: 480,
          destaque: false
        }
      ]
    },

    skills: {
      titulo: "Habilidades",
      categorias: [
        {
          id: 1,
          nome: "Front-End",
          animation: "fade-right",
          skills: [
            {
              nome: "HTML & CSS",
              nivel: 95,
              gradiente: "from-rose-400 to-amber-400"
            },
            {
              nome: "JavaScript / TypeScript",
              nivel: 90,
              gradiente: "from-indigo-400 to-sky-400"
            },
            {
              nome: "Angular",
              nivel: 85,
              gradiente: "from-sky-400 to-indigo-400"
            }
          ]
        },
        {
          id: 2,
          nome: "Design & Prototipagem",
          animation: "fade-up",
          skills: [
            {
              nome: "Figma",
              nivel: 95,
              gradiente: "from-pink-400 to-rose-300"
            },
            {
              nome: "UI/UX",
              nivel: 90,
              gradiente: "from-violet-400 to-indigo-300"
            }
          ]
        },
        {
          id: 3,
          nome: "QA & Testes",
          animation: "fade-left",
          skills: [
            {
              nome: "Automação",
              nivel: 85,
              gradiente: "from-amber-400 to-yellow-300"
            },
            {
              nome: "Testes Manuais",
              nivel: 90,
              gradiente: "from-sky-400 to-indigo-400"
            }
          ]
        }
      ]
    },

    testimonials: {
      titulo: "Depoimentos",
      depoimentos: [
        {
          id: 1,
          texto: "Andressa entrega interfaces diretas, bem feitas e sem enrolação.",
          autor: "João Silva",
          delay: 0
        },
        {
          id: 2,
          texto: "Organizada, rápida e com visão completa do front-end.",
          autor: "Maria Santos",
          delay: 120
        },
        {
          id: 3,
          texto: "Trabalhar com Andressa foi simples e eficiente. Resultado ótimo.",
          autor: "Pedro Costa",
          delay: 240
        }
      ]
    },

    contact: {
      titulo: "Contato",
      descricao: "Me chame no WhatsApp!",
      contatos: [
        {
          id: 1,
          tipo: "whatsapp",
          nome: "WhatsApp",
          url: "https://wa.me/5511993004619",
          icon: "M21 15a5 5 0 0 1-5 5H8l-4 4V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3z",
          cor: "green-300",
          target: "_blank"
        },
        {
          id: 2,
          tipo: "linkedin",
          nome: "LinkedIn",
          url: "https://linkedin.com/in/andressadeoliveira93",
          icon: "M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v6h-4V8h4v1",
          cor: "sky-300",
          target: "_blank"
        },
        {
          id: 3,
          tipo: "email",
          nome: "Email",
          url: "mailto:ms.andressa.oliveira@gmail.com",
          icon: "M3 8l9 6 9-6",
          cor: "rose-300",
          target: "_self"
        }
      ],
      footer: {
        texto: "Andressa Oliveira - Soluções digitais"
      }
    }
  },

  /* ==============================
     ENGLISH VERSION (same format)
     ============================== */

  en: {
    personal: {
      nome: "Andressa Oliveira",
      titulo: "Andressa Oliveira",
      subtitulo: "Full Stack • UI/UX • QA",
      descricao: "Development of complete web systems, hybrid apps, Figma prototyping, and manual/automated testing, available full-time or on-demand.",
      tipoTrabalho: "Remote work",
      contrato: "Freelance / Contract",
      formatoTrabalho: "Full-time / on-demand",
      imagens: {
        hero_main: "images/img_1.jpg",
        hero_small_1: "images/img_2.jpg",
        hero_small_2: "images/img_3.jpg"
      },
      botoes: {
        ver_projetos: "View Projects",
        contato: "Contact"
      }
    },

    services: {
      titulo: "Areas of Expertise",
      servicos: [
        {
          id: 1,
          titulo: "Prototyping (Figma)",
          descricao: "Functional prototypes and clean flows.",
          tecnologias: "Figma • Wireframes • Prototyping",
          icon: "M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 3h6v3h-6v-3zm0-10h2v6h-2V7zm-6 10h2v3H8v-3z",
          cor: "rose",
          delay: 80
        },
        {
          id: 2,
          titulo: "Web Design & UI",
          descricao: "Clean and responsive design with focus on usability.",
          tecnologias: "UI/UX • Responsive • Accessibility",
          icon: "M3 4a1 1 0 011-1h16a1 1 0 011 1v12a1 1 0 01-1 1h-5v2h2a1 1 0 110 2H7a1 1 0 110-2h2v-2H4a1 1 0 01-1-1V4zm2 1v10h14V5H5z",
          cor: "indigo",
          delay: 160
        },
        {
          id: 3,
          titulo: "Systems",
          descricao: "Fast and scalable SPAs.",
          tecnologias: "Angular • React • TypeScript",
          icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
          cor: "sky",
          delay: 240
        },
        {
          id: 4,
          titulo: "Apps (Ionic)",
          descricao: "Hybrid apps with native integrations.",
          tecnologias: "Ionic • Capacitor • Integrations",
          icon: "M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h10V4H7zm3 14h4v-1h-4v1z",
          cor: "green",
          delay: 320
        },
        {
          id: 5,
          titulo: "Social Media Art",
          descricao: "Visual material for posts and campaigns.",
          tecnologias: "Photoshop • Illustrator • Canva",
          icon: "M7 2h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v12h10V4H7zm2 2h6v2H9V6zm0 3h6v2H9V9zm0 3h4v2H9v-2z",
          cor: "pink",
          delay: 400
        },
        {
          id: 6,
          titulo: "QA & Testing",
          descricao: "Automation, manual testing and documentation.",
          tecnologias: "Cypress • Jest • Cases & Reports",
          icon: "M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4zm-2 16l7-7-1.41-1.41L10 14.17l-2.59-2.58L6 13l4 4z",
          cor: "amber",
          delay: 480
        }
      ]
    },

    projects: {
      titulo: "Projects",
      filtros: ["All", "Web", "Mobile", "Design"],
      projetos: [
        {
          id: 1,
          titulo: "Financial Dashboard",
          descricao: "Angular dashboard with charts, filters and SSO.",
          tecnologias: "Angular • TypeScript • Chart.js",
          imagem: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
          categoria: ["web"],
          delay: 120,
          destaque: true
        },
        {
          id: 2,
          titulo: "Delivery App (Ionic)",
          descricao: "App with map and payment integration.",
          tecnologias: "Ionic • Capacitor • APIs",
          imagem: "https://images.unsplash.com/photo-1551033541-2075d8363c62?q=80&w=1200&auto=format&fit=crop",
          categoria: ["mobile"],
          delay: 200,
          destaque: true
        },
        {
          id: 3,
          titulo: "Landing Pages",
          descricao: "Fast and SEO-friendly landing pages.",
          tecnologias: "HTML • CSS • SEO",
          imagem: "https://images.unsplash.com/photo-1604147706283-d711311a5b99?q=80&w=1200&auto=format&fit=crop",
          categoria: ["web"],
          delay: 280,
          destaque: true
        },
        {
          id: 4,
          titulo: "Social Media Art",
          descricao: "Designs for posts and campaigns.",
          tecnologias: "Photoshop • Illustrator",
          imagem: "https://images.unsplash.com/photo-1581276879432-15a19d654956?q=80&w=1200&auto=format&fit=crop",
          categoria: ["design"],
          delay: 360,
          destaque: false
        },
        {
          id: 5,
          titulo: "Prototyping",
          descricao: "Clickable flows and prototypes.",
          tecnologias: "Figma • Prototyping",
          imagem: "https://images.unsplash.com/photo-1559027615-f6f1b9eaff6a?q=80&w=1200&auto=format&fit=crop",
          categoria: ["design"],
          delay: 420,
          destaque: false
        },
        {
          id: 6,
          titulo: "QA / Automation",
          descricao: "Manual testing, automation and reports.",
          tecnologias: "Selenium • Cypress",
          imagem: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop",
          categoria: ["web"],
          delay: 480,
          destaque: false
        }
      ]
    },

    skills: {
      titulo: "Skills",
      categorias: [
        {
          id: 1,
          nome: "Front-End",
          animation: "fade-right",
          skills: [
            {
              nome: "HTML & CSS",
              nivel: 95,
              gradiente: "from-rose-400 to-amber-400"
            },
            {
              nome: "JavaScript / TypeScript",
              nivel: 90,
              gradiente: "from-indigo-400 to-sky-400"
            },
            {
              nome: "Angular",
              nivel: 85,
              gradiente: "from-sky-400 to-indigo-400"
            }
          ]
        },
        {
          id: 2,
          nome: "Design & Prototyping",
          animation: "fade-up",
          skills: [
            {
              nome: "Figma",
              nivel: 95,
              gradiente: "from-pink-400 to-rose-300"
            },
            {
              nome: "UI/UX",
              nivel: 90,
              gradiente: "from-violet-400 to-indigo-300"
            }
          ]
        },
        {
          id: 3,
          nome: "QA & Testing",
          animation: "fade-left",
          skills: [
            {
              nome: "Automation",
              nivel: 85,
              gradiente: "from-amber-400 to-yellow-300"
            },
            {
              nome: "Manual Testing",
              nivel: 90,
              gradiente: "from-sky-400 to-indigo-400"
            }
          ]
        }
      ]
    },

    testimonials: {
      titulo: "Testimonials",
      depoimentos: [
        {
          id: 1,
          texto: "Andressa delivers clear and well-designed interfaces.",
          autor: "John Silva",
          delay: 0
        },
        {
          id: 2,
          texto: "Fast, organized and consistent in quality.",
          autor: "Maria Santos",
          delay: 120
        },
        {
          id: 3,
          texto: "Great results and easy communication.",
          autor: "Peter Costa",
          delay: 240
        }
      ]
    },

    contact: {
      titulo: "Contact",
      descricao: "Message me on WhatsApp!",
      contatos: [
        {
          id: 1,
          tipo: "whatsapp",
          nome: "WhatsApp",
          url: "https://wa.me/5511993004619",
          icon: "M21 15a5 5 0 0 1-5 5H8l-4 4V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3z",
          cor: "green-300",
          target: "_blank"
        },
        {
          id: 2,
          tipo: "linkedin",
          nome: "LinkedIn",
          url: "https://linkedin.com/in/andressadeoliveira93",
          icon: "M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v6h-4V8h4v1",
          cor: "sky-300",
          target: "_blank"
        },
        {
          id: 3,
          tipo: "email",
          nome: "Email",
          url: "mailto:ms.andressa.oliveira@gmail.com",
          icon: "M3 8l9 6 9-6",
          cor: "rose-300",
          target: "_self"
        }
      ],
      footer: {
        texto: "Andressa Oliveira - Digital Solutions"
      }
    }
  }
};


// Disponibilizar globalmente
window.PortfolioData = PortfolioData;
