<template>
	<div class="userOrder">
		<van-button type="primary" block id="zhifu"><van-icon name="wechat" />微信支付</van-button>
		<!-- 没有收货地址 -->
		<div id="dizhi">
			<p><van-icon name="location" />我的收货地址</p>
			<p id="newdizhi">新增地址<van-icon name="arrow" /></p>
		</div>
		<!-- 商品信息 -->
		<div id="xin">
			<p>商品信息</p>
		</div>
	</div>
	
</template>

<script>
	export default {
		components: {},
		data() {
			return {}
		},
		computed: {},
		watch: {},

		methods: {},
		created() {
			console.log(this.$route.query.name);
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
	background-color: red;
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
	background-color: red;
	
}
#xin p{
font-size: 14px;
color: #cecece;
line-height: 30px;
margin-left: 20px;
}
</style>
