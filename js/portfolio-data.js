const PortfolioData = {
  pt: {
    personal: {
      nome: "Andressa Oliveira",
      titulo: "Andressa Oliveira",
      subtitulo: "Full Stack • IA aplicada • QA • UI/UX",
      descricao: "Desenvolvedora de software com mais de 10 anos de experiência em aplicações web, integrações com APIs, qualidade de software e squads ágeis. Atuo em todo o ciclo do software — do levantamento de requisitos à entrega — com uso prático de IA para produtividade, documentação, prototipação e apoio a decisões técnicas. Interesse em automação conversacional, chatbots e integração de sistemas.",
      tipoTrabalho: "Trabalho remoto",
      contrato: "Freelance / PJ",
      formatoTrabalho: "Fixo / sob demanda",
      experiencia: "10+ anos",
      imagens: {
        hero_main: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        hero_small_1: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format&fit=crop",
        hero_small_2: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop"
      },
      botoes: {
        ver_projetos: "Ver projetos",
        contato: "Contato"
      },
      meta: {
        title: "Andressa Oliveira — Full Stack, IA aplicada e QA",
        description: "Desenvolvedora Full Stack com 10+ anos de experiência em Angular, React, Node.js, testes automatizados e IA aplicada ao desenvolvimento."
      }
    },

    navigation: {
      home: "Home",
      services: "Serviços",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Habilidades",
      contact: "Contato",
      menu_aria: "Abrir menu"
    },

    services: {
      titulo: "Áreas de Atuação",
      servicos: [
        {
          id: 1,
          titulo: "Front-end corporativo",
          descricao: "SPAs escaláveis com componentes reutilizáveis, routing e integração com APIs REST.",
          tecnologias: "Angular • React • TypeScript • Interceptors",
          icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
          cor: "sky",
          delay: 80
        },
        {
          id: 2,
          titulo: "Back-end & APIs",
          descricao: "Serviços, endpoints e regras de negócio com integração entre front-end, back-end e banco de dados.",
          tecnologias: "Node.js • Express • REST • MySQL • PostgreSQL",
          icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2",
          cor: "indigo",
          delay: 160
        },
        {
          id: 3,
          titulo: "IA aplicada ao desenvolvimento",
          descricao: "Uso de IA generativa para documentação, prototipação, revisão de soluções e automação de fluxos de trabalho.",
          tecnologias: "IA generativa • Documentação • Prototipação • Automação",
          icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
          cor: "violet",
          delay: 240
        },
        {
          id: 4,
          titulo: "Automação conversacional",
          descricao: "Chatbots, fluxos de atendimento e integração com APIs para automação de processos conversacionais.",
          tecnologias: "Blip • Chatbots • Fluxos de atendimento • APIs",
          icon: "M21 15a5 5 0 01-5 5H8l-4 4V5a3 3 0 013-3h12a3 3 0 013 3z",
          cor: "green",
          delay: 320
        },
        {
          id: 5,
          titulo: "UI/UX & Prototipagem",
          descricao: "Interfaces responsivas alinhadas a protótipos no Figma, com foco em usabilidade e acessibilidade.",
          tecnologias: "Figma • Responsivo • Acessibilidade • UI/UX",
          icon: "M3 4a1 1 0 011-1h16a1 1 0 011 1v12a1 1 0 01-1 1h-5v2h2a1 1 0 110 2H7a1 1 0 110-2h2v-2H4a1 1 0 01-1-1V4zm2 1v10h14V5H5z",
          cor: "rose",
          delay: 400
        },
        {
          id: 6,
          titulo: "QA, testes & DevOps",
          descricao: "Testes automatizados, pipelines de CI/CD, análise de qualidade e monitoramento de aplicações.",
          tecnologias: "Jest • Cypress • Docker • CI/CD • SonarQube • Datadog",
          icon: "M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4zm-2 16l7-7-1.41-1.41L10 14.17l-2.59-2.58L6 13l4 4z",
          cor: "amber",
          delay: 480
        }
      ]
    },

    experience: {
      titulo: "Experiência Profissional",
      items: [
        {
          id: 1,
          empresa: "Localiza",
          cargo: "Desenvolvedora Front-end",
          periodo: "nov/2021 – atual",
          descricao: "Atuação híbrida em desenvolvimento e qualidade de software em aplicações corporativas.",
          entregas: [
            "Desenvolvimento de aplicações em Angular e React com componentes reutilizáveis e integração REST",
            "Interfaces responsivas alinhadas a protótipos no Figma, com foco em usabilidade e performance",
            "Testes unitários com Jest e participação em pipelines de CI/CD com SonarQube e Datadog",
            "Documentação de bugs, critérios de aceite e cenários de teste no Azure DevOps"
          ],
          tecnologias: ["Angular", "React", "TypeScript", "Jest", "CI/CD", "SonarQube", "Datadog", "Figma"],
          delay: 0
        },
        {
          id: 2,
          empresa: "Vicsa Solutions",
          cargo: "Desenvolvedora Full Stack / QA",
          periodo: "mai/2019 – atual",
          descricao: "Atuação full stack em projetos web com front-end, back-end, bancos de dados e qualidade de software.",
          entregas: [
            "APIs e serviços com Node.js e Express integrados a front-end Angular",
            "Modelagem e consultas em MySQL e PostgreSQL com Docker Compose em desenvolvimento",
            "Testes end-to-end com Cypress e estruturação de processos de QA",
            "Mentoria para QAs iniciantes e padronização de documentação e critérios de aceite"
          ],
          tecnologias: ["Angular", "Node.js", "Express", "MySQL", "PostgreSQL", "Docker", "Ionic", "Cypress"],
          delay: 120
        },
        {
          id: 3,
          empresa: "Ícaro Tech · TOTVS · Joit Solutions",
          cargo: "Desenvolvedora Front-end",
          periodo: "2018 – 2021",
          descricao: "Desenvolvimento e manutenção de sistemas corporativos em squads ágeis.",
          entregas: [
            "Funcionalidades em Angular, Ionic e Fluig com integração a APIs REST",
            "Correção de bugs, manutenção de aplicações e melhoria contínua das entregas",
            "Colaboração com produto e UX em testes funcionais e validação de regras de negócio"
          ],
          tecnologias: ["Angular", "Ionic", "Fluig", "JavaScript", "APIs REST"],
          delay: 240
        }
      ]
    },

    projects: {
      titulo: "Projetos",
      filtros: ["Todos", "Web", "Mobile", "QA", "IA"],
      projetos: [
        {
          id: 1,
          titulo: "Plataforma corporativa web",
          descricao: "Aplicações internas com Angular e React, integração REST, tratamento de erros e testes com Jest em pipeline de CI/CD.",
          tecnologias: "Angular • React • TypeScript • Jest • CI/CD",
          imagem: "https://images.unsplash.com/photo-1551281056-b31fe85ccbef?q=80&w=1200&auto=format&fit=crop",
          categoria: ["web"],
          delay: 120,
          destaque: true
        },
        {
          id: 2,
          titulo: "API e integração full stack",
          descricao: "Back-end com Node.js e Express, modelagem de dados em MySQL/PostgreSQL e orquestração com Docker Compose.",
          tecnologias: "Node.js • Express • MySQL • PostgreSQL • Docker",
          imagem: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
          categoria: ["web"],
          delay: 200,
          destaque: true
        },
        {
          id: 3,
          titulo: "App híbrido mobile",
          descricao: "Aplicativos com Ionic e Capacitor, integrações nativas e consumo de APIs para fluxos mobile corporativos.",
          tecnologias: "Ionic • Capacitor • APIs REST",
          imagem: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
          categoria: ["mobile"],
          delay: 280,
          destaque: true
        },
        {
          id: 4,
          titulo: "Fluxo de qualidade e automação",
          descricao: "Estruturação de testes E2E com Cypress, critérios de aceite e rastreabilidade de demandas no Azure DevOps.",
          tecnologias: "Cypress • Jest • Azure DevOps • QA",
          imagem: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
          categoria: ["qa"],
          delay: 360,
          destaque: false
        },
        {
          id: 5,
          titulo: "Prototipação e validação técnica",
          descricao: "Protótipos no Figma convertidos em interfaces responsivas, apoiando decisões de produto e arquitetura.",
          tecnologias: "Figma • UI/UX • Angular • React",
          imagem: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
          categoria: ["web"],
          delay: 420,
          destaque: false
        },
        {
          id: 6,
          titulo: "IA no ciclo de desenvolvimento",
          descricao: "Uso de IA generativa para documentação técnica, organização de requisitos, prototipação e automação de tarefas do dia a dia.",
          tecnologias: "IA generativa • Documentação • Automação • Blip",
          imagem: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
          categoria: ["ia"],
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
          nome: "Front-end",
          animation: "fade-right",
          skills: [
            { nome: "HTML & CSS / SASS", nivel: 92, gradiente: "from-rose-400 to-amber-400" },
            { nome: "JavaScript / TypeScript", nivel: 90, gradiente: "from-indigo-400 to-sky-400" },
            { nome: "Angular", nivel: 88, gradiente: "from-sky-400 to-indigo-400" },
            { nome: "React", nivel: 82, gradiente: "from-cyan-400 to-blue-400" }
          ]
        },
        {
          id: 2,
          nome: "Back-end & dados",
          animation: "fade-up",
          skills: [
            { nome: "Node.js & Express", nivel: 80, gradiente: "from-green-400 to-emerald-400" },
            { nome: "APIs REST", nivel: 88, gradiente: "from-indigo-400 to-violet-400" },
            { nome: "MySQL & PostgreSQL", nivel: 78, gradiente: "from-blue-400 to-cyan-400" }
          ]
        },
        {
          id: 3,
          nome: "QA & testes",
          animation: "fade-left",
          skills: [
            { nome: "Jest", nivel: 85, gradiente: "from-amber-400 to-yellow-300" },
            { nome: "Cypress", nivel: 82, gradiente: "from-orange-400 to-amber-400" },
            { nome: "Testes funcionais & regressão", nivel: 88, gradiente: "from-sky-400 to-indigo-400" }
          ]
        },
        {
          id: 4,
          nome: "DevOps & ferramentas",
          animation: "fade-right",
          skills: [
            { nome: "Docker & Git", nivel: 80, gradiente: "from-slate-400 to-gray-400" },
            { nome: "CI/CD & Azure DevOps", nivel: 78, gradiente: "from-blue-400 to-indigo-400" },
            { nome: "SonarQube & Datadog", nivel: 75, gradiente: "from-violet-400 to-purple-400" }
          ]
        },
        {
          id: 5,
          nome: "IA & automação",
          animation: "fade-up",
          skills: [
            { nome: "IA generativa aplicada", nivel: 85, gradiente: "from-violet-400 to-fuchsia-400" },
            { nome: "Chatbots & fluxos conversacionais", nivel: 70, gradiente: "from-green-400 to-teal-400" },
            { nome: "Blip (em aprendizado)", nivel: 65, gradiente: "from-emerald-400 to-green-400" }
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
      descricao: "Vamos conversar sobre o seu próximo projeto?",
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
        },
        {
          id: 4,
          tipo: "resume",
          nome: "Baixar currículo",
          url: "data/Curriculo_Andressa.pdf",
          icon: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
          cor: "violet-300",
          target: "_blank"
        }
      ],
      footer: {
        texto: "Andressa Oliveira — Desenvolvimento Full Stack & IA aplicada"
      }
    }
  },

  en: {
    personal: {
      nome: "Andressa Oliveira",
      titulo: "Andressa Oliveira",
      subtitulo: "Full Stack • Applied AI • QA • UI/UX",
      descricao: "Software developer with 10+ years of experience in web applications, API integrations, software quality, and agile squads. I work across the full software lifecycle — from requirements to delivery — using AI for productivity, documentation, prototyping, and technical decision support. Interested in conversational automation, chatbots, and system integration.",
      tipoTrabalho: "Remote work",
      contrato: "Freelance / Contract",
      formatoTrabalho: "Full-time / on-demand",
      experiencia: "10+ years",
      imagens: {
        hero_main: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        hero_small_1: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format&fit=crop",
        hero_small_2: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop"
      },
      botoes: {
        ver_projetos: "View projects",
        contato: "Contact"
      },
      meta: {
        title: "Andressa Oliveira — Full Stack, Applied AI & QA",
        description: "Full Stack developer with 10+ years of experience in Angular, React, Node.js, automated testing, and AI applied to software development."
      }
    },

    navigation: {
      home: "Home",
      services: "Services",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      menu_aria: "Open menu"
    },

    services: {
      titulo: "Areas of Expertise",
      servicos: [
        {
          id: 1,
          titulo: "Corporate front-end",
          descricao: "Scalable SPAs with reusable components, routing, and REST API integration.",
          tecnologias: "Angular • React • TypeScript • Interceptors",
          icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
          cor: "sky",
          delay: 80
        },
        {
          id: 2,
          titulo: "Back-end & APIs",
          descricao: "Services, endpoints, and business rules connecting front-end, back-end, and databases.",
          tecnologias: "Node.js • Express • REST • MySQL • PostgreSQL",
          icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2",
          cor: "indigo",
          delay: 160
        },
        {
          id: 3,
          titulo: "AI applied to development",
          descricao: "Generative AI for documentation, prototyping, solution review, and workflow automation.",
          tecnologias: "Generative AI • Documentation • Prototyping • Automation",
          icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
          cor: "violet",
          delay: 240
        },
        {
          id: 4,
          titulo: "Conversational automation",
          descricao: "Chatbots, support flows, and API integration for conversational process automation.",
          tecnologias: "Blip • Chatbots • Support flows • APIs",
          icon: "M21 15a5 5 0 01-5 5H8l-4 4V5a3 3 0 013-3h12a3 3 0 013 3z",
          cor: "green",
          delay: 320
        },
        {
          id: 5,
          titulo: "UI/UX & Prototyping",
          descricao: "Responsive interfaces aligned with Figma prototypes, focused on usability and accessibility.",
          tecnologias: "Figma • Responsive • Accessibility • UI/UX",
          icon: "M3 4a1 1 0 011-1h16a1 1 0 011 1v12a1 1 0 01-1 1h-5v2h2a1 1 0 110 2H7a1 1 0 110-2h2v-2H4a1 1 0 01-1-1V4zm2 1v10h14V5H5z",
          cor: "rose",
          delay: 400
        },
        {
          id: 6,
          titulo: "QA, testing & DevOps",
          descricao: "Automated testing, CI/CD pipelines, quality analysis, and application monitoring.",
          tecnologias: "Jest • Cypress • Docker • CI/CD • SonarQube • Datadog",
          icon: "M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4zm-2 16l7-7-1.41-1.41L10 14.17l-2.59-2.58L6 13l4 4z",
          cor: "amber",
          delay: 480
        }
      ]
    },

    experience: {
      titulo: "Professional Experience",
      items: [
        {
          id: 1,
          empresa: "Localiza",
          cargo: "Front-end Developer",
          periodo: "Nov 2021 – present",
          descricao: "Hybrid role in software development and quality for corporate applications.",
          entregas: [
            "Angular and React applications with reusable components and REST integration",
            "Responsive interfaces aligned with Figma prototypes, focused on usability and performance",
            "Unit tests with Jest and participation in CI/CD pipelines with SonarQube and Datadog",
            "Bug documentation, acceptance criteria, and test scenarios in Azure DevOps"
          ],
          tecnologias: ["Angular", "React", "TypeScript", "Jest", "CI/CD", "SonarQube", "Datadog", "Figma"],
          delay: 0
        },
        {
          id: 2,
          empresa: "Vicsa Solutions",
          cargo: "Full Stack Developer / QA",
          periodo: "May 2019 – present",
          descricao: "Full stack work on web projects spanning front-end, back-end, databases, and software quality.",
          entregas: [
            "Node.js and Express APIs integrated with Angular front-end",
            "MySQL and PostgreSQL modeling with Docker Compose in development",
            "End-to-end testing with Cypress and QA process structuring",
            "Mentoring junior QAs and standardizing documentation and acceptance criteria"
          ],
          tecnologias: ["Angular", "Node.js", "Express", "MySQL", "PostgreSQL", "Docker", "Ionic", "Cypress"],
          delay: 120
        },
        {
          id: 3,
          empresa: "Ícaro Tech · TOTVS · Joit Solutions",
          cargo: "Front-end Developer",
          periodo: "2018 – 2021",
          descricao: "Development and maintenance of corporate systems in agile squads.",
          entregas: [
            "Features in Angular, Ionic, and Fluig with REST API integration",
            "Bug fixes, application maintenance, and continuous delivery improvement",
            "Collaboration with product and UX on functional testing and business rule validation"
          ],
          tecnologias: ["Angular", "Ionic", "Fluig", "JavaScript", "REST APIs"],
          delay: 240
        }
      ]
    },

    projects: {
      titulo: "Projects",
      filtros: ["All", "Web", "Mobile", "QA", "AI"],
      projetos: [
        {
          id: 1,
          titulo: "Corporate web platform",
          descricao: "Internal applications with Angular and React, REST integration, error handling, and Jest tests in CI/CD pipelines.",
          tecnologias: "Angular • React • TypeScript • Jest • CI/CD",
          imagem: "https://images.unsplash.com/photo-1551281056-b31fe85ccbef?q=80&w=1200&auto=format&fit=crop",
          categoria: ["web"],
          delay: 120,
          destaque: true
        },
        {
          id: 2,
          titulo: "Full stack API integration",
          descricao: "Node.js and Express back-end, MySQL/PostgreSQL data modeling, and Docker Compose orchestration.",
          tecnologias: "Node.js • Express • MySQL • PostgreSQL • Docker",
          imagem: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
          categoria: ["web"],
          delay: 200,
          destaque: true
        },
        {
          id: 3,
          titulo: "Hybrid mobile app",
          descricao: "Ionic and Capacitor apps with native integrations and API consumption for corporate mobile flows.",
          tecnologias: "Ionic • Capacitor • REST APIs",
          imagem: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
          categoria: ["mobile"],
          delay: 280,
          destaque: true
        },
        {
          id: 4,
          titulo: "Quality and automation workflow",
          descricao: "E2E testing with Cypress, acceptance criteria, and demand traceability in Azure DevOps.",
          tecnologias: "Cypress • Jest • Azure DevOps • QA",
          imagem: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
          categoria: ["qa"],
          delay: 360,
          destaque: false
        },
        {
          id: 5,
          titulo: "Prototyping and technical validation",
          descricao: "Figma prototypes turned into responsive interfaces, supporting product and architecture decisions.",
          tecnologias: "Figma • UI/UX • Angular • React",
          imagem: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
          categoria: ["web"],
          delay: 420,
          destaque: false
        },
        {
          id: 6,
          titulo: "AI in the development lifecycle",
          descricao: "Generative AI for technical documentation, requirements organization, prototyping, and daily task automation.",
          tecnologias: "Generative AI • Documentation • Automation • Blip",
          imagem: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
          categoria: ["ia", "ai"],
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
          nome: "Front-end",
          animation: "fade-right",
          skills: [
            { nome: "HTML & CSS / SASS", nivel: 92, gradiente: "from-rose-400 to-amber-400" },
            { nome: "JavaScript / TypeScript", nivel: 90, gradiente: "from-indigo-400 to-sky-400" },
            { nome: "Angular", nivel: 88, gradiente: "from-sky-400 to-indigo-400" },
            { nome: "React", nivel: 82, gradiente: "from-cyan-400 to-blue-400" }
          ]
        },
        {
          id: 2,
          nome: "Back-end & data",
          animation: "fade-up",
          skills: [
            { nome: "Node.js & Express", nivel: 80, gradiente: "from-green-400 to-emerald-400" },
            { nome: "REST APIs", nivel: 88, gradiente: "from-indigo-400 to-violet-400" },
            { nome: "MySQL & PostgreSQL", nivel: 78, gradiente: "from-blue-400 to-cyan-400" }
          ]
        },
        {
          id: 3,
          nome: "QA & testing",
          animation: "fade-left",
          skills: [
            { nome: "Jest", nivel: 85, gradiente: "from-amber-400 to-yellow-300" },
            { nome: "Cypress", nivel: 82, gradiente: "from-orange-400 to-amber-400" },
            { nome: "Functional & regression testing", nivel: 88, gradiente: "from-sky-400 to-indigo-400" }
          ]
        },
        {
          id: 4,
          nome: "DevOps & tools",
          animation: "fade-right",
          skills: [
            { nome: "Docker & Git", nivel: 80, gradiente: "from-slate-400 to-gray-400" },
            { nome: "CI/CD & Azure DevOps", nivel: 78, gradiente: "from-blue-400 to-indigo-400" },
            { nome: "SonarQube & Datadog", nivel: 75, gradiente: "from-violet-400 to-purple-400" }
          ]
        },
        {
          id: 5,
          nome: "AI & automation",
          animation: "fade-up",
          skills: [
            { nome: "Applied generative AI", nivel: 85, gradiente: "from-violet-400 to-fuchsia-400" },
            { nome: "Chatbots & conversational flows", nivel: 70, gradiente: "from-green-400 to-teal-400" },
            { nome: "Blip (learning)", nivel: 65, gradiente: "from-emerald-400 to-green-400" }
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
      descricao: "Let's talk about your next project!",
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
        },
        {
          id: 4,
          tipo: "resume",
          nome: "Download resume",
          url: "data/Curriculo_Andressa.pdf",
          icon: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
          cor: "violet-300",
          target: "_blank"
        }
      ],
      footer: {
        texto: "Andressa Oliveira — Full Stack Development & Applied AI"
      }
    }
  }
};

window.PortfolioData = PortfolioData;
