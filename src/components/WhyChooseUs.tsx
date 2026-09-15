import React from 'react';

interface WhyChooseUsProps {
  isMobile: boolean;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ isMobile }) => {
  const primary = '#4194A4';
  const primaryDark = '#0A6577';
  const primaryLight = '#9ED0D9';
  const primarySoft = '#EFF8F9';
  const textPrimary = '#232827';
  const textSecondary = '#6F7477';
  const border = '#DDE0E1';

  return (
    <section
      id="beneficios"
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
            Por qué elegirnos
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
            Por qué las familias de Chapalita regresan aquí
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))',
            gap: '24px',
            width: '100%',
          }}
        >
          {/* Card 1 */}
          <div
            id="why-card-1"
            className="hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              background: '#ffffff',
              border: `1px solid ${border}`,
              borderRadius: '20px',
              padding: isMobile ? '24px' : '30px',
              boxShadow: '0 4px 12px rgba(35,40,39,0.04)',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: primarySoft,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="34" height="34" viewBox="0 0 24 24">
                <path
                  fill={primary}
                  d="M6.6 3.5h10.8c0 3.9-3.4 5.5-3.4 8.5s3.4 4.6 3.4 8.5H6.6c0-3.9 3.4-5.5 3.4-8.5S6.6 7.4 6.6 3.5z"
                />
                <path
                  fill={primaryDark}
                  d="M5.4 2h13.2a1.5 1.5 0 0 1 0 3H5.4a1.5 1.5 0 0 1 0-3zm0 17h13.2a1.5 1.5 0 0 1 0 3H5.4a1.5 1.5 0 0 1 0-3z"
                />
                <path fill={primaryLight} d="M12 13.4c1.2 1.5 3.2 2.6 3.6 5.1H8.4c.4-2.5 2.4-3.6 3.6-5.1z" />
              </svg>
            </div>
            <h3
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 700,
                fontSize: isMobile ? '20px' : '22px',
                color: textPrimary,
                margin: 0,
                lineHeight: 1.25,
              }}
            >
              Tres décadas de experiencia
            </h3>
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: textSecondary,
                fontSize: isMobile ? '15.5px' : '16.5px',
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 500,
              }}
            >
              Más de 30 años tratando casos de todo tipo significan diagnósticos certeros y menos
              sorpresas durante tu tratamiento.
            </p>
          </div>

          {/* Card 2 */}
          <div
            id="why-card-2"
            className="hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              background: '#ffffff',
              border: `1px solid ${border}`,
              borderRadius: '20px',
              padding: isMobile ? '24px' : '30px',
              boxShadow: '0 4px 12px rgba(35,40,39,0.04)',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: primarySoft,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="34" height="34" viewBox="0 0 24 24">
                <path
                  fill={primary}
                  d="M5 3h14a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H9.6L5.8 19.4A1 1 0 0 1 4 18.6V16a3 3 0 0 1-1-2.4V6a3 3 0 0 1 3-3z"
                />
                <path
                  fill={primaryDark}
                  d="M7.5 7.6h9a1.1 1.1 0 0 1 0 2.2h-9a1.1 1.1 0 0 1 0-2.2zm0 4.2h5.4a1.1 1.1 0 0 1 0 2.2H7.5a1.1 1.1 0 0 1 0-2.2z"
                />
              </svg>
            </div>
            <h3
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 700,
                fontSize: isMobile ? '20px' : '22px',
                color: textPrimary,
                margin: 0,
                lineHeight: 1.25,
              }}
            >
              Trato personal, sin prisas
            </h3>
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: textSecondary,
                fontSize: isMobile ? '15.5px' : '16.5px',
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 500,
              }}
            >
              La doctora te explica qué tienes y cuáles son tus opciones antes de tocar nada, en
              palabras que se entienden.
            </p>
          </div>

          {/* Card 3 */}
          <div
            id="why-card-3"
            className="hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              background: '#ffffff',
              border: `1px solid ${border}`,
              borderRadius: '20px',
              padding: isMobile ? '24px' : '30px',
              boxShadow: '0 4px 12px rgba(35,40,39,0.04)',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: primarySoft,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="34" height="34" viewBox="0 0 24 24">
                <path
                  fill={primaryDark}
                  d="M2.6 13.4l1.7-4.8A3.4 3.4 0 0 1 7.5 6.3h9a3.4 3.4 0 0 1 3.2 2.3l1.7 4.8V18a1.4 1.4 0 0 1-1.4 1.4h-1.3a1.7 1.7 0 0 1-3.4 0H8.7a1.7 1.7 0 0 1-3.4 0H4a1.4 1.4 0 0 1-1.4-1.4v-4.6z"
                />
                <path
                  fill={primary}
                  d="M6.3 12.3l1.2-3.2a1.2 1.2 0 0 1 1.1-.8h6.8a1.2 1.2 0 0 1 1.1.8l1.2 3.2H6.3z"
                />
                <circle cx="5.9" cy="15.6" r="1.1" fill={primaryLight} />
                <circle cx="18.1" cy="15.6" r="1.1" fill={primaryLight} />
              </svg>
            </div>
            <h3
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 700,
                fontSize: isMobile ? '20px' : '22px',
                color: textPrimary,
                margin: 0,
                lineHeight: 1.25,
              }}
            >
              Estacionamiento propio
            </h3>
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: textSecondary,
                fontSize: isMobile ? '15.5px' : '16.5px',
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 500,
              }}
            >
              Llegas, te estacionas en planta baja y entras. Sin dar vueltas buscando lugar en
              Chapalita.
            </p>
          </div>

          {/* Card 4 */}
          <div
            id="why-card-4"
            className="hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              background: '#ffffff',
              border: `1px solid ${border}`,
              borderRadius: '20px',
              padding: isMobile ? '24px' : '30px',
              boxShadow: '0 4px 12px rgba(35,40,39,0.04)',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: primarySoft,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="34" height="34" viewBox="0 0 24 24">
                <path fill={primary} d="M4 4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v18H4V4z" />
                <path fill={primaryDark} d="M15 9h4a2 2 0 0 1 2 2v11h-6V9z" />
                <g fill="#ffffff">
                  <rect x="6.4" y="5.2" width="2.4" height="2.4" rx=".7" />
                  <rect x="10.2" y="5.2" width="2.4" height="2.4" rx=".7" />
                  <rect x="6.4" y="9.8" width="2.4" height="2.4" rx=".7" />
                  <rect x="10.2" y="9.8" width="2.4" height="2.4" rx=".7" />
                  <rect x="6.4" y="14.4" width="2.4" height="2.4" rx=".7" />
                </g>
                <rect x="16.7" y="12" width="2.6" height="2.4" rx=".7" fill={primaryLight} />
              </svg>
            </div>
            <h3
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 700,
                fontSize: isMobile ? '20px' : '22px',
                color: textPrimary,
                margin: 0,
                lineHeight: 1.25,
              }}
            >
              Instalaciones modernas
            </h3>
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: textSecondary,
                fontSize: isMobile ? '15.5px' : '16.5px',
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 500,
              }}
            >
              Consultorio amplio y equipo actualizado, incluidos rayos X en sitio para diagnosticar en
              la misma visita.
            </p>
          </div>

          {/* Card 5 */}
          <div
            id="why-card-5"
            className="hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              background: '#ffffff',
              border: `1px solid ${border}`,
              borderRadius: '20px',
              padding: isMobile ? '24px' : '30px',
              boxShadow: '0 4px 12px rgba(35,40,39,0.04)',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: primarySoft,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="34" height="34" viewBox="0 0 24 24">
                <circle cx="8.4" cy="7" r="3.4" fill={primaryDark} />
                <path
                  fill={primaryDark}
                  d="M2 20.2a6.4 6.4 0 0 1 12.8 0 1 1 0 0 1-1 1.1H3a1 1 0 0 1-1-1.1z"
                />
                <circle cx="17.4" cy="8.8" r="2.6" fill={primary} />
                <path
                  fill={primary}
                  d="M12.6 20.6a5 5 0 0 1 9.4-1.6 1 1 0 0 1-.9 1.5h-7.7a.9.9 0 0 1-.8-.3z"
                />
              </svg>
            </div>
            <h3
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 700,
                fontSize: isMobile ? '20px' : '22px',
                color: textPrimary,
                margin: 0,
                lineHeight: 1.25,
              }}
            >
              Toda la familia en un solo lugar
            </h3>
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: textSecondary,
                fontSize: isMobile ? '15.5px' : '16.5px',
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 500,
              }}
            >
              Desde la primera revisión de tu hijo hasta la rehabilitación de tus papás, con el mismo
              consultorio y el mismo criterio.
            </p>
          </div>

          {/* Card 6 */}
          <div
            id="why-card-6"
            className="hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              background: '#ffffff',
              border: `1px solid ${border}`,
              borderRadius: '20px',
              padding: isMobile ? '24px' : '30px',
              boxShadow: '0 4px 12px rgba(35,40,39,0.04)',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: primarySoft,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="34" height="34" viewBox="0 0 24 24">
                <rect x="2" y="4.6" width="20" height="14.8" rx="3.2" fill={primary} />
                <rect x="2" y="8.4" width="20" height="3.2" fill={primaryDark} />
                <rect x="5" y="14.2" width="6.4" height="2.2" rx="1.1" fill="#ffffff" />
                <rect x="15.6" y="14.2" width="3.4" height="2.2" rx="1.1" fill={primaryLight} />
              </svg>
            </div>
            <h3
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 700,
                fontSize: isMobile ? '20px' : '22px',
                color: textPrimary,
                margin: 0,
                lineHeight: 1.25,
              }}
            >
              Pagas como te acomode
            </h3>
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: textSecondary,
                fontSize: isMobile ? '15.5px' : '16.5px',
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 500,
              }}
            >
              Efectivo, tarjeta Visa o Mastercard, transferencia y depósito bancario.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
