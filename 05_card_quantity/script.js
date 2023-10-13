let cardQuantity = 0;
document.getElementById("card-btn").addEventListener("click", function (event) {
  event.preventDefault();
  card(1);
});
document.getElementById("two-btn").addEventListener("click", function (event) {
  event.preventDefault();
  card(2);
});
document.getElementById("three-btn").addEventListener("click", function (event) {
  event.preventDefault();
  card(3);
});
document.getElementById("reset-btn").addEventListener("click", function (event) {
  event.preventDefault();
  cardQuantity = 0;
  console.log(`Card is reset\n card Quantity: ${cardQuantity}`);
});

document.getElementById("show-btn").addEventListener("click", function (event) {
  event.preventDefault();
  console.log(`Card Quantity: ${cardQuantity}`);
});

function card(value) {
  cardQuantity += value;
  console.log(`Card Quantity: ${cardQuantity}`);
}