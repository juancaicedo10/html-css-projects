document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.querySelectorAll(".add");
    const shoppingCar = document.querySelector(".shoppingCar");
    const watchContainer = document.querySelector(".watch-container");
    const buys = document.getElementById("buys");
    const totalPay = document.getElementById("totalPay");
    const total = document.querySelector(".total");
    const payfor = document.getElementById("payfor")
  
    addButton.forEach(boton => { 
      boton.addEventListener("click", addtoCar);
    });
  
    function addtoCar(event) {
      const button = event.target;
      if (button.classList.contains("disabled")) {
        return;
      }
  
      button.classList.add("disabled");
  
      watchContainer.style.width = "70%";
      shoppingCar.style.width = "400px";
      buys.style.display = "flex";
  
      const watch = event.target.closest(".watch");
      const productName = watch.querySelector(".title").textContent;
      const productPrice = parseFloat(watch.querySelector(".price").textContent.replace(".", ""));
      const productImage = watch.querySelector("img").getAttribute("src");
  
      let newElement = document.createElement("div");
      newElement.classList.add("compras");
      newElement.innerHTML = `
        <img src="${productImage}" alt="img" style="width:30%; height: 90%; margin-top: 5px;">
        <h1 class="productName">${productName}</h1>
        <h2 class="price">${formatPrice(productPrice)}</h2>
        <button class="delete"></button>
        <div class="moreLestButtons">
          <button class="lest">-</button>
          <h1 class="number">1</h1>
          <button class="more">+</button>
        </div>
      `;
      buys.appendChild(newElement);
  
      const moreButton = newElement.querySelector(".more");
      const lestButton = newElement.querySelector(".lest");
      const number = newElement.querySelector(".number");
      const removeButton = newElement.querySelector(".delete");
  
      moreButton.addEventListener("click", function () {
        let toNumber = parseInt(number.innerText);
        number.innerText = toNumber + 1;
  
        let productNumber = parseFloat(productPrice) * (toNumber + 1);
        newElement.querySelector(".price").textContent = formatPrice(productNumber);
  
        updateTotalPay();
      });
  
      lestButton.addEventListener("click", function () {
        let toNumber = parseInt(number.innerText);
        if (toNumber > 1) {
          number.innerText = toNumber - 1;
          let productNumber = parseFloat(productPrice) * (toNumber - 1);
          newElement.querySelector(".price").textContent = formatPrice(productNumber);
  
          updateTotalPay();
        }
      });
  
      removeButton.addEventListener("click", function () {
        newElement.remove();
        updateTotalPay();
      });
  
      updateTotalPay();
      toggleTotalDisplay();
    }
  
    function updateTotalPay() {
      let total = 0;
      const prices = buys.querySelectorAll(".price");
      prices.forEach(price => {
        let productNumber = parseFloat(price.textContent.replace(".", ""));
        total += productNumber;
      });
      totalPay.textContent = formatPrice(total);
    }
  
    function toggleTotalDisplay() {
      if (buys.children.length > 0) {
        total.style.display = "flex";
      } else {
        total.style.display = "none";
      }
    }
  
    function formatPrice(price) {
      return price.toLocaleString("es-ES", { minimumFractionDigits: 2 });
    }


    payfor.addEventListener("click", function () {
      alert("gracias por su compra");
    })
  });
