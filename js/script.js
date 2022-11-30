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

const hoverBlock = document.querySelectorAll('.photo-main-block__items');
hoverBlock.forEach((button) => {
    button.addEventListener('mouseover', (event) => {
        button.classList.add('.photo-main-block__footer.hover');
        // console.log('ptivet');
        hoverBlock.forEach((button) => {
            button.classList.remove('.photo-main-block__footer.hover');
        });
        const { target } = event;
        target.classList.add('.photo-main-block__footer.hover');
    });
});
// const lnk=document.getElementById('#hovers');
// const bk=document.querySelector('.photo-main-block__footer:hover');
// lnk.onmouseover=function(){bk.style.visibility="visible"}
// lnk.onmouseout=function(){bk.style.visibility="hidden"}

// const hoverBlock = document.querySelectorAll('.photo-main-block__items');
// const hoverNewBlock = document.querySelectorAll('.photo-main-block__footer');

// for(let i = 0; 1 <= hoverBlock.length; i++) {
//     let i = event
//     event.addEventListener('mouseenter', () => {
//             hoverNewBlock.classList.add('hover')
//         })
//         i()
// }

// hoverBlock.forEach((items) => {
//     if(!hoverBlock) {
//         items.addEventListener('mouseenter', () => {
//     hoverNewBlock.classList.add('hover')
// })
// items.addEventListener('mouseleave', () => {
//     hoverNewBlock.classList.remove('hover')
// })
// }})

// })
// const hoverBlock = document.querySelector('.photo-main-block__items');
// const hoverNewBlock = document.querySelector('.photo-main-block__footer');

// hoverBlock.addEventListener("mouseover", function (event) {
//     let target = event.target.closest('div')
//     if(!target) return
//     hoverNewBlock.classList.add('hover')
// })

