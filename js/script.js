const currencyElementOne=document.getElementById('currency-one');
const amountElementOne=document.getElementById('amount-one');
const currencyElementTwo=document.getElementById('currency-two');
const amountElementTwo=document.getElementById('amount-two');

const rateElement=document.getElementById('rate');
const swap=document.getElementById('swap');

function calculate(){
    const currency_one=currencyElementOne.value;
    const currency_two=currencyElementTwo.value;

    fetch(`https://v6.exchangerate-api.com/v6/defab8003d19c3435f0a45ee/latest/${currency_one}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            const rate=data.conversion_rates[currency_two];
            rateElement.innerText=`1 ${currency_one} = ${rate} ${currency_two}`;
            amount=amountElementOne.value;

            amountElementTwo.value=(amount*rate).toFixed(2);

        });
}

currencyElementOne.addEventListener('change',calculate);
amountElementOne.addEventListener('input',calculate);
currencyElementTwo.addEventListener('change',calculate);
amountElementTwo.addEventListener('input',calculate);

swap.addEventListener('click',()=>{
    const temp=currencyElementOne.value;
    currencyElementOne.value=currencyElementOne;
    currencyElementTwo.value=temp;
    calculate();
})

calculate();