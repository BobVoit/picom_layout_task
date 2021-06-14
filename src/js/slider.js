$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        appendArrows: $('.present__arrows'),
        appendDots: $('.present__dots'),
        customPaging: createCustomDot,
        draggable: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    const elements = document.querySelectorAll('.present__dots li');

    let idInternal = move(elements[0].childNodes[0].childNodes[1]);
    $('.slider').on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        clearInterval(idInternal);
        idInternal = move(elements[nextSlide].childNodes[0].childNodes[1]);
        setProgress(elements[currentSlide].childNodes[0].childNodes[1])
    });

    // const frequencyOfChangingSlides = 3000;
    // let dotsLoop = setInterval(() => {
    //     // setTimeout(() => {
    //     $('.slider').slick('slickNext');
    //     // }, frequencyOfChangingSlides);
    // }, frequencyOfChangingSlides);

    $('.collection-slider').slick({
        appendArrows: $('.collection__arrows'),
    });
});

function move(node) {
    let progress = 1;
    let idInternal = setInterval(() => {
        if (progress >= 100) {
            clearInterval(idInternal);
            setProgress(node, 0);
        } else {
            progress++;
            setProgress(node, progress);
        }
    }, 30);
    return idInternal;
}

function clearProgress(node, idInternal) {
    clearInterval(idInternal);
    setProgress(node, 0);
}

function setProgress(element, perscent = 0) {
    const radius = element.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - perscent / 100 * circumference;
    element.style.strokeDashoffset = offset;
}

function createCustomDot(slider, i) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add('progress-bar');
    svg.setAttribute('width', 64);
    svg.setAttribute('height', 64);

    const circleBorder = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circleBorder.classList.add('progress-bar__border');
    circleBorder.setAttribute('cx', 32);
    circleBorder.setAttribute('cy', 32);
    circleBorder.setAttribute('r', 30);

    const circleStatic = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circleStatic.classList.add('progress-bar__static');
    circleStatic.setAttribute('cx', 32);
    circleStatic.setAttribute('cy', 32);
    circleStatic.setAttribute('r', 30);

    const radius = circleBorder.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circleBorder.style.strokeDasharray = `${circumference} ${circumference}`;
    circleBorder.style.strokeDashoffset = 0
    ;  
    setProgress(circleBorder, 0);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.classList.add('progress-bar__text');
    text.setAttribute('x', 24);
    text.setAttribute('y', 38);
    text.innerHTML = `0${i}`;

    svg.appendChild(circleStatic);
    svg.appendChild(circleBorder);
    svg.appendChild(text);
    return svg;
}