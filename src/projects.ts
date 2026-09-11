import type { Project } from "./types/project";

export const projects: Project[] = [
    {
        name: "Easy API Consumer",
        tag: "Node.js · API",
        descPt: "Node Module para construir consumidores de APIs de forma simples.",
        descEn: "Node Module to build API consumers in a simple way.",
        techs: ["TypeScript", "Node.js"],
        repo: "https://github.com/Open-yLorde/easy-api-consumer",
        live: "https://npmjs.com/package/easy-api-consumer",
        initials: "EA",
        hue: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    },
    {
        name: "DSA Digital",
        tag: "Website · Full stack",
        techs: ["React", "TypeScript", "Rust", "PostgreSQL", "VPS", "Docker", "CI/CD"],
        live: "https://www.dsadigital.com.br",
        descPt: "Micro SaaS",
        descEn: "Micro SaaS",
        initials: "DSA",
        hue: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    },
    {
        name: "Sedna Worker",
        tag: "Rust · Tokio",
        descPt: "Worker para heartbeat e cálculo de status de servidores.",
        descEn: "Worker for heartbeat and server status calculation.",
        techs: ["Rust", "Tokio", "Docker", "PostgreSQL", "Docker Compose"],
        repo: "https://github.com/Open-yLorde/sedna-worker",
        initials: "SW",
        hue: "from-orange-500/20 via-orange-500/5 to-transparent",
    },
    {
        name: "VShelf — Desktop App",
        tag: "Electron · Rust",
        descPt:
            "Aplicação desktop para gerenciamento de bibliotecas de títulos (filmes, séries, livros) com metadados automáticos e armazenamento local.",
        descEn:
            "Desktop application for managing media libraries (movies, series, books) with automatic metadata fetching and local storage.",
        techs: ["TypeScript", "React", "Electron", "Rust", "SQLite"],
        repo: "https://github.com/Open-yLorde/app-dev",
        initials: "VS",
        hue: "from-teal-500/20 via-teal-500/5 to-transparent",
    },
    {
        name: "VShelf — Website",
        tag: "React · Tailwind",
        descPt:
            "Site oficial e versão web do gerenciador VShelf, com sincronização e interface responsiva.",
        descEn:
            "Official website and web version of the VShelf manager, with sync and responsive UI.",
        techs: ["TypeScript", "React", "TailwindCSS", "PostgreSQL"],
        repo: "https://github.com/Open-yLorde/vshelf-website-dev",
        initials: "VW",
        hue: "from-sky-500/20 via-sky-500/5 to-transparent",
    },
    {
        name: "VShelf — Old Backend",
        tag: "Rust · Actix",
        descPt:
            "Primeira versão do backend do VShelf escrita em Rust com Actix Web, focada em throughput e baixa latência.",
        descEn:
            "First iteration of the VShelf backend written in Rust with Actix Web, focused on throughput and low latency.",
        techs: ["Rust", "Actix", "PostgreSQL", "Docker"],
        repo: "https://github.com/VShelf/flint_api",
        initials: "OB",
        hue: "from-orange-500/20 via-orange-500/5 to-transparent",
    },
    {
        name: "JS Scripts",
        tag: "JavaScript",
        descPt:
            "Coleção de snippets e soluções práticas para desenvolvimento web, disponibilizada como site público.",
        descEn:
            "Collection of practical web development snippets and solutions, published as a public site.",
        techs: ["JavaScript", "HTML", "CSS"],
        repo: "https://github.com/VShelf/js-scripts.vshelf.app",
        // live: "https://js-scripts.vshelf.app/",
        initials: "JS",
        hue: "from-yellow-500/20 via-yellow-500/5 to-transparent",
    },
    {
        name: "Movie Finder",
        tag: "Node.js · Scraping",
        descPt:
            "Função simples que busca dados de filmes via scraping no TheMovieDB — útil para apps Electron sem chave de API.",
        descEn:
            "Simple function that scrapes movie data from TheMovieDB — useful for Electron apps without an API key.",
        techs: ["Node.js", "JavaScript", "Axios", "Cheerio"],
        repo: "https://github.com/Open-yLorde/movie-finder",
        initials: "MF",
        hue: "from-rose-500/20 via-rose-500/5 to-transparent",
    },
    {
        name: "Get TMDb Title ID",
        tag: "Node.js · API",
        descPt:
            "Utilitário para descobrir o ID de filmes ou séries no TMDb — atalho útil quando se trabalha com a API oficial.",
        descEn:
            "Utility to look up movie or series IDs on TMDb — a handy shortcut when working with the official API.",
        techs: ["Node.js", "JavaScript", "Axios", "Cheerio"],
        repo: "https://github.com/Open-yLorde/get-tmdb-title-id",
        initials: "TM",
        hue: "from-violet-500/20 via-violet-500/5 to-transparent",
    },
    {
        name: "Barcode Finder",
        tag: "Node.js · EAN/UPC",
        descPt:
            "Projeto Node.js para buscar informações de produtos a partir de códigos de barras (EAN/UPC).",
        descEn:
            "Node.js project to look up product information from barcodes (EAN/UPC).",
        techs: ["JavaScript", "Axios", "Cheerio"],
        repo: "https://github.com/Open-yLorde/barcode-finder",
        initials: "BC",
        hue: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    },
    {
        name: "Favorite Gender",
        tag: "Node.js · JSON",
        descPt:
            "Analisa uma lista JSON de títulos (filmes, séries) e identifica qual gênero aparece com mais frequência.",
        descEn:
            "Analyzes a JSON list of titles (movies, series) and identifies the most frequent genre.",
        techs: ["Node.js", "JavaScript"],
        repo: "https://github.com/Open-yLorde/favorite-gender",
        initials: "FG",
        hue: "from-fuchsia-500/20 via-fuchsia-500/5 to-transparent",
    },
    {
        name: "Discord Emoji Downloader",
        tag: "Node.js · JSON · Python",
        descPt: "Função que faz um web scraping de emojis do Discord e os salva em um arquivo JSON.",
        descEn: "Function that scrapes Discord emojis and saves them to a JSON file.",
        techs: ["Node.js", "Python"],
        repo: "https://github.com/Open-yLorde/discord-emoji-downloader",
        initials: "DE",
        hue: "from-indigo-500/20 via-indigo-500/5 to-transparent",
    },
];