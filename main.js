window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var navbar = document.getElementById("navbar");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navbar.classList.add("transparent");
  } else {
    navbar.classList.remove("transparent");
  }
}

var menuButton = document.getElementById("menu-btn");
var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu"); // Add the ID of your menu here

menuButton.addEventListener("click", function () {
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});
