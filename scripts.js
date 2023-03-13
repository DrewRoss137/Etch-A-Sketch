const body = document.getElementById("body");

const container = document.getElementById("container");

const gridSizeInput = document.getElementById("grid-size-input");
gridSizeInput.addEventListener("blur", () => {
  gridSizeInput.setAttribute("placeholder", "Grid Size");
});
gridSizeInput.addEventListener("focus", () => {
  gridSizeInput.removeAttribute("placeholder");
});
gridSizeInput.addEventListener("input", (event) => {
  const gridSizeInputValue = gridSizeInput.value;
  if ((gridSizeInputValue <= 0 || gridSizeInputValue > 64 || isNaN(gridSizeInputValue)) && event.data !== null) {
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
    gridSizeInput.value = "";
    return;
  }
  removeGrid();
  generateGrid(gridSizeInputValue);
});

const invalidInputMessage = document.createElement("div");
invalidInputMessage.id = "invalid-input-message";
invalidInputMessage.textContent = "Invalid Grid Size. Please Enter A Number Between 1 And 64."

const colourInput = document.getElementById("colour-input");
colourInput.addEventListener("blur", () => {
  if (!colourMode) return;
});
colourInput.addEventListener("change", () => {
  if (!colourMode) return;
});
colourInput.addEventListener("input", () => {
  if (!colourMode) return;
});


const colourButton = document.getElementById("colour-button");
colourButton.addEventListener("blur", () => {
  colourMode = false;
});
colourButton.addEventListener("click", () => {
  colourMode = true;
});

const rainbowButton = document.getElementById("rainbow-button");
rainbowButton.addEventListener("blur", () => {
  rainbowMode = false;
});
rainbowButton.addEventListener("focus", () => {
  rainbowMode = true;
});

const gridButton = document.getElementById("grid-button");
gridButton.addEventListener("click", () => {
  squares.forEach((square) => {
    if (square.style.borderStyle === "solid") {
      square.style.borderStyle = "none";
    } else {
      square.style.borderStyle = "solid";
    }
  });
});

const rubberButton = document.getElementById("rubber-button");
rubberButton.addEventListener("blur", () => {
  rubberMode = false;
});
rubberButton.addEventListener("focus", () => {
  rubberMode = true;
});

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", () => {
  const squares = document.querySelectorAll("#square");
  squares.forEach((square) => {
    square.style.backgroundColor = "";
  });
});

const squares = [];

let colourMode;
let rainbowMode;
let rubberMode;

generateGrid(16);

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
    };
  };
};

function removeGrid() {
  squares.forEach((square) => {
    square.remove();
  });
};

function styleSquares() {
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      if (rubberMode) {
        square.style.backgroundColor = "";
      } else if (colourMode) {
        square.style.backgroundColor = colourInput.value;
      } else if (rainbowMode) {
        square.style.backgroundColor = generateRGBA();
      }
    });
  })
};
styleSquares();

function generateRGBA() {
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);
  const randomAlpha = Math.random();
  return `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, ${randomAlpha})`;
};
