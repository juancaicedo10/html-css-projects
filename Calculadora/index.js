document.addEventListener("DOMContentLoaded", function() {
    const number1 = document.getElementsByClassName("low1")[0];
    const number2 = document.getElementsByClassName("low2")[0];
    const number3 = document.getElementsByClassName("low3")[0];
    const number4 = document.getElementsByClassName("mid4")[0];
    const number5 = document.getElementsByClassName("mid5")[0];
    const number6 = document.getElementsByClassName("mid6")[0];
    const number7 = document.getElementsByClassName("top7")[0];
    const number8 = document.getElementsByClassName("top8")[0];
    const number9 = document.getElementsByClassName("top9")[0];
    const screen = document.getElementsByClassName("screen")[0];
    const plus = document.getElementsByClassName("plus")[0];
    const minus = document.getElementsByClassName("minus")[0];
    const multiplication = document.getElementsByClassName("multiplication")[0];
    const division = document.getElementsByClassName("division")[0];
    const equal = document.getElementsByClassName("equal")[0];
    const zero = document.getElementsByClassName("zero")[0];
    const point = document.getElementsByClassName("point")[0];

    const value = [];
    
  
    number1.addEventListener("click", function() {
      screen.innerHTML += "1";
      value.push(1);
    });
  
    number2.addEventListener("click", function() {
      screen.innerHTML += "2";
      value.push(2)
    
    });
  
    number3.addEventListener("click", function() {
        screen.innerHTML += "3";
        value.push(3);
    });
  
    number4.addEventListener("click", function() {
        screen.innerHTML += "4";
        value.push(4)
    });
  
    number5.addEventListener("click", function() {
        screen.innerHTML += "5";
        value.push(5)
    });
  
    number6.addEventListener("click", function() {
        screen.innerHTML += "6";
        value.push(6)
    });
  
    number7.addEventListener("click", function() {
        screen.innerHTML += "7";
        value.push(7)
    });
  
    number8.addEventListener("click", function() {
        screen.innerHTML += "8";
        value.push(8)
    });
  
    number9.addEventListener("click", function() {
        screen.innerHTML += "9";
        value.push(9)
    });

    point.addEventListener("click" , function () {
        screen.innerHTML += ".";
        value.push(".")
    })

    plus.addEventListener("click", function () {
        screen.innerHTML += "+";
        value.push("+")
    })

    minus.addEventListener("click", function () {
        screen.innerHTML += "-";
        value.push("-")
    })

    multiplication.addEventListener("click", function () {
        screen.innerHTML += "x";
        value.push("*")
    })

    division.addEventListener("click", function () {
        screen.innerHTML += "/";
        value.push("/");

    });

    zero.addEventListener("click", function () {
        screen.innerHTML += "0";
        value.push(0)
    })

    equal.addEventListener("click",function () {
        const expression = value.join("");
        const result = eval(expression)
        screen.innerHTML = result;
        console.log(result) 
    })

  });
  