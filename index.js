const switchMode = document.querySelector("#moon")
const Body = document.querySelector("body")
const mainContent = document.querySelector(".main-content")

const menu = document.querySelector(".menu-btn")
const ul = document.querySelector('ul')

console.log(switchMode,mainContent);

switchMode.addEventListener('click',()=> {
    // alert("It worked !!")
    // if (switchMode.endsWith("moon.png")) {
    //     switchMode.src = "./images/sun.png";
    //   } else {
    //     switchMode.src = "./images/moon.png";
    //   }
    mainContent.classList.toggle('active')
    Body.classList.toggle('active')
})

menu.addEventListener('click',()=> {
    menu.classList.toggle('active')
 ul.classList.toggle('active')
})

