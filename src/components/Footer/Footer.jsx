import FooterInfo from './FooterInfo.jsx';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <BowIcon />
          <p className="footer__name">Lilith Café</p>
          <p className="footer__tagline">Coffee. Desserts. A little bit of magic.</p>
        </div>

        <FooterInfo
          icon={<PinIcon />}
          title="Our location"
          lines={['123 Moonlight Street', 'Kyiv, Ukraine']}
        />

        <FooterInfo
          icon={<ClockIcon />}
          title="Opening hours"
          lines={['Mon – Sun', '09:00 AM – 11:00 PM']}
        />

        <div className="footer__socials">
          <a href="#" className="footer__social" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="#" className="footer__social" aria-label="TikTok">
            <TikTokIcon />
          </a>
        </div>
      </div>

      <div className="footer__decor" aria-hidden="true">
        <SparkIcon />
        {/* TODO: заменить на реальное фото/PNG тёмной лилии (очень приглушённое) */}
        <div className="footer__flower" />
      </div>
    </footer>
  );
}

function BowIcon() {
  return (
    <svg width="34" height="20" viewBox="0 0 30 18" fill="none" aria-hidden="true" className="footer__bow">
      <path d="M15 9C15 9 10.5 2.5 5 2.5C1.8 2.5 0.7 5.3 2.4 7.4C4.2 9.6 9.8 9 15 9Z" stroke="currentColor" strokeWidth="1" />
      <path d="M15 9C15 9 19.5 2.5 25 2.5C28.2 2.5 29.3 5.3 27.6 7.4C25.8 9.6 20.2 9 15 9Z" stroke="currentColor" strokeWidth="1" />
      <circle cx="15" cy="9" r="1.5" fill="currentColor" />
      <path d="M15 10.2L13.8 17M15 10.2L16.2 17" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 14.5C8 14.5 12.5 10.2 12.5 6.5C12.5 4 10.5 2 8 2C5.5 2 3.5 4 3.5 6.5C3.5 10.2 8 14.5 8 14.5Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="8" cy="6.5" r="1.6" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1" />
      <path d="M8 4.5V8L10.5 9.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="10" r="3.6" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="14.6" cy="5.4" r="0.9" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
      <path d="M7 0C7.4 4.6 9.4 6.6 14 7C9.4 7.4 7.4 9.4 7 14C6.6 9.4 4.6 7.4 0 7C4.6 6.6 6.6 4.6 7 0Z" />
    </svg>
  );
}

export default Footer;