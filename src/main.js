import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from "./router/router.js"
import fastclick from "fastclick"
import axios from "axios"
import 'mint-ui/lib/style.css'
import MintUi from "mint-ui"
import '_vue-ydui@0.8.3@vue-ydui/dist/ydui.base.css';
import '_vue-ydui@0.8.3@vue-ydui/dist/ydui.rem.css';
import {KeyBoard} from '_vue-ydui@0.8.3@vue-ydui/dist/lib.rem/keyboard';
Vue.component(KeyBoard.name, KeyBoard);
fastclick.attach(document.body)
// 配置axios
Vue.prototype.$http = axios
// 中间件use
Vue.use(MintUi)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
