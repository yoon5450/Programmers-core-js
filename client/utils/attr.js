function getAttr(node, attrName) {
  let target = document.querySelector(node);
  if (!isString(attrName) === "string")
    throw new TypeError(
      "getAttr 함수에 전달된 두 번째 인수는 문자타입이어야 합니다"
    );
  return target.getAttribute(attrName);
}

function setAttr(node, attrName, setText) {
  if (isString(node)) node = getNode(node);
  if (!isString(attrName) === "string")
    throw new TypeError(
      "getAttr 함수에 전달된 두 번째 인수는 문자타입이어야 합니다"
    );

  return node.setAttribute(attrName, setText);
}

function removeAttr(node, attrName) {
  let target = document.querySelector(node);
  return target.removeAttr(attrName);
}