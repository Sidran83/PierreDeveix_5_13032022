let params = new URL(document.location).searchParams;
let id = params.get("id");
console.log(id);


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

    let color = localStorage.setItem("color",selectColor());
    console.log(color);
  })
}

function displayColor(couleur) {
  let elem = document.getElementById('addToCart');
  elem.addEventListener('click', function() {
    console.log(couleur);
  });
}

function selectColor() {
  // SAVE THE SELECTED COLOR
  let elem = document.getElementById('colors');
  elem.addEventListener('change', function() {
    elem.value;
  });
}

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
