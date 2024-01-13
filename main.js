anime({
    targets: '.mainImg',
    opacity: [0, 1],
    easing: 'linear',
    duration: 800,
    delay: 200
})

function slide(change) {
    let slides = document.querySelectorAll('.testimonial')
    for (i=0;i < slides.length-1;i++) {
        console.log(slides[i])
        if (window.getComputedStyle(slides[i], null).display == 'block') {
            let currentSlide = i;
            slides[i].style.display = 'none';
            slides[i+change].style.display = 'block';
            console.log(slides[i+1])
        }
    }
}