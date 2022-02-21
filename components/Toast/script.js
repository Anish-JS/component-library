const btns = document.querySelectorAll(".btn");
const toasts = document.querySelectorAll(".toast");

console.log(toasts);
console.log(btns);
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("working...");
    if (btn.classList.contains("toggle-btn-1")) displaySnackBar(toasts[0]);
    else if (btn.classList.contains("toggle-btn-2")) displaySnackBar(toasts[1]);
    else if (btn.classList.contains("toggle-btn-3")) displaySnackBar(toasts[2]);
    else displaySnackBar(toasts[3]);
  });
});

const displaySnackBar = (toast) => {
  toast.style.visibility = "visible";
  setTimeout(() => {
    toast.style.visibility = "hidden";
  }, 3000);
};
