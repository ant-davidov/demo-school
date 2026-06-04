const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    menuButton.classList.toggle('is-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      mobileNav.classList.remove('is-open');
      menuButton.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
}

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

revealElements.forEach((element) => revealObserver.observe(element));

const demoTabs = document.querySelectorAll('[data-demo-tab]');
const demoPanels = document.querySelectorAll('[data-demo-panel]');

demoTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const selected = tab.getAttribute('data-demo-tab');

    demoTabs.forEach((item) => {
      item.classList.toggle('is-active', item === tab);
    });

    demoPanels.forEach((panel) => {
      panel.classList.toggle('is-active', panel.getAttribute('data-demo-panel') === selected);
    });
  });
});
