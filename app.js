const PRODUCTS={
 hoodie:{id:'hoodie',name:'HOODIE',price:499,img:'assets/merch_card_hoodie.jpg'},
 tshirt:{id:'tshirt',name:'T-SHIRT',price:299,img:'assets/merch_card_tshirt.jpg'},
 cap:{id:'cap',name:'CAP',price:199,img:'assets/merch_card_cap.jpg'},
 mug:{id:'mug',name:'MUG',price:149,img:'assets/merch_card_mug.jpg'}
};
let cart=JSON.parse(localStorage.getItem('astronerve_cart')||'{}');
function saveCart(){localStorage.setItem('astronerve_cart',JSON.stringify(cart));renderCart()}
function addToCart(id){if(!PRODUCTS[id])return;cart[id]=(cart[id]||0)+1;saveCart();openCart()}
function removeFromCart(id){delete cart[id];saveCart()}
function changeQty(id,d){cart[id]=(cart[id]||0)+d;if(cart[id]<=0)delete cart[id];saveCart()}
function cartCount(){return Object.values(cart).reduce((a,b)=>a+b,0)}
function money(n){return 'R'+n.toLocaleString('en-ZA')}
function renderCart(){
 const box=document.querySelector('.cart-items'); if(!box)return;
 const ids=Object.keys(cart);
 document.querySelectorAll('[data-cart-count]').forEach(e=>e.textContent=cartCount());
 if(!ids.length){box.innerHTML='<div class="empty">Your cart is empty.<br>Add some squad gear from the merch page.</div>';document.querySelector('[data-total]').textContent=money(0);return}
 let total=0;
 box.innerHTML=ids.map(id=>{const p=PRODUCTS[id],q=cart[id];total+=p.price*q;return `<div class="cart-item"><img src="${p.img}" alt="${p.name}"><div><strong>${p.name}</strong><br><small>${money(p.price)} each</small><div class="qty"><button onclick="changeQty('${id}',-1)">−</button><span>${q}</span><button onclick="changeQty('${id}',1)">+</button></div></div><button class="remove" onclick="removeFromCart('${id}')">Remove</button></div>`}).join('');
 document.querySelector('[data-total]').textContent=money(total)
}
function openCart(){document.querySelector('.drawer')?.classList.add('open');renderCart()}
function closeCart(){document.querySelector('.drawer')?.classList.remove('open')}
function initCart(){
 document.body.insertAdjacentHTML('beforeend',`<button class="cart-fab" onclick="openCart()">CART <span>(<b data-cart-count>0</b>)</span></button><aside class="drawer"><button class="close" onclick="closeCart()">×</button><h2>YOUR CART</h2><div class="cart-items"></div><div class="cart-total">TOTAL <span style="float:right" data-total>R0</span></div><button class="checkout" onclick="checkout()">CHECKOUT</button></aside>`);renderCart()
}
function checkout(){
 const n=cartCount(); if(!n){alert('Your cart is empty.');return}
 alert('Demo checkout: '+n+' item(s) are ready. Connect your preferred payment provider here.');
}
function login(e){e.preventDefault();const email=document.querySelector('#email').value.trim();const pass=document.querySelector('#password').value;if(!email||!pass){setStatus('Please enter your email and password.');return}localStorage.setItem('astronerve_user',JSON.stringify({email}));setStatus('Login successful. Welcome back, '+email+'.');}
function signup(e){e.preventDefault();const email=document.querySelector('#email').value.trim();const pass=document.querySelector('#password').value;if(!email||pass.length<6){setStatus('Use a valid email and a password of at least 6 characters.');return}localStorage.setItem('astronerve_user',JSON.stringify({email}));setStatus('Account created. You are now signed in.');}
function googleLogin(){setStatus('Google authentication is ready for OAuth credentials. Add your Google Client ID/provider configuration to enable live Google sign-in.');}
function setStatus(t){const el=document.querySelector('.status');if(el)el.textContent=t}
function contactSubmit(e){e.preventDefault();const f=e.currentTarget;const status=f.querySelector('.form-status');status.textContent='Message captured locally. Connect your email/API endpoint to send it for real.';f.reset()}
function init(){
 initCart();
 const page=(location.pathname.split('/').pop()||'index.html').toLowerCase();
 document.querySelectorAll('.nav .link').forEach(link=>{
   const target=(link.getAttribute('href')||'').split('/').pop().toLowerCase();
   if(target===page) link.classList.add('active');
 });
 const f=document.querySelector('.contact-form');
 if(f)f.addEventListener('submit',contactSubmit);
}
document.addEventListener('DOMContentLoaded',init);
