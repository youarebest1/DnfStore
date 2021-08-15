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

router.beforeEach((to, from, next) => {
  //创建全局守卫
  const istoken = localStorage.getItem("token") || "";
  if (!istoken) {
    //如果没有登录的话
    if (to.path == "/denglu" || to.path == "/zhuce") {
      //如果在登录页，直接显示
      next(); //显示登录页
    } else {
      next("/zhuce"); //如果不在登录页，直接跳转登录页
    }
  } else {
    if (to.path == "/denglu") {
      //如果登录的话，在登录页，直接跳转到首页
      next("/shouye");
    } else {
      next(); //在其他页面直接放行
    }
  }
});
