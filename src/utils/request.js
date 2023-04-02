import axios from "axios";

var baseURL = "https://website.cms.gin-18.top/api";
var timeout = 10000;

// 创建 axios 实例
var instance = axios.create({
  baseURL,
  timeout,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    var data = response.data;
    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
