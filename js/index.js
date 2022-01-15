// Handling Burger click event

navbar = document.querySelector(".navbar")
nav_list = document.querySelector(".nav-list")
nav_right = document.querySelector(".nav-right")
burger = document.querySelector(".burger")

burger.addEventListener("click",()=>{
    navbar.classList.toggle("nav-height")
    nav_list.classList.toggle("v-class-rsp")
    nav_right.classList.toggle("v-class-rsp")
})

