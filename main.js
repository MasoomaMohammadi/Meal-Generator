const bgColor = [
  "#F0A4E6",
  "#B8DCE9",
  "#CDE9B6",
  "#EEEDB1",
  "#F0E2C3",
  "#F0C3CF",
  "#D9EFF0",
  "#84E368",
];

const meals = [
  { name: "Ashag", src: "./images/Ashag.jpeg", price: 25 },
  { name: "Ash", src: "./images/ash.jpeg", price: 8 },
  { name: "Halva", src: "./images/halva.jpeg", price: 10 },
  { name: "Kabab", src: "./images/kabab.jpeg", price: 15 },
  { name: "Qaboli", src: "./images/qaboli.jpeg", price: 20 },
  { name: "Shorva", src: "./images/shorva.jpeg", price: 12 },
  { name: "Manto", src: "./images/manto.jpeg", price: 18 },
  { name: "Kabab", src: "./images/kabab-2.jpeg", price: 14 },
];

let wallet = 100;

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function generateBackgroundColor() {
  const randomNum = generateRandomNumber(bgColor.length);
  return bgColor[randomNum];
}

document.body.style.backgroundColor = generateBackgroundColor();

function generateMeals() {
  const randomNum1 = generateRandomNumber(meals.length);
  const randomNum2 = generateRandomNumber(meals.length);
  const randomNum3 = generateRandomNumber(meals.length);

  const meal1 = document.querySelector("#meal1");
  meal1.querySelector("img").src = meals[randomNum1].src;
  meal1.querySelector("h5").textContent = meals[randomNum1].name;
  meal1.querySelector("span").textContent = meals[randomNum1].price.toFixed(2);

  const meal2 = document.querySelector("#meal2");
  meal2.querySelector("img").src = meals[randomNum2].src;
  meal2.querySelector("h5").textContent = meals[randomNum2].name;
  meal2.querySelector("span").textContent = meals[randomNum2].price.toFixed(2);

  const meal3 = document.querySelector("#meal3");
  meal3.querySelector("img").src = meals[randomNum3].src;
  meal3.querySelector("h5").textContent = meals[randomNum3].name;
  meal3.querySelector("span").textContent = meals[randomNum3].price.toFixed(2);
}

function calculateBill() {
  const meal1Price = parseFloat(
    document.getElementById("meal1").querySelector("span").textContent
  );
  const meal2Price = parseFloat(
    document.getElementById("meal2").querySelector("span").textContent
  );
  const meal3Price = parseFloat(
    document.getElementById("meal3").querySelector("span").textContent
  );

  const total = meal1Price + meal2Price + meal3Price;
  console.log(total);
  document.getElementById("total").innerText = "$" + total.toFixed(2);
}

document
  .getElementById("generate-button")
  .addEventListener("click", function () {
    generateMeals();
    calculateBill();
  });

function purchase() {
  const total = parseFloat(
    document.getElementById("total").innerText.replace("$", "")
  );

  const walletBalance = parseFloat(
    document.getElementById("wallet").innerText.replace("$", "")
  );

  if (walletBalance >= total) {
    document.getElementById("wallet").innerText =
      "$" + (walletBalance - total).toFixed(2);
    document.getElementById("message").classList.remove("invisible");
    document.getElementById("purchase-cost").innerText = total.toFixed(2);
    generateMeals();
    document.body.style.backgroundColor = generateBackgroundColor();
  } else {
    alert("Sorry, you cannot purchase the meals!");
    document.getElementById("message").classList.add("invisible");
  }
}

document.getElementById("purchase-button").addEventListener("click", purchase);

function addFunds(fund) {
  const funds = parseFloat(prompt("Enter amount to add to wallet:"));
  if (!isNaN(funds) && funds > 0) {
    wallet += funds;
    document.getElementById("wallet").innerText = "$" + wallet.toFixed(2);
  } else {
    alert("Invalid amount!");
  }
}

document.getElementById("add-funds-button").addEventListener("click", addFunds);

generateMeals();
calculateBill();