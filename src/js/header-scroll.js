(function () {
    const header = document.querySelector('.header');
    let prevScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset;
        if (prevScrollPosition > currentScrollPosition) {
            header.classList.remove('hide');
        } else {
            header.classList.add('hide');
        }
        prevScrollPosition = currentScrollPosition;
    })
})()