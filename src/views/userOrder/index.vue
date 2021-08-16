<template>
  <div class="userOrder">
    <!-- <van-button type="primary" block id="zhifu" @click="adddingdan">提交订单</van-button> -->
    <!-- 没有收货地址 -->

    <div id="dizhi">
      <p><van-icon name="location" />我的收货地址</p>
      <router-link to="/addressList"
        ><p id="newdizhi">选择地址<van-icon name="arrow" /></p
      ></router-link>
    </div>
    <div class="dizhi" v-if="dizhi">
      <van-contact-card
        type="edit"
        :name="currentContact.name"
        :tel="currentContact.tel"
      />
    </div>
    <div class="dizhi" v-if="!dizhi">
      请选择地址后操作
    </div>
    <!-- 		商品信息  -->
    <div id="xin">
					<li v-if="!newlist" >
				暂无选中商品		<button @click="gg">去逛逛</button></li>
      <p id="xinxi">商品信息</p>
		
      <ul v-if="newlist">
			
        <li id="list" v-for="item in newlist" :key="item._id" >
          <img :src="item.img" width="60px" height="60px" />
          <div>
            <p>{{ item.name }}</p>
            <p>现价：￥{{ item.price }}x{{ item.quantity }}</p>
            <p>彩/均码</p>
          </div>
        </li>
      </ul>
      <div id="youhui">
        <p><van-icon name="cash-on-deliver" />优惠券</p>
        <p>0张可用</p>
      </div>
    </div>

		<van-submit-bar  button-text="提交订单" @submit="onSubmit" />
  </div>
	
</template>

<script>
import { get,post } from "../../util/request";
import { Toast } from "vant";

export default {
  components: {},
  data() {
    return {
      list: null,
      newlist: null,
      dizhi: null,
			dd:null,
      currentContact: {
        name: "张三",
        tel: "13000000000",
      },
    };
  },
  computed: {},
  watch: {},
  methods: {
	async	onSubmit(){
      if(this.newlist&&this.dd){
				console.log(this.dd)
        let result=await post("/api/v1/orders",{
             receiver:this.dd.receiver,
             regions:this.dd.regions,
             address:this.dd.address,
             orderDetails:this.newlist
				}) 
    console.log(result);

				if(result.data.code=="success"){
					Toast("提交订单成功");
					this.$router.push("/my")
				}else{
					Toast("网络超时");
				}

			}else{
 Toast("请完善信息后提交");
			}
		},
		gg(){
			this.$router.push("/jingxuan")
		},
    async getdizhi() {
      console.log(this.dizhi);

      if (this.dizhi) {
        let result = await get("/api/v1/addresses/" + this.dizhi);
        console.log(result);
        this.currentContact.name = result.data.receiver;
        this.currentContact.tel = result.data.mobile;
				this.dd=result.data;
      } else {
        Toast("请选择收货地址");
      }
    },
    getshangpin() {
      if (this.list) {
        this.newlist = this.list;
      } else {
        Toast("请先挑选商品");
      }
    },
  },
  created() {
    this.dizhi = this.$store.state.dizhi;
    this.list = this.$store.state.shangpin;
    this.getdizhi();
    this.getshangpin();
  },
  mounted() {},
};
</script>
<style scoped>
#zhifu {
  position: fixed;
  bottom: 0;
}
#dizhi {
  height: 50px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  padding-left: 16px;
}
#dizhi p {
  line-height: 50px;
}
#xin {
  margin-top: 20px;
  height: 30px;
  /* background-color: red; */
  /* padding: 0 20px; */
}

#xinxi {
  font-size: 14px;
  color: #cecece;
  line-height: 30px;
  margin-left: 20px;
}
#list {
  height: 80px;
  border-top: 1px solid #cecece;
  display: flex;
  /* padding-top: 10px; */
}
#list img,
#list div {
  margin-top: 10px;
  margin-left: 20px;
}
#list div p {
  line-height: 20px;
}
#youhui {
  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
  display: flex;
  justify-content: space-between;
  height: 30px;
}
#youhui p {
  line-height: 30px;
  margin-left: 20px;
}
.dizhi {
  width: 100%;
}
</style>
