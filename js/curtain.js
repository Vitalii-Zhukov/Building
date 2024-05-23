import "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
import "./beforeafter.jquery-1.0.0.min.js"

$('.curtain_beforeAfter').beforeAfter({
    movable: true,
    clickMove: true,
    position: 60,
    separatorColor: '#0091E9',
    bulletColor: '#fafafa',
   
});

let blogOne = document.getElementById('curtainBlogOne');
let blogSecond = document.getElementById('curtainBlogSecond');
let blogThird = document.getElementById('curtainBlogThird');
let blogFourth = document.getElementById('curtainBlogFourth');
let blogFifth = document.getElementById('curtainBlogFifth');
let blogSix = document.getElementById('curtainBlogSix');

let circleOne = document.getElementById('curtainCircleOne');
let circleSecond = document.getElementById('curtainCircleSecond');
let circleThird = document.getElementById('curtainCircleThird');
let circleFourth = document.getElementById('curtainCircleFourth');
let circleFifth = document.getElementById('curtainCircleFifth');
let circleSix = document.getElementById('curtainCircleSix');

let changeText = document.querySelector('.curtain_text')

circleOne.addEventListener('click', () => {
    changeText.textContent = 'Устройство террасы';
    if(!circleOne.classList.contains('blue')) {
        circleOne.classList.add('blue')
    }; 

    if(!circleSecond.classList.contains('blue')) {
        
    }else {
        circleSecond.classList.remove('blue')
    }; 

    if(!circleThird.classList.contains('blue')) {
        
    }else {
        circleThird.classList.remove('blue')
    }; 

    if(!circleFourth.classList.contains('blue')) {
        
    }else {
        circleFourth.classList.remove('blue')
    }; 

    if(!circleFifth.classList.contains('blue')) {
        
    }else {
        circleFifth.classList.remove('blue')
    }; 

    if(!circleSix.classList.contains('blue')) {
        
    }else {
        circleSix.classList.remove('blue')
    }; 


    if (blogOne.classList.contains('hidden')) {
        blogOne.classList.remove('hidden')
    } else {

    };

    if (blogSecond.classList.contains('hidden')) {
        
    } else {
        blogSecond.classList.add('hidden')
    };

    if (blogThird.classList.contains('hidden')) {
        
    } else {
        blogThird.classList.add('hidden')
    };

    if (blogFourth.classList.contains('hidden')) {
        
    } else {
        blogFourth.classList.add('hidden')
    };

    if (blogFifth.classList.contains('hidden')) {
        
    } else {
        blogFifth.classList.add('hidden')
    };

    if (blogSix.classList.contains('hidden')) {
        
    } else {
        blogSix.classList.add('hidden')
    };

});

circleSecond.addEventListener('click', () => {
    changeText.textContent = 'Реконструкция забора';
    if(!circleSecond.classList.contains('blue')) {
        circleSecond.classList.add('blue')
    }; 

    if(!circleOne.classList.contains('blue')) {
        
    }else {
        circleOne.classList.remove('blue')
    }; 

    if(!circleThird.classList.contains('blue')) {
        
    }else {
        circleThird.classList.remove('blue')
    }; 

    if(!circleFourth.classList.contains('blue')) {
        
    }else {
        circleFourth.classList.remove('blue')
    }; 

    if(!circleFifth.classList.contains('blue')) {
        
    }else {
        circleFifth.classList.remove('blue')
    }; 

    if(!circleSix.classList.contains('blue')) {
        
    }else {
        circleSix.classList.remove('blue')
    }; 



    if (blogSecond.classList.contains('hidden')) {
        blogSecond.classList.remove('hidden')
    } else {

    };

    if (blogOne.classList.contains('hidden')) {
        
    } else {
        blogOne.classList.add('hidden')
    };

    if (blogThird.classList.contains('hidden')) {
        
    } else {
        blogThird.classList.add('hidden')
    };

    if (blogFourth.classList.contains('hidden')) {
        
    } else {
        blogFourth.classList.add('hidden')
    };

    if (blogFifth.classList.contains('hidden')) {
        
    } else {
        blogFifth.classList.add('hidden')
    };

    if (blogSix.classList.contains('hidden')) {
        
    } else {
        blogSix.classList.add('hidden')
    };

});

