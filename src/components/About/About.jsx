import SideMarker from '../SideMarker/SideMarker.jsx';
import aboutLilith from '../../assets/images/about_lilith.jpg';
import aboutCafe from '../../assets/images/about_cafe.jpg';
import './About.css';

function About() {
  return (
    <section className="about" id="about">

      <div className="about__photo about__photo--left">
        <img src={aboutCafe} alt="Букет лилий, книги и чашка кофе на столе Lilith Café" />
      </div>

      <div className="about__content">
        <p className="about__eyebrow">About</p>

        <h2 className="about__title">
          A café for <em>dreamers</em> and <em>wanderers</em>
        </h2>

        <p className="about__text">
          Lilith Café is a small, intimate space inspired by vintage
          aesthetics and quiet nights. We serve carefully selected coffee,
          desserts and create an atmosphere where you can be yourself.
        </p>

        <div className="about__divider">
          <span className="about__divider-line" />
          <BowIcon />
          <span className="about__divider-line" />
        </div>

        <a href="#story" className="about__link">
          <span>Our story</span>
          <ArrowIcon />
        </a>
      </div>

      <div className="about__photo about__photo--right">
        <img src={aboutLilith} alt="Окно кафе со свечами и лилиями в вазе" />

      </div>
    </section>
  );
}

function BowIcon() {
  return (
    <svg width="22" height="13" viewBox="0 0 22 13" fill="none" aria-hidden="true">
      <path
        d="M11 6.5C11 6.5 7.8 1.8 3.8 1.8C1.4 1.8 0.5 3.8 1.8 5.3C3.1 6.9 7.5 6.5 11 6.5Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M11 6.5C11 6.5 14.2 1.8 18.2 1.8C20.6 1.8 21.5 3.8 20.2 5.3C18.9 6.9 14.5 6.5 11 6.5Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="11" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
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

export default About;