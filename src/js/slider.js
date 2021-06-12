

function createCustomDot (slider, i) {
    const canvas = document.createElement('canvas'); // создаем канвас
    canvas.classList.add('progress-bar');
    canvas.setAttribute('width', 64); 
    canvas.setAttribute('height', 64);

    const context = canvas.getContext('2d'); // контекст
    context.lineCap = 'round';


    function arcMove() {
        const posX = canvas.width / 2;
        const posY = canvas.height / 2;
        const fps = 1000 / 200;
        let procent = 0;
        const oneProcent = 360 / 100;
        const result = oneProcent * 64;
        let deegres = 0;
        const acrInterval = setInterval (function() {
            deegres += 1;
            context.clearRect( 0, 0, can.width, can.height );
            procent = deegres / oneProcent;

            context.beginPath();
            context.arc(posX, posY, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
            context.strokeStyle = '#b1b1b1';
            context.lineWidth = '10';
            context.stroke();

            context.beginPath();
            context.strokeStyle = '#3949AB';
            context.lineWidth = '10';
            context.arc(posX, posY, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + deegres));
            context.stroke();
            if(deegres >= result) {
                clearInterval(acrInterval);
            }
        }, fps);
    }

    // arcMove();

    return canvas;
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
});