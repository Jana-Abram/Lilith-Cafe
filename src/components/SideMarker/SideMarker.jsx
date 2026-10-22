import './SideMarker.css';

function SideMarker({ label = [], reversed = false }) {
  const className = reversed ? 'side-marker side-marker--reversed' : 'side-marker';

  return (
    <div className={className} aria-hidden="true">
      <span className="side-marker__line" />
      <SparkIcon />

      {label.length > 0 && (
        <div className="side-marker__label">
          {label.map((phrase) => (
            <p key={phrase} className="side-marker__phrase">
              {phrase.split(' ').map((word) => (
                <span key={word}>{word}</span>
              ))}
            </p>
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