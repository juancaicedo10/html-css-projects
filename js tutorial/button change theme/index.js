document.addEventListener("DOMContentLoaded", function () {

const body = document.querySelector("body");
const toggle = document.getElementById("toggle");
const indicator = document.getElementsByClassName("indicator")[0];


toggle.addEventListener("click", function () {
    const isActive = toggle.classList.toggle('active');

    body.style.backgroundColor = isActive ? "#f8f8f8" : "";
    body.style.boxShadow = isActive ? "inset 0 2px 60px rgba(0, 0, 0, 0.5), inset 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 -4px 8px rgba(0, 0, 0, 0.05)" : "";
    indicator.style.left = isActive ? "160px" : "";
    indicator.style.boxShadow = isActive ? "0 4px 4px rgba(0, 0, 0, 0.1), inset 0 4px 4px rgba(255, 255, 255, 1), inset 0 -4px 4px rgba(255, 255, 255, 1)" : "";
    indicator.style.background = isActive ? "linear-gradient(to bottom, #eaeaea, #f9f9f9)" : "";
    toggle.style.backgroundColor = isActive ? "#ffffff" : "";
    toggle.style.boxShadow = isActive ? "inset 0 2px 60px rgba(0, 0, 0, 0.1), inset 0 2px 8px rgba(0, 0, 0, 0.1), inset 0 -4px 8px rgba(0, 0, 0, 0.05)" : "";
});
});




