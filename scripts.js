/* Elements */
const body = document.getElementById("body");
const container = document.getElementById("container");
const gridSizeInput = document.getElementById("grid-size-input");
const colourInput = document.getElementById("colour-input");
const colourButton = document.getElementById("colour-button");
const rainbowButton = document.getElementById("rainbow-button");
const gridButton = document.getElementById("grid-button");
const rubberButton = document.getElementById("rubber-button");
const clearButton = document.getElementById("clear-button");
/* Elements */

/* Code */
generateGrid(16);

gridSizeInput.addEventListener("input", () => {
  const gridSize = parseInt(gridSizeInput.value);
  if (gridSize <= 0 || gridSize > 100 || isNaN(gridSize)) {
    alert("Invalid input. Please enter a number between 1 and 100.");
    return;
  }
  removeGrid();
  generateGrid(gridSize);
});

function generateGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, calc(960px / ${size}))`;
  container.style.gridTemplateRows = `repeat(${size}, calc(960px / ${size}))`;
  for (let rows = 0; rows < size; rows++) {
    for (let columns = 0; columns < size; columns++) {
      const square = document.createElement("div");
      square.id = "square";
      square.style.backgroundColor = "transparent";
      container.appendChild(square);

      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
      });
    }
  }
}

function removeGrid() {
  const squares = document.querySelectorAll("#square");
  squares.forEach((square) => {
    square.remove();
  });
}
/* Code */
