// Intro slider
const introSlider = new Swiper('.intro-slider', {
    loop: true,
    pagination: {
        el: '.intro-slider__pagination',
        clickable: true
    }
});

// Resources slider
const resourcesSlider = new Swiper('.resources-slider', {
    loop: true,
    navigation: {
        nextEl: ".resources-slider__next",
        prevEl: ".resources-slider__prev",
    },
    pagination: {
        el: '.resources-slider__pagination',
        clickable: true
    }
});

// Testimonials slider
const testimonialsSlider = new Swiper('.testimonials-slider', {
    loop: true,
    loopAdditionalSlides: 1,
    pagination: {
        el: '.testimonials__pagination',
        clickable: true
    },
    spaceBetween: 64
});

// Mobile menu
let menu = document.querySelector('.nav-wrap');
let menuOpener = document.querySelector('.mobile-nav-opener');

menuOpener.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('active')
});

// FAQ
new Accordion('.accordion-container');
