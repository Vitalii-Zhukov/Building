    document.addEventListener('DOMContentLoaded', function() {
    function updatePlaceholders() {
        var width = window.innerWidth;

        var inputName = document.querySelector('.orderCleaning_name');
        if (width <= 834) {
            inputName.setAttribute('placeholder', 'Имя');
        } else {
            inputName.removeAttribute('placeholder');
        }

        var inputPhone = document.querySelector('.orderCleaning_phone');
        if (width <= 834) {
            inputPhone.setAttribute('placeholder', 'Телефон или e-mail');
        } else {
            inputPhone.removeAttribute('placeholder');
        }

        var textareaDescription = document.querySelector('.orderCleaning_description');
        if (width <= 834) {
            textareaDescription.setAttribute('placeholder', 'Описание заказа');
        } else {
            textareaDescription.removeAttribute('placeholder');
        }
    }

    updatePlaceholders();

    window.addEventListener('resize', updatePlaceholders);
});
