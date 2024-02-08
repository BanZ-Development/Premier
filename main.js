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
    if (change == -1) {

    } else {
        for (i=0;i < slides.length-1;i++) {
            if (window.getComputedStyle(slides[i], null).display == 'block') {
                slides[i].style.display = 'none';
                slides[i+change].style.display = 'block';
                console.log(slides[i-1]);
            }
        }
    }
}