/* ══════════════════════════════════════════════════════════════════════════════
   LongRun LED — support-script.js
   ══════════════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ────────────────────────────────────────────────────────────
     1. SISTEM INTERAKSI TABS (PRE/IN/AFTER-SALES)
     ──────────────────────────────────────────────────────────── */
  const tabTriggers = document.querySelectorAll('.tab-trigger');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const targetPanelId = trigger.getAttribute('data-target');

      // Bersihkan kelas active dari tombol trigger lama
      tabTriggers.forEach(btn => btn.classList.remove('active'));
      // Bersihkan panel aktif lama
      tabPanels.forEach(panel => panel.classList.remove('active'));

      // Aktifkan item yang dipilih user
      trigger.classList.add('active');
      document.getElementById(targetPanelId).classList.add('active');
    });
  });

  /* ────────────────────────────────────────────────────────────
     2. ACCORDION FAQ (BUKA / TUTUP PANEL BERTRANSI)
     ──────────────────────────────────────────────────────────── */
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parentItem = header.parentElement;
      const accordionBody = parentItem.querySelector('.accordion-body');
      
      // Deteksi jika item yang sama di-klik kembali untuk menutup kembali
      const isAlreadyActive = parentItem.classList.contains('active');

      // Opsional: Tutup item akordion lain yang sedang terbuka saat ini
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion-body').style.maxHeight = null;
      });

      if (!isAlreadyActive) {
        parentItem.classList.add('active');
        // Set tinggi maksimal sesuai isi tinggi konten di dalamnya
        accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
      } else {
        parentItem.classList.remove('active');
        accordionBody.style.maxHeight = null;
      }
    });
  });

  /* ────────────────────────────────────────────────────────────
     3. HAMBURGER MENU (MOBILE OVERLAY)
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
     4. DEMO INTERAKSI BAHASA (LANGUAGE SWITCHER)
     ──────────────────────────────────────────────────────────── */
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    let currentLang = 'EN';
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'EN' ? 'ZH' : 'EN';
      langToggle.textContent = currentLang === 'EN' ? 'EN / 中文' : '中文 / EN';
    });
  }
});