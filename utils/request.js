/*
 * @Author: hh
 * @Date: 2019-08-07 11:04:48
 * @LastEditors: hh
 * @LastEditTime: 2021-02-20 14:13:45
 * @Description: flyio封装
 */
import Fly from 'flyio/dist/npm/wx';
import apiConfig from './api.config';
import { whiteList } from './whiteList';
const fly = new Fly();

// fly 全局配置
fly.config = {
  baseURL: apiConfig.baseUrl,
  timeout: 10000
};
// 添加请求拦截器
fly.interceptors.request.use(
  (request) => {
    const token = uni.getStorageSync('token');
    // 给所有请求添加token
    request.headers = {
      Accept: 'application/json',
      Token: token ? token : ''
    };
    return request;
  },
  (error, promise) => {
    promise.reject(error);
  }
);

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  (response, promise) => {
    if (response.data.code === 502 || response.data.code === 500) {
      let msg = response.data.msg;
      uni.showToast({
        title: msg,
        icon: 'none'
      });
      return promise.reject(response);
    } else {
      // 只将请求结果的data字段返回
      return response.data;
    }
  },
  // 响应状态码
  (err, promise) => {

    if (err.status == 0 || err.status == 1) {
      uni.showToast({
        title: '请求超时，请稍后重试',
        icon: 'none'
      });
      return promise.reject(err);
    }
    let message = err.response.data.msg;
    let msg = '';
    switch (err.status) {
      case 401:
        msg = message;
        break;
      case 403:
        msg = '禁止访问';
        break;
      case 404:
        msg = '网络不稳定，请查询网络设置';
        break;
      case 405:
        msg = '请求方式错误';
        break;
      case 500:
        msg = '服务器开小差了';
        break;
    }
    if (msg) {
      uni.showToast({
        title: msg,
        icon: 'none'
      });
    }
    return promise.reject(err);
  }
);
export default fly;
