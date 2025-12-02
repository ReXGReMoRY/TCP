const $ = selector => document.querySelector(selector)

document.addEventListener("DOMContentLoaded", () => {
  console.log("axioma ya estoy aqui");
  document.getElementById("addDogButton").addEventListener("click", () => {
    const _show = document.getElementsByClassName("dogMainPage");
    _show.classList.toggle("dogMainPage");
  }) 
})
