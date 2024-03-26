anime({
    targets: '.mainImg',
    opacity: 1,
    easing: 'linear',
    duration: 800,
    delay: 400
});
    
anime({
    targets: '.main-container',
    translateX: ['-1200px', '0px'],
    duration: 800,
    delay: 400
});


function slide(change) {
    let slides = document.querySelectorAll('.testimonial');
    if (change == +1) {
        for (i=0; i < slides.length;i++) {
            if (window.getComputedStyle(slides[i], null).display == 'flex') {
                let currentSlide = i;
                if (currentSlide == slides.length-1) {
                    slides[i].style.display = 'none';
                    slides[0].style.display = 'flex';
                } else {
                    slides[i].style.display = 'none';
                    slides[i+1].style.display = 'flex';
                    break;
                }
            }
        }
    } else {
        for (i=0; i < slides.length;i++) {
            if (window.getComputedStyle(slides[i], null).display == 'flex') {
                currentSlide = i;
                if (currentSlide == 0) {
                    slides[i].style.display = 'none';
                    slides[slides.length-1].style.display = 'flex';
                    break;
                } else {
                    slides[i].style.display = 'none';
                    slides[i-1].style.display = 'flex';
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

function Menu(selector) {
    let menu = document.querySelector(selector);
    if (window.getComputedStyle(menu, null).display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}