import React from 'react';
import { FACILITIES } from '../data/landingData';

interface FacilitiesProps {
  isMobile: boolean;
}

export const Facilities: React.FC<FacilitiesProps> = ({ isMobile }) => {
  const primary = '#4194A4';
  const primaryDark = '#0A6577';
  const primarySoft = '#EFF8F9';
  const textPrimary = '#232827';
  const textSecondary = '#6F7477';
  const border = '#DDE0E1';

  return (
    <section
      id="instalaciones"
      style={{
        padding: isMobile ? '56px 20px' : '72px 0',
        background: '#FCFCFE',
      }}
    >
      <div
        style={{
          width: isMobile ? '100%' : 'min(1500px, calc(100% - 80px))',
          maxWidth: '1500px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            maxWidth: '840px',
            margin: `0 auto ${isMobile ? '32px' : '44px'}`,
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              alignSelf: 'center',
              border: `1px solid ${border}`,
              background: primarySoft,
              borderRadius: '999px',
              padding: '8px 16px',
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 700,
              fontSize: '13px',
              color: primaryDark,
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '999px',
                background: primary,
                display: 'inline-block',
              }}
            />
            Instalaciones
          </span>
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase',
              color: textPrimary,
              fontSize: isMobile ? '2.1rem' : 'clamp(42px, 3.5vw, 52px)',
              lineHeight: 1.05,
              margin: 0,
              textWrap: 'pretty',
            }}
          >
            Un espacio cómodo, moderno y preparado
          </h2>
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              color: textSecondary,
              fontSize: isMobile ? '15.5px' : '17px',
              lineHeight: 1.65,
              margin: 0,
              fontWeight: 500,
              maxWidth: '720px',
            }}
          >
            Un espacio amplio, limpio y equipado, en planta baja y con estacionamiento propio sobre
            Av. de las Rosas. Así es donde te vamos a atender.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full"
        >
          {FACILITIES.map((fac) => (
            <div
              key={fac.id}
              id={`facility-card-${fac.id}`}
              className="group hover:shadow-2xl transition-all duration-300"
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '24px',
                height: isMobile ? '340px' : '400px',
                background: '#eef1f3',
                boxShadow: '0 8px 24px rgba(15,30,45,0.08)',
              }}
            >
              {/* Full-bleed Photo */}
              <img
                src={fac.img}
                alt={fac.alt}
                className="group-hover:scale-105 transition-transform duration-500 ease-out"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* Gradient overlay for text legibility at bottom */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(7,35,42,0) 45%, rgba(7,35,42,0.32) 65%, rgba(7,35,42,0.88) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Top-right floating circle with tooth icon (sin rectángulo) */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '42px',
                  height: '42px',
                  borderRadius: '999px',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.18)',
                  zIndex: 2,
                }}
                className="group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={primaryDark}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3.4c2.1 0 3.5-.8 5-.3 1.7.6 2.4 2.4 2 5-.4 2.4-1 4.5-1.7 6.7-.5 1.5-.9 3.1-2.1 3.1-1.2 0-1.5-2.5-1.9-4.2-.2-1-.5-1.7-1.3-1.7s-1.1.7-1.3 1.7c-.4 1.7-.7 4.2-1.9 4.2-1.2 0-1.6-1.6-2.1-3.1C4.9 12.6 4.3 10.5 3.9 8.1c-.4-2.6.3-4.4 2-5 1.6-.5 3 .3 5.1.3z" />
                </svg>
              </div>

              {/* Bottom text directly on the image gradient (sin el rectángulo) */}
              <div
                style={{
                  position: 'absolute',
                  left: '20px',
                  right: '20px',
                  bottom: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  zIndex: 2,
                  pointerEvents: 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: isMobile ? '16px' : '18px',
                    color: '#ffffff',
                    textShadow: '0 1px 6px rgba(0,0,0,0.5)',
                    lineHeight: 1.25,
                  }}
                >
                  {fac.title}
                </span>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 500,
                    fontSize: isMobile ? '12.5px' : '13.5px',
                    color: 'rgba(255,255,255,0.88)',
                    textShadow: '0 1px 6px rgba(0,0,0,0.5)',
                    lineHeight: 1.4,
                  }}
                >
                  {fac.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
