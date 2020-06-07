let slideNum = 1;
let carouselNumber = document.getElementById("carousel");

function plusSlides(n) {
  showSlides(slideNum += n, carouselNumber);
}
showSlides(slideNum, carouselNumber);

function showSlides(n, carouselNum) {
  let slides = carouselNum.getElementsByClassName("slid");
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideNum - 1].style.display = "block";
}
