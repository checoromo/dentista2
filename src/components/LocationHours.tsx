import React from 'react';
import { WA_LINKS } from '../data/landingData';

interface LocationHoursProps {
  isMobile: boolean;
}

export const LocationHours: React.FC<LocationHoursProps> = ({ isMobile }) => {
  const primary = '#4194A4';
  const primaryDark = '#0A6577';
  const primarySoft = '#EFF8F9';
  const textPrimary = '#232827';
  const textSecondary = '#6F7477';
  const border = '#DDE0E1';

  return (
    <section
      id="ubicacion"
      style={{
        padding: isMobile ? '56px 20px' : '72px 0',
        background: '#FCFCFE',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr',
          gap: isMobile ? '36px' : '52px',
          alignItems: 'stretch',
          width: isMobile ? '100%' : 'min(1500px, calc(100% - 80px))',
          maxWidth: '1500px',
          margin: '0 auto',
        }}
      >
        {/* Left Column: Info, Schedule, Contacts */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '18px' : '22px',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              alignSelf: 'flex-start',
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
            Ubicación y horarios
          </span>

          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase',
              color: textPrimary,
              fontSize: isMobile ? '2.1rem' : 'clamp(38px, 3.2vw, 48px)',
              lineHeight: 1.05,
              margin: 0,
              textWrap: 'pretty',
            }}
          >
            Estamos en Chapalita Oriente, con estacionamiento
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: textSecondary,
                fontSize: isMobile ? '16px' : '18.5px',
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 500,
              }}
            >
              Av. de las Rosas 430
              <br />
              Col. Chapalita Oriente
              <br />
              Zapopan, Jalisco, C.P. 45040
            </p>
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: textPrimary,
                fontSize: isMobile ? '16px' : '18px',
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 700,
              }}
            >
              Estacionamiento propio en planta baja
            </p>
          </div>

          {/* Schedule Table */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              padding: '22px 0',
              borderTop: `1px solid ${border}`,
              borderBottom: `1px solid ${border}`,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: textPrimary,
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: 600,
                }}
              >
                Lunes a Viernes
              </span>
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: textSecondary,
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: 600,
                }}
              >
                10:00 – 20:00
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: textPrimary,
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: 600,
                }}
              >
                Sábado
              </span>
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: textSecondary,
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: 600,
                }}
              >
                10:00 – 14:00
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: textPrimary,
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: 600,
                }}
              >
                Domingo
              </span>
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: textSecondary,
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: 600,
                }}
              >
                Cerrado
              </span>
            </div>
          </div>

          {/* Contacts Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '12px',
            }}
          >
            <a
              id="loc-contact-wa"
              href={WA_LINKS.ubicacion}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#EFF8F9] transition-colors"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 18px',
                borderRadius: '16px',
                background: '#ffffff',
                border: `1px solid ${border}`,
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42px',
                  height: '42px',
                  borderRadius: '999px',
                  background: '#e6f9ee',
                  flexShrink: 0,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.55 3.75 1.5 5.29L2 22l4.99-1.65a9.83 9.83 0 0 0 5.05 1.4c5.44 0 9.84-4.4 9.84-9.84C21.88 6.4 17.48 2 12.04 2zm5.7 13.9c-.24.67-1.4 1.3-1.93 1.35-.53.05-1.02.16-2.9-.68-2.26-1-3.68-3.4-3.8-3.56-.11-.16-.9-1.28-.9-2.45 0-1.16.6-1.73.82-1.97.22-.23.48-.29.64-.29h.46c.15 0 .35-.02.54.42.2.5.68 1.73.74 1.85.06.13.1.28.01.44-.08.16-.16.26-.32.44-.16.18-.25.29-.36.47-.11.18-.03.36.08.53.11.18.6.98 1.28 1.6.87.79 1.42 1.02 1.63 1.13.2.11.33.09.45-.05.13-.15.55-.64.7-.86.15-.22.3-.18.5-.1.19.07 1.24.6 1.45.71.21.11.35.16.4.25.06.09.06.53-.09 1.2z" />
                </svg>
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '.06em',
                    textTransform: 'uppercase',
                    color: textSecondary,
                  }}
                >
                  WhatsApp
                </span>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '16.5px',
                    fontWeight: 600,
                    color: textPrimary,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  33 3189 9008
                </span>
              </span>
            </a>

            <a
              id="loc-contact-tel1"
              href="tel:+523331222941"
              className="hover:bg-[#EFF8F9] transition-colors"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 18px',
                borderRadius: '16px',
                background: '#ffffff',
                border: `1px solid ${border}`,
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42px',
                  height: '42px',
                  borderRadius: '999px',
                  background: primarySoft,
                  flexShrink: 0,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={primaryDark}
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" />
                </svg>
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '.06em',
                    textTransform: 'uppercase',
                    color: textSecondary,
                  }}
                >
                  Teléfono
                </span>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '16.5px',
                    fontWeight: 600,
                    color: textPrimary,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  33 3122 2941
                </span>
              </span>
            </a>

            <a
              id="loc-contact-tel2"
              href="tel:+523333800333"
              className="hover:bg-[#EFF8F9] transition-colors"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 18px',
                borderRadius: '16px',
                background: '#ffffff',
                border: `1px solid ${border}`,
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42px',
                  height: '42px',
                  borderRadius: '999px',
                  background: primarySoft,
                  flexShrink: 0,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={primaryDark}
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" />
                </svg>
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '.06em',
                    textTransform: 'uppercase',
                    color: textSecondary,
                  }}
                >
                  Teléfono
                </span>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '16.5px',
                    fontWeight: 600,
                    color: textPrimary,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  33 3380 0333
                </span>
              </span>
            </a>

            <a
              id="loc-contact-mail"
              href="mailto:dra_amparopena@hotmail.com"
              className="hover:bg-[#EFF8F9] transition-colors"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 18px',
                borderRadius: '16px',
                background: '#ffffff',
                border: `1px solid ${border}`,
                textDecoration: 'none',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42px',
                  height: '42px',
                  borderRadius: '999px',
                  background: primarySoft,
                  flexShrink: 0,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={primaryDark}
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2.5" y="4.5" width="19" height="15" rx="2.6" />
                  <path d="M3 6.5l9 6.3 9-6.3" />
                </svg>
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '.06em',
                    textTransform: 'uppercase',
                    color: textSecondary,
                  }}
                >
                  Correo
                </span>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '16px',
                    fontWeight: 600,
                    color: textPrimary,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  dra_amparopena@hotmail.com
                </span>
              </span>
            </a>
          </div>

          <a
            id="loc-wa-confirm-btn"
            href={WA_LINKS.ubicacion}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-[#0A6577] hover:shadow-lg transition-all"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              background: primary,
              color: '#ffffff',
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 700,
              fontSize: '17px',
              padding: '17px 32px',
              borderRadius: '999px',
              textDecoration: 'none',
              marginTop: '6px',
              boxShadow: '0 8px 20px rgba(10,101,119,0.25)',
            }}
          >
            Confirmar disponibilidad por WhatsApp
          </a>
        </div>

        {/* Right Column: Google Maps & Directions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div
            style={{
              width: '100%',
              flex: 1,
              minHeight: isMobile ? '340px' : '480px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
            }}
          >
            <iframe
              src="https://www.google.com/maps?q=Dra.+Amparo+Pe%C3%B1a+Martin+del+Campo,+Av.+de+las+Rosas+430,+Chapalita+Oriente,+Zapopan,+Jalisco&output=embed"
              style={{ width: '100%', height: '100%', minHeight: isMobile ? '340px' : '480px', border: 0 }}
              loading="lazy"
              title="Mapa del consultorio de la Dra. Amparo Peña"
            />
          </div>
          <a
            id="loc-directions-btn"
            href="https://maps.app.goo.gl/ADN9AGMe4TfMSZMc9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-[#EFF8F9] transition-colors"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: '#ffffff',
              color: textPrimary,
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 700,
              fontSize: '16.5px',
              padding: '16px 32px',
              borderRadius: '999px',
              textDecoration: 'none',
              border: `1.5px solid ${border}`,
              width: 'fit-content',
            }}
          >
            Cómo llegar
          </a>
        </div>
      </div>
    </section>
  );
};
