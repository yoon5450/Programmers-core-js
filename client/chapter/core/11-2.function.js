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
let calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

const result = calculateTotal(9000, -2500, 5000, 11900);
console.log(result);

//for문으로 total 내보내기
function calcForTotal() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

function calcForOfTotal() {
  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  return total;
}

function calcHardTotal() {
  const arr = Array.prototype.slice.call(arguments); // array instance method
  // arr = Array.from(arguments); // array static method
  // arr = [...arguments];
  // arr.forEach(element => {

  // });
  total = arr.reduce(function (acc, current, index) {
    return acc + current;
  }, 0);

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

function movePage(url, success, fail) {
  if (url.includes("https")) {
    success(url);
  } else {
    fail();
  }
}

movePage(
  "https://www.naver.com",
  function (url) {
    console.log(`${url}로 3초 뒤 해당 사이즈로 이동합니다.`);
  },
  function () {
    console.log("잘못된 url 정보를 입력하셨습니다.");
  }
);

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

const MASTER = (function () {
  var uuid = "zxasnzxj!@#as8d_12387zj$$!ak";

  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };
})();

// 클로저 패턴인 것 같은데?
console.log(MASTER);

function rem(pxValue, base = 16) {
  if (!pxValue) {
    throw new Error("rem 함수의 첫 번째 인수는 필수 입력 값입니다.");
  }

  if (typeof base === "string") {
    throw new TypeError("rem 함수의 두 번째 인수는 숫자 타입이어야 합니다.");
  }

  let result = parseInt(pxValue) / base;
  return result + "rem";
}

console.assert(rem(20) === "1.25rem");
console.assert(rem("25px") === "1.5625rem");
console.assert(rem("30px", 10) === "3rem");

function setCss(node, property, option) {
  if (arguments.length === 0) {
    throw new Error("값을 입력하십시오.");
  }

  if (!(property in document.body.style))
    throw new ReferenceError(
      "setCss 함수의 두 번째 인수는 유효한 css 속성이어야 합니다."
    );

  if (typeof node === "string") node = document.querySelector(node);

  node.style[property] = option;
  console.log(node);
}

// setCss();
setCss(".first", "color", "orange");

function getCss(node, property) {
  if (arguments.length === 0) {
    throw new Error("값을 입력하십시오.");
  }

  if (!(property in document.body.style))
    throw new ReferenceError(
      "setCss 함수의 두 번째 인수는 유효한 css 속성이어야 합니다."
    );

  node = document.querySelector(node);
  return getComputedStyle(node)[property];
}

const fontSize = getCss(".first", "font-size");
console.log(fontSize);

function css(node, prop, value) {
    // if(!value){
    //     return getCss(node, prop);
    // }else{
    //     setCss(node, prop, value);
    // }

    return !value ? getCss(node, prop) : setCss(node, prop, value);
}

css(".first", "color");
css(".first", "color", "orange");
