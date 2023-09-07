const cardNumberInput = document.querySelector(".card-number-input");
const cardHolderInput = document.querySelector(".card-holder-input");
const monthInput = document.querySelector(".month-input");
const yearInput = document.querySelector(".year-input");
const cvvInput = document.querySelector(".cvv-input");
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const cardNumberBox = document.querySelector(".card-number-box");
const cardHolderName = document.querySelector(".card-holder-name");
const expireMonth = document.querySelector(".expire-month");
const expireYear = document.querySelector(".expire-year");
const cvvBox = document.querySelector(".cvv-box");

cardNumberInput.oninput = () => {
  cardNumberBox.innerText = cardNumberInput.value;
};

cardHolderInput.oninput = () => {
  cardHolderName.innerText = cardHolderInput.value;
};

monthInput.oninput = () => {
  expireMonth.innerText = monthInput.value;
};

yearInput.oninput = () => {
  expireYear.innerText = yearInput.value;
};

cvvInput.onmouseenter = () => {
  front.style.transform = "perspective(1000px) rotateY(-180deg)";
  back.style.transform = "perspective(1000px) rotateY(0deg)";
};

cvvInput.onmouseleave = () => {
  front.style.transform = "perspective(1000px) rotateY(0deg)";
  back.style.transform = "perspective(1000px) rotateY(180deg)";
};

cvvInput.oninput = () => {
  cvvBox.innerText = cvvInput.value;
};
