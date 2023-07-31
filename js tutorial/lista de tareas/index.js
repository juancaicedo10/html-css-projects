const container = document.querySelector(".container");
const addElement = document.getElementById("add");
const list = document.getElementsByClassName("list")[0];

addElement.addEventListener("click", function () {
    let nuevaTarea = document.createElement("li");
    let button = document.createElement("button");
    let text = document.createElement("h1");

    button.style.width = "50px";
    button.style.height = "50px";
    button.style.border = "1px solid black";

    text.style.fontSize = "20px";
    text.style.marginLeft = "10px";

    const textContent = text.textContent = prompt("Dime la tarea a realizar: ")

    if (textContent !== null) {
    list.appendChild(nuevaTarea);
    nuevaTarea.appendChild(button);
    nuevaTarea.appendChild(text);
    }

    button.addEventListener("click", function () {
        button.textContent = "X";
        button.style.color = "red";
        button.style.fontSize = "45px";
    })
});




