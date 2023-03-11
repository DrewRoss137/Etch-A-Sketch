const body = document.getElementById("body");

const container = document.getElementById("container");
const gridSizeInput = document.getElementById("grid-size-input");
gridSizeInput.addEventListener("blur", () => {
  gridSizeInput.setAttribute("placeholder", "Grid Size");
});
gridSizeInput.addEventListener("focus", () => {
  gridSizeInput.removeAttribute("placeholder");
});
gridSizeInput.addEventListener("input", () => {
  const gridSizeInputValue = gridSizeInput.value;
  removeGrid();
  generateGrid(gridSizeInputValue);
});

const colourInput = document.getElementById("colour-input");

const colourButton = document.getElementById("colour-button");

const rainbowButton = document.getElementById("rainbow-button");

const gridButton = document.getElementById("grid-button");

const rubberButton = document.getElementById("rubber-button");

const clearButton = document.getElementById("clear-button");

generateGrid(16);

function generateGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, calc(960px / ${size}))`;
  container.style.gridTemplateRows = `repeat(${size}, calc(960px / ${size}))`;
  for (let columns = 0; columns < size; columns++) {
    for (let rows = 0; rows < size; rows++) {
      const square = document.createElement("div");
      square.id = "square";
      square.style.backgroundColor = "transparent";
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
      });
      container.appendChild(square);
    }
  }
};

function removeGrid() {
  const squares = document.querySelectorAll("#square");
  squares.forEach((square) => {
    square.remove();
  });
};
