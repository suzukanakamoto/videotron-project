/* ══════════════════════════════════════════════════════════════════════════════
   Digilight — contact-script.js
   Form Inquiry → WhatsApp
   ══════════════════════════════════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {

  /* ────────────────────────────────────────────────────────────
     1. MOBILE MENU
     ──────────────────────────────────────────────────────────── */

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileClose = document.getElementById("mobileClose");

  // Buka mobile menu
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.add("active");
    });
  }

  // Tutup mobile menu
  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  }

  // Tutup menu jika klik di luar
  document.addEventListener("click", (event) => {

    if (
      mobileMenu &&
      mobileMenu.classList.contains("active")
    ) {
      if (
        !mobileMenu.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        mobileMenu.classList.remove("active");
      }
    }

  });


  /* ────────────────────────────────────────────────────────────
     2. FORM INQUIRY → WHATSAPP
     ──────────────────────────────────────────────────────────── */

  const inquiryForm = document.getElementById("inquiryForm");
  const submitBtn = document.getElementById("submitBtn");

  /*
    Nomor WhatsApp tujuan.

    Format:
    - Gunakan kode negara
    - Jangan menggunakan +
    - Jangan menggunakan spasi
    - Jangan menggunakan tanda -

    +62 899 998 0340
    menjadi:
    628999980340
  */

  const whatsappNumber = "628999980340";


  if (inquiryForm) {

    inquiryForm.addEventListener("submit", (e) => {

      // Mencegah form reload halaman
      e.preventDefault();


      /* ─────────────────────────────────────────────
         Ambil data dari form
         ───────────────────────────────────────────── */

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const company = document.getElementById("company").value.trim();
      const message = document.getElementById("message").value.trim();


      /* ─────────────────────────────────────────────
         Validasi
         ───────────────────────────────────────────── */

      if (!name || !email || !message) {

        alert(
          "Please complete all required fields before sending your inquiry."
        );

        return;
      }


      /* ─────────────────────────────────────────────
         Loading state tombol
         ───────────────────────────────────────────── */

      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = `
        <span>Preparing WhatsApp...</span>
        <i class="fas fa-spinner fa-spin"></i>
      `;

      submitBtn.style.background = "var(--muted)";
      submitBtn.style.pointerEvents = "none";


      /* ─────────────────────────────────────────────
         Membuat isi pesan WhatsApp
         ───────────────────────────────────────────── */

      const whatsappMessage = `
Hello Digilight Team,

I would like to request a custom quotation.

━━━━━━━━━━━━━━━━━━━━━━
CUSTOM QUOTE REQUEST
━━━━━━━━━━━━━━━━━━━━━━

Full Name:
${name}

Email Address:
${email}

Company Name:
${company || "Not provided"}

Project Details / Message:
${message}

━━━━━━━━━━━━━━━━━━━━━━

I look forward to receiving your response.

Thank you.
Digilight Website Inquiry
      `.trim();


      /* ─────────────────────────────────────────────
         Encode message agar aman digunakan di URL
         ───────────────────────────────────────────── */

      const encodedMessage = encodeURIComponent(whatsappMessage);


      /*
        URL WhatsApp

        https://wa.me/628999980340?text=...
      */

      const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


      /* ─────────────────────────────────────────────
         Feedback sebelum redirect
         ───────────────────────────────────────────── */

      setTimeout(() => {

        submitBtn.innerHTML = `
          <span>Opening WhatsApp...</span>
          <i class="fab fa-whatsapp"></i>
        `;

        submitBtn.style.background = "#25D366";


        /*
          Redirect ke WhatsApp
        */

        window.location.href = whatsappURL;


      }, 700);

    });

  }

});