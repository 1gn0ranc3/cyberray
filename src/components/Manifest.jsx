import { manifestLines } from '../data.js'
import GlitchText from './GlitchText.jsx'
import Leaks from './Leaks.jsx'
import Glyph from './Glyph.jsx'
import SectionTag from './SectionTag.jsx'

export default function Manifest() {
  return (
    <section id="manifest" className="relative py-24 md:py-36 overflow-hidden dirty">
      <div className="absolute inset-0 haze pointer-events-none" />
      <Leaks variant="default" />
      <div className="tear" />
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="sticky top-28">
            <SectionTag num="01" label="манифест" glyph="triUp" />
            <h2 className="mega text-6xl md:text-8xl text-bone">
              <GlitchText as="span" className="block">Не</GlitchText>
              <span className="block">просто</span>
              <span className="block neon-ember halation" data-text="клуб.">клуб.</span>
            </h2>
            <div className="mt-6 font-jpPixel text-fog/60 text-lg animate-flicker flex items-center gap-3">
              私たちは違う
              <Glyph name="diamond" size={12} className="text-magenta" />
              <Glyph name="triDown" size={12} className="text-magenta" />
            </div>
          </div>
        </div>

        <div className="md:col-span-8 flex flex-col gap-8">
          {manifestLines.map((line, i) => (
            <p
              key={i}
              className="text-2xl md:text-4xl leading-tight font-body text-bone/90"
              style={{ opacity: 1 - i * 0.08 }}
            >
              <span className="text-ember font-cockpit text-sm align-super mr-2">
                {String(i + 1).padStart(2, '0')}
              </span>
              {line}
            </p>
          ))}

          <div className="mt-8 p-6 border border-ember/30 bg-void/50 backdrop-blur">
            <div className="font-mono text-xs text-ember tracking-[0.35em] uppercase mb-3 flex items-center gap-3">
              // приложение клуба
              <Glyph name="hex" size={10} />
            </div>
            <p className="text-fog leading-relaxed">
              Бронируйте, смотрите свободные ПК, управляйте временем, пополняйте баланс,
              покупайте снеки с телефона — всё принесут к вам.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
