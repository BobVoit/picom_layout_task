// (function () { 
//     document.querySelectorAll('.footer__col').forEach((element) => {
//         element.addEventListener('click', (e) => {
//             if (!($(e.target).closest('.footer__col').length)) {
//                 element.classList.remove('active');
//             } else {
//                 element.classList.add('active');
//             }
//         });

//     });
// })();
$(document).ready(function() {
    // console.log($('footer__col'));
    $('.footer__col').each(function(index, element) {
        $(document).mouseup(function(e) {
            if (!($(e.target).closest(element).length)) {
                $(element).removeClass('active');
            } else {
                $(element).toggleClass('active');
            }
        });
    });
});