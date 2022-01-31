const btn = document.querySelector(".toggle-btn");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const cancelBtn = document.querySelector(".cancel-btn");
btn.addEventListener("click", () => {
  backdrop.style.visibility = "visible";
  modal.style.visibility = "visible";
});

cancelBtn.addEventListener("click", () => {
  backdrop.style.visibility = "hidden";
  modal.style.visibility = "hidden";
});
