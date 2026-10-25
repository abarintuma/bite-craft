'use strict';

// All prices are integer Ugandan shillings. This is a local UI demonstration.
const DEFAULT_PHOTO = 'assets/sanyu-judith.jpg';
const CATEGORIES = [['All','🍽️'],['Burgers','🍔'],['Pizza','🍕'],['Local','🍛'],['Chicken','🍗'],['Healthy','🥗'],['Drinks','🥤'],['Desserts','🍰'],['Breakfast','🥞'],['Pasta','🍝'],['Grills','🐟'],['Snacks','🥟'],['Pasta','🍝'],['Grills','🐟'],['Snacks','🥟']];
const MENU = [
  {
    "id": "pizza",
    "name": "Chef Special Pizza",
    "category": "Pizza",
    "price": 32000,
    "img": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.8,
    "time": 25,
    "tag": "Best Match",
    "description": "A stone-baked pizza with bubbling cheese and a golden crust, served sliced.",
    "ingredients": "Wheat pizza dough, cheese, tomato sauce, savoury toppings",
    "allergens": "Wheat, milk",
    "type": "Fast food",
    "reviews": 8206,
    "deliveryTime": 20,
    "prepTime": 8,
    "freeDelivery": true,
    "photoSource": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=85",
    "photoAuthor": "Unsplash",
    "photoLicense": "Unsplash License",
    "photoLicenseUrl": "https://unsplash.com/license"
  },
  {
    "id": "burger",
    "name": "Double Beef Cheese Burger",
    "category": "Burgers",
    "price": 35000,
    "img": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.8,
    "time": 20,
    "tag": "Bestseller",
    "description": "Two flame-grilled beef patties, melted cheddar, fresh tomatoes, crisp lettuce and our signature sauce in a toasted brioche bun.",
    "ingredients": "Beef, wheat bun, cheddar, tomato, lettuce",
    "allergens": "Wheat, milk, egg",
    "type": "Fast food",
    "photoSource": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85",
    "photoAuthor": "Unsplash",
    "photoLicense": "Unsplash License",
    "photoLicenseUrl": "https://unsplash.com/license",
    "reviews": 286,
    "prepTime": 15,
    "deliveryTime": 25,
    "freeDelivery": false
  },
  {
    "id": "platter",
    "name": "Chicken Pilau Special",
    "category": "Local",
    "price": 22000,
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Chicken_Pilau.jpg/960px-Chicken_Pilau.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.7,
    "time": 25,
    "tag": "Local favourite",
    "description": "Spiced pilau rice with chicken pieces, finished with fresh herbs. A comforting East African favourite.",
    "ingredients": "Rice, chicken, onion, tomato, pilau spices, herbs",
    "allergens": "Prepared in a shared kitchen",
    "type": "Local delights",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Chicken_Pilau.jpg",
    "photoAuthor": "Jameswasswa",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "reviews": 920,
    "prepTime": 20,
    "deliveryTime": 30,
    "freeDelivery": false
  },
  {
    "id": "grilled-chicken",
    "name": "Herb Roast Chicken",
    "category": "Chicken",
    "price": 26000,
    "img": "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.8,
    "time": 25,
    "tag": "Freshly made",
    "description": "Golden roast chicken with crisp skin and a fragrant herb finish.",
    "ingredients": "Chicken, rosemary, garlic, oil, herbs",
    "allergens": "Prepared in a shared kitchen",
    "type": "Local delights",
    "photoSource": "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=1000&q=85",
    "photoAuthor": "Unsplash",
    "photoLicense": "Unsplash License",
    "photoLicenseUrl": "https://unsplash.com/license",
    "reviews": 1237,
    "prepTime": 20,
    "deliveryTime": 30,
    "freeDelivery": false
  },
  {
    "id": "sushi",
    "name": "Sushi Deluxe Platter",
    "category": "Healthy",
    "price": 45000,
    "img": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.9,
    "time": 20,
    "tag": "Chef’s pick",
    "description": "A colourful selection of salmon and vegetable rolls, with pickled ginger and soy sauce on the side.",
    "ingredients": "Sushi rice, salmon, avocado, nori, soy sauce",
    "allergens": "Fish, soy, sesame, wheat",
    "type": "Healthy",
    "photoSource": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1000&q=85",
    "photoAuthor": "Unsplash",
    "photoLicense": "Unsplash License",
    "photoLicenseUrl": "https://unsplash.com/license",
    "reviews": 1554,
    "prepTime": 15,
    "deliveryTime": 25,
    "freeDelivery": false
  },
  {
    "id": "salad",
    "name": "Avocado & Chickpea Bowl",
    "category": "Healthy",
    "price": 18000,
    "img": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.7,
    "time": 15,
    "tag": "Plant powered",
    "description": "A colourful bowl of avocado, chickpeas, leafy greens and crisp vegetables.",
    "ingredients": "Avocado, chickpeas, greens, mixed vegetables, dressing",
    "allergens": "Ask about seasonal ingredients",
    "type": "Healthy",
    "photoSource": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",
    "photoAuthor": "Unsplash",
    "photoLicense": "Unsplash License",
    "photoLicenseUrl": "https://unsplash.com/license",
    "reviews": 1871,
    "prepTime": 10,
    "deliveryTime": 20,
    "freeDelivery": false
  },
  {
    "id": "pasta",
    "name": "Pesto Farfalle Pasta",
    "category": "Pasta",
    "price": 28000,
    "img": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.6,
    "time": 20,
    "tag": "Comfort food",
    "description": "Bow-tie pasta tossed with green pesto, cherry tomatoes and fresh greens.",
    "ingredients": "Wheat pasta, basil pesto, tomato, greens",
    "allergens": "Wheat, milk, nuts",
    "type": "Healthy",
    "photoSource": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85",
    "photoAuthor": "Unsplash",
    "photoLicense": "Unsplash License",
    "photoLicenseUrl": "https://unsplash.com/license",
    "reviews": 2188,
    "prepTime": 15,
    "deliveryTime": 25,
    "freeDelivery": false
  },
  {
    "id": "chicken-burger",
    "name": "Crispy Chicken Burger",
    "category": "Burgers",
    "price": 28000,
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Fried_chicken_burger_.jpg/960px-Fried_chicken_burger_.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "time": 20,
    "tag": "Crispy & juicy",
    "description": "A crispy chicken burger layered with fresh vegetables and a rich house sauce.",
    "ingredients": "Chicken, wheat bun, cabbage, mayonnaise",
    "allergens": "Wheat, egg, milk",
    "type": "Fast food",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Fried_chicken_burger_.jpg",
    "photoAuthor": "Kurt Kaiser",
    "photoLicense": "CC0",
    "photoLicenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "reviews": 2505,
    "prepTime": 15,
    "deliveryTime": 25,
    "freeDelivery": false
  },
  {
    "id": "veggie-pizza",
    "name": "Garden Veggie Pizza",
    "category": "Pizza",
    "price": 29000,
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Vegetarian_Pizza.jpg/960px-Vegetarian_Pizza.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "time": 25,
    "tag": "Vegetarian",
    "description": "Vegetarian pizza slices topped with tomato, vegetables, cheese and fresh herbs.",
    "ingredients": "Wheat dough, mozzarella, peppers, tomato, basil",
    "allergens": "Wheat, milk",
    "type": "Healthy",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Vegetarian_Pizza.jpg",
    "photoAuthor": "Petar Milošević",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "reviews": 2822,
    "prepTime": 20,
    "deliveryTime": 30,
    "freeDelivery": false
  },
  {
    "id": "matooke",
    "name": "Matooke & Groundnut Stew",
    "category": "Local",
    "price": 16000,
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Ground_Nuts_stew_with_Matooke%2C_Sweet_potatoes_and_Nakati.jpg/960px-Ground_Nuts_stew_with_Matooke%2C_Sweet_potatoes_and_Nakati.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "time": 20,
    "tag": "Made with love",
    "description": "Steamed matooke, sweet potato and nakati greens with a bowl of groundnut stew.",
    "ingredients": "Matooke, groundnuts, sweet potato, nakati greens",
    "allergens": "Peanuts",
    "type": "Local delights",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Ground_Nuts_stew_with_Matooke,_Sweet_potatoes_and_Nakati.jpg",
    "photoAuthor": "Owobusingye",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "reviews": 3139,
    "prepTime": 15,
    "deliveryTime": 25,
    "freeDelivery": false
  },
  {
    "id": "rolex",
    "name": "Kampala Classic Rolex",
    "category": "Local",
    "price": 8000,
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Rolex_wrap.jpg/960px-Rolex_wrap.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.9,
    "time": 10,
    "tag": "Street food favourite",
    "description": "A classic Ugandan chapati rolled around a cooked egg omelette.",
    "ingredients": "Wheat chapati, egg, vegetables",
    "allergens": "Wheat, egg",
    "type": "Local delights",
    "imagePosition": "center 62%",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Rolex_wrap.jpg",
    "photoAuthor": "Roxanne.heston",
    "photoLicense": "CC0",
    "photoLicenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "reviews": 3456,
    "prepTime": 5,
    "deliveryTime": 15,
    "freeDelivery": false
  },
  {
    "id": "wings",
    "name": "Grilled BBQ Chicken Wings",
    "category": "Chicken",
    "price": 24000,
    "img": "https://upload.wikimedia.org/wikipedia/commons/4/49/Barbecue-Chicken-Wings_13264-480x360_%284791356615%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "rating": 4.7,
    "time": 20,
    "tag": "Finger-licking",
    "description": "Chicken wings grilled until golden with a savoury barbecue marinade.",
    "ingredients": "Chicken wings, barbecue marinade, herbs",
    "allergens": "Soy, wheat",
    "type": "Fast food",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Barbecue-Chicken-Wings_13264-480x360_(4791356615).jpg",
    "photoAuthor": "Emilian Robert Vicol from Com. Balanesti, Romania",
    "photoLicense": "CC BY 2.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by/2.0",
    "reviews": 3773,
    "prepTime": 15,
    "deliveryTime": 25,
    "freeDelivery": false
  },
  {
    "id": "fries",
    "name": "Parmesan & Herb Fries",
    "category": "Burgers",
    "price": 8000,
    "img": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.5,
    "time": 10,
    "tag": "Perfect on the side",
    "description": "Golden potato fries finished with grated cheese and chopped herbs.",
    "ingredients": "Potatoes, cheese, herbs, vegetable oil",
    "allergens": "Milk; prepared in a shared fryer",
    "type": "Fast food",
    "photoSource": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=85",
    "photoAuthor": "Unsplash",
    "photoLicense": "Unsplash License",
    "photoLicenseUrl": "https://unsplash.com/license",
    "reviews": 4090,
    "prepTime": 5,
    "deliveryTime": 15,
    "freeDelivery": false
  },
  {
    "id": "orange",
    "name": "Fresh Orange Juice",
    "category": "Drinks",
    "price": 7000,
    "img": "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.8,
    "time": 5,
    "tag": "Freshly squeezed",
    "description": "Sunshine in a cup. Freshly squeezed orange juice with no added sugar. 350 ml.",
    "ingredients": "Fresh oranges",
    "allergens": "None declared",
    "type": "Healthy",
    "photoSource": "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=1000&q=85",
    "photoAuthor": "Unsplash",
    "photoLicense": "Unsplash License",
    "photoLicenseUrl": "https://unsplash.com/license",
    "reviews": 4407,
    "prepTime": 3,
    "deliveryTime": 15,
    "freeDelivery": false
  },
  {
    "id": "passion",
    "name": "Passion Fruit Cooler",
    "category": "Drinks",
    "price": 6000,
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Passion_Fruit_Juice_-_%E0%B4%AA%E0%B4%BE%E0%B4%B7%E0%B5%BB_%E0%B4%AB%E0%B5%8D%E0%B4%B0%E0%B5%82%E0%B4%9F%E0%B5%8D%E0%B4%9F%E0%B5%8D_%E0%B4%9C%E0%B5%8D%E0%B4%AF%E0%B5%82%E0%B4%B8%E0%B5%8D.jpg/960px-Passion_Fruit_Juice_-_%E0%B4%AA%E0%B4%BE%E0%B4%B7%E0%B5%BB_%E0%B4%AB%E0%B5%8D%E0%B4%B0%E0%B5%82%E0%B4%9F%E0%B5%8D%E0%B4%9F%E0%B5%8D_%E0%B4%9C%E0%B5%8D%E0%B4%AF%E0%B5%82%E0%B4%B8%E0%B5%8D.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.7,
    "time": 5,
    "tag": "Local favourite",
    "description": "A refreshingly tangy passion fruit cooler, served chilled. 350 ml.",
    "ingredients": "Passion fruit, water, sugar",
    "allergens": "None declared",
    "type": "Local delights",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Passion_Fruit_Juice_-_%E0%B4%AA%E0%B4%BE%E0%B4%B7%E0%B5%BB_%E0%B4%AB%E0%B5%8D%E0%B4%B0%E0%B5%82%E0%B4%9F%E0%B5%8D%E0%B4%9F%E0%B5%8D_%E0%B4%9C%E0%B5%8D%E0%B4%AF%E0%B5%82%E0%B4%B8%E0%B5%8D.jpg",
    "photoAuthor": "Shijan Kaakkara",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "reviews": 4724,
    "prepTime": 3,
    "deliveryTime": 15,
    "freeDelivery": false
  },
  {
    "id": "latte",
    "name": "Ugandan Coffee Latte",
    "category": "Drinks",
    "price": 10000,
    "img": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.9,
    "time": 7,
    "tag": "Locally roasted",
    "description": "Rich Ugandan espresso with silky steamed milk. A little pause in your day. 250 ml.",
    "ingredients": "Coffee, dairy milk",
    "allergens": "Milk",
    "type": "All",
    "photoSource": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=85",
    "photoAuthor": "Unsplash",
    "photoLicense": "Unsplash License",
    "photoLicenseUrl": "https://unsplash.com/license",
    "reviews": 5041,
    "prepTime": 3,
    "deliveryTime": 15,
    "freeDelivery": false
  },
  {
    "id": "iced-coffee",
    "name": "Iced Caramel Latte",
    "category": "Drinks",
    "price": 12000,
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Iced_caramel_latte.jpg/960px-Iced_caramel_latte.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "time": 7,
    "tag": "Cool & creamy",
    "description": "Iced coffee with milk and a caramel finish, served chilled. 350 ml.",
    "ingredients": "Coffee, milk, caramel",
    "allergens": "Milk",
    "type": "All",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Iced_caramel_latte.jpg",
    "photoAuthor": "Yashfaahmad123",
    "photoLicense": "CC0",
    "photoLicenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "reviews": 5358,
    "prepTime": 3,
    "deliveryTime": 15,
    "freeDelivery": false
  },
  {
    "id": "water",
    "name": "Chilled Still Water",
    "category": "Drinks",
    "price": 2000,
    "img": "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.5,
    "time": 2,
    "tag": "Stay refreshed",
    "description": "A refreshing glass of still water. 500 ml serving.",
    "ingredients": "Mineral water",
    "allergens": "None declared",
    "type": "Healthy",
    "photoSource": "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1000&q=85",
    "photoAuthor": "Unsplash",
    "photoLicense": "Unsplash License",
    "photoLicenseUrl": "https://unsplash.com/license",
    "reviews": 5675,
    "prepTime": 3,
    "deliveryTime": 15,
    "freeDelivery": false
  },
  {
    "id": "icecream",
    "name": "Chocolate Brownie Sundae",
    "category": "Desserts",
    "price": 12000,
    "img": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.8,
    "time": 7,
    "tag": "Sweet little moment",
    "description": "Layers of ice cream, chocolate brownie and a generous chocolate sauce topping.",
    "ingredients": "Ice cream, brownie, chocolate sauce",
    "allergens": "Milk, wheat, egg",
    "type": "All",
    "photoSource": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=85",
    "photoAuthor": "Unsplash",
    "photoLicense": "Unsplash License",
    "photoLicenseUrl": "https://unsplash.com/license",
    "reviews": 5992,
    "prepTime": 3,
    "deliveryTime": 15,
    "freeDelivery": false
  },
  {
    "id": "cake",
    "name": "Chocolate Fudge Cake",
    "category": "Desserts",
    "price": 45000,
    "img": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.9,
    "time": 5,
    "tag": "Treat yourself",
    "description": "A whole chocolate cake finished with chocolate frosting and piped swirls.",
    "ingredients": "Cocoa, flour, milk, egg, sugar",
    "allergens": "Wheat, milk, egg",
    "type": "All",
    "photoSource": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
    "photoAuthor": "Unsplash",
    "photoLicense": "Unsplash License",
    "photoLicenseUrl": "https://unsplash.com/license",
    "reviews": 6309,
    "prepTime": 3,
    "deliveryTime": 15,
    "freeDelivery": false
  },
  {
    "id": "fruit",
    "name": "Seasonal Fruit Bowl",
    "category": "Desserts",
    "price": 10000,
    "img": "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.6,
    "time": 8,
    "tag": "Naturally sweet",
    "description": "A colourful bowl of sliced fresh fruit and berries.",
    "ingredients": "Seasonal fruit and berries",
    "allergens": "None declared",
    "type": "Healthy",
    "photoSource": "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1000&q=85",
    "photoAuthor": "Unsplash",
    "photoLicense": "Unsplash License",
    "photoLicenseUrl": "https://unsplash.com/license",
    "reviews": 6626,
    "prepTime": 3,
    "deliveryTime": 15,
    "freeDelivery": false
  },
  {
    "id": "pancakes",
    "name": "Berry & Banana Pancakes",
    "category": "Breakfast",
    "price": 15000,
    "img": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.8,
    "time": 15,
    "tag": "Slow morning favourite",
    "description": "A stack of golden pancakes topped with berries, banana slices and syrup.",
    "ingredients": "Wheat flour, milk, egg, banana, berries, syrup",
    "allergens": "Wheat, milk, egg",
    "type": "All",
    "photoSource": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=85",
    "photoAuthor": "Unsplash",
    "photoLicense": "Unsplash License",
    "photoLicenseUrl": "https://unsplash.com/license",
    "reviews": 6943,
    "prepTime": 10,
    "deliveryTime": 20,
    "freeDelivery": false
  },
  {
    "id": "breakfast",
    "name": "Avocado & Egg Toast",
    "category": "Breakfast",
    "price": 23000,
    "img": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=85",
    "rating": 4.7,
    "time": 20,
    "tag": "Start happy",
    "description": "Toasted bread topped with smashed avocado and a sunny-side-up egg.",
    "ingredients": "Wheat bread, avocado, egg, seasoning",
    "allergens": "Wheat, egg",
    "type": "All",
    "photoSource": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=85",
    "photoAuthor": "Unsplash",
    "photoLicense": "Unsplash License",
    "photoLicenseUrl": "https://unsplash.com/license",
    "reviews": 7260,
    "prepTime": 15,
    "deliveryTime": 25,
    "freeDelivery": false
  },
  {
    "id": "chicken-pizza",
    "name": "Chicken & Herb Pizza",
    "category": "Pizza",
    "price": 38000,
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Chicken_Pizza_made_in_Uganda.jpg/960px-Chicken_Pizza_made_in_Uganda.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "time": 25,
    "tag": "Share the good stuff",
    "description": "Pizza topped with chicken pieces, melted cheese and fresh herbs.",
    "ingredients": "Wheat dough, chicken, mozzarella, peppers, sauce",
    "allergens": "Wheat, milk, soy",
    "type": "Fast food",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Chicken_Pizza_made_in_Uganda.jpg",
    "photoAuthor": "James Moore200",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "reviews": 7577,
    "prepTime": 20,
    "deliveryTime": 30,
    "freeDelivery": false
  },
  {
    "id": "hawaiian",
    "name": "Hawaiian Pizza",
    "category": "Pizza",
    "price": 34000,
    "rating": 4.5,
    "time": 10,
    "tag": "Pineapple & ham",
    "description": "Pizza topped with ham, pineapple and melted cheese.",
    "ingredients": "Wheat dough, ham, pineapple, cheese",
    "allergens": "Wheat, milk",
    "type": "Fast food",
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Hawaiian_pizza_1.jpg/960px-Hawaiian_pizza_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Hawaiian_pizza_1.jpg",
    "photoAuthor": "@joefoodie from USA",
    "photoLicense": "CC BY 2.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by/2.0",
    "reviews": 7894,
    "prepTime": 5,
    "deliveryTime": 15,
    "freeDelivery": false
  },
  {
    "id": "veggie-burger",
    "name": "Triple Veggie Stack Burger",
    "category": "Burgers",
    "price": 24000,
    "rating": 4.6,
    "time": 15,
    "tag": "Plant-powered stack",
    "description": "A tall stack of vegetable patties layered with tomato, cheese and greens in a bun.",
    "ingredients": "Vegetable patties, wheat bun, tomato, cheese, greens",
    "allergens": "Wheat, milk",
    "type": "Healthy",
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/The_ultimate_veggie_burger.jpg/960px-The_ultimate_veggie_burger.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "photoSource": "https://commons.wikimedia.org/wiki/File:The_ultimate_veggie_burger.jpg",
    "photoAuthor": "Sarah Afshar",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "reviews": 8211,
    "prepTime": 10,
    "deliveryTime": 20,
    "freeDelivery": false
  },
  {
    "id": "wrap",
    "name": "Chicken & Avocado Wrap",
    "category": "Chicken",
    "price": 21000,
    "rating": 4.7,
    "time": 20,
    "tag": "Fresh & filling",
    "description": "A soft wrap filled with sliced chicken, avocado and leafy salad.",
    "ingredients": "Wheat wrap, chicken, avocado, lettuce",
    "allergens": "Wheat, milk",
    "type": "All",
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Smoked_chicken_and_avocado_wrap.jpg/960px-Smoked_chicken_and_avocado_wrap.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Smoked_chicken_and_avocado_wrap.jpg",
    "photoAuthor": "Takeaway",
    "photoLicense": "CC BY-SA 3.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "reviews": 8528,
    "prepTime": 15,
    "deliveryTime": 25,
    "freeDelivery": false
  },
  {
    "id": "shawarma",
    "name": "Chicken Shawarma Wrap",
    "category": "Chicken",
    "price": 20000,
    "rating": 4.8,
    "time": 25,
    "tag": "A lunchtime favourite",
    "description": "A toasted flatbread wrap filled with chicken shawarma, vegetables and sauce.",
    "ingredients": "Wheat flatbread, chicken, vegetables, sauce",
    "allergens": "Wheat, milk",
    "type": "Fast food",
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Chicken_Shawarma_Wrap_-_Lavash_2024-09-11.jpg/960px-Chicken_Shawarma_Wrap_-_Lavash_2024-09-11.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Chicken_Shawarma_Wrap_-_Lavash_2024-09-11.jpg",
    "photoAuthor": "Andy Li",
    "photoLicense": "CC0",
    "photoLicenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "reviews": 8845,
    "prepTime": 20,
    "deliveryTime": 30,
    "freeDelivery": false
  },
  {
    "id": "steak",
    "name": "Grilled Steak & Potatoes",
    "category": "Grills",
    "price": 42000,
    "rating": 4.9,
    "time": 10,
    "tag": "From the grill",
    "description": "A grilled beef steak served with golden sliced potatoes and a small salad.",
    "ingredients": "Beef, potatoes, mixed salad, seasoning",
    "allergens": "Prepared in a shared kitchen",
    "type": "All",
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Grilled_beef_steak_in_Cala_P%C3%AD%2C_Mallorca%2C_Spain.jpg/960px-Grilled_beef_steak_in_Cala_P%C3%AD%2C_Mallorca%2C_Spain.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Grilled_beef_steak_in_Cala_P%C3%AD,_Mallorca,_Spain.jpg",
    "photoAuthor": "JIP",
    "photoLicense": "CC BY-SA 3.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
    "reviews": 9162,
    "prepTime": 5,
    "deliveryTime": 15,
    "freeDelivery": false
  },
  {
    "id": "fishchips",
    "name": "Fish, Chips & Peas",
    "category": "Grills",
    "price": 30000,
    "rating": 4.5,
    "time": 15,
    "tag": "Crispy classic",
    "description": "Crisp battered fish with chips, peas, lemon and tartare sauce.",
    "ingredients": "Fish, wheat batter, potatoes, peas, lemon, sauce",
    "allergens": "Fish, wheat, egg",
    "type": "Fast food",
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Fish_and_chips_plate_with_peas.jpg/960px-Fish_and_chips_plate_with_peas.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Fish_and_chips_plate_with_peas.jpg",
    "photoAuthor": "Grendelkhan",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "reviews": 579,
    "prepTime": 10,
    "deliveryTime": 20,
    "freeDelivery": false
  },
  {
    "id": "bolognese",
    "name": "Spaghetti Bolognese",
    "category": "Pasta",
    "price": 28000,
    "rating": 4.6,
    "time": 20,
    "tag": "Hearty favourite",
    "description": "Spaghetti with a rich minced-meat tomato sauce and grated cheese.",
    "ingredients": "Wheat pasta, beef, tomato, onion, cheese",
    "allergens": "Wheat, milk",
    "type": "All",
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Spaghetti_Bolognese_-_Figaros%2C_Brighton_2023-10-06.jpg/960px-Spaghetti_Bolognese_-_Figaros%2C_Brighton_2023-10-06.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Spaghetti_Bolognese_-_Figaros,_Brighton_2023-10-06.jpg",
    "photoAuthor": "Andy Li",
    "photoLicense": "CC0",
    "photoLicenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "reviews": 896,
    "prepTime": 15,
    "deliveryTime": 25,
    "freeDelivery": false
  },
  {
    "id": "lasagne",
    "name": "Baked Meat Lasagne",
    "category": "Pasta",
    "price": 32000,
    "rating": 4.7,
    "time": 25,
    "tag": "Layers of comfort",
    "description": "Baked pasta layered with meat sauce, creamy sauce and a golden cheese topping.",
    "ingredients": "Wheat pasta, beef, tomato, milk sauce, cheese",
    "allergens": "Wheat, milk",
    "type": "All",
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Lasagne_piece.jpg/960px-Lasagne_piece.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Lasagne_piece.jpg",
    "photoAuthor": "Donna Alvita",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "reviews": 1213,
    "prepTime": 20,
    "deliveryTime": 30,
    "freeDelivery": false
  },
  {
    "id": "soup",
    "name": "Tomato Soup",
    "category": "Healthy",
    "price": 14000,
    "rating": 4.8,
    "time": 10,
    "tag": "Warm & comforting",
    "description": "A bowl of smooth tomato soup, served warm.",
    "ingredients": "Tomato, onion, vegetable stock, seasoning",
    "allergens": "Prepared in a shared kitchen",
    "type": "Healthy",
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Tomato_soup_-_Bon_App%C3%A9tit.jpg/960px-Tomato_soup_-_Bon_App%C3%A9tit.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Tomato_soup_-_Bon_App%C3%A9tit.jpg",
    "photoAuthor": "JIP",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "reviews": 1530,
    "prepTime": 5,
    "deliveryTime": 15,
    "freeDelivery": false
  },
  {
    "id": "samosa",
    "name": "Vegetable Samosas",
    "category": "Snacks",
    "price": 7000,
    "rating": 4.9,
    "time": 15,
    "tag": "A little crunch",
    "description": "Crisp triangular pastry parcels filled with seasoned vegetables.",
    "ingredients": "Wheat pastry, potato, vegetables, spices",
    "allergens": "Wheat",
    "type": "Local delights",
    "img": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Vegetable_Samosa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Vegetable_Samosa.jpg",
    "photoAuthor": "Rajan1981",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "reviews": 1847,
    "prepTime": 10,
    "deliveryTime": 20,
    "freeDelivery": false
  },
  {
    "id": "mandazi",
    "name": "Golden Mandazi",
    "category": "Snacks",
    "price": 5000,
    "rating": 4.5,
    "time": 20,
    "tag": "Tea-time favourite",
    "description": "A bowl of golden East African fried dough bites.",
    "ingredients": "Wheat flour, sugar, yeast, oil",
    "allergens": "Wheat",
    "type": "Local delights",
    "img": "https://upload.wikimedia.org/wikipedia/commons/6/69/Bowl_of_mandazi.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Bowl_of_mandazi.jpg",
    "photoAuthor": "The original uploader was ChildofMidnight at English Wikipedia.",
    "photoLicense": "CC BY 2.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by/2.0",
    "reviews": 2164,
    "prepTime": 15,
    "deliveryTime": 25,
    "freeDelivery": false
  },
  {
    "id": "chapati",
    "name": "Flaky Layered Chapati",
    "category": "Local",
    "price": 5000,
    "rating": 4.6,
    "time": 25,
    "tag": "Fresh from the pan",
    "description": "A plate of soft, flaky layered chapati.",
    "ingredients": "Wheat flour, water, oil, salt",
    "allergens": "Wheat",
    "type": "Local delights",
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Flaky_layered_chapati_served_at_The_Well_in_Karen%2C_Nairobi.jpg/960px-Flaky_layered_chapati_served_at_The_Well_in_Karen%2C_Nairobi.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Flaky_layered_chapati_served_at_The_Well_in_Karen,_Nairobi.jpg",
    "photoAuthor": "Lebu Ayiga",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "reviews": 2481,
    "prepTime": 20,
    "deliveryTime": 30,
    "freeDelivery": false
  },
  {
    "id": "tilapia",
    "name": "Whole Fried Fish Platter",
    "category": "Grills",
    "price": 38000,
    "rating": 4.7,
    "time": 10,
    "tag": "Kampala favourite",
    "description": "Whole fried fish served with chips, matooke and fresh kachumbari.",
    "ingredients": "Fish, potatoes, matooke, tomato, onion",
    "allergens": "Fish",
    "type": "Local delights",
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Fried_fish%2C_chips%2C_matooke_and_kacumbali%2C_ready_to_devour_at_Port_Bell_%2C_Luzira_-_Kampala%2C_Uganda.jpg/960px-Fried_fish%2C_chips%2C_matooke_and_kacumbali%2C_ready_to_devour_at_Port_Bell_%2C_Luzira_-_Kampala%2C_Uganda.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Fried_fish,_chips,_matooke_and_kacumbali,_ready_to_devour_at_Port_Bell_,_Luzira_-_Kampala,_Uganda.jpg",
    "photoAuthor": "Ssemmanda will",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "reviews": 2798,
    "prepTime": 5,
    "deliveryTime": 15,
    "freeDelivery": false
  },
  {
    "id": "beans",
    "name": "Posho & Beans",
    "category": "Local",
    "price": 12000,
    "rating": 4.8,
    "time": 15,
    "tag": "A taste of home",
    "description": "Soft white posho served with a hearty helping of stewed beans.",
    "ingredients": "Maize flour, beans, onion, tomato",
    "allergens": "Prepared in a shared kitchen",
    "type": "Local delights",
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Africa_ugali_and_beans.jpg/960px-Africa_ugali_and_beans.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Africa_ugali_and_beans.jpg",
    "photoAuthor": "Moseslukyamuzi",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "reviews": 3115,
    "prepTime": 10,
    "deliveryTime": 20,
    "freeDelivery": false
  },
  {
    "id": "rice",
    "name": "Vegetable Fried Rice",
    "category": "Healthy",
    "price": 16000,
    "rating": 4.9,
    "time": 20,
    "tag": "Colourful & satisfying",
    "description": "Fried rice tossed with chopped carrots, greens and mixed vegetables.",
    "ingredients": "Rice, carrot, cabbage, mixed vegetables",
    "allergens": "Prepared in a shared kitchen",
    "type": "Healthy",
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Vegetable_Fried_Rice.jpg/960px-Vegetable_Fried_Rice.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Vegetable_Fried_Rice.jpg",
    "photoAuthor": "Gaurav Dhwaj Khadka",
    "photoLicense": "CC BY-SA 4.0",
    "photoLicenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
    "reviews": 3432,
    "prepTime": 15,
    "deliveryTime": 25,
    "freeDelivery": false
  },
  {
    "id": "milkshake",
    "name": "Strawberry Milkshake",
    "category": "Drinks",
    "price": 12000,
    "rating": 4.5,
    "time": 25,
    "tag": "Sweet & chilled",
    "description": "A chilled pink strawberry milkshake served in a tall glass. 350 ml.",
    "ingredients": "Milk, strawberries, ice cream",
    "allergens": "Milk",
    "type": "All",
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Strawberry_milk_shake_%28cropped%29.jpg/960px-Strawberry_milk_shake_%28cropped%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Strawberry_milk_shake_(cropped).jpg",
    "photoAuthor": "Renee Comet (Photographer)",
    "photoLicense": "Public domain",
    "photoLicenseUrl": "https://commons.wikimedia.org/wiki/File:Strawberry_milk_shake_(cropped).jpg",
    "reviews": 3749,
    "prepTime": 20,
    "deliveryTime": 30,
    "freeDelivery": false
  },
  {
    "id": "waffles",
    "name": "Berry & Banana Waffles",
    "category": "Breakfast",
    "price": 18000,
    "rating": 4.6,
    "time": 10,
    "tag": "Weekend breakfast",
    "description": "Belgian waffles with sliced banana, berries and a dollop of cream.",
    "ingredients": "Wheat flour, egg, milk, banana, berries, cream",
    "allergens": "Wheat, milk, egg",
    "type": "All",
    "img": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Belgian_waffles_%26_fruit_-_Brewhouse_%26_Kitchen_2026-04-14.jpg/960px-Belgian_waffles_%26_fruit_-_Brewhouse_%26_Kitchen_2026-04-14.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "photoSource": "https://commons.wikimedia.org/wiki/File:Belgian_waffles_%26_fruit_-_Brewhouse_%26_Kitchen_2026-04-14.jpg",
    "photoAuthor": "Andy Li",
    "photoLicense": "CC0",
    "photoLicenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
    "reviews": 4066,
    "prepTime": 5,
    "deliveryTime": 15,
    "freeDelivery": false
  }
];
const uniqueId = () => typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : Array.from(crypto.getRandomValues(new Uint8Array(16))).map(b=>b.toString(16).padStart(2,'0')).join('');
const money = value => 'UGX ' + Math.round(value).toLocaleString('en-UG');
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function totals(cart, coupon, method='delivery') {
  const subtotal = cart.reduce((sum,item) => sum + (MENU.find(p=>p.id===item.id)?.price + (item.size==='Large'?5000:0) || 0) * item.qty,0);
  let discount = 0;
  if(coupon==='BITEWELCOME' && subtotal>=25000) discount=Math.min(5000,subtotal);
  if(coupon==='PLATTER30') discount=Math.round(cart.filter(i=>i.id==='platter').reduce((s,i)=>s+(22000+(i.size==='Large'?5000:0))*i.qty,0)*.3);
  const freeDelivery=cart.some(item=>MENU.find(p=>p.id===item.id)?.freeDelivery);
  const delivery=method==='pickup'||!cart.length||freeDelivery?0:3500;
  return {subtotal,discount,delivery,total:subtotal-discount+delivery};
}
function filterMenu({category='All',query='',type='All',sort='recommended',max=100000}={}) {
  let list=MENU.filter(p=>(category==='All'||p.category===category)&&(type==='All'||p.type===type)&&p.price<=max&&(`${p.name} ${p.category} ${p.description}`).toLowerCase().includes(query.toLowerCase().trim()));
  if(sort==='price-low')list.sort((a,b)=>a.price-b.price);
  if(sort==='price-high')list.sort((a,b)=>b.price-a.price);
  if(sort==='rating')list.sort((a,b)=>b.rating-a.rating);
  if(sort==='fastest')list.sort((a,b)=>a.prepTime-b.prepTime);
  return list;
}
if(typeof module!=='undefined') module.exports={MENU,CATEGORIES,totals,filterMenu,escapeHTML,DEFAULT_PHOTO};

