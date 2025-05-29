/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
let unsign;
console.log(typeof unsign);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let str = "str";
console.log(typeof str);

// 4. 정수, 부동 소수점 숫자(길이 제약)
let num = 16.27;
console.log(typeof num);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
let bigNum = 1234556788900123455677n;
console.log(typeof bigNum);

// 6. 참(true, yes) 또는 거짓(false, no)
let bool = true;
console.log(typeof bool);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
let arr = [];
console.log(typeof arr);

// 8. 고유한 식별자(unique identifier)
console.log(typeof Symbol('id'));


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
console.log(typeof arr);

// 2) 함수 typeof()
console.log(typeof(arr));

// 언어 상, 오류
console.log(typeof null);




// Object
console.log(typeof new Object());

// Array
console.log(typeof new Array());

// function
console.log(typeof function(el){return el+1});

// this
console.log(typeof this);