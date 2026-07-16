const skillCategories = [
  {
    title: 'Cloud & Infrastructure',
    icon: '☁️',
    skills: ['AWS (EC2, S3, ECR, Lambda, VPC, RDS)', 'EKS', 'CloudWatch', 'EventBridge', 'IAM', 'ACM'],
  },
  {
    title: 'Infrastructure as Code',
    icon: '📦',
    skills: ['Terraform (Modules, Remote State)', 'Multi-Env Management', 'S3 + DynamoDB Locking'],
  },
  {
    title: 'Containers & Orchestration',
    icon: '🐳',
    skills: ['Kubernetes', 'EKS', 'Helm', 'Docker', 'RBAC', 'OIDC', 'Cluster Autoscaler', 'KEDA'],
  },
  {
    title: 'CI/CD & GitOps',
    icon: '🔄',
    skills: ['GitHub Actions', 'ArgoCD', 'GitOps', 'Rollback Pipelines'],
  },
  {
    title: 'Observability',
    icon: '📊',
    skills: ['Prometheus', 'Grafana', 'Loki', 'Tempo', 'Sentry', 'SLA/SLO Alerting'],
  },
  {
    title: 'Scripting & Security',
    icon: '🔧',
    skills: ['Bash', 'Python', 'AWS Lambda', 'OIDC Federation', 'RBAC', 'Cert-Manager', 'TLS/ACM'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">// skills</p>
        <h2 className="section-title">Technical Skills</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 20,
          }}
        >
          {skillCategories.map((cat) => (
            <div key={cat.title} className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: '1.3rem' }}>{cat.icon}</span>
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  {cat.title}
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
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
