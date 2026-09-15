import React from 'react';
import { HERO_SLIDES, AVATARS, WA_LINKS } from '../data/landingData';

interface HeroProps {
  slide: number;
  nextSlide: () => void;
  isMobile: boolean;
}

export const Hero: React.FC<HeroProps> = ({ slide, nextSlide, isMobile }) => {
  const primaryDark = '#0A6577';

  const slideStyle = (i: number): React.CSSProperties => ({
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: slide === i ? 1 : 0,
    transition: 'opacity 1.6s ease',
  });

  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '100vh' : '90vh',
        minHeight: isMobile ? '640px' : '720px',
        maxHeight: isMobile ? '820px' : '980px',
        overflow: 'hidden',
      }}
    >
      {HERO_SLIDES.map((url, i) => (
        <img
          key={url}
          src={url}
          alt="Consultorio dental Dra. Amparo Peña"
          style={slideStyle(i)}
        />
      ))}

      {/* Gradient Overlay */}
      <div
        id="hero-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(7,35,42,0.92) 0%, rgba(7,35,42,0.76) 36%, rgba(7,35,42,0.32) 64%, rgba(7,35,42,0.06) 88%)',
        }}
      />

      {/* Degree Badge Note */}
      <div
        id="hero-credential-note"
        style={{
          position: 'absolute',
          top: isMobile ? '88px' : '110px',
          right: isMobile ? '16px' : 'max(40px, calc((100% - 1500px) / 2 + 40px))',
          maxWidth: isMobile ? '200px' : '310px',
          background: 'rgba(7,35,42,0.60)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderLeft: '3px solid #4194A4',
          padding: isMobile ? '10px 14px' : '14px 18px',
          color: 'rgba(255,255,255,0.96)',
          fontSize: isMobile ? '12.5px' : '14px',
          lineHeight: 1.5,
          fontWeight: 600,
          borderRadius: '4px',
          zIndex: 3,
        }}
      >
        Cirujano dentista egresada de la UAG · Cédula profesional 1986231
      </div>

      {/* Next Slide Arrow Button */}
      <button
        id="hero-next-slide-btn"
        onClick={nextSlide}
        aria-label="Siguiente imagen"
        className="hover:scale-105 active:scale-95 transition-transform"
        style={{
          position: 'absolute',
          top: '50%',
          right: isMobile ? '14px' : 'max(24px, calc((100% - 1500px) / 2 + 16px))',
          transform: 'translateY(-50%)',
          width: isMobile ? '46px' : '54px',
          height: isMobile ? '46px' : '54px',
          borderRadius: '999px',
          background: 'rgba(255,255,255,0.92)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 5,
          boxShadow: '0 4px 18px rgba(0,0,0,0.32)',
        }}
      >
        <svg
          width={isMobile ? "18" : "24"}
          height={isMobile ? "18" : "24"}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0A6577"
          strokeWidth="2.5"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      {/* Outer Content Alignment Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: isMobile ? '100%' : 'min(1500px, calc(100% - 80px))',
          margin: '0 auto',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: isMobile ? '0 20px' : '0',
        }}
      >
        {/* Main Content Column */}
        <div
          id="hero-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: isMobile ? '20px' : '28px',
            width: isMobile ? '100%' : '52%',
            maxWidth: isMobile ? '100%' : '780px',
          }}
        >
          <h1
            id="hero-heading"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#ffffff',
              fontSize: isMobile ? '2.4rem' : 'clamp(58px, 5vw, 78px)',
              lineHeight: 0.98,
              letterSpacing: '-0.02em',
              margin: 0,
              textWrap: 'pretty',
            }}
          >
            ODONTOLOGÍA INTEGRAL PARA TODA LA FAMILIA
          </h1>

          <p
            id="hero-subtext"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: isMobile ? '16px' : '19px',
              lineHeight: 1.55,
              color: 'rgba(255,255,255,0.92)',
              margin: 0,
              fontWeight: 500,
              maxWidth: '640px',
            }}
          >
            Atención dental directa y cercana en Chapalita Oriente para toda la familia, respaldada por más de 30 años de experiencia profesional.
          </p>

          <div
            id="hero-cta-row"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: isMobile ? '18px' : '32px',
              marginTop: isMobile ? '6px' : '10px',
            }}
          >
            <a
              id="hero-primary-cta"
              href={WA_LINKS.hero}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#f2f2f2] hover:shadow-2xl transition-all"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: '#ffffff',
                color: primaryDark,
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 700,
                fontSize: '17px',
                padding: '17px 32px',
                borderRadius: '999px',
                textDecoration: 'none',
                boxShadow: '0 14px 34px rgba(0,0,0,0.3)',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ fontSize: '20px' }}>💬</span> Agenda tu cita por WhatsApp
            </a>

            <div
              id="hero-badge-wrap"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {AVATARS.map((av, idx) => (
                  <img
                    key={av}
                    src={av}
                    alt="Paciente de la Dra. Amparo Peña"
                    style={{
                      width: isMobile ? '36px' : '44px',
                      height: isMobile ? '36px' : '44px',
                      borderRadius: '999px',
                      objectFit: 'cover',
                      border: '2.5px solid #ffffff',
                      marginLeft: idx === 0 ? '0px' : '-14px',
                    }}
                  />
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                <span
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 800,
                    fontSize: isMobile ? '17px' : '20px',
                    color: '#ffffff',
                  }}
                >
                  +30 años
                </span>
                <span
                  style={{
                    fontSize: isMobile ? '13px' : '14px',
                    color: 'rgba(255,255,255,0.9)',
                    fontWeight: 500,
                  }}
                >
                  de experiencia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
