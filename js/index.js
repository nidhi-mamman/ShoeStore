let currentIndex = 0;
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const visibleSlides = 2;

function changeSlide(direction) {
  const maxIndex = Math.ceil(slides.length / visibleSlides) - 1;

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = maxIndex;
  if (currentIndex > maxIndex) currentIndex = 0;

  const slideWidth = slides[0].offsetWidth + 10; // slide + margin
  slider.style.transform = `translateX(-${currentIndex * slideWidth * visibleSlides}px)`;
}

// Initial call
changeSlide(0);
