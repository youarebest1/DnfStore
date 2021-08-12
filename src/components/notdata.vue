<template>
	<div class="wu">
		<van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
		<div class="cont">
			<van-icon name="warning-o" />
			<h3>勇士，暂无数据</h3>
		</div>
		<van-button type="default" class="bottom-button" to="shouye"
			>周边首页</van-button
		>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			require: true,
		},
	},
	components: {},
	data() {
		return {}
	},
	computed: {},
	watch: {},

	methods: {},
	created() {},
	mounted() {},
}
</script>
<style scoped>
.wu {
	width: 100%;
	height: 100%;
	background-color: #f7f7f7;
	display: block;
}
.cont {
	margin-top: 50px;
	color: #aaa;
	text-align: center;
}
.van-icon-warning-o {
	font-size: 30px;
}
.cont h3 {
	font-weight: normal;
	line-height: 40px;
}
.bottom-button {
	width: 160px;
	height: 40px;
	border-radius: 5px;
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
}
</style>
