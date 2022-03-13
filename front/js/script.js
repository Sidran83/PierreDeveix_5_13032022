let urlApi = new URL ("http://localhost:4000/api/products");


function fetchProducts() {

  fetch(urlApi)
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(products) {
      console.log(products);
      for (let i = 0; i < products.length; i++) {
          displayProducts(products[i]);
        }
    })
    .catch(function(err) {
      console.error('Fetch error:', err)
    });
}

function displayProducts(product) {

  // CREATE DESCRIPTION
  let description = document.createElement('p');
  description.classList.add('productDescription');
  let textDescription = document.createTextNode(product.description);
  description.appendChild(textDescription);

  // CREATE HEADER TAG
  let header = document.createElement('h3');
  header.classList.add("productName");
  let productName = document.createTextNode(product.name);
  header.appendChild(productName);

  // CREATE IMAGE TAG
  let img = document.createElement('img');
  img.src = product.imageUrl;
  img.alt =product.altTxt;

  // CREATE ARTICLE TAG WITH ALL CHILDREN
  let article = document.createElement('article');
  article.appendChild(img);
  article.appendChild(header);
  article.appendChild(description);

  // CREATE LINK TAG
  let elemA = document.createElement("a");
  elemA.href = "product.html"
  linkLabel = document.createTextNode(product.name);

  elemA.appendChild(article);

  document.querySelector("#items").appendChild(elemA);
}

fetchProducts();
