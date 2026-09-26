export function WheatFrame({ tone = "ink" }: { tone?: "ink" | "copper" }) {
  return (
    <div className={`wheat-frame wheat-frame-${tone}`} aria-hidden="true">
      <WheatSprig className="wheat-sprig wheat-tl" />
      <WheatSprig className="wheat-sprig wheat-tr" />
      <WheatSprig className="wheat-sprig wheat-bl" />
      <WheatSprig className="wheat-sprig wheat-br" />
    </div>
  );
}

export function WheatMark({ className }: { className?: string }) {
  return <WheatSprig className={className ?? "wheat-sprig"} />;
}

function WheatSprig({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="-4 0 164 92" fill="none">
      <g transform="translate(156 0) rotate(90)">
        <path d="M46 148 C45.2 118 46.6 78 46 22" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
        <line x1="46" y1="13" x2="46" y2="3.6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="38.6" y1="20.8" x2="33.5" y2="11.2" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="53.4" y1="25.8" x2="58.5" y2="16.2" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="35.5" y1="29.1" x2="28.3" y2="18.3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="56.5" y1="34.1" x2="63.7" y2="23.3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="33.8" y1="38.8" x2="25.4" y2="27.2" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="58.2" y1="43.8" x2="66.6" y2="32.2" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="32.7" y1="50.5" x2="23.4" y2="38.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="59.3" y1="55.5" x2="68.6" y2="43.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="32.7" y1="62.5" x2="23.4" y2="50.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="59.3" y1="67.5" x2="68.6" y2="55.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="34.4" y1="75.6" x2="26.4" y2="64.6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="57.6" y1="80.6" x2="65.6" y2="69.6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="36.6" y1="88.6" x2="30.1" y2="78.2" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="55.4" y1="93.6" x2="61.9" y2="83.2" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        <g fill="currentColor">
          <path d="M46 26.6C49.8 23.1 47.1 14 46 13 44.9 14 42.2 23.1 46 26.6Z" />
          <path d="M45.9 34.5C47.9 29 40.2 21.2 38.6 20.8 38 22.4 40.2 33.2 45.9 34.5Z" />
          <path d="M46.1 39.5C51.8 38.2 54 27.4 53.4 25.8 51.8 26.2 44.1 34 46.1 39.5Z" />
          <path d="M45.9 44.5C47.5 37.9 37.5 29.5 35.5 29.1 35.2 31.1 39.2 43.5 45.9 44.5Z" />
          <path d="M46.1 49.5C52.8 48.5 56.8 36.1 56.5 34.1 54.5 34.5 44.5 42.9 46.1 49.5Z" />
          <path d="M46 55.5C47.3 48.3 36 39.2 33.8 38.8 33.6 41 38.7 54.6 46 55.5Z" />
          <path d="M46 60.5C53.3 59.6 58.4 46 58.2 43.8 56 44.2 44.7 53.3 46 60.5Z" />
          <path d="M46 67.5C47 60 34.9 50.8 32.7 50.5 32.5 52.7 38.5 66.7 46 67.5Z" />
          <path d="M46 72.5C53.5 71.7 59.5 57.7 59.3 55.5 57.1 55.8 45 65 46 72.5Z" />
          <path d="M46 79.5C46.9 72.1 34.9 62.9 32.7 62.5 32.5 64.7 38.6 78.6 46 79.5Z" />
          <path d="M46 84.5C53.4 83.6 59.5 69.7 59.3 67.5 57.1 67.9 45.1 77.1 46 84.5Z" />
          <path d="M46 91.5C47.2 84.7 36.5 76 34.4 75.6 34.2 77.7 39.1 90.6 46 91.5Z" />
          <path d="M46 96.5C52.9 95.6 57.8 82.7 57.6 80.6 55.5 81 44.8 89.7 46 96.5Z" />
          <path d="M45.9 103.5C47.5 97.4 38.4 89.1 36.6 88.6 36.2 90.4 39.7 102.3 45.9 103.5Z" />
          <path d="M46.1 108.5C52.3 107.3 55.8 95.4 55.4 93.6 53.6 94.1 44.5 102.4 46.1 108.5Z" />
        </g>
      </g>
    </svg>
  );
}
