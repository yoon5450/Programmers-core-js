import { endScroll } from "../dom";

const END_POINT = "https://jsonplaceholder.typicode.com/users";

export function xhr({
  method = "GET",
  success = null,
  fail = null,
  url = "",
  body = null,
  headers = {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
} = {}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  if (method !== "DELETE") {
    Object.entries(headers).forEach(([k, v]) => {
      xhr.setRequestHeader(k, v);
    });
  }

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 400) {
        success(xhr.response);
      } else {
        fail(xhr.response);
        console.error("로드 실패");
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

const obj = {
  name: "tige1r",
  age: 30,
  email: "tiger@gmail.com",
};

xhr({
  method: "POST",
  url: END_POINT,
  success: (data) => {
    console.log(data);
  },
  fail: (message) => {
    console.log(message);
  },
  body: obj,
});

xhr({
  method: "DELETE",
  url: `${END_POINT}/4`,
  success: (data) => {
    console.log(data);
  },
  fail: (message) => {
    console.log(message);
  },
});

xhr.get = (url, success, fail) => {
  xhr({ url, success, fail }); // 알아서 바인딩됨
};

xhr.post = (url, body, success, fail) => {
  xhr({
    method: "POST",
    url,
    body,
    success,
    fail,
  });
};

xhr.delete = (url, success, fail) => {
  xhr({ 
    method: "DELETE", 
    url, 
    success, 
    fail });
};

xhr.put = (url, body, success, fail) => {
  xhr({
    method: "PUT",
    url,
    body,
    success,
    fail,
  });
};

xhr.patch = (url, body, success, fail) => {
  xhr({
    method: "PATCH",
    url,
    body,
    success,
    fail,
  });
};

xhr.get(
  END_POINT,
  () => {},
  () => {}
);
