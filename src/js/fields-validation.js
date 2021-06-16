// Проверка полей с обязательным вводом текста на пустоту
(function() { 
    const formsControls = document.querySelectorAll('.form__field--required');
    formsControls.forEach(element => {
        const field = element.querySelector('input') || element.querySelector('textarea') || null;
        field.addEventListener('keyup', () => {
            const fieldValue = field.value;
            const parent = field.parentNode.parentNode;
            if (fieldValue == '') {
                parent.classList.add('error');
                parent.querySelector('.form__error').innerHTML = 'Обязательное поле!';
            } else if (parent.classList.contains('error')) {
                parent.classList.remove('error');
            }
        });
    });
})();

// Проверка данных формы перед отправкой
(function () {
    const phonenumberRegExp = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const orderForm = document.querySelector('.order__form');
    console.log(orderForm);
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(orderForm);
        const values = {};
        for (let key of formData.keys()) {
            values[key] = formData.get(key);
        }

        console.log(values.phonenumber);

        if (values.fullname.trim() == '') {
            console.log(1);
            orderForm
                .querySelector('.form__fullname')
                .classList
                .add('error');
            orderForm
                .querySelector('.form__fullname .form__error')
                .innerHTML == "Обязательное поле!";
            return false;
        }

        if (values.phonenumber.trim() == '') {
            console.log(2);
            orderForm
                .querySelector('.form__phonenumber .form__error')
                .innerHTML == "Обязательное поле!";
            return false;
        } else if (!phonenumberRegExp.test(values.phonenumber.trim())) {
            orderForm
                .querySelector('.form__phonenumber')
                .classList
                .add('error');
            orderForm
                .querySelector('.form__phonenumber .form__error')
                .innerHTML == "Неверный формат";
            return false;
        }

        if (values.email.trim() != '' && !emailRegExp.test(values.email.trim())) {
            console.log(5);
            console.log(orderForm.querySelector('.form__email .form__error'));
            orderForm
                .querySelector('.form__email .form__error')
                .innerHTML == "Неверный формат";
            return false;
        }        

        console.log('ок');

        return true;
    })
})();

// Телефонная маска
$(function() {
    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            const range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    };

    $('.form__phonenumber .form__input')
        .click(function() {
            $(this).setCursorPosition(4);
        }).mask('+7 (999) 999 99 99', {
            placeholder: " ",
        });
});