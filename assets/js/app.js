// menu controller
const mobileNav = document.querySelector('.mobile a.nav');
const mobileLinks = document.querySelectorAll('.mobile nav a');
const hideMenu = () => {
  const mobileMenu = document.querySelector('.mobile nav');

  mobileMenu.classList.toggle('active');
}

mobileNav.addEventListener('click', hideMenu);
mobileLinks.forEach(el => el.addEventListener('click', hideMenu));

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

// faq accordion
if (document.querySelector('.faq') != null || document.URL.includes('pricing.html')) {

  // create class for buttons and click
  class Button {
    constructor(el) {
      this.el = el;
      this.el.addEventListener('click', (e) => { this.expandCont(e) });
    }
    expandCont(e) {
      // get parent of clicked arrow icon
      const currAccItem = e.target.parentNode;

      if (e.target.classList.value.includes('flipUp')) {
        // remove all current el content
        resetAccCont();

        this.el.classList.remove('flipUp');
        this.el.classList.add('flipDown');
      } 
      else {
        // remove all current el content
        resetAccCont();
        // remove flipUp class from all icons
        resetIcons();

        // get data el from the content
        const currAccCont = document.querySelector(`.acc-content div[data-cont="${currAccItem.dataset.acc}"] p`);
        
        // insert HTML content matching target dataset
        currAccItem.insertAdjacentHTML('beforeend', `<p class="acc-info">${currAccCont.innerHTML}</p>`);
        
        // reset icon rotate and set clicked icon to point up
        resetRotates();
        this.el.classList.add('flipUp');
      }

      
    }
  }
  
  const faqs = document.querySelectorAll('.faq .acc p.icon');
  faqs.forEach(el => new Button(el));

  const resetRotates = () => {
    faqs.forEach(el => el.style.transform = '');
  }

  const resetAccCont = () => {
    document.querySelectorAll('p.acc-info').forEach(el => el.parentNode.removeChild(el));
  }

  const resetIcons = () => {
    const getIcons = document.querySelectorAll('p.icon.flipDown');

    if (getIcons.length > 0) {
      getIcons.forEach(el => el.classList.remove('flipDown'));
    }
  }

}
