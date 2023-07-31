//buttons
const loginBar = document.querySelector(".loginBar");
const loginBtn = document.querySelector("#loginBtn")
const registerLoginBtn = document.querySelector(".registerLoginBtn");

// let confirm password

let estado = false;


//eyes show password 

//close button 

const closeBtn = document.querySelector("#closeBtn");

//containers 
const loginContainer = document.querySelector(".loginContainer");
const inputsContainer = document.querySelector(".inputsContainer");

// "Don't you have and account" || "Already have and account"

const accountStatus = document.querySelector(".accountStatus");


// show / hidde loginContainer

loginBar.addEventListener("click", function () {
    loginContainer.style.display = "flex";
});


//show / hidde password 

const eyeShowHidde = document.querySelector("#eye");

eyeShowHidde.addEventListener("click", function () {
    password.type = password.type === "password" ? "text" : "password";
})

// close loginContainer with closeBtn 

closeBtn.addEventListener("click" , function () {
    loginContainer.style.display = "none";
});


// change account status 

registerLoginBtn.addEventListener("click" , function () {
    estado = !estado;

    if (estado) {
        confirmPassword = document.createElement('div');
        confirmPassword.className = "confirmPassKey"
        confirmPassword.innerHTML = `<i class="fas fa-lock"></i>
        <input type="password" placeholder="Confirm Password" class="inputs" id="confirm">
        <i class="fas fa-eye" id="eye_"></i>`;

        // change placeholder 
        password.placeholder = "Create Password"


        inputsContainer.appendChild(confirmPassword)

        //load events to confirmPassword

        const confirm = confirmPassword.querySelector("#confirm")

        eye_.addEventListener("click" , function () {
            confirm.type = confirm.type === "password" ? "text": "password";
        });

        //change h1 login to Register 

        const headerText = document.querySelector("#text");

        headerText.innerText = "Register";
        loginBtn.innerText = "Register";
        registerLoginBtn.innerText = "login";
        accountStatus.innerText = "Alredy have an account?"
    }
    else {

        inputsContainer.removeChild(confirmPassword)

        const headerText = document.querySelector("#text");
        headerText.innerText = "Sign Up";
        loginBtn.innerText = "Login";
        registerLoginBtn.innerText = "Register";
        accountStatus.innerText = "Don't you have an account?";
    }
})


