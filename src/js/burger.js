$(document).ready(function() {
    $('.header__burger').click(function(e) {
        $('.header__burger, .header__menu.header__burger--menu').toggleClass('active');
        $('body, .header').toggleClass('lock');
        $('.header').toggleClass('active');
    });
    $('.header__burger--menu .header__link').click(function(e) {
        $('.header__burger, .header__menu.header__burger--menu').toggleClass('active');
        $('body, .header').toggleClass('lock');
        $('.header').toggleClass('active');
    });
    $(document).mouseup(function(e) {
        const headerPanel = $('.header__panel');
        if (!($(e.target).closest('.header__panel').length) && !($(e.target).closest('.header__burger').length)) {
            $('.header__burger, .header__menu.header__burger--menu').removeClass('active');
            $('body, .header').removeClass('lock');
            $('.header').removeClass('active');
        }
    });
});