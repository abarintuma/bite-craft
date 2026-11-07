# Problem and user requirements

## Problem statement

Customers need a clear way to choose food, customise an order and understand the final cost. If prices, options or delivery charges are hard to find, it is easy to make a mistake. BiteCraft brings these steps into one mobile ordering journey.

## Main requirements

| ID | Requirement | Application feature |
| --- | --- | --- |
| R1 | Browse food and drinks | Home, Menu and categories |
| R2 | Find suitable dishes | Search, sorting and budget filters |
| R3 | Inspect and customise a meal | Description, price, size, spice, quantity and notes |
| R4 | Review an order | Editable cart and itemised totals |
| R5 | Enter delivery details | Address selection, checkout and validation |
| R6 | See the result of ordering | Confirmation, receipt and order history |
| R7 | Move easily between screens | Home, Menu, Cart and Profile navigation |
| R8 | Return to saved choices | Accounts, favourites and saved addresses |
| R9 | Use the interface on a phone | Phone-width layout and one main card per row |

## Main journey

Home → Menu → Food details → Cart → Checkout → Confirmation.

## Calculation rules

- A Large serving adds 5,000 UGX to the dish price.
- The subtotal is the sum of each selected price multiplied by its quantity.
- `BITEWELCOME` takes 5,000 UGX off a food subtotal of at least 25,000 UGX.
- `PLATTER30` discounts eligible Chicken Pilau Special items by 30%.
- Only one coupon is used per order.
- Delivery costs 3,500 UGX, while pickup is free. A Free Delivery dish waives the order delivery fee.
- Total = subtotal − discount + delivery.

## Form rules

Account creation requires a name, a valid email and a password of at least eight characters. Checkout requires a name, a valid phone number, a complete delivery address when needed, and order confirmation. Kitchen notes are optional.
