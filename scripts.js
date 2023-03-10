/* Elements */
const body = document.getElementById("body");

const container = document.getElementById("container");

const gridSizeInput = document.getElementById("grid-size-input");

const colourWheel = document.getElementById("colour-input");

const colourButton = document.getElementById("colour-button");

const rainbowButton = document.getElementById("rainbow-button");

const gridButton = document.getElementById("grid-button");

const rubberButton = document.getElementById("rubber-button");

const clearButton = document.getElementById("clear-button");
/* Elements */

/* Code */
generateGrid(16);
gridSizeInput.addEventListener("change", () => {
    const gridSize = gridSizeInput.value;
    removeGrid();
    generateGrid(gridSize);
  });

// Generate grid function
function generateGrid(size) {
    for (let rows = 0; rows < size; rows++) {
      for (let columns = 0; columns < size; columns++) {
        const square = document.createElement("div");
        square.id = "square";
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