import { changeColor, clearContents } from "../../../lib/dom/index.js";
import { getNode } from "../../../lib/dom/index.js";
import { delayP, tiger } from "../../../lib/utils/index.js";
import { renderEmpty, renderSpinner } from "./userList.js";

const END_POINT = "http://localhost:3000/posts";

/*
<article class="user-card" data-index="user-1">
          <h3 class="user-name">kindtiger</h3>
          <div class="user-resouce-info">
            <div>
              <a class="user-email" href="mailto:tiger@euid.dev">tiger@euid.dev</a>
            </div>
            <div>
              <a class="user-website" href="http://tiger.com" target="_blank" rel="noopener noreferer">tiger.com</a>
            </div>
          </div>
          <button class="delete">삭제</button>
        </article>
*/

let cardList = document.querySelector(".user-card-list");

async function renderUserList() {
  renderSpinner(cardList);

  try {
    const data = await tiger.get(END_POINT);

    await delayP(2000);

    gsap.to(".loadingSpinner", {
      opacity: 0,
      duration: 1,
      onComplete() {
        getNode(".loadingSpinner").remove();

        data.forEach((item) => {
          let htmlItem = createItem(item);
          cardList.insertAdjacentHTML("beforeend", htmlItem);
        });

        changeColor(".user-card");

        gsap.from(".user-card", {
          opacity: 0,
          stagger: 0.1,
          x: -30,
        });
      },
    });
  } catch {
    renderEmpty(cardList);
  }
}

function createItem({
  id = "",
  username = "unknown",
  email = "unknown@unknown.com",
  website = "www.unknown.com",
}) {
  let template = /* html */ `
    <article class="user-card" data-index="user-1">
          <h3 class="user-name">${username}</h3>
          <div class="user-resouce-info">
            <div>
              <a class="user-email" href="mailto:${email}">${email}</a>
            </div>
            <div>
              <a class="user-website" href="${website}" target="_blank" rel="noopener noreferer">${website}</a>
            </div>
          </div>
          <button class="delete" data-value='${id}'>삭제</button>
        </article>
    `;
  return template;
}

renderUserList();

function handleDelete(e) {
  const button = e.target.closest("button");

  if (!button) return;

  const id = button.dataset.value;

  tiger.delete(END_POINT, id).then(() => {
    clearContents(cardList);
    renderUserList();
  });

  console.log(button);
}

cardList.addEventListener("click", handleDelete);

const createBtn = getNode(".create");
const cancelBtn = getNode(".create .cancel");
const doneBtn = getNode(".create .done");
const pop = getNode(".create .pop");

function handleCreate(e) {
  gsap.to(pop, {
    autoAlpha: 1,
  });
}

function handlePopClose(e) {
  e.stopPropagation();

  gsap.to(pop, {
    autoAlpha: 0,
  });
}

async function handelDone(e) {
  e.preventDefault();
  let username = getNode("#nameField").value;
  let email = getNode("#emailField").value;
  let site = getNode("#siteField").value;

  await tiger.post(END_POINT, { username, email, site }).then(() => {
    getNode("#nameField").value = "";
    getNode("#emailField").value = "";
    getNode("#siteField").value = "";
    clearContents(cardList);
    renderUserList();
    gsap.to(pop, {
      autoAlpha: 0,
    });
  });
}

createBtn.addEventListener("click", handleCreate);
cancelBtn.addEventListener("click", handlePopClose);
doneBtn.addEventListener("click", handelDone);

const registerBtn = getNode(".register");
const registerCancelBtn = getNode(".register .cancel");
const registerDoneBtn = getNode(".register .done");
const registerPop = getNode(".register .pop");

function handelRegister() {
  gsap.to(registerPop, {
    autoAlpha: 1,
  });
}

function handelRegisterCancel(e) {
  e.stopPropagation();
  gsap.to(registerPop, {
    autoAlpha: 0,
  });
}

function handelRegisterCreate(e) {
  e.preventDefault();

  const name = getNode("#create-name").value;
  const password = getNode("#create-password").value;

  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "yoon@naver.com",
      password: "123123",
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}



registerBtn.addEventListener("click", handelRegister);
registerCancelBtn.addEventListener("click", handelRegisterCancel);
registerDoneBtn.addEventListener("click", handelRegisterCreate);

tiger.post("http://localhost:3000/login", {
  email: "yoon@naver.com",
  password: "123123",
});