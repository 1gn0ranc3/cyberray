export default function GlitchText({ as: Tag = 'span', children, className = '' }) {
  const text = typeof children === 'string' ? children : ''
  return (
    <Tag data-text={text} className={`glitch ${className}`}>
      {children}
    </Tag>
  )
}
