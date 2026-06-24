/* ══════════════════════════════════════════════════════════════════════════════
   LongRun LED — contact-script.js
   ══════════════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ────────────────────────────────────────────────────────────
     1. SISTEM MOBILE MENU (SLIDE DARI KANAN)
     ──────────────────────────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');

  // Buka Menu
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });
  }

  // Tutup Menu dengan tombol X
  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  }

  // Tutup Menu jika user klik area kosong di luar menu
  document.addEventListener('click', (event) => {
    if (mobileMenu && mobileMenu.classList.contains('active')) {
      if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
        mobileMenu.classList.remove('active');
      }
    }
  });


  /* ────────────────────────────────────────────────────────────
     2. SIMULASI INTERAKSI PENGIRIMAN FORMULIR
     ──────────────────────────────────────────────────────────── */
  const inquiryForm = document.getElementById('inquiryForm');
  const submitBtn = document.getElementById('submitBtn');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Mencegah reload halaman

      // Ubah state tombol menjadi loading
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>`;
      submitBtn.style.background = 'var(--muted)';
      submitBtn.style.pointerEvents = 'none';

      // Simulasi proses delay server (1.5 detik)
      setTimeout(() => {
        // Tampilkan feedback sukses
        submitBtn.innerHTML = `<span>Message Sent!</span> <i class="fas fa-check-circle"></i>`;
        submitBtn.style.background = '#10b981'; // Warna Hijau Success
        
        // Reset form
        inquiryForm.reset();

        // Kembalikan tombol ke keadaan semula setelah 3 detik
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = 'var(--accent)';
          submitBtn.style.pointerEvents = 'auto';
        }, 3000);

      }, 1500);
    });
  }

});