(function(){
  const path=location.pathname.split('/').pop()||'index.html';
  const pages=[['index.html','HOME'],['about.html','ABOUT'],['contact.html','CONTACT'],['merch.html','MERCH']];
  const header=document.getElementById('site-header');
  if(header){
    header.className='site-header';
    header.innerHTML=`<div class="header-inner"><a class="brand" href="index.html"><img class="brand-logo" src="assets/images/logo.jpg" alt="AstroNerve Gaming"></a><button class="mobile-toggle" aria-label="Open navigation">☰</button><nav class="nav">${pages.map(([href,label])=>`<a href="${href}" class="${path===href?'active':''}">${label}</a>`).join('')}</nav><div class="social-mini"><span>YT</span><span>DS</span><span>TK</span></div></div>`;
    const toggle=header.querySelector('.mobile-toggle'); toggle.addEventListener('click',()=>header.classList.toggle('open'));
  }
  const footer=document.getElementById('site-footer');
  if(footer) footer.innerHTML=`<footer class="site-footer"><div class="container footer-inner"><span>© ${new Date().getFullYear()} AstroNerve Gaming. All rights reserved.</span><span>Call of Duty Mobile is a trademark of Activision Publishing, Inc. This site is an independent fan/gaming project.</span></div></footer>`;
  const form=document.getElementById('contactForm');
  if(form) form.addEventListener('submit',e=>{e.preventDefault();document.getElementById('formStatus').textContent='Message ready — connect this form to your preferred backend/email service.';form.reset();});
  let cart=JSON.parse(localStorage.getItem('astronerveCart')||'[]');
  document.querySelectorAll('.add-cart').forEach(btn=>btn.addEventListener('click',()=>{cart.push({product:btn.dataset.product,price:Number(btn.dataset.price)});localStorage.setItem('astronerveCart',JSON.stringify(cart));btn.textContent='ADDED ✓';setTimeout(()=>btn.textContent='ADD TO CART',900);}));
})();
