const calculateBtn = document.querySelector("#calculate");
const currencyBuy = document.querySelector("#buy");
const currencySell = document.querySelector("#sell");
const currencySumm = document.querySelector("#summ");
const currency = document.querySelector("#currency");
const resultToPage = document.querySelector("#result");

calculateBtn.addEventListener("click", () => {
  const buy = parseFloat(currencyBuy.value);
  const sell = parseFloat(currencySell.value);
  const summ = parseFloat(currencySumm.value);
  const curr = currency.value;
  let result = 0;

  if (isNaN(buy) || isNaN(sell) || isNaN(summ) || curr == "") {
    resultToPage.innerHTML =
      "Небхідно коректно заповнити всі поля для роботи калькулятора";
  } else {
    if (buy <= 0 || sell <= 0 || summ <= 0) {
      resultToPage.innerHTML = "Заповніть поля значеннями більше 0";
    } else {
      if (curr == "USD" || curr == "EUR") {
        if (curr == "USD") {
          result = (summ / buy).toFixed(2);
          resultToPage.innerHTML = `Для того щоб отримати ${summ} USD, необхідно мати ${result} EUR`;
        }
        if (curr == "EUR") {
          result = (summ * sell).toFixed(2);
          resultToPage.innerHTML = `Для того щоб отримати ${summ} EUR, необхідно мати ${result} USD`;
        }
      } else {
        resultToPage.innerHTML = 'Оберіть валюту в форматі "USD" або "EUR"';
      }
    }
  }
});
