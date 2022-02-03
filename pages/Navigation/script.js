const btn = document.querySelector(".toggle-navigation");
const modal = document.querySelector(".nav-modal");
const backdrop = document.querySelector(".nav-backdrop");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  const size = window.getComputedStyle(body).width;
  console.log(parseFloat(size));
  if (parseFloat(size) < 640) {
    backdrop.style.visibility = "visible";
    modal.style.display = "block";
  }
});

backdrop.addEventListener("click", () => {
  backdrop.style.visibility = "hidden";
  modal.style.display = "none";
});
