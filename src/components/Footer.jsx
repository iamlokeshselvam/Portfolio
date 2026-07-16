export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '24px 0',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          &copy; {new Date().getFullYear()} Lokesh S &mdash; Built with React
          <span style={{ color: 'var(--accent)' }}> + Vite</span>
        </p>
      </div>
    </footer>
  )
}
