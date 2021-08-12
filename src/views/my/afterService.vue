<template>
	<div class="afterService">
		<van-nav-bar
			title="售后服务"
			right-text="QQ客服"
			left-arrow
			@click-left="onClickLeft"
			class="navbar"
		/>
		<div class="cont">
			<h2>7天无理由退换货</h2>
			<h3>一、顾客提出“七天无理由退换货”服务的申请</h3>
			<p>
				1、提出的商品需在支持“七天无理由退换货”的商品品类范围内，商城依据商品品类划分后的“七天无理由退换货”执行。具体约定以商品服务标签为准。
			</p>
			<p>
				2
				顾客在签收商品之日起七天内（按照物流签收后的第二天零时起计算时间，满168小时为7天）发起申请；
			</p>
			<p>3 顾客的服务申请在形式上符合相关法律法规的规定；</p>
			<p>4 申请完成后工作人员将于三到五个工作日为您完成服务；</p>
			<p>
				5
				申请金额仅以顾客实际支付的商品价款为限；非质量问题退换货商品不能影响二次销售；
			</p>
			<h3>二、“七天无理由退换货”服务的申请流程</h3>
			<p>
				1、在满足上述申请条件的前提下，顾客联系客服发起“七天无理由退换货”服务的申请；
			</p>
			<p>
				2
				在收到顾客“七天无理由退换货”服务申请后，客服指引顾客提供相关证明，确认及判定；
			</p>
			<p>
				3
				当DNF周边商城根据相关规范判定顾客“七天无理由退换货”服务申请成立，则开始进入退换货流程；
			</p>
			<p>4 申请金额仅以顾客实际支付的商品价款为限；</p>
			<h3>三、“七天无理由退换货”服务的退换货</h3>
			<p>目前商城商品都支持“七天无理由退换货”；</p>
			<p>
				特别提示：“经CDK页面领取CDK的商品，因CDK与订单号绑定，将无法进行退货处理，仅作换货处理，请知悉！
			</p>
			<h3>四、关于邮费争议问题</h3>
			<p>
				顾客发起的“七天无理由退换货”服务的邮费承担原则：交易中的运费争议，根据“谁过错，谁承担”的原则处理
			</p>
			<p>
				1 如果商品存在质量问题、描述不符合等商家责任，来回运费都需要由商家承担；
			</p>
			<p>
				2
				如果是商品不喜欢、尺码选择错误及选择错误款式等客户责任，则来回运费由客户来承担；
			</p>
			<p>3 非质量问题退货情况下，申请退货将需扣除商品寄出运费；</p>
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

	methods: {
		onClickLeft() {
			this.$router.go('-1')
		},
	},
	created() {},
	mounted() {},
}
</script>
<style scoped>
.afterService {
	margin-bottom: 60px;
}
h2,
h3,
p {
	padding: 0 10px;
	font-weight: normal;
}
h2 {
	background-color: #ddd;
	line-height: 2.6;
	margin: 10px 0;
}
h3 {
	margin: 10px 0;
}
p {
	font-size: 14px;
	line-height: 20px;
	font-weight: 400;
	color: #333;
}
.navbar {
	margin-bottom: 10px;
}
</style>
