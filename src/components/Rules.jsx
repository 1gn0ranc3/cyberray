import { rules } from '../data.js'
import GlitchText from './GlitchText.jsx'
import Leaks from './Leaks.jsx'
import Glyph from './Glyph.jsx'
import SectionTag from './SectionTag.jsx'

export default function Rules() {
  return (
    <section id="rules" className="relative py-24 md:py-36 border-t border-ember/10 overflow-hidden dirty">
      <Leaks variant="cold" />
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <SectionTag num="06" label="правила" glyph="hex" />
          <h2 className="mega text-6xl md:text-7xl text-bone leading-[0.85]">
            <GlitchText as="span" className="block">Кодекс</GlitchText>
            <span className="text-fog/40 block">клуба</span>
          </h2>
          <div className="mt-4 font-jpPixel text-2xl text-fog/50 animate-flicker flex items-center gap-3">
            規則
            <Glyph name="hex" size={14} className="text-ember" />
          </div>
          <p className="mt-6 text-fog/80 max-w-sm">
            Простые правила, которые делают клуб комфортным для всех.
            Администратор поможет с любым вопросом.
          </p>
        </div>

        <ol className="md:col-span-8 space-y-4">
          {rules.map((r, i) => (
            <li
              key={i}
              className="group flex items-start gap-6 p-5 border border-fog/10 hover:border-ember/40 transition-colors"
            >
              <span className="font-brutal text-4xl md:text-5xl text-ember/40 group-hover:text-ember transition-colors leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-lg md:text-xl text-bone/90 pt-1">{r}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
