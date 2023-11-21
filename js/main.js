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

const arrayOggetti = [
  {
    titolo: 'Panorama lago',
    descrizione:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure minus vitae animi consequuntur unde laudantium quod aperiam deleniti',
  },

  {
    titolo: 'Montagna panorama',
    descrizione:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure minus vitae animi consequuntur unde laudantium quod aperiam deleniti',
  },

  {
    titolo: 'Londra',
    descrizione:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure minus vitae animi consequuntur unde laudantium quod aperiam deleniti',
  },

  {
    titolo: 'Città panorama',
    descrizione:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure minus vitae animi consequuntur unde laudantium quod aperiam deleniti',
  },

  {
    titolo: 'Mare panorama',
    descrizione:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure minus vitae animi consequuntur unde laudantium quod aperiam deleniti',
  },
];

let currentSlide = 0;

// Milestone 0:
// Creare un array di oggetti composto da Url, titolo, descrizione (potete inventare titolo e descrizione).
// Milestone 1:
// Usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

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

  const info = arrayOggetti[i];

  // li
  const liElement = document.createElement('div');
  liElement.classList.add('info');

  const h3NameElement = document.createElement('h3');
  h3NameElement.append(info.titolo);

  const pRuolo = document.createElement('p');
  pRuolo.append(info.descrizione);

  liElement.append(h3NameElement);
  liElement.append(pRuolo);
  slide.append(liElement);

  // for (let i = 0; i < arrayOggetti.length; i++) {
  //   const oggettiLett = arrayOggetti[i];

  //   const titoloImg = document.createElement('h1');

  //   titoloImg.classList.add(oggettiLett.titolo);
  //   console.log(oggettiLett);
  // }
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
