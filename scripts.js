// Adding Dark Mode Theme
const toggle = document.getElementById("theme-icon");

var navbar = document.getElementById("navbar");
var home = document.getElementById("home");
var portofolio = document.getElementById("portofolio");
var headPortofolio = document.getElementById("head-portofolio");
var descriptionPortofolio = document.getElementById("description-portofolio")
var portoCard = document.getElementById("portofolio-card");
var portoCard2 = document.getElementById("portofolio-card2");
var portoCard3 = document.getElementById("portofolio-card3");
var contact = document.getElementById("contact");
var findmeCard = document.getElementById("findme-card");
var findmeCard2 = document.getElementById("findme-card2");
var findmeCard3 = document.getElementById("findme-card3");
var findmeCard4 = document.getElementById("findme-card4");
var findmeCard5 = document.getElementById("findme-card5");
var footer = document.getElementById("footer");

toggle.onclick = function() {
  document.body.classList.toggle("dark-theme")
  document.body.classList.remove("light-theme")

  navbar.classList.toggle("navbar-dark")
  navbar.classList.toggle("bg-dark")
  navbar.classList.remove("bg-white")

  home.classList.toggle("bg-dark")
  home.classList.toggle("text-white")

  portofolio.classList.toggle("bg-black")
  // portofolio.classList.toggle("text-white")

  headPortofolio.classList.toggle("text-white")
  descriptionPortofolio.classList.toggle("text-white")

  portoCard.classList.toggle("text-bg-dark")
  portoCard2.classList.toggle("text-bg-dark")
  portoCard3.classList.toggle("text-bg-dark")

  contact.classList.toggle("text-bg-dark")

  findmeCard.classList.toggle("text-bg-dark")
  findmeCard2.classList.toggle("text-bg-dark")
  findmeCard3.classList.toggle("text-bg-dark")
  findmeCard4.classList.toggle("text-bg-dark")
  findmeCard5.classList.toggle("text-bg-dark")

  footer.classList.toggle("bg-black")
  footer.classList.toggle("text-white")

  if (document.body.classList.contains("dark-theme")) {
    toggle.src = "assets/img/sun.png"
    theme = "dark"
    document.body.classList.remove("light-theme")
  } else {
    toggle.src = "assets/img/moon.png"
    theme = "light"
    document.body.classList.add("light-theme")
  }

  localStorage.setItem("pageTheme", JSON.stringify(theme));
}

let getTheme = JSON.parse(localStorage.getItem("pageTheme"));
if (getTheme === "dark") {
  document.body.classList.toggle("dark-theme")
  document.body.classList.remove("light-theme")

  navbar.classList.toggle("navbar-dark")
  navbar.classList.toggle("bg-dark")

  home.classList.toggle("bg-dark")
  home.classList.toggle("text-white")

  portofolio.classList.toggle("bg-black")
  // portofolio.classList.toggle("text-white")

  headPortofolio.classList.toggle("text-white")
  descriptionPortofolio.classList.toggle("text-white")

  portoCard.classList.toggle("text-bg-dark")
  portoCard2.classList.toggle("text-bg-dark")
  portoCard3.classList.toggle("text-bg-dark")

  contact.classList.toggle("text-bg-dark")

  findmeCard.classList.toggle("text-bg-dark")
  findmeCard2.classList.toggle("text-bg-dark")
  findmeCard3.classList.toggle("text-bg-dark")
  findmeCard4.classList.toggle("text-bg-dark")
  findmeCard5.classList.toggle("text-bg-dark")

  footer.classList.toggle("bg-black")
  footer.classList.toggle("text-white")

  if (document.body.classList.contains("dark-theme")) {
    toggle.src = "assets/img/sun.png"
    theme = "dark"
    document.body.classList.remove("light-theme")
  } else {
    toggle.src = "assets/img/moon.png"
    theme = "light"
    document.body.classList.add("light-theme")
  }
}