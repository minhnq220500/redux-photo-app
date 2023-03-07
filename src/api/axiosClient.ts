import { wedconfig } from "./../config";
import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: wedconfig.apiUrl,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  paramsSerializer: (params) => queryString.stringify(params), //axios default sẽ có 1 vài issue nhỏ lúc parse params nên dùng queryString
});

axiosClient.interceptors.request.use(async (config) => {
  //handle token here
  //

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

// inteceptors: giúp mình hỗ trợ add thêm những header common(content-type), xử lý token, handle error

// tổ chức api như thế nào?
// - tất cả các http request trước khi từ client đi tới server thì nó sẽ phải qua 1 cái cổng trung gian là http client(axios, fetch),
// và từ server về client cũng phải đi qua cái cổng này, nếu tất cả request đều đi qua 1 cổng thì mình có thể xử lý cái nào common chung,
// ví dụ: tất cả request đi qua thì mình đều add thêm header, token, .. và khi các data được trả về thì mình đều parse nó về 1 loại nào đấy

//cookie base vs token base
//cookie base
//khi gửi username, password lên server thì server sẽ tạo ra 1 session(phiên làm việc giữa client và server),
//và server sẽ lưu trữ session trong database
//sau đó ổng sẽ trả về 1 response, là session và ổng sẽ set cookie=session id
//khi có cookie thì những request sau mà trình duyệt gửi lên server thì nó sẽ tự động lấy cookie của domain
//và gửi lên, khi gửi thì mình sẽ có thông tin trong cookie là session id, và server sẽ lấy session id trong cookie được lưu trong db
//và đi kiểm tra xem đó có phải là session hợp lệ ko, cùa user nào, có quyền gì

// token base
// khi gửi username, password thì server sẽ tạo ra 1 token và gửi ngược lại client, client lúc này sẽ lưu token trong localStorage
// mỗi lần gửi req lên server, và trong localStorage có token thì nó sẽ đính kèm token này và trong authorization
// khi lên server thì server có nhiệm vụ validate cái token này, xem thử token này có hợp lệ hay ko

//2 cái khác nhau ở chỗ là server lúc sài token base thì ko cần phải lưu trong tin trong database
