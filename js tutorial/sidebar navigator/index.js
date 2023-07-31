const menu = document.querySelector("#menu");
const sideBar = document.querySelector(".sidebar");
const text = sideBar.querySelectorAll("h1");
const icons = sideBar.querySelectorAll("i")
const headerText = document.querySelector("#header");
const div = sideBar.querySelectorAll("div");
const search = sideBar.querySelector("#input");
let estado = false;
const buscador = document.querySelector("#search")


menu.addEventListener("click", function () {
    estado = !estado;

    if (estado) {
        hideElements();
        sideBar.style.width = "70px";
        sideBar.style.alignItems = "center";
    } else {
        showElements();
        sideBar.style.width = "";
        sideBar.style.alignItems = "";
    }
});



function hideElements() {
    displayNone(search);
    displayNone(header);
    text.forEach((h1) => {
        displayNone(h1);
    });
    icons.forEach((i) => {
        i.style.margin = "0";
    });
}


function showElements() {
    search.style.display = "";
    header.style.display = "";
    text.forEach((h1) => {
        h1.style.display = "";
    });
    icons.forEach((i) => {
        i.style.margin = "";
    });
}


function displayNone(element) {
    element.style.display = "none";
}





