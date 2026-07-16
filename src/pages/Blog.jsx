import { useTranslation } from 'react-i18next';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';

export default function Blog() {
  const { t } = useTranslation();
  const posts = t('blog.posts', { returnObjects: true });

  return (
    <div className="page-container">
      <h2 className="section-title">{t('blog.title')}</h2>
      <p className="section-subtitle">{t('blog.subtitle')}</p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          maxWidth: 800,
          margin: '0 auto',
        }}
      >
        {posts.map((post, i) => (
          <article
            key={i}
            className="glass-card"
            style={{
              padding: '28px 32px',
              display: 'flex',
              gap: 24,
              alignItems: 'flex-start',
            }}
          >
            {/* Date badge */}
            <div
              style={{
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(0,212,255,0.08)',
                border: '1px solid rgba(0,212,255,0.12)',
                minWidth: 80,
                textAlign: 'center',
              }}
            >
              <FiCalendar
                style={{
                  color: 'var(--accent-cyan)',
                  fontSize: '1rem',
                  marginBottom: 6,
                }}
              />
              <span
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-cyan)',
                  fontWeight: 600,
                  lineHeight: 1.4,
                }}
              >
                {post.date}
              </span>
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: 8,
                  color: 'var(--text-primary)',
                  lineHeight: 1.4,
                }}
              >
                {post.title}
              </h3>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.93rem',
                  lineHeight: 1.7,
                  marginBottom: 14,
                }}
              >
                {post.excerpt}
              </p>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 12,
                }}
              >
                <div style={{ display: 'flex', gap: 8 }}>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        padding: '3px 10px',
                        borderRadius: '12px',
                        background: 'rgba(124,58,237,0.12)',
                        color: 'var(--accent-purple)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--accent-cyan)',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.gap = '12px';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.gap = '6px';
                    e.currentTarget.style.color = 'var(--accent-cyan)';
                  }}
                >
                  {t('blog.readMore')} <FiArrowRight />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
