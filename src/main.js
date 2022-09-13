const level1 = document.querySelector(".level1");
const level2 = document.querySelector(".level2");
const level3 = document.querySelector(".level3");
const level4 = document.querySelector(".level4");
const level5 = document.querySelector(".level5");
const level6 = document.querySelector(".level6");
const level7 = document.querySelector(".level7");
let n = 1;
let fn = (e) => {
  const t = e.currentTarget;
  setTimeout(() => {
    t.classList.remove("x");
  }, n * 500);
  n++;
};
let fm = (e) => {
  const t = e.currentTarget;
  setTimeout(() => {
    t.classList.add("x");
  }, n * 500);
  n++;
};
level1.addEventListener("click", fn, true);
level1.addEventListener("click", fm);
level2.addEventListener("click", fn, true);
level2.addEventListener("click", fm);
level3.addEventListener("click", fn, true);
level3.addEventListener("click", fm);
level4.addEventListener("click", fn, true);
level4.addEventListener("click", fm);
level5.addEventListener("click", fn, true);
level5.addEventListener("click", fm);
level6.addEventListener("click", fn, true);
level6.addEventListener("click", fm);
level7.addEventListener("click", fn, true);
level7.addEventListener("click", fm);
