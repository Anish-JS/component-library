const emailVal = document.querySelector(".validation-input");
const icon = document.querySelector(".error");

console.log(icon);
icon.style.display = "none";

console.log(emailVal);
console.log(emailVal.value);

emailVal.addEventListener("input", () => {
  let pattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   console.log(!emailVal.value.includes(pattern));
  if (emailVal.value === "" || !emailVal.value.match(pattern)) {
    emailVal.classList.add("error-input");
    emailVal.classList.remove("textbox");
    icon.style.display = "inline";
  } else {
    emailVal.classList.remove("error-input");
    emailVal.classList.add("textbox");
    icon.style.display = "none";
  }
});
