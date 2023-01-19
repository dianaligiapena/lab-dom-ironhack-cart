// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerText
  let quantity = product.querySelector('.input quantity').value;

  const productPriceSubTotal = price * quantity;
  product.querySelector(".subtotal span").innerText = productPriceSubTotal; 
  return productPriceSubTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let allProducts = document.getElementsByClassName("product");

  for(let i=0; i<allProducts.length;i++){
    updateSubtotal(allProducts[i]);
  }

  // ITERATION 3
  let sumTotal = 0
  for(let i=0; i<allProducts.length; i++){
    sumTotal += updateSubtotal(allProducts[i]);
  }

  document.querySelector("#total-value span").innerText = sumTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
