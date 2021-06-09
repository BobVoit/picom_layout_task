

function createCustomDot (slider, i) {
    const wrapper = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    wrapper.setAttribute('width', 64);
    wrapper.setAttribute('height', 64);
    wrapper.setAttribute('viewBox', '0 0 64 64');   
    wrapper.setAttribute('fill', '#7E8385');
    wrapper.classList.add('progress-bar');

    const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle",
    );
    circle.setAttribute('stroke', '#7E8385');
    circle.setAttribute('stroke-width', 2);
    circle.setAttribute('fill', 'transparent');
    circle.setAttribute('cx', 32);
    circle.setAttribute('cy', 32);
    circle.setAttribute('r', 28);
    circle.classList.add('progress-bar__circle');
    wrapper.appendChild(circle);

    // const wrapper = document.createElement('div');
    // wrapper.classList.add('progress-bar');

    // const progress = document.createElement('button');
    // progress.classList.add('progress-bar__progress');
    // progress.innerHTML = `0${i + 1}`;
    // wrapper.appendChild(progress);

    // const inside = document.createElement('div');
    // inside.classList.add('progress-bar__inside');
    // wrapper.appendChild(inside);

    // const progressValue = 30;
    // progress.addEventListener('mousemove', () => {
    //     progressValue += 10;
    //     inside.style.transform = 'rotate('+progressValue+'deg)';
    // })

    return wrapper;
}

$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        appendArrows: $('.present__arrows'),
        appendDots: $('.present__dots'),
        customPaging: createCustomDot,
        draggable: false
    });
    $('.collection-slider').slick({
        appendArrows: $('.collection__arrows'),
    });
})

// function (slider, i) {
//     const wrapper = document.createElement('div');
//     wrapper.classList.add('slick-dots__body');
//     const element = document.createElement('button');
//     element.innerHTML = '0' + (i + 1);

//     wrapper.appendChild(element);
//     return wrapper;
// }