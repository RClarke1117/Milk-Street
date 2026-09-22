import { hours } from "@/lib/site";

export function Hours({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "hours is-compact" : "hours"}>
      {hours.map((row) => (
        <article key={row.days} className="hours-row">
          <h3>{row.days}</h3>
          <p className="hours-room">{row.room}</p>
          <p>{row.note}</p>
        </article>
      ))}
    </div>
  );
}
