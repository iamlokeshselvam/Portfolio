const experience = {
  role: 'DevOps Engineer',
  company: 'Sentinelfox Pvt Ltd',
  period: 'Jan 2024 – Present',
  achievements: [
    'Managed all AWS infrastructure across 3 environments (staging, production, DR) using Terraform modules with remote state — cut provisioning time by ~40% and reduced configuration drift to zero.',
    'Upgraded EKS clusters across 4 versions (1.29 → 1.32) with zero downtime using new node groups, cordon/drain, and rolling restarts; sustained 99.9% uptime across all upgrade cycles.',
    'Centralized identity and access for 20+ developer accounts by integrating Azure AD with EKS via OIDC federation and enforcing fine-grained RBAC policies, eliminating static IAM credentials.',
    'Delivered end-to-end CI/CD pipelines via GitHub Actions and ArgoCD, achieving sub-2-minute rollback on failure and version-controlled deployments across all environments.',
    'Reduced monthly AWS compute costs by ~35% by analyzing 6 months of usage data and applying Reserved Instances and Savings Plans to EC2 and EKS workloads.',
    'Developed a serverless alerting system with Lambda and EventBridge covering IAM activity, ACM expiry, and EKS health — cut MTTA by ~60% via Slack.',
    'Built full-stack observability with Prometheus, Grafana, Loki, and Tempo; configured SLA/SLO dashboards and alert thresholds, reducing undetected incidents by ~50%.',
    'Wrote Bash and Python scripts to handle log collection, resource tagging, and cost reporting, saving ~3 hours/week of manual operational work.',
  ],
}

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <p className="section-label">// experience</p>
        <h2 className="section-title">Work Experience</h2>

        <div className="card" style={{ padding: 32, position: 'relative' }}>
          {/* Timeline indicator */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 3,
              background: 'linear-gradient(to bottom, var(--accent), var(--accent-purple))',
              borderRadius: '3px 0 0 3px',
            }}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 24,
              flexWrap: 'wrap',
              gap: 8,
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {experience.role}
              </h3>
              <p style={{ color: 'var(--accent)', fontWeight: 500, marginTop: 4 }}>
                {experience.company}
              </p>
            </div>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                background: 'var(--bg-primary)',
                padding: '4px 12px',
                borderRadius: 6,
              }}
            >
              {experience.period}
            </span>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {experience.achievements.map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span
                  style={{
                    color: 'var(--accent)',
                    fontSize: '0.8rem',
                    marginTop: 5,
                    flexShrink: 0,
                  }}
                >
                  &#9656;
                </span>
                <span style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
