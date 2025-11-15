// AOS initialization
AOS.init({ once: true, duration: 800, offset: 80 });

// Preloader: hide after page assets loaded (or 900ms minimum)
const preloader = document.getElementById('preloader');
window.addEventListener('load', () => {
  // keep at least 900ms for the effect
  setTimeout(() => {
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
    preloader.setAttribute('aria-hidden', 'true');
  }, 900);
});

// Mobile menu toggle
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
mobileBtn?.addEventListener('click', () => mobileNav.classList.toggle('hidden'));

// Page overlay (transition) logic
const pageOverlay = document.getElementById('pageOverlay');
const links = document.querySelectorAll('[data-link], .nav-link, #mobileNav a');

function showOverlay() {
  pageOverlay.classList.add('show');
}

function hideOverlay() {
  pageOverlay.classList.remove('show');
}

// When clicking a nav link: animate out, then change hash, then animate in
links.forEach(el => {
  el.addEventListener('click', (e) => {
    const href = el.getAttribute('href') || el.dataset.href;
    if (!href || !href.startsWith('#')) return; // external link or no hash

    e.preventDefault();
    showOverlay();

    // small delay to let overlay appear
    setTimeout(() => {
      location.hash = href;
      // scroll to top of section smoothly
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // wait, then hide overlay
      setTimeout(() => {
        hideOverlay();
        // re-run AOS to animate visible elements
        AOS.refreshHard();
      }, 520);
    }, 280);
  });
});

// Highlight active nav link on hash change
const navLinks = document.querySelectorAll('.nav-link');

function highlightNav() {
  const current = location.hash || '#home';
  navLinks.forEach(a => {
    const target = a.getAttribute('href') || '#home';
    a.classList.remove('nav-active');
    a.classList.remove('text-white');
    if (current === target) {
      a.classList.add('nav-active');
      a.classList.add('text-white');
    } else {
      a.classList.add('text-gray-300');
    }
  });
}

window.addEventListener('hashchange', () => { 
  highlightNav(); 
  AOS.refresh(); 
});

window.addEventListener('load', () => {
  if (!location.hash) location.hash = '#home';
  highlightNav();
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// Close mobile nav when clicking inside
mobileNav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileNav.classList.add('hidden'));
});