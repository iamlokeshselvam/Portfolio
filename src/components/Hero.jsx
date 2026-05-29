export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ width: '100%', paddingTop: 80 }}>
        <div style={{ maxWidth: 720 }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: 'var(--accent)',
              fontSize: '0.95rem',
              marginBottom: 16,
            }}
          >
            {'<'}Hello, world{' />'}
          </p>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ color: 'var(--text-primary)' }}>I'm </span>
            <span className="gradient-text">Lokesh S</span>
            <br />
            <span style={{ color: 'var(--text-secondary)' }}>DevOps Engineer</span>
          </h1>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: 36,
              maxWidth: 600,
            }}
          >
            Certified Kubernetes Administrator (CKA) specializing in AWS cloud infrastructure,
            CI/CD automation, and GitOps workflows. I build resilient systems that scale.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
            <a href="#experience" className="btn-secondary">
              View Experience
            </a>
          </div>

          {/* Quick stats */}
          <div
            style={{
              display: 'flex',
              gap: 40,
              marginTop: 56,
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: 'CKA', label: 'Certified' },
              { value: '2+', label: 'Years Exp' },
              { value: '99.9%', label: 'Uptime' },
              { value: '3', label: 'Environments' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 2 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .btn-primary, .btn-secondary {
          display: inline-flex;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.3s;
        }
        .btn-primary {
          background: var(--accent);
          color: var(--bg-primary);
        }
        .btn-primary:hover {
          box-shadow: 0 0 30px rgba(56, 189, 248, 0.4);
          transform: translateY(-2px);
        }
        .btn-secondary {
          border: 1px solid var(--border);
          color: var(--text-primary);
        }
        .btn-secondary:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  )
}
