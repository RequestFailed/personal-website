import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiArrowDown, FiGithub, FiMail, FiMapPin } from 'react-icons/fi';
import { useEffect, useState, useRef } from 'react';

function Typewriter({ text }) {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplay((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  useEffect(() => {
    setDisplay('');
    setIndex(0);
  }, [text]);

  return <span>{display}</span>;
}

function Avatar() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = 180;
    const scale = window.devicePixelRatio || 1;
    canvas.width = size * scale;
    canvas.height = size * scale;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    ctx.scale(scale, scale);

    // Background gradient
    const bgGrad = ctx.createLinearGradient(0, 0, size, size);
    bgGrad.addColorStop(0, '#0a0a14');
    bgGrad.addColorStop(1, '#121228');
    ctx.fillStyle = bgGrad;
    ctx.beginPath();
    ctx.roundRect(0, 0, size, size, 20);
    ctx.fill();

    // Glow border
    const borderGrad = ctx.createLinearGradient(0, 0, size, size);
    borderGrad.addColorStop(0, '#00d4ff');
    borderGrad.addColorStop(0.5, '#7c3aed');
    borderGrad.addColorStop(1, '#ec4899');
    ctx.strokeStyle = borderGrad;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(1.5, 1.5, size - 3, size - 3, 18);
    ctx.stroke();

    // Code-inspired background pattern
    ctx.fillStyle = 'rgba(0, 212, 255, 0.03)';
    for (let i = 0; i < 40; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const w = Math.random() * 40 + 10;
      const h = Math.random() * 6 + 2;
      ctx.fillRect(x, y, w, h);
    }

    // Central symbol - merging B and AI concept
    ctx.fillStyle = '#e8e8f0';
    ctx.font = 'bold 64px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Main initial
    ctx.fillText('白', size / 2, size / 2 - 8);

    // Small decorative elements
    const dots = [
      { x: size / 2 - 50, y: size / 2 - 40 },
      { x: size / 2 + 50, y: size / 2 + 35 },
      { x: size / 2 - 55, y: size / 2 + 40 },
    ];

    dots.forEach((dot, i) => {
      const colors = ['#00d4ff', '#7c3aed', '#ec4899'];
      ctx.fillStyle = colors[i];
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowColor = colors[i];
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // Connection lines
    ctx.strokeStyle = 'rgba(0, 212, 255, 0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(dots[0].x + 8, dots[0].y);
    ctx.lineTo(size / 2 - 16, size / 2 - 8);
    ctx.moveTo(size / 2 + 16, size / 2 - 8);
    ctx.lineTo(dots[1].x - 8, dots[1].y);
    ctx.stroke();
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        filter: 'drop-shadow(0 0 30px rgba(0,212,255,0.15))',
      }}
    >
      <canvas ref={canvasRef} style={{ borderRadius: 20 }} />
    </div>
  );
}

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          marginBottom: 40,
          animation: 'fadeInUp 0.8s ease',
        }}
      >
        <Avatar />
      </div>

      <p
        style={{
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-mono)',
          marginBottom: 8,
          letterSpacing: '0.1em',
        }}
      >
        {t('hero.greeting')}
      </p>

      <h1
        style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 900,
          background: 'var(--gradient-text)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: 12,
          lineHeight: 1.2,
        }}
      >
        {t('hero.name')}
      </h1>

      <h2
        style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          fontWeight: 500,
          color: 'var(--text-secondary)',
          marginBottom: 24,
          minHeight: '1.8em',
          fontFamily: 'var(--font-mono)',
        }}
      >
        <Typewriter text={t('hero.title')} />
        <span
          style={{
            display: 'inline-block',
            width: 2,
            height: '1.2em',
            background: 'var(--accent-cyan)',
            marginLeft: 2,
            verticalAlign: 'text-bottom',
            animation: 'blink 1s step-end infinite',
          }}
        />
      </h2>

      <p
        style={{
          maxWidth: 560,
          fontSize: '1.05rem',
          color: 'var(--text-muted)',
          lineHeight: 1.8,
          marginBottom: 40,
        }}
      >
        {t('hero.subtitle')}
      </p>

      <div
        style={{
          display: 'flex',
          gap: 16,
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: 60,
        }}
      >
        <Link to="/about" className="gradient-btn">
          <span>{t('hero.cta')}</span>
        </Link>
        <Link to="/contact" className="outline-btn">
          <span>{t('hero.contact')}</span>
        </Link>
      </div>

      {/* Social links */}
      <div style={{ display: 'flex', gap: 20, marginBottom: 40 }}>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: 44,
            height: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'var(--text-secondary)',
            fontSize: '1.2rem',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-cyan)';
            e.currentTarget.style.color = 'var(--accent-cyan)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <FiGithub />
        </a>
        <a
          href="mailto:hello@example.com"
          style={{
            width: 44,
            height: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'var(--text-secondary)',
            fontSize: '1.2rem',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-purple)';
            e.currentTarget.style.color = 'var(--accent-purple)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(124,58,237,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <FiMail />
        </a>
        <div
          style={{
            width: 44,
            height: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'var(--text-secondary)',
            fontSize: '1.2rem',
          }}
        >
          <FiMapPin />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          animation: 'bounce 2s infinite',
          color: 'var(--text-muted)',
          fontSize: '1.4rem',
        }}
      >
        <FiArrowDown />
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
}
