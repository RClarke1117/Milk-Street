import { hours, hoursNote } from "@/lib/site";

export function Hours({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "hours is-compact" : "hours"}>
      {hours.map((row) => (
        <article key={row.days} className="hours-row">
          <h3>{row.days}</h3>
          <p className="hours-room">{row.room}</p>
        </article>
      ))}
      <p className="hours-note">{hoursNote}</p>
    </div>
  );
}
