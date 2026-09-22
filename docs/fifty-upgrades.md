# Fifty upgrades

Written after the first pass of the site was committed. The first five are in the code. The rest are the next bar, in the order they earn their place. None of them are filler tasks like “add more padding.”

## In the build

1. **Deep-linked pours.** `/menu?pour=the-word` opens that drink’s photograph after the age gate. Spirit pages link here instead of a bare anchor.
2. **Arrow keys in the dialog.** Left and right move through the drinks currently on screen, including a filtered search, and keep the URL in step.
3. **Live door status.** A pill in the header reads America/New_York. Friday 4–10, Saturday 1–10, and Sunday 1–6 read as open. Weekday 12–6 reads as pickup only. Otherwise the tasting room is closed.
4. **Menu search.** A field matches the drink, the spirit, and the recipe, and works with the category rail.
5. **JSON-LD.** A Distillery node with the Branchville address, tasting-room hours, and the full Spring / Summer 2026 menu.

## Next

6. A print stylesheet that sets the menu in one column, drops the photography, and keeps prices aligned.
7. A flight builder: four pours from the shelf, priced against the published brown and clear flights so a guest can see the difference.
8. A one-page shelf card — mash, proof, award — that the tasting room can print and set on the bar.
9. War Penny batch notes, once the house will say which beer barrel finished the bottle on the shelf.
10. A published tour length and a cap on the group, the day the distillery confirms both. Do not invent them.
11. A real inbox for the Alco-Hauler. The form should stay unwired until there is a destination that is not a fake success state.
12. Alco-Hauler fields that matter: date, headcount, indoor or outdoor, and whether they want the stillhouse staff.
13. Gift cards and weekday pickup on one card, including the “email first” rule, so it is not only a footer sentence.
14. A press page: New Jersey Monthly, the Herald piece, Wine Enthusiast scores, with the outlet’s own headline and date.
15. Award marks as the actual medal files from the old site, cropped, not retyped as badges.
16. Bottle photographs reshot or recropped on one ground, so the shelf grid stops mixing fields, water, and barrel staves.
17. A muted still-house film with a caption track. No autoplay with sound.
18. Anchors on The Make: `#mash`, `#ferment`, `#distill`, `#age`, `#bottle`.
19. One diagram of the eleven mash bills. No illustration that invents a grain the page does not name.
20. A map of grain, cane, and barrel sources if, and only if, the distillery names them.
21. An age-gate choice that can last thirty days, with the reason written next to the control. Session storage is the current, stricter behavior.
22. Skip the loader on back-forward restore. The title sequence is for the first arrival.
23. The View Transitions API where the browser has it, with the current Framer fade kept as the fallback.
24. A shared-element move from a shelf card into the spirit page, so the bottle does not blink.
25. Roving tabindex on menu rows, so the list is one tab stop and arrow keys browse before the dialog opens.
26. A Safari pass on focus return when the dialog closes. The native dialog does this in Chromium; it needs to be seen on WebKit.
27. Body scroll lock that holds on iOS while a dialog is open.
28. A 200% text-zoom pass. The price must not sit on top of the drink name.
29. A contrast pass on copper against cream and against the charred header. Adjust the copper, not the photograph.
30. A recorded reduced-motion pair: the same three screens with the OS setting on and off.
31. Footer hours that spell Friday’s split day the same way the pill does: pickup until 4, room after.
32. Holiday closures as data. The old site buried “closed July 4” in a JPEG event.
33. The Brandon Davis ticket URL, the hour it is published. The page currently refuses to invent one.
34. Trivia and chicken bingo generated eight weeks out from the stated rules, instead of two hand-entered dates.
35. An `.ics` file for a single date.
36. A legend for music, truck, and house game, used on the homepage strip as well as the events page.
37. The sentence “Milk Street does not cook” set beside every food-truck date.
38. Parking, written after someone walks it. Do not guess which lot.
39. Step-free entrance, same rule: write it when it has been seen.
40. A quiet 21+ line inside the drink dialog, not a second gate.
41. An egg-white flag on the Classic Whiskey Sour.
42. A caffeine flag on Electric Passion, which floats a Red Bull.
43. The Big Ass Mule pulled out of the $11 row into its own large-format block. $125 should not look like a typo.
44. Shaker refills shown as a second price, not only inside the sentence.
45. The category rail highlights the section actually on screen while scrolling.
46. A repeatable Instagram pull for older drink posts. The September 2026 grid is the calendar; the archive is where the cocktails are, and the second page of the API returned 401.
47. A content file of per-cocktail photographs shot in the room, swapped by id, so a new picture does not require a component edit.
48. Alt text read by a person who has stood next to the column still.
49. A performance budget: largest contentful paint under 2.5 seconds on the hero still, measured on a phone.
50. A DNS checklist for the Geerharts: age gate, hours, the eleven bottles, one menu dialog, one Instagram post, the Clarke Design Studio line in the footer, and the old Squarespace left in place until that list is true on the production host.
