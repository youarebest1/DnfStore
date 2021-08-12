<template>
  <div class="shouye">
    <div class="header">
      <router-link to="/shouye"
        ><img
          src="../../assets/img/shouye/header2.png"
          width="185px"
          height="55px"
      /></router-link>
      <router-link to="/shouye">
        <div class="header_search">
          <van-icon name="search" size="35" />
        </div>
      </router-link>
    </div>

    <div class="banner">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide
          ><img
            src="../../assets/img/shouye/banner1.jpg"
            width="100%"
            height="height: 216px;"
          />
        </swiper-slide>
        <swiper-slide
          ><img
            src="../../assets/img/shouye/banner2.jpg"
            width="100%"
            height="height: 216px;"
        /></swiper-slide>
        <swiper-slide
          ><img
            src="../../assets/img/shouye/banner3.jpg"
            width="100%"
            height="height: 216px;"
        /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div class="renqi">
      <p class="p1">-Popularity Series-</p>
      <p class="p2">人气系列</p>
      <van-tabs v-model="active">
        <van-tab title="精美口红" >
          <dl class="dl1"  v-for="item in kouhong"  :key='item._id' @click='dw(item._id)'>
            <img :src="item.coverImg" alt="图片暂时无法加载">
            <p>{{item.name}}</p>
            <span>60天销量：1000+</span>
            <h3>￥{{item.price}}</h3>
          </dl>
        </van-tab>
        <van-tab title="高端灯具">
          <dl class="dl1"  v-for="item in dengju"  :key='item._id' @click='dw(item._id)'>
            <img :src="item.coverImg" alt="图片暂时无法加载">
            <p>{{item.name}}</p>
            <span>60天销量：1000+ </span>
            <h3>￥{{item.price}}</h3>
          </dl>
        </van-tab>
        <van-tab title="小米电视">
          <dl class="dl1"  v-for="item in dianshi"  :key='item._id' @click='dw(item._id)'>
            <img :src="item.coverImg" alt="图片暂时无法加载">
            <p>{{item.name}}</p>
            <span>60天销量：1000+</span>
            <h3>￥{{item.price}}</h3>
          </dl>
        </van-tab>
        <van-tab title="智能手表">
          <dl class="dl1"  v-for="item in shoubiao"  :key='item._id' @click='dw(item._id)'>
            <img :src="item.coverImg" alt="图片暂时无法加载">
            <p>{{item.name}}</p>
            <span>60天销量：1000+</span>
            <h3>￥{{item.price}}</h3>
          </dl>
        </van-tab>
        <van-tab title="酷炫手机">
          <dl class="dl1"  v-for="item in shouji"  :key='item._id' @click='dw(item._id)'>
            <img :src="item.coverImg" alt="图片暂时无法加载">
            <p>{{item.name}}</p>
            <span>60天销量：1000+</span>
            <h3>￥{{item.price}}</h3>
          </dl>
        </van-tab>
      </van-tabs>
      
      <div class="more" @click="tiao">
        <img src="../../assets/img/shouye/more.png" width="234px" height="61px">
      </div>
    </div>
 
    <div class="text">
      <p class="p1">-Brand Series-</p>
      <p class="p2">品牌系列</p>
     </div>

     <div class="footerimg">
         <img :src="item.coverImg"  v-for="item in dengju" :key='item._id' @click='dw(item._id)' >
     </div>

    <Connav></Connav>
  </div>
</template>

<script>
import Connav from "../../components/con_nav_black.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { get } from "../../util/request";
import "swiper/dist/css/swiper.css";

