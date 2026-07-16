import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { path: '/', key: 'home' },
  { path: '/about', key: 'about' },
  { path: '/projects', key: 'projects' },
  { path: '/blog', key: 'blog' },
  { path: '/contact', key: 'contact' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh');
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled
          ? 'rgba(10, 10, 20, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: '1.4rem',
            fontWeight: 800,
            background: 'var(--gradient-text)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
          }}
        >
          {'<BBY />'}
        </Link>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32,
          }}
          className="nav-desktop"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontSize: '0.95rem',
                fontWeight: 500,
                color:
                  location.pathname === link.path
                    ? 'var(--accent-cyan)'
                    : 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.3s',
                position: 'relative',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--accent-cyan)')}
              onMouseLeave={(e) => {
                if (location.pathname !== link.path)
                  e.target.style.color = 'var(--text-secondary)';
              }}
            >
              {t(`nav.${link.key}`)}
              {location.pathname === link.path && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: -4,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: 'var(--accent-cyan)',
                    boxShadow: '0 0 10px rgba(0,212,255,0.6)',
                  }}
                />
              )}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button
            onClick={toggleLang}
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              padding: '6px 14px',
              color: 'var(--text-secondary)',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              fontFamily: 'var(--font-mono)',
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'var(--accent-cyan)';
              e.target.style.color = 'var(--accent-cyan)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'rgba(255,255,255,0.1)';
              e.target.style.color = 'var(--text-secondary)';
            }}
          >
            {t('language.switch')}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-mobile-btn"
            style={{
              display: 'none',
              fontSize: '1.5rem',
              color: 'var(--text-primary)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 4,
            }}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          display: menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          gap: 8,
          padding: '16px 24px',
          background: 'rgba(10, 10, 20, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              fontSize: '1.1rem',
              fontWeight: 500,
              padding: '12px 16px',
              color:
                location.pathname === link.path
                  ? 'var(--accent-cyan)'
                  : 'var(--text-secondary)',
              textDecoration: 'none',
              borderRadius: 'var(--radius-sm)',
              background:
                location.pathname === link.path
                  ? 'rgba(0,212,255,0.08)'
                  : 'transparent',
              transition: 'all 0.3s',
            }}
          >
            {t(`nav.${link.key}`)}
          </Link>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
