$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        appendArrows: $('.present__arrows'),
        appendDots: $('.present__dots'),
        customPaging: function (slider, i) {
            const wrapper = document.createElement('div');
            wrapper.classList.add('slick-dots__body');
            const element = document.createElement('button');
            element.innerHTML = '0' + (i + 1);

            wrapper.appendChild(element);
            return wrapper;
        }
    });
})