import Vue from 'vue'
import App from './App'

import store from './store/index'
import interfaces from './utils/interface'
import https from './utils/http'

Vue.prototype.$store = store
Vue.prototype.$interfaces = interfaces
Vue.prototype.$https = https

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
