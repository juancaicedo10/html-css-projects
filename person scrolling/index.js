const arrows = document.querySelectorAll("i");
const container = document.querySelector(".people");
const person = document.querySelector(".person");



arrows.forEach(arrow => {
    let personWidth = person.clientWidth;
    arrow.addEventListener("click", function () {
        if(arrow.id === "left") {
            container.scrollBy({
                left: -personWidth - 20,
                behavior: "smooth"
            })
        }else {
            container.scrollBy({
                left: personWidth + 20,
                behavior: "smooth"
            })
        }
    })
})