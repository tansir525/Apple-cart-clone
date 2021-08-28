/// call fix price ////
const price = document.getElementById("price");

/////call all button//////
const memory8gb = document.getElementById("memory-8gb");
const memory16gb = document.getElementById("memory-16gb");
const storage256gb = document.getElementById("storage-256");
const storage512gb = document.getElementById("storage-512");
const storage1tb = document.getElementById("storage-1tb");
const free = document.getElementById("default-plan");
const express = document.getElementById("custom-plan");
const promobtn = document.getElementById("promo-apply");

const memoryCost = document.getElementById("Memory-cost");
const storageCost = document.getElementById("Storage-cost");
const deliveryCost = document.getElementById("Delivry-cost");

//promo part and final total count////

const alltotal = document.getElementById("alltotal");

promobtn.addEventListener("click", function () {
  const promoinput = document.getElementById("promo-input");
  let promoTotal = document.getElementById("promo-total");

  let promoCode = promoinput.value;
  if (promoCode == "stevekaku") {
    promoTotal.innerText =
      promoTotal.innerText - (20 / 100) * promoTotal.innerText;
  }
  promoinput.value = "";
});

const promoTotal = document.getElementById("promo-total");

/////////total count//////
function updateTotal() {
  const total = Number(price.innerText);
  const memory = Number(memoryCost.innerText);
  const storage = Number(storageCost.innerText);
  const delivery = Number(deliveryCost.innerText);
  const grandTotal = total + memory + storage + delivery;
  alltotal.innerText = grandTotal;
  promoTotal.innerText = grandTotal;
}
// addEventListener

memory8gb.addEventListener("click", function () {
  memoryCost.innerText = 0;
  updateTotal();
});
memory16gb.addEventListener("click", function () {
  memoryCost.innerText = 180;
  updateTotal();
});
storage256gb.addEventListener("click", function () {
  storageCost.innerText = 0;
  updateTotal();
});
storage512gb.addEventListener("click", function () {
  storageCost.innerText = 100;
  updateTotal();
});
storage1tb.addEventListener("click", function () {
  storageCost.innerText = 180;
  updateTotal();
});
free.addEventListener("click", function () {
  deliveryCost.innerText = 0;
  updateTotal();
});
express.addEventListener("click", function () {
  deliveryCost.innerText = 20;
  updateTotal();
});
