import React from 'react';
import { WA_LINKS } from '../data/landingData';

interface HeaderProps {
  isMobile: boolean;
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isMobile, scrolled }) => {
  const logoIconSize = isMobile ? 28 : 32;

  return (
    <header
      id="main-header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: isMobile ? '14px 20px' : '20px 40px',
        background: scrolled ? 'rgba(7,79,92,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        transition: 'background 0.35s ease, backdrop-filter 0.35s ease',
      }}
    >
      <div
        style={{
          width: isMobile ? '100%' : 'min(1500px, calc(100% - 80px))',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
      <a
        id="header-logo-link"
        href="#inicio"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          textDecoration: 'none',
        }}
      >
        <svg
          width={logoIconSize}
          height={logoIconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4.6 6.1C5.9 3.8 8.6 3.4 12 5.2c3.4-1.8 6.1-1.4 7.4.9 1.4 2.4.9 6-.1 9.4-.8 2.7-1.5 5.4-2.9 5.4-1.4 0-1.8-2.9-2.4-4.9-.4-1.4-.8-2.3-2-2.3s-1.6.9-2 2.3c-.6 2-1 4.9-2.4 4.9-1.4 0-2.1-2.7-2.9-5.4-1-3.4-1.5-7-.1-9.4z" />
          <path d="M7.2 7.6c1.3 1.6 3 2.2 4.8 2.2 1.8 0 3.5-.6 4.8-2.2" />
        </svg>
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <span
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 700,
              fontSize: isMobile ? '19px' : '21px',
              color: '#ffffff',
            }}
          >
            Dra. Amparo Peña
          </span>
          {!isMobile && (
            <span
              style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.78)',
                fontWeight: 500,
                marginTop: '1px',
              }}
            >
              Odontología Integral
            </span>
          )}
        </span>
      </a>

      {!isMobile && (
        <nav
          id="header-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          <a
            id="nav-link-servicios"
            href="#servicios"
            className="hover:text-white transition-colors"
            style={{
              color: 'rgba(255,255,255,0.92)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '16px',
            }}
          >
            Servicios
          </a>
          <a
            id="nav-link-instalaciones"
            href="#instalaciones"
            className="hover:text-white transition-colors"
            style={{
              color: 'rgba(255,255,255,0.92)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '16px',
            }}
          >
            Instalaciones
          </a>
          <a
            id="nav-link-ubicacion"
            href="#ubicacion"
            className="hover:text-white transition-colors"
            style={{
              color: 'rgba(255,255,255,0.92)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '16px',
            }}
          >
            Ubicación
          </a>
        </nav>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {!isMobile && (
          <a
            id="header-phone-link"
            href="tel:+523331899008"
            className="hover:opacity-90 transition-opacity"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '9px',
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '15.5px',
            }}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1.1.4 2.2.7 3.2a2 2 0 0 1-.5 2.1L8 10.3a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .4 2.1.6 3.2.7a2 2 0 0 1 1.7 2z" />
            </svg>
            33 3189 9008
          </a>
        )}
        <a
          id="header-wa-cta"
          href={WA_LINKS.float}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#0A6577] transition-colors"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '9px',
            background: '#4194A4',
            color: '#ffffff',
            padding: isMobile ? '11px 18px' : '12px 24px',
            borderRadius: '999px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: isMobile ? '14px' : '15.5px',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
            <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.2-.4.2-.3.6-1.1.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.3s1 2.6 1.1 2.8c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.5-.3z" />
          </svg>
          WhatsApp
        </a>
      </div>
      </div>
    </header>
  );
};
