<template>
  <div class="">
    <div class="header">
      <a href="/shoye">《返回</a>
      <p>手表</p>
      <span>
        <van-icon
          name="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic2%2Fcover%2F00%2F47%2F50%2F5815b8ab8ea5e_610.jpg&refer=http%3A%2F%2Fpic.51yuansu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631247808&t=676b6731f7feca539e2f9b016f792f27"
          size="25"
      /></span>
      <Connav></Connav>
    </div>
    <div class="kongbai"></div>

    <div class="gl">
      <span>默认</span>
      <span @click="jiage">🔽价格</span>
      <span>🔽销量</span>
    </div>

    <div class="main">
      <ul class="list-sp" v-for="item in products" :key="item._id">
        <img :src="item.coverImg" alt="" />
        <p>{{ item.name }}</p>
        <span>￥{{ item.price }}</span>
      </ul>
    </div>
  </div>
</template>

<script>
import Connav from "../../components/con_nav_black.vue";
import { get } from "../../util/request";
export default {
  components: {
    Connav,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    async ger() {
      const res = await get("/api/v1/products", {
        per: 999,
        page: 1,
      });
      // this.products = res.data.products;
      //   console.log(res.data.products);
      res.data.products.forEach((els) => {
        if (String(els.productCategory.name) == "智能手表") {
          this.products.push(els);
        }
      });

      // console.log(this.products = arr);
    },
    jiage() {},
  },
  created() {
    this.ger();
  },
  mounted() {},
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 80px;
  background-color: #fff;
  /* border: 1px solid ; */
  position: fixed;
  border-bottom: 1px solid;
}
.header > a {
  display: block;
  color: #999;
  padding-top: 6px;
}
.header > p {
  font-size: 26px;
  font: 900;
  line-height: 50px;
  padding-left: 10px;
}
.header span {
  position: absolute;
  left: 76%;
  bottom: 30%;
}
.kongbai {
  width: 100%;
  height: 80px;
  background-color: #fff;
}
.gl {
  width: 180px;
  height: 30px;
  background-color: #999;
  border-radius: 15px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  position: fixed;
  left: 55%;
  opacity: 0.5;
}
.main {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.list-sp {
  width: 45%;
  height: 300px;
  border: 1px solid;
  margin-top: 20px;
  display: inline-block;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #888888;
  margin: 9px;
}
.list-sp > img {
  width: 100%;
  display: block;
  margin-top: 10px;
}
.list-sp > p {
  text-align: center;
  font-size: 18px;
  line-height: 20px;
  margin-top: 10px;
}
.list-sp > span {
  color: red;
  font-size: 20px;
  font: 600;
  text-align: center;
  display: inline-block;
  margin-top: 10px;
  width: 100%;
}
</style>