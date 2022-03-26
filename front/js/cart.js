localStorage.setItem('quantity', 1);
localStorage.setItem('color', 'Black');
localStorage.setItem('id', '107fb5b75607497b96722bda5b504926');
let itemId = localStorage.getItem('id');
let itemQuantity = localStorage.getItem('quantity');
let itemColor = localStorage.getItem("color");


let item = {
  id: itemId,
  quantity: itemQuantity,
  color: itemColor
}

let product;

async function fetchItem(id) {
  let url = "http://localhost:4000/api/products/" + id;
  let response = await fetch(url);
  let product = await response.json();
  return product;
}

function calcTotal() {
  // let totalQuantity = document.getElementById('totalQuantity');
  let itemQuantity = document.getElementsByClassName('itemQuantity');
  itemQuantity.addEventListener('input', getQuantity)



}
  function getQuantity(e) {
    console.log(e);

  };

async function getCartItem(item) {
  console.log(item.id);
  var getProduct = await fetchItem(item.id);
  console.log(getProduct);

  // // CREATE DIV TO DISPLAY SETTINGS
  // // add quantity input
  // let input = document.createElement('input');
  // input.className = 'itemQuantity';
  // input.setAttribute('name', 'itemQuantity');
  // input.setAttribute('type', 'number');
  // input.setAttribute('min', 1);
  // input.setAttribute('max', 100);
  // input.setAttribute('value', item.quantity);

  // // add product quantity
  // let quantity = document.createElement('p');
  // let productQuantity = document.createTextNode(`Qté : ${item.quantity}`);
  // quantity.appendChild(productQuantity);

  // // delete item
  // let deleteItem = document.createElement('p');
  // deleteItem.className = 'deleteItem';
  // let textDelete = document.createTextNode('Supprimer');
  // deleteItem.appendChild(textDelete);

  // let settings = document.createElement('div');
  // settings.className = 'cart__item__content__settings__quantity';
  // settings.appendChild(quantity);
  // settings.appendChild(input);

  // let settingsDelete = document.createElement('div');
  // settingsDelete.className = 'cart__item__content__settings__delete';
  // settingsDelete.appendChild(deleteItem);

  // let cartItemContentSettings = document.createElement('div');
  // cartItemContentSettings.className = 'cart__item__content__settings';
  // cartItemContentSettings.appendChild(settings);
  // cartItemContentSettings.appendChild(settingsDelete);

  // // CREATE DIV TO DISPLAY CONTENT
  // // add product price
  // let price = document.createElement('p');
  // let productPrice = document.createTextNode(`${product.price} €`);
  // price.appendChild(productPrice);

  // // add product color
  // let color = document.createElement('p');
  // let productColor = document.createTextNode(item.color);
  // color.appendChild(productColor);

  // // add product name
  // let name = document.createElement('h2');
  // let productName = document.createTextNode(product.name)
  // name.appendChild(productName);

  // let cartItemContentDescription = document.createElement('div');
  // cartItemContentDescription.appendChild(name);
  // cartItemContentDescription.appendChild(color);
  // cartItemContentDescription.appendChild(price);

  // let cartItemContent = document.createElement('div');
  // cartItemContent.className = 'cart__item__content';
  // cartItemContent.appendChild(cartItemContentDescription);
  // cartItemContent.appendChild(cartItemContentSettings);

  // // CREATE DIV TO DISPLAY IMG
  // let img = document.createElement('img');
  // img.src = product.imageUrl;
  // img.alt =product.altTxt;

  // let cartItemImg = document.createElement('div');
  // cartItemImg.className = 'cart__item__img';
  // cartItemImg.appendChild(img);

  // // CREATE ARTICLE TAG WITH DATAS
  // let article = document.createElement('article');
  // article.className = 'cart__item';
  // article.setAttribute('data-id', 1);
  // article.setAttribute('data-color', itemColor);
  // article.appendChild(cartItemImg);
  // article.appendChild(cartItemContent);

  // document.getElementById('cart__items').appendChild(article);
}

getCartItem(item);
