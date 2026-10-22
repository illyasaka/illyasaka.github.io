(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.textContent = open ? '×' : '☰';
    nav.classList.toggle('open', open);
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open'); menu.setAttribute('aria-expanded','false');
    menu.setAttribute('aria-label','Open menu'); menu.textContent='☰';
  }));
  document.addEventListener('keydown', event => {
    if(event.key==='Escape' && menu?.getAttribute('aria-expanded')==='true') menu.click();
  });
  // Existing demo logic remains in the supplied index.js. Observe its state only.
  const start = document.getElementById('btnStart');
  const stage = document.getElementById('stage');
  if(start && stage) {
    const update = () => stage.classList.toggle('is-running', start.disabled);
    new MutationObserver(update).observe(start,{attributes:true,attributeFilter:['disabled']});
    update();
  }
  const navLinks = [...document.querySelectorAll('nav a')];
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if(entry.isIntersecting) navLinks.forEach(a => {
      const active = a.getAttribute('href') === '#'+entry.target.id;
      a.classList.toggle('active',active);
      if(active) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current');
    });
  }), {rootMargin:'-20% 0px -55% 0px'});
  document.querySelectorAll('#home,#about,#demo,#editions,#links').forEach(s=>observer.observe(s));
})();
