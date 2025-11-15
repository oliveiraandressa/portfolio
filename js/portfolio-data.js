/**
 * PORTFOLIO DATA - Dados inline (sem CORS)
 * Todos os dados do portfolio em um arquivo JS
 */

const PortfolioData = {
  pt: {
    personal: {
      nome: "Andressa Oliveira",
      titulo: "Andressa Oliveira",
      subtitulo: "Front-End • UI/UX • QA",
      descricao: "Crio protótipos interativos no Figma, design web, sistemas em Angular, apps com Ionic e automação de testes. Interfaces limpas e foco em acessibilidade.",
      localizacao: "Jundiaí, SP",
      disponibilidade: "Freelance / PJ",
      stack: "Angular · Ionic · Figma",
      projetos_count: "+12 projetos",
      projetos_desc: "web • mobile • design",
      imagens: {
        hero_main: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        hero_small_1: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=400&auto=format&fit=crop",
        hero_small_2: "https://images.unsplash.com/photo-1551033541-2075d8363c62?q=80&w=400&auto=format&fit=crop"
      },
      botoes: {
        ver_projetos: "Ver projetos",
        contato: "Contato"
      }
    },

    services: {
      titulo: "O que eu faço",
      servicos: [
        {
          id: 1,
          titulo: "Prototipagem (Figma)",
          descricao: "Protótipos interativos e handoffs prontos para dev.",
          tecnologias: "Figma • Wireframes • Prototipagem",
          icon: "M3 7h18M3 12h18M3 17h18",
          cor: "rose",
          delay: 80
        },
        {
          id: 2,
          titulo: "Web Design & UI",
          descricao: "Design limpo, responsivo e focado em conversão.",
          tecnologias: "UI/UX • Responsivo • Acessibilidade",
          icon: "M4 6h16M4 12h8",
          cor: "indigo",
          delay: 160
        },
        {
          id: 3,
          titulo: "Sistemas (Angular)",
          descricao: "SPAs escaláveis com boas práticas e testes integrados.",
          tecnologias: "Angular • TypeScript • SSR (opcional)",
          icon: "M12 8v4l3 3",
          cor: "sky",
          delay: 240
        },
        {
          id: 4,
          titulo: "Aplicativos (Ionic)",
          descricao: "Apps híbridos com performance nativa e plugins.",
          tecnologias: "Ionic • Capacitor • Integrations",
          icon: "M3 7h18M3 12h18M3 17h18",
          cor: "green",
          delay: 320
        },
        {
          id: 5,
          titulo: "Artes para redes",
          descricao: "Imagens que comunicam e convertem.",
          tecnologias: "Photoshop • Illustrator • Canva",
          icon: "M4 6h16M4 12h16M4 18h16",
          cor: "pink",
          delay: 400
        },
        {
          id: 6,
          titulo: "QA & Testes",
          descricao: "Automação sob demanda, testes manuais e documentação técnica.",
          tecnologias: "Selenium • Playwright • Cases & Reports",
          icon: "M9 12l2 2 4-4",
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
          descricao: "Sistema em Angular com charts, filtros e autenticação SSO.",
          tecnologias: "Angular • TypeScript • Chart.js",
          imagem: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
          categoria: ["web"],
          delay: 120,
          destaque: true
        },
        {
          id: 2,
          titulo: "App Delivery (Ionic)",
          descricao: "App híbrido com geolocalização e pagamentos integrados.",
          tecnologias: "Ionic • Capacitor • APIs",
          imagem: "https://images.unsplash.com/photo-1551033541-2075d8363c62?q=80&w=1200&auto=format&fit=crop",
          categoria: ["mobile"],
          delay: 200,
          destaque: true
        },
        {
          id: 3,
          titulo: "Landing & Marketing",
          descricao: "Landing pages com foco em performance e SEO.",
          tecnologias: "HTML • CSS • SEO",
          imagem: "https://images.unsplash.com/photo-1604147706283-d711311a5b99?q=80&w=1200&auto=format&fit=crop",
          categoria: ["web"],
          delay: 280,
          destaque: true
        },
        {
          id: 4,
          titulo: "Artes & Social",
          descricao: "Templates para campanha e posts.",
          tecnologias: "Photoshop • Illustrator",
          imagem: "https://images.unsplash.com/photo-1581276879432-15a19d654956?q=80&w=1200&auto=format&fit=crop",
          categoria: ["design"],
          delay: 360,
          destaque: false
        },
        {
          id: 5,
          titulo: "Prototipagem",
          descricao: "Fluxos e clickable prototypes no Figma.",
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
          texto: "Andressa entrega interfaces elegantes e funcionais, sempre com atenção aos detalhes.",
          autor: "João Silva",
          delay: 0
        },
        {
          id: 2,
          texto: "Profissional dedicada, domina tanto design quanto desenvolvimento front-end.",
          autor: "Maria Santos",
          delay: 120
        },
        {
          id: 3,
          texto: "Trabalhar com Andressa foi uma experiência incrível, resultados sempre excelentes.",
          autor: "Pedro Costa",
          delay: 240
        }
      ]
    },

    contact: {
      titulo: "Contato",
      descricao: "Entre em contato direto - respondo rápido via WhatsApp.",
      contatos: [
        {
          id: 1,
          tipo: "whatsapp",
          nome: "WhatsApp",
          url: "https://wa.me/5511999999999",
          icon: "M21 15a5 5 0 0 1-5 5H8l-4 4V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3z",
          cor: "green-300",
          target: "_blank"
        },
        {
          id: 2,
          tipo: "linkedin",
          nome: "LinkedIn",
          url: "https://linkedin.com/in/seulinkedin",
          icon: "M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v6h-4V8h4v1",
          cor: "sky-300",
          target: "_blank"
        },
        {
          id: 3,
          tipo: "email",
          nome: "Email",
          url: "mailto:seuemail@email.com",
          icon: "M3 8l9 6 9-6",
          cor: "rose-300",
          target: "_self"
        }
      ],
      footer: {
        texto: "Andressa Oliveira - Front-End Developer"
      }
    }
  },

  en: {
    personal: {
      nome: "Andressa Oliveira",
      titulo: "Andressa Oliveira",
      subtitulo: "Front-End • UI/UX • QA",
      descricao: "I create interactive prototypes in Figma, web design, Angular systems, Ionic apps and test automation. Clean interfaces and focus on accessibility.",
      localizacao: "Jundiaí, SP",
      disponibilidade: "Freelance / Contract",
      stack: "Angular · Ionic · Figma",
      projetos_count: "+12 projects",
      projetos_desc: "web • mobile • design",
      imagens: {
        hero_main: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        hero_small_1: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=400&auto=format&fit=crop",
        hero_small_2: "https://images.unsplash.com/photo-1551033541-2075d8363c62?q=80&w=400&auto=format&fit=crop"
      },
      botoes: {
        ver_projetos: "View Projects",
        contato: "Contact"
      }
    },

    services: {
      titulo: "What I Do",
      servicos: [
        {
          id: 1,
          titulo: "Prototyping (Figma)",
          descricao: "Interactive prototypes and dev-ready handoffs.",
          tecnologias: "Figma • Wireframes • Prototyping",
          icon: "M3 7h18M3 12h18M3 17h18",
          cor: "rose",
          delay: 80
        },
        {
          id: 2,
          titulo: "Web Design & UI",
          descricao: "Clean, responsive design focused on conversion.",
          tecnologias: "UI/UX • Responsive • Accessibility",
          icon: "M4 6h16M4 12h8",
          cor: "indigo",
          delay: 160
        },
        {
          id: 3,
          titulo: "Systems (Angular)",
          descricao: "Scalable SPAs with best practices and integrated tests.",
          tecnologias: "Angular • TypeScript • SSR (optional)",
          icon: "M12 8v4l3 3",
          cor: "sky",
          delay: 240
        },
        {
          id: 4,
          titulo: "Apps (Ionic)",
          descricao: "Hybrid apps with native performance and plugins.",
          tecnologias: "Ionic • Capacitor • Integrations",
          icon: "M3 7h18M3 12h18M3 17h18",
          cor: "green",
          delay: 320
        },
        {
          id: 5,
          titulo: "Social Media Art",
          descricao: "Images that communicate and convert.",
          tecnologias: "Photoshop • Illustrator • Canva",
          icon: "M4 6h16M4 12h16M4 18h16",
          cor: "pink",
          delay: 400
        },
        {
          id: 6,
          titulo: "QA & Testing",
          descricao: "On-demand automation, manual testing and technical documentation.",
          tecnologias: "Selenium • Playwright • Cases & Reports",
          icon: "M9 12l2 2 4-4",
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
          descricao: "Angular system with charts, filters and SSO authentication.",
          tecnologias: "Angular • TypeScript • Chart.js",
          imagem: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
          categoria: ["web"],
          delay: 120,
          destaque: true
        },
        {
          id: 2,
          titulo: "Delivery App (Ionic)",
          descricao: "Hybrid app with geolocation and integrated payments.",
          tecnologias: "Ionic • Capacitor • APIs",
          imagem: "https://images.unsplash.com/photo-1551033541-2075d8363c62?q=80&w=1200&auto=format&fit=crop",
          categoria: ["mobile"],
          delay: 200,
          destaque: true
        },
        {
          id: 3,
          titulo: "Landing & Marketing",
          descricao: "Landing pages focused on performance and SEO.",
          tecnologias: "HTML • CSS • SEO",
          imagem: "https://images.unsplash.com/photo-1604147706283-d711311a5b99?q=80&w=1200&auto=format&fit=crop",
          categoria: ["web"],
          delay: 280,
          destaque: true
        },
        {
          id: 4,
          titulo: "Social Media Art",
          descricao: "Campaign templates and posts.",
          tecnologias: "Photoshop • Illustrator",
          imagem: "https://images.unsplash.com/photo-1581276879432-15a19d654956?q=80&w=1200&auto=format&fit=crop",
          categoria: ["design"],
          delay: 360,
          destaque: false
        },
        {
          id: 5,
          titulo: "Prototyping",
          descricao: "Flows and clickable prototypes in Figma.",
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
          texto: "Andressa delivers elegant and functional interfaces, always with attention to detail.",
          autor: "John Silva",
          delay: 0
        },
        {
          id: 2,
          texto: "Dedicated professional, masters both design and front-end development.",
          autor: "Maria Santos",
          delay: 120
        },
        {
          id: 3,
          texto: "Working with Andressa was an incredible experience, always excellent results.",
          autor: "Peter Costa",
          delay: 240
        }
      ]
    },

    contact: {
      titulo: "Contact",
      descricao: "Get in touch directly - I respond quickly via WhatsApp.",
      contatos: [
        {
          id: 1,
          tipo: "whatsapp",
          nome: "WhatsApp",
          url: "https://wa.me/5511999999999",
          icon: "M21 15a5 5 0 0 1-5 5H8l-4 4V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3z",
          cor: "green-300",
          target: "_blank"
        },
        {
          id: 2,
          tipo: "linkedin",
          nome: "LinkedIn",
          url: "https://linkedin.com/in/seulinkedin",
          icon: "M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v6h-4V8h4v1",
          cor: "sky-300",
          target: "_blank"
        },
        {
          id: 3,
          tipo: "email",
          nome: "Email",
          url: "mailto:seuemail@email.com",
          icon: "M3 8l9 6 9-6",
          cor: "rose-300",
          target: "_self"
        }
      ],
      footer: {
        texto: "Andressa Oliveira - Front-End Developer"
      }
    }
  }
};

// Disponibilizar globalmente
window.PortfolioData = PortfolioData;