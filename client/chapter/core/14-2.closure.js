//IFFE 패턴을 이용해 실핸시킨 결과를 바로 반환함.

let button;

const handleClick = (() => {
  let isClicked = false;

  return () => {
    if (!isClicked) {
      document.body.style.background = "orange";
    } else {
      document.body.style.background = "white";
    }

    isClicked = !isClicked;
  };
})();

button.addEventListener('click', handleClick);


function bindEvent(node, eventType, fn){
    node.addEventListener(eventType, fn);

    return () => node.removeEventListener(eventType, fn);
}

const remove = bindEvent('.first', 'click', handleClick); // 이벤트 바인딩됨.
remove();


function useState(init){
    let value = init;

    function read(){
        return value;
    }

    function write(newValue){
        value = newValue;
    }

    return [read, write];
}


const [value, setValue] = useState('hello')