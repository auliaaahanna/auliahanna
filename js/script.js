(() => {
  document.documentElement.classList.add('js-enabled');
  const nav = document.querySelector('.navbar');
  const progress = document.querySelector('.scroll-progress');
  const topButton = document.querySelector('.back-top');
  const updateScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 18);
    if (topButton) topButton.classList.toggle('visible', y > 420);
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${max > 0 ? y / max * 100 : 0}%`;
    }
  };
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(() => { updateScroll(); ticking = false; }); ticking = true; }
  }, { passive: true });
  updateScroll();

  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    if (link.dataset.page === current) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
  document.querySelectorAll('.navbar-collapse .nav-link, .navbar-collapse .connect-btn').forEach(link => {
    link.addEventListener('click', () => {
      const collapse = document.querySelector('.navbar-collapse.show');
      if (collapse && window.bootstrap) window.bootstrap.Collapse.getOrCreateInstance(collapse).hide();
    });
  });
  document.querySelectorAll('.site-footer').forEach(footer => footer.classList.add('reveal'));
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach((item, index) => { item.style.setProperty('--i', index % 5); observer.observe(item); });
  } else revealItems.forEach(item => item.classList.add('is-visible'));
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  if (topButton) topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const copyButton = document.querySelector('[data-copy-email]');
  if (copyButton) copyButton.addEventListener('click', async () => {
    const email = copyButton.dataset.copyEmail;
    const feedback = document.querySelector('#copy-feedback');
    try {
      await navigator.clipboard.writeText(email);
      if (feedback) feedback.textContent = 'Email berhasil disalin.';
    } catch (_) {
      if (feedback) feedback.textContent = `Salin email ini: ${email}`;
    }
  });
  const form = document.querySelector('#contact-form');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    const feedback = form.querySelector('.form-feedback');
    if (!form.reportValidity()) {
      if (feedback) feedback.textContent = 'Periksa kembali nama, email, dan pesan Anda.';
      return;
    }
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      form.elements.email.setCustomValidity('Masukkan alamat email yang valid.');
      form.elements.email.reportValidity();
      form.elements.email.addEventListener('input', () => form.elements.email.setCustomValidity(''), { once: true });
      if (feedback) feedback.textContent = 'Format email belum valid.';
      return;
    }
    const recipient = form.dataset.recipient || 'email-anda@example.com';
    const subject = encodeURIComponent(`Pesan dari ${name}`);
    const body = encodeURIComponent(`${message}\n\nDikirim oleh: ${name}\nEmail: ${email}`);
    if (feedback) feedback.textContent = 'Aplikasi email akan terbuka untuk mengirim pesan. Website ini tidak mengirim data ke server.';
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
})();
