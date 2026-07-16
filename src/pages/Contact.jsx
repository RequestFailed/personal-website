import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiSend, FiGithub, FiMail, FiMapPin, FiCheck } from 'react-icons/fi';

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  return (
    <div className="page-container">
      <h2 className="section-title">{t('contact.title')}</h2>
      <p className="section-subtitle">{t('contact.subtitle')}</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          maxWidth: 900,
          margin: '0 auto',
        }}
        className="contact-grid"
      >
        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="glass-card"
          style={{
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: 8,
              }}
            >
              {t('contact.name')}
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={t('contact.namePlaceholder')}
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '0.95rem',
                color: 'var(--text-primary)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 'var(--radius-sm)',
                transition: 'all 0.3s',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: 8,
              }}
            >
              {t('contact.email')}
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder={t('contact.emailPlaceholder')}
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '0.95rem',
                color: 'var(--text-primary)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 'var(--radius-sm)',
                transition: 'all 0.3s',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: 8,
              }}
            >
              {t('contact.message')}
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t('contact.messagePlaceholder')}
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '0.95rem',
                color: 'var(--text-primary)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 'var(--radius-sm)',
                resize: 'vertical',
                transition: 'all 0.3s',
                fontFamily: 'var(--font-sans)',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
          </div>

          <button
            type="submit"
            className="gradient-btn"
            disabled={sending}
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '14px',
              opacity: sending ? 0.7 : 1,
              cursor: sending ? 'not-allowed' : 'pointer',
            }}
          >
            {sent ? (
              <>
                <FiCheck /> <span>{t('contact.sent')}</span>
              </>
            ) : sending ? (
              <span>{t('contact.sending')}</span>
            ) : (
              <>
                <FiSend /> <span>{t('contact.send')}</span>
              </>
            )}
          </button>
        </form>

        {/* Contact info */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <div
            className="glass-card"
            style={{
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}
          >
            <h3
              style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: 4,
              }}
            >
              {t('contact.otherWays')}
            </h3>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'rgba(0,212,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)',
                  fontSize: '1.2rem',
                  flexShrink: 0,
                }}
              >
                <FiGithub />
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t('contact.github')}</p>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  github.com/your-username
                </a>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'rgba(124,58,237,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-purple)',
                  fontSize: '1.2rem',
                  flexShrink: 0,
                }}
              >
                <FiMail />
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t('contact.emailMe')}</p>
                <a
                  href="mailto:hello@example.com"
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  hello@example.com
                </a>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'rgba(236,72,153,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-pink)',
                  fontSize: '1.2rem',
                  flexShrink: 0,
                }}
              >
                <FiMapPin />
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t('contact.location')}</p>
                <p style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                  {t('contact.location')}
                </p>
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div
            className="glass-card"
            style={{
              padding: '28px',
              textAlign: 'center',
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 900,
              background: 'linear-gradient(135deg, rgba(0,212,255,0.06), rgba(124,58,237,0.06))',
            }}
          >
            <span
              style={{
                background: 'var(--gradient-text)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {'<>'}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
