let btns = document.querySelectorAll("button");
let social = document.querySelector(".social")

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    social.classList.toggle("active")
  })
})