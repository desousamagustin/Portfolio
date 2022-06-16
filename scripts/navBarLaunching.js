var barsIcon = document.querySelector(".bars-icon");
var navBar = document.querySelector(".header__nav");
var navBarStatus = false;
var body = document.getElementById("body");

barsIcon.addEventListener("click", () => {
    if(navBarStatus == false) {
        navBar.style.display="flex";
        barsIcon.classList.remove("fa-bars");
        barsIcon.classList.add("fa-xmark");
        navBarStatus = true;
        body.style.overflowY="hidden";
        
    } else {
        navBar.style.display="none";
        barsIcon.classList.remove("fa-xmark");
        barsIcon.classList.add("fa-bars");
        navBarStatus = false;
        body.style.overflowY="auto";
    }
});