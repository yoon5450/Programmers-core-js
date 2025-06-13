/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

const first = getNode(".first");

// first.onclick = () =>{
//     console.log('hit');
// }

// function handler(){
//     console.log('clicked!')
// }

function handler(e) {
  console.log(e);
}

first.addEventListener("click", handler);

const ground = getNode(".ground");
const ball = getNode(".ball");

function handleBall({ offsetX: x, offsetY: y }) {
  // const {offsetX, offsetY} = e;

  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  ball.style.transform = `translate(${x - w / 20}px, ${y - h / 20}px)`;
}

function handleMove({ offsetX: x, offsetY: y }) {
  console.log(x, y);
}

ground.addEventListener("mousemove", debounce(handleMove, 1000));

// 디바운스
function debounce(f, limit = 1000) {
  let timeout;

  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      f.call(this, e);
    }, limit);
  };
}


//쓰로틀
function throttle(f, limit = 200) {
  let wait = false;

  return (...args) => {
    if (!wait) {
      f.apply(this, args);
      wait = true;
      setTimeout(() => (wait = false), limit);
    }
  };
}

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener
