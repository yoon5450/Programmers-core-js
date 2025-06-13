/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

const nav = getNode("nav");

console.log(nav.className);
console.log((nav.className = "nav"));

nav.classList.add("hello");

/**
 *
 * @param {string | HTMLElement} node
 * @param {string | Array | object} classNames
 * @returns {void}
 */

function addClass(node, classNames) {
  node = getNode(node);

  if (isString(classNames)) {
    if (!isString(classNames))
      throw new TypeError(
        "addClass의 두 번째 요소는 string 타입이어야 합니다."
      );
    node.classList.add(classNames);
    return;
  }

  if (isObject(classNames)) classNames = Object.values(classNames);

  classNames.forEach((className) => {
    if (!isString(className))
      throw new TypeError(
        "addClass의 두 번째 요소는 string 타입이어야 합니다."
      );

    node.classList.add(className);
  });
}

function removeClass(node, classNames) {
  node = getNode(node);

  if (!classNames) {
    node.className = '';
  }

  // string일 때
  if (isString(classNames)) {
    if (!isString(classNames))
      throw new TypeError(
        "addClass의 두 번째 요소는 string 타입이어야 합니다."
      );
    else node.classList.remove(classNames);
    return;
  }

  // Object일 때 변환
  if (isObject(classNames)) classNames = Object.values(classNames);

  classNames.forEach((className) => {
    if (!isString(className))
      throw new TypeError(
        "addClass의 두 번째 요소는 string 타입이어야 합니다."
      );

    node.classList.remove(className);
  });
}

addClass(".first", "tiget");
addClass(".first", ["a", "b", "c"]);
addClass(".first", { first: "a", second: "b" });

removeClass(".first", { first: "a", second: "b" });
removeClass(".first", "");

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`
