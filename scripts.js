const body = document.getElementById("body");

const container = document.getElementById("container");

const squares = [];

const gridDimensionsInput = document.getElementById("grid-dimensions-input");
gridDimensionsInput.addEventListener("blur", () => {
  gridDimensionsInput.setAttribute("placeholder", "Grid Size");
});
gridDimensionsInput.addEventListener("focus", () => {
  gridDimensionsInput.removeAttribute("placeholder");
});
gridDimensionsInput.addEventListener("input", (event) => {
  const gridDimensionsInputValue = gridDimensionsInput.value;
  if (
    (gridDimensionsInputValue <= 0 ||
      gridDimensionsInputValue > 64 ||
      isNaN(gridDimensionsInputValue)) &&
    event.data !== null
  ) {
    body.appendChild(invalidInputMessage);
    setTimeout(() => {
      invalidInputMessage.style.opacity = 1;
    }, 10);
    setTimeout(() => {
      invalidInputMessage.style.opacity = 0;
      setTimeout(() => {
        body.removeChild(invalidInputMessage);
      }, 500);
    }, 3000);
    gridDimensionsInput.value = "";
    return;
  }
  removeGrid();
  generateGrid(gridDimensionsInputValue);
});

const invalidInputMessage = document.createElement("div");
invalidInputMessage.id = "invalid-input-message";
invalidInputMessage.textContent =
  "Invalid Grid Size. Please Enter A Number Between 1 And 64.";

const colourInput = document.getElementById("colour-input");

const colourButton = document.getElementById("colour-button");
colourButton.onclick = () => enableStyle("colour");

const rainbowButton = document.getElementById("rainbow-button");
rainbowButton.onclick = () => enableStyle("rainbow");

const toggleGridButton = document.getElementById("toggle-grid-button");
toggleGridButton.onclick = () => toggleGrid();

const rubberButton = document.getElementById("rubber-button");
rubberButton.onclick = () => enableStyle("rubber");

const clearGridButton = document.getElementById("clear-grid-button");
clearGridButton.onclick = () => clearGrid();

function generateGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, calc(960px / ${size}))`;
  container.style.gridTemplateRows = `repeat(${size}, calc(960px / ${size}))`;
  for (let columns = 0; columns < size; columns++) {
    for (let rows = 0; rows < size; rows++) {
      const square = document.createElement("div");
      square.id = "square";
      square.style.borderStyle = "solid";
      container.appendChild(square);
      squares.push(square);
    }
  }
}

function removeGrid() {
  squares.forEach((square) => {
    square.remove();
  });
}

function enableStyle(mode) {
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      if (mode === "colour") {
        square.style.backgroundColor = colourInput.value;
      } else if (mode === "rainbow") {
        square.style.backgroundColor = generateRGBA();
      } else if (mode === "rubber") {
        square.style.backgroundColor = "";
      }
    });
  });
}

function generateRGBA() {
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);
  const randomAlpha = Math.random();
  return `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, ${randomAlpha})`;
}

function toggleGrid() {
  squares.forEach((square) => {
    if (square.style.borderStyle === "solid") {
      square.style.borderStyle = "none";
    } else {
      square.style.borderStyle = "solid";
    }
  });
}

function clearGrid() {
  const squares = document.querySelectorAll("#square");
  squares.forEach((square) => {
    square.style.backgroundColor = "";
  });
}

generateGrid(16);
