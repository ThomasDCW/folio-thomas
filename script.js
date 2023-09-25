console.log("Welcome developpers 👋");
console.log("This is a simple folio made with html css & js");
console.log("You can find all my projects on github 🚀");
console.log(" ----------------------------");
console.log(" https://github.com/ThomasDCW ");
console.log(" ----------------------------");
console.log(
  "🎁 If you want a personal todo app ---> https://todo-app-beta-plum.vercel.app/"
);
const smMenuBtn = document.querySelector(".main-header__sm-scr-nav-btn");
const smMenu = document.querySelector(".main-header__sm-menu");
const smMenuCloseBtn = document.querySelector(".main-header__sm-menu-close");

const smMenuLinks = document.querySelectorAll(".main-header__sm-menu-link");
const smMenuLink1 = document.querySelector(".main-header__sm-menu-link--1");
const smMenuLink2 = document.querySelector(".main-header__sm-menu-link--2");
const smMenuLink3 = document.querySelector(".main-header__sm-menu-link--3");

smMenuBtn.addEventListener("click", () => {
  smMenu.style.transitionDelay = "0s";
  smMenu.classList.add("main-header__sm-menu--active");

  smMenuLink1.style.transitionDelay = ".5s";
  smMenuLink1.style.transform = "translateY(0)";
  smMenuLink1.style.opacity = "1";

  smMenuLink2.style.transitionDelay = ".8s";
  smMenuLink2.style.transform = "translateY(0)";
  smMenuLink2.style.opacity = "1";

  smMenuLink3.style.transitionDelay = "1.1s";
  smMenuLink3.style.transform = "translateY(0)";
  smMenuLink3.style.opacity = "1";
});

smMenuLinks.forEach((ele) => {
  ele.addEventListener("click", () => {
    smMenuLink3.style.transitionDelay = ".3s";
    smMenuLink3.style.transform = "translateY(50px)";
    smMenuLink3.style.opacity = "0";

    smMenuLink2.style.transitionDelay = ".6s";
    smMenuLink2.style.transform = "translateY(50px)";
    smMenuLink2.style.opacity = "0";

    smMenuLink1.style.transitionDelay = ".9s";
    smMenuLink1.style.transform = "translateY(50px)";
    smMenuLink1.style.opacity = "0";

    smMenu.style.transitionDelay = "1.2s";
    smMenu.classList.remove("main-header__sm-menu--active");

    setTimeout(() => {
      document.getElementById(ele.name).scrollIntoView();
    }, 1500);
  });
});

smMenuCloseBtn.addEventListener("click", () => {
  smMenuLink3.style.transitionDelay = ".3s";
  smMenuLink3.style.transform = "translateY(50px)";
  smMenuLink3.style.opacity = "0";

  smMenuLink2.style.transitionDelay = ".6s";
  smMenuLink2.style.transform = "translateY(50px)";
  smMenuLink2.style.opacity = "0";

  smMenuLink1.style.transitionDelay = ".9s";
  smMenuLink1.style.transform = "translateY(50px)";
  smMenuLink1.style.opacity = "0";

  smMenu.style.transitionDelay = "1.2s";
  smMenu.classList.remove("main-header__sm-menu--active");
});

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("text-animation");
  const text = "FULLSTACK DEVELOPER";
  let index = 0;

  function showNextLetter() {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(showNextLetter, 150); // Temps de délai entre chaque lettre
    }
  }

  showNextLetter();
});
smMenuLink1.addEventListener("click", (event) => {
  event.preventDefault(); // Empêche le comportement par défaut du lien

  // Supprimer la classe "active" de tous les liens
  smMenuLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Ajouter la classe "active" uniquement au lien cliqué
  smMenuLink1.classList.add("active");

  // Effectuer le défilement de la page jusqu'en haut en douceur
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
