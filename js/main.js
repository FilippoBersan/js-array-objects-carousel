'use strict';

// <!-- <div class="item active"><img src="img/01.jpg" alt="" /></div>
//       <div class="item"><img src="img/02.jpg" alt="" /></div>
//       <div class="item"><img src="img/03.jpg" alt="" /></div>
//       <div class="item"><img src="img/04.jpg" alt="" /></div>
//       <div class="item"><img src="img/05.jpg" alt="" /></div> -->

const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const slider = document.querySelector('.slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentSlide = 0;

// creazione html
for (let i = 0; i < images.length; i++) {
  //  slide
  const slide = document.createElement('div');
  slide.classList.add('item');

  if (i === currentSlide) {
    slide.classList.add('active');
  }

  // image
  const img = document.createElement('img');
  img.src = ` img/${images[i]}`;

  slide.append(img);
  slider.prepend(slide);
}

const domSlides = document.querySelectorAll('.item');
console.log(domSlides);

// eventi manipolano slides
prev.addEventListener('click', function () {
  console.log('click su prev');

  if (currentSlide > 0) {
    domSlides[currentSlide].classList.remove('active');

    currentSlide--;
    console.log(currentSlide);

    domSlides[currentSlide].classList.add('active');
  }
});

next.addEventListener('click', function () {
  console.log('click su next');

  if (currentSlide < domSlides.length - 1) {
    domSlides[currentSlide].classList.remove('active');

    currentSlide++;
    console.log(currentSlide);

    domSlides[currentSlide].classList.add('active');
  }
});
