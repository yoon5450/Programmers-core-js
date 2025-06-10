/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
    position: 'fixed',
    zIndex: 10000,
    top: '50%',
    left: '50%',
    width: '60vw',
    maxWidth: '800px',
    height: '40vh',
    minHeight: '280px',
    transform: 'translate(-50%, -50%)'
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
    uuid:crypto.randomUUID(),
    name:'yoon',
    email:'dbseodnd356@gmail.com'
}


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.




// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel


// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거 or 삭제 



function getEntries(obj){
    let result = [];
    

    for(let key in obj){
        let cur = [];
        cur.push(key, obj[key]);
        result.push(cur);
    }

    return result;
}

console.log(getEntries(cssMap));


function removeProperty(obj, key){
    if(Object.prototype.toString.call({}).slice(8, -1).toLowerCase()){
        obj[key] = null;
    }else{
        throw new Error('removeProperty 함수의 첫 번째 인수는 객체 타입만 사용할 수 있습니다.')
    }
    
}

removeProperty(authUser, 'email')


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
    name,
    email,
    authorization,
    isLogin,
}


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}




/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */


const arr = [10, 100, 10000, 10_000];
const [a1, a2, a3, a4] = arr;

for(const [k, v] of Object.entries(authUser)){
    console.log(k, v);
}


/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */
const {log:g} = console;

console.clear();

const salaries = {
    정소영: 400,
    황유정: 80,
    정은진: 130,
}

const {정소영:정, 황유정:황, 김아현} = salaries;

const data = {
    name:'윤대웅',
    age:28,
    address:'오산',
    phone:'010-111-1111',
    job:null
}

function createUserObject({name, age, address, phone, job}){
    return{
        name,
        age,
        address,
        phone,
        job,
    }
}

const user = createUserObject(data);

g(user);

