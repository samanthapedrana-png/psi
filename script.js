const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuClose = document.querySelector('.menu-close');
const menuLinks = document.querySelectorAll('.mobile-menu a');

function setMenu(open) {
  mobileMenu.classList.toggle('open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  menuToggle.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
}

menuToggle.addEventListener('click', () => setMenu(true));
menuClose.addEventListener('click', () => setMenu(false));
menuLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));

document.querySelector('footer form').addEventListener('submit', (event) => {
  event.preventDefault();
});
const cookieBanner = document.querySelector('.cookie-banner');
const cookieButtons = document.querySelectorAll('[data-cookie-choice]');
const cookieChoice = localStorage.getItem('privacy-cookie-notice');

if (cookieBanner && !cookieChoice) {
  cookieBanner.hidden = false;
}

cookieButtons.forEach((button) => {
  button.addEventListener('click', () => {
       localStorage.setItem('privacy-cookie-notice', button.dataset.cookieChoice);
    cookieBanner.hidden = true;
  });
});
<script>
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventListener('click', () => {

    const isOpen = navMenu.classList.toggle('open');

    menuToggle.classList.toggle('open', isOpen);

    menuToggle.setAttribute('aria-expanded', isOpen);

    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Chiudi il menu' : 'Apri il menu'
    );
  });


  // Chiude il menu quando si clicca su una voce
  navMenu.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

      navMenu.classList.remove('open');
      menuToggle.classList.remove('open');

      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Apri il menu');

    });

  });
</script>