circleThird.addEventListener('click', () => {
    changeText.textContent = 'Устройство плитного фундамента';
    if(!circleThird.classList.contains('blue')) {
        circleThird.classList.add('blue')
    }; 

    if(!circleOne.classList.contains('blue')) {
        
    }else {
        circleOne.classList.remove('blue')
    }; 

    if(!circleSecond.classList.contains('blue')) {
        
    }else {
        circleSecond.classList.remove('blue')
    }; 

    if(!circleFourth.classList.contains('blue')) {
        
    }else {
        circleFourth.classList.remove('blue')
    }; 

    if(!circleFifth.classList.contains('blue')) {
        
    }else {
        circleFifth.classList.remove('blue')
    }; 

    if(!circleSix.classList.contains('blue')) {
        
    }else {
        circleSix.classList.remove('blue')
    }; 



    if (blogThird.classList.contains('hidden')) {
        blogThird.classList.remove('hidden')
    } else {

    };

    if (blogOne.classList.contains('hidden')) {
        
    } else {
        blogOne.classList.add('hidden')
    };

    if (blogSecond.classList.contains('hidden')) {
        
    } else {
        blogSecond.classList.add('hidden')
    };

    if (blogFourth.classList.contains('hidden')) {
        
    } else {
        blogFourth.classList.add('hidden')
    };

    if (blogFifth.classList.contains('hidden')) {
        
    } else {
        blogFifth.classList.add('hidden')
    };

    if (blogSix.classList.contains('hidden')) {
        
    } else {
        blogSix.classList.add('hidden')
    };

});

circleFourth.addEventListener('click', () => {
    changeText.textContent = 'Устройство вентилируемого фасада';
    if(!circleFourth.classList.contains('blue')) {
        circleFourth.classList.add('blue')
    }; 

    if(!circleSecond.classList.contains('blue')) {
        
    }else {
        circleSecond.classList.remove('blue')
    }; 

    if(!circleThird.classList.contains('blue')) {
        
    }else {
        circleThird.classList.remove('blue')
    }; 

    if(!circleOne.classList.contains('blue')) {
        
    }else {
        circleOne.classList.remove('blue')
    }; 

    if(!circleFifth.classList.contains('blue')) {
        
    }else {
        circleFifth.classList.remove('blue')
    }; 

    if(!circleSix.classList.contains('blue')) {
        
    }else {
        circleSix.classList.remove('blue')
    }; 


    if (blogFourth.classList.contains('hidden')) {
        blogFourth.classList.remove('hidden')
    } else {

    };

    if (blogSecond.classList.contains('hidden')) {
        
    } else {
        blogSecond.classList.add('hidden')
    };

    if (blogThird.classList.contains('hidden')) {
        
    } else {
        blogThird.classList.add('hidden')
    };

    if (blogOne.classList.contains('hidden')) {
        
    } else {
        blogOne.classList.add('hidden')
    };

    if (blogFifth.classList.contains('hidden')) {
        
    } else {
        blogFifth.classList.add('hidden')
    };

    if (blogSix.classList.contains('hidden')) {
        
    } else {
        blogSix.classList.add('hidden')
    };

});

