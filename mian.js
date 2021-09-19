'use strict';

const curr1 = document.getElementById('currency__one');
const curr2 = document.getElementById('currency__two');
const amount1 = document.getElementById('amount-1');
const amount2 = document.getElementById('amount-2');
const swapBtn = document.querySelector('.btn-swap');
const rate = document.querySelector('.rate__curr');
const rateNumber = document.querySelector('.rate__valueCurr');

function converter() {
  const c1 = curr1.value;
  const c2 = curr2.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/53fc54f1da350fcd30a8868c/latest/${c1}`
  )
    .then(res => res.json())
    .then(data => {
      const rates = data.conversion_rates[c2];
      rate.innerText = ` 1 ${c1} = ${c2}`;
      rateNumber.innerText = `${rates}`;
      amount2.value = (amount1.value * rates).toFixed(2);
    });
}

//call function with addeventlistener
curr1.addEventListener('change', converter);
curr2.addEventListener('change', converter);
// amount1.addEventListener('input', converter);
// amount2.addEventListener('input', converter);

///Swap buttons
swapBtn.addEventListener('click', () => {
  const tempo = curr1.value;
  curr1.value = curr2.value;
  curr2.value = tempo;
  converter();
});

converter();
