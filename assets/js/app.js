// menu controller
const mobileNav = document.querySelector('.mobile a.nav');
const mobileLinks = document.querySelectorAll('.mobile nav a');
const hideMenu = () => {
  const mobileMenu = document.querySelector('.mobile nav');

  mobileMenu.classList.toggle('active');
}

mobileLinks.forEach(el => el.addEventListener('click', hideMenu));
mobileNav.addEventListener('click', hideMenu);

// form 'validator'
const validateForm = () => {

  const error = document.createElement('p');
  error.innerHTML = `<p class="form-error">Something went wrong! Please contact an administrator for help.</p>`;

  const contactSect = document.querySelector('section.contact');
  contactSect.appendChild(error);
}
