import Vue from "vue";
import App from "./App.vue";
import Vant from "vant"; //已经引入van
import "vant/lib/index.css"; //已经引入vant样式
import router from "./router"; //已经引入 router组件
import "./assets/css/reset.css"; //引入取消默认样式文件

import "swiper/dist/css/swiper.css"; //引入轮播图样式
import VueAwesomeSwiper from "vue-awesome-swiper"; //引入轮播图
Vue.use(VueAwesomeSwiper);
Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  Vant,
}).$mount("#app");
