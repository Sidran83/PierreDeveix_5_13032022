let params = new URL(document.location).searchParams;
let id = params.get("id");

function fetchProduct(id) {
  fetch("http://localhost:4000/api/products/" + id)
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else if (response.id === undefined) {
      throw new Error("This product id does not exist");
    } else {
      throw new Error("Network response failed");
    }
  })
  .then(function(product) {
    displayKanap(product);

    let selectedProduct = {
      id: product._id
    }

    let selectedColor = selectColor(selectedProduct);
    let selectedQuantity = selectQuantity(selectedProduct);

    let addToCart = document.getElementById('addToCart');
    addToCart.addEventListener("click", function (event) {
      if (selectedProduct.quantity === undefined || selectedProduct.color === undefined) {
        window.alert('Veuillez sélectionner tous les champs');
      } else {
        addProductToCart(event, selectedProduct);
      }
    });
  })
}

function addProductToCart(event, selectedProduct) {
  event.preventDefault();
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let ifExists = false;

  for (i = 0; i < cart.length; i++) {
    if (cart[i].id === selectedProduct.id && cart[i].color === selectedProduct.color) {
      ifExists = true;
      window.alert('ce produit est déjà dans votre panier');
    }
  }
  if (ifExists === false) {
    cart.push(selectedProduct);
    localStorage.setItem('cart', JSON.stringify(cart));
    toggleButton();
  }
}

function toggleButton() {
  let addToCart = document.getElementById('addToCart');
  addToCart.innerHTML = '<i class="fas fa-check"></i>Ajouté au panier !';
  addToCart.style.backgroundColor = "#3DE087";
  addToCart.style.borderColor = "#3DE087";
  addToCart.style.color = "black";
}

function selectColor(selectedProduct) {
  // SAVE THE SELECTED COLOR
  let elem = document.getElementById('colors');
  elem.addEventListener('change', function() {
    selectedProduct.color = elem.value;
    return selectedProduct;
  })
};

function selectQuantity(selectedProduct) {
  // SAVE THE SELECTED COLOR
  let elem = document.getElementById('quantity');
  elem.addEventListener('input', function() {
    selectedProduct.quantity = elem.value;
    return selectedProduct;
  })
};

function displayKanap(product) {
  // DISPLAY IMAGE
  let img = document.createElement('img');
  img.src = product.imageUrl;
  img.setAttribute("alt", product.altTxt);
  document.querySelector('.item__img').appendChild(img);

  // DISPLAY PRODUCT NAME
  let title = document.createTextNode(product.name)
  document.getElementById('title').appendChild(title);

  // DISPLAY PRODUCT PRICE
  let price = document.createTextNode(product.price)
  document.getElementById('price').appendChild(price);

  // DISPLAY PRODUCT DESCRIPTION
  let description = document.createTextNode(product.description)
  document.getElementById('description').appendChild(description);

  // DISPLAY PRODUCT COLORS
  for (let i = 0; i < product.colors.length; i++) {
    let colorOption = document.createElement("option");
    colorOption.setAttribute("value", product.colors[i]);
    text = document.createTextNode(product.colors[i]);
    colorOption.appendChild(text);
    document.getElementById('colors').appendChild(colorOption);
  }
}

fetchProduct(id);

