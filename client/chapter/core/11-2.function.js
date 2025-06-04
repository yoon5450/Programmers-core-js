/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
    return moneyA + moneyB + moneyC + moneyD;
};

const result = calculateTotal(9000, -2500, 5000, 11900);
console.log(result);


//for문으로 total 내보내기
function calcForTotal(){
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

function calcForOfTotal(){
    let total = 0;
    for(let value of arguments){
        total += value;
    }
    return total;
}

function calcHardTotal(){
    const arr = Array.prototype.slice.call(arguments); // array instance method
    arr = Array.from(arguments); // array static method
    arr = [...arguments];
    // arr.forEach(element => {
        
    // });
    total = arr.reduce(function(acc, current, index){
        return acc + current;
    }, 0)

    arguments.__proto__ = Array.prototype;
    console.log(arguments);
    
    return arr;    
}


console.log(calcHardTotal(9000, -2500, 5000, 11900));


// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;


// 콜백 함수 (표현)식
let callbackFunctionExpression;


// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;
