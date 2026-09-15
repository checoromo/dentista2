import React from 'react';

interface PaymentMethodsProps {
  isMobile: boolean;
}

export const PaymentMethods: React.FC<PaymentMethodsProps> = ({ isMobile }) => {
  const primary = '#4194A4';
  const primaryDark = '#0A6577';
  const primarySoft = '#EFF8F9';
  const textPrimary = '#232827';
  const textSecondary = '#6F7477';
  const border = '#DDE0E1';

  const methods = [
    {
      id: 'pay-cards',
      title: 'Tarjetas de crédito y débito',
      desc: 'Cobro seguro con terminal para tarjetas Visa y Mastercard sin complicaciones.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
    },
    {
      id: 'pay-transfer',
      title: 'Transferencia bancaria',
      desc: 'Transferencias vía SPEI desde cualquier banca móvil con confirmación inmediata.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="17 1 21 5 17 9" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <polyline points="7 23 3 19 7 15" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
      ),
    },
    {
      id: 'pay-cash',
      title: 'Pago en efectivo',
      desc: 'Puedes realizar tu pago en efectivo directamente en recepción al concluir tu cita.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="12" cy="12" r="2" />
          <path d="M6 12h.01M18 12h.01" />
        </svg>
      ),
    },
    {
      id: 'pay-deposit',
      title: 'Depósito bancario',
      desc: 'Opciones de depósito en practicajas o ventanilla bancaria según te resulte más cómodo.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M14 10v11M12 2L2 7h20L12 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="pagos"
      style={{
        padding: isMobile ? '56px 20px' : '72px 0',
        background: '#ffffff',
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
            Formas de pago
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
            Aceptamos las siguientes formas de pago:
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
            Opciones seguras y transparentes para que elijas la que mejor se adapte a ti.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, minmax(0, 1fr))',
            gap: '20px',
            width: '100%',
          }}
        >
          {methods.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                background: '#FCFCFE',
                border: `1px solid ${border}`,
                borderRadius: '20px',
                padding: isMobile ? '22px' : '26px',
                boxShadow: '0 4px 12px rgba(35,40,39,0.03)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: primarySoft,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: isMobile ? '18px' : '19.5px',
                  color: textPrimary,
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: textSecondary,
                  fontSize: isMobile ? '14.5px' : '15.5px',
                  lineHeight: 1.6,
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
