export const langs = {
    pt: {
        nav: { projects: "Projetos", stack: "Stack", certificates: "Certificados", contact: "Contato" },
        badge: "Disponível para novos projetos",
        heroTitle: "Davi de Sousa Amorim.",
        heroSub:
            "Desenvolvedor Full Stack construindo sistemas robustos com Rust e TypeScript.",
        heroBody:
            "Foco em arquitetura de software, performance e ferramentas de código aberto. Atualmente desenvolvendo o ecossistema DSA Digital — uma suíte de aplicações para gerenciamento.",
        ctaProjects: "Ver projetos",
        ctaContact: "Entrar em contato",
        stackTitle: "Stack Técnica",
        stack: [
            { k: "Linguagens", v: "TypeScript, Rust, Python, JavaScript" },
            { k: "Frontend", v: "React, Next, Electron, Tailwind CSS" },
            { k: "Backend", v: "Node.js, Actix (Rust), PostgreSQL, MongoDB" },
            { k: "Infra", v: "Docker, Docker Compose, Linux" },
        ],
        certificatesTitle: "Certificados",
        certificates: [
            // { type: "Bootcamp", title: "Boas vindas ao Bootcamp Itaú - Java com Inteligência Artificial", code: "KYT9BTCX", url: "/certificates/itau/KYT9BTCX.pdf", live: "Ver certificado" },
            { type: "Bootcamp", title: "Fundamentos da IA Moderna: Machine Learning, LLMs, IA Generativa e Agentes", code: "MTBVF70J", url: "/certificates/itau/MTBVF70J.pdf", live: "Ver certificado" },
        ],
        projectsTitle: "Projetos em Destaque",
        projectsSub:
            "Uma seleção de ferramentas e aplicações desenvolvidas para resolver problemas reais de gerenciamento e automação.",
        contactTitle: "Vamos construir algo juntos?",
        contactSub:
            "Sempre aberto a discussões técnicas, colaborações em projetos open source e novas oportunidades Full Stack.",
        repo: "Ver repositório",
        live: "Visitar site",
        footer: "Construído com foco em performance.",
    },
    en: {
        nav: { projects: "Projects", stack: "Stack", certificates: "Certificates", contact: "Contact" },
        badge: "Available for new projects",
        heroTitle: "Davi de Sousa Amorim.",
        heroSub:
            "Full Stack Developer building robust systems with Rust and TypeScript.",
        heroBody:
            "Focused on software architecture, performance and open source tooling. Currently building the DSA Digital ecosystem — a suite of apps for managing.",
        ctaProjects: "See projects",
        ctaContact: "Get in touch",
        stackTitle: "Technical Stack",
        stack: [
            { k: "Languages", v: "TypeScript, Rust, Python, JavaScript" },
            { k: "Frontend", v: "React, Next, Electron, Tailwind CSS" },
            { k: "Backend", v: "Node.js, Actix (Rust), PostgreSQL, MongoDB" },
            { k: "Infra", v: "Docker, Docker Compose, Linux" },
        ],
        certificatesTitle: "Certificates",
        certificates: [
            // { type: "Bootcamp", title: "Welcome to the Itaú Bootcamp – Java with Artificial Intelligence", code: "KYT9BTCX", url: "/certificates/itau/KYT9BTCX.pdf", live: "View Certificate" },
            { type: "Bootcamp", title: "Fundamentals of Modern AI: Machine Learning, LLMs, Generative AI, and Agents", code: "MTBVF70J", url: "/certificates/itau/MTBVF70J.pdf", live: "View Certificate" },
        ],
        projectsTitle: "Featured Projects",
        projectsSub:
            "A selection of tools and applications built to solve real problems in media management and automation.",
        contactTitle: "Let's build something together?",
        contactSub:
            "Always open to technical discussions, open source collaborations and new Full Stack opportunities.",
        repo: "View repository",
        live: "Visit site",
        footer: "Built with a focus on performance.",
    },
} as const;
