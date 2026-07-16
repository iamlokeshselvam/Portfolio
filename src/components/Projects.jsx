const projects = [
  {
    title: 'DR & Multi-Environment Infrastructure',
    tech: 'Terraform, AWS, EKS',
    description: 'Restructured Terraform codebase into reusable modules for staging, production, and DR — achieved RTO < 30 minutes and eliminated manual provisioning steps across all environments.',
    highlights: ['RTO < 30 min', 'Reusable Modules', '3 Environments'],
  },
  {
    title: 'Secure Cluster Access — Azure AD + OIDC + RBAC',
    tech: 'EKS, Azure AD, OIDC, Kubernetes RBAC',
    description: 'Replaced static IAM credentials with short-lived OIDC tokens for 20+ engineers; scoped RBAC policies per team and passed 3 consecutive internal security audits with zero findings.',
    highlights: ['Zero Findings', '20+ Engineers', 'OIDC Tokens'],
  },
  {
    title: 'Event-Driven AWS Alerting & Security Automation',
    tech: 'Lambda, EventBridge, CloudWatch, Slack',
    description: 'Engineered a serverless monitoring pipeline covering 5 alert categories (IAM, ACM, Savings Plans, EKS health, cost anomalies); achieved <5-minute detection-to-notification latency.',
    highlights: ['<5 min Latency', '5 Alert Categories', 'Serverless'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">// projects</p>
        <h2 className="section-title">Key Projects</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {projects.map((project) => (
            <div key={project.title} className="card" style={{ padding: 28 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 12,
                  flexWrap: 'wrap',
                  gap: 8,
                }}
              >
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.8rem',
                    color: 'var(--accent)',
                    background: 'var(--accent-glow)',
                    padding: '4px 10px',
                    borderRadius: 6,
                  }}
                >
                  {project.tech}
                </span>
              </div>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: 16 }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {project.highlights.map((h) => (
                  <span
                    key={h}
                    style={{
                      padding: '3px 10px',
                      borderRadius: 6,
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      background: 'rgba(52, 211, 153, 0.1)',
                      color: 'var(--accent-emerald)',
                      border: '1px solid rgba(52, 211, 153, 0.2)',
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
