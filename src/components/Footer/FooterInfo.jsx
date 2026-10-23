function FooterInfo({ icon, title, lines }) {
  return (
    <div className="footer-info">
      <div className="footer-info__head">
        {icon}
        <h3 className="footer-info__title">{title}</h3>
      </div>

      <p className="footer-info__text">
        {lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>
    </div>
  );
}

export default FooterInfo;