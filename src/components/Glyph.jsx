// SVG decorative marks. No unicode emoji fallback shenanigans.
// Usage: <Glyph name="triUp" size={14} className="text-ember" />

const paths = {
  triUp:   'M12 3 L22 20 L2 20 Z',
  triDown: 'M12 21 L2 4 L22 4 Z',
  diamond: 'M12 2 L22 12 L12 22 L2 12 Z',
  hex:     'M12 2 L21 7 L21 17 L12 22 L3 17 L3 7 Z',
  star4:   'M12 1 L14 10 L23 12 L14 14 L12 23 L10 14 L1 12 L10 10 Z',
  block:   'M3 3 H21 V21 H3 Z',
  hatch:   'M3 3 H21 V21 H3 Z M3 8 L21 8 M3 13 L21 13 M3 18 L21 18',
  bar:     'M2 10 H22 V14 H2 Z',
  plus:    'M10 2 H14 V10 H22 V14 H14 V22 H10 V14 H2 V10 H10 Z',
  rune1:   'M4 2 V22 M4 12 H12 M12 2 L20 12 L12 22',
  rune2:   'M4 2 L20 22 M20 2 L4 22 M4 12 H20',
  dot:     'M12 8 A4 4 0 1 1 12 16 A4 4 0 1 1 12 8 Z',
  chevron: 'M6 4 L18 12 L6 20',
  target:  'M12 2 A10 10 0 1 1 12 22 A10 10 0 1 1 12 2 M12 8 A4 4 0 1 1 12 16 A4 4 0 1 1 12 8',
}

export default function Glyph({ name = 'diamond', size = 14, className = '', style, filled = true, strokeWidth = 1.5 }) {
  const d = paths[name] ?? paths.diamond
  const outlineOnly = ['hatch', 'rune1', 'rune2', 'chevron', 'target'].includes(name)
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`inline-block align-middle ${className}`}
      style={style}
      aria-hidden="true"
    >
      <path
        d={d}
        fill={filled && !outlineOnly ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth={outlineOnly ? strokeWidth : (filled ? 0 : strokeWidth)}
        strokeLinejoin="miter"
      />
    </svg>
  )
}

// Horizontal decorative row: <GlyphRow items={['triUp','diamond','triDown']} />
export function GlyphRow({ items = ['diamond'], size = 12, gap = 8, className = '' }) {
  return (
    <span className={`inline-flex items-center ${className}`} style={{ gap }}>
      {items.map((n, i) => <Glyph key={i} name={n} size={size} />)}
    </span>
  )
}
