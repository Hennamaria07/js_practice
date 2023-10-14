let cardQuantity = 0;
const textEl = document.getElementById('text-el');
document.getElementById("card-btn").addEventListener("click", function (event) {
  event.preventDefault();
  card(1);
});
document.getElementById("two-btn").addEventListener("click", function (event) {
  event.preventDefault();
  card(2);
});
document.getElementById("remove-btn").addEventListener("click", function (event) {
  event.preventDefault();
  removeCard();
});
document.getElementById("reset-btn").addEventListener("click", function (event) {
  event.preventDefault();
  cardQuantity = 0;
  textEl.innerHTML = `Card is reset\n card Quantity: ${cardQuantity}`;
});

document.getElementById("show-btn").addEventListener("click", function (event) {
  event.preventDefault();
  textEl.innerHTML = `Card Quantity: ${cardQuantity}`;
});

function card(value) {
  cardQuantity += value;
  textEl.innerHTML = `Card Quantity: ${cardQuantity}`;
  if(cardQuantity > 10) {
    alert('Card is full');
    return false;
  }
}
function removeCard() {
  --cardQuantity;
  textEl.innerHTML = `Card Quantity: ${cardQuantity}`;
  if(cardQuantity < 0) {
    alert('Card is empty');
    return false;
  }
}