circleFifth.addEventListener('click', () => {
    changeText.textContent = 'Сборка и монтаж электрического щита';
    if(!circleFifth.classList.contains('blue')) {
        circleFifth.classList.add('blue')
    }; 

    if(!circleSecond.classList.contains('blue')) {
        
    }else {
        circleSecond.classList.remove('blue')
    }; 

    if(!circleThird.classList.contains('blue')) {
        
    }else {
        circleThird.classList.remove('blue')
    }; 

    if(!circleFourth.classList.contains('blue')) {
        
    }else {
        circleFourth.classList.remove('blue')
    }; 

    if(!circleOne.classList.contains('blue')) {
        
    }else {
        circleOne.classList.remove('blue')
    }; 

    if(!circleSix.classList.contains('blue')) {
        
    }else {
        circleSix.classList.remove('blue')
    }; 


    if (blogFifth.classList.contains('hidden')) {
        blogFifth.classList.remove('hidden')
    } else {

    };

    if (blogSecond.classList.contains('hidden')) {
        
    } else {
        blogSecond.classList.add('hidden')
    };

    if (blogThird.classList.contains('hidden')) {
        
    } else {
        blogThird.classList.add('hidden')
    };

    if (blogFourth.classList.contains('hidden')) {
        
    } else {
        blogFourth.classList.add('hidden')
    };

    if (blogOne.classList.contains('hidden')) {
        
    } else {
        blogOne.classList.add('hidden')
    };

    if (blogSix.classList.contains('hidden')) {
        
    } else {
        blogSix.classList.add('hidden')
    };

});

circleSix.addEventListener('click', () => {
    changeText.textContent = 'Ванна под ключ';
    if(!circleSix.classList.contains('blue')) {
        circleSix.classList.add('blue')
    }; 

    if(!circleSecond.classList.contains('blue')) {
        
    }else {
        circleSecond.classList.remove('blue')
    }; 

    if(!circleThird.classList.contains('blue')) {
        
    }else {
        circleThird.classList.remove('blue')
    }; 

    if(!circleFourth.classList.contains('blue')) {
        
    }else {
        circleFourth.classList.remove('blue')
    }; 

    if(!circleFifth.classList.contains('blue')) {
        
    }else {
        circleFifth.classList.remove('blue')
    }; 

    if(!circleOne.classList.contains('blue')) {
        
    }else {
        circleOne.classList.remove('blue')
    }; 


    if (blogSix.classList.contains('hidden')) {
        blogSix.classList.remove('hidden')
    } else {

    };

    if (blogSecond.classList.contains('hidden')) {
        
    } else {
        blogSecond.classList.add('hidden')
    };

    if (blogThird.classList.contains('hidden')) {
        
    } else {
        blogThird.classList.add('hidden')
    };

    if (blogFourth.classList.contains('hidden')) {
        
    } else {
        blogFourth.classList.add('hidden')
    };

    if (blogFifth.classList.contains('hidden')) {
        
    } else {
        blogFifth.classList.add('hidden')
    };

    if (blogOne.classList.contains('hidden')) {
        
    } else {
        blogOne.classList.add('hidden')
    };

});

const carusel = document.querySelector(".curtain_rightBlog_834");
const caruselItems = carusel.querySelectorAll(".carousel-item");
const nextBtn = carusel.querySelector('.carousel-control-next');
const prevBtn = carusel.querySelector('.carousel-control-prev');

[nextBtn, prevBtn].forEach((btn) =>{
    btn.addEventListener('click', ()=> {
        caruselItems.forEach((item, index) => {
            const isActive = item.classList.contains('active')
            let numberSlide = 0;
            
            if(isActive) {
                if(btn.classList.contains('carousel-control-next')) {
                    if(index < caruselItems.length - 1) {
                        numberSlide = index + 1;
                    } else {
                        numberSlide = 0;
                    }
                } else {
                    if(index === 0) {
                        numberSlide = caruselItems.length - 1;
                    } else {
                        numberSlide = index - 1;
                    }
                }

                if(numberSlide <= 1) {
                    changeText.textContent = 'Устройство террасы';
                } else if(numberSlide  > 1 && numberSlide <= 3) {
                    changeText.textContent = 'Реконструкция забора';
                } else if(numberSlide  > 3 && numberSlide <= 5) {
                    changeText.textContent = 'Устройство плитного фундамента';
                } else if(numberSlide  > 5 && numberSlide <= 7) {
                    changeText.textContent = 'Устройство вентилируемого фасада';
                } else if(numberSlide  > 7 && numberSlide <= 9) {
                    changeText.textContent = 'Сборка и монтаж электрического щита';
                } else if(numberSlide  > 9) {
                    changeText.textContent = 'Ванна под ключ';
                };
            }

        })
    });
});

 