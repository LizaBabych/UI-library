const config = ["https://loremflickr.com/320/240/dog", "https://loremflickr.com/g/320/240/paris",
 "https://loremflickr.com/320/240/paris,girl/all", "https://loremflickr.com/320/240/dog", "https://loremflickr.com/g/320/240/paris",
 "https://loremflickr.com/320/240/paris,girl/all", "https://loremflickr.com/320/240/dog", "https://loremflickr.com/g/320/240/paris",
 "https://loremflickr.com/320/240/paris,girl/all"];

carousel("slider", config);

function carousel(id, config) {
  let carousel = document.getElementById(id);
  let slide, img;
  let slideNum = 1;
  let slides = [];
  config.forEach((item, i) => {
    slide = document.createElement('div')
    slide.setAttribute('class', 'slides');
    img = document.createElement('img');
    img.setAttribute('src', item);
    slide.appendChild(img);
    carousel.appendChild(slide);
    slides.push(slide);
    showSlides(slideNum, slides);
    if (i != config.length - 1) {
      nextButton = addNextButton(slide, slideNum, slides);
      nextButton.addEventListener('click', function(){
        showSlides(slideNum += 1, slides);
      });
    }
    if (i != 0) {
      prevButton = addPrevButton(slide, slideNum, slides);
      prevButton.addEventListener('click', function(){
        showSlides(slideNum -= 1, slides);
      });
    }
  });
}

function addNextButton(slide, slideNum, slides) {
  let nextButton = document.createElement('button');
  nextButton.innerText = ">";
  nextButton.setAttribute('class', 'next');
  slide.appendChild(nextButton);
  return nextButton;
}

function addPrevButton(slide, slideNum, slides) {
  let prevButton = document.createElement('button');
  prevButton.innerText = "<";
  prevButton.setAttribute('class', 'prev');
  slide.appendChild(prevButton);
  return prevButton;
}

function showSlides(slideNum, slides) {
  slides.forEach((item) => {
    item.setAttribute('class', 'noDisplay');
  });
  slides[slideNum - 1].setAttribute('class', 'display');
}
