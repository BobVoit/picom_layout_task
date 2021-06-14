(function() {
    const setActive = (element, active) => {
        const formField = element.parentNode.parentNode;
        if (active) {
            formField.classList.add('form__field--is-active');
        } else {
            formField.classList.remove('form__field--is-active');
            element.value === '' ?
                formField.classList.remove('form__field--is-filled') :
                formField.classList.add('form__field--is-filled');
        }
    }
    
    [].forEach.call(
        document.querySelectorAll('.form__input, .form__textarea'),
        element => {
            element.onblur = () => setActive(element, false);
            element.onfocus = () => setActive(element, true);
        }
    )
})();