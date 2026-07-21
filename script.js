// Inisialisasi AOS (Animate On Scroll) Library
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800, // Durasi animasi dalam milidetik
    once: true,    // Animasi hanya berjalan sekali saat di-scroll
    offset: 100,   // Offset dari layar sebelum animasi dipicu
  });
});