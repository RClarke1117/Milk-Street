# Brand assessment — Milk Street Distillery

Assessed September 22, 2026, before the rebuild. Sources: the live Squarespace site, the public Instagram profile, and reported coverage (New Jersey Monthly, October 31, 2023; local listings). This document is the brief the new site is built against.

## What they actually are

Milk Street Distillery makes liquor. It is a grain-to-glass producer in a late-1800s feed store at **1 Milk Street, Building 1, Branchville, NJ 07826**. Brothers Mike and Gordon Geerhart left construction, built the plant themselves, and opened in January 2017. It was the first legal distillery in Sussex County in more than seventy years.

The promise, repeated on every product page of the current site: everything is mashed, fermented, distilled, and bottled on site. That is the brand. The tasting room, the bingo chicken, the food trucks, and the Alco-Hauler are what the public meets on Friday, Saturday, and Sunday. They are not the company.

## Verified contact

| | |
| --- | --- |
| Address | 1 Milk Street, Building 1, Branchville, NJ 07826 |
| Phone | (973) 948-0178 |
| Email | drunk@milkstreetdistillery.com |
| Instagram | [@milkstreetdistillery](https://www.instagram.com/milkstreetdistillery/) |
| Facebook | [facebook.com/milkstreetdistillery](https://www.facebook.com/milkstreetdistillery/) |
| Site | [milkstreetdistillery.com/welcome](https://www.milkstreetdistillery.com/welcome) |

Instagram was checked against the public profile (display name Milk Street Distillery, 4,125 followers, bio “Just a couple of M'Fers making ya'll some fine spirits.”, outbound link to the welcome page). It is **not** @177milkstreet.

## Hours (current site, confirmed on product and events pages)

- Monday–Thursday: bottle and gift-card pickup only, 12–6. Email ahead. Tasting room and tours are closed.
- Friday: pickup 12–6; tasting room 4–10.
- Saturday: tasting room 1–10.
- Sunday: tasting room 1–6.
- Tours: every half hour during tasting-room hours. Walk-in. No booking.

The welcome page’s extracted text dropped Saturday in one pass. Product pages and the events page include Saturday 1–10. The rebuild uses the fuller hours.

## The shelf

Eleven spirits, all positioned as house-made:

| Spirit | Family | Proof | Notes taken from their pages |
| --- | --- | --- | --- |
| Murder Bourbon | Whiskey | 100 | Corn, rye, barley. New white American oak. Butter, brown sugar, caramel. |
| War Penny | Whiskey | — | Corn and rye, 36 hours of cherry-wood smoke, new white American oak, finished in local beer barrels. Subtle smoke and the beer barrel. |
| Dam Break Rye | Whiskey | 90 | Caramel, vanilla, honey, peppery rye finish. |
| McNally’s | Whiskey | 90 | Irish-style, seasoned bourbon barrels. Vanilla, caramel, dried fruit. |
| The Devil’s Bark | Whiskey | — | Birch, cinnamon, and whiskey. |
| Vexed Gin | Gin | — | Corn base. Juniper, coriander, cardamom, sarsaparilla, angelica, lemon, orange, grapefruit, lavender. |
| Blind Bettie | Gin | — | Cucumber, lemon, honey, cranberry, juniper. |
| Kanpeki | Vodka | — | Polished white rice, double distilled, double carbon filtered. “Kanpeki” is the Japanese word for perfection. 92 points from Wine Enthusiast, printed on the bottle page. |
| Black Vulture | Vodka | — | Locally grown corn, Delaware River Basin. Smooth, subtle sweetness. “90 Points Wine Enthusiast,” printed on the bottle page. |
| Soulless Ginger | Vodka | — | Corn-based spirit infused with candied ginger. Sweet and spicy. |
| Wooden Leg Rum | Rum | — | Evaporated cane juice and brown molasses. Silver rum. Cane sweetness; brown molasses reminiscent of salted caramel. “2017 Global Spirits Awards Silver Winner,” printed on the bottle page. |

Checked again against the product pages on 22 Sep 2026. These awards are **not** on those pages, so they are not on the bottle pages here: Murder NYISC Gold, War Penny SFWSC Silver, Dam Break Global Spirits Gold 2019, Blind Bettie ASCOT, Wooden Leg NYISC Gold 94 in 2020. Vexed’s Double Platinum is on their Instagram post of 10 Jul 2026, not on the Vexed product page. The Spring / Summer 2026 menu does not name Black Vulture. Drinks that say only “vodka” or “blueberry-infused vodka” are not listed under that bottle.

## Tasting-room list

The current “Our Menu” page is five scans titled Spring / Summer 2026 (four pages plus shaker shots). It is not HTML. The rebuild typesets that list. Prices exclude tax. Cards add 3.99%. Drink voice on the scan is crude and local on purpose; the new site keeps the names and does not sand them into a hotel menu.

The kitchen is not theirs. Food arrives by truck. That should stay obvious so the site never reads as a restaurant.

## What the current site fails at

- Age gate, then a Squarespace brochure. The still is a photo in a gallery, not the argument.
- Navigation is a spirit dropdown plus Events, Menu, Alco-Hauler, Media, Contact. Production has no page.
- The menu is a JPEG. It cannot be searched, read by a phone in sunlight, or opened as a photograph of the drink.
- Hours are repeated as a footer disclaimer in all caps, and Saturday goes missing on the welcome extract.
- Instagram is a link, not a record of the work.
- Motion is a template fade. Nothing explains mash → ferment → distill → age → bottle.

## End of Elm, translated

[End of Elm](https://endofelm.com) is a Morristown restaurant. The useful part is the hospitality finish, not the identity: a designed menu, hours that are always findable, photography that is allowed to be large, a clear way to visit, and type that feels edited.

Do not borrow Elm’s restaurant structure (brunch, tacos, art wall, reservations as the primary act). For Milk Street the same level of finish is applied to a producer:

1. The first screen is the column still and the sentence “grain to glass.”
2. The make is a chapter, with the five steps in order.
3. The shelf is the catalog.
4. The tasting room, tours, events, and the Alco-Hauler arrive after the bottle exists.
5. Hours, address, phone, and email are in the footer on every page, the way a good restaurant keeps them — because guests still need them.

## Voice

Dry, specific, a little like the building. Not a luxury-spirits adjective pile, and not a sports-bar shout. Their own Instagram bio is rougher than the site should be in the chrome; that roughness stays inside the drink names, where they wrote it.

## Photography we can stand behind

Production and bottle photographs are from the distillery’s own Squarespace library (the still, fermenters, mash tun, barrels, feed-store exterior, back bar, and each bottle). Instagram frames are the public profile grid captured September 22, 2026. The recent grid is mostly the calendar. The clear drink photograph in it is the Vexed gin and tonic. The Dam Break reel is process, not a cocktail. Those limits are written down in `docs/instagram-menu-assets.md` instead of being papered over with the wrong picture on the wrong drink.

## Repo visibility

`gh repo edit RClarke1117/Milk-Street --visibility private` was refused: HTTP 403, resource not accessible by this integration, even with the visibility-change acknowledgement flag. The repository was still public at build time. The site work continued in this private-by-intent branch anyway.
