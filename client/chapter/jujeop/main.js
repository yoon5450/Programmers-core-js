import jujeobData from "../../data/data.js";
import { getRandom } from "../../lib/math/index.js";
import { showAlert } from "../../lib/dom/showAlert.js";
import { isNumericString } from "../../lib/utils/type.js";
import { copy } from "../../lib/index.js";

let inputName = document.querySelector("#nameField");
let jujobBtn = document.querySelector("#submit");
let result = document.querySelector(".result");

function handleCopyClipboard() {
  const text = this.textContent;
  copy(text);
  showAlert({
    target: ".alert-success",
    className: "is-active",
    message: "클립보드 복사 완료!",
    timeout: 2000,
  });
}

function handleJujeob() {
  let name = inputName.value;

  if (!name || name.replace(" ", "") === "") {
    showAlert({
      target: ".alert-error",
      message: "공백 허용 안 됨",
      timeout: 2000,
      className: "is-active",
    });
    return;
  } else if (isNumericString(name)) {
    showAlert({
      target: ".alert-error",
      message: "숫자만 입력할 수 없습니다.",
      timeout: 2000,
      className: "is-active",
    });
    return;
  }

  let jujeob = jujeobData(name);
  result.textContent = jujeob[getRandom(jujeob.length)];
}

result.addEventListener("click", handleCopyClipboard);

jujobBtn.addEventListener("click", (e) => {
  e.preventDefault();
  handleJujeob();
});
