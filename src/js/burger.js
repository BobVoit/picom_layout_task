$(document).ready(function() {
    $('.header__burger').click(function(e) {
        $('.header__burger, .header__menu.header__burger--menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header__burger--menu .header__link').click(function(e) {
        $('.header__burger, .header__menu.header__burger--menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
});