const keys = [
    [
      ["1", "!"],
      ["2", "@"],
      ["3", "#"],
      ["4", "$"],
      ["5", "%"],
      ["6", "&"],
      ["7", "/"],
      ["8", "("],
      ["9", ")"],
      ["0", "="],
      ["'", "?"],
      ["¡", "¿"],
      ["BORRAR", "BORRAR"]
    ],
    [
      ["q", "Q"],
      ["w", "W"],
      ["e", "E"],
      ["r", "R"],
      ["t", "T"],
      ["y", "Y"],
      ["u", "U"],
      ["i", "I"],
      ["o", "O"],
      ["p", "P"],
      ["`", "^"],
      ["+", "*"],
    ],
    [
      ["MAYUS", "MAYUS"],
      ["a", "A"],
      ["s", "S"],
      ["d", "D"],
      ["f", "F"],
      ["g", "G"],
      ["h", "H"],
      ["j", "J"],
      ["k", "K"],
      ["l", "L"],
      ["ñ", "Ñ"],
      ["¨", "{"],
      ["Ç", "}"],
    ],
    [
      ["SHIFT", "SHIFT"],
      ["<", ">"],
      ["z", "Z"],
      ["x", "X"],
      ["c", "C"],
      ["v", "V"],
      ["b", "B"],
      ["n", "N"],
      ["m", "M"],
      [",", ";"],
      [".", ":"],
      ["-", "_"],
    ],
    [["Space", "Space"]],
  ];
  
  let mayus = false;
  let shift = false;
  let current = null;
  
  renderKeyboard();

  document.addEventListener("keydown", (event) => {
    const keyPressed = event.key;
    const virtualKey = findVirtualKey(keyPressed);
    console.log(findVirtualKey(keyPressed))
  
    if (virtualKey) {
      const virtualKeyElement = document.querySelector(`.key-${virtualKey}`);
      if (virtualKeyElement) {
        virtualKeyElement.classList.add("pressed");
      }
    }
  });
  
  document.addEventListener("keyup", (event) => {
    const keyPressed = event.key;
    const virtualKey = findVirtualKey(keyPressed);
  
    if (virtualKey) {
      const virtualKeyElement = document.querySelector(`.key-${virtualKey}`);
      if (virtualKeyElement) {
        virtualKeyElement.classList.remove("pressed");
      }
    }
  });
  
  window.onload = function () {
    const input = document.querySelector(".input");
    input.focus();
  };
  
  function renderKeyboard() {
    const keyboardContainer = document.querySelector("#keyboard-container");
  
    const layers = keys.map((layer) => {
      return layer
        .map((key) => {
          if (key[0] === "SHIFT") {
            return `<button class="key key-shift ${
              shift ? "activated" : ""
            }">${key[0]}</button>`;
          }
          if (key[0] === "MAYUS") {
            return `<button class="key key-mayus ${
              mayus ? "activated" : ""
            }">${key[0]}</button>`;
          }
          if (key[0] === "Space") {
            return `<button class="key key-space"></button>`;
          }
          if (key[0] === "BORRAR") {
            return `<button class="key key-delete">${key[0]}</button>`;
          }
  
          const keyLabel = shift ? key[1] : mayus ? key[1] : key[0];
  
          return `
            <button class="key key-normal key-${keyLabel.toLowerCase()}">
            ${keyLabel}
            </button>`;
        })
        .join("");
    });
  
    const htmlLayers = layers.map((layer) => {
      return `<div class="layer">${layer}</div>`;
    });
  
    keyboardContainer.innerHTML = htmlLayers.join("");
    document.querySelectorAll(".key").forEach((key) => {
        key.addEventListener("mouseup", () => {
          const keyText = key.textContent;
          if (keyText === "SHIFT") {
            shift = !shift;
          } else if (keyText === "MAYUS") {
            mayus = !mayus;
          } else if (keyText === "") {
            current.value += " ";
          } else if (keyText === "BORRAR") {
            current.value = current.value.slice(0, -1);
          } else {
            current.value += keyText.trim();
            if (shift) {
              shift = false;
            }
          }
          renderKeyboard();
          current.focus();
        });
      });
    }


  function findVirtualKey(key) {
    for (let layer of keys) {
      for (let row of layer) {
        if (row.includes(key)) {
          return row[0];
        }
      }
    }
  
    return null;
  }
  
  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("focusin", (event) => {
      current = event.target;
    });
  });
  