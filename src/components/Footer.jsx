import { useTranslation } from 'react-i18next';
import { FiHeart } from 'react-icons/fi';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      style={{
        padding: '32px 24px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        textAlign: 'center',
        background: 'rgba(10, 10, 20, 0.6)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
          }}
        >
          {t('footer.copyright')}
        </p>
        <p
          style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          {t('footer.builtWith')}
          <FiHeart
            style={{
              color: 'var(--accent-pink)',
              fontSize: '0.75rem',
            }}
          />
        </p>
      </div>
    </footer>
  );
}
