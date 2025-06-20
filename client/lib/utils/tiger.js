const END_POINT = "https://jsonplaceholder.typicode.com/users";

const defaultOptions = {
  url: "",
  method: "GET",
  body: null,
  header: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  message: "서버 통신 실패",
};

export const tiger = async (options = {}) => {
  let { url, message, ...rest } = {
    ...defaultOptions,
    ...options,
    header:{
      ...defaultOptions.header,
      ...options.header
    }
  };
  let data;
  console.log(url, rest);
  let response = await fetch(url, rest);

  if (response.ok) {
    data = await response.json();
  } else {
    throw new Error(message);
  }

  return data;
};

tiger.get = (url, options) => tiger({ url, method:"GET", ...options });
tiger.post = (url, body) => tiger({ url, method: "POST", body:JSON.stringify(body) });
tiger.put = (url, body) => tiger({ url, method: "PUT", body:JSON.stringify(body) });
tiger.delete = (url, id) => tiger({ url: `${url}/${id}`, method: "DELETE" });