const switchMode = document.querySelector("#moon")
const Body = document.querySelector("body")
const mainContent = document.querySelector(".main-content")



console.log(switchMode,mainContent);

switchMode.addEventListener('click',()=> {
    mainContent.classList.toggle('active')
    Body.classList.toggle('active')
})



const menuBtn = document.querySelector(".menu-btn")
const navbarLinks = document.getElementById("navbar-links");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active")
  navbarLinks.classList.toggle("active");
});
