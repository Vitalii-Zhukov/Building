let questionsWrapper = document.querySelectorAll(".questions_button_wrapper");
let btnQuestionsList = document.getElementById("questions_main_text");
let questionsModal = document.getElementById("questions_wrapper_change");
let changeText = document.getElementById("change_text");

let btnFirst = document.getElementById("questions_first_btn");
// let btnSecond = document.getElementById("questions_second_btn");
let btnThird = document.getElementById("questions_third_btn");

let questionsBlogFirst = document.getElementById("questions_blog_one");
// let questionsBlogSecond = document.getElementById("questions_blog_second");
let questionsBlogThird = document.getElementById("questions_blog_third");

questionsWrapper.forEach((item) => {
    const header = item.querySelector('.questions_button')
    header.addEventListener('click', () => {
        item.classList.toggle('hidden')
    })
    
    item.querySelector('.questions_close').addEventListener('click', () => {
        item.classList.add('hidden')
    })
});

btnQuestionsList.addEventListener('click', () => {
    questionsModal.classList.toggle('hidden');
    
});

btnFirst.addEventListener('click', () => {
    changeText.textContent = 'Общие вопросы';
    questionsModal.classList.toggle('hidden'); 

    if(!btnFirst.classList.contains('blue')) {
        btnFirst.classList.add('blue')
    }; 

    // btnSecond.classList.remove('blue');
    btnThird.classList.remove('blue');

    if(questionsBlogFirst.classList.contains('hidden')) {
        questionsBlogFirst.classList.remove('hidden')
    } else {

    }; 

    // if(questionsBlogSecond.classList.contains('hidden')) {
        
    // } else {
    //     questionsBlogSecond.classList.add('hidden')
    // }; 

    if(questionsBlogThird.classList.contains('hidden')) {
        
    } else {
        questionsBlogThird.classList.add('hidden')
    }; 
    
});

// btnSecond.addEventListener('click', () => {
//     changeText.textContent = 'Что входит';
//     questionsModal.classList.toggle('hidden'); 
    
//     if(!btnSecond.classList.contains('blue')) {
//         btnSecond.classList.add('blue')
//     }; 

//     btnFirst.classList.remove('blue');
//     btnThird.classList.remove('blue');

//     if(questionsBlogFirst.classList.contains('hidden')) {
        
//     } else {
//         questionsBlogFirst.classList.add('hidden')
//     }; 

//     if(questionsBlogSecond.classList.contains('hidden')) {
//         questionsBlogSecond.classList.remove('hidden')
//     } else {
        
//     }; 

//     if(questionsBlogThird.classList.contains('hidden')) {
        
//     } else {
//         questionsBlogThird.classList.add('hidden')
//     }; 
    
    

// });

btnThird.addEventListener('click', () => {
    changeText.textContent = 'Оплата';
    questionsModal.classList.toggle('hidden'); 

    if(!btnThird.classList.contains('blue')) {
        btnThird.classList.add('blue')
    }; 

    btnFirst.classList.remove('blue');
    // btnSecond.classList.remove('blue');

    if(questionsBlogFirst.classList.contains('hidden')) {
        
    } else {
        questionsBlogFirst.classList.add('hidden')
    }; 

    // if(questionsBlogSecond.classList.contains('hidden')) {
        
    // } else {
    //     questionsBlogSecond.classList.add('hidden')
    // }; 

    if(questionsBlogThird.classList.contains('hidden')) {
        questionsBlogThird.classList.remove('hidden')
    } else {
        
    }; 
    

});

const btnQuestions = document.querySelector('.section_Btn_makeQuestions');
const form = document.querySelector('.questions_form .wrapper');
const clousebtnQuestions = document.querySelector('.questions_form_clouse');
// const formBlog = document.querySelector('.questions_form');

// formBlog.forEach((item) => {
//     const btn = item.querySelector('.section_Btn_makeQuestions')
//     btn.addEventListener('click', () => {
//         form.classList.remove('hidden')
//     })
// })

// formBlog.forEach((item) => {
//     const btnClouse = item.querySelector('.questions_form_clouse')
//     btnClouse.addEventListener('click', () => {
//         form.classList.add('hidden')
//     })
// })

btnQuestions.addEventListener('click', () => {
    form.classList.remove('hidden')
})

clousebtnQuestions.addEventListener('click', () => {
    form.classList.add('hidden')
})


const btnQuestionsOne = document.querySelector('.section_Btn_makeQuestions_one');
const formOne = document.querySelector('.questions_form_one .wrapper');
const clousebtnQuestionsOne = document.querySelector('.questions_form_clouse_one');

btnQuestionsOne.addEventListener('click', () => {
    formOne.classList.remove('hidden')
})

clousebtnQuestionsOne.addEventListener('click', () => {
    formOne.classList.add('hidden')
})

const btnQuestionsTwo = document.querySelector('.section_Btn_makeQuestions_two');
const formTwo = document.querySelector('.questions_form_two .wrapper');
const clousebtnQuestionsTwo = document.querySelector('.questions_form_clouse_two');

btnQuestionsTwo.addEventListener('click', () => {
    formTwo.classList.remove('hidden')
})

clousebtnQuestionsTwo.addEventListener('click', () => {
    formTwo.classList.add('hidden')
})

const btnQuestionsFour = document.querySelector('.section_Btn_makeQuestions_four');
const formFour = document.querySelector('.questions_form_four .wrapper');
const clousebtnQuestionsFour = document.querySelector('.questions_form_clouse_four');

btnQuestionsFour.addEventListener('click', () => {
    formFour.classList.remove('hidden')
})

clousebtnQuestionsFour.addEventListener('click', () => {
    formFour.classList.add('hidden')
})