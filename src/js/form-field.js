const PHONE_NUMBER_MASK_LENGTH = 18;

// создание эффекта для label форм ввода
(function() {
    const setActive = (element, active) => {
        const formField = element.parentNode.parentNode;
        if (active) {
            formField.classList.add('form__field--is-active');
        } else {
            formField.classList.remove('form__field--is-active');
            if (element.type === 'tel') {
                if (isNaN(parseInt(element.value[17]))) {
                    formField.classList.remove('form__field--is-filled');
                } else {
                    formField.classList.add('form__field--is-filled');
                }
            } else {
                element.value === '' ?
                    formField.classList.remove('form__field--is-filled') :
                    formField.classList.add('form__field--is-filled');
            }
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