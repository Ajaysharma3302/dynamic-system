// Step 1: Initialize an empty array for products
let products = [];

//  // Step 2: Function to add a product

function addProduct() {
  let productName = document.getElementById("ProductName").value;
  let productRating = parseFloat(
    document.getElementById("productRating").value
  );
  let productPrice = parseFloat(document.getElementById("productPrice").value);

  // Step 3: Validate input
  if (
    productName &&
    !isNaN(productPrice) &&
    !isNaN(productRating) &&
    productRating > 1 &&
    productRating <= 5
  ) {
    products.push({ productName, productPrice, productRating });
    updateGraphs();
    clearInputs();
  } else {
    alert("please enter valid products details");
  }
}
// Step4 : Add product to array

// step 5: Step 28: Update graphs

// Step 6: Clear input fields
function clearInputs() {
  document.getElementById("ProductName").value = "";
  document.getElementById("productRating").value = "";
  document.getElementById("productPrice").value = "";
}

// Step 7: Alert for invalid input

// Step 8: Function to clear input fields
function updateGraphs() {
  const priceGraph = document.getElementById("priceGraph");
  const ratingGraph = document.getElementById("ratingGraph");

  priceGraph.innerHTML = "";
  ratingGraph.innerHTML = "";

  products.forEach((product) => {
    const priceBar = document.createElement("div");
    priceBar.classList.add("bar");
    priceBar.style.width = product.price * 10 + "px";
    priceBar.style.backgroundColor = "blue";
    priceBar.textContent = `${product.productName}: $${product.productPrice}`;

    const ratingBar = document.createElement("div");
    ratingBar.className = "bar";
    ratingBar.style.width = product.rating * 20 + "px";
    ratingBar.style.backgroundColor = "green";
    ratingBar.textContent = `${product.productName}: ${product.productRating}`;

    priceGraph.appendChild(priceBar);
    ratingGraph.appendChild(ratingBar);
  });
}
function sortData(criteria) {
  if (criteria === "price") {
    products.sort((a, b) => a.price - b.price);
  } else if (criteria === "rating") {
    products.sort((a, b) => a.rating - b.rating);
  }
  updateGraphs();
}

// Step 9: Function to update graphs

// Step 10: Create a price bar

// Step 11: Create a rating bar

// Step 12: Function to sort data
