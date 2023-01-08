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
