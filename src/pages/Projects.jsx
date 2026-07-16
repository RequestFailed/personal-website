import { useTranslation } from 'react-i18next';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function Projects() {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true });

  const accentColors = ['#00d4ff', '#7c3aed', '#ec4899', '#10b981'];

  return (
    <div className="page-container">
      <h2 className="section-title">{t('projects.title')}</h2>
      <p className="section-subtitle">{t('projects.subtitle')}</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 24,
        }}
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="glass-card"
            style={{
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Project icon/indicator */}
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 'var(--radius-md)',
                background: `${accentColors[i % accentColors.length]}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
                fontSize: '1.4rem',
                color: accentColors[i % accentColors.length],
              }}
            >
              {'{' + (i + 1) + '}'}
            </div>

            <h3
              style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                marginBottom: 12,
                color: 'var(--text-primary)',
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                flex: 1,
                marginBottom: 20,
              }}
            >
              {project.desc}
            </p>

            {/* Tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                marginBottom: 24,
              }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    padding: '4px 12px',
                    borderRadius: '20px',
                    background: 'rgba(255,255,255,0.04)',
                    color: 'var(--text-muted)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: 16 }}>
              <a
                href="#"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--accent-cyan)',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-purple)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--accent-cyan)';
                }}
              >
                <FiExternalLink /> {t('projects.viewProject')}
              </a>
              <a
                href="#"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                <FiGithub /> {t('projects.viewCode')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
