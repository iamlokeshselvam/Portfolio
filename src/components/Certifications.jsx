export default function Certifications() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <p className="section-label">// certifications</p>
        <h2 className="section-title">Certifications</h2>

        <div className="card" style={{ padding: 28, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: 'var(--accent-glow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              flexShrink: 0,
            }}
          >
            🏆
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>
              Certified Kubernetes Administrator (CKA)
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 8 }}>
              The Linux Foundation
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                }}
              >
                ID: LF-g98qhmzcsd
              </span>
              <span
                style={{
                  padding: '2px 10px',
                  borderRadius: 6,
                  fontSize: '0.8rem',
                  background: 'rgba(251, 191, 36, 0.1)',
                  color: 'var(--accent-amber)',
                  border: '1px solid rgba(251, 191, 36, 0.2)',
                }}
              >
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
