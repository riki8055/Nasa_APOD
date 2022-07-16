const loadingContainer = document.querySelector(".loading-container");
const container = document.querySelector(".container");
const navBtnOPen = document.querySelector(".nav-btn-open");
const navBtnClose = document.querySelector(".nav-btn-close");

document.onreadystatechange = () => {
  if (document.readyState !== "complete") {
    container.style.opacity = 0;
    container.style.visibility = "hidden";
    loadingContainer.style.opacity = 1;
    loadingContainer.style.visibility = "visible";
  } else {
    container.style.opacity = 1;
    container.style.visibility = "visible";
    loadingContainer.style.opacity = 0;
    loadingContainer.style.visibility = "hidden";
  }
};

navBtnOPen.addEventListener("click", () => {
  container.classList.add("change");
});

navBtnClose.addEventListener("click", () => {
  container.classList.remove("change");
});
