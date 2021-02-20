/*
 * @Author: hh
 * @Date: 2020-02-11 09:47:28
 * @LastEditors: hh
 * @LastEditTime: 2021-02-20 14:03:17
 * @Description: 部署环境
 */
let apiConfig = {}
// uEnvDev
if (process.env.NODE_ENV === 'development') {
  apiConfig = {
    baseUrl: 'xxxx',
  }
}
// uEnvProd
if (process.env.NODE_ENV === 'production') {
  apiConfig = {
    dev: {
      // 开发
      baseUrl: 'xxx',
    },
    test: {
      // 测试
      baseUrl: 'xxx',
    },
    uat: {
      // 预发布
      baseUrl: 'xxx',
    },
    pro: {
      // 生产
      baseUrl: 'xxx',
    },
  }[process.env.VUE_APP_ENV]
}
export default apiConfig
