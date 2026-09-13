import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ICertificates } from "@/types/certificates";

const GAP_PX = 16;

export function CertificatesSlider({
  certificates,
  title,
}: {
  certificates: readonly ICertificates[];
  title: ReactNode;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateArrows();
    const observer = new ResizeObserver(updateArrows);
    observer.observe(el);
    return () => observer.disconnect();
  }, [updateArrows, certificates.length]);

  const scrollPage = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * (el.clientWidth + GAP_PX), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="mb-10 flex items-center justify-between gap-4">
        {title}
        <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          aria-label="Certificados anteriores"
          disabled={!canPrev}
          onClick={() => scrollPage(-1)}
          className="grid size-8 place-items-center rounded-full bg-zinc-900 text-zinc-300 ring-1 ring-white/10 transition-colors hover:text-zinc-100 hover:ring-white/20 disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Próximos certificados"
          disabled={!canNext}
          onClick={() => scrollPage(1)}
          className="grid size-8 place-items-center rounded-full bg-zinc-900 text-zinc-300 ring-1 ring-white/10 transition-colors hover:text-zinc-100 hover:ring-white/20 disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronRight className="size-4" />
        </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onScroll={updateArrows}
        className="grid snap-x snap-mandatory grid-flow-col gap-4 overflow-x-auto scroll-smooth [grid-auto-columns:100%] [scrollbar-width:none] sm:[grid-auto-columns:calc((100%-1rem)/2)] md:[grid-auto-columns:calc((100%-3rem)/4)] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {certificates.map((s) => (
          <div
            key={s.code}
            className="flex snap-start flex-col gap-3 rounded-xl bg-surface p-4 ring-1 ring-white/5 transition-all hover:ring-white/10"
          >
            <div className="font-mono text-xs font-medium text-primary">{s.type}</div>
            <div className="text-sm leading-relaxed text-zinc-300">{s.title}</div>
            <div className="mt-auto flex flex-col">
              {s.live[0] && (
                <a
                  href={s.url[0]}
                  target="_blank"
                  rel="noreferrer"
                  draggable={false}
                  className="text-zinc-400 transition-colors hover:text-primary"
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
                  className="text-zinc-400 transition-colors hover:text-primary"
                >
                  {s.live[1]} ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
