const mainBack = document.querySelector('.m-back');

const imgs = [
  "./imgs/sleeping.png",
  "./imgs/women.png",
  "./imgs/dog.png",
]

let count = 0;

const slideimgs = () => {

  if(count >= imgs.length) {
    count = 0;
  }

  mainBack.style.backgroundImage = 'url(' + imgs[count] + ')';

  count++;
}

setInterval('slideimgs()',5000);