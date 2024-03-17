// let inputName = document.querySelector(".name");
// let inputnumber = document.querySelector(".number");
// let addCard = document.querySelector(".click");
// let allCards = document.querySelector(".cards");

// function addCArd() {
//   allCards.innerHTML += `
//     <div class="card">
//     <img src="./img/kard png.webp" alt="img" class="mainImg"/>
//     <h1 class="num">${
//       inputnumber.value.slice(0, 4) +
//       " - " +
//       inputnumber.value.slice(4, 8) +
//       " - " +
//       inputnumber.value.slice(8, 12) +
//       " - " +
//       inputnumber.value.slice(12, 16)
//     }</h1>
//     <div class="classText">
//     <div class="cardName">
//     <h3>Name</h3>
//     <h2>${inputName.value}</h2>
//     </div>
//     <div class="cardNum">
//     <h3>Valid Till</h3>
//     <h2>11 / 27</h2>

//     </div>
//     </div>
//     <ion-icon name="trash-outline" class="del-card"></ion-icon>
//     </div>
//     `;
//   inputName.value = "";
//   inputnumber.value = "";
// }

// addCard.addEventListener("click", () => {
//   addCArd();
// });

// inputnumber.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     addCArd();
//   }
// });

// allCards.addEventListener("click", (e) => {
//   if (e.target.classList.contains("del-card")) {
//     e.target.parentNode.remove();
//   }
// });

let inputName = document.querySelector(".name");
let inputnumber = document.querySelector(".number");
let click = document.querySelector(".click");
let allCards = document.querySelector(".cards");
readProduct();

click.addEventListener("click", () => {
  let newObj = {
    inputName: inputName.value,
    inputnumber: inputnumber.value,
  };

  let data = JSON.parse(localStorage.getItem("card")) || [];
  data.push(newObj);
  localStorage.setItem("card", JSON.stringify(data));
  readProduct();
});

function readProduct() {
  let data = JSON.parse(localStorage.getItem("card")) || [];
  allCards.innerHTML = "";
  data.forEach((el, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let mainImg = document.createElement("img");
    mainImg.classList.add("mainImg");
    let h1 = document.createElement("h2");
    let h2 = document.createElement("h2");
    h2.classList.add("num");
    let classText = document.createElement("div");
    classText.classList.add("classText");
    let cardName = document.createElement("div");
    cardName.classList.add("cardName");
    let cardNum = document.createElement("div");
    cardNum.classList.add("cardNum");
    let nameh31 = document.createElement("h3");
    let nameh32 = document.createElement("h3");
    let nameh33 = document.createElement("h2");
    let h1Num = document.createElement("h1");
    h1Num.classList.add("h1Num");
    let btnDelete = document.createElement("button");
    btnDelete.classList.add("btnDelete");

    mainImg.src = "./img/kard png.webp";
    h1.innerHTML = el.inputName;
    h2.innerHTML =
      el.inputnumber.slice(0, 4) +
      " - " +
      el.inputnumber.slice(4, 8) +
      " - " +
      el.inputnumber.slice(8, 12) +
      " - " +
      el.inputnumber.slice(12, 16);
    btnDelete.innerHTML = `<ion-icon name="trash-outline" class="del-card"></ion-icon>`;
    nameh31.innerHTML = "Name";
    nameh32.innerHTML = "Valid Till";
    nameh33.innerHTML = "11 / 27";

    card.append(mainImg);
    card.append(h2);
    card.append(classText);

    classText.append(cardName);
    cardName.append(nameh31);
    cardName.append(h1);

    classText.append(cardNum);
    cardNum.append(nameh32);
    cardNum.append(nameh33);

    card.append(btnDelete);

    allCards.append(card);

    btnDelete.addEventListener("click", () => {
      addDelete(index);
    });
  });
}

function addDelete(id) {
  let data = JSON.parse(localStorage.getItem("card")) || [];
  data.splice(id, 1);
  localStorage.setItem("card", JSON.stringify(data));
  readProduct();
}

