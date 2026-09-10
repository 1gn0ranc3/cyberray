import { reviews } from '../data.js'
import GlitchText from './GlitchText.jsx'
import Leaks from './Leaks.jsx'
import Glyph, { GlyphRow } from './Glyph.jsx'
import SectionTag from './SectionTag.jsx'

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24 md:py-36 overflow-hidden dirty">
      <Leaks variant="warm" />
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="mb-16">
          <SectionTag num="07" label="отзывы" glyph="triDown" />
          <h2 className="mega text-6xl md:text-8xl text-bone">
            <GlitchText as="span" className="block">Что о нас</GlitchText>
            <span className="block neon-ember halation" data-text="говорят">говорят</span>
          </h2>
          <div className="mt-4 font-jpPixel text-2xl text-fog/50 animate-flicker flex items-center gap-3">
            お客様の声
            <GlyphRow items={['diamond','triUp','diamond']} size={12} gap={6} className="text-ember" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map(r => (
            <figure key={r.name} className="relative p-8 border border-fog/15 bg-ash/40 backdrop-blur">
              <div className="absolute -top-4 left-6 font-brutal text-6xl text-ember leading-none">"</div>
              <blockquote className="text-fog/90 leading-relaxed pt-4">{r.text}</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-fog/10 flex items-center gap-4">
                <img
                  src={r.avatar}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover border border-ember/40"
                  style={{ filter: 'saturate(0.8) contrast(1.05)' }}
                />
                <div>
                  <div className="font-brutal text-xl text-bone tracking-widest">{r.name.toUpperCase()}</div>
                  <div className="font-cockpit text-xs text-fog/60">{r.date}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
