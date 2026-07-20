/* ── 1. Hero animated LED dots ── */
(function() {
  const container = document.getElementById('heroDots');
  const configs = [
    {w:8,  h:8,  top:'18%', left:'55%', delay:'0s'},
    {w:5,  h:5,  top:'62%', left:'74%', delay:'.5s'},
    {w:11, h:11, top:'38%', left:'84%', delay:'.9s'},
    {w:6,  h:6,  top:'72%', left:'58%', delay:'1.3s'},
    {w:9,  h:9,  top:'28%', left:'91%', delay:'1.7s'},
    {w:4,  h:4,  top:'52%', left:'47%', delay:'2.1s'},
    {w:7,  h:7,  top:'14%', left:'78%', delay:'2.5s'},
    {w:10, h:10, top:'48%', left:'68%', delay:'3s'},
  ];
  configs.forEach(c => {
    const s = document.createElement('span');
    s.style.cssText = `width:${c.w}px;height:${c.h}px;top:${c.top};left:${c.left};animation-delay:${c.delay}`;
    container.appendChild(s);
  });
})();

/* ── 2. LED cell grids for video thumbnails ── */
(function buildLedGrids() {
  const patterns = [
    [1,0,1,0,0,1, 0,1,0,1,1,0, 1,1,0,0,1,0, 0,0,1,1,0,1],
    [0,1,0,1,0,0, 1,0,1,0,1,1, 0,1,1,0,0,1, 1,0,0,1,1,0],
    [1,0,0,1,1,0, 0,1,1,0,0,1, 1,1,0,1,0,0, 0,0,1,0,1,1],
    [0,0,1,0,1,1, 1,1,0,1,0,0, 0,1,0,0,1,1, 1,0,1,1,0,0],
    [1,1,0,0,1,0, 0,0,1,1,0,1, 1,0,1,0,0,1, 0,1,0,1,1,0],
    [0,1,1,0,0,1, 1,0,0,1,1,0, 0,1,0,0,1,0, 1,1,0,1,0,1],
  ];
  for (let i = 1; i <= 6; i++) {
    const grid = document.getElementById('ledGrid' + i);
    if (!grid) continue;
    const pat = patterns[(i-1) % patterns.length];
    for (let j = 0; j < 24; j++) {
      const cell = document.createElement('div');
      cell.className = 'vc-led-cell' + (pat[j] ? (j % 3 === 0 ? ' lit' : ' lit-b') : '');
      grid.appendChild(cell);
    }
  }
})();

/* ── 3. Mobile hamburger ── */
(function() {
  const ham = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!ham || !menu) return;

  ham.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    ham.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('.mm-trigger').forEach(trigger => {
    if (trigger.tagName === 'BUTTON') {
      trigger.addEventListener('click', () => {
        const panel = trigger.nextElementSibling;
        const isOpen = panel.classList.toggle('open');
        trigger.classList.toggle('open', isOpen);
      });
    }
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      ham.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', e => {
    if (!ham.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
      ham.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
})();

/* ── 4. Sticky tab active state on scroll ── */
(function() {
  const tabs   = document.querySelectorAll('.stab');
  const sections = ['page1','page2','page3'];
  const NAV_OFFSET = 72 + 52 + 10; // header + tabs bar + buffer

  function updateActiveTab() {
    let current = sections[0];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - NAV_OFFSET) current = id;
    });
    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.section === current);
    });
  }

  window.addEventListener('scroll', updateActiveTab, { passive: true });
  updateActiveTab();

  // Smooth scroll with offset when clicking tabs
  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(tab.dataset.section);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET + 4;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ── 5. Scroll-triggered fade-up ── */
(function() {
  const items = document.querySelectorAll('.fade-up');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  items.forEach(el => observer.observe(el));
})();

/* ── 6. Counter animation ── */
(function() {
  const counters = document.querySelectorAll('[data-count]');
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1400;
      const start = performance.now();

      // Don't animate text-only counters (24/7, 2h, 5+)
      if (isNaN(target)) return;

      function tick(now) {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(ease * target) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();

/* ── 7. Video modal ── */
function openVideoModal(card) {
  const title = card.dataset.title || '';
  const desc  = card.dataset.desc  || '';
  document.getElementById('vmTitle').textContent = title;
  document.getElementById('vmDesc').textContent  = desc;
  const modal = document.getElementById('videoModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  document.getElementById('videoModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('videoModal').addEventListener('click', function(e) {
  if (e.target === this) closeVideoModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeVideoModal();
});