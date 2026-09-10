import { contacts } from '../data.js'
import GlitchText from './GlitchText.jsx'
import Leaks from './Leaks.jsx'
import Glyph from './Glyph.jsx'
import SectionTag from './SectionTag.jsx'

const disciplines = [
  { code: 'CS2',      name: 'Counter-Strike 2', jp: 'カウンター' },
  { code: 'VAL',      name: 'Valorant',          jp: 'ヴァロラント' },
  { code: 'DOTA',     name: 'Dota 2',            jp: 'ドタ' },
  { code: 'PUBG',     name: 'PUBG',              jp: 'パブ' },
  { code: 'FC26',     name: 'EA FC 26',          jp: 'サッカー' },
  { code: 'ROCKET',   name: 'Rocket League',     jp: 'ロケット' },
]

// TODO: заменить на реальную ссылку на твоего Telegram-бота
const BOT_URL = 'https://t.me/cyberray1'

export default function Tournaments() {
  return (
    <section id="tournaments" className="relative py-24 md:py-36 overflow-hidden dirty">
      <Leaks variant="arena" />
      <div className="tear" />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <SectionTag num="04" label="турниры" color="magenta" glyph="star4" />
          <h2 className="mega-wide text-5xl md:text-7xl text-bone leading-[0.95]">
            <GlitchText as="span" className="block">Cyber</GlitchText>
            <span className="block neon-magenta halation" data-text="Arena">Arena</span>
          </h2>
          <div className="mt-4 font-jpPixel text-2xl text-fog/60 animate-flicker flex items-center gap-3">
            大会 · 賞金
            <Glyph name="triUp" size={16} className="text-magenta" />
          </div>

          <p className="mt-8 text-lg text-fog leading-relaxed max-w-md">
            Регулярные турниры по популярным дисциплинам с призами.
            Собираем киберспортивную команду клуба — открыт набор.
          </p>

          <div className="mt-10 p-6 border border-magenta/30 bg-void/50 backdrop-blur relative">
            <div className="absolute -top-3 left-4 px-2 bg-void text-magenta font-avio text-[11px] tracking-[0.35em] flex items-center gap-2">
              <Glyph name="diamond" size={8} />
              REGISTRATION
              <Glyph name="diamond" size={8} />
            </div>
            <div className="text-bone text-lg mb-4">
              Регистрация — через нашего Telegram-бота.
              Слоты, сетка, результаты и оповещения — всё внутри.
            </div>
            <a
              href={BOT_URL}
              target="_blank" rel="noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-magenta text-void font-brutal text-lg tracking-widest uppercase hover:bg-bone transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.51.26l.18-2.55 4.63-4.19c.2-.18-.045-.28-.31-.1L8.7 13.06l-2.5-.78c-.54-.17-.55-.54.11-.8l9.79-3.77c.45-.17.85.11.7.79z"/>
              </svg>
              Открыть бота
              <Glyph name="chevron" size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="mt-3 font-mono text-xs text-fog/60">
              Или напиши в клуб: <a href={contacts.tg} className="text-magenta hover:underline">{contacts.tg.replace('https://', '')}</a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-magenta/20 border border-magenta/20">
            {disciplines.map(d => (
              <div key={d.code} className="bg-void p-6 md:p-8 group hover:bg-ash transition-colors relative">
                <div className="font-tech text-[11px] tracking-[0.3em] text-magenta font-bold">{d.code}</div>
                <div className="mt-4 font-brutal text-2xl md:text-3xl text-bone tracking-wider">{d.name}</div>
                <div className="mt-2 font-jpPixel text-xs text-fog/50">{d.jp}</div>
                <div className="absolute bottom-4 right-4 text-magenta opacity-0 group-hover:opacity-100 group-hover:animate-flicker transition-opacity">
                  <Glyph name="diamond" size={10} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-fog/70 font-mono">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-acid animate-flicker" />
              LIVE-сетка в боте
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-neon animate-flicker" />
              Призы: игровое время + мерч
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-ember animate-flicker" />
              Регистрация — за 24 часа до старта
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
