"use client";

import { useEffect, useId, useRef, useState } from "react";
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
  const closeTimer = useRef(0);
  const titleId = useId();
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog || !shot || dialog.open) return;
    setClosing(false);
    dialog.showModal();
  }, [shot]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  function requestClose() {
    const dialog = ref.current;
    if (!dialog?.open || closing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dialog.close();
      return;
    }
    setClosing(true);
    closeTimer.current = window.setTimeout(() => {
      dialog.close();
      setClosing(false);
    }, 280);
  }

  const photoKey = shot?.src ?? shot?.title;

  return (
    <dialog
      ref={ref}
      className={`modal${closing ? " is-closing" : ""}`}
      aria-labelledby={titleId}
      onClose={onClose}
      onCancel={(event) => {
        event.preventDefault();
        requestClose();
      }}
      onClick={(event) => {
        if (event.target === ref.current) requestClose();
      }}
    >
      {shot ? (
        <div className="modal-card">
          <figure className="modal-photo" key={photoKey}>
            {shot.src ? (
              <img src={shot.src} alt={shot.alt} />
            ) : shot.slot ? (
              <DrinkSlot name={shot.slot.name} category={shot.slot.category} size="frame" />
            ) : null}
          </figure>
          <div className="modal-copy" key={`copy-${photoKey}`}>
            <button type="button" className="modal-close" onClick={requestClose}>
              Close
            </button>
            {shot.kicker ? <p className="kicker">{shot.kicker}</p> : null}
            <h2 id={titleId}>{shot.title}</h2>
            {shot.price ? <p className="modal-price">{shot.price}</p> : null}
            {shot.body ? <p>{shot.body}</p> : null}
            {shot.credit ? <p className="modal-credit">{shot.credit}</p> : null}
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
