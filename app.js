
const STORE={
  name:"SefintiStore",
  whatsapp:"2126XXXXXXXX", // عدّل رقمك الدولي بدون +
  currency:"MAD"
};
function money(x){try{return new Intl.NumberFormat('ar-MA',{style:'currency',currency:STORE.currency}).format(x);}catch(e){return x+' '+STORE.currency}}
const PRODUCTS=[
 {id:'p1',title:'مذكرة جلدية (A5)',desc:'صفحات كريمية للتخطيط اليومي.',price:89,image:'https://picsum.photos/seed/a/800'},
 {id:'p2',title:'شمعة عطرية - خشب الصندل',desc:'رائحة هادئة للتركيز.',price:79,image:'https://picsum.photos/seed/b/800'},
 {id:'p3',title:'كوب سيراميك مات',desc:'ملمس ناعم وأنيق.',price:59,image:'https://picsum.photos/seed/c/800'}
];
function productCard(p){
  const el=document.createElement('div'); el.className='card';
  el.innerHTML=`<img src="${p.image}" alt="${p.title}"><div class="info">
  <h3>${p.title}</h3><p class="note">${p.desc}</p><div class="price">${money(p.price)}</div>
  <button class="btn">اطلب عبر واتساب</button></div>`;
  el.querySelector('.btn').onclick=()=>{
    const msg=encodeURIComponent(`مرحبًا، أريد ${p.title} (${p.price} ${STORE.currency}).`);
    window.open(`https://wa.me/${STORE.whatsapp}?text=${msg}`,'_blank');
  };
  return el;
}
function fillGrid(id, items){
  const root=document.getElementById(id); if(!root) return;
  root.innerHTML=''; items.forEach(p=>root.appendChild(productCard(p)));
}
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.year').forEach(s=>s.textContent=new Date().getFullYear());
  fillGrid('grid-home', PRODUCTS.slice(0,3));
  fillGrid('grid-products', PRODUCTS);
  const wa=document.getElementById('wa'); if(wa) wa.href=`https://wa.me/${STORE.whatsapp}`;
});
