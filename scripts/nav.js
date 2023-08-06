const hamburgerElement = document.getElementById("js-hamburger");
const navElement = document.getElementById("js-nav");
const barElements = document.querySelectorAll(".header__hamburger-bar");

hamburgerElement.addEventListener("click", () => {
  const isOpen = navElement.dataset.isOpen;

  if (isOpen === "true") {
    navElement.dataset.isOpen = "false";
    barElements.forEach((element) => {
      element.dataset.isOpen = "false";
    });
  } else {
    navElement.dataset.isOpen = "true";
    barElements.forEach((element) => {
      element.dataset.isOpen = "true";
    });
  }
});
