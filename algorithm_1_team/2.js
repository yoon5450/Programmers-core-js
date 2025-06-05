/*


- 문제 제목

홀수 짝수 판별하기

- 문제 설명

숫자 my_numbers 가 매개변수로 주어집니다. my_numbers 안의 각 숫자의 합이 짝수면 even, 
홀수면 odd를 출력하는 함수를 작성하세요.

- 입력/출력 예시

📥 입력 예시

checkCase(123);
checkCase(99999);
checkCase(513658235);

📤 출력 예시

even
odd
even

- 제한 조건

- 1 ≤ `my_numbers` 의 길이 ≤ 1,000
- `my_numbers` 은 0 이상 9007199254740991 이하의 자연수
- 공백이나 특수문자는 주어지지 않습니다.

*/

// -----------------------------------------------------------------------------------------

/*

풀이 : 문제 풀이 




*/

function checkCase(num) {
  let result = 0;

  while (num > 0) {
    result += num % 10;
    num = Math.floor(num / 10);
  }

  return ((result % 2) === 0) ? "even" : "odd";
}

console.log(checkCase(123));
console.log(checkCase(99999));
console.log(checkCase(513658235));
