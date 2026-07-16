export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div
          className="card"
          style={{
            padding: '48px 40px',
            textAlign: 'center',
            maxWidth: 600,
            margin: '0 auto',
          }}
        >
          <p className="section-label" style={{ textAlign: 'center' }}>// contact</p>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: 16,
              color: 'var(--text-primary)',
            }}
          >
            Let's Build Something
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            I'm currently open to DevOps opportunities. Whether you have a project in mind
            or just want to connect, feel free to reach out.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:iamlokeshselvam@gmail.com" className="btn-primary">
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/iamlokeshselvam"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn
            </a>
          </div>

          <div
            style={{
              marginTop: 32,
              padding: '16px 20px',
              background: 'var(--bg-primary)',
              borderRadius: 8,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
            }}
          >
            $ echo "{'$'}{'CONTACT_ME'} | base64 --decode<br />"
            <span style={{ color: 'var(--accent-emerald)' }}>
              iamlokeshselvam@gmail.com
            </span>
          </div>
        </div>
      </div>

      <style>{`
        #contact .btn-primary {
          display: inline-flex;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          background: var(--accent);
          color: var(--bg-primary);
          transition: all 0.3s;
        }
        #contact .btn-primary:hover {
          box-shadow: 0 0 30px rgba(56, 189, 248, 0.4);
          transform: translateY(-2px);
        }
        #contact .btn-secondary {
          display: inline-flex;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          border: 1px solid var(--border);
          color: var(--text-primary);
          transition: all 0.3s;
        }
        #contact .btn-secondary:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  )
}
