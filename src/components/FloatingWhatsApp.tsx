import React, { useEffect, useState } from 'react';
import { WA_LINKS } from '../data/landingData';

interface FloatingWhatsAppProps {
  isMobile: boolean;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ isMobile }) => {
  const [waLabelVisible, setWaLabelVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWaLabelVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      id="floating-wa-btn"
      href={WA_LINKS.float}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="hover:scale-105 active:scale-95 transition-transform"
      style={{
        position: 'fixed',
        bottom: isMobile ? '18px' : '28px',
        right: isMobile ? '18px' : '28px',
        zIndex: 60,
        display: 'flex',
        alignItems: 'center',
        gap: '11px',
        background: '#25D366',
        color: '#ffffff',
        borderRadius: '999px',
        padding: waLabelVisible ? '15px 24px 15px 16px' : '16px',
        boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
        textDecoration: 'none',
        transition: 'padding 0.5s ease',
      }}
    >
      {/* Pulsing Ring */}
      <span
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '999px',
          background: '#25D366',
          animation: 'pulseRing 2.6s ease-out infinite',
          zIndex: -1,
        }}
      />

      <svg width="32" height="32" viewBox="0 0 24 24" fill="#ffffff" style={{ flexShrink: 0 }}>
        <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.2-.4.2-.3.6-1.1.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.3s1 2.6 1.1 2.8c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.5-.3z" />
      </svg>

      {waLabelVisible && (
        <span
          style={{
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '15.5px',
            whiteSpace: 'nowrap',
            fontFamily: "'Manrope', sans-serif",
          }}
        >
          Agenda tu cita
        </span>
      )}
    </a>
  );
};
