const people = [
  {
    id: 0,
    name: "김유하",
    age: 38,
    job: "나니가스키",
    imgSrc: "https://randomuser.me/api/portraits/med/men/75.jpg",
    imgAlt: "대체 텍스트입니다...",
  },
  {
    id: 1,
    name: "백효영",
    age: 15,
    job: "공주님",
    imgSrc: "https://randomuser.me/api/portraits/med/men/50.jpg",
    imgAlt: "대체 텍스트입니다...",
  },
  {
    id: 2,
    name: "박진강",
    age: 41,
    job: "기업 이사 전문 업체",
    imgSrc: "https://randomuser.me/api/portraits/med/men/20.jpg",
    imgAlt: "대체 텍스트입니다...",
  },
];

/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

/* 요소 순환 ---------------------------- */

// const spans = document.querySelectorAll('span');

// spans.forEach((span, index) => {
//     span.addEventListener('click', function(e){

//         e.currentTarget.style.color = 'orange'

//         console.log(this);
//     })
// })

// forEach

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
const reverse = people.toReversed();

// splice
const splice = people.toSpliced(0, 0, { name: "대웅" });

// const sort = Array.sort(() => a - b);

// sort

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

let jobMap = people.map((user) => user.job);
console.log(jobMap);

let years2later = people.map((el) => el.age + 2);
console.log(years2later);

let taps = people
  .map((user) => {
    /* html */
    const template = `
    <li>
    <figure>
    <img src="${user.imgSrc}" alt="" />
    <figcaption>${user.imgAlt}</figcaption>
    </figure>
        <ul>
            <li>이름 : ${user.name}</li>
            <li>나이 : ${user.age}</li>
            <li>직업 : ${user.job}</li>
        </ul>
    </li>
    `;
    return template;
  })
  .join("");

document.querySelector("ul").insertAdjacentHTML("beforeend", taps);

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join

const products = [
  { name: "냉동 만두", price: 10000, brand: "비비고" },
  { name: "냉동 피자", price: 15000, brand: "오뚜기" },
  { name: "냉동 새우", price: 12000, brand: "하림" },
  { name: "냉동 치킨", price: 11000, brand: "곰곰" },
];

const _forEach = (callback, i) => {
  for (const a of i) {
    callback(a);
  }
};

_forEach((item) => {
  console.log(item);
}, products);

const _map = (f, i) => {
  const arr = [];

  for (const a of i) {
    arr.push(f(a));
  }

  return arr;
};

const newArray = _map((item) => {
  return item.brand;
}, products);

const _filter = (callback, i) => {
  let updated = [];

  for (let a of i) {
    if (callback(a)) {
      updated.push(a);
    }
  }
};

const product = _filter(item => item.price < 15000, products);
