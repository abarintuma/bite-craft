# BiteCraft verification — 25 October 2026

## Automated: 9 tests passed

Run `npm test` and `npm run check` from the root. Node tests require no installed packages.

| Check | Result |
| --- | --- |
| Unique catalogue IDs, prices and category coverage | Passed |
| Quantity, large size, pickup and delivery totals | Passed |
| Welcome coupon minimum subtotal | Passed |
| Platter-only percentage discount | Passed |
| Combined search/category/type/budget/sort | Passed |
| Escaping user text and default-photo constant | Passed |
| Two accounts inherit Sanyu photo and have separate carts | Passed |
| Correct login, wrong password and duplicate email behaviour | Passed |
| Cart works without `crypto.randomUUID` on HTTP previews | Passed |

The account event tests execute the application with a mock DOM/storage and Node Web Crypto. They verify persisted account behaviour rather than claiming a live authentication-provider test.

## Actual browser interaction checks

- Browsed as Sanyu Judith; inspected Home, Menu and Profile.
- Selected a Large, Hot burger, quantity two, with “No onions, please.”
- Confirmed the cart preserves choices, quantities and the kitchen note.
- Applied BITEWELCOME: UGX 80,000 subtotal − UGX 5,000 + UGX 3,500 delivery = **UGX 78,500**.
- Entered test-only checkout details, selected simulated mobile money and placed a demo order.
- Confirmed the receipt, order total, no-payment notice and saved order.
- Advanced tracking from confirmed to “In the kitchen.”
- Added and selected a Campus address through the modal form.
- Searched “coffee” (two results), then filtered to UGX 10,000 maximum (one result).
- Inspected phone-width frames of 320, 390 and 440px. The browser’s vertical scrollbars reduced usable document width to 305, 375 and 425px; each document had matching client/scroll width with no horizontal page overflow.
- Uploaded a test photo through Settings, confirmed the resized custom JPEG was used, then restored `assets/sanyu-judith.jpg` with the default-photo button.
- Desktop inspection: a 1363px-wide viewport retained a 440px app shell.

## Issue found and corrected

The HTTP preview did not expose `crypto.randomUUID`, initially preventing additions to the cart. IDs now fall back to random bytes from `crypto.getRandomValues`. Cart and checkout browser checks passed after the fix.

## Limits

- Physical Android/iOS devices were not tested.
- The preview uses HTTP, so its browser cannot run secure-context PBKDF2 account creation. The account event tests passed with Node Web Crypto. Use Vercel HTTPS or localhost for browser account demonstrations.
- This is not a production load/security/accessibility audit.
- Real payments, emails, push messages and fulfilment are outside the demo.

Screenshots in `docs/screenshots/` show the actual tested implementation. Some figures are cropped to the phone-width shell for readability; desktop captures retain surrounding context.

## Design correction verification

Main food cards now occupy one full-width row in Menu, Home recommendations and Favourites, matching reference B. Popular-food and category carousels remain horizontal. Browser geometry checks confirmed stacked rows without horizontal page overflow in 320, 390 and 440px frames. Computed styles confirmed primary `rgb(180, 31, 4)` (`#B41F04`), Plus Jakarta Sans headings and Inter body text. The cart example still totals UGX 78,500.
