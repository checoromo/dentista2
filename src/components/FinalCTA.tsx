import React from 'react';
import { WA_LINKS } from '../data/landingData';

interface FinalCTAProps {
  isMobile: boolean;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ isMobile }) => {
  const primaryDark = '#0A6577';

  return (
    <section
      id="final-cta"
      style={{
        background: 'linear-gradient(135deg, #0A6577 0%, #074F5C 100%)',
        padding: isMobile ? '56px 20px' : '68px 40px',
      }}
    >
      <div
        style={{
          width: isMobile ? '100%' : 'min(1500px, calc(100% - 80px))',
          maxWidth: '1500px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: isMobile ? '18px' : '22px',
        }}
      >
        <h2
          style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 800,
            textTransform: 'uppercase',
            color: '#ffffff',
            fontSize: isMobile ? '2.1rem' : 'clamp(40px, 3.5vw, 48px)',
            lineHeight: 1.05,
            margin: 0,
            letterSpacing: '-0.01em',
            maxWidth: '980px',
          }}
        >
          Tu boca no va a mejorar sola
        </h2>

        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            color: 'rgba(255,255,255,0.92)',
            fontSize: isMobile ? '16px' : '18.5px',
            lineHeight: 1.6,
            margin: 0,
            fontWeight: 500,
            maxWidth: '780px',
          }}
        >
          Escríbele hoy a la Dra. Amparo Peña y agenda tu valoración. Un mensaje es todo lo que hace
          falta para empezar.
        </p>

        <a
          id="final-wa-cta-btn"
          href={WA_LINKS.hero}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#f2f2f2] hover:shadow-2xl hover:scale-[1.02] transition-all"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            background: '#ffffff',
            color: primaryDark,
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: isMobile ? '16.5px' : '18px',
            height: isMobile ? '52px' : '58px',
            padding: isMobile ? '0 28px' : '0 40px',
            borderRadius: '999px',
            textDecoration: 'none',
            boxShadow: '0 16px 36px rgba(0,0,0,0.35)',
            marginTop: '8px',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
            <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.55 3.75 1.5 5.29L2 22l4.99-1.65a9.83 9.83 0 0 0 5.05 1.4c5.44 0 9.84-4.4 9.84-9.84C21.88 6.4 17.48 2 12.04 2zm5.7 13.9c-.24.67-1.4 1.3-1.93 1.35-.53.05-1.02.16-2.9-.68-2.26-1-3.68-3.4-3.8-3.56-.11-.16-.9-1.28-.9-2.45 0-1.16.6-1.73.82-1.97.22-.23.48-.29.64-.29h.46c.15 0 .35-.02.54.42.2.5.68 1.73.74 1.85.06.13.1.28.01.44-.08.16-.16.26-.32.44-.16.18-.25.29-.36.47-.11.18-.03.36.08.53.11.18.6.98 1.28 1.6.87.79 1.42 1.02 1.63 1.13.2.11.33.09.45-.05.13-.15.55-.64.7-.86.15-.22.3-.18.5-.1.19.07 1.24.6 1.45.71.21.11.35.16.4.25.06.09.06.53-.09 1.2z" />
          </svg>
          Agendar cita por WhatsApp
        </a>

        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            color: 'rgba(255,255,255,0.7)',
            fontSize: isMobile ? '13.5px' : '15px',
            lineHeight: 1.5,
            margin: '8px 0 0',
            fontWeight: 500,
          }}
        >
          Lunes a Viernes 10:00–20:00 · Sábado 10:00–14:00 · Av. de las Rosas 430, Chapalita
          Oriente, Zapopan
        </p>
      </div>
    </section>
  );
};
