let inputName = document.querySelector(".name");
let inputnumber = document.querySelector(".number");
let addCard = document.querySelector(".click");
let allCards = document.querySelector(".cards");

function addCArd() {
  allCards.innerHTML += `
    <div class="card">
    <img src="./img/kard png.webp" alt="img" class="mainImg"/>
    <img src="./img/visa.png" alt="img" class="mainImg">
    <h1 class="num">${
      inputnumber.value.slice(0, 4) +
      " - " +
      inputnumber.value.slice(4, 8) +
      " - " +
      inputnumber.value.slice(8, 12) +
      " - " +
      inputnumber.value.slice(12, 16)
    }</h1>
    <div class="classText">
    <div class="cardName">
    <h3>Name</h3>
    <h2>${inputName.value}</h2>
    </div>
    <div class="cardNum">
    <h3>Valid Till</h3>
    <h2>11 / 27</h2>
    </div>
    </div>
    </div>
    `;
  inputName.value = "";
  inputnumber.value = "";
}
addCard.addEventListener("click", () => {
  addCArd();
});

addCard.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addCArd();
  }
});
