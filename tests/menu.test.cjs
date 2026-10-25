const test = require('node:test');
const assert = require('node:assert/strict');
const { MENU, CATEGORIES, totals, filterMenu, escapeHTML, DEFAULT_PHOTO } = require('../app.js');
const item = (id,qty=1,size='Regular')=>({id,qty,size});

test('catalogue has unique IDs, valid prices and an item for every category',()=>{
  assert.equal(new Set(MENU.map(p=>p.id)).size,MENU.length);
  assert.ok(MENU.length>=40);
  for(const p of MENU) assert.ok(Number.isInteger(p.price)&&p.price>0);
  for(const [category] of CATEGORIES.slice(1)) assert.ok(MENU.some(p=>p.category===category));
});
test('cart totals include quantities, size and delivery',()=>{
  assert.deepEqual(totals([item('burger',2,'Large'),item('orange')],''),{subtotal:87000,discount:0,delivery:3500,total:90500});
  assert.equal(totals([item('burger')],'','pickup').total,35000);
  assert.equal(totals([], '').total,0);
});
test('welcome discount applies at the threshold and excludes delivery',()=>{
  assert.equal(totals([item('platter')],'BITEWELCOME').discount,0);
  assert.equal(totals([item('platter'),item('orange')],'BITEWELCOME').total,27500);
});
test('platter offer discounts only eligible items including selected size',()=>{
  const result=totals([item('platter',2,'Large'),item('burger')],'PLATTER30');
  assert.equal(result.discount,16200);
  assert.equal(result.total,76300);
  assert.equal(totals([item('burger')],'PLATTER30').discount,0);
});
test('search, category, diet type, budget and sorting compose correctly',()=>{
  assert.equal(filterMenu({category:'Drinks',query:'coffee'}).length,2);
  assert.deepEqual(filterMenu({category:'Pizza',type:'Healthy'}).map(p=>p.id),['veggie-pizza']);
  const list=filterMenu({category:'Drinks',max:10000,sort:'price-low'});
  assert.ok(list.every(p=>p.price<=10000));
  assert.equal(list[0].id,'water');
  assert.equal(filterMenu({query:'nothing like this'}).length,0);
});
test('user text is escaped and default photo is Sanyu',()=>{
  assert.equal(escapeHTML('<img src=x onerror="alert(1)">'), '&lt;img src=x onerror=&quot;alert(1)&quot;&gt;');
  assert.equal(DEFAULT_PHOTO,'assets/sanyu-judith.jpg');
});

test('free delivery badge waives the entire order fee and survives mixed carts',()=>{
  assert.equal(totals([item('pizza')],'').delivery,0);
  assert.equal(totals([item('pizza'),item('burger')],'').total,67000);
  assert.equal(totals([item('burger')],'').delivery,3500);
  assert.equal(totals([item('pizza')],'BITEWELCOME').total,27000);
});
