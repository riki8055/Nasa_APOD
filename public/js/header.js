// const loadingContainer = document.querySelector(".loading-container");
const container = document.querySelector(".container");
const navBtnOPen = document.querySelector(".nav-btn-open");
const navBtnClose = document.querySelector(".nav-btn-close");

navBtnOPen.addEventListener("click", () => {
  container.classList.add("change");
});

navBtnClose.addEventListener("click", () => {
  container.classList.remove("change");
});
