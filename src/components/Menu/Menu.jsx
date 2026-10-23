import MenuCard from './MenuCard.jsx';
import { MENU_ITEMS } from './menuItems.js';
import './Menu.css';

function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="menu__header">
        <div className="menu__intro">
          <p className="menu__eyebrow">Our menu</p>
          <h2 className="menu__title">Signature Drinks</h2>
          <p className="menu__subtitle">
            Specially crafted drinks for your perfect moment.
          </p>
        </div>

        <a href="#full-menu" className="menu__link">
          <span>View full menu</span>
          <ArrowIcon />
        </a>
      </div>

      <ul className="menu__grid">
        {MENU_ITEMS.map((item) => (
          <MenuCard key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
      <path d="M9.5 1L15 6L9.5 11" stroke="currentColor" strokeWidth="1" />
      <path d="M15 6H0" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export default Menu;