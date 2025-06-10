// class Button {
//   constructor({ target, contents }) {
//     this.button = document.querySelector(target);
//     this.button.textContents = contents;
//     this.count = 0;

//     this.attachEvent();
//   }

//   createTasg() {
//     return `<div>${++this.count}</div>`;
//   }

//   #render() {
//     document.body.insertAdjacentHTML("beforeend", this.createTasg());
//   }

//   handleClick() {
//     this.#render();
//   }

//   attachEvent() {
//     this.button.addEventListener("click", this.handleClick.bind(this));
//   }
// }

// // const btn = new Button('.btn')

// const btn = new Button({
//   target: ".btn",
//   contents: "click me!",
// });

class User {
  #pw;

  constructor(id, pw) {
    this.id = id;
    this.#pw = pw;
  }

  hashPassword(pw) {
    this.#pw = `hashCODE ${pw} 소금 후추`;
    return this.#pw;
  }

  checkPassword(pw) {
    return this.#pw === this.hashPassword(pw);
  }
}

const user = new User("admin", "admin");

class Admin extends User {
  constructor(id, pw) {
    super(id, pw);
    this.role = "admin";
  }

  isAdmin() {
    return true;
  }

  banUser(user) {
    console.log(
      `X ${user.id} 계정이 관리자 (${this.id})에 의해 정지되었습니다.`
    );
  }
}

const admin = new Admin("admin", "admin");

let guestCount = 1;

class Guest extends User {
  constructor() {
    const guestId = `guest_${++guestCount}`;
    super(guestId, null);
    this.role = "guest";
  }

  isGuest() {
    return true;
  }
}

document.querySelector(".todo").addEventListener("submit", (e) => {
  e.preventDefault();
});

class Todo {
  constructor({ input, button, renderPlace }) {
    this.input = document.querySelector(input);
    this.button = document.querySelector(button);
    this.renderPlace = document.querySelector(renderPlace);

    this.attachEvent();
  }

  getTodoValue() {
    return this.input.value;
  }

  getItemText(value){
    return `<li>${value}</li>`
  }

  setTodoValue() {
    let value = this.getTodoValue();
    if (value.trim() !== "") {
      this.renderPlace.insertAdjacentHTML("beforeend", `${this.getItemText(value)}`);
      this.input.value = "";
    }
  }

  attachEvent() {
    this.button.addEventListener("click", this.setTodoValue.bind(this));
  }
}

const todo = new Todo({
  input: `.todoInput`,
  button: ".todoButton",
  renderPlace: ".todolist",
});
