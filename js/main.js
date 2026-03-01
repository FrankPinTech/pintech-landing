// PinTech Landing Page — Interactions

(function () {
  // 1. Hamburger toggle
  var hamburger = document.getElementById('hamburger');
  var navbar = document.getElementById('navbar');
  hamburger.addEventListener('click', function () {
    navbar.classList.toggle('nav-open');
  });

  // Close mobile nav when a link is tapped
  document.querySelectorAll('#navLinks a').forEach(function (link) {
    link.addEventListener('click', function () {
      navbar.classList.remove('nav-open');
    });
  });

  // 2. Navbar scroll effect
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. IntersectionObserver reveal animations
  var animated = document.querySelectorAll('[data-animate]');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    animated.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show everything immediately
    animated.forEach(function (el) { el.classList.add('visible'); });
  }
})();
