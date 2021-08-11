import Vue from "vue";
import VueRouter from "vue-router"; //引入路由插件
Vue.use(VueRouter); //使用组件

const router = new VueRouter({
  routes: [
    //  配置路由表
    {
      path: "/", //路由重定向（设置默认地址）
      redirect: "/shouye",
      meta: {
        footShow: true,
      },
    },
    {
      path: "/shouye", //网站首页
      component: () => import("../views/shouye"),
      meta: {
        footShow: true,
      },
    },
    {
      path: "/jingxuan", //精选页面
      component: () => import("../views/jingxuan"),
      meta: {
        footShow: true,
      },
    },
    {
      path: "/carts", //配置消息模块
      component: () => import("../views/carts"),
      meta: {
        footShow: true,
      },
    },
    {
      path: "/my", //个人中心页面
      component: () => import("../views/my"),
      meta: {
        footShow: true,
      },
    },
    {
      path: "/denglu", //登录页面
      component: () => import("../views/denglu"),
      meta: {
        footShow: false,
      },
    },
    {
      path: "/zhuce", //注册页面
      component: () => import("../views/zhuce"),
      meta: {
        footShow: false,
      },
    },
    {
      path: "/xiangqing/:id", //详情页面
      component: () => import("../views/xiangqing"),
      meta: {
        footShow: false,
      },
    },
    /* 以下为列表页路由 */
    {
      path: "/tiao1", //我是礼包收藏路由
      component: () => import("../views/list/tiao1"),
      meta: {
        footShow: true,
      },
    },
    {
      path: "/tiao2", //我是手办模型路由
      component: () => import("../views/list/tiao2"),
      meta: {
        footShow: true,
      },
    },
    {
      path: "/tiao3", //我是数码电子
      component: () => import("../views/list/tiao3"),
      meta: {
        footShow: true,
      },
    },
    {
      path: "/tiao4", //我是玩家共创路由
      component: () => import("../views/list/tiao4"),
      meta: {
        footShow: true,
      },
    },
    {
      path: "/tiao5", //新品专区路由
      component: () => import("../views/list/tiao5"),
      meta: {
        footShow: true,
      },
    },
    {
      path: "/tiao6", //我是二觉礼盒路由
      component: () => import("../views/list/tiao6"),
      meta: {
        footShow: true,
      },
    },
    {
      path: "/tiao7", //我是服饰日用路由
      component: () => import("../views/list/tiao7"),
      meta: {
        footShow: true,
      },
    },
  ],
});

export default router; //导出路由模块
