import React from 'react';
import { SOCIAL_LINKS, WA_LINKS } from '../data/landingData';

interface FooterProps {
  isMobile: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isMobile }) => {
  return (
    <footer
      id="main-footer"
      style={{
        background: 'linear-gradient(180deg, #0A6577 0%, #074F5C 55%, #053B45 100%)',
        padding: isMobile ? '48px 20px 28px' : '64px 0 36px',
      }}
    >
      <div
        style={{
          width: isMobile ? '100%' : 'min(1500px, calc(100% - 80px))',
          maxWidth: '1500px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '28px' : '48px',
          paddingBottom: '32px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        {/* Col 1: Brand & Credential */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0 }}
            >
              <path d="M4.6 6.1C5.9 3.8 8.6 3.4 12 5.2c3.4-1.8 6.1-1.4 7.4.9 1.4 2.4.9 6-.1 9.4-.8 2.7-1.5 5.4-2.9 5.4-1.4 0-1.8-2.9-2.4-4.9-.4-1.4-.8-2.3-2-2.3s-1.6.9-2 2.3c-.6 2-1 4.9-2.4 4.9-1.4 0-2.1-2.7-2.9-5.4-1-3.4-1.5-7-.1-9.4z" />
              <path d="M7.2 7.6c1.3 1.6 3 2.2 4.8 2.2 1.8 0 3.5-.6 4.8-2.2" />
            </svg>
            <span
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 700,
                fontSize: '20px',
                color: '#ffffff',
              }}
            >
              Dra. Amparo Peña
            </span>
          </div>
          <span
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 700,
              fontSize: '16px',
              color: '#ffffff',
            }}
          >
            Dra. Amparo Peña Martín del Campo — Cirujano Dentista
          </span>
          <span
            style={{
              fontFamily: "'Manrope', sans-serif",
              color: 'rgba(255,255,255,0.7)',
              fontSize: '14.5px',
              lineHeight: 1.6,
              fontWeight: 500,
            }}
          >
            Cédula profesional 1986231 · Universidad Autónoma de Guadalajara
          </span>
        </div>

        {/* Col 2: Address & Direct Contact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a
            id="footer-link-address"
            href="https://maps.app.goo.gl/ADN9AGMe4TfMSZMc9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            style={{
              fontFamily: "'Manrope', sans-serif",
              color: 'rgba(255,255,255,0.7)',
              fontSize: '14.5px',
              lineHeight: 1.6,
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Av. de las Rosas 430, Col. Chapalita Oriente, Zapopan, Jalisco, C.P. 45040
          </a>
          <a
            id="footer-link-tel1"
            href="tel:+523331222941"
            className="hover:text-white transition-colors"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: "'Manrope', sans-serif",
              color: 'rgba(255,255,255,0.75)',
              fontSize: '14.5px',
              lineHeight: 1.6,
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0 }}
            >
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" />
            </svg>
            33 3122 2941
          </a>
          <a
            id="footer-link-tel2"
            href="tel:+523333800333"
            className="hover:text-white transition-colors"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: "'Manrope', sans-serif",
              color: 'rgba(255,255,255,0.75)',
              fontSize: '14.5px',
              lineHeight: 1.6,
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0 }}
            >
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" />
            </svg>
            33 3380 0333
          </a>
          <a
            id="footer-link-wa"
            href={WA_LINKS.float}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: "'Manrope', sans-serif",
              color: 'rgba(255,255,255,0.75)',
              fontSize: '14.5px',
              lineHeight: 1.6,
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm4.5 12.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.2-.4.2-.3.6-1.1.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.3s1 2.6 1.1 2.8c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1z" />
            </svg>
            33 3189 9008 (WhatsApp)
          </a>
          <a
            id="footer-link-mail"
            href="mailto:dra_amparopena@hotmail.com"
            className="hover:text-white transition-colors"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: "'Manrope', sans-serif",
              color: 'rgba(255,255,255,0.75)',
              fontSize: '14.5px',
              lineHeight: 1.6,
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0 }}
            >
              <rect x="2.5" y="4.5" width="19" height="15" rx="2.6" />
              <path d="M3 6.5l9 6.3 9-6.3" />
            </svg>
            dra_amparopena@hotmail.com
          </a>
        </div>

        {/* Col 3: Hours & Socials */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span
            style={{
              fontFamily: "'Manrope', sans-serif",
              color: 'rgba(255,255,255,0.7)',
              fontSize: '14.5px',
              lineHeight: 1.6,
              fontWeight: 500,
            }}
          >
            Lunes a Viernes 10:00–20:00 · Sábado 10:00–14:00 · Domingo cerrado
          </span>
          <div style={{ display: 'flex', gap: '14px', marginTop: '8px' }}>
            {/* Facebook Color Icon */}
            <a
              id="footer-social-fb"
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Dra. Amparo Peña"
              className="hover:scale-110 active:scale-95 transition-transform"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '999px',
                background: '#1877F2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(24, 119, 242, 0.35)',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram Color Icon */}
            <a
              id="footer-social-ig"
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Dra. Amparo Peña"
              className="hover:scale-110 active:scale-95 transition-transform"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '999px',
                background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(214, 36, 159, 0.35)',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          width: isMobile ? '100%' : 'min(1500px, calc(100% - 80px))',
          maxWidth: '1500px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          gap: '10px',
          paddingTop: '24px',
          fontFamily: "'Manrope', sans-serif",
          color: 'rgba(255,255,255,0.5)',
          fontSize: '13.5px',
          fontWeight: 500,
        }}
      >
        <span>Aviso de privacidad · © 2026 Dra. Amparo Peña Martín del Campo</span>
        <span>Sitio desarrollado por Ranshi Marketing</span>
      </div>
    </footer>
  );
};