if(typeof document!=='undefined') {
const $=selector=>document.querySelector(selector);
const ICONS={home:'M3 10 12 3l9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z',menu:'M5 3v6m3-6v6M3 3v6c0 2 7 2 7 0V3M6.5 11v10M17 3c-3 3-3 9 1 9h2V3Zm3 9v9',cart:'M3 3h2l3 12h10l3-9H6m3 14h.01M18 20h.01',user:'M20 21v-2a7 7 0 0 0-14 0v2M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0',heart:'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z',search:'m21 21-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0',filter:'M4 6h16M4 12h16M4 18h16M8 3v6m8 0v6m-6 0v6',bell:'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4',pin:'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0',back:'m15 18-6-6 6-6',chevron:'m9 5 7 7-7 7',plus:'M12 5v14M5 12h14',close:'m6 6 12 12M6 18 18 6',check:'m5 12 4 4L20 5',clock:'M12 8v5l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',bag:'M5 7h14l2 14H3ZM8 8V6a4 4 0 0 1 8 0v2',settings:'m9 3-1 3-3 1-2 3 2 2-1 4 3 2 3-1 3 3 3-1 1-4 3-1 1-3-3-2V7l-4-1-2-3ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0',card:'M3 4h18v16H3ZM3 9h18M6 15h5',help:'M9 8a3 3 0 1 1 5 3c-2 1-2 2-2 3m0 3h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',shield:'M12 2 3 6v6c0 6 9 10 9 10s9-4 9-10V6Zm-5 10 3 3 6-6',logout:'M9 3H3v18h6M9 12h12m-5-5 5 5-5 5',edit:'m16 3 5 5L9 20l-6 1 1-6ZM14 5l5 5',gift:'M3 8h18v5H3Zm2 5v8h14v-8M12 8v13M12 8C5 9 5 1 9 3l3 5Zm0 0c7 1 7-7 3-5Z',leaf:'M21 3C8 1 1 7 4 16c7 8 18 0 17-13ZM3 21 16 8',eye:'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Zm13 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0',truck:'M3 5h12v12H3ZM15 9h4l3 4v4h-7M8 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0',star:'m12 2 3 6 7 1-5 5 1 8-6-4-6 4 1-8-5-5 7-1Z'};
ICONS.chef='M7 14H5a4 4 0 1 1 2-7 5 5 0 0 1 10 0 4 4 0 1 1 2 7h-2M7 13v8h10v-8M7 17h10';
const icon=name=>`<svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><path d="${ICONS[name]||ICONS.bag}"/></svg>`;
function read(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}}
function write(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{toast('Browser storage is full or unavailable. Changes may not survive a refresh.');return false;}}
let accounts=read('bitecraft.accounts',[]); if(!Array.isArray(accounts))accounts=[];
let session=read('bitecraft.session',null);
if(session&&!accounts.some(a=>a.id===session))session=null;
const initialData=()=>({profile:{name:'Sanyu Judith',email:'sanyujudith@gmail.com',phone:'',photo:DEFAULT_PHOTO},cart:[],favorites:[],orders:[],addresses:[{id:'home',label:'Home',address:'Plot 14 Nakasero Road, Kampala',instructions:''}],activeAddress:'home',coupon:'',payment:'cash',method:'delivery',notifications:true,history:[]});
function loadData(){const d=read('bitecraft.data.'+(session||'guest'),{}); const base=initialData(); const account=accounts.find(a=>a.id===session);return {...base,...d,profile:{...base.profile,...(account?{name:account.name,email:account.email}:{}),...d.profile},cart:Array.isArray(d.cart)?d.cart.filter(i=>MENU.some(p=>p.id===i.id)&&Number.isInteger(i.qty)&&i.qty>0&&i.qty<=20):[],favorites:Array.isArray(d.favorites)?d.favorites:[],orders:Array.isArray(d.orders)?d.orders:[],addresses:Array.isArray(d.addresses)&&d.addresses.length?d.addresses:base.addresses};}
let data=loadData();
let selectedCategory='All',selectedType='All',query='',sorting='recommended',maxPrice=100000,detailQty=1,detailSize='Regular',detailSpice='Mild',activeOrder=null;
let toastTimer,searchTimer,checkoutDraft=null;
const save=()=>write('bitecraft.data.'+(session||'guest'),data);
const count=()=>data.cart.reduce((s,i)=>s+i.qty,0);
const currentAddress=()=>data.addresses.find(a=>a.id===data.activeAddress)||data.addresses[0];
const avatar=(extra='')=>`<img class="avatar ${extra}" src="${escapeHTML(data.profile.photo||DEFAULT_PHOTO)}" alt="${escapeHTML(data.profile.name)} profile photo">`;
const brand=()=>`<button class="brand" data-go="home" aria-label="BiteCraft home"><span class="brand-mark">B</span><span><strong>BiteCraft<span class="orange">.</span></strong><small>A little joy in every bite</small></span></button>`;
const header=()=>`${brand()}<div class="header-actions"><button class="icon-btn" data-go="notifications" aria-label="Notifications">${icon('bell')}${data.notifications?'<i class="notification-dot"></i>':''}</button><button class="avatar-btn" data-go="profile" aria-label="My profile">${avatar()}</button></div>`;
const nav=active=>['home','menu','cart','profile'].map((name,i)=>`<button class="nav-item ${active===name?'active':''}" data-go="${name}" ${active===name?'aria-current="page"':''}><span class="nav-icon">${icon(name==='profile'?'user':name)}</span>${['Home','Menu','Cart','Profile'][i]}${name==='cart'&&count()?`<span class="count">${count()}</span>`:''}</button>`).join('');
const pageTitle=(title,sub='')=>`<div class="page-title"><h1>${title}</h1>${sub?`<p>${sub}</p>`:''}</div>`;
const back=(title,to='profile')=>`<div class="page-back"><button class="icon-btn" data-go="${to}" aria-label="Go back">${icon('back')}</button><h1>${title}</h1></div>`;
const empty=(title,description,action='Explore the menu',go='menu',symbol='bag')=>`<div class="empty"><div class="empty-icon">${icon(symbol)}</div><h2>${title}</h2><p>${description}</p><button class="primary full" data-go="${go}">${action}</button></div>`;
const delivery=()=>`<div class="delivery"><button data-action="address-modal" aria-label="Change delivery address">${icon('pin')}<span><span class="eyebrow">Deliver to ${icon('chevron')}</span><span class="location">${escapeHTML(currentAddress().address)}</span></span></button><div class="greeting">Hey ${escapeHTML(data.profile.name.split(' ')[0])} 👋<b>Something delicious?</b></div></div>`;
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3300);}
function go(route){if(location.hash==='#'+route)render();else location.hash=route;}
function route(){return (location.hash.slice(1)|| (read('bitecraft.started',false)?'home':'welcome')).split('/');}
function footer(){return '<p class="footer-note"><span>Good food. Better moods.</span>Crafted with care by Sanyu Judith<br><a href="docs/report.html">View project report</a> · <a href="docs/photo-credits.html">Photo credits</a> · Browser demo</p>';}
function searchBox(){return `<div class="search-row"><label class="search">${icon('search')}<input type="search" id="food-search" aria-label="Search food and drinks" placeholder="What are you craving?" value="${escapeHTML(query)}" autocomplete="off"></label><button class="filter-btn" data-action="filters" aria-label="Filter and sort menu">${icon('filter')}</button></div>`;}
function categories(){return `<div class="category-list" aria-label="Food categories">${CATEGORIES.map(([name,emoji])=>`<button class="category ${selectedCategory===name?'active':''}" data-category="${name}" aria-pressed="${selectedCategory===name}"><span>${emoji}</span>${name}</button>`).join('')}</div>`;}
function card(p){
  const saved=data.favorites.includes(p.id);
  return `<article class="food-card">
    <div class="food-photo-wrap">
      <button class="food-image-btn" data-go="food/${p.id}" aria-label="View ${escapeHTML(p.name)}"><img class="food-image" src="${escapeHTML(p.img)}" alt="${escapeHTML(p.name)}" loading="lazy" decoding="async" data-food-photo></button>
      <span class="food-badge">${icon('star')} ${escapeHTML(p.tag)}</span>
      <button class="heart ${saved?'saved':''}" data-favorite="${p.id}" aria-label="${saved?'Remove':'Save'} ${escapeHTML(p.name)} ${saved?'from':'to'} favourites" aria-pressed="${saved}">${icon('heart')}</button>
    </div>
    <div class="food-info">
      <div class="food-card-heading"><button class="food-name" data-go="food/${p.id}">${escapeHTML(p.name)}</button><div class="food-price"><span class="price-label">PRICE</span><span class="price">${money(p.price)}</span></div></div>
      <div class="rating"><span class="star">★</span><b>${p.rating.toFixed(1)}</b><span class="rating-dot">•</span><span>(${p.reviews.toLocaleString('en-UG')} reviews)</span></div>
      <div class="card-meta"><span class="delivery-time">${icon('clock')} ${p.deliveryTime} min</span><span class="prep-time">${icon('chef')} ${p.prepTime} min prep</span><span class="delivery-badge ${p.freeDelivery?'free':''}">${p.freeDelivery?'Free Delivery':'UGX 3,500 delivery'}</span></div>
      <button class="card-add-button" data-add="${p.id}" aria-label="Add ${escapeHTML(p.name)} to cart">Add to Cart</button>
    </div>
  </article>`;
}
function home(){return `${delivery()}<div class="welcome-title"><span class="eyebrow">Fresh picks. Happy bites.</span><h1>Good food,<br><span class="orange">great kind of day.</span></h1></div>${searchBox()}<section class="hero" aria-label="Weekend offer"><img src="${escapeHTML(MENU.find(p=>p.id==='platter').img)}" alt="Chicken Pilau Special" data-food-photo><div class="hero-content"><span class="offer-tag">✦ A little weekend treat</span><h2>Your favourites.<br>30% happier.</h2><p>Save on our Chicken Pilau Special.<br>Use code <b>PLATTER30</b></p><button data-action="claim-offer">Treat me ${icon('chevron')}</button></div><span class="hero-decoration">30%<small>Off pilau</small></span></section><div class="section-heading"><h2>What’s your craving?</h2><button class="text-button" data-go="menu">See all →</button></div>${categories()}<div class="section-heading"><h2>Popular near you <span class="orange">•</span></h2><button class="text-button" data-action="popular">View more →</button></div><div class="horizontal-cards">${['pizza','burger','sushi'].map(id=>card(MENU.find(p=>p.id===id))).join('')}</div><div class="feature-card"><span class="feature-icon">${icon('leaf')}</span><div><h3>A fresh start to every order</h3><p>Thoughtfully prepared. Full of flavour. Just for you.</p></div></div><div class="section-heading"><h2>A taste of home</h2><button class="text-button" data-category="Local">Explore →</button></div><div class="menu-grid">${['platter','matooke','rolex','beans'].map(id=>card(MENU.find(p=>p.id===id))).join('')}</div>${footer()}`;}
function menu(){return `${pageTitle('Discover <span class="orange">delicious.</span>','Big cravings or little treats. Find your next happy bite.')}${searchBox()}${data.history.length&&!query?`<div class="search-history">${data.history.slice(0,3).map(q=>`<button data-query="${escapeHTML(q)}">${icon('clock')} ${escapeHTML(q)}</button>`).join('')}<button data-action="clear-searches">Clear</button></div>`:''}${categories()}<div class="pills">${['All','Fast food','Local delights','Healthy'].map(type=>`<button class="pill ${type===selectedType?'active':''}" data-type="${type}" aria-pressed="${type===selectedType}">${type==='All'?'For you':type}</button>`).join('')}</div><div id="menu-results">${menuResults()}</div>${footer()}`;}
function menuResults(){const list=filterMenu({category:selectedCategory,query,type:selectedType,sort:sorting,max:maxPrice});return `<div class="section-heading"><h2>${query?'Search results':selectedCategory==='All'?'Made for your mood':selectedCategory}</h2><span class="text-sm muted" role="status">${list.length} dishes</span></div>${list.length?`<div class="menu-grid">${list.map(card).join('')}</div>`:`${empty('No bites found','Try another search or reset the filters.','Reset filters','menu','search')}<button class="secondary full" data-action="reset-filters">Show all food</button>`}`;}
function detail(id){const p=MENU.find(p=>p.id===id);if(!p)return empty('That dish is off the menu','There are plenty of other delicious things to try.');return `<div class="detail-photo"><img src="${escapeHTML(p.img)}" data-food-photo alt="${p.name}"><button class="icon-btn" data-go="menu" aria-label="Back to menu">${icon('back')}</button><button class="icon-btn heart ${data.favorites.includes(id)?'saved':''}" data-favorite="${id}" aria-label="Toggle favourite" aria-pressed="${data.favorites.includes(id)}">${icon('heart')}</button></div><div class="detail-heading"><span class="eyebrow orange">${p.tag}</span><h1>${p.name}</h1><div class="rating"><span class="star">★</span><b>${p.rating.toFixed(1)}</b><span>· ${p.deliveryTime} min delivery · ${p.prepTime} min prep</span></div><span class="price">${money(p.price)}</span></div><p class="detail-description">${p.description}</p><div class="option-group"><h3>${p.category==='Drinks'?'Choose your size':'Make it your own'}</h3><div class="choice-row">${['Regular','Large'].map(size=>`<label class="choice"><input type="radio" name="size" value="${size}" ${detailSize===size?'checked':''}>${size}<small>${size==='Regular'?'Original serving':'+ UGX 5,000'}</small></label>`).join('')}</div>${!['Drinks','Desserts','Breakfast'].includes(p.category)?`<h3>Spice level</h3><div class="choice-row">${['Mild','Medium','Hot'].map(s=>`<label class="choice"><input type="radio" name="spice" value="${s}" ${detailSpice===s?'checked':''}>${s}</label>`).join('')}</div>`:''}<label class="field">A little note for the kitchen <span class="muted">(optional)</span><textarea id="item-notes" maxlength="180" placeholder="Any preferences? e.g. no onions"></textarea></label></div><div class="divider"></div><div class="between"><h3>Quantity</h3>${stepper('detail',detailQty)}</div><div class="between small-space"><span class="text-sm muted">Total price</span><span class="price" id="detail-total">${money((p.price+(detailSize==='Large'?5000:0))*detailQty)}</span></div><button class="primary full detail-cta" data-action="detail-add" data-id="${id}">${icon('bag')} Add to cart <span id="detail-button-total">· ${money((p.price+(detailSize==='Large'?5000:0))*detailQty)}</span></button><div class="surface"><h3>Good to know</h3><p class="text-sm muted">${p.ingredients}</p><p class="demo-label"><b>Allergens:</b> ${p.allergens}. Tell your restaurant about allergies before ordering.</p><p class="photo-credit">Photo: <a href="${escapeHTML(p.photoSource)}" target="_blank" rel="noopener noreferrer">${escapeHTML(p.photoAuthor)}</a> · <a href="${escapeHTML(p.photoLicenseUrl)}" target="_blank" rel="noopener noreferrer">${escapeHTML(p.photoLicense)}</a></p></div>`;}
function stepper(key,qty){return `<div class="stepper"><button data-step="${escapeHTML(key)}" data-delta="-1" aria-label="Decrease quantity" ${key==='detail'&&qty===1?'disabled':''}>−</button><span aria-live="polite">${qty}</span><button data-step="${escapeHTML(key)}" data-delta="1" aria-label="Increase quantity" ${qty>=20?'disabled':''}>+</button></div>`;}
function priceSummary(){const t=totals(data.cart,data.coupon,data.method);return `<div class="summary-line"><span class="muted">Subtotal</span><span>${money(t.subtotal)}</span></div><div class="summary-line"><span class="muted">${data.method==='pickup'?'Pickup':'Delivery fee'}</span><span>${t.delivery?money(t.delivery):'Free'}</span></div>${t.discount?`<div class="summary-line discount"><span>Discount · ${data.coupon}</span><span>− ${money(t.discount)}</span></div>`:''}<div class="summary-line total"><span>Total payment</span><span class="orange">${money(t.total)}</span></div>`;}
function cart(){if(!data.cart.length)return `${pageTitle('Your <span class="orange">happy bag.</span>')}${empty('A little empty, a lot of possibility','Your next favourite meal is only a few taps away.','Find something delicious','menu','cart')}${footer()}`;return `${pageTitle('Your <span class="orange">happy bag.</span>',`${count()} delicious ${count()===1?'thing':'things'} to look forward to.`)}<div class="surface"><div class="between"><div><span class="eyebrow">${data.method==='pickup'?'Pickup at':'Deliver to'}</span><p class="text-sm small-space">${escapeHTML(data.method==='pickup'?'BiteCraft, Nakasero Road, Kampala':currentAddress().address)}</p></div><button class="text-button" data-action="address-modal">Change</button></div></div><div class="section-heading"><h2>Order items</h2><button class="text-button" data-action="clear-cart">Clear all</button></div>${data.cart.map(item=>{const p=MENU.find(p=>p.id===item.id);return `<article class="cart-item"><img src="${escapeHTML(p.img)}" data-food-photo alt="${p.name}"><div class="item-body"><div class="between"><h3>${p.name}</h3><button class="remove" data-remove="${item.key}" aria-label="Remove ${p.name}">×</button></div><small>${item.size} · ${item.spice}${item.notes?' · '+escapeHTML(item.notes):''}</small><div class="between"><span class="price">${money((p.price+(item.size==='Large'?5000:0))*item.qty)}</span>${stepper(item.key,item.qty)}</div></div></article>`;}).join('')}<div class="surface"><h3>${icon('gift')} A little something off</h3><form id="coupon-form" class="coupon-row"><label class="sr-only" for="coupon">Coupon code</label><input class="control" id="coupon" name="coupon" placeholder="Enter promo code" value="${escapeHTML(data.coupon)}" maxlength="25"><button class="secondary" type="submit">Apply</button></form>${data.coupon?`<div class="coupon-success">${data.coupon} applied <button data-action="remove-coupon" aria-label="Remove coupon">×</button></div>`:'<p class="demo-label">Try BITEWELCOME for UGX 5,000 off orders from UGX 25,000.</p>'}</div><div class="surface"><h3>Order summary</h3>${priceSummary()}<p class="demo-label">${icon('shield')} Clear prices. No hidden fees.</p><button class="primary full" data-go="checkout">Continue to checkout ${icon('chevron')}</button></div><button class="text-button full" data-go="menu">+ Add something else</button>`;}
function checkout(){if(!data.cart.length)return empty('Your cart is empty','Add a meal before checking out.');if(!checkoutDraft)checkoutDraft={name:data.profile.name,phone:data.profile.phone,address:currentAddress().address,note:currentAddress().instructions};const draft=checkoutDraft;return `${back('The last delicious step','cart')}<p class="offline-note">Demo checkout — no payment is collected and no food is dispatched.</p><form id="checkout-form"><div class="surface"><h3>How would you like it?</h3><div class="choice-row">${['delivery','pickup'].map(method=>`<label class="choice"><input type="radio" name="method" value="${method}" ${data.method===method?'checked':''}>${method==='delivery'?'Deliver to me':'I’ll pick up'}<small>${method==='delivery'?(totals(data.cart,'','delivery').delivery?'UGX 3,500':'Free delivery'):'Free · Nakasero'}</small></label>`).join('')}</div><label class="field">Full name<input name="name" required minlength="2" maxlength="60" autocomplete="name" value="${escapeHTML(draft.name)}"></label><label class="field">Phone number<input name="phone" type="tel" required pattern="[+0-9 ()-]{9,18}" maxlength="18" autocomplete="tel" placeholder="e.g. 0772 123 456" value="${escapeHTML(draft.phone)}"></label>${data.method==='delivery'?`<label class="field">Delivery address<input name="address" required minlength="8" maxlength="200" autocomplete="street-address" value="${escapeHTML(draft.address)}"></label>`:''}<label class="field">Delivery / pickup note <span class="muted">(optional)</span><textarea name="note" maxlength="250" placeholder="Landmark, gate number, or anything we should know">${escapeHTML(draft.note)}</textarea></label></div><div class="surface"><h3>Payment preference</h3><div class="payment-grid">${[['cash','bag','Cash'],['mobile','user','Mobile money'],['card','card','Card']].map(([id,ic,title])=>`<button type="button" class="payment-option ${data.payment===id?'active':''}" data-payment="${id}" aria-pressed="${data.payment===id}">${icon(ic)}${title}</button>`).join('')}</div><p id="payment-note" class="demo-label">${paymentNote()}</p></div><div class="surface"><h3>Your order</h3>${priceSummary()}<label class="check-label"><input type="checkbox" name="confirm" required> I understand this is a demonstration order. No real payment or delivery will happen.</label><p class="form-error" id="checkout-error" role="alert"></p><button class="primary full" type="submit">Place demo order · ${money(totals(data.cart,data.coupon,data.method).total)}</button></div></form>`;}
function paymentNote(){return {cash:'Cash preference is saved with your demo order. No money is due.',mobile:'Mobile money is simulated. No prompt will be sent to your phone.',card:'Card payment is simulated. We do not ask for or store card numbers.'}[data.payment];}
function profile(){const links=[['user','Personal information','settings'],['pin','My addresses','addresses'],['card','Payment preferences','payments'],['clock','Order history','orders'],['heart','Favourites','favorites'],['bell','Notifications','notifications'],['help','Help & support','help'],['shield','Privacy & demo information','privacy']];return `${pageTitle('A little about <span class="orange">you.</span>')}<div class="profile-hero">${avatar()}<div><h2>${escapeHTML(data.profile.name)}</h2><p>${escapeHTML(data.profile.email)}</p><button class="edit-tag" data-go="settings">${icon('edit')} Edit profile</button></div></div><div class="stats"><div>${icon('bag')}<strong>${data.orders.length}</strong><small>Orders</small></div><div>${icon('heart')}<strong>${data.favorites.length}</strong><small>Favourites</small></div><div>${icon('gift')}<strong>2</strong><small>Offers</small></div></div><div class="profile-links">${links.map(([ic,name,to])=>`<button class="profile-link" data-go="${to}">${icon(ic)}${name}<span class="chevron">${icon('chevron')}</span></button>`).join('')}<button class="profile-link danger" data-action="${session?'logout':'signin'}">${icon('logout')}${session?'Log out':'Sign in / Create account'}</button></div>${footer()}`;}
function settings(){return `${back('Make yourself at home')}<form id="settings-form"><div class="settings-photo">${avatar()}<div><h3>Your profile photo</h3><p class="demo-label">Sanyu’s photo is the default for every account.</p></div></div><label class="field">Change profile photo<input type="file" id="photo-upload" class="file-input" accept="image/jpeg,image/png,image/webp"><small>JPG, PNG or WebP, up to 5 MB. Saved only in this browser.</small></label><button class="text-button" type="button" data-action="reset-photo">Use Sanyu’s default photo</button><label class="field">Full name<input name="name" required minlength="2" maxlength="60" autocomplete="name" value="${escapeHTML(data.profile.name)}"></label><label class="field">Email<input name="email" type="email" required maxlength="120" autocomplete="email" value="${escapeHTML(data.profile.email)}" ${session?'readonly':''}><small>${session?'Your account sign-in email stays the same.':'Guest profile only. Create an account to keep a separate local profile.'}</small></label><label class="field">Phone<input name="phone" type="tel" pattern="[+0-9 ()-]{9,18}" maxlength="18" autocomplete="tel" value="${escapeHTML(data.profile.phone)}" placeholder="0772 123 456"></label><label class="toggle-label">Show food offers & notifications<input type="checkbox" name="notifications" ${data.notifications?'checked':''}></label><p class="form-error" id="settings-error" role="alert"></p><button class="primary full small-space">Save changes</button></form>`;}
function addresses(){return `${back('Your places')}<p class="text-sm muted">Good food, right where you are.</p>${data.addresses.map(a=>`<div class="surface address-card"><div class="between"><h3>${icon('pin')} ${escapeHTML(a.label)}</h3>${a.id===data.activeAddress?'<span class="status">Selected</span>':''}</div><p>${escapeHTML(a.address)}</p><p>${escapeHTML(a.instructions)}</p><div class="between small-space"><button class="text-button" data-select-address="${a.id}">Use this address</button><div><button class="text-button" data-edit-address="${a.id}">Edit</button>${data.addresses.length>1?` <button class="text-button" data-delete-address="${a.id}" aria-label="Delete ${escapeHTML(a.label)} address"> · Delete</button>`:''}</div></div></div>`).join('')}<button class="primary full" data-action="new-address">${icon('plus')} Add a new address</button>`;}
function favorites(){const list=MENU.filter(p=>data.favorites.includes(p.id));return `${back('Saved for a craving')}${list.length?`<p class="text-sm muted">A few favourites to come back to.</p><div class="menu-grid small-space">${list.map(card).join('')}</div>`:empty('Love at first bite?','Tap the heart on a dish to save it here.','Find your favourites','menu','heart')}`;}
function orders(){return `${back('Your delicious history')}${data.orders.length?data.orders.slice().reverse().map(o=>`<article class="order-card"><div class="between"><h3>${o.id}</h3><span class="status">${orderStatus(o.stage)}</span></div><p>${new Date(o.date).toLocaleString('en-UG',{dateStyle:'medium',timeStyle:'short'})} · Demo order</p><p>${escapeHTML(o.items.map(i=>`${i.qty}× ${MENU.find(p=>p.id===i.id).name}`).join(', '))}</p><div class="between"><span class="price">${money(o.total)}</span><button class="text-button" data-go="tracking/${o.id}">View order →</button></div><button class="secondary full small-space" data-reorder="${o.id}">Order these again</button></article>`).join(''):empty('Your story starts with a bite','Your demo orders and receipts will appear here.','Explore the menu','menu','clock')}`;}
const orderStatus=stage=>['Order confirmed','In the kitchen','On the way','Completed'][stage]||'Order confirmed';
function tracking(id){const o=data.orders.find(o=>o.id===id);if(!o)return empty('Order not found','You can find your previous orders in your history.','View history','orders');activeOrder=id;const labels=o.method==='pickup'?['Order confirmed','In the kitchen','Ready for pickup','Picked up']:['Order confirmed','In the kitchen','On the way','Delivered'];return `${back('A happy bite is on its way','orders')}<div class="tracking"><div class="success-icon">${icon(o.stage===3?'check':'bag')}</div><span class="eyebrow orange">${o.id} · Demo order</span><h1>${labels[o.stage]}<span class="orange">.</span></h1><p>${o.stage===3?'Thanks for sharing a little joy with BiteCraft.':'Your order is saved. Let’s follow its demo journey.'}</p></div><div class="surface timeline">${labels.map((title,i)=>`<div class="timeline-step ${i<=o.stage?'done':''}"><span class="timeline-dot">${icon(i<=o.stage?'check':'clock')}</span><div><h3>${title}</h3><p>${['We have your order details.','Made fresh, with a little care.',o.method==='pickup'?'Collect at BiteCraft, Nakasero.':'Your demo rider has your order.','Enjoy every bite.'][i]}</p></div></div>`).join('')}<p class="demo-label">This timeline is simulated. Use the button to demonstrate the next step.</p>${o.stage<3?'<button class="secondary full" data-action="advance-order">Simulate next step →</button>':''}</div><div class="surface"><h3>Order details</h3><p class="text-sm muted">${escapeHTML(o.name)} · ${escapeHTML(o.phone)}<br>${escapeHTML(o.address)}<br>${escapeHTML(o.note)}</p><div class="divider"></div>${o.items.map(i=>`<div class="summary-line"><span>${i.qty}× ${MENU.find(p=>p.id===i.id).name}<br><small class="muted">${i.size} · ${i.spice}${i.notes?' · '+escapeHTML(i.notes):''}</small></span><span>${money((MENU.find(p=>p.id===i.id).price+(i.size==='Large'?5000:0))*i.qty)}</span></div>`).join('')}<div class="summary-line"><span>Delivery</span><span>${money(o.delivery)}</span></div>${o.discount?`<div class="summary-line discount"><span>Discount</span><span>− ${money(o.discount)}</span></div>`:''}<div class="summary-line total"><span>Total</span><span>${money(o.total)}</span></div><p class="demo-label">${o.payment==='cash'?'Cash':o.payment==='mobile'?'Mobile money':'Card'} · No payment collected</p></div><button class="primary full" data-go="home">Back to happy browsing</button>`;}
function notifications(){return `${back('Little updates for you')}${data.notifications?`<div class="notification-card"><span class="icon-btn">${icon('gift')}</span><div><h3>A warm welcome, on us.</h3><p>Get UGX 5,000 off orders from UGX 25,000. Enter BITEWELCOME in your cart.</p></div></div><div class="notification-card"><span class="icon-btn">${icon('menu')}</span><div><h3>Your weekend just got tastier.</h3><p>30% off Chicken Pilau Special with PLATTER30. One coupon per order.</p><button class="text-button" data-action="claim-offer">Explore the offer →</button></div></div>${data.orders.slice(-3).reverse().map(o=>`<div class="notification-card"><span class="icon-btn">${icon('bag')}</span><div><h3>${o.id}: ${orderStatus(o.stage)}</h3><p>Your demo order total is ${money(o.total)}.</p><button class="text-button" data-go="tracking/${o.id}">View your order →</button></div></div>`).join('')}`:empty('A quieter kind of day','Notifications are turned off. You can change this in Settings.','Open settings','settings','bell')}<p class="demo-label">In-app demo updates only. No push, SMS or email is sent.</p>`;}
function payments(){return `${back('Payment preferences')}<p class="text-sm muted">Choose how you’d prefer to pay.</p><div class="surface"><div class="payment-grid">${[['cash','bag','Cash'],['mobile','user','Mobile money'],['card','card','Card']].map(([id,ic,title])=>`<button class="payment-option ${data.payment===id?'active':''}" data-payment="${id}" aria-pressed="${data.payment===id}">${icon(ic)}${title}</button>`).join('')}</div><p id="payment-note" class="demo-label">${paymentNote()}</p></div><p class="offline-note">Payment options demonstrate the interface only. There is no payment service connection.</p>`;}
function welcome(){return `<div class="splash"><div class="splash-visual"><img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1000&auto=format&fit=crop&q=85" alt="A bright kitchen with fresh ingredients"><span class="splash-brand"><span class="brand-mark">B</span>BiteCraft.</span></div><div class="splash-content"><span class="eyebrow">Made fresh. Made for you.</span><h1>Food for<br><span class="orange">everyone.</span></h1><p>From familiar favourites to your next little discovery. A happy bite is always close.</p><div class="splash-dots"><i></i><i></i><i></i></div><button class="primary full" data-action="get-started">Get started ${icon('chevron')}</button><button class="text-button" data-action="browse">Just here for the food? Browse the menu</button></div></div>`;}
function auth(signup=false){return `<div class="auth">${brand()}<span class="eyebrow orange">${signup?'Your seat at the table':'A familiar kind of happy'}</span><h1 class="small-space">${signup?'Good food starts<br>with <span class="orange">you.</span>':'Welcome<br><span class="orange">back.</span>'}</h1><p>${signup?'Create a local demo account and find your favourites.':'Sign in to your demo account for another happy bite.'}</p><form id="auth-form" data-mode="${signup?'signup':'login'}">${signup?'<label class="field">Full name<input name="name" autocomplete="name" minlength="2" maxlength="60" placeholder="Your full name" required></label>':''}<label class="field">Email address<input name="email" type="email" autocomplete="email" required maxlength="120" placeholder="you@example.com"></label><label class="field">Password<span class="password-wrap"><input name="password" id="password" type="password" autocomplete="${signup?'new-password':'current-password'}" required minlength="8" maxlength="128" placeholder="At least 8 characters"><button type="button" data-action="toggle-password" aria-label="Show password">${icon('eye')}</button></span></label>${!signup?'<button type="button" class="text-button full" data-action="forgot-password">Forgot your password?</button>':'<p class="demo-label">Use a demo-only password. Accounts stay in this browser. Every new account starts with Sanyu Judith’s photo.</p>'}<p class="form-error" id="auth-error" role="alert"></p><button class="primary full" type="submit">${signup?'Create account':'Sign in'} ${icon('chevron')}</button></form><div class="auth-rule">or keep it simple</div><button class="secondary full" data-action="browse">Explore as Sanyu Judith</button><p class="auth-footer">${signup?'Already have an account?':'New to BiteCraft?'} <button data-go="${signup?'login':'signup'}">${signup?'Sign in':'Create an account'}</button></p><p class="demo-label">Browser demo · No social login, email verification or server account.</p></div>`;}
function help(){return `${back('A little help')}<div class="surface modal-copy"><h3>How do I order?</h3><p>Choose a dish, pick a size and spice level, and add it to your cart. Choose delivery or pickup at checkout, enter your details and place a demo order.</p><h3>Where is my order?</h3><p>Open Profile → Order history → View order. Use “Simulate next step” to show how tracking works.</p><h3>How do offers work?</h3><p>BITEWELCOME takes UGX 5,000 off a subtotal of at least UGX 25,000. PLATTER30 takes 30% off Chicken Pilau Special items. Only one code can be used per order. Demo offers can be reused. Adding a dish marked Free Delivery waives the delivery fee for that order.</p><h3>Can I pay?</h3><p>No. Cash, mobile money and card are interface demonstrations. No payment details are requested.</p><h3>About this project</h3><p>Designed and presented by Sanyu Judith. Built with HTML, CSS and JavaScript from the supplied Figma prototypes.</p><a href="docs/report.html">Read the illustrated project report →</a></div><button class="secondary full" data-go="menu">Find your next bite</button>`;}
function privacy(){return `${back('Privacy & demo information')}<div class="surface modal-copy"><h3>Your data stays here</h3><p>Profile details, uploaded photos, addresses, saved dishes, cart and orders are stored in this browser’s local storage. They do not sync across devices.</p><h3>Local accounts</h3><p>Passwords are derived using PBKDF2 with a random salt. This demonstrates sign-in only: local storage can be edited by anyone with access to the browser. It is not production authentication. Use a password you do not use elsewhere.</p><h3>Your photo</h3><p>Every new account uses the provided Sanyu Judith photograph until you choose another photo in Settings. Removing a custom photo restores that default.</p><h3>External services</h3><p>Food and kitchen photos load from external Unsplash and Wikimedia Commons URLs. Photo sources and licences are listed on the credits page. Fonts may load from Google Fonts; system fonts are used if unavailable. No analytics, payment provider or delivery service is connected.</p><h3>Remove local data</h3><p>Clear BiteCraft’s browser site data to remove all local accounts and orders. The button below removes this profile’s cart, orders, addresses and preferences; the sign-in account remains.</p><button class="danger full" data-action="reset-data">Reset this profile’s demo data</button></div>`;}
function render(){const [page,id]=route();const authPage=['welcome','login','signup'].includes(page);$('#header').innerHTML=authPage?'':header();$('#navigation').innerHTML=authPage?'':nav(page==='home'?'home':page==='menu'||page==='food'?'menu':page==='cart'||page==='checkout'?'cart':'profile');let content;switch(page){case'welcome':content=welcome();break;case'login':content=auth();break;case'signup':content=auth(true);break;case'home':content=home();break;case'menu':content=menu();break;case'food':content=detail(id);break;case'cart':content=cart();break;case'checkout':content=checkout();break;case'profile':content=profile();break;case'settings':content=settings();break;case'addresses':content=addresses();break;case'favorites':content=favorites();break;case'orders':content=orders();break;case'tracking':content=tracking(id);break;case'notifications':content=notifications();break;case'payments':content=payments();break;case'help':content=help();break;case'privacy':content=privacy();break;default:content=empty('Let’s find something delicious','This page is not on the menu.','Back to home','home');}$('#main').innerHTML=content;document.title=`BiteCraft • ${page==='food'?(MENU.find(p=>p.id===id)?.name||'Menu'):page.charAt(0).toUpperCase()+page.slice(1)}`;document.querySelectorAll('.cart-bar').forEach(e=>e.remove());if(['home','menu','food','favorites'].includes(page)&&count())$('.app-shell').insertAdjacentHTML('beforeend',`<button class="cart-bar" data-go="cart"><span>${icon('bag')} ${count()} ${count()===1?'item':'items'} <small>· View your bag</small></span><b>${money(totals(data.cart,data.coupon,data.method).total)}</b></button>`);}
function modal(title,body){const d=$('#modal');d.innerHTML=`<div class="modal-header"><h2 id="modal-title">${title}</h2><button class="icon-btn" data-action="close-modal" aria-label="Close dialog">${icon('close')}</button></div>${body}`;if(!d.open)d.showModal();}
function addItem(id,qty=1,size='Regular',spice='Mild',notes=''){if(!MENU.some(p=>p.id===id))return;const existing=data.cart.find(i=>i.id===id&&i.size===size&&i.spice===spice&&i.notes===notes);if(existing){if(existing.qty+qty>20){toast('Up to 20 of each item per order.');return;}existing.qty+=qty;}else data.cart.push({key:uniqueId(),id,qty,size,spice,notes});save();render();toast('A happy bite added to your bag.');}
function checkCoupon(code){const t=totals(data.cart,'',data.method);if(code==='BITEWELCOME'&&t.subtotal<25000)return 'Add at least UGX 25,000 of food to use BITEWELCOME.';if(code==='PLATTER30'&&!data.cart.some(i=>i.id==='platter'))return 'PLATTER30 applies to Chicken Pilau Special. Add it to your bag first.';if(!['BITEWELCOME','PLATTER30'].includes(code))return 'That code is not available. Try BITEWELCOME or PLATTER30.';return '';}
function validateCoupon(){if(data.coupon&&checkCoupon(data.coupon)){data.coupon='';toast('Your coupon was removed because the order no longer qualifies.');}}
function addressModal(){modal('Where’s your happy place?',`<div class="modal-copy">${data.addresses.map(a=>`<button class="choice full small-space" data-select-address="${a.id}"><b>${escapeHTML(a.label)} ${a.id===data.activeAddress?'✓':''}</b><small>${escapeHTML(a.address)}</small></button>`).join('')}<button class="primary full small-space" data-action="new-address">Add a new address</button></div>`);}
function addressForm(id){const a=data.addresses.find(a=>a.id===id)||{id:'',label:'',address:'',instructions:''};modal(a.id?'Edit your place':'Add your place',`<form id="address-form" data-id="${a.id}"><label class="field">Label<input name="label" required maxlength="30" value="${escapeHTML(a.label)}" placeholder="Home, campus, work…"></label><label class="field">Full address<input name="address" required minlength="8" maxlength="200" value="${escapeHTML(a.address)}" placeholder="Building, road, area and city"></label><label class="field">Directions <span class="muted">(optional)</span><textarea name="instructions" maxlength="200" placeholder="A landmark or gate number">${escapeHTML(a.instructions)}</textarea></label><button class="primary full">Save address</button></form>`);}
function filterModal(){modal('Your kind of delicious',`<form id="filter-form"><label class="field">Sort by<select name="sort">${[['recommended','Recommended'],['rating','Top rated'],['price-low','Price: low to high'],['price-high','Price: high to low'],['fastest','Fastest preparation']].map(([v,t])=>`<option value="${v}" ${v===sorting?'selected':''}>${t}</option>`).join('')}</select></label><label class="field">Budget per dish<select name="max">${[[100000,'Any budget'],[10000,'Up to UGX 10,000'],[20000,'Up to UGX 20,000'],[30000,'Up to UGX 30,000']].map(([v,t])=>`<option value="${v}" ${v===maxPrice?'selected':''}>${t}</option>`).join('')}</select></label><button class="primary full">Show my picks</button><button type="button" class="text-button full small-space" data-action="reset-filters">Reset all filters</button></form>`);}
function resetFilters(){selectedCategory='All';selectedType='All';query='';sorting='recommended';maxPrice=100000;$('#modal').close();go('menu');}
async function passwordHash(password,salt){const input=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveBits']);const bits=await crypto.subtle.deriveBits({name:'PBKDF2',salt:Uint8Array.from(salt),iterations:100000,hash:'SHA-256'},input,256);return Array.from(new Uint8Array(bits)).map(b=>b.toString(16).padStart(2,'0')).join('');}
async function signIn(form){const err=$('#auth-error');const f=new FormData(form),email=f.get('email').trim().toLowerCase(),password=f.get('password'),isSignup=form.dataset.mode==='signup';if(isSignup&&f.get('name').trim().length<2){err.textContent='Please enter at least two characters for your name.';return;}if(!crypto.subtle){err.textContent='Local accounts require HTTPS or localhost. You can still browse as Sanyu Judith.';return;}const submit=form.querySelector('[type=submit]');submit.disabled=true;submit.textContent='One little moment…';try{if(isSignup){if(accounts.some(a=>a.email===email))throw new Error('This email already has an account in this browser. Please sign in.');const salt=Array.from(crypto.getRandomValues(new Uint8Array(16)));const account={id:uniqueId(),name:f.get('name').trim(),email,salt,hash:await passwordHash(password,salt)};if(!write('bitecraft.accounts',[...accounts,account]))throw new Error('Could not save your account. Please allow browser storage.');accounts.push(account);session=account.id;}else{const account=accounts.find(a=>a.email===email);if(!account||await passwordHash(password,account.salt)!==account.hash)throw new Error('Email or password is incorrect. Accounts exist only in the browser where they were created.');session=account.id;}write('bitecraft.session',session);write('bitecraft.started',true);data=loadData();checkoutDraft=null;save();go('home');toast(isSignup?'Your place at the table is ready.':'Welcome back. Something delicious awaits.');}catch(error){err.textContent=error.message;submit.disabled=false;submit.textContent=isSignup?'Create account':'Sign in';}}
document.addEventListener('click',event=>{if(event.target.closest('.skip-link')){event.preventDefault();$('#main').focus();return;}const b=event.target.closest('button');if(!b)return;
  if(b.dataset.go){if(b.dataset.go.startsWith('food/')){detailQty=1;detailSize='Regular';detailSpice='Mild';}go(b.dataset.go);return;}
  if(b.dataset.category){selectedCategory=b.dataset.category;selectedType='All';go('menu');return;}
  if(b.dataset.type){selectedType=b.dataset.type;render();return;}
  if(b.dataset.query){query=b.dataset.query;go('menu');return;}
  if(b.dataset.favorite){const id=b.dataset.favorite;data.favorites=data.favorites.includes(id)?data.favorites.filter(x=>x!==id):[...data.favorites,id];save();const y=scrollY;render();window.scrollTo(0,y);return;}
  if(b.dataset.add){const y=scrollY;addItem(b.dataset.add);window.scrollTo(0,y);return;}
  if(b.dataset.step){const delta=Number(b.dataset.delta);if(b.dataset.step==='detail'){detailQty=Math.max(1,Math.min(20,detailQty+delta));const step=b.closest('.stepper');step.outerHTML=stepper('detail',detailQty);updateDetailTotal();}else{const item=data.cart.find(i=>i.key===b.dataset.step);if(!item)return;item.qty=Math.min(20,item.qty+delta);if(item.qty<=0)data.cart=data.cart.filter(i=>i.key!==item.key);validateCoupon();save();const y=scrollY;render();window.scrollTo(0,y);}return;}
  if(b.dataset.remove){data.cart=data.cart.filter(i=>i.key!==b.dataset.remove);validateCoupon();save();render();return;}
  if(b.dataset.selectAddress){data.activeAddress=b.dataset.selectAddress;save();$('#modal').close();render();toast('Your happy place is saved.');return;}
  if(b.dataset.editAddress){addressForm(b.dataset.editAddress);return;}
  if(b.dataset.deleteAddress){if(data.addresses.length<=1)return;data.addresses=data.addresses.filter(a=>a.id!==b.dataset.deleteAddress);if(data.activeAddress===b.dataset.deleteAddress)data.activeAddress=data.addresses[0].id;save();render();return;}
  if(b.dataset.payment){data.payment=b.dataset.payment;save();document.querySelectorAll('[data-payment]').forEach(e=>{e.classList.toggle('active',e.dataset.payment===data.payment);e.setAttribute('aria-pressed',e.dataset.payment===data.payment);});$('#payment-note').textContent=paymentNote();return;}
  if(b.dataset.reorder){const order=data.orders.find(o=>o.id===b.dataset.reorder);modal('Bring back a favourite?',`<p class="modal-copy">This will replace your current bag with the dishes in ${order.id}, using today’s menu prices.</p><button class="primary full small-space" data-confirm-reorder="${order.id}">Yes, fill my bag</button>`);return;}
  if(b.dataset.confirmReorder){const o=data.orders.find(o=>o.id===b.dataset.confirmReorder);data.cart=o.items.map(i=>({...i,key:uniqueId()}));data.coupon='';save();$('#modal').close();go('cart');return;}
  const action=b.dataset.action;
  if(action==='get-started'){write('bitecraft.started',true);go('login');}
  if(action==='browse'){session=null;write('bitecraft.session',null);write('bitecraft.started',true);data=loadData();checkoutDraft=null;go('home');}
  if(action==='signin')go('login');
  if(action==='toggle-password'){const input=$('#password');input.type=input.type==='password'?'text':'password';b.setAttribute('aria-label',input.type==='password'?'Show password':'Hide password');}
  if(action==='forgot-password')modal('About your local account','<p class="modal-copy">This demo has no email service, so it cannot send a password reset link. Try your local demo password, create an account with another email, or continue browsing as Sanyu Judith. Do not use an important password here.</p><button class="secondary full small-space" data-action="close-modal">Got it</button>');
  if(action==='filters')filterModal();
  if(action==='reset-filters')resetFilters();
  if(action==='popular'){sorting='rating';selectedCategory='All';selectedType='All';query='';go('menu');}
  if(action==='clear-searches'){data.history=[];save();render();}
  if(action==='claim-offer'){selectedCategory='Local';query='';selectedType='All';detailQty=1;detailSize='Regular';detailSpice='Mild';go('food/platter');toast('Add Chicken Pilau Special, then apply PLATTER30 in your bag.');}
  if(action==='detail-add'){addItem(b.dataset.id,detailQty,detailSize,detailSpice,$('#item-notes').value.trim());}
  if(action==='address-modal')addressModal();
  if(action==='new-address')addressForm();
  if(action==='close-modal')$('#modal').close();
  if(action==='remove-coupon'){data.coupon='';save();render();}
  if(action==='clear-cart')modal('Clear your happy bag?','<p class="modal-copy">All dishes in your current bag will be removed.</p><button class="danger full small-space" data-action="confirm-clear">Clear bag</button><button class="secondary full small-space" data-action="close-modal">Keep my food</button>');
  if(action==='confirm-clear'){data.cart=[];data.coupon='';save();$('#modal').close();render();}
  if(action==='reset-photo'){data.profile.photo=DEFAULT_PHOTO;save();render();toast('Sanyu’s default photo restored.');}
  if(action==='advance-order'){const o=data.orders.find(o=>o.id===activeOrder);if(o&&o.stage<3){o.stage++;save();render();toast('Demo order status updated.');}}
  if(action==='logout'){session=null;write('bitecraft.session',null);data=loadData();checkoutDraft=null;go('login');toast('Signed out. Your demo account is saved in this browser.');}
  if(action==='reset-data')modal('Start fresh?',`<p class="modal-copy">This removes this profile’s saved cart, orders, favourites, photo and addresses from this browser. Your sign-in account remains.</p><button class="danger full small-space" data-action="confirm-reset">Reset demo data</button><button class="secondary full small-space" data-action="close-modal">Keep my data</button>`);
  if(action==='confirm-reset'){const a=accounts.find(a=>a.id===session);data=initialData();if(a){data.profile.name=a.name;data.profile.email=a.email;}save();$('#modal').close();go('profile');toast('A fresh start. Demo data reset.');}
});
function updateDetailTotal(){const p=MENU.find(p=>p.id===route()[1]);if(!p)return;const sum=money((p.price+(detailSize==='Large'?5000:0))*detailQty);$('#detail-total').textContent=sum;$('#detail-button-total').textContent='· '+sum;}
document.addEventListener('input',event=>{if(event.target.id==='food-search'){query=event.target.value;clearTimeout(searchTimer);if(route()[0]==='home'){go('menu');requestAnimationFrame(()=>{const input=$('#food-search');input.focus();input.setSelectionRange(query.length,query.length);});}else{$('#menu-results').innerHTML=menuResults();}searchTimer=setTimeout(()=>{if(query.trim()){data.history=[query.trim(),...data.history.filter(x=>x!==query.trim())].slice(0,5);save();}},900);}});
document.addEventListener('change',async event=>{const el=event.target;
  if(el.name==='size'){detailSize=el.value;updateDetailTotal();}
  if(el.name==='spice')detailSpice=el.value;
  if(el.name==='method'){const form=$('#checkout-form');const values=new FormData(form);checkoutDraft={name:values.get('name'),phone:values.get('phone'),address:values.get('address')||checkoutDraft.address,note:values.get('note')};data.method=el.value;save();render();}
  if(el.id==='photo-upload'&&el.files[0]){const f=el.files[0];if(!['image/jpeg','image/png','image/webp'].includes(f.type)||f.size>5*1024*1024){toast('Please choose a JPG, PNG or WebP image under 5 MB.');el.value='';return;}try{const bitmap=await createImageBitmap(f);const canvas=document.createElement('canvas');canvas.width=canvas.height=300;const ctx=canvas.getContext('2d');const side=Math.min(bitmap.width,bitmap.height);ctx.drawImage(bitmap,(bitmap.width-side)/2,(bitmap.height-side)/2,side,side,0,0,300,300);const previous=data.profile.photo;data.profile.photo=canvas.toDataURL('image/jpeg',.85);if(save()){document.querySelectorAll('.avatar').forEach(img=>img.src=data.profile.photo);toast('Your new photo is saved.');}else data.profile.photo=previous;bitmap.close();}catch{toast('That image could not be opened. Please try another.');}}
});
document.addEventListener('submit',async event=>{event.preventDefault();const form=event.target,f=new FormData(form);
  if(form.id==='auth-form'){await signIn(form);return;}
  if(form.id==='filter-form'){sorting=f.get('sort');maxPrice=Number(f.get('max'));$('#modal').close();go('menu');}
  if(form.id==='coupon-form'){const code=f.get('coupon').trim().toUpperCase();const error=checkCoupon(code);if(error)toast(error);else{data.coupon=code;save();render();toast('A little saving, just for you.');}}
  if(form.id==='settings-form'){if(f.get('name').trim().length<2){$('#settings-error').textContent='Please enter a name of at least two characters.';return;}data.profile={...data.profile,name:f.get('name').trim(),email:f.get('email').trim(),phone:f.get('phone').trim()};data.notifications=f.has('notifications');save();render();toast('Your changes are saved.');}
  if(form.id==='address-form'){if(f.get('address').trim().length<8||!f.get('label').trim()){toast('Please enter a label and a complete address.');return;}const id=form.dataset.id||uniqueId();const a={id,label:f.get('label').trim(),address:f.get('address').trim(),instructions:f.get('instructions').trim()};const index=data.addresses.findIndex(a=>a.id===id);if(index>=0)data.addresses[index]=a;else data.addresses.push(a);data.activeAddress=id;save();$('#modal').close();render();toast('Your place is saved.');}
  if(form.id==='checkout-form'){if(!data.cart.length)return;const name=f.get('name').trim(),phone=f.get('phone').trim(),address=data.method==='pickup'?'BiteCraft, Nakasero Road, Kampala':f.get('address').trim();if(name.length<2||address.length<8||phone.replace(/\D/g,'').length<9){$('#checkout-error').textContent='Please enter your name, a valid phone number and a complete address.';return;}const order={id:'BC-'+Date.now().toString(36).toUpperCase()+'-'+crypto.getRandomValues(new Uint8Array(2)).join(''),date:new Date().toISOString(),name,phone,address,note:f.get('note').trim(),items:data.cart.map(i=>({...i})),...totals(data.cart,data.coupon,data.method),coupon:data.coupon,payment:data.payment,method:data.method,stage:0};checkoutDraft=null;data.profile.phone=phone;data.orders.push(order);data.cart=[];data.coupon='';save();go('tracking/'+order.id);toast('Demo order placed. A little joy is on the way.');}
});
$('#modal').addEventListener('click',e=>{if(e.target===$('#modal')){const r=$('#modal').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('#modal').close();}});
document.addEventListener('error',event=>{const img=event.target;if(img.tagName==='IMG'&&img.hasAttribute('data-food-photo')){img.style.visibility='hidden';const wrap=img.closest('.food-photo-wrap,.detail-photo,.hero');if(wrap)wrap.classList.add('photo-unavailable');}},true);
window.addEventListener('hashchange',()=>{if($('#modal').open)$('#modal').close();render();window.scrollTo(0,0);$('#main').focus({preventScroll:true});});
render();
}
