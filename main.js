/*
 * @Author: hh
 * @Date: 2021-02-20 13:58:38
 * @LastEditors: hh
 * @LastEditTime: 2021-02-20 14:20:03
 * @Description: 
 */
import Vue from 'vue'
import App from './App'

import Api from './utils/api'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$Api = Api

const app = new Vue({
    ...App
})
app.$mount()
