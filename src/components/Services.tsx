import React, { useEffect, useRef, useState } from 'react';
import { SERVICES, WA_LINKS } from '../data/landingData';

interface ServicesProps {
  isMobile: boolean;
}

export const Services: React.FC<ServicesProps> = ({ isMobile }) => {
  const primary = '#4194A4';
  const primaryDark = '#0A6577';
  const textPrimary = '#232827';
  const textSecondary = '#6F7477';
  const border = '#DDE0E1';
  const softBg = '#EFF8F9';
  const [visibleCards, setVisibleCards] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Reveal cards when in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-reveal');
            if (id) {
              setVisibleCards((prev) => ({ ...prev, [id]: true }));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const el = sectionRef.current;
    if (el) {
      el.querySelectorAll('[data-reveal]').forEach((card) => observer.observe(card));
    }

    // Safety fallback: reveal all after short timeout so content is always accessible
    const timer = setTimeout(() => {
      const all: Record<string, boolean> = {};
      SERVICES.forEach((s) => {
        all[s.id] = true;
      });
      setVisibleCards(all);
    }, 400);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      style={{
        padding: isMobile ? '56px 20px' : '72px 0',
        background: '#ffffff',
        width: isMobile ? '100%' : 'min(1500px, calc(100% - 80px))',
        maxWidth: '1500px',
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div
        id="servicios-header"
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          gap: isMobile ? '20px' : '48px',
          alignItems: isMobile ? 'flex-start' : 'flex-end',
          marginBottom: isMobile ? '36px' : '48px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            maxWidth: isMobile ? '100%' : '820px',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              alignSelf: 'flex-start',
              border: `1px solid ${border}`,
              background: softBg,
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
            Servicios
          </span>
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              textTransform: 'uppercase',
              color: textPrimary,
              fontSize: isMobile ? '2.1rem' : 'clamp(38px, 3.2vw, 50px)',
              lineHeight: 1.05,
              margin: 0,
              textWrap: 'pretty',
            }}
          >
            EFICIENCIA Y CONSCIENCIA EN EL CUIDADO DE TU SALUD BUCAL
          </h2>
        </div>

        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            color: textSecondary,
            fontSize: isMobile ? '16px' : '18px',
            lineHeight: 1.6,
            maxWidth: isMobile ? '100%' : '540px',
            margin: 0,
            fontWeight: 500,
          }}
        >
          Atención de Odontología Integral tanto para Niños como para Adultos con los siguientes servicios:
        </p>
      </div>

      {/* Services Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile
            ? '1fr'
            : 'repeat(3, minmax(0, 1fr))',
          gap: isMobile ? '20px' : '26px',
        }}
      >
        {SERVICES.map((item, idx) => {
          const isVisible = !!visibleCards[item.id];
          const delay = (idx % 3) * 0.08;

          return (
            <div
              key={item.id}
              id={`service-card-${item.id}`}
              data-reveal={item.id}
              className="hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#ffffff',
                border: `1px solid ${border}`,
                boxShadow: '0 4px 14px rgba(35,40,39,0.05)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s, box-shadow 0.3s ease`,
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: isMobile ? '220px' : '260px',
                  overflow: 'hidden',
                  background: '#f1f3f5',
                }}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="group-hover:scale-105 transition-transform duration-500"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '999px',
                    background: 'rgba(255,255,255,0.95)',
                    boxShadow: '0 2px 8px rgba(10,101,119,0.14)',
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={primaryDark}
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.6 6.1C5.9 3.8 8.6 3.4 12 5.2c3.4-1.8 6.1-1.4 7.4.9 1.4 2.4.9 6-.1 9.4-.8 2.7-1.5 5.4-2.9 5.4-1.4 0-1.8-2.9-2.4-4.9-.4-1.4-.8-2.3-2-2.3s-1.6.9-2 2.3c-.6 2-1 4.9-2.4 4.9-1.4 0-2.1-2.7-2.9-5.4-1-3.4-1.5-7-.1-9.4z" />
                    <path d="M7.2 7.6c1.3 1.6 3 2.2 4.8 2.2 1.8 0 3.5-.6 4.8-2.2" />
                  </svg>
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  padding: isMobile ? '20px' : '24px 26px 28px',
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: isMobile ? '19px' : '22px',
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
                    fontSize: isMobile ? '15px' : '16px',
                    lineHeight: 1.6,
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Banner */}
      <div
        id="services-cta-banner"
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          gap: isMobile ? '20px' : '36px',
          background: `linear-gradient(120deg, ${primaryDark} 0%, #074F5C 100%)`,
          borderRadius: '22px',
          padding: isMobile ? '28px 24px' : '38px 48px',
          marginTop: isMobile ? '48px' : '56px',
        }}
      >
        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            color: '#ffffff',
            fontSize: isMobile ? '17px' : '20px',
            fontWeight: 600,
            lineHeight: 1.5,
            margin: 0,
            maxWidth: '560px',
          }}
        >
          ¿No sabes cuál necesitas? Mándame una foto o cuéntame qué sientes.
        </p>
        <a
          id="services-wa-cta"
          href={WA_LINKS.services}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#074F5C] hover:shadow-lg transition-all"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: primary,
            color: '#ffffff',
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: '16px',
            padding: isMobile ? '14px 24px' : '16px 30px',
            borderRadius: '999px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff" style={{ flexShrink: 0 }}>
            <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.2-.4.2-.3.6-1.1.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.3s1 2.6 1.1 2.8c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.5-.3z" />
          </svg>
          Preguntar por WhatsApp
        </a>
      </div>
    </section>
  );
};
