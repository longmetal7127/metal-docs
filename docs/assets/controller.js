const controllerBindings = async (config) => {

  const res = await fetch(`/assets/${config.controllerName}.svg`);

  const controllerSVG = await res.text();
  config.element.innerHTML = controllerSVG;
  
  

  for (let button in config.buttonMappings) {
    let buttonElement = config.element.querySelector(`#${button}`);
    buttonElement.style.cursor = "pointer";
    buttonElement.style.filter =
      "drop-shadow(3px 5px 2px rgb(255 255 0 / 0.4))";
      tippy(buttonElement, {
        content: config.buttonMappings[button],
        placement: 'top',
      })
  }
};
