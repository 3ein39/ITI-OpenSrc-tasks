const slideshow = document.getElementById("slideshow");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const slideshowButton = document.getElementById("slideshowButton");
const stopButton = document.getElementById("stopButton");
let slides = [];
let currentIndex = 0;
let interval;

function seed() {
    // get images from the images folder
    for (let i = 1; i <= 6; i++) {
        slides.push(`images/flower${i}.jpg`);
    }
}

function showSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }
    currentIndex = index;

    slideshow.src = slides[index];
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function previousSlide() {
    showSlide(currentIndex - 1);
}

function startSlideshow() {
    stopSlideshow();
    interval = setInterval(nextSlide, 1000);
}

function stopSlideshow() {
    clearInterval(interval);
}

previousButton.addEventListener("click", previousSlide);
nextButton.addEventListener("click", nextSlide);
slideshowButton.addEventListener("click", startSlideshow);
stopButton.addEventListener("click", stopSlideshow);

seed();
showSlide(currentIndex);
