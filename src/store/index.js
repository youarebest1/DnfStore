import Vue from "vue"; //引入vue文件
import Vuex from "vuex"; // 引入vuex

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 这个可以认为是初始状态数据
    dizhi: "",
    shangpin: "",
  },
  //   可以实现公共代码抽离,在调用的时候直接调用
  mutations: {
    getdizhi(state, payload) {
      //第一个参数为 仓库，第二个参数为，要传入的参数（可以不写）
      // 变更状态
      state.dizhi = payload;
    },
    getshipin(state, payload) {
      //第一个参数为 仓库，第二个参数为，要传入的参数（可以不写）
      // 变更状态
      state.shangpin = payload;
    },
  },
});

export default store;
