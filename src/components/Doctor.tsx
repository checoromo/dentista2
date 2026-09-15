import React from 'react';
import { WA_LINKS } from '../data/landingData';

interface DoctorProps {
  isMobile: boolean;
}

export const Doctor: React.FC<DoctorProps> = ({ isMobile }) => {
  const primary = '#4194A4';
  const primaryDark = '#0A6577';
  const primarySoft = '#EFF8F9';
  const textPrimary = '#232827';
  const textSecondary = '#6F7477';
  const border = '#DDE0E1';

  const tag = (bg: string, fg: string): React.CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: "'Manrope', sans-serif",
    fontSize: '13.5px',
    fontWeight: 600,
    color: fg,
    background: bg,
    borderRadius: '999px',
    padding: '8px 15px 8px 12px',
    lineHeight: 1,
  });

  return (
    <section
      id="doctora"
      style={{
        padding: isMobile ? '0 20px 56px' : '0 0 72px',
        background: '#ffffff',
        width: isMobile ? '100%' : 'min(1500px, calc(100% - 80px))',
        maxWidth: '1500px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: isMobile ? '28px' : '50px',
          alignItems: 'stretch',
        }}
      >
        {/* Left Column: Visuals */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '16px' : '20px',
            height: '100%',
            minHeight: isMobile ? 'auto' : '560px',
          }}
        >
          <div
            style={{
              width: '100%',
              aspectRatio: isMobile ? '16/11' : undefined,
              flex: isMobile ? undefined : '1.4 1 0',
              minHeight: isMobile ? '240px' : '360px',
              borderRadius: '20px',
              overflow: 'hidden',
              background: '#f1f3f5',
            }}
          >
            <img
              src="https://res.cloudinary.com/darqvjyxa/image/upload/v1787343799/consul-1_o165rj.jpg"
              alt="Consultorio de la Dra. Amparo Peña en Chapalita Oriente"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: isMobile ? '16px' : '20px',
              flex: isMobile ? undefined : '1 1 0',
            }}
          >
            {/* Stat Card */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: isMobile ? '18px' : '24px',
                background: primarySoft,
                borderRadius: '20px',
                padding: isMobile ? '20px' : '28px',
                minHeight: isMobile ? '160px' : '220px',
                height: '100%',
                boxSizing: 'border-box',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '999px',
                  background: primary,
                  flexShrink: 0,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.6"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: isMobile ? '2.4rem' : '3.4rem',
                  color: textPrimary,
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                +30
              </span>
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '15px',
                  fontWeight: 600,
                  color: textSecondary,
                  lineHeight: 1.45,
                }}
              >
                Años de práctica
                <br />
                en odontología integral
              </span>
            </div>

            {/* Second Photo */}
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#f1f3f5',
                minHeight: isMobile ? '160px' : '220px',
              }}
            >
              <img
                src="https://res.cloudinary.com/darqvjyxa/image/upload/v1787343800/consul-2_kjsmap.jpg"
                alt="Área de atención del consultorio dental"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Credentials */}
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
            Sobre la doctora
          </span>

          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase',
              color: textPrimary,
              fontSize: isMobile ? '2.1rem' : 'clamp(40px, 3.5vw, 50px)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              margin: 0,
              textWrap: 'pretty',
            }}
          >
            ODONTOLOGIA INTEGRAL PARA TODA LA FAMILIA
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: textSecondary,
                fontSize: isMobile ? '16px' : '17.5px',
                lineHeight: 1.65,
                margin: 0,
                fontWeight: 500,
              }}
            >
              La Dra. Amparo Peña Martin del Campo es egresada de la Universidad Autónoma de Guadalajara.
            </p>
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: textSecondary,
                fontSize: isMobile ? '16px' : '17.5px',
                lineHeight: 1.65,
                margin: 0,
                fontWeight: 500,
              }}
            >
              La respaldan más de 30 años de experiencia en el ramo Odontológico, ofreciéndole una alta calidad en sus servicios profesionales, con un trato amable y personalizado en todo momento.
            </p>
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: textSecondary,
                fontSize: isMobile ? '16px' : '17.5px',
                lineHeight: 1.65,
                margin: 0,
                fontWeight: 500,
              }}
            >
              Cuenta con amplias instalaciones, con estacionamiento propio y el consultorio está en planta baja, para tu mayor comodidad.
            </p>
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: textSecondary,
                fontSize: isMobile ? '16px' : '17.5px',
                lineHeight: 1.65,
                margin: 0,
                fontWeight: 500,
              }}
            >
              Llama y reserva tu cita, podrás encontrar tratamientos odontológicos de vanguardia para toda la familia.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: isMobile ? '16px' : '24px',
              marginTop: '4px',
            }}
          >
            <a
              id="doctora-wa-cta"
              href={WA_LINKS.doctora}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#4194A4] hover:text-white hover:border-[#4194A4] transition-all group"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                border: `1.5px solid ${border}`,
                background: '#ffffff',
                color: textPrimary,
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 700,
                fontSize: '16px',
                padding: '14px 14px 14px 26px',
                borderRadius: '999px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Escríbele por WhatsApp
              <span
                className="group-hover:bg-white group-hover:text-[#4194A4] transition-colors"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '30px',
                  height: '30px',
                  borderRadius: '999px',
                  background: primary,
                  color: '#ffffff',
                  flexShrink: 0,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                >
                  <path d="M5 12h13M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  borderRadius: '999px',
                  flexShrink: 0,
                  background: primarySoft,
                  color: primaryDark,
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: '16px',
                  letterSpacing: '0.02em',
                }}
              >
                AP
              </div>
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.3 }}>
                <span
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: '15px',
                    color: textPrimary,
                  }}
                >
                  Dra. Amparo Peña M. del Campo
                </span>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '13.5px',
                    fontWeight: 500,
                    color: textSecondary,
                  }}
                >
                  Cirujano dentista · Cédula 1986231
                </span>
              </span>
            </div>
          </div>

          {/* Bottom Row: Degree & Areas */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '0.8fr 1.2fr',
              gap: isMobile ? '16px' : '20px',
              marginTop: isMobile ? '10px' : '18px',
            }}
          >
            {/* UAG Degree Card */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                background: '#FCFCFE',
                border: `1px solid ${border}`,
                borderRadius: '18px',
                padding: isMobile ? '20px' : '26px',
              }}
            >
              <img
                src="https://res.cloudinary.com/darqvjyxa/image/upload/v1787343986/uag_i2nh1y.avif"
                alt="Universidad Autónoma de Guadalajara"
                style={{
                  height: isMobile ? '44px' : '54px',
                  width: 'auto',
                  objectFit: 'contain',
                  objectPosition: 'left center',
                  display: 'block',
                  marginBottom: '6px',
                }}
              />
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700,
                  fontSize: '15px',
                  color: textPrimary,
                }}
              >
                Cirujano Dentista
              </span>
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '13.5px',
                  fontWeight: 500,
                  color: textSecondary,
                  lineHeight: 1.45,
                }}
              >
                Universidad Autónoma
                <br />
                de Guadalajara
              </span>
            </div>

            {/* Areas of Attention */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                border: `1px solid ${border}`,
                borderRadius: '18px',
                padding: isMobile ? '20px' : '26px',
              }}
            >
              <span
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: '15.5px',
                  color: textPrimary,
                }}
              >
                Áreas de atención
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span style={tag(primarySoft, primaryDark)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="7" r="4" />
                    <path d="M4 21a8 8 0 0 1 16 0 1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
                  </svg>
                  Niños
                </span>
                <span style={tag(primarySoft, primaryDark)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="8" cy="7.5" r="3.4" />
                    <circle cx="17" cy="9" r="2.6" />
                    <path d="M1.6 20.6a6.4 6.4 0 0 1 12.8 0 1 1 0 0 1-1 1.2H2.6a1 1 0 0 1-1-1.2z" />
                    <path d="M13.4 21.8a5 5 0 0 1 9.2-2.2 1 1 0 0 1-.8 1.5h-7.6a1 1 0 0 1-.8-.7z" />
                  </svg>
                  Adultos
                </span>
                <span style={tag(primarySoft, primaryDark)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l8 3.2v6.2c0 5-3.4 9.5-8 10.9-4.6-1.4-8-5.9-8-10.9V5.2L12 2zm-1.3 14.2l6-6-1.7-1.7-4.3 4.3-1.7-1.7-1.7 1.7 3.4 3.4z" />
                  </svg>
                  Prevención
                </span>
                <span style={tag(primarySoft, primaryDark)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.2c2.6 0 4.4-1 6.3-.3 2.2.8 3.1 3.1 2.6 6.3-.5 3-1.3 5.6-2.2 8.4-.6 1.9-1.1 4-2.6 4-1.6 0-1.9-3.2-2.4-5.4-.3-1.2-.6-2.1-1.7-2.1s-1.4.9-1.7 2.1c-.5 2.2-.8 5.4-2.4 5.4-1.5 0-2-2.1-2.6-4C4.4 13.8 3.6 11.2 3.1 8.2 2.6 5 3.5 2.7 5.7 1.9 7.6 1.2 9.4 2.2 12 2.2z" />
                  </svg>
                  Rehabilitación
                </span>
                <span style={tag(primarySoft, primaryDark)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10.6 2.6a1.5 1.5 0 0 1 2.8 0L15 6.9l4.3 1.6a1.5 1.5 0 0 1 0 2.8L15 12.9l-1.6 4.3a1.5 1.5 0 0 1-2.8 0L9 12.9l-4.3-1.6a1.5 1.5 0 0 1 0-2.8L9 6.9l1.6-4.3z" />
                    <path d="M18.6 16l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z" />
                  </svg>
                  Estética dental
                </span>
                <span style={tag(primarySoft, primaryDark)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm-1.2 4.4v7.2h2.4V6.4h-2.4zm0 9v2.4h2.4v-2.4h-2.4z" />
                  </svg>
                  Urgencias
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
