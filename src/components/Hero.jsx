import { contacts, stats } from '../data.js'
import GlitchText from './GlitchText.jsx'
import Leaks from './Leaks.jsx'
import Glyph, { GlyphRow } from './Glyph.jsx'
import { asset } from '../asset.js'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden vignette">
      {/* atmospheric photo with chromatic dupes */}
      <div className="absolute inset-0">
        <img
          src={asset('/img/hero/cybergirl.png')}
          alt=""
          className="absolute inset-0 w-full h-full object-cover kenburns"
          style={{ filter: 'saturate(0.75) contrast(1.15) hue-rotate(-8deg)' }}
        />
        {/* magenta ghost */}
        <img
          src={asset('/img/hero/cybergirl.png')} alt="" aria-hidden
          className="absolute inset-0 w-full h-full object-cover kenburns mix-blend-screen opacity-30"
          style={{ filter: 'saturate(2) hue-rotate(280deg) blur(1px)', transform: 'translate(6px,0)' }}
        />
        {/* cyan ghost */}
        <img
          src={asset('/img/hero/cybergirl.png')} alt="" aria-hidden
          className="absolute inset-0 w-full h-full object-cover kenburns mix-blend-screen opacity-25"
          style={{ filter: 'saturate(2) hue-rotate(140deg) blur(1px)', transform: 'translate(-6px,0)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/60 to-void" />
        <div className="absolute inset-0 haze" />
        <Leaks variant="warm" />
        <div className="tear" />
      </div>

      {/* neon scan bar */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-ember to-transparent animate-scan pointer-events-none" />

      {/* JP corner mark */}
      <div className="absolute top-24 md:top-28 right-6 md:right-10 text-right z-10">
        <div className="font-jpPixel text-4xl md:text-6xl neon-ember opacity-80 animate-flicker leading-none vhs">賽博天堂</div>
        <div className="mt-2 font-avio text-[10px] md:text-xs text-fog/70 tracking-[0.5em]">CYBER · PARADISE</div>
        <div className="mt-4 flex justify-end animate-flicker text-magenta">
          <GlyphRow items={['triUp','diamond','triDown']} size={16} gap={10} />
        </div>
      </div>

      {/* left column meta */}
      <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-10 rotate-180 [writing-mode:vertical-rl]">
        <div className="font-mono text-[10px] md:text-xs text-fog/60 tracking-[0.4em] uppercase flex items-center gap-3">
          Est. 2025 · Sector 197 · Куортрайон
          <Glyph name="diamond" size={10} className="text-ember" />
          <Glyph name="triUp" size={10} className="text-ember" />
        </div>
      </div>

      {/* main headline */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10 pt-40 md:pt-52 pb-24 min-h-screen flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-px bg-ember" />
            <span className="font-mono text-xs tracking-[0.4em] text-ember uppercase flex items-center gap-3">
              компьютерный клуб · 24/7
              <Glyph name="triUp" size={10} />
            </span>
          </div>

          <h1 className="mega-wide text-[clamp(4rem,13vw,16rem)] uppercase text-bone">
            <GlitchText as="span" className="block">Cyber</GlitchText>
            <span className="block relative neon-ember halation" data-text="Ray">
              Ray
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-fog leading-relaxed">
            Мультимедийное пространство нового поколения в Сестрорецке.
            Игровые ПК на <span className="text-ember">RTX</span>, мониторы <span className="text-neon">320 Гц</span>,
            VIP zone с PS5, турниры, кофе и снеки. Работает круглые сутки.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={contacts.booking}
              target="_blank" rel="noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-ember text-void font-brutal text-xl tracking-widest uppercase overflow-hidden"
            >
              <span className="relative z-10">Забронировать станцию</span>
              <span className="relative z-10">→</span>
              <span className="absolute inset-0 bg-bone translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="absolute inset-0 z-[5] bg-ember translate-y-0 group-hover:translate-y-full transition-transform duration-300 delay-75" />
            </a>
            <a
              href={contacts.phoneHref}
              className="inline-flex items-center gap-3 px-8 py-4 border border-fog/40 text-bone font-mono text-sm tracking-widest uppercase hover:border-ember hover:text-ember transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-ember animate-flicker" />
              {contacts.phone}
            </a>
          </div>
        </div>

        {/* stats strip */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-ember/20 border-y border-ember/20">
          {stats.map(s => (
            <div key={s.label} className="bg-void/60 backdrop-blur-sm px-6 py-6">
              <div className="font-cockpit text-4xl md:text-5xl text-bone leading-none tracking-tight">{s.n}</div>
              <div className="mt-2 font-mono text-[10px] md:text-xs text-fog/70 tracking-[0.3em] uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
