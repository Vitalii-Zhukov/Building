let blogOne = document.getElementById('repair_blogOne');
let blogSecond = document.getElementById('repair_blogSecond');
let blogThird = document.getElementById('repair_blogThird');

let btnOne = document.getElementById('repair_btnOne');
let btnSecond = document.getElementById('repair_btnSecond');
let btnThird = document.getElementById('repair_btnThird');

let infoOne = document.getElementById('repair_blog320_one');
let infoSecond = document.getElementById('repair_blog320_second');
let infoThird = document.getElementById('repair_blog320_third');

btnOne.addEventListener('click', () => {
    infoOne.classList.toggle('hidden')
    
    if(!btnOne.classList.contains('blue')) {
        btnOne.classList.add('blue')
    }

    if(btnSecond.classList.contains('blue')){
        btnSecond.classList.remove('blue')
    }

    if(btnThird.classList.contains('blue')){
        btnThird.classList.remove('blue')
    }
    /////////////////////////////////////////////
    if(blogOne.classList.contains('hidden')) {
        blogOne.classList.remove('hidden')
    }

    if(!blogSecond.classList.contains('hidden')) {
        blogSecond.classList.add('hidden')
    }
    
    if(!blogThird.classList.contains('hidden')) {
        blogThird.classList.add('hidden')
    }
    ////////////////////////////////
    if(!infoSecond.classList.contains('hidden')) {
        infoSecond.classList.add('hidden')
    } 

    if(!infoThird.classList.contains('hidden')) {
        infoThird.classList.add('hidden')
    }
})

btnSecond.addEventListener('click', () => {
    
    infoSecond.classList.toggle('hidden')

    if(!btnSecond.classList.contains('blue')) {
        btnSecond.classList.add('blue')
    }

    if(btnOne.classList.contains('blue')){
        btnOne.classList.remove('blue')
    }

    if(btnThird.classList.contains('blue')){
        btnThird.classList.remove('blue')
    }
    /////////////////////////////////////////////
    if(blogSecond.classList.contains('hidden')) {
        blogSecond.classList.remove('hidden')
    }

    if(!blogOne.classList.contains('hidden')) {
        blogOne.classList.add('hidden')
    } 

    if(!blogThird.classList.contains('hidden')) {
        blogThird.classList.add('hidden')
    } 
    ////////////////////////////////
    if(!infoOne.classList.contains('hidden')) {
        infoOne.classList.add('hidden')
    }

    if(!infoThird.classList.contains('hidden')) {
        infoThird.classList.add('hidden')
    }
})

btnThird.addEventListener('click', () => {

    infoThird.classList.toggle('hidden')
    
    if(!btnThird.classList.contains('blue')) {
        btnThird.classList.add('blue')
    }

    if(btnSecond.classList.contains('blue')){
        btnSecond.classList.remove('blue')
    }

    if(btnOne.classList.contains('blue')){
        btnOne.classList.remove('blue')
    }
    /////////////////////////////////////////////
    if(blogThird.classList.contains('hidden')) {
        blogThird.classList.remove('hidden')
    }

    if(!blogSecond.classList.contains('hidden')) {
        blogSecond.classList.add('hidden')
    }

    if(!blogOne.classList.contains('hidden')) {
        blogOne.classList.add('hidden')
    } 
    ////////////////////////////////
    if(!infoSecond.classList.contains('hidden')) {
        infoSecond.classList.add('hidden')
    }

    if(!infoOne.classList.contains('hidden')) {
        infoOne.classList.add('hidden')
    } 
})