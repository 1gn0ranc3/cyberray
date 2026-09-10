import { promos } from '../data.js'
import GlitchText from './GlitchText.jsx'
import Leaks from './Leaks.jsx'
import Glyph from './Glyph.jsx'
import SectionTag from './SectionTag.jsx'

const colorMap = {
  ember:   'border-ember/40    text-ember',
  cyan:    'border-neon/40     text-neon',
  magenta: 'border-magenta/40  text-magenta',
}

export default function Promos() {
  return (
    <section id="promos" className="relative py-24 md:py-36 bg-ash/60 border-y border-ember/10 overflow-hidden dirty">
      <Leaks variant="default" />
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionTag num="05" label="акции" glyph="star4" />
            <h2 className="mega text-6xl md:text-8xl text-bone">
              <GlitchText as="span" className="block">Скидки</GlitchText>
              <span className="block neon-cyan halation" data-text="бонусы">бонусы</span>
            </h2>
          </div>
          <div className="font-jpPixel text-2xl text-fog/50 animate-flicker flex items-center gap-3">
            特典 · ボーナス
            <Glyph name="triUp" size={14} className="text-neon" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {promos.map(p => (
            <div
              key={p.title}
              className={`relative p-8 bg-void border ${colorMap[p.color]} group hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="absolute top-0 right-0 font-avio text-[10px] tracking-[0.35em] uppercase px-3 py-1 bg-void border-l border-b border-current">
                {p.tag}
              </div>
              <h3 className="mega text-3xl md:text-4xl text-bone mt-6">{p.title}</h3>
              <p className="mt-4 text-fog/80 leading-relaxed text-sm">{p.body}</p>
              <div className="mt-6 pt-6 border-t border-current/20">
                <span className="font-mono text-xs tracking-[0.3em] uppercase flex items-center gap-2">
                  Активировать в клубе
                  <Glyph name="chevron" size={10} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
