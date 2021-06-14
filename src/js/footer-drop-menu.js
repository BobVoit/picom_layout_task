$(document).ready(function() {
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