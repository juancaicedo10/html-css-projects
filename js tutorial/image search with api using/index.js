const accessKey = "iAaFZEg25tNFQzxcdsEzAPed8D9LPrFkLNp3OtaxxwI";
const formEl = document.querySelector("form");
const SearchEl = document.querySelector(".search-container");
const inputEl = document.querySelector("#search");
const imgsContainer = document.querySelector(".imgs-container");
const imgContainer = document.querySelectorAll(".img-container");
const showMoreEl = document.getElementById("showMore");
const body = document.querySelector("body")

let inputData = "";
let page = 1;


if (imgsContainer.innerHTML.trim() === "") {
    body.style.justifyContent = "center";
}

console.log(imgsContainer.innerHTML.trim() === "")

async function searchImages() {
  inputData = inputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  console.log(results)

  if (page === 1) {
    imgsContainer.innerHTML = "";
    body.style.justifyContent = "";
  }

  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("img-container");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.classList.add("imgLink");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    imgsContainer.appendChild(imageWrapper);
  });

  page++;

  if (page > 1) {
    showMoreEl.style.display = "flex";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMoreEl.addEventListener("click", (event) => {
  event.preventDefault();
  searchImages();
});