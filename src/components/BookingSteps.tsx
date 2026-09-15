import React from 'react';
import { WA_LINKS } from '../data/landingData';

interface BookingStepsProps {
  isMobile: boolean;
}

export const BookingSteps: React.FC<BookingStepsProps> = ({ isMobile }) => {
  const primary = '#4194A4';
  const primaryDark = '#0A6577';
  const primaryLight = '#9ED0D9';
  const primarySoft = '#EFF8F9';
  const textPrimary = '#232827';
  const textSecondary = '#6F7477';
  const border = '#DDE0E1';

  return (
    <section
      id="como-agendar"
      style={{
        padding: isMobile ? '56px 20px' : '72px 0',
        background: '#ffffff',
        width: isMobile ? '100%' : 'min(1500px, calc(100% - 80px))',
        maxWidth: '1500px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
          Cómo agendar
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
          Agendar tu cita toma menos de un minuto
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))',
          gap: '24px',
          width: '100%',
          marginBottom: isMobile ? '36px' : '48px',
        }}
      >
        {/* Step 1 */}
        <div id="step-card-1" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              width: '100%',
              height: isMobile ? '220px' : '280px',
              borderRadius: '20px',
              overflow: 'hidden',
              background: primarySoft,
              marginBottom: '4px',
            }}
          >
            <img
              src="https://res.cloudinary.com/darqvjyxa/image/upload/v1787355051/1_neqkrp.avif"
              alt="Paciente escribiendo por WhatsApp al consultorio"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: primarySoft,
                flexShrink: 0,
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24">
                <path
                  fill={primary}
                  d="M5 3h14a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H9.6L5.8 19.4A1 1 0 0 1 4 18.6V16a3 3 0 0 1-1-2.4V6a3 3 0 0 1 3-3z"
                />
                <path
                  fill={primaryDark}
                  d="M7.5 7.6h9a1.1 1.1 0 0 1 0 2.2h-9a1.1 1.1 0 0 1 0-2.2zm0 4.2h5.4a1.1 1.1 0 0 1 0 2.2H7.5a1.1 1.1 0 0 1 0-2.2z"
                />
              </svg>
            </span>
            <span
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: '44px',
                color: primary,
                lineHeight: 1,
              }}
            >
              1
            </span>
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
            Escríbenos por WhatsApp
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
            Cuéntanos qué te pasa o qué tratamiento te interesa. Si tienes una molestia,
            describirla ayuda a preparar tu consulta.
          </p>
        </div>

        {/* Step 2 */}
        <div id="step-card-2" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              width: '100%',
              height: isMobile ? '220px' : '280px',
              borderRadius: '20px',
              overflow: 'hidden',
              background: primarySoft,
              marginBottom: '4px',
            }}
          >
            <img
              src="https://res.cloudinary.com/darqvjyxa/image/upload/v1787355052/2_vhv7yc.avif"
              alt="Confirmación de horario para la cita dental"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: primarySoft,
                flexShrink: 0,
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24">
                <rect x="2.5" y="4.5" width="19" height="17" rx="3.2" fill={primary} />
                <path
                  fill={primaryDark}
                  d="M7 1.8a1.3 1.3 0 0 1 1.3 1.3v2.6a1.3 1.3 0 0 1-2.6 0V3.1A1.3 1.3 0 0 1 7 1.8zm10 0a1.3 1.3 0 0 1 1.3 1.3v2.6a1.3 1.3 0 0 1-2.6 0V3.1A1.3 1.3 0 0 1 17 1.8z"
                />
                <g fill="#ffffff">
                  <rect x="6" y="10.4" width="3" height="2.8" rx=".8" />
                  <rect x="10.5" y="10.4" width="3" height="2.8" rx=".8" />
                  <rect x="15" y="10.4" width="3" height="2.8" rx=".8" />
                  <rect x="6" y="15" width="3" height="2.8" rx=".8" />
                  <rect x="10.5" y="15" width="3" height="2.8" rx=".8" />
                </g>
                <rect x="15" y="15" width="3" height="2.8" rx=".8" fill={primaryLight} />
              </svg>
            </span>
            <span
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: '44px',
                color: primary,
                lineHeight: 1,
              }}
            >
              2
            </span>
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
            Te damos un horario
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
            Te confirmamos el día y la hora disponible que mejor te acomode dentro del horario del
            consultorio.
          </p>
        </div>

        {/* Step 3 */}
        <div id="step-card-3" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              width: '100%',
              height: isMobile ? '220px' : '280px',
              borderRadius: '20px',
              overflow: 'hidden',
              background: primarySoft,
              marginBottom: '4px',
            }}
          >
            <img
              src="https://res.cloudinary.com/darqvjyxa/image/upload/v1787355049/3_oi6mww.avif"
              alt="Valoración dental en el consultorio"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: primarySoft,
                flexShrink: 0,
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24">
                <path
                  fill={primaryDark}
                  d="M12 2.2c2.6 0 4.4-1 6.3-.3 2.2.8 3.1 3.1 2.6 6.3-.5 3-1.3 5.6-2.2 8.4-.6 1.9-1.1 4-2.6 4-1.6 0-1.9-3.2-2.4-5.4-.3-1.2-.6-2.1-1.7-2.1s-1.4.9-1.7 2.1c-.5 2.2-.8 5.4-2.4 5.4-1.5 0-2-2.1-2.6-4C4.4 13.8 3.6 11.2 3.1 8.2 2.6 5 3.5 2.7 5.7 1.9 7.6 1.2 9.4 2.2 12 2.2z"
                />
                <path
                  fill={primary}
                  d="M14.4 4.6c1.2-.6 2.6-.7 3.9-.2 1 .4 1.5 1.4 1.6 2.7-1.6-1.4-3.4-2.1-5.5-2.5z"
                />
              </svg>
            </span>
            <span
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: '44px',
                color: primary,
                lineHeight: 1,
              }}
            >
              3
            </span>
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
            Vienes a tu valoración
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
            La doctora revisa tu caso, toma radiografía si hace falta y te explica el diagnóstico y
            el plan de tratamiento antes de empezar.
          </p>
        </div>
      </div>

      <a
        id="agendar-wa-cta"
        href={WA_LINKS.agendar}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:bg-[#0A6577] hover:shadow-xl transition-all"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: primary,
          color: '#ffffff',
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 700,
          fontSize: '17px',
          padding: '17px 36px',
          borderRadius: '999px',
          textDecoration: 'none',
          boxShadow: '0 12px 26px rgba(10,101,119,0.25)',
        }}
      >
        Empezar por WhatsApp
      </a>
    </section>
  );
};
