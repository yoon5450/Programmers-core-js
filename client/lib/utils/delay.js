import { getNode } from "../dom/getNode.js";

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

function delayP(shouldRejected = false, timeout = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve("성공!");
      } else {
        reject({ message: "오류 발생!" });
      }
    }, timeout);
  });
}

delayP()
  .then(() => {
    first.style.top = "-100px";
    second.style.top = "100px";

    return delayP();
  })
  .then(() => {
    first.style.transform = "rotate(360deg)";
    second.style.transform = "rotate(360deg)";

    return delayP()
  })
  .then(() => {
    first.style.top = 0;
    second.style.top = 0;
  })
