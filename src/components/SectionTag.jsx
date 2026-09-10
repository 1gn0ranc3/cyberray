import Glyph from './Glyph.jsx'

// Reusable "// NN · label · ◆" line above every section title.
export default function SectionTag({ num, label, color = 'ember', glyph = 'diamond' }) {
  const colorClass = {
    ember:   'text-ember',
    magenta: 'text-magenta',
    cyan:    'text-neon',
    acid:    'text-acid',
    fog:     'text-fog',
  }[color] ?? 'text-ember'

  return (
    <div className={`font-mono text-xs tracking-[0.35em] uppercase mb-4 flex items-center gap-3 ${colorClass}`}>
      <span>{`// ${num} · ${label}`}</span>
      <Glyph name={glyph} size={10} />
    </div>
  )
}
