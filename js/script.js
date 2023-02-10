const allNavButtons = document.querySelectorAll(".choice__link");
allNavButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    allNavButtons.forEach((button) => {
      button.classList.remove("choice__link_active");
    });
    const {target} = event;
    target.classList.add("choice__link_active");
  });
});

let inp = document.querySelector("#tel");

inp.addEventListener("focus", (_) => {
  if (!/^\+\d*$/.test(inp.value)) inp.value = "+";
});

inp.addEventListener("keypress", (e) => {
  if (!/\d/.test(e.key)) e.preventDefault();
});


// Scroll

const blocks = document.querySelector('.header__blocks');
const text = document.querySelector('.header__blocks');
const link = document.querySelector('.header__list')
const phone = document.querySelector('.header__link_phone')
const logo = document.querySelector('.header__logo')

document.addEventListener('scroll', () => {
  let stepColor = text.getBoundingClientRect().height;
  let scrollY = window.scrollY;

  if (scrollY > stepColor) {
    blocks.classList.add('header__blocks_scroll')
    link.classList.add('header__link_scroll')
    phone.classList.add('header__link_scroll')
    logo.classList.add('header__logo_scroll')
  } else {
    blocks.classList.remove('header__blocks_scroll')
    link.classList.remove('header__link_scroll')
    phone.classList.remove('header__link_scroll')
    logo.classList.remove('header__logo_scroll')
  }
})
