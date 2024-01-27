let navBar = document.getElementById("header__nav__hamburger-btn");
let navList = document.getElementById("header__nav-list");

let backtop = document.getElementById("backtop");

let navShrink = document.getElementById("navshrink")

// let darkMode = document.getElementById("dark-mode");


// let darkModeIcon = document.getElementById("dark-mode__icon");

let body = document.getElementById("body")



window.addEventListener("scroll", function () {
    showBacktop();
    showNavShrink();
})


navBar.addEventListener("click", function () {
    navList.classList.toggle("show-header__nav-list");
})

function showBacktop() {
    if (scrollY > 200) {
        backtop.classList.add("show-backtop")
    } else {
        backtop.classList.remove("show-backtop")
    }
}

function showNavShrink() {
    if (scrollY > 0) {
        navshrink.classList.add("show-nav-shrink")
    } else {
        navshrink.classList.remove("show-nav-shrink")
    }
}


const togglePassword = document.querySelector("#toggle-password");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});

// darkMode.addEventListener("click", function() {
//     darkModeIcon.classList.toggle("fa-moon");
//     darkModeIcon.classList.toggle("fa-sun");
//     body.classList.toggle("light");
// });


