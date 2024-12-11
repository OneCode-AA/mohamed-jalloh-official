const themeBtn = document.querySelector(".theme-btn")
const themeSwitch = document.querySelector(".status-indicator")
const header = document.querySelector(".header")
const logo = document.querySelector(".logo")




const menu = document.querySelector('.menu-btn')
const navMenu = document.querySelector(".nav")
const navList = document.querySelectorAll(".nav-li")
const navLink = document.querySelectorAll(".nav-li-a")


window.addEventListener("scroll", function () {
    if (window.scrollY <= 10) {
       header.classList.add("activeScrolling")
    } else {
        header.classList.remove("activeScrolling")
    }
   });



menu.addEventListener('click', function () {
    if(navMenu.style.display = "none") {
        navMenu.style.display = "flex"
        navMenu.classList.toggle("opened")
        menu.classList.toggle("active")
        themeBtn.classList.toggle("active")
    } 

})


    navLink.forEach(item => {
        item.addEventListener('click', () => {
          navMenu.classList.remove('active');
          menu.classList.remove('active');
          themeBtn.classList.remove('active');
        });
      });


      window.addEventListener("resize", function () {
        if (window.screen.width >= 1024) {
           navMenu.classList.remove("opened")
           menu.classList.remove("active")
        }
       });




themeSwitch.addEventListener("click", function() {
    if(document.body.classList.contains("dark-theme")) {
        document.body.classList.add("light-theme")
        document.body.classList.remove("dark-theme")
        themeSwitch.classList.add("day")
        themeSwitch.classList.remove("night")
        localStorage.setItem("theme", "light-mode");
    } else {
        document.body.classList.add("dark-theme")
        document.body.classList.remove("light-theme")
        themeSwitch.classList.add("night")
        themeSwitch.classList.remove("day")

        localStorage.setItem("theme", "dark-mode");
    }


   
})


if (localStorage.getItem("theme") === "light-mode") {
    themeSwitch.classList.add("day")
    themeSwitch.classList.remove("night")
    document.body.classList.add("light-theme")
    document.body.classList.remove("dark-theme")
  } else {
    themeSwitch.classList.add("night")
    themeSwitch.classList.remove("day")
    document.body.classList.add("dark-theme")
    document.body.classList.remove("light-theme")
  }
  

  window.addEventListener("resize" , function (){
    if (document.body.classList.contains("dark-theme") && window.innerWidth < 768) {
        logo.setAttribute("src", "./assets/images/linkedin_standard_logo_by_zenbusiness_processed.png")
    } else if(document.body.classList.contains("light-theme") && window.innerWidth < 768) {
        logo.setAttribute("src", "./assets/images/linkedin_standard_logo_by_zenbusiness.png")
    } else if (document.body.classList.contains("dark-theme") && window.innerWidth > 768) {
       
        logo.setAttribute("src", "./assets/images/horizontal_on_white_2000x899px_by_zenbusiness.png")
    } else {
        logo.setAttribute("src", "./assets/images/horizontal_on_corporate_2000x899px_by_zenbusiness.png")
    }
})

