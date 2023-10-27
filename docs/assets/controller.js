(async () => {
  const res = await fetch("/assets/controller.svg");
  const controllerSVG = await res.text();
  document.querySelector("template#controller").outerHTML = controllerSVG;
  const current = document.querySelector("#current");
  for (let button in butttonMappings) {
    let buttonElement = document.getElementById(button);
    buttonElement.style.cursor = "pointer";
    buttonElement.style.filter =
      "drop-shadow(3px 5px 2px rgb(255 255 0 / 0.4))";
    buttonElement.addEventListener("mouseenter", () => {
      let buttonName = butttonMappings[button];
      current.innerText = buttonName;
    });
    buttonElement.addEventListener("mouseleave", () => {
      current.innerText = "";
    });
  }

})();

