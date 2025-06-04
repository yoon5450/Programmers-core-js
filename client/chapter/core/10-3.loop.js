/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기
let j = 1;

while (j <= 10) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
}

for (let p = 1; p <= 10; p++) {
  if (p % 2 === 0) {
    console.log(p);
  }
}

const frontEndDev = "HTML CSS SVG JavaScript jQuery React Redux".split(" ");

let i = 0;
let l = frontEndDev.length;

while (i < l) {
  console.log(frontEndDev[i]);
  i += 1;
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

let tempFront = frontEndDev;
while(tempFront.length > 0){
    let cur = tempFront.pop();
    if(cur === 'SVG' || cur === 'jQuery') continue
    console.log(cur);
}

console.log('왜안넘어오니?');
//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

for(let z = 0; z < frontEndDev.length; z++){
    let cur = frontEndDev[i].toLowerCase();
    console.log(frontEndDev[i]);
    if(frontEndDev[i] === 'javascript') break;
}

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)
