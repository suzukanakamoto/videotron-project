/* ══════════════════════════════════════════════════════════════════════════════
   LongRun LED — script.js (HOMEPAGE LOGIC)
   ══════════════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ────────────────────────────────────────────────────────────
     1. HERO SLIDER LOGIC
     ──────────────────────────────────────────────────────────── */
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.getElementById('nextSlide');
  const prevBtn = document.getElementById('prevSlide');
  const dotsContainer = document.getElementById('sliderDots');
  let currentSlide = 0;
  let slideInterval;

  // Create Dots
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    resetInterval();
  }

  function nextSlide() {
    let newIndex = (currentSlide + 1) % slides.length;
    goToSlide(newIndex);
  }

  function prevSlide() {
    let newIndex = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(newIndex);
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
  }

  // Auto Play
  function startInterval() {
    slideInterval = setInterval(nextSlide, 5000); // Ganti slide tiap 5 detik
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }

  if (slides.length > 0) startInterval();


  /* ────────────────────────────────────────────────────────────
     2. MOBILE MENU & HAMBURGER (SLIDE DARI KANAN)
     ──────────────────────────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });
  }

  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  }


  /* ────────────────────────────────────────────────────────────
     3. SCROLL REVEAL ANIMATION (EFEK MUNCUL SAAT DI SCROLL)
     ──────────────────────────────────────────────────────────── */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Hanya animasi sekali
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Elemen akan muncul jika 15% dari elemen sudah masuk ke layar
  });

  revealElements.forEach(el => revealObserver.observe(el));

});

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.product-grid');
    let autoSlideInterval;

    const startAutoSlide = () => {
      autoSlideInterval = setInterval(() => {
        const card = slider.querySelector('.prod-card');
        if (!card) return;

        // Menghitung jarak geser (lebar card + gap)
        const gap = 30; // Sesuaikan dengan gap di CSS
        const slideAmount = card.offsetWidth + gap;
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

        // Jika sudah sampai paling ujung kanan, kembali ke awal (ujung kiri)
        if (slider.scrollLeft >= maxScrollLeft - 10) {
          slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          slider.scrollBy({ left: slideAmount, behavior: 'smooth' });
        }
      }, 3000); // 3000 ms = 3 detik
    };

    const stopAutoSlide = () => {
      clearInterval(autoSlideInterval);
    };

    // Jalankan auto slide pertama kali
    startAutoSlide();

    // Hentikan auto slide saat pengguna hover atau sentuh layar
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
    slider.addEventListener('touchstart', stopAutoSlide, { passive: true });
    slider.addEventListener('touchend', startAutoSlide, { passive: true });
  });