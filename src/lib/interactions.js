import 'preline';
import 'smoothscroll-for-websites';
import { initializeSliders } from './sliders.js';
import { initializeGalleries } from './gallery.js';

export function initializeInteractions() {
  const destroySliders = initializeSliders();
  const destroyGalleries = initializeGalleries();
  window.HSStaticMethods?.autoInit();

  const stickyNav = document.querySelector('.nav-sticky');
  const navbar = document.querySelector('#navbar');
  const shadow = 'shadow-[0_8px_30px_-5px_rgba(0,0,0,0.1)]';
  const onScroll = () => {
    stickyNav?.classList.toggle('nav-sticky-on', window.scrollY >= 100);
    navbar?.classList.toggle(shadow, window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const current = window.location.pathname.split('/').pop() || 'index.html';
  document
    .querySelectorAll('#navbar a[href], #offcanvasSidebar ul a[href]')
    .forEach((link) => {
      const href = link.getAttribute('href');
      link.classList.toggle(
        'active',
        href === current || href === `${current}.html`,
      );
    });

  return () => {
    window.removeEventListener('scroll', onScroll);
    destroySliders();
    destroyGalleries();
  };
}
