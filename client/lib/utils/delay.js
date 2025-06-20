import { isNumber, isObject } from "./type.js";
import { xhrPromise } from "./xhr.js";

export function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// object mixin
const defaultOptions = {
  shouldRejected: false,
  data: "성공",
  errorMessage: "알 수 없는 오류",
  timeout: 1000,
};

export function delayP(options) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject(options)) {
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

async function f() {
  return 10;
}

const a = f();

a.then(await a);

async function delayA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("성공");
    }, 2000);
  });
}

async function ramen() {
  const a = await delayP({ data: "물" });
  console.log(a);

  const b = await delayP({ data: "불켜기" });
  console.log(b);

  const c = await delayP({ data: "스프" });
  console.log(c);
}

async function getData() {
  const data = await xhrPromise.get("https://pokeapi.co/api/v2/pokemon/10/");
  console.log(data);
}

