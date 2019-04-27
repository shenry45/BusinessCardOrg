// menu controller
const mobileNav = document.querySelector('.mobile a.nav');
const mobileLinks = document.querySelectorAll('.mobile nav a');
const hideMenu = () => {
  const mobileMenu = document.querySelector('.mobile nav');

  mobileMenu.classList.toggle('active');
}

mobileLinks.forEach(el => el.addEventListener('click', hideMenu));
mobileNav.addEventListener('click', hideMenu);
