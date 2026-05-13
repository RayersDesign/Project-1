// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');
hamburger.addEventListener('click', () => {
  const open = navMobile.style.display === 'flex';
  navMobile.style.display = open ? 'none' : 'flex';
});
document.querySelectorAll('.nav-mobile a').forEach(a => {
  a.addEventListener('click', () => { navMobile.style.display = 'none'; });
});

// Wishlist toggle
document.querySelectorAll('.wishlist').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    btn.textContent = btn.textContent === '♡' ? '♥' : '♡';
    btn.style.color = btn.textContent === '♥' ? '#e74c3c' : '';
  });
});

// Newsletter
document.getElementById('nlForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const input = e.target.querySelector('input');
  btn.textContent = '✓ JOINED';
  input.value = '';
  setTimeout(() => { btn.textContent = 'JOIN'; }, 3000);
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.product-card, .why-card, .about-grid, .scorecard, .nl-inner'
).forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});
