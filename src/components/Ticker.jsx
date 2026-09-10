import Glyph from './Glyph.jsx'

const items = [
  'RTX 4070',
  '320 ГЦ',
  'PS5 · 4K',
  'CS · VALORANT · DOTA · PUBG',
  'BOOTCAMP',
  '24 / 7',
  'УЛ. ВОСКОВА 12 · СЕСТРОРЕЦК',
  'КОФЕ · СНЕКИ · КОЛА',
  '賽博天堂',
]

function Row({ ariaHidden = false }) {
  return (
    <span
      className="inline-flex items-center gap-6 px-6 whitespace-nowrap"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map((it, i) => (
        <span key={i} className="inline-flex items-center gap-6">
          <span>{it}</span>
          <Glyph name="diamond" size={14} />
        </span>
      ))}
    </span>
  )
}

export default function Ticker() {
  return (
    <div className="relative bg-ember text-void border-y border-void overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee mega-signage text-2xl md:text-3xl uppercase tracking-widest py-3">
        <Row />
        <Row ariaHidden />
        <Row ariaHidden />
        <Row ariaHidden />
      </div>
    </div>
  )
}
