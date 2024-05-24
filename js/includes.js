const includesSection = document.querySelector("#includes");
const generalBlock = includesSection.querySelector("#general");
const minorBlocks = [
    includesSection.querySelector("#general-extended"),
    includesSection.querySelector("#bathroom"),
    includesSection.querySelector("#kitchen"),
]

generalBlock.querySelector(".actions")
    .querySelectorAll("button[data-to-open]")
    .forEach((button) => {
        button.addEventListener("click", (event) => {
            const toOpen = event.target.getAttribute("data-to-open");

            minorBlocks.forEach((block) => {
                if(!block.classList.contains("hidden")) {
                    block.classList.add("hidden");
                }
            })

            if(!generalBlock.classList.contains("hidden")) {
                generalBlock.classList.add("hidden");
            }

            includesSection.querySelector(`#${toOpen}`).classList.remove("hidden");
        })
    });

const closeMinorBlocksCollections = includesSection.querySelectorAll("button[data-close-minor-blocs]");
closeMinorBlocksCollections.forEach((button) => {
    button.addEventListener("click", () => {
        minorBlocks.forEach((block) => {
            if(!block.classList.contains("hidden")) {
                block.classList.add("hidden");
            }
        })

        if(generalBlock.classList.contains("hidden")) {
            generalBlock.classList.remove("hidden");
        }
    })
})

/**
 * МОДАЛКИ
 */
const modalWrapper = includesSection.querySelector(".modal-wrapper");
const modalTitle = modalWrapper.querySelector(".modal-content header p");
const modalCloseBtn = modalWrapper.querySelector(".modal-content header button");
const modalMain = modalWrapper.querySelector(".modal-content main");

//open modal
includesSection.querySelectorAll("button[data-modal-context]")
    .forEach((block) => {
        block.addEventListener("click", (event) => {
            const typeModal = event.target.getAttribute("data-modal-context");
            const { title, main, additionally } = modalContent[typeModal]

            createModal(title, main, additionally);

            if(modalWrapper.classList.contains("hidden")) {
                modalWrapper.classList.remove("hidden");
            }
        });
})

//close modal
modalCloseBtn.addEventListener("click", () => {
   if(!modalWrapper.classList.contains("hidden")) {
        modalWrapper.classList.add("hidden");
    }
});

function createModal(title, list, additionally) {
    modalTitle.textContent = title;
    list = list.reduce((acc, item) => acc += `<li><div class="dot"></div>${item}</li>`, '');

    modalMain.innerHTML = `
        <ul class="list">
            ${list}
        </ul>
    `

    if (additionally) {
        modalMain.innerHTML += `
            <div class="additionally">
                ${additionally}
            </div>
        `
    }
}

const modalContent = {
    general: {
        title: "Строительство домов",
        main: [
            "Комплексное строительство каменных домов;",
            "Строительсто домов по каркасной технологии;",
            "Проектирование/дизайн;",
            "Планировка участка;",
            "Фундамент;",
            "Кладка блоков.",
            
        ],
    },
    bathroom: {
        title: "Сварочные работы",
        main: [
            "Изготовление металлических конструкций;",
            "Монтаж металлических конструкций;",
            "Устройство заборов;",
            "Монтаж металлических навесов/козырьков;",
            "Производство беседок (металл/дерево).",
        ],
    },
    kitchen: {
        title: "Инженерные сети",
        main: [
            "Устройство септика;",
            "Прокладка канализационных сетей;",
            "Устройство скважин(кессон);",
            "Монтаж сантехники;",
            "Электромонтажные работы;",
            "Прокладка вентиляционных систем;",
            "Монтаж систем отопления.",
        ],
    },
    dontDo: {
        title: "Бетонные работы",
        main: [
            "Фундамент(ленточный, плитный, свайно-ростверковый, и др...);",
            "Подпорные стены из бетонна;",
            "Ж/б перекрытия;",
            "Стяжка пола механизированным способом.",
        ],
        
    },
}
