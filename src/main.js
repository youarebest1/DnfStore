import Vue from "vue";
import App from "./App.vue";
import Vant from "vant"; //已经引入vant组件
import "vant/lib/index.css"; //已经引入vant样式
import router from "./router"; //已经引入 router组件
import "./assets/css/reset.css"; //引入取消默认样式文件

Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  Vant,
}).$mount("#app");
