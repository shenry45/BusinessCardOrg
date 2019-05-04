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
if (document.querySelector('.testim') != null || document.URL.includes('index.html')) {
  const testSlider = document.querySelectorAll('.test .testim');
  const testArrowR = document.querySelector('.fa-chevron-right');
  const testArrowL = document.querySelector('.fa-chevron-left');
  let sliderCounter = 0;
  
  testArrowL.addEventListener('click', () => {
    testSlider[sliderCounter].classList.add('slideLeft');
  
    setTimeout(function() {resetTestim()}, 1000);
  
    setTimeout(function() {
      if (sliderCounter === 0){
        sliderCounter = testSlider.length-1;
        setCurSlide();
      }
      else {
        --sliderCounter;
        setCurSlide();
      }
  
      testSlider.forEach(el => el.classList.remove('slideLeft'));
    }, 1000);
  
  });
  
  testArrowR.addEventListener('click', () => {
    testSlider[sliderCounter].classList.add('slideRight');
  
    setTimeout(function() {resetTestim()}, 500);
  
    setTimeout(function() {
      if (sliderCounter === testSlider.length-1){ 
        sliderCounter = 0;
        setCurSlide();
      }
      else {
        ++sliderCounter;
        setCurSlide();
      }
  
      testSlider.forEach(el => el.classList.remove('slideRight'));
    }, 800);
  });
  
  const resetTestim = () => {
    testSlider.forEach(el => el.style.display = 'none');
  }
  
  const setCurSlide = () => {
    testSlider[sliderCounter].style.display = 'block';
  }
}

