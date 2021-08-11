<template>
	<div class="jingxuan">
		<img
			src="https://dnfcity-cloud-1258130254.cos.ap-guangzhou.myqcloud.com/weixin20/base/jingxuan_bg.png"
			class="bg"
		/>
		<div class="tit">
			<img src="https://img.dnfcity.qq.com/weixin20/base/jingxuan.png" alt="" />
			<Connav></Connav>
		</div>
		<div class="product-box">
			<!-- 列表上拉更多 -->
			<van-list
				v-model="loading"
				:finished="finished"
				finished-text="没有更多了"
				@load="onLoad"
				:offset="50"
			>
				<!-- 点击跳转详情 -->
				<div
					class="product"
					v-for="item in products"
					:key="item._id"
					@click="godetail(item._id)"
				>
					<img :src="item.coverImg" class="pimg" />
					<div class="product-r">
						<div class="pname">{{ item.name }}</div>
						<div class="pdesc">
							60天销量：199 &nbsp;&nbsp;评论：203
						</div>
						<div class="pprice">￥{{ item.price }}</div>
					</div>
				</div>
			</van-list>
		</div>
	</div>
</template>

<script>
import Connav from '../../components/con_nav_black.vue'
import { reqProducts } from '../../api/products'

export default {
	components: {
		Connav,
	},
	data() {
		return {
			banners: [],
			products: [], //定义商品列表数组
			loading: false,
			finished: false,
			page: 1,
		}
	},
	computed: {},
	watch: {},

	methods: {
		// 列表加载下一页
		async getproducts() {
			this.loading = true // 刚开始进行数据加载
			const result = await reqProducts({ page: this.page })
			this.loading = false //接口掉成功，把加载关掉
			console.log(result)
			this.products = [...this.products, ...result.data.products] //把上一次的数据和请求过来的数据合并起来
			// 判断如果返回的数据小于10，说明数据已经加载完了，需要把finished关掉---->设置成true
			if (result.data.products.length < 10) {
				this.finished = true //没有更多数据了,加载完毕关闭开关
			} else {
				// 说明还有数据
				this.page++ //如果还有数据，那么就需要把page+1
			}
		},
		// 当滚动条滚动到下面的时候会执行onLoad
		onLoad() {
			this.getproducts()
		},
		// 点击跳转到详情
		godetail(id) {
			this.$router.push('/detail/' + id)
		},
	},
	created() {},
	mounted() {},
}
</script>
<style scoped>
.bg {
	width: 100%;
	position: fixed;
	z-index: -1;
}
.tit {
	/* position: fixed; */
	/* z-index: 2; */
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.tit img {
	width: 120px;
}
/* .product-box::before {
	display: block;
	content: '11';
	clear: both;
	height: 80px;
	overflow: hidden;
	visibility: hidden;
} */
.product-box {
	margin-bottom: 50px;
	overflow: hidden;
	padding-left: 10px;
}
.product {
	width: 46%;
	margin: 10px 10px 1px 1px;
	overflow: hidden;
	display: inline-block;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0px 0px 4px #7d7b7b;
}
.product .pimg {
	width: 100%;
	margin: 10px auto 0;
}
.product .pname {
	white-space: nowrap;
	text-overflow: ellipsis;
	line-height: 1.6;
	text-align: center;
}
.product .pdesc {
	margin: 1em auto;
	text-align: center;
	font-size: 11px;
	padding-left: 4px;
	color: #666;
}
.product .pprice {
	text-align: center;
	color: #fd3c1c;
	font-size: 16px;
	font-weight: bold;
	line-height: 1.6;
}
.van-list__finished-text {
	clear: both;
}
</style>
