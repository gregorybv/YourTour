const allNavButtons = document.querySelectorAll('.menu-main-block__list');
allNavButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        allNavButtons.forEach((button) => {
            button.classList.remove('menu-main-block__list_active');
        });
        const { target } = event;
        target.classList.add('menu-main-block__list_active');
    });
});
