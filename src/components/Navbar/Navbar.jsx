import './Navbar.css';

const NAV_LINKS = ['Home', 'Menu', 'About'];

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__links" aria-label="Основная навигация">
        <ul>
          {NAV_LINKS.map((link, index) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={index === 0 ? 'is-active' : undefined}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a href="/" className="navbar__logo" aria-label="Lilith Café — на главную">
        <BowIcon className="navbar__bow" />
        <span className="navbar__logo-name">Lilith</span>
        <span className="navbar__logo-sub">Café</span>
      </a>

      <div className="navbar__actions">
        <button type="button" className="navbar__cart" aria-label="Корзина">
          <BagIcon />
        </button>
        <a href="#reservation" className="navbar__reservation">
          Reservation
        </a>
      </div>
    </header>
  );
}

function BowIcon({ className }) {
  return (
    <svg className={className} width="30" height="18" viewBox="0 0 30 18" fill="none" aria-hidden="true">
      <path d="M15 9C15 9 10.5 2.5 5 2.5C1.8 2.5 0.7 5.3 2.4 7.4C4.2 9.6 9.8 9 15 9Z" stroke="currentColor" strokeWidth="1" />
      <path d="M15 9C15 9 19.5 2.5 25 2.5C28.2 2.5 29.3 5.3 27.6 7.4C25.8 9.6 20.2 9 15 9Z" stroke="currentColor" strokeWidth="1" />
      <circle cx="15" cy="9" r="1.5" fill="currentColor" />
      <path d="M15 10.2L13.8 17M15 10.2L16.2 17" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4.5 6H13.5L13 16H5L4.5 6Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      <path d="M6.5 6V5C6.5 3.6 7.6 2.5 9 2.5C10.4 2.5 11.5 3.6 11.5 5V6" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export default Navbar;