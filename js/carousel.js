let carouselNumber = document.getElementsByClassName("slider");

for (let i = 0; i < carouselNumber.length; i++) {
  let slides = carouselNumber[i].getElementsByClassName("slid");
  let slideNum = 1;

  showSlides(slideNum, carouselNumber, slides);

  let prevButton = carouselNumber[i].getElementsByClassName("prev");
  let nextButton = carouselNumber[i].getElementsByClassName("next");

  for (let j = 0; j < nextButton.length; j++) {
    nextButton[j].addEventListener('click', function(){
      showSlides(slideNum += 1, carouselNumber[i], slides)
    });
  }

  for (let j = 0; j < prevButton.length; j++) {
    prevButton[j].addEventListener('click', function(){
      showSlides(slideNum -= 1, carouselNumber[i], slides)
    });
  }
}

function showSlides(slideNum, carouselNum, slides) {
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideNum - 1].style.display = "block";
}
