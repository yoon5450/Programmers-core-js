let inputs = document.querySelectorAll('.calculator input')
let resultDiv = document.querySelector('.result')
let clearBtn = document.querySelector('#clear')

inputs.forEach((el) =>{
    el.addEventListener('input', debounce(calcSum))
})

clearBtn.addEventListener('click', handleClear())

function calcSum(e){
    resultDiv.textContent = (Number(inputs[0].value ?? 0)) + (Number(inputs[1].value ?? 0))
}

function handleClear(e){
    inputs[0].value = '';
    inputs[1].value = '';
    resultDiv.textContent = '';
}

function debounce(callback){
    let timeout = 500;

    return setTimeout(() => {
        this.call(callback);
    }, timeout);
}