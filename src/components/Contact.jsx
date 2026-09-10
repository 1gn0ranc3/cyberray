import { contacts } from '../data.js'
import GlitchText from './GlitchText.jsx'
import Leaks from './Leaks.jsx'
import Glyph, { GlyphRow } from './Glyph.jsx'
import SectionTag from './SectionTag.jsx'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-36 border-t border-ember/10 overflow-hidden dirty">
      <Leaks variant="default" />
      <div className="tear" />
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <SectionTag num="08" label="контакты" glyph="target" />
          <h2 className="mega text-6xl md:text-8xl text-bone leading-[0.85]">
            <GlitchText as="span" className="block">Найди</GlitchText>
            <span className="block neon-ember halation" data-text="нас">нас</span>
          </h2>
          <div className="mt-4 font-jpPixel text-2xl text-fog/50 animate-flicker flex items-center gap-3">
            連絡先
            <GlyphRow items={['diamond','star4','diamond']} size={12} gap={6} className="text-ember" />
          </div>

          <div className="mt-10 space-y-6 font-mono">
            <ContactRow label="ТЕЛЕФОН"  value={contacts.phone}     href={contacts.phoneHref} />
            <ContactRow label="ПОЧТА"    value={contacts.email}     href={`mailto:${contacts.email}`} />
            <ContactRow label="АДРЕС"    value={contacts.address} />
            <ContactRow label="РЕЖИМ"    value="круглосуточно · 24 / 7" accent />
            <ContactRow label="VK"       value="vk.com/cyberray1"    href={contacts.vk} />
            <ContactRow label="TELEGRAM" value="t.me/cyberray1"      href={contacts.tg} />
          </div>

          <a
            href={contacts.booking}
            target="_blank" rel="noreferrer"
            className="mt-10 group inline-flex items-center gap-3 px-8 py-4 bg-ember text-void font-brutal text-xl tracking-widest uppercase"
          >
            Забронировать
            <Glyph name="chevron" size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="lg:col-span-7 relative min-h-[500px]">
          <div className="absolute inset-0 border border-ember/30 overflow-hidden">
            <iframe
              title="Cyber Ray на карте"
              src="https://yandex.ru/map-widget/v1/?ll=29.964%2C60.093&z=16&pt=29.964,60.093,pm2rdm&text=Сестрорецк%2C%20ул.%20Воскова%2C%2012"
              className="w-full h-full grayscale-[.3] contrast-125"
              style={{ filter: 'hue-rotate(-15deg) saturate(0.7)' }}
              loading="lazy"
              allowFullScreen
            />
          </div>
          <div className="absolute top-4 left-4 px-3 py-2 bg-void/90 backdrop-blur font-cockpit text-xs tracking-[0.25em] text-ember uppercase border border-ember/30 flex items-center gap-2">
            <Glyph name="target" size={12} />
            LOC · 60.093°N · 29.964°E
          </div>
          <div className="absolute bottom-4 right-4 px-3 py-2 bg-void/90 backdrop-blur font-mono text-xs tracking-widest text-bone border border-ember/30">
            {contacts.addressShort}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ label, value, href, accent }) {
  const inner = (
    <div className="group flex items-baseline justify-between border-b border-fog/15 pb-3 hover:border-ember transition-colors">
      <span className="text-xs tracking-[0.4em] text-fog/50 uppercase">{label}</span>
      <span className={`text-lg md:text-xl ${accent ? 'text-ember' : 'text-bone'} group-hover:text-ember transition-colors`}>
        {value}
      </span>
    </div>
  )
  return href ? <a href={href} target="_blank" rel="noreferrer" className="block">{inner}</a> : inner
}
