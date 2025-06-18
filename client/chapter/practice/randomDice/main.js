import { clearContents, diceAnimation, endScroll, getAttr, getNode, memo } from "../../../lib/index.js";

let btnGroup = getNode(".buttonGroup");
let [rollBtn, recordBtn, resetBtn] = btnGroup.querySelectorAll("button");
let recordListWrapper = getNode(".recordListWrapper");
let cube = getNode("#cube");
let tbody = getNode("tbody");

let tryCount = 1;
let summery = 0;


memo('cube', ()=>getNode('#cube'))

const handleRollingDice = (() => {
  let id;
  let isClicked = false;

  return () => {
    isClicked = !isClicked;
    if (isClicked) {
      id = setInterval(diceAnimation, 200);
      recordBtn.disabled = false;
      resetBtn.disabled = false;
    } else {
      clearInterval(id);
      recordBtn.disabled = true;
      resetBtn.disabled = true;
    }
  };
})();

function createItem(value) {
  summery += Number(getAttr(cube, "dice"));
  return/* html */`<tr>
<td>${tryCount++}</td>
<td>${value}</td>
<td>${summery}</td>
</tr>`;
}

function save() {
  let value = getAttr(cube, "dice");
  let template = createItem(value);
  endScroll('tbody');
  tbody.insertAdjacentHTML("beforeend", template);
  recordListWrapper.hidden = false;
}

function reset() {
  recordListWrapper.hidden = true;
  tryCount = 1;
  summery = 0
  clearContents('tbody');
}

rollBtn.addEventListener("click", handleRollingDice);
recordBtn.addEventListener("click", save);
resetBtn.addEventListener("click", reset);
