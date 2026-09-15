import React, { useState } from 'react';
import { FAQS } from '../data/landingData';

interface FAQProps {
  isMobile: boolean;
}

export const FAQ: React.FC<FAQProps> = ({ isMobile }) => {
  const primary = '#4194A4';
  const primaryDark = '#0A6577';
  const primarySoft = '#EFF8F9';
  const textPrimary = '#232827';
  const textSecondary = '#6F7477';
  const border = '#DDE0E1';

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      style={{
        padding: isMobile ? '56px 20px' : '72px 0',
        background: '#ffffff',
      }}
    >
      <div
        style={{
          width: isMobile ? '100%' : 'min(1180px, calc(100% - 80px))',
          maxWidth: '1180px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            maxWidth: '840px',
            margin: `0 auto ${isMobile ? '32px' : '48px'}`,
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
            Preguntas frecuentes
          </span>
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase',
              color: textPrimary,
              fontSize: isMobile ? '2.1rem' : 'clamp(40px, 3.5vw, 50px)',
              lineHeight: 1.05,
              margin: 0,
              textWrap: 'pretty',
            }}
          >
            Preguntas que nos hacen antes de agendar
          </h2>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            borderTop: `1px solid ${border}`,
          }}
        >
          {FAQS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={faq.q}
                id={`faq-item-${i}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderBottom: `1px solid ${border}`,
                  padding: isMobile ? '20px 0' : '24px 8px',
                }}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  aria-expanded={isOpen}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: isMobile ? '17px' : '20px',
                    lineHeight: 1.35,
                    color: textPrimary,
                    padding: 0,
                    width: '100%',
                  }}
                >
                  <span>{faq.q}</span>
                  <span
                    style={{
                      fontSize: '28px',
                      fontWeight: 300,
                      color: primary,
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <p
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      color: textSecondary,
                      fontSize: isMobile ? '15.5px' : '17px',
                      lineHeight: 1.7,
                      margin: '16px 0 4px',
                      fontWeight: 500,
                      maxWidth: '960px',
                    }}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
