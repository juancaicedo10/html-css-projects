const phonesContainer = document.getElementsByClassName("phones");
const clothesContainer = document.getElementsByClassName("clothes");
const shoesContainer = document.getElementsByClassName("shoes");
const phonesBtn = document.getElementById("phonesBtn");
const clothesBtn = document.getElementById("clothesBtn");
const shoesBtn = document.getElementById("shoesBtn");
const all = document.getElementById("all");

function changeColor (element) {
    element.style.backgroundColor = "#4070f4";
    element.style.color = "white"
}

function resetColor (element) {
    element.style.backgroundColor = "";
    element.style.color = "";
}


phonesBtn.addEventListener("click", function () {
    changeColor(phonesBtn);
    resetColor(clothesBtn);
    resetColor(shoesBtn);
    resetColor(all)

    Array.from(shoesContainer).forEach(shoes => {
        shoes.style.display = "none";
    })

    Array.from(clothesContainer).forEach(clothes => {
        clothes.style.display = "none";
    })

    Array.from(phonesContainer).forEach(shoes => {
        shoes.style.display = "flex";
    })
})

clothesBtn.addEventListener("click", function () {
    changeColor(clothesBtn)
    resetColor(shoesBtn);
    resetColor(phonesBtn);
    resetColor(all)
    Array.from(phonesContainer).forEach(phones => {
        phones.style.display = "none";
    })


    Array.from(shoesContainer).forEach(shoes => {
        shoes.style.display = "none";
    })

    Array.from(clothesContainer).forEach(clothes => {
        clothes.style.display = "flex";
    })
})

shoesBtn.addEventListener("click", function () {
    changeColor(shoesBtn)
    resetColor(clothesBtn);
    resetColor(phonesBtn);
    resetColor(all)
    Array.from(phonesContainer).forEach(phones => {
        phones.style.display = "none";
    })

    Array.from(clothesContainer).forEach(clothes => {
        clothes.style.display = "none";
    })

    Array.from(shoesContainer).forEach(shoes => {
        shoes.style.display = "flex";
    })
});

all.addEventListener("click", function () {
    changeColor(all)
    resetColor(shoesBtn);
    resetColor(clothesBtn);
    resetColor(phonesBtn)
    Array.from(phonesContainer).forEach(phones => {
        phones.style.display = "flex";
    })

    Array.from(shoesContainer).forEach(shoes => {
        shoes.style.display = "flex";
    })

    Array.from(clothesContainer).forEach(clothes => {
        clothes.style.display = "flex";
    })

    console.log("click")
})







