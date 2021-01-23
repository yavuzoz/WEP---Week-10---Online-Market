/**
 * 
 */
if (document.readyState == "loading") {
  document.addEventListener("DOMContentloaded", loadReady)
} else {
  loadReady()
}

function loadReady() {
  let removeBoxItems = document.getElementsByClassName("btn-danger")
  for (let i = 0; i < removeBoxItems.length; i++) {
    removeBoxItems[i].addEventListener("click", removeItems)
  }

  let addToBuy = document.getElementsByClassName("shop-item-button");
  for (let index = 0; index < addToBuy.length; index++) {
    addToBuy[index].addEventListener("click", addToClick)
  };

  function removeItems(event) {
    event.target.parentElement.parentElement.remove()
  }

  function addToClick(event) {
    let shopItem = event.target.parentElement.parentElement
    let title = shopItem.getElementsByClassName("shop-item-title")[0].innerText
    let imgSource = shopItem.getElementsByClassName("shop-item-image")[0].src
    let priceName = shopItem.getElementsByClassName("shop-item-price")[0].innerText
    addToBox(title, imgSource, priceName);
  }

  function addToBox(title, imgSource, priceName) {
    let boxRow = document.createElement("div")
    boxRow.classList.add("cart-row")
    let cartItem = document.getElementsByClassName("cart-items")[0]

    let cartRowIncilude = `<div class="cart-item cart-column">
    <img
      class="cart-item-image"
      src="${imgSource}"
      width="100"
      height="100"
    />
    <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${priceName} </span>
  <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="2"/>
    <button class="btn btn-danger" type="button">REMOVE</button>
  </div>`
    boxRow.innerHTML = cartRowIncilude
    cartItem.append(boxRow)
    boxRow.getElementsByClassName("btn-danger")[0].addEventListener("click", removeItems)
  }
};