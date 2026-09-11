import { useState } from "react";
import type { Lang } from "./types/lang";
import { langs } from "./langs";
import { projects } from "./projects";

export function App() {
  const [lang, setLang] = useState<Lang>("pt");
  const c = langs[lang];

  return (
    <div className="min-h-screen bg-background text-zinc-200 font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-zinc-900/60">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a draggable={false} href="#top" className="flex items-center text-sm font-bold tracking-tight text-zinc-100">
            yLorde<span className="text-primary font-medium">.com.br</span>
          </a>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex gap-5">
              <a href="#stack" draggable={false} className="text-xs text-zinc-500 hover:text-zinc-200 transition-colors">{c.nav.stack}</a>
              <a href="#certificates" draggable={false} className="text-xs text-zinc-500 hover:text-zinc-200 transition-colors">{c.nav.certificates}</a>
              <a href="#projetos" draggable={false} className="text-xs text-zinc-500 hover:text-zinc-200 transition-colors">{c.nav.projects}</a>
              <a href="#contato" draggable={false} className="text-xs text-zinc-500 hover:text-zinc-200 transition-colors">{c.nav.contact}</a>
            </div>
            <div className="h-4 w-px bg-zinc-800 hidden sm:block" />
            <div className="flex items-center bg-zinc-900 ring-1 ring-white/5 rounded-full p-1">
              <button
                onClick={() => setLang("pt")}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${lang === "pt" ? "bg-zinc-800 text-zinc-100 shadow-sm" : "text-zinc-500 hover:text-zinc-300"
                  }`}
              >
                PT
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${lang === "en" ? "bg-zinc-800 text-zinc-100 shadow-sm" : "text-zinc-500 hover:text-zinc-300"
                  }`}
              >
                EN
              </button>
            </div>
            <a
              href="https://github.com/yLorde"
              target="_blank"
              rel="noreferrer"
              draggable={false}
              className="text-xs text-zinc-500 hover:text-zinc-200 transition-colors hidden md:inline"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </nav>

      <main id="top">
        {/* Hero */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(600px 300px at 20% 0%, rgba(45,212,191,0.08), transparent 60%), radial-gradient(800px 400px at 80% 20%, rgba(56,189,248,0.05), transparent 60%)",
            }}
          />
          <div className="max-w-5xl mx-auto px-6">
            {/* <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary mb-6">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-medium uppercase tracking-wider">{c.badge}</span>
            </div> */}
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight md:leading-[1.05] text-balance mb-8">
              {c.heroTitle}
              <br />
              <span className="text-zinc-500">{c.heroSub}</span>
            </h1>
            <p className="text-base text-zinc-400 max-w-[58ch] leading-relaxed text-pretty mb-10">
              {c.heroBody}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projetos"
                draggable={false}
                className="inline-flex items-center bg-zinc-100 text-zinc-900 text-sm font-medium px-4 py-2 rounded-md ring-1 ring-zinc-100 hover:bg-white transition-colors"
              >
                {c.ctaProjects}
              </a>
              <a
                href="#contato"
                draggable={false}
                className="inline-flex items-center bg-zinc-900 text-zinc-100 text-sm font-medium px-4 py-2 rounded-md ring-1 ring-white/10 hover:ring-white/20 transition-colors"
              >
                {c.ctaContact}
              </a>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="py-16 border-t border-zinc-900/60">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-xs font-medium text-zinc-500 uppercase tracking-[0.2em] mb-10 font-mono">
              {c.stackTitle}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {c.stack.map((s) => (
                <div
                  key={s.k}
                  className="p-4 rounded-xl bg-surface ring-1 ring-white/5 flex flex-col gap-3 hover:ring-white/10 transition-all"
                >
                  <div className="text-xs font-medium text-primary font-mono">{s.k}</div>
                  <div className="text-sm text-zinc-300 leading-relaxed">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificate */}
        <section id="certificates" className="py-16 border-t border-zinc-900/60">
          <div className="max-w-5xl mx-auto px-6 flex flex-col relative">
            <h2 className="text-xs font-medium text-zinc-500 uppercase tracking-[0.2em] mb-10 font-mono">
              {c.certificatesTitle}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1 flex-col">
              {c.certificates.map((s) => (
                <div
                  key={s.code}
                  className="p-4 rounded-xl bg-surface ring-1 ring-white/5 flex flex-col gap-3 hover:ring-white/10 transition-all"
                >
                  <div className="text-xs font-medium text-primary font-mono">{s.type}</div>
                  <div className="text-sm text-zinc-300 leading-relaxed">{s.title}</div>
                  <div className="mt-auto flex flex-col">
                    {/* <hr className="opacity-10 pt-1" /> */}
                    {s.live[0] && (
                      <a
                        href={s.url[0]}
                        target="_blank"
                        rel="noreferrer"
                        draggable={false}
                        className="text-zinc-400 hover:text-primary transition-colors"
                      >
                        {s.live[0]} ↗
                      </a>
                    )}

                    {s.live[1] && (
                      <a
                        href={s.url[1]}
                        target="_blank"
                        rel="noreferrer"
                        draggable={false}
                        className="text-zinc-400 hover:text-primary transition-colors"
                      >
                        {s.live[1]} ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projetos" className="py-24 border-t border-zinc-900/60 bg-zinc-950">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-16 space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-100">
                {c.projectsTitle}
              </h2>
              <p className="text-zinc-500 text-sm max-w-[52ch] text-pretty">
                {c.projectsSub}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((p) => (
                <article key={p.name} className="group space-y-4">
                  <div className={`relative w-full aspect-[16/10] bg-zinc-900 outline-1 -outline-offset-1 outline-white/5 rounded-xl overflow-hidden grid place-items-center`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${p.hue}`} />
                    <div className="absolute inset-0 opacity-[0.04]" style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }} />
                    <span className="relative font-mono text-5xl font-medium text-zinc-100/90 tracking-tighter">
                      {p.initials}
                    </span>
                    <span className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-[0.15em] text-zinc-600">
                      {p.tag}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-medium text-zinc-100">{p.name}</h3>
                    </div>
                    <p className="text-sm text-zinc-500 text-pretty leading-relaxed">
                      {lang === "pt" ? p.descPt : p.descEn}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.techs.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 ring-1 ring-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-2 text-xs">
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          draggable={false}
                          className="text-zinc-400 hover:text-primary transition-colors"
                        >
                          {c.repo} →
                        </a>
                      )}
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          draggable={false}
                          className="text-zinc-400 hover:text-primary transition-colors"
                        >
                          {c.live} ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contato" className="py-24 border-t border-zinc-900/60">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
              <div className="space-y-4 max-w-md">
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-100">
                  {c.contactTitle}
                </h2>
                <p className="text-zinc-500 text-sm text-pretty">{c.contactSub}</p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:contato@ylorde.com.br"
                  draggable={false}
                  className="text-lg font-medium text-zinc-100 hover:text-primary transition-colors underline underline-offset-8 decoration-zinc-800 hover:decoration-primary/50"
                >
                  contato@ylorde.com.br
                </a>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
                  <a href="https://github.com/yLorde" draggable={false} target="_blank" rel="noreferrer" className="hover:text-zinc-100 transition-colors">GitHub</a>
                  <a href="https://github.com/Open-yLorde" draggable={false} target="_blank" rel="noreferrer" className="hover:text-zinc-100 transition-colors">Open Source</a>
                  <a href="https://orcid.org/0009-0001-4602-7589" draggable={false} target="_blank" rel="noreferrer" className="hover:text-zinc-100 transition-colors">ORCID</a>
                  <a href="https://ylorde.com.br" draggable={false} target="_blank" rel="noreferrer" className="hover:text-zinc-100 transition-colors">ylorde.com.br</a>
                </div>
              </div>
            </div>
            <div className="mt-24 pt-8 border-t border-zinc-900/60 flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center">
              <span className="text-xs text-zinc-600">© {new Date().getFullYear()} Davi de Sousa Amorim</span>
              <span className="text-xs text-zinc-600 font-mono">{c.footer}</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
