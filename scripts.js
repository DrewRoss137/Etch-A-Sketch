/* Elements */

const body = document.getElementById("body");

const etchASketchContainer = document.getElementById("etch-a-sketch-container");

const colourWheel = document.getElementById("colour-wheel");

const colourButton = document.getElementById("colour-button");

const rainbowButton = document.getElementById("rainbow-button");

const rubberButton = document.getElementById("rubber-button");

const clearButton = document.getElementById("clear-button");

for (let rows = 0; rows < 16; rows++) {
  for (let columns = 0; columns < 16; columns++) {
    const square = document.createElement("div");
    square.id = "square";
    etchASketchContainer.appendChild(square);

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });
  }
}
