export function DrinkSlot({
  name,
  category,
  size = "frame",
}: {
  name: string;
  category?: string;
  size?: "thumb" | "frame";
}) {
  return (
    <div className={`drink-slot drink-slot-${size}`} role="img" aria-label={`Drink image here, ${name}`}>
      <svg className="drink-slot-glass" viewBox="0 0 64 88" aria-hidden="true">
        <path
          d="M14 8h36l-4 34a18 18 0 0 1-28 0L14 8z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M22 42h20" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
        <path d="M32 52v22" stroke="currentColor" strokeWidth="1.6" />
        <path d="M22 76h20" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <span className="drink-slot-label">Drink image here</span>
      {size === "frame" ? (
        <>
          <span className="drink-slot-name">{name}</span>
          {category ? <span className="drink-slot-cat">{category}</span> : null}
        </>
      ) : null}
    </div>
  );
}
