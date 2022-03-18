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
  })
}


function displayKanap(product) {
  let img = document.createElement('img');
  img.src = product.imageUrl;
  img.alt = document.createTextNode("Photographie d'un canapé");
  document.querySelector('.item__img').appendChild(img);

  document.getElementById('title').createTextNode(product.name)

}

fetchProduct(id);
