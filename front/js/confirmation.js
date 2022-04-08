// Display order confirmation details in the order page
function displayOrderConfirmation() {
  // get the orderId stored in localStorage
  let order = JSON.parse(localStorage.getItem('order'));

  // inject orderId in the HTML
  let orderConfirmation = document.getElementById('orderId');
  orderConfirmation.innerHTML = order.orderId;
}

// Clear the order in localStorage
function clearLocalStorageOrder() {
  localStorage.setItem("order", "[]");
}
displayOrderConfirmation();
clearLocalStorageOrder();
