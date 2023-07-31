const eye = document.getElementById("ojo");
const input = document.getElementById("password");
const requirementList = document.querySelectorAll(".requirement-list li");
const requirements = [
    { regex: /.{8,}/, index:0 },
    { regex: /[0-9]/, index: 1 },
    { regex: /[^A-Za-z0-9]/, index: 2},
    { regex: /[A-Z]/, index: 3 }
]

eye.addEventListener("click", function () {
    input.type = input.type === "password" ? "text" : "password";
})

input.addEventListener("input" , function () {
    this.value = this.value.replace(/\s/g, "");
})


input.addEventListener("keyup", (e) => {

    requirements.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        if (isValid) {
            requirementItem.firstElementChild.className = "fas fa-check";
            requirementItem.firstElementChild.style.color = "green";
            requirementItem.firstElementChild.style.fontSize = "20px";
            requirementItem.style.color = "green";

        } else {
            requirementItem.firstElementChild.className = "fas fa-circle";
            requirementItem.firstElementChild.style.color = "";
            requirementItem.firstElementChild.style.fontSize = "";
            requirementItem.style.color = "";
        }
    })
})





