anime({
    targets: '.mainImg',
    opacity: [0, 1],
    easing: 'linear',
    duration: 800,
    delay: 200
});

anime({
    targets: '.main-container',
    translateX: [-600, 0],
    duration: 500,
    delay: 200
});

function slide(change) {
    let slides = document.querySelectorAll('.testimonial')
    if (change == +1) {
        for (i=0; i < slides.length;i++) {
            if (window.getComputedStyle(slides[i], null).display == 'block') {
                let currentSlide = i;
                if (currentSlide == slides.length-1) {
                    slides[i].style.display = 'none';
                    slides[0].style.display = 'block';
                } else {
                    slides[i].style.display = 'none';
                    slides[i+1].style.display = 'block';
                    break;
                }
            }
        }
    } else {
        for (i=0; i < slides.length;i++) {
            if (window.getComputedStyle(slides[i], null).display == 'block') {
                currentSlide = i;
                if (currentSlide == 0) {
                    slides[i].style.display = 'none';
                    slides[slides.length-1].style.display = 'block';
                    break;
                } else {
                    slides[i].style.display = 'none';
                    slides[i-1].style.display = 'block';
                }
            }
        }
    }
}