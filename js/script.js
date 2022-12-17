const allNavButtons = document.querySelectorAll(".main-block__list")
allNavButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        allNavButtons.forEach((button) => {
            button.classList.remove("main-block__list_active")
        })
        const { target } = event
        target.classList.add("main-block__list_active")
    })
})

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
