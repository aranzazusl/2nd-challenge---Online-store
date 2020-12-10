// DnD Functionality

function dragstart(ev) {
    tienda = ev.target.parentNode;
    ev.dataTransfer.setData("text", ev.target.id);
}

function dragover(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    product = ev.target.appendChild(document.getElementById(data));
}

function allowDrop(ev) {
    ev.preventDefault();
}


// Calculations

let items = document.querySelectorAll("div.product-card img");
let cart = document.querySelectorAll("section#cart li")[0];

function finalCart() {
    const total = 0.00;
    const cartArray = document.querySelectorAll("#cart ul li");
    for (var i = 0; i < cartArray.length; i++) {
      var cartArrayItem = cartArray[i];
      var quantity = cartArrayItem.getAttribute("data-quantity");
      var priceElement = cart_item.getAttribute("price");
  
      var subTotal = parseFloat(quantity * parseFloat(priceElement));
      cartArrayItem.querySelectorAll("span.subTotal")[0].innerHTML =
        " = " + subTotal.toFixed(2);
  
      total += subTotal;
    }
      document.querySelectorAll(".total span")[0].innerHTML = total.toFixed(2);
  }  