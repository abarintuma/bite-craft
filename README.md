# BiteCraft

**Group C | UI/UX Design coursework**

A mobile food-ordering interface built with HTML, CSS and JavaScript. Browse 41 dishes across 11 categories, customise a meal and review the cost before confirming an order.

[Open the website](https://bite-craft-lemon.vercel.app/) · [Read the illustrated report](docs/BiteCraft_Project_Report.pdf) · [Coursework guide](docs/COURSEWORK.md) · [Figma designs](https://www.figma.com/design/uXvZEoR0YnAhbe41bstIhl/food-deliver?node-id=0-1)

## Run and check

Use Node.js 20 or later. No package installation is needed.

```sh
npm run dev
```

Open `http://localhost:3000`. Choose **Get started** to sign in or create an account, or **Browse the menu** to explore.

```sh
npm test
npm run check
```

## Ordering journey

Home → Menu → Food details → Cart → Checkout → Confirmation.

- Search, categories, budget filters, favourites and sorting.
- Size, spice level, quantity and kitchen notes.
- Editable cart, coupons, delivery or pickup and UGX totals.
- Accounts, addresses, order history, tracking and profile settings.

The interface keeps a maximum width of 440 pixels. Main food lists show one full-width card per row; category and popular-food strips scroll horizontally. The primary colour is `#B41F04`, with Plus Jakarta Sans and Inter. Food photographs use external URLs. The supplied Sanyu Judith photograph remains the default account image and can be changed in Settings.

## Coursework files

| Material | Location |
| --- | --- |
| Brief illustrated project report | [PDF report](docs/BiteCraft_Project_Report.pdf) |
| Research, requirements, design links, testing and presentation walkthrough | [Combined coursework guide](docs/COURSEWORK.md) |
| Assignment instructions and marking scheme | [Assignment image](docs/assignment/assignment.jpg) |
| Original hand-drawn interfaces | [Paper sketches](docs/design/paper-sketches.jpeg) |
| Figma exports and supplied design references | `docs/design/` |
| Working mobile screenshots | `docs/screenshots/` |
| Photo sources and licences | [Photo credits](docs/photo-credits.html) |

## Source and tools

`index.html` loads the app, `styles.css` controls its appearance, and `app.js` handles navigation and interactions. `assets/` holds the favicon and profile photograph. `tests/` contains the app checks. `scripts/` contains the local server and PDF builder.

To rebuild the report:

```sh
python3 -m pip install reportlab pillow
python3 scripts/build-report.py
```

For Vercel, import [this repository](https://github.com/abarintuma/bite-craft), select **Other**, keep the repository root, leave the build command empty and use `.` as the output directory.

Accounts and orders are stored in the browser. Checkout records a payment preference; payments and tracking are demonstration flows.
