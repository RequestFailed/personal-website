import { useTranslation } from 'react-i18next';
import { FiCode, FiServer, FiCpu, FiDatabase, FiLayout, FiGitBranch } from 'react-icons/fi';

const skillIcons = [FiCode, FiServer, FiCpu, FiDatabase, FiLayout, FiGitBranch];
const skillNames = ['React', 'Node.js', 'Python', 'PostgreSQL', 'TypeScript', 'Docker'];

function SkillCard({ icon: Icon, name, index }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        padding: '24px 20px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 'var(--radius-md)',
        transition: 'all 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <Icon style={{ fontSize: '1.6rem', color: 'var(--accent-cyan)' }} />
      <span
        style={{
          fontSize: '0.85rem',
          fontWeight: 500,
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        {name}
      </span>
    </div>
  );
}

export default function About() {
  const { t } = useTranslation();
  const experiences = t('about.experienceItems', { returnObjects: true });

  return (
    <div className="page-container">
      <h2 className="section-title">{t('about.title')}</h2>
      <p className="section-subtitle">{t('about.subtitle')}</p>

      {/* Bio Section */}
      <div
        className="glass-card"
        style={{
          padding: '40px',
          marginBottom: 60,
        }}
      >
        <p style={{ color: 'var(--text-secondary)', marginBottom: 16, lineHeight: 1.9, fontSize: '1.05rem' }}>
          {t('about.bio1')}
        </p>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 16, lineHeight: 1.9, fontSize: '1.05rem' }}>
          {t('about.bio2')}
        </p>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
          {t('about.bio3')}
        </p>
      </div>

      {/* Skills */}
      <h3
        style={{
          fontSize: '1.6rem',
          fontWeight: 700,
          marginBottom: 32,
          textAlign: 'center',
          color: 'var(--text-primary)',
        }}
      >
        {t('about.skills')}
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
          gap: 16,
          marginBottom: 60,
        }}
      >
        {skillNames.map((name, i) => (
          <SkillCard key={name} icon={skillIcons[i]} name={name} index={i} />
        ))}
      </div>

      {/* Experience */}
      <h3
        style={{
          fontSize: '1.6rem',
          fontWeight: 700,
          marginBottom: 32,
          textAlign: 'center',
          color: 'var(--text-primary)',
        }}
      >
        {t('about.experience')}
      </h3>
      <div style={{ position: 'relative', maxWidth: 600, margin: '0 auto' }}>
        {/* Timeline line */}
        <div
          style={{
            position: 'absolute',
            left: 20,
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, var(--accent-cyan), var(--accent-purple))',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                marginLeft: 48,
                padding: '24px 28px',
                position: 'relative',
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: 'absolute',
                  left: -38,
                  top: 28,
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: i === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)',
                  boxShadow:
                    i === 0
                      ? '0 0 15px rgba(0,212,255,0.5)'
                      : '0 0 15px rgba(124,58,237,0.5)',
                  border: '3px solid var(--bg-primary)',
                }}
              />

              <span
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--accent-cyan)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 500,
                }}
              >
                {exp.year}
              </span>
              <h4
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  margin: '4px 0 6px',
                  color: 'var(--text-primary)',
                }}
              >
                {exp.title}
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
