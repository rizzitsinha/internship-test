const slides = document.querySelectorAll('.hero-slider');
const hero = document.querySelector('.hero')
let current = 0;

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove('hero-slider-active');
    });
    slides[index].classList.add('hero-slider-active');
}

function nextSlide(){
    current = (current + 1) % slides.length;
    showSlide(current);
}

showSlide(current);
setInterval(nextSlide, 2000);
