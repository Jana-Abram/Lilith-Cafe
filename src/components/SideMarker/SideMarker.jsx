import './SideMarker.css';

function SideMarker({ label }) {
  return (
    <div className="side-marker" aria-hidden="true">
      <span className="side-marker__line" />
      <SparkIcon />
      {label?.length > 0 && (
        <div className="side-marker__label">
          {label.map((word, index) => (
            <span key={index}>{word}</span>
          ))}
        </div>
      )}
    </div>
  );
}

function SparkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M6.5 0V13M0 6.5H13" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export default SideMarker;