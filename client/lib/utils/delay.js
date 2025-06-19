import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./type.js";

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

let first = getNode(".first");
let second = getNode(".second");

delay(() => {
  first.style.top = "-100px";
  delay(() => {});
  first.style.transition = "rotate(360deg)";
});

// object mixin

const defaultOptions = {
  shouldRejected: false,
  data: "성공",
  errorMessage: "알 수 없는 오류",
  timeout: 1000,
};

function delayP(options) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  } 
  
  if(isObject(options)){
    config = { ...defaultOptions, ...options };
  }

  const { shouldRejected, timeout, errorMessage, data } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

delayP({
  data: "성공!!",
  shouldRejected: false,
  timeout: 1000,
  errorMessage: "오류 발생!",
});

delayP()
  .then(() => {
    first.style.top = "-100px";
    second.style.top = "100px";

    return delayP();
  })
  .then(() => {
    first.style.transform = "rotate(360deg)";
    second.style.transform = "rotate(360deg)";

    return delayP();
  })
  .then(() => {
    first.style.top = 0;
    second.style.top = 0;
  });
