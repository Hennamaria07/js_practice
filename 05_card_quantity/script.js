let cardQuantity = 0;
document.getElementById("card-btn").addEventListener("click", function (event) {
  event.preventDefault();
  console.log(`Card Quantity: ${cardQuantity += 1}`);
});
document.getElementById("two-btn").addEventListener("click", function (event) {
  event.preventDefault();
  console.log(`Card Quantity: ${cardQuantity += 2}`);
});
document.getElementById("three-btn").addEventListener("click", function (event) {
  event.preventDefault();
  console.log(`Card Quantity: ${cardQuantity += 3}`);
});
document.getElementById("reset-btn").addEventListener("click", function (event) {
  event.preventDefault();
  console.log(`Card is reset\n card Quantity: ${(cardQuantity = 0)}`);
});

document.getElementById("show-btn").addEventListener("click", function (event) {
  event.preventDefault();
  console.log(`Card Quantity: ${cardQuantity}`);
});