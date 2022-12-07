const allNavButtons = document.querySelectorAll(".menu-main-block__list")
allNavButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        allNavButtons.forEach((button) => {
            button.classList.remove("menu-main-block__list_active")
        })
        const { target } = event
        target.classList.add("menu-main-block__list_active")
    })
})

//button checkbox
const checkButton = document.querySelector(".checkbox__real")

if (checkButton) {
    checkButton.addEventListener("click", () => {
        checkButton.classList.toggle("checkbox__reals")
    })
}
//button radio
// const checkRadio = document.querySelector(".radio__checkbox")
// const checkRadioTwo = document.querySelector(".radio__checkbox_2")

// if (checkRadio) {
//     checkRadio.addEventListener("click", () => {
//         checkRadio.classList.toggle("radio__checkboxx")
//     })
// }

// if (checkRadioTwo) {
//     checkRadioTwo.addEventListener("click", () => {
//         checkRadioTwo.classList.toggle("radio__checkboxx")
//     })
// }

const checkRadio = document.querySelector(".radio__checkbox")
const checkRadioTwo = document.querySelector(".radio__checkbox_2")
let switchRadio = function () {
    if (checkRadio) {
        checkRadio.addEventListener("click", () => {
            checkRadio.classList.toggle("radio__checkboxx")
        })
    }

    if (checkRadioTwo) {
        checkRadioTwo.addEventListener("click", () => {
            checkRadioTwo.classList.toggle("radio__checkboxx")
        })
    }
}

switchRadio()
//Проверка заполнения телефона
let inp = document.querySelector("#tel")

// Проверяем фокус
inp.addEventListener("focus", (_) => {
    // Если там ничего нет или есть, но левое
    if (!/^\+\d*$/.test(inp.value))
        // То вставляем знак плюса как значение
        inp.value = "+"
})

inp.addEventListener("keypress", (e) => {
    // Отменяем ввод не цифр
    if (!/\d/.test(e.key)) e.preventDefault()
})
// const hoverBlock = document.querySelector('.photo-main-block__items');
// const hoverNewBlock = document.querySelector('.photo-main-block__footer');
// hoverBlock.addEventListener('mouseover', () => {
//     hoverNewBlock.classList.add('hover');
//     //    console.log('privet');
//     });
// hoverBlock.addEventListener('mouseout', () => {
//     hoverNewBlock.classList.remove('hover');
//         // console.log('privet');
// });

// let p = document.querySelector('.photo-main-block__img');
// let c = document.querySelectorAll('.photo-main-block__footer');

// p.addEventListener('mouseover', e => c.forEach(a => a.classList.add("photo-main-block__footer_hover")));
// p.addEventListener('mouseout', e => c.forEach(a => a.classList.remove("photo-main-block__footer_hover")));

// const hoverBlock = document.getElementsByClassName('photo-main-block__items');
// const hoverNewBlock = document.getElementsByClassName('photo-main-block__footer');

// hoverBlock.onmouseover = function(){hoverNewBlock.classList.add('hover')};
// hoverBlock.onmouseout = function(){hoverNewBlock.classList.remove('hover')};
