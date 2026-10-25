const test=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
const {webcrypto}=require('node:crypto');

// Exercise application events without a network or browser dependency.
function harness(){
  const storage=new Map(),events={},nodes=new Map();
  function node(selector){if(!nodes.has(selector))nodes.set(selector,{innerHTML:'',textContent:'',open:false,classList:{add(){},remove(){}},focus(){},addEventListener(){},insertAdjacentHTML(){},close(){this.open=false;},showModal(){this.open=true;}});return nodes.get(selector);}
  const ctx={console,crypto:webcrypto,TextEncoder,Uint8Array,Date,Math,Intl,URL,setTimeout:()=>0,clearTimeout(){},requestAnimationFrame:fn=>fn(),scrollY:0,
    localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},location:{hash:''},
    FormData:class{constructor(form){this.values=form.values;}get(k){return this.values[k]??null;}has(k){return Object.hasOwn(this.values,k);}},
    document:{querySelector:node,querySelectorAll:()=>[],addEventListener:(name,handler)=>events[name]=handler},window:{addEventListener:(name,handler)=>events[name]=handler,scrollTo(){}}};
  vm.createContext(ctx);vm.runInContext(fs.readFileSync(require.resolve('../app.js'),'utf8'),ctx);
  const submit=async(mode,values)=>{const button={};await events.submit({preventDefault(){},target:{id:'auth-form',dataset:{mode},values,querySelector:()=>button}});};
  const click=dataset=>events.click({preventDefault(){},target:{closest:selector=>selector==='button'?{dataset}:null}});
  return {storage,nodes,node,submit,click,events,ctx};
}
test('new accounts inherit Sanyu photo; accounts and carts stay isolated',async()=>{
  const h=harness();
  await h.submit('signup',{name:'Student One',email:'one@example.test',password:'DemoOnly123!'});
  const one=JSON.parse(h.storage.get('bitecraft.session'));
  const oneData=JSON.parse(h.storage.get('bitecraft.data.'+one));
  assert.equal(oneData.profile.name,'Student One');
  assert.equal(oneData.profile.photo,'assets/sanyu-judith.jpg');
  h.click({add:'burger'});
  assert.equal(JSON.parse(h.storage.get('bitecraft.data.'+one)).cart.length,1);
  h.click({action:'logout'});
  await h.submit('signup',{name:'Student Two',email:'two@example.test',password:'AnotherDemo123!'});
  const two=JSON.parse(h.storage.get('bitecraft.session'));
  assert.notEqual(one,two);
  const twoData=JSON.parse(h.storage.get('bitecraft.data.'+two));
  assert.equal(twoData.profile.photo,'assets/sanyu-judith.jpg');
  assert.equal(twoData.cart.length,0);
  h.click({action:'logout'});
  await h.submit('login',{email:'one@example.test',password:'DemoOnly123!'});
  assert.equal(JSON.parse(h.storage.get('bitecraft.session')),one);
  assert.equal(JSON.parse(h.storage.get('bitecraft.data.'+one)).cart.length,1);
  const accounts=JSON.parse(h.storage.get('bitecraft.accounts'));
  assert.ok(accounts.every(a=>a.hash.length===64&&a.salt.length===16));
  assert.ok(!h.storage.get('bitecraft.accounts').includes('DemoOnly123!'));
});
test('wrong passwords and duplicate emails are rejected',async()=>{
  const h=harness();
  await h.submit('signup',{name:'Sanyu Test',email:'sanyu@example.test',password:'DemoOnly123!'});
  h.click({action:'logout'});
  await h.submit('login',{email:'sanyu@example.test',password:'WrongPassword!'});
  assert.match(h.node('#auth-error').textContent,/incorrect/);
  assert.equal(JSON.parse(h.storage.get('bitecraft.session')),null);
  await h.submit('signup',{name:'Sanyu Again',email:'SANYU@example.test',password:'DemoOnly123!'});
  assert.match(h.node('#auth-error').textContent,/already has an account/);
  assert.equal(JSON.parse(h.storage.get('bitecraft.accounts')).length,1);
});
test('non-secure previews can still add to cart without randomUUID',()=>{
  const h=harness();h.ctx.crypto={getRandomValues:webcrypto.getRandomValues.bind(webcrypto)};
  h.click({add:'orange'});
  assert.equal(JSON.parse(h.storage.get('bitecraft.data.guest')).cart[0].id,'orange');
});
