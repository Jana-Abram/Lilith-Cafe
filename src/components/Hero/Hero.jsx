import heroBackground from '../../assets/images/hero-background.jpg';
import './Hero.css';

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow">
          Coffee <span aria-hidden="true">×</span> Desserts <span aria-hidden="true">×</span> Quiet talks
        </p>

        <h1 className="hero__title">
          A little darker
          <br />
          than usual
        </h1>

        <p className="hero__text">
          Lilith is a cozy café where time slows down. Come for the coffee,
          stay for the atmosphere.
        </p>

        <a href="#menu" className="hero__cta">
          <span>View menu</span>
          <ArrowIcon />
        </a>
      </div>

      <div className="hero__marker" aria-hidden="true">
        <span className="hero__marker-line" />
        <SparkIcon />
      </div>
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

function SparkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M6.5 0V13M0 6.5H13" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export default Hero;