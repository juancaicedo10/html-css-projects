document.addEventListener("DOMContentLoaded" , function () {
const screen = document.getElementsByClassName("screen")[0];
const AC = document.getElementById("AC");
const mult_div = document.getElementById("mult-div");
const percent = document.getElementById("percent");
const typeScreen = document.getElementById("typeScreen")
//numbers 
const num1 = document.getElementById("1");
const num2 = document.getElementById("2");
const num3 = document.getElementById("3");
const num4 = document.getElementById("4");
const num5 = document.getElementById("5");
const num6 = document.getElementById("6");
const num7 = document.getElementById("7");
const num8 = document.getElementById("8");
const num9 = document.getElementById("9");
const zero = document.getElementById("zero");

//operators

const multiplication = document.getElementById("multiplication");
const minus = document.getElementById("minus");
const point = document.getElementById("point");
const equal = document.getElementById("equal");
const divition = document.getElementById("divition");
const plus = document.getElementById("plus")

var proces = []

num1.addEventListener("click" , function () {
    typeScreen.innerText += "1";
    proces.push(1);
})

num2.addEventListener("click", function () {
    typeScreen.innerText += "2";
    proces.push(2)
})

num3.addEventListener("click", function () {
    typeScreen.innerText += "3";
    proces.push(3)
})

num4.addEventListener("click", function () {
    typeScreen.innerText += "4";
    proces.push(4)
})

num5.addEventListener("click", function () {
    typeScreen.innerText += "5";
    proces.push(5)
})

num6.addEventListener("click", function () {
    typeScreen.innerText += "6";
    proces.push(6)
})

num7.addEventListener("click", function () {
    typeScreen.innerText += "7";
    proces.push(7)
})

num8.addEventListener("click", function () {
    typeScreen.innerText += "8";
    proces.push(8)
})

num9.addEventListener("click", function () {
    typeScreen.innerText += "9";
    proces.push(9)
})

zero.addEventListener("click", function () {
    typeScreen.innerText += "0";
    proces.push(0);
})

//operation

multiplication.addEventListener("click", function () {
    let longitud = typeScreen.innerText[typeScreen.innerText.length - 1];

    if (!["x", "%", "+", "-", "÷"].includes(longitud) && longitud > 0) {
        typeScreen.innerText += "x";
        proces.push("*");
        multiplication.preventDefault();
      }

})

divition.addEventListener("click", function () {
    let longitud = typeScreen.innerText[typeScreen.innerText.length - 1];

    if (!["x", "%", "+", "-", "÷"].includes(longitud) && longitud > 0) {
    typeScreen.innerText += "÷";
    proces.push("/");
    }
})

plus.addEventListener("click", function () {
    let longitud = typeScreen.innerText[typeScreen.innerText.length - 1];

    if (!["x", "%", "+", "-", "÷"].includes(longitud) && longitud > 0) {
    typeScreen.innerText += "+";
    proces.push("+");
    }
})

minus.addEventListener("click", function () {
    let longitud = typeScreen.innerText[typeScreen.innerText.length - 1];

    if (!["x", "%", "+", "-", "÷"].includes(longitud) && longitud > 0) {
    typeScreen.innerText += "-";
    proces.push("-")
    }
})

point.addEventListener("click" , function () {
    let longitud = typeScreen.innerText[typeScreen.innerText.length - 1];

    if (!["x", "%", "+", "-", "÷"].includes(longitud) && longitud > 0 && !["."].includes(typeScreen.innerText)) {
    typeScreen.innerText += ".";
    proces.push(".");
    }
})

AC.addEventListener("click", function () {
    typeScreen.innerText = "";
    proces = [];
})

equal.addEventListener("click", function () {
    let proceso = proces.join("");
    let resultt = eval(proceso);
    if(resultt > 0) {
    typeScreen.innerText = resultt;
    }
})

})
