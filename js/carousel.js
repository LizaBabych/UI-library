let carouselNumber = document.querySelectorAll(".slider");

carouselNumber.forEach((item, i) => {
  let slides = item.querySelectorAll(".slid");
  let slideNum = 1;

  showSlides(slideNum, carouselNumber, slides);

  let prevButton = item.querySelectorAll(".prev");
  let nextButton = item.querySelectorAll(".next");

  nextButton.forEach((itemNextButton) => {
    itemNextButton.addEventListener('click', function(){
      showSlides(slideNum += 1, item, slides)
    });
  });

  prevButton.forEach((itemPrevButton) => {
    itemPrevButton.addEventListener('click', function(){
      showSlides(slideNum -= 1, item, slides)
    });
  });
});

function showSlides(slideNum, carouselNum, slides) {
  slides.forEach((item) => {
    item.style.display = "none";
  });
  slides[slideNum - 1].style.display = "block";
}
