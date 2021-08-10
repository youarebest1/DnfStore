<template>
    <div class=''>
   <van-tabbar v-model="active" active-color="#ef524b" route>
  <van-tabbar-item icon="home-o" replace to="/shouye">首页</van-tabbar-item>
  <van-tabbar-item icon="fire-o" replace to="/jingxuan">精选</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o" replace to="/carts">购物车</van-tabbar-item>
  <van-tabbar-item icon="user-o" replace to="/my">我的</van-tabbar-item>
</van-tabbar>
    </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>
<style scoped>
    
</style>