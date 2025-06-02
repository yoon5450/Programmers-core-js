/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

console.log(AandB);

// Logical AND Assignment
// a &&= b;
// a = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = a && b && value;

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy;


// 로그인 프롬프트
let id = prompt('who`s there?');

if(id === null || id.replace(/\s*/g, '') === ''){
    alert('Canceled');
}else if(id.toLowerCase() === 'admin'){
    let password = prompt('Password?');

    if(password === null){
        alert('Canceled');
    }else if(password.toLowerCase() === 'themaster'){
        alert('Welcome!');
    }else{
        alert('Wrong password');
    }
}else{
    alert('i don`t know you');
}

