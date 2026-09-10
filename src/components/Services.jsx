import { services, contacts } from '../data.js'
import GlitchText from './GlitchText.jsx'
import Leaks from './Leaks.jsx'
import Glyph from './Glyph.jsx'
import SectionTag from './SectionTag.jsx'

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-36 border-t border-ember/10 overflow-hidden dirty">
      <Leaks variant="cold" />
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <SectionTag num="02" label="услуги · цены" glyph="triDown" />
            <h2 className="mega text-6xl md:text-8xl text-bone">
              <GlitchText as="span" className="block">Тарифы</GlitchText>
              <span className="text-fog/40 block font-jpPixel">サービス</span>
            </h2>
          </div>
          <p className="max-w-md text-fog">
            Полный прайс и живые слоты — в приложении бронирования.
            Мы обновляем цены редко и предсказуемо. Ниже — базовые тарифы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ember/15 border border-ember/20">
          {services.map(s => (
            <article
              key={s.id}
              className="group relative bg-void p-8 md:p-10 min-h-[320px] flex flex-col justify-between hover:bg-ash transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-tech text-xs tracking-[0.35em] text-ember font-bold flex items-center gap-2">
                  <Glyph name="diamond" size={8} />
                  {s.tag}
                </span>
                <span className="font-jpPixel text-sm text-fog/50">{s.jp}</span>
              </div>

              <div>
                <h3 className="mega text-4xl md:text-5xl text-bone group-hover:neon-ember transition-all">
                  {s.title}
                </h3>
                <p className="mt-4 text-fog/80 leading-relaxed">{s.body}</p>
              </div>

              <div className="mt-8 flex items-end justify-between">
                <div className="font-brutal text-2xl md:text-3xl text-ember">{s.price}</div>
                <a
                  href={contacts.booking}
                  target="_blank" rel="noreferrer"
                  className="text-xs font-mono tracking-[0.3em] uppercase text-fog hover:text-ember transition-colors flex items-center gap-2"
                >
                  Забронировать
                  <Glyph name="chevron" size={10} />
                </a>
              </div>

              <span className="absolute top-0 left-0 h-px w-0 bg-ember group-hover:w-full transition-all duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
