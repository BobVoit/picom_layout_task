(function() { 
    const formsControls = document.querySelectorAll('.form__field--required');
    formsControls.forEach(element => {
        const field = element.querySelector('input') || element.querySelector('textarea') || null;
        field.addEventListener('change', (e) => {
            console.log(e);
            if (!e.target.value) {
                element.classList.add('error');
            } else {
                element.classList.remove('error');
            }
        })
    })
})();