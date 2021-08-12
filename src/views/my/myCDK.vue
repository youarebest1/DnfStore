<template>
	<div class="box">
		<Nodata title="我的CDK"></Nodata>
	</div>
</template>

<script>
import Nodata from '../../components/notdata.vue'
export default {
	components: {
		Nodata,
	},
	data() {
		return {}
	},
	computed: {},
	watch: {},

	methods: {
		onClickLeft() {
			this.$router.push('/my')
		},
	},
	created() {},
	mounted() {},
}
</script>
<style scoped>
.box {
	display: block;
	background-color: #f7f7f7;
	min-height: 568px;
	overflow-y: hidden;
}
</style>
