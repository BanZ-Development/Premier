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

function openFaq(question) {
    let answer = document.querySelectorAll('#faqAns');
    let container = document.querySelectorAll('.faqBtn');
    let icon = document.querySelectorAll('#faqIcon');
    if (window.getComputedStyle(answer[question], null).display == 'block') {
        answer[question].style.display = 'none';
        anime({
            targets: icon[question],
            rotateX: 0,
            easing: 'linear',
            duration: 300
        });
    } else {
        answer[question].style.display = 'block';
        anime({
            targets: icon[question],
            rotateX: 180,
            easing: 'linear',
            duration: 300
        });
        anime({
            targets: container[question],
            height: ['10.5%', '100%'],
            easing: 'linear',
            duration: 500
        });
        for (i=0; i < container.length-1;i++) {
            container[i].style.height = 'fit-content';
        }
    }
}