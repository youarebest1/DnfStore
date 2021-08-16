<template>
	<div class="userOrder">
		<van-button type="primary" block id="zhifu" @click="adddingdan">提交订单</van-button>
		<!-- 没有收货地址 -->
		
		<div id="dizhi">
			<p><van-icon name="location" />我的收货地址</p>
			<router-link to="/addressList"><p id="newdizhi">选择地址<van-icon name="arrow" /></p></router-link>
		</div>
		<!-- 商品信息 -->
		<div id="xin">
			<p id="xinxi">商品信息</p>
			<ul>
				<li id="list" v-for="item in list" :key="item._id">
					<img :src="item.img" width="60px" height="60px">
					<div>
						<p>{{item.name}}</p>
						<p>现价：￥{{item.price}}x{{item.quantity}}</p>
						<p>彩/均码</p>
					</div>
				</li>
				
			</ul>
			<div id="youhui">
				<p><van-icon name="cash-on-deliver" />优惠券</p>
				<p>0张可用</p>
			</div>
		</div>
	</div>
	
</template>

<script>
import {post} from "../../util/request";
	export default {
		components: {},
		data() {
			return {
				list:[],
				Newlist:[],
				
			}
		},
		computed: {
			



		},
		watch: {},

		methods: {
			async adddingdan(){
				this.list.forEach((item)=>{
					this.Newlist.push({
						quantity:item.quantity, 
                     product:item.product,  
                     price:item.price,
					})
				})
				
				// this.list=JSON.parse(localStorage.getItem('list'))
				const res = await post('/api/v1/orders',{
                receiver:"收货人",
                regions :"收货的省市区县",     
                address :"收货地址" ,
                orderDetails:this.Newlist,
            })
            console.log(res);
			}
		},
		created() {
			this.adddingdan()
			this.list=JSON.parse(localStorage.getItem('list'))
			console.log(this.list);
			console.log(this.Newlist);
		},
		mounted() {},
	}
</script>
<style scoped>
#zhifu{
	position: fixed;
	bottom: 0;
}
#dizhi{
	height: 50px;
	/* background-color: red; */
	display: flex;
	justify-content: space-between;
	padding-left: 16px;
}
#dizhi p{
line-height: 50px;
}
#xin{
	margin-top: 20px;
	height: 30px;
	/* background-color: red; */
	/* padding: 0 20px; */
}
#xinxi{
font-size: 14px;
color: #cecece;
line-height: 30px;
margin-left: 20px;
}
#list{
	height: 80px;
	border-top: 1px solid #cecece;
	display: flex;
	/* padding-top: 10px; */
	
}
#list img,
#list div{
	margin-top: 10px;
	margin-left: 20px;
}
#list div p{
	line-height: 20px;
}
#youhui{
	border-top:1px solid #cecece ;
	border-bottom:1px solid #cecece ;
	display: flex;
	justify-content: space-between;
	height: 30px;
	
}
#youhui p{
	line-height: 30px;
	margin-left: 20px;
}
</style>