export default {
  components: {
    Connav,
    swiper,
    swiperSlide,
  },
  data() {
    return {
      kouhong:"", //口红数据
      dengju:"", //灯具数据
      dianshi:"", //电视数据
      shoubiao:"", //手表数据
      shouji:"", //手机数据
      active: 0, //默认显示
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  watch: {},

  methods: {
    //获取商品数据
    async getproduct() {
      let kouhong = await get("/api/v1/products", {
        per: 4,
        page: 1,
        product_category: "6113bf1ae6e70d22f035716d",
      });
      let dengju = await get("/api/v1/products", {
        per: 4,
        page: 1,
        product_category: "6113bf1ae6e70d22f035716c",
      });
      let dianshi = await get("/api/v1/products", {
        per: 4,
        page: 1,
        product_category: "6113bf1ae6e70d22f035716b",
      });
      let shoubiao = await get("/api/v1/products", {
        per: 4,
        page: 1,
        product_category: "6113bf1ae6e70d22f0357169",
      });
      let shouji = await get("/api/v1/products", {
        per: 4,
        page: 1,
        product_category: "6113bf1ae6e70d22f0357168",
      });
      this.kouhong = kouhong.data.products;   //获取口红数据
      this.dengju = dengju.data.products;    //获取灯具
      this.dianshi = dianshi.data.products;  //获取电视
      this.shoubiao = shoubiao.data.products; //获取手表
      this.shouji = shouji.data.products;   //获取手机
      console.log(kouhong)
    },
    dw(id){
            this.$router.push("/xiangqing/"+id);
    },
    tiao(){
      this.$router.push("/jingxuan")
    }
  },
  created() {},
  mounted() {
    this.getproduct();
  },
};
</script>
<style>
/********************************* header部分 ***********************/
.shouye {
  padding-top: 96px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
}
.header {
  width: 100%;
  height: 96px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background: url("../../assets/img/shouye/header.jpg");
  z-index: 100;
}
.header img {
  margin-left: 17px;
}
.header .header_search {
  width: 35px;
  height: 35px;
  margin-left: 70px;
}

/********************************* banner部分 ***********************/
.banner {
  width: 100%;
}
.banner .swiper-container {
  position: relative;
  width: 100%;
}
.banner .swiper-container .swiper-slide {
  width: 100%;
  color: #000;
  font-size: 16px;
  text-align: center;
}
/* ****************人气商品************************ */
.renqi {
  width: 95%;
  padding: 12px 5px 6px 5px;
  border-bottom: 1px solid #CCCCCC;
}
.renqi p {
  text-align: center;
  display: block;
  margin-block-start: 10px;
  margin-block-end: 10px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.renqi .p1 {
  color: #6d6d6d;
  font-size: 12px;
  font-weight: 600;
}
.renqi .p2 {
  color: #b6a597;
  font-size: 28px;
  font-weight: 400;
}
/* *******************标签栏********************************** */
.renqi .van-tabs__nav {
  padding: 0 15px;
}
.renqi .van-tabs__content {
  margin-top: 10px;
  padding: 0 15px;
}
.renqi .van-tabs__nav .van-tab {
  border: 1px solid #b6a597;
  color: #b6a597;
  width: 60px !important;
  height: 30px;
  margin: 3px;
  font-size: 12px;
}
.renqi .van-tabs__nav .van-tab--active {
  color: white;
  background-color: #fb561c;
}
.renqi .van-tabs__nav .van-tabs__line {
  display: none;
}
.renqi .van-tabs__content .dl1{
  width: 45%;
  height: 272px;
  border: 1px solid gainsboro;
  border-radius: 10px;
  margin: 8px;
  float: left;
  box-shadow: 5px 5px 5px #888888;

}
.renqi .van-tabs__content .dl1 img{
  width: 100%;
  height: 70%;
}
.renqi .van-tabs__content .dl1 p{
  width: 100%;
  height: 14px;
  font-size: 14px;
  overflow: hidden;
}
.renqi .van-tabs__content .dl1 span{
  display: block;
  width: 100%;
  font-size: 12px;
  color: grey;
  text-align: center;
}
.renqi .van-tabs__content .dl1 h3{
    color: #FD3C1C;
    font-size: 16px;
    font-weight: bold;
    margin-top: 2px;
    text-align: center;
    margin-top: 10px;
}

.renqi .more{
   display: flex;
   width: 100%;
   justify-content: center;
   align-items: center;
   margin-bottom: 10px;
   margin-top: 5px;
}

.text p {
  text-align: center;
  display: block;
   margin-block-start: 10px;
  margin-block-end: 10px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.text .p1 {
  color: #6d6d6d;
  font-size: 12px;
  font-weight: 600;
}
.text .p2 {
  color: #b6a597;
  font-size: 28px;
  font-weight: 400;
}
.footerimg{
  width: 100%;
}
.footerimg img{
  width: 100%;
  height: 280px;
  margin: 2px 0; 
}
</style>
