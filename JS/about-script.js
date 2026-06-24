/* ══════════════════════════════════════════════════════════════════════════════
   LongRun LED — about-script.js
   ══════════════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ────────────────────────────────────────────────────────────
     1. SCROLL ANIMATION (INTERSECTION OBSERVER)
     ──────────────────────────────────────────────────────────── */
  // Mendeteksi elemen dengan class fade-in-up atau fade-in-left
  const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Animasi dimulai saat 15% elemen terlihat di layar
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Memeriksa jika elemen tersebut adalah counter angka
        const counters = entry.target.querySelectorAll('.counter');
        if (counters.length > 0) {
          runCounters(counters);
        }

        observer.unobserve(entry.target); // Animasi hanya berjalan 1 kali
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));


  /* ────────────────────────────────────────────────────────────
     2. NUMBER COUNTER ANIMATION (ANIMASI ANGKA STATISTIK)
     ──────────────────────────────────────────────────────────── */
  function runCounters(counters) {
    counters.forEach(counter => {
      counter.innerText = '0';
      
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        
        // Kecepatan hitungan (semakin kecil pembagi, semakin cepat)
        const increment = target / 50; 

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCounter, 30);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
  }

  /* ────────────────────────────────────────────────────────────
     3. HAMBURGER MENU (MOBILE)
     ──────────────────────────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isExpanded = mobileMenu.style.display === 'block';
      mobileMenu.style.display = isExpanded ? 'none' : 'block';
    });
  }

  /* ────────────────────────────────────────────────────────────
     4. SMOOTH SCROLL UNTUK DROPDOWN "ABOUT US"
     ──────────────────────────────────────────────────────────── */
  document.querySelectorAll('.dropdown a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Scroll dengan penyesuaian tinggi sticky header (70px)
        window.scrollTo({
          top: targetElement.offsetTop - 70, 
          behavior: 'smooth'
        });
      }
    });
  });

});