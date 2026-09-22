# Instagram and menu assets

Captured September 22, 2026.

## Account

| | |
| --- | --- |
| Handle | [@milkstreetdistillery](https://www.instagram.com/milkstreetdistillery/) |
| Name | Milk Street Distillery |
| Followers | 4,125 |
| Bio | Just a couple of M'Fers making ya'll some fine spirits. |
| Outbound | http://www.milkstreetdistillery.com/welcome |
| Rejected | @177milkstreet — not this account |

The public profile JSON and the first page of `feed/user/3473787987` both resolved to this handle. A second feed page returned HTTP 401, and a later attempt returned 429. The grid on the site is the live first page, saved locally so the pictures do not depend on expiring CDN tokens.

## Posts in the site grid

| File | Post | What it actually shows |
| --- | --- | --- |
| `public/media/ig/vexed-pour.jpg` | [reel/DdKjQZoiu--](https://www.instagram.com/reel/DdKjQZoiu--/) | Gin and tonic. The only clear drink photograph in the current grid. |
| `public/media/ig/dam-break-process.jpg` | [reel/DY-F6jUjadR](https://www.instagram.com/reel/DY-F6jUjadR/) | Dam Break Rye in the glass, from a process film. |
| `public/media/ig/vexed-award.jpg` | [reel/DaoKVvkFbft](https://www.instagram.com/reel/DaoKVvkFbft/) | Vexed bottle and juniper. Award post. |
| `public/media/ig/alco-hauler.jpg` | [reel/DbRHnVLDw2W](https://www.instagram.com/reel/DbRHnVLDw2W/) | Alco-Hauler title card. |
| `public/media/ig/brandon-davis.jpg` | [reel/DdPXtEelmDL](https://www.instagram.com/reel/DdPXtEelmDL/) | Brandon Davis, October 15. |
| `public/media/ig/cigars-blues.jpg` | [p/DdcMvGWDz9i](https://www.instagram.com/p/DdcMvGWDz9i/) | Event poster. |
| `public/media/ig/harrisons-band.jpg` | [p/DdXfJMHl_k3](https://www.instagram.com/p/DdXfJMHl_k3/) | The Harrisons and Company. |
| `public/media/ig/chicken-bingo.jpg` | [p/DdPI25SG9eV](https://www.instagram.com/p/DdPI25SG9eV/) | Chicken bingo. |
| `public/media/ig/southern-stew.jpg` | [p/DdHzTe3m3iw](https://www.instagram.com/p/DdHzTe3m3iw/) | Southern Stew poster. |

Unused extras from the same pull (also saved, not all placed): `cigars.jpg`, `harrisons.jpg`, `southern-stew-live.jpg`.

## How a menu click uses them

The Spring / Summer 2026 list does not have a photograph of each cocktail. A bottle, or the Vexed gin and tonic, is not a picture of The Word or Butterfly Pea.

Each row opens a dialog. If `image` is set on that drink, the dialog shows that photograph. Otherwise it shows a slot labeled “Drink image here,” with the drink’s name, and a link to the spirit it is built from. The Instagram grid on the menu page is separate: those frames stay attached to the posts they actually are.

Unspecified “vodka,” “gin,” “whiskey,” “bourbon,” and “rum” stay those words. They do not link Black Vulture, Blind Bettie, Murder, or Wooden Leg. Blueberry-infused vodka is its own line, not Black Vulture. A bottle link appears only when the scan names that bottle.

## Menu source

Typeset from the distillery’s own scans:

- `Spring 26_Page_1.jpg` — vodka, $11
- `Spring 26_Page_2.jpg` — rum, $11
- `Spring 26_Page_3.jpg` — gin $11, whiskey $13
- `Spring 26_Page_4.jpg` — whiskey continued, mules, martinis
- `Shaker Shots 26.jpg` — shakers $19 / refills $14, boba $12, jello and moonshine $5, slushies $12, brown flight $36, clear flight $26

OCR ambiguities kept honest in `docs/qa-report.md`.
