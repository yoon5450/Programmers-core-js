import { configs } from "@eslint/js";

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

// xhr({
//   method: "POST",
//   url: END_POINT,
//   success: (data) => {
//     console.log(data);
//   },
//   fail: (message) => {
//     console.log(message);
//   },
//   body: obj,
// });

// xhr({
//   method: "DELETE",
//   url: `${END_POINT}/4`,
//   success: (data) => {
//     console.log(data);
//   },
//   fail: (message) => {
//     console.log(message);
//   },
// });

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
    fail,
  });
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

const defaultOptions = {
  method:'GET',
  url:'',
  body:null,
  errorMessage:'서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}

function xhrPromise(options = {}){

  const {method, url, headers, body, errorMessage:message} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  };

  const xhr = new XMLHttpRequest();

  xhr.open(method,url);

  if(!(method === 'DELETE')){
    Object.entries(headers).forEach(([k,v])=>{
      xhr.setRequestHeader(k,v);
    })
  }

  xhr.send(body ? JSON.stringify(body) : null);

  return new Promise((resolve, reject) => {
      xhr.addEventListener('readystatechange',()=>{
      const { readyState, status, response } = xhr;
      if(readyState === 4){
        if(status >= 200 && status < 400){
          resolve(JSON.parse(response));
        }else{
          reject({message});
        }
      }
    })
  })
}


xhrPromise({ url:END_POINT })
.then((res)=>{
  console.log( res );
  
})

xhrPromise.get = (url) => xhrPromise({url});
xhrPromise.post = (url,body) => xhrPromise({url,body,method:'POST'});
xhrPromise.put = (url,body) =>  xhrPromise({url,body,method:'PUT'});
xhrPromise.patch = (url,body) =>  xhrPromise({url,body,method:'PATCH'});
xhrPromise.delete = (url) => xhrPromise({url,method:'DELETE'});
