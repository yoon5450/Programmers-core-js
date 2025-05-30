/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2025;
console.log(typeof String(YEAR));
console.log(typeof (YEAR + ''));

// undefined, null
let friend;
console.log(typeof Number(friend));

let money = null;
console.log(typeof money/1);
console.log(typeof money*1);
console.log(typeof +money);

// boolean
let isActive = false;
console.log(typeof parseInt(isActive + ""));

let struct = {
    name:'yoon',
    getName1:() => {return this.name;},
    getName2() {return this.name;}
}

console.log(struct.getName1());
console.log(struct.getName2());




/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

// null

// boolean

// string

// numeric string


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 