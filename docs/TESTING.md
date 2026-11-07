# Testing

Date: 7 November 2026.

## Automated checks

`npm test` passed all **10 tests**, with no failures. `npm run check` passed the JavaScript syntax check.

| Area | What the existing tests check |
| --- | --- |
| Menu data | Unique IDs, valid prices and category coverage |
| Totals | Quantity, size, pickup and delivery calculations |
| Offers | Welcome-code threshold, platter discount and free delivery |
| Filtering | Combined search, category, type, budget and sorting |
| Text and images | Escaped user text and the default profile photo |
| Accounts | Registration, sign-in, duplicate emails and separate carts |
| Cart IDs | Adding items when randomUUID is unavailable |

## Browser walkthrough

| Action | Observed result | Status |
| --- | --- | --- |
| Open Menu at widths of 320, 390 and 440 pixels | One main food card per row, with no horizontal page overflow | Passed |
| Search for coffee | Two matching dishes | Passed |
| Select two Large Hot burgers and add a kitchen note | Choices and note remain in the cart | Passed |
| Apply BITEWELCOME | 80,000 − 5,000 + 3,500 = 78,500 UGX | Passed |
| Enter an invalid checkout phone | Error prevents submission | Passed |
| Enter valid sample delivery details and confirm | Order is recorded at 78,500 UGX and confirmation opens | Passed |
| Advance tracking | Status changes to In the kitchen | Passed |
| Open Profile | Sanyu Judith and the supplied default photo are shown | Passed |
| Reload | The recorded order remains available | Passed |
| Use a wide browser | App shell remains no wider than 440 pixels | Passed |

The walkthrough recorded no JavaScript page errors. The implementation gallery contains mobile screenshots taken at a width of 390 pixels. The automated account checks also verify that newly created accounts inherit Sanyu Judith's photograph and keep their carts separate.

## Run the checks

```sh
npm test
npm run check
```

The [presentation guide](PRESENTATION.md) follows the same main ordering journey.
