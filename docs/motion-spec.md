# Motion specification

Milk Street’s motion should feel like a heavy object moving a short distance: copper, wood, and type. It should not feel like a marketing template. Every behavior below has a reduced-motion path.

## Principles

1. Movement explains the make or the interface. It does not decorate a blank section.
2. Durations sit between 450ms and 900ms. Ease is `cubic-bezier(0.22, 1, 0.36, 1)`.
3. Nothing loops except the spirit marquee, and that loop is paused for `prefers-reduced-motion`.
4. Focus rings stay visible. Motion never moves a control out from under the pointer without a hover that is optional.

## 1. Age gate

On first view in a session, a full-viewport gate asks if the visitor is 21. It does not animate in. Confirming age writes `msd-age` to `sessionStorage` and reveals the site. “No” shows a single sentence and does not enter.

Reduced motion: same gate, no extra transition.

## 2. Loader

Once per session, after the age gate, a 1.7s title sequence: “Milk Street” rises letter by letter, a copper rule draws, “Grain to glass” sits underneath, then the overlay leaves. Flag: `msd-boot`.

Reduced motion: the loader is skipped entirely.

## 3. Page transition

`src/app/template.tsx` fades and lifts the new page 16px over 550ms. The header and footer stay still so the building doesn’t reload, only the room.

Reduced motion: the template renders children with no animation (`useReducedMotion`).

## 4. Scroll reveal

Section figures and process cards fade up 28px as they enter, once. Implemented with Framer Motion `whileInView`.

Reduced motion: the wrapper renders static markup.

## 5. Hero

The still is a full-bleed photograph with a left-weighted scrim so the headline can be read. No Ken Burns. The italic word “glass” is the only color accent. A slow marquee of spirit names sits under the hero.

Reduced motion: marquee animation is disabled in CSS.

## 6. Hover

- Copper buttons lift 2px.
- Shelf and Instagram images scale to 1.04–1.05 over 700–800ms.
- Current nav item keeps a copper underline. No magnetic cursor.

Reduced motion: transforms are forced to none.

## 7. Menu and Instagram popups

Clicking a drink or a feed cell opens a native `<dialog>`. The browser supplies the backdrop, Escape, and focus entry. Backdrop click closes. The photograph is the point of the window; type sits beside it on wide screens and under it on small ones.

Reduced motion: the dialog opens without a custom transition.

## 8. Mobile navigation

The panel is a full-screen list. Opening locks body scroll (`nav-open` / `is-locked`). It closes on route change.

## What we refused

Custom cursors, scroll-jacking, autoplay video with sound, parallax on the still, and looping bottle spins. A distillery does not need a loading spinner shaped like a glass.
