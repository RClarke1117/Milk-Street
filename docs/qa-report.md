# QA report

Checked September 22, 2026 against a production build (`next start`) in headless Chrome. Asset paths were also checked with `npm run qa`.

## Instagram

- Public profile resolves to **@milkstreetdistillery**, display name Milk Street Distillery, bio “Just a couple of M'Fers making ya'll some fine spirits.”, outbound link to the welcome page. 4,125 followers.
- @177milkstreet is not used as the account. It is named only in the assessment and asset notes as the handle to reject. It is not rendered on the site.
- The grid on the site is the live first page of the profile, saved locally. A second feed page returned HTTP 401, so older cocktail posts were not invented.
- Clicking a grid cell opens the photograph in a dialog and links to the real post.
- A drink without its own photograph opens a “Drink image here” slot. The Vexed gin-and-tonic still stays on the Instagram grid, not on Butterfly Pea.
- Barrel Rested Old Fashioned carries the Dam Break process still and its reel.

## Menu

The Spring / Summer 2026 scans were typeset into 60 rows. The browser counted 60 `.menu-row` buttons.

| Section | Rows | Price on the scan |
| --- | --- | --- |
| Vodka | 9 | $11 |
| Rum | 9 | $11 |
| Gin | 6 | $11 |
| Whiskey | 7 | $13 |
| Mules | 6 | $11, War Mule $12.50, Lucky Peach $12, Big Ass Mule $125 |
| Martinis | 6 | $14 |
| Shaker shots | 6 | $19, refills $14 in the line |
| Boba | 6 | $12 |
| Flights and extras | 5 | Jello $5, moonshine $5, slushies $12, brown $36, clear $26 |

Search for “War Penny” returned Smoked Cherry and War Mule only.

Clicking Butterfly Pea opened the dialog. Arrow right moved to Blind Lemonade and wrote `?pour=blind-lemonade`. Escape closed it. Loading `/menu?pour=the-word` opened The “Word” after the age gate.

## Reading the scans

These names are the scan, not a cleanup:

- Tish & 7up. OCR read “Tish&7up”. The line under it is McNally’s and 7up, “like a 7&7 but better.”
- Lemoannn Squared, kept as printed.
- F.U. Gary, Carol Effin Baskin, and the other house names, kept.
- Classic Martini is “Classie” on the scan. Ferrero Rocher is “Ferraro Roche” on the scan. Both are treated as the obvious reading and marked here.
- Jello and moonshine are $5 from the shaker scan. The OCR pass could not read those two prices; the figure on the scan is $5.
- Where the scan says “vodka” or “whiskey” without a bottle name, the row says “Milk Street vodka” or “house whiskey.” The spirit link uses the flagship of that family. The picture slot does not pretend the scan named Black Vulture or Murder.

Tax and the 3.99% card fee are on the menu page.

## Routes

Home, The Make, Spirits, Murder Bourbon, Menu, Tours, Events, and Visit each returned 200 with a real heading. The footer carries Clarke Design Studio. The header pill read “Tasting room closed,” which was correct for a Sunday night in America/New_York during the run.

JSON-LD on the menu page is a Distillery at 07826 and includes the menu item The “Word”.

## Motion

With `prefers-reduced-motion: reduce`, the make page loaded with the media query matching and with no console error. An earlier build threw React hydration error 418 when that preference was on, because the first client render branched away from the server HTML. The preference is now read after mount. The rerun reported zero console errors.

## Not claimed

- No per-cocktail photograph exists for this list. Those rows open a “Drink image here” slot instead of a bottle or another drink.
- Brandon Davis’s ticket URL was not on the pages we could read. The event points at the distillery and the Instagram post instead of a made-up link.
- The GitHub repository could not be set private (HTTP 403).
- No hosted preview was created. There is no Vercel token in this environment. The site was reviewed at `http://127.0.0.1:3456`.
