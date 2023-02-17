const switchMode = document.querySelector("#moon")
const Body = document.querySelector("body")
const mainContent = document.querySelector(".main-content")



console.log(switchMode,mainContent);

switchMode.addEventListener('click',()=> {
    mainContent.classList.toggle('active')
    Body.classList.toggle('active')
})



// Get the menu button and navbar links
const menuBtn = document.querySelector(".menu-btn")
const navbarLinks = document.getElementById("navbar-links");

// Add click event listener to the menu button
menuBtn.addEventListener("click", () => {
    console.log('hndsdj');
  // Toggle the active class on the navbar links
  navbarLinks.classList.toggle("active");
});
