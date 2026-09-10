import { useState } from 'react'
import { gallery } from '../data.js'
import GlitchText from './GlitchText.jsx'
import Leaks from './Leaks.jsx'
import Glyph from './Glyph.jsx'
import SectionTag from './SectionTag.jsx'

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="relative py-24 md:py-36 bg-ash/60 overflow-hidden dirty">
      <Leaks variant="cold" />
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionTag num="03" label="атмосфера" color="cyan" glyph="triUp" />
            <h2 className="mega text-6xl md:text-8xl text-bone">
              <GlitchText as="span" className="block">Внутри</GlitchText>
              <span className="block neon-cyan halation" data-text="клуба">клуба</span>
            </h2>
          </div>
          <div className="font-jpPixel text-fog/60 text-xl md:text-2xl animate-flicker flex items-center gap-3">
            雰囲気 · 内部
            <Glyph name="diamond" size={14} className="text-neon" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {gallery.map((g, i) => (
            <button
              key={g.src}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden aspect-[4/3] ${
                i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2 md:aspect-square' : ''
              }`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: 'saturate(0.85) contrast(1.05)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
              <div className="absolute top-3 left-3 font-cockpit text-[10px] tracking-widest text-ember/80">
                / {String(i + 1).padStart(2, '0')}
              </div>
              <div className="absolute bottom-3 left-3 font-mono text-xs text-bone opacity-0 group-hover:opacity-100 transition-opacity">
                {g.alt}
              </div>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] bg-void/95 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
        >
          <img
            src={gallery[active].src}
            alt={gallery[active].alt}
            className="max-w-full max-h-full object-contain"
          />
          <button
            onClick={(e) => { e.stopPropagation(); setActive((active - 1 + gallery.length) % gallery.length) }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-ember/40 text-ember hover:bg-ember hover:text-void transition-colors font-mono"
            aria-label="prev"
          >←</button>
          <button
            onClick={(e) => { e.stopPropagation(); setActive((active + 1) % gallery.length) }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-ember/40 text-ember hover:bg-ember hover:text-void transition-colors font-mono"
            aria-label="next"
          >→</button>
          <button
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 w-12 h-12 border border-ember/40 text-ember hover:bg-ember hover:text-void transition-colors font-mono"
            aria-label="close"
          >×</button>
        </div>
      )}
    </section>
  )
}
