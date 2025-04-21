const toggle = document.getElementById('modeToggle');
const body = document.body;

// Klik tombol: toggle kelas light-mode
toggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');

  // Simpan ke localStorage
  if (body.classList.contains('light-mode')) {
    localStorage.setItem('mode', 'light');
  } else {
    localStorage.setItem('mode', 'dark');
  }
});

// Saat halaman dimuat: cek preferensi dari localStorage
if (localStorage.getItem('mode') === 'light') {
  body.classList.add('light-mode');
}
