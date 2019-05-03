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

// testimonial slider
const testSlider = document.querySelectorAll('.test .testim');
const testArrowR = document.querySelector('.fa-chevron-right');
const testArrowL = document.querySelector('.fa-chevron-left');
let sliderCounter = 0;

testArrowL.addEventListener('click', () => {
  resetTestim();

  if (sliderCounter === 0){ 
    sliderCounter = testSlider.length-1;
    setCurSlide();
  }
  else {
    --sliderCounter;
    setCurSlide();
  }
});

testArrowR.addEventListener('click', () => {
  resetTestim();

  if (sliderCounter === testSlider.length-1){ 
    sliderCounter = 0;
    setCurSlide();
  }
  else {
    ++sliderCounter;
    setCurSlide();
  }
});

const resetTestim = () => {
  testSlider.forEach(el => el.style.display = 'none');
}

const setCurSlide = () => {
  testSlider[sliderCounter].style.display = 'block';
}

