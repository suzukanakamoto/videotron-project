/* ═══════════════════════════════════════
   LongRun LED — script.js
   ═══════════════════════════════════════ */

/* ────────────────────────────
   1. HERO — Animated LED Dots
   ──────────────────────────── */
(function initHeroDots() {
  const container = document.getElementById('heroDots');
  if (!container) return;

  const dots = [
    { w: 8,  h: 8,  top: '20%', left: '55%', delay: '0s'   },
    { w: 5,  h: 5,  top: '65%', left: '75%', delay: '.4s'  },
    { w: 12, h: 12, top: '40%', left: '85%', delay: '.8s'  },
    { w: 6,  h: 6,  top: '75%', left: '60%', delay: '1.2s' },
    { w: 9,  h: 9,  top: '30%', left: '92%', delay: '1.6s' },
    { w: 4,  h: 4,  top: '55%', left: '48%', delay: '2s'   },
    { w: 7,  h: 7,  top: '15%', left: '80%', delay: '2.4s' },
    { w: 10, h: 10, top: '50%', left: '70%', delay: '3s'   },
    { w: 5,  h: 5,  top: '80%', left: '88%', delay: '3.4s' },
  ];

  dots.forEach(d => {
    const span = document.createElement('span');
    span.style.cssText = [
      `width:${d.w}px`,
      `height:${d.h}px`,
      `top:${d.top}`,
      `left:${d.left}`,
      `animation-delay:${d.delay}`,
    ].join(';');
    container.appendChild(span);
  });
})();


/* ────────────────────────────
   2. MOBILE — Hamburger Menu
   ──────────────────────────── */
(function initMobileMenu() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close when any mobile nav link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close when clicking outside
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();


/* ────────────────────────────
   3. FILTER — Product Cards
   ──────────────────────────── */
(function initFilter() {
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const cards       = document.querySelectorAll('.product-card');
  const countEl     = document.getElementById('productCount');
  const sectionTitle = document.getElementById('sectionTitle');

  const labels = {
    all:          'All Products',
    fine:         'Fine Pitch',
    commercial:   'Retail & Commercial',
    rental:       'Rental & Stage',
    dooh:         'DOOH',
    'outdoor-cob':'E-PRO Outdoor COB',
    allinone:     'All-in-One Display',
  };

  /**
   * Apply filter and animate cards in
   * @param {string} filterKey
   */
  function applyFilter(filterKey) {
    let visible = 0;

    cards.forEach(card => {
      const match = filterKey === 'all' || card.dataset.category === filterKey;

      if (match) {
        card.classList.remove('hidden');
        // Staggered fade-in animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        setTimeout(() => {
          card.style.transition = 'opacity .3s ease, transform .3s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, visible * 40); // stagger by 40ms per card
        visible++;
      } else {
        card.classList.add('hidden');
        card.style.opacity = '';
        card.style.transform = '';
        card.style.transition = '';
      }
    });

    if (sectionTitle) sectionTitle.textContent = labels[filterKey] || 'Products';
    if (countEl)      countEl.textContent = `${visible} product${visible !== 1 ? 's' : ''}`;
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.dataset.filter);
    });
  });

  // Initialize with total count
  if (countEl) countEl.textContent = `${cards.length} products`;
})();


/* ────────────────────────────
   4. LANGUAGE SWITCHER (demo)
   ──────────────────────────── */
(function initLangSwitcher() {
  const toggle = document.getElementById('langToggle');
  if (!toggle) return;

  const languages = ['EN / 中文', '中文 / EN'];
  let current = 0;

  toggle.addEventListener('click', () => {
    current = (current + 1) % languages.length;
    toggle.textContent = languages[current];
  });
})();


/* ────────────────────────────
   5. STICKY HEADER — shadow on scroll
   ──────────────────────────── */
(function initStickyHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      header.style.boxShadow = entry.isIntersecting
        ? 'none'
        : '0 2px 12px rgba(0,0,0,.08)';
    },
    { rootMargin: `-${getComputedStyle(document.documentElement).getPropertyValue('--nav-h').trim()} 0px 0px 0px` }
  );

  // Observe the hero section
  const hero = document.querySelector('.hero');
  if (hero) observer.observe(hero);
})();


/* ────────────────────────────
   6. SMOOTH SCROLL for anchors
   ──────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ────────────────────────────────────────────────────────────
   OTOMATIS AKTIFKAN TAB FILTER BERDASARKAN HASH URL (#)
   ──────────────────────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  // 1. Ambil tanda hash dari URL (contoh: "#fine")
  const hash = window.location.hash;
  
  if (hash) {
    // 2. Hilangkan tanda '#' untuk mendapatkan nama filternya saja (contoh: "fine")
    const filterValue = hash.substring(1);
    
    // 3. Cari tombol filter yang memiliki data-filter sesuai dengan isi hash
    const targetButton = document.querySelector(`.filter-btn[data-filter="${filterValue}"]`);
    
    if (targetButton) {
      // 4. Jalankan fungsi klik otomatis pada tombol tersebut
      targetButton.click();
      
      // 5. (Opsional) Otomatis scroll layar ke area produk agar user langsung melihat hasilnya
      setTimeout(() => {
        const filterSection = document.querySelector('.filter-section');
        if (filterSection) {
          filterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300); // Diberi sedikit delay agar transisi scroll lebih halus setelah page load
    }
  }
});
