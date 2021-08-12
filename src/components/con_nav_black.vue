<template>
  <div class="con_nav">
    <van-icon name="wap-nav" size="40" color="#1C1C1C" @click="showPopup" />
    <van-popup
      v-model="show"
      position="top"
      :style="{ height: '100%' }"
      lock-scroll
      duration="1"
      closeable
      close-icon="https://img.dnfcity.qq.com/weixin20/base/menu/pop_close.png"
      close-icon-position="bottom"
    >
      <h1>人气系列</h1>
      <ul>
        <li @click="tiao1">
          <span>礼包收藏</span>
          <img src="https://img.dnfcity.qq.com/weixin20/base/menu/menu1.png" />
        </li>
        <li @click="tiao2">
          <span>手办模型</span>
          <img src="https://img.dnfcity.qq.com/weixin20/base/menu/menu2.png" />
        </li>
        <li @click="tiao3">
          <span>数码电子</span>
          <img src="https://img.dnfcity.qq.com/weixin20/base/menu/menu3.png" />
        </li>
        <li @click="tiao4">
          <span>玩家共创</span>
          <img src="https://img.dnfcity.qq.com/weixin20/base/menu/menu4.png" />
        </li>
        <li @click="tiao5">
          <span>新品专区</span>
          <img src="https://img.dnfcity.qq.com/weixin20/base/menu/menu5.png" />
        </li>
        <li @click="tiao6">
          <span>二觉礼盒</span>
          <img src="https://img.dnfcity.qq.com/weixin20/base/menu/menu6.png" />
        </li>
        <li @click="tiao7">
          <span>服饰日用</span>
          <img src="https://img.dnfcity.qq.com/weixin20/base/menu/menu7.png" />
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      show: false,
    };
  },
  computed: {},
  watch: {},

  methods: {
    showPopup() {
      this.show = true;
    },
    tiao1() {
      this.$router.push({ path: "/tiao1" });
    },
    tiao2() {
      this.$router.push({ path: "/tiao2" });
    },
    tiao3() {
      this.$router.push({ path: "/tiao3" });
    },
    tiao4() {
      this.$router.push({ path: "/tiao4" });
    },
    tiao5() {
      this.$router.push({ path: "/tiao5" });
    },
    tiao6() {
      this.$router.push({ path: "/tiao6" });
    },
    tiao7() {
      this.$router.push({ path: "/tiao7" });
    },
  },
  created() {},
  mounted() {},
};
</script>
<style>
.con_nav {
  position: fixed;
  right: 20px;
  top: 28px;
  z-index: 100;
}
.con_nav .van-popup {
  opacity: 0.9;
}
.con_nav .van-popup > h1 {
  margin-top: 40px;
  font-size: 2em;
  text-align: center;
  color: #454545;
  margin-bottom: 10px;
}
.con_nav .van-popup > ul {
  display: block;
}
.con_nav .van-popup > ul > li {
  width: 80%;
  height: 52px;
  margin: 0 auto;
  border-radius: 50px;
  position: relative;
  margin-bottom: 5px;
}
.con_nav .van-popup > ul > li > img {
  width: 100%;
  height: 52px;
}
.con_nav .van-popup > ul > li > span {
  position: absolute;
  display: block;
  height: 16px;
  line-height: 16px;
  font-size: 14px;
  color: #fff;
  top: 0;
  bottom: 0;
  margin: auto;
  margin-left: 13%;
}
.con_nav .van-popup .van-popup__close-icon {
  font-size: 30px !important;
  margin-top: 20px;
  margin-left: 50%;
}
<<<<<<< HEAD
.con_nav   .van-popup{
       opacity: .9;
   }
.con_nav  .van-popup>h1{
    margin-top: 40px;
    font-size: 2em;
    text-align: center;
    color: #454545;
    margin-bottom:10px;
  } 
.con_nav .van-popup>ul{
       display: block;
   }
 .con_nav .van-popup>ul>li{
      width: 80%;
      height: 52px;
      margin: 0 auto;
      border-radius: 50px;
      position: relative;
      margin-bottom: 5px;
  }  
  .con_nav .van-popup>ul>li>img{
     width: 100%;
      height: 52px;
   }
 .con_nav .van-popup>ul>li>span{
    position: absolute;
    display: block;
    height: 16px;
    line-height: 16px;
    font-size: 14px;
    color: #fff;
    top: 0;
    bottom: 0;
    margin: auto;
    margin-left: 13%;
  } 
.con_nav .van-popup .van-popup__close-icon{
 font-size: 30px !important;
 margin-top: 20px;
 margin-left: 50%;
 }
=======
>>>>>>> 6339dabf8749148e98362c60cee9d38fd1214a72
</style>