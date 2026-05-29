export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <p className="section-label">// about</p>
        <h2 className="section-title">About Me</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'start',
          }}
          className="about-grid"
        >
          <div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              DevOps Engineer with <strong style={{ color: 'var(--text-primary)' }}>2+ years</strong> of experience
              building and operating AWS cloud infrastructure using{' '}
              <span className="tag">Terraform</span>{' '}
              <span className="tag">Kubernetes (EKS)</span>{' '}
              <span className="tag">GitOps</span>.
            </p>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                marginTop: 20,
              }}
            >
              Certified Kubernetes Administrator (CKA) specializing in CI/CD automation,
              cost optimization, disaster recovery, and event-driven observability. Skilled
              in Bash and Python scripting, zero-downtime EKS upgrades, and securing
              multi-environment infrastructure with IAM, OIDC, and RBAC.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 28, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: 'var(--accent-emerald)', fontSize: '1.1rem' }}>&#10003;</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Available for opportunities</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: 'var(--accent-emerald)', fontSize: '1.1rem' }}>&#10003;</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Open to remote</span>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: 32 }}>
            <h3
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '1rem',
                color: 'var(--accent)',
                marginBottom: 20,
              }}
            >
              $ cat contact.info
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Email', value: 'iamlokeshselvam@gmail.com', href: 'mailto:iamlokeshselvam@gmail.com' },
                { label: 'Phone', value: '+91 9940531773', href: 'tel:+919940531773' },
                { label: 'LinkedIn', value: 'linkedin.com/in/iamlokeshselvam', href: 'https://linkedin.com/in/iamlokeshselvam' },
                { label: 'Location', value: 'India' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', gap: 12 }}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      minWidth: 80,
                    }}
                  >
                    {item.label}:
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.target.style.color = 'var(--accent)')}
                      onMouseLeave={(e) => (e.target.style.color = 'var(--text-primary)')}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
