const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const sliderControl = document.querySelector('.slider__control')
const slider = document.querySelector('.slider')

nav.classList.add('nav--closed');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--closed');
  nav.classList.toggle('nav--opened');
});

if (sliderControl) {
  let flag = false;
  sliderControl.addEventListener('click', (evt) => {
    if (flag) {
      slider.classList.toggle('slider--before');
      slider.classList.toggle('slider--after');
    } else {
      slider.classList.add('slider--after');
      flag = true;
    }
  });
}
