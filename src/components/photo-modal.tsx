"use client";

import { useEffect, useId, useRef } from "react";
import { DrinkSlot } from "@/components/drink-slot";

export type Shot = {
  src?: string;
  alt: string;
  title: string;
  kicker?: string;
  body?: string;
  price?: string;
  credit?: string;
  href?: string;
  hrefLabel?: string;
  secondarySrc?: string;
  secondaryAlt?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  hint?: string;
  slot?: { name: string; category?: string };
};

export function PhotoModal({
  shot,
  onClose,
}: {
  shot: Shot | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog || !shot || dialog.open) return;
    dialog.showModal();
  }, [shot]);

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) {
          ref.current?.close();
        }
      }}
    >
      {shot ? (
        <div className="modal-card">
          <figure className="modal-photo">
            {shot.src ? (
              <img src={shot.src} alt={shot.alt} />
            ) : shot.slot ? (
              <DrinkSlot name={shot.slot.name} category={shot.slot.category} size="frame" />
            ) : null}
          </figure>
          <div className="modal-copy">
            <button
              type="button"
              className="modal-close"
              onClick={() => ref.current?.close()}
            >
              Close
            </button>
            {shot.kicker ? <p className="kicker">{shot.kicker}</p> : null}
            <h2 id={titleId}>{shot.title}</h2>
            {shot.price ? <p className="modal-price">{shot.price}</p> : null}
            {shot.body ? <p>{shot.body}</p> : null}
            {shot.credit ? <p className="modal-credit">{shot.credit}</p> : null}
            {shot.hint ? <p className="modal-credit">{shot.hint}</p> : null}
            {shot.href ? (
              <a className="text-link" href={shot.href}>
                {shot.hrefLabel ?? "View"}
              </a>
            ) : null}
            {shot.secondarySrc ? (
              <figure className="modal-secondary">
                <img src={shot.secondarySrc} alt={shot.secondaryAlt ?? ""} />
                {shot.secondaryHref ? (
                  <figcaption>
                    <a href={shot.secondaryHref} target="_blank" rel="noreferrer">
                      {shot.secondaryLabel ?? "On Instagram"}
                    </a>
                  </figcaption>
                ) : (
                  <figcaption>{shot.secondaryLabel}</figcaption>
                )}
              </figure>
            ) : null}
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
