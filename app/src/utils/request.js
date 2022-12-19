import axios from 'axios';
import { baseApi, TOKEN_NAME } from '@/config';
import ApiErrorHandler from '@/api/error';

// 创建请求实例
const instance = axios.create({
  baseURL: baseApi,
  // 指定请求超时的毫秒数
  timeout: 3000,
  // 表示跨域请求时是否需要使用凭证
  withCredentials: false,
});

function getToken() {
  return localStorage.getItem(TOKEN_NAME);
}

// 前置拦截器（发起请求之前的拦截）
instance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 后置拦截器（获取到响应时的拦截）
instance.interceptors.response.use(
  (response) => {
    if (response.status === 200 || response.status === 201) {
      const { code, data } = response.data;
      if (typeof code !== 'undefined') {
        if (code === 0) {
          return Promise.resolve(data);
        }
        ApiErrorHandler(response.data);
        return Promise.reject(response);
      }
      return Promise.resolve(response.data);
    }
    ApiErrorHandler({ code: `HTTP_${response.status}`, message: response.statusText });
    return Promise.reject(response);
  },
  (error) => {
    const { response, code, message } = error;
    if (response && response.data) {
      ApiErrorHandler({ code: `HTTP_${response.status}`, message: response.statusText });
      return Promise.reject(error);
    }
    ApiErrorHandler({ code, message });
    return Promise.reject(error);
  },
);

// 导出常用函数

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export const post = (url, data = {}, params = {}) => {
  return instance({
    method: 'post',
    url,
    data,
    params,
  });
};

/**
 * @param {string} url
 * @param {object} params
 */
export const get = (url, params = {}) => {
  return instance({
    method: 'get',
    url,
    params,
  });
};

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export const put = (url, data = {}, params = {}) => {
  return instance({
    method: 'put',
    url,
    params,
    data,
  });
};

/**
 * @param {string} url
 * @param {object} params
 */
export const _delete = (url, params = {}) => {
  return instance({
    method: 'delete',
    url,
    params,
  });
};

export default instance;
