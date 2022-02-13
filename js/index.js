const date = new Date();
document.getElementById("date").innerText = date.toLocaleDateString();

const submitBtn = document.getElementById("user-info-submit");
const deletetBtn = document.getElementById("user-info-cancel");
const userInfo = document.getElementById("user-info");
const userInfoCard = document.getElementById("user-info-card");

submitBtn.addEventListener("click", function () {
  if (userInfo.value == "") {
    return;
  }
  userInfoCard.innerText = userInfo.value;
  userInfo.value = "";
});

deletetBtn.addEventListener("click", function () {
  userInfo.value = "";
});

// items submit btn
const itemSubmit = document.getElementById("item-submit");
itemSubmit.addEventListener("click", function () {
  // get value of input fields
  const itemQuantity = document.getElementById("item-quantity-input");
  const itemPrice = document.getElementById("item-price-input");
  const itemName = document.getElementById("item-name");

  // handle error input
  if (itemPrice.value <= 0 || itemName.value == "" || itemQuantity.value <= 0) {
    return;
  }

  const tBody = document.getElementById("t-body");
  const tr = document.createElement("tr");
  const td = document.createElement("th");
  const td1 = document.createElement("th");
  const td2 = document.createElement("th");
  const td3 = document.createElement("th");
  // add classlist in td3
  td3.classList.add("total-price");
  td.innerText = itemName.value;
  td1.innerText = itemPrice.value;
  td2.innerText = itemQuantity.value;
  td3.innerText = parseInt(itemPrice.value * itemQuantity.value);
  tr.appendChild(td);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tBody.appendChild(tr);

  // clear fields
  itemName.value = "";
  itemPrice.value = "";
  itemQuantity.value = "";

  const subtotal = totalCalculate();
  const totalTax = taxCalculate(subtotal);
  const grandTotal = totalTax + subtotal;
  document.getElementById("grand-total").innerText = grandTotal;
});

function totalCalculate() {
  let sum = 0;
  const items = document.getElementsByClassName("total-price");
  for (const item of items) {
    sum += parseInt(item.innerText);
  }
  document.getElementById("sub-total").innerText = sum;
  return sum;
}

function taxCalculate(t) {
  const tax = 0.2 * t;
  document.getElementById("tax").innerText = tax.toFixed(2);
  return tax;
}
