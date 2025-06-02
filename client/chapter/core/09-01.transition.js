/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

let answer = prompt("자바스크립트의 공식 이름은 무엇일까요?");

if (answer === "ECMAScript") {
  alert("정답입니다");
} else {
  alert("틀렸습니다.");
}

// 영화 봤니?
let didWatchMovie = confirm("너 진격의거인 봤니?");

// 영화 볼거니?
let goingToWatchMovie = confirm("그 영화 볼거니?");

// if 문(statement)
if (!didWatchMovie) {
  if (goingToWatchMovie) {
    alert("같이 갈래?");
  }
}

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
didWatchMovie ? alert('그 영화 재밌더라.') : 
confirm("그 영화 볼거니?") ? alert('누구랑?') : console.log('그래 그렇구나')