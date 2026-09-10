// Ambient witch-house light leaks. Drop-in absolute-positioned decoration.
// Parent must be `relative`.
export default function Leaks({ variant = 'default' }) {
  const config = {
    default: [
      { cls: 'leak-magenta', style: { top: '-15%', left: '-10%', width: 520, height: 520 } },
      { cls: 'leak-ember',   style: { top: '30%',  right: '-15%', width: 620, height: 620, animationDelay: '2s' } },
      { cls: 'leak-purple',  style: { bottom: '-20%', left: '20%', width: 460, height: 460, animationDelay: '4s' } },
    ],
    warm: [
      { cls: 'leak-ember',   style: { top: '-10%', left: '30%', width: 700, height: 700 } },
      { cls: 'leak-magenta', style: { bottom: '-20%', right: '10%', width: 500, height: 500, animationDelay: '3s' } },
    ],
    cold: [
      { cls: 'leak-cyan',    style: { top: '20%', left: '-10%', width: 500, height: 500 } },
      { cls: 'leak-purple',  style: { bottom: '-15%', right: '-10%', width: 620, height: 620, animationDelay: '2.5s' } },
      { cls: 'leak-acid',    style: { top: '60%', left: '40%', width: 320, height: 320, animationDelay: '1s' } },
    ],
    arena: [
      { cls: 'leak-magenta', style: { top: '-20%', right: '-15%', width: 780, height: 780 } },
      { cls: 'leak-purple',  style: { top: '30%', left: '-15%', width: 620, height: 620, animationDelay: '2s' } },
      { cls: 'leak-ember',   style: { bottom: '-25%', left: '30%', width: 520, height: 520, animationDelay: '4s' } },
    ],
  }
  const items = config[variant] ?? config.default
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((l, i) => (
        <div key={i} className={`leak ${l.cls}`} style={l.style} />
      ))}
    </div>
  )
}
