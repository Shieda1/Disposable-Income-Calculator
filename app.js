// https://www.omnicalculator.com/finance/disposable-income

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const disposablePersonalIncomeRadio = document.getElementById('disposablePersonalIncomeRadio');
const personalincomeRadio = document.getElementById('personalincomeRadio');
const governmenttaxesRadio = document.getElementById('governmenttaxesRadio');
const governmenttransfersRadio = document.getElementById('governmenttransfersRadio');

let disposablePersonalIncome;
let personalincome = v1;
let governmenttaxes = v2;
let governmenttransfers = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

disposablePersonalIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Personal income';
  variable2.textContent = 'Government taxes';
  variable3.textContent = 'Government transfers';
  personalincome = v1;
  governmenttaxes = v2;
  governmenttransfers = v3;
  result.textContent = '';
});

personalincomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Disposable Personal Income';
  variable2.textContent = 'Government taxes';
  variable3.textContent = 'Government transfers';
  disposablePersonalIncome = v1;
  governmenttaxes = v2;
  governmenttransfers = v3;
  result.textContent = '';
});

governmenttaxesRadio.addEventListener('click', function() {
  variable1.textContent = 'Disposable Personal Income';
  variable2.textContent = 'Personal income';
  variable3.textContent = 'Government transfers';
  disposablePersonalIncome = v1;
  personalincome = v2;
  governmenttransfers = v3;
  result.textContent = '';
});

governmenttransfersRadio.addEventListener('click', function() {
  variable1.textContent = 'Disposable Personal Income';
  variable2.textContent = 'Personal income';
  variable3.textContent = 'Government taxes';
  disposablePersonalIncome = v1;
  personalincome = v2;
  governmenttaxes = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(disposablePersonalIncomeRadio.checked)
    result.textContent = `Disposable Personal Income = ${computedisposablePersonalIncome().toFixed(2)}`;

  else if(personalincomeRadio.checked)
    result.textContent = `Personal income = ${computepersonalincome().toFixed(2)}`;

  else if(governmenttaxesRadio.checked)
    result.textContent = `Government taxes = ${computegovernmenttaxes().toFixed(2)}`;

  else if(governmenttransfersRadio.checked)
    result.textContent = `Government transfers = ${computegovernmenttransfers().toFixed(2)}`;
})

// calculation

// disposablePersonalIncome = personalincome - governmenttaxes + governmenttransfers

function computedisposablePersonalIncome() {
  return Number(personalincome.value) - Number(governmenttaxes.value) + Number(governmenttransfers.value);
}

function computepersonalincome() {
  return Number(disposablePersonalIncome.value) + Number(governmenttaxes.value) - Number(governmenttransfers.value);
}

function computegovernmenttaxes() {
  return Number(personalincome.value) - Number(disposablePersonalIncome.value) + Number(governmenttransfers.value);
}

function computegovernmenttransfers() {
  return Number(disposablePersonalIncome.value) - Number(personalincome.value) + Number(governmenttaxes.value);
}