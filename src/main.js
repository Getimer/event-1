const level1 = document.querySelector(".level1");
const level2 = document.querySelector(".level2");
const level3 = document.querySelector(".level3");
const level4 = document.querySelector(".level4");
const level5 = document.querySelector(".level5");
const level6 = document.querySelector(".level6");
const level7 = document.querySelector(".level7");
let n = 1;
level1.addEventListener(
  "click",
  (e) => {
    const t = e.currentTarget;
    setTimeout(() => {
      t.classList.remove("x");
    }, n * 500);
    n++;
  },
  true
);
level1.addEventListener("click", (e) => {
  const t = e.currentTarget;
  setTimeout(() => {
    t.classList.add("x");
  }, n * 500);
  n++;
});
level2.addEventListener(
  "click",
  (e) => {
    const t = e.currentTarget;
    setTimeout(() => {
      t.classList.remove("x");
    }, n * 500);
    n++;
  },
  true
);
level2.addEventListener("click", (e) => {
  const t = e.currentTarget;
  setTimeout(() => {
    t.classList.add("x");
  }, n * 500);
  n++;
});
level3.addEventListener(
  "click",
  (e) => {
    const t = e.currentTarget;
    setTimeout(() => {
      t.classList.remove("x");
    }, n * 500);
    n++;
  },
  true
);
level3.addEventListener("click", (e) => {
  const t = e.currentTarget;
  setTimeout(() => {
    t.classList.add("x");
  }, n * 500);
  n++;
});
level4.addEventListener(
  "click",
  (e) => {
    const t = e.currentTarget;
    setTimeout(() => {
      t.classList.remove("x");
    }, n * 500);
    n++;
  },
  true
);
level4.addEventListener("click", (e) => {
  const t = e.currentTarget;
  setTimeout(() => {
    t.classList.add("x");
  }, n * 500);
  n++;
});
level5.addEventListener(
  "click",
  (e) => {
    const t = e.currentTarget;
    setTimeout(() => {
      t.classList.remove("x");
    }, n * 500);
    n++;
  },
  true
);
level5.addEventListener("click", (e) => {
  const t = e.currentTarget;
  setTimeout(() => {
    t.classList.add("x");
  }, n * 500);
  n++;
});
level6.addEventListener(
  "click",
  (e) => {
    const t = e.currentTarget;
    setTimeout(() => {
      t.classList.remove("x");
    }, n * 500);
    n++;
  },
  true
);
level6.addEventListener("click", (e) => {
  const t = e.currentTarget;
  setTimeout(() => {
    t.classList.add("x");
  }, n * 500);
  n++;
});
level7.addEventListener(
  "click",
  (e) => {
    const t = e.currentTarget;
    setTimeout(() => {
      t.classList.remove("x");
    }, n * 500);
    n++;
  },
  true
);
level7.addEventListener("click", (e) => {
  const t = e.currentTarget;
  setTimeout(() => {
    t.classList.add("x");
  }, n * 500);
  n++;
});
