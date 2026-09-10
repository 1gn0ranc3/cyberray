import { useEffect, useState } from 'react'
import { contacts } from '../data.js'
import Glyph from './Glyph.jsx'
import { asset } from '../asset.js'

const links = [
  { href: '#manifest',  label: 'О клубе',  jp: '概要' },
  { href: '#services',  label: 'Услуги',   jp: 'サービス' },
  { href: '#gallery',   label: 'Атмосфера', jp: '雰囲気' },
  { href: '#tournaments', label: 'Турниры', jp: '大会' },
  { href: '#promos',    label: 'Акции',    jp: '特典' },
  { href: '#rules',     label: 'Правила',  jp: '規則' },
  { href: '#contact',   label: 'Контакты', jp: '連絡' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-void/80 backdrop-blur-md border-b border-ember/20' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 md:w-10 md:h-10">
            <img src={asset('/img/logo.png')} alt="Cyber Ray" className="w-full h-full object-contain" />
            <div className="absolute inset-0 bg-ember/40 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="leading-none">
            <div className="font-brutal text-xl md:text-2xl tracking-widest">CYBER RAY</div>
            <div className="text-[10px] md:text-xs text-fog/70 tracking-[0.35em] mt-0.5">
              <span className="font-jpPixel">賽博天堂</span>
              <span className="font-avio ml-2">· SESTRORETSK</span>
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-mono text-xs tracking-[0.25em] uppercase text-fog hover:text-bone transition-colors"
            >
              <span className="relative z-10">{l.label}</span>
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-ember transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={contacts.phoneHref}
            className="hidden md:flex items-center gap-2 font-mono text-sm text-bone hover:text-ember transition-colors"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-ember animate-flicker" />
            {contacts.phone}
          </a>
          <a
            href={contacts.booking}
            target="_blank" rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-ember text-ember font-mono text-xs tracking-widest uppercase hover:bg-ember hover:text-void transition-colors"
          >
            Бронь
            <Glyph name="chevron" size={10} />
          </a>
          <button
            onClick={() => setOpen(o => !o)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border border-ember/40"
            aria-label="menu"
          >
            <span className={`block w-5 h-px bg-bone transition ${open ? 'rotate-45 translate-y-1' : ''}`} />
            <span className={`block w-5 h-px bg-bone transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-bone transition ${open ? '-rotate-45 -translate-y-1' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-void/95 backdrop-blur-lg border-t border-ember/30">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between text-fog hover:text-ember transition-colors"
              >
                <span className="font-brutal text-2xl tracking-widest">{l.label}</span>
                <span className="text-xs font-jpPixel text-fog/50">{l.jp}</span>
              </a>
            ))}
            <a
              href={contacts.booking}
              target="_blank" rel="noreferrer"
              className="mt-4 text-center py-3 border border-ember text-ember font-mono text-sm tracking-widest uppercase inline-flex items-center justify-center gap-3"
            >
              Бронь на langame
              <Glyph name="chevron" size={12} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
