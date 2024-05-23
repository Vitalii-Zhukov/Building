let btnOpen = document.getElementById('apartmentcleaning__price__btnOpen');
let btnOpenTwo = document.getElementById('apartmentcleaning__price__btnOpen_second');
let wrapper = document.getElementById('apartmentcleaning__price__wrapper');
let wrapperTwo = document.getElementById('apartmentcleaning__price__wrapper_second');
let btnClouse = document.getElementById('apartmentcleaning__price__close');
let btnClouseTwo = document.getElementById('apartmentcleaning__price__close_second');

btnOpen.addEventListener('click', () => {
    wrapper.classList.toggle('hidden')
    wrapperTwo.classList.add('hidden')
    
})

btnOpenTwo.addEventListener('click', () => {
    wrapperTwo.classList.toggle('hidden')
    wrapper.classList.add('hidden')
})

btnClouse.addEventListener('click', () => {
    wrapper.classList.toggle('hidden')
})

btnClouseTwo.addEventListener('click', () => {
    wrapperTwo.classList.toggle('hidden')
})

