import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  paramsSerializer: (params) => queryString.stringify(params), //axios default sẽ có 1 vài issue nhỏ lúc parse params nên dùng queryString
});

axiosClient.interceptors.request.use(async (config) => {
  //handle token here

  //   const token = await getFirebaseToken(); //phải lưu token lúc login
  //   if (token) {
  //     config.headers.Authorization = `Bearer ${token}`;
  //   }

  return config;
});

axiosClient.interceptors.response.use(
  // tất cả request trả về lúc nào cũng lấy response.data thì mình làm tại đây luôn
  //nếu như request nào có response data thì mình đều trả về tại đây cho nó
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;

//axios client là thằng mà tất cả http request đều phải đi qua, nhưng trc khi đi qua thì phải đi qua 1 cái lớp api
