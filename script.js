const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const contactForm = document.querySelector('[data-contact-form]');
const formStatus = document.querySelector('[data-form-status]');

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 18);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const closeNav = () => {
  if (!navToggle || !nav) return;
  navToggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
  document.body.classList.remove('nav-open');
};

navToggle?.addEventListener('click', () => {
  const shouldOpen = navToggle.getAttribute('aria-expanded') !== 'true';
  navToggle.setAttribute('aria-expanded', String(shouldOpen));
  nav?.classList.toggle('open', shouldOpen);
  document.body.classList.toggle('nav-open', shouldOpen);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeNav();
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('[data-reveal]');

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('revealed'));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -45px' },
  );
  revealItems.forEach((item) => revealObserver.observe(item));
}

document.querySelector('[data-year]').textContent = new Date().getFullYear();

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) return;

  const data = new FormData(contactForm);
  const firstName = String(data.get('firstName')).trim();
  const lastName = String(data.get('lastName')).trim();
  const email = String(data.get('email')).trim();
  const service = String(data.get('service')).trim();
  const message = String(data.get('message')).trim();

  const subject = encodeURIComponent(`Accounting Buzz inquiry — ${service}`);
  const body = encodeURIComponent(
    `Hi Accounting Buzz,\n\nI'm interested in ${service}.\n\n${message}\n\nName: ${firstName} ${lastName}\nEmail: ${email}`,
  );

  formStatus.textContent = 'Your email app should open with the details filled in.';
  window.location.href = `mailto:support@accountingbuzz.com?subject=${subject}&body=${body}`;
});
