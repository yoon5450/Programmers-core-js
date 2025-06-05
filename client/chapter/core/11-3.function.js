/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...rest) => {
    let total = 0;
    for(let cur of rest) total += cur;
    return total;
};

let clacAllMoneyReduce = (...rest) => rest.reduce((acc, cur) => acc += cur);

let calcAllMoneyForEach = (...rest) => {
    let total = 0;
    rest.forEach((el) => {
        total += el;
    });
    return total;
}


console.log(clacAllMoneyReduce(1000, 3000, 5000, 2500));
console.log(calcAllMoneyForEach(1000, 3000, 5000, 2500));



// 화살표 함수와 this

const user = {
    name : '박수진',
    totla : 0,
    grades: [50,70,40],
    sayHi:function(){
        console.log(this);
    },
    sayHi2:()=>{
        console.log(this);
    },
    sayHi3(){
        console.log(this);
    }
}


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (baseNumber, exponent) =>{
    let total = 1
    for(let i = 0; i < exponent; i++){
        total *= baseNumber;
    }
    return total;
}

console.log(pow(2, 53));

let _pow = (numeric, powerCount) =>{
    return new Array(powerCount).fill(numeric).reduce((acc, cur) => acc * cur);
}

console.log(_pow(2,53));

// repeat(text: string, repeatCount: number): string;
let repeat = (str, count) => str.repeat(count);

repeat = (str, count) => {
    repeatedStr = ""
    for(let i = 0; i < count; i++){
        repeatedStr += str
    }
    return repeatedStr;
}

console.log(repeat('안녕하세요', 3));