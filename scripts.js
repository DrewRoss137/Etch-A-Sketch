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

const colourButton = document.getElementById("colour-button");

const rainbowButton = document.getElementById("rainbow-button");

const gridButton = document.getElementById("grid-button");

const rubberButton = document.getElementById("rubber-button");

const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", () => {
  const squares = document.querySelectorAll("#square");
  squares.forEach((square) => {
    square.style.backgroundColor = "";
  });
});

generateGrid(16);
function generateGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, calc(960px / ${size}))`;
  container.style.gridTemplateRows = `repeat(${size}, calc(960px / ${size}))`;

  let rubberMode = false;
  let colourMode = false;

  rubberButton.addEventListener("focus", () => {
    rubberMode = true;
  });

  rubberButton.addEventListener("blur", () => {
    rubberMode = false;
  });

  colourButton.addEventListener("click", () => {
    colourMode = true;
  });

  colourInput.addEventListener("input", () => {
    if (!colourMode) return;
  });

  colourInput.addEventListener("change", () => {
    if (!colourMode) return;
  });

  colourInput.addEventListener("blur", () => {
    if (!colourMode) return;
  });

  colourButton.addEventListener("blur", () => {
    colourMode = false;
  });

  rainbowButton.addEventListener("focus", () => {
    let rainbowMode = true;

    const squares = document.querySelectorAll("#square");

    const getRandomRGBA = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const a = Math.random();

      return `rgba(${r}, ${g}, ${b}, ${a})`;
    };

    squares.forEach((square) => {
      square.addEventListener("mouseover", () => {
        if (rainbowMode) {
          square.style.backgroundColor = getRandomRGBA();
        }
      });
    });

    rainbowButton.addEventListener("blur", () => {
      rainbowMode = false;
    });
  });

  for (let columns = 0; columns < size; columns++) {
    for (let rows = 0; rows < size; rows++) {
      const square = document.createElement("div");
      square.id = "square";
      square.style.borderStyle = "solid";
      container.appendChild(square);

      square.addEventListener("mouseover", () => {
        if (rubberMode) {
          square.style.backgroundColor = "";
        } else if (colourMode) {
          square.style.backgroundColor = colourInput.value;
        }
      });
    }
  }

  gridButton.addEventListener("click", () => {
    const squares = document.querySelectorAll("#square");
    squares.forEach((square) => {
      if (square.style.borderStyle === "solid") {
        square.style.borderStyle = "none";
      } else {
        square.style.borderStyle = "solid";
      }
    });
  });

  clearButton.addEventListener("click", () => {
    const squares = document.querySelectorAll("#square");
    squares.forEach((square) => {
      square.style.backgroundColor = "";
    });
  });
}




function removeGrid() {
  const squares = document.querySelectorAll("#square");
  squares.forEach((square) => {
    square.remove();
  });
};
