// Repeat as done in your lesson.
// This is an array that store all our images
let images = [
  "assets/img/bulb1.jpg",
  "assets/img/bulb2.jpg",
  "assets/img/bulb3.jpg",
  "assets/img/bulb4.jpg",
  "assets/img/bulb5.jpg",
  "assets/img/bulb6.jpg",
];

// This help declare a vriable that will keep trac k of the current
let currentIndex = 0;

//  This is a funtion that help us call of the next
// button and help calculate the current image so that it can move to the next
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("slider-image").src = images[currentIndex];
}

//  This is a funtion that help us call of the previous
// button and help calculate the current image so that
//it can move to the the one we just left
function prevSlide() {
  currentIndex = (currentIndex + 1 + images.length) % images.length;
  document.getElementById("slider-image").src = images[currentIndex];
}
