// menu controller
const mobileNav = document.querySelector('.mobile a.nav');

mobileNav.addEventListener('click', () => {
  const mobileMenu = document.querySelector('.mobile nav');

  mobileMenu.classList.toggle('active');
});