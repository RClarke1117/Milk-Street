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

function WheatSprig({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 36 64" fill="currentColor">
      <path d="M16.9 14.5h2.2V58h-2.2z" />
      <path d="M18 3.2c2.4 2.2 3.1 5.4 1.2 7.6-1.5-2.4-1.4-5.2-1.2-7.6z" />
      <path d="M17.2 18.5c-7.2-.2-12.4 2.2-13.2 5.1 3.2-1.2 8-1.6 13.2-1.2v-3.9z" />
      <path d="M18.8 24.2c7.2-.1 12.6 2.4 13.2 5.3-3.3-1.3-8.2-1.6-13.2-1.1v-4.2z" />
      <path d="M17.2 30.2c-7.6.1-13 2.8-13.6 5.8 3.4-1.2 8.4-1.5 13.6-1v-4.8z" />
      <path d="M18.8 36c7.6.2 13.2 3 13.6 6-3.5-1.2-8.6-1.4-13.6-.8V36z" />
      <path d="M17.4 42.2c-6.8.3-11.6 3-12 5.6 3-1 7.4-1.2 12-.6v-5z" />
      <path d="M18.6 47.6c6.6.4 11.2 3 11.5 5.5-2.9-.9-7-1-11.5-.4v-5.1z" />
    </svg>
  );
}
