const Watch = document.querySelector(".watch");

function getTime() {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds

    var time = `${hours}:${minutes}:${seconds}`;
    console.log(time);

    let hour = document.createElement("h1");

    hour.innerText = time;
    Watch.innerHTML = "";
    Watch.appendChild(hour);

    hour.style.color = "red";
    hour.style.marginRight = "30px"

}

let interval = setInterval(getTime, 1000);








