<template>
	<div class="my">
		<div class="tit">
			<van-image
				round
				width="4rem"
				height="4rem"
				:src="imgurl"
			/>
			<p>玩家昵称({{ nname }})</p>
		</div>
		<div class="cont">
			<div class="order">
				<van-cell title="全部订单" icon="orders-o" is-link to="dingdan" />
				<van-grid>
					<van-grid-item icon="credit-pay" text="待付款" />
					<van-grid-item icon="logistics" text="待发货" />
					<van-grid-item icon="underway-o" text="待收货" />
					<van-grid-item icon="chat-o" text="待点评" />
				</van-grid>
			</div>

			<div class="cheap">
				<van-cell title="优惠券" icon="send-gift-o" is-link to="myCoupon" />
				<van-cell
					title="收藏商品"
					icon="like-o"
					is-link
					to="myCollectedWares"
				/>
				<van-cell title="游戏道具" icon="gem-o" is-link to="myGift" />
				<van-cell title="特殊礼包" icon="gem-o" is-link to="mySpecialGift" />
				<van-cell title="我的CDK" icon="gem-o" is-link to="myCDK" />
				<van-cell title="抽奖信息" icon="gift-o" is-link to="myPrizeRecord" />
			</div>
			<div class="mine">
				<van-cell title="收货地址" icon="location-o" is-link to="addressList" />
				<van-cell title="个人资料" icon="user-o" is-link to="userInfo" />
				<van-cell title="售后服务" icon="phone-o" is-link to="afterService" />
				<van-cell is-link value="详情" class="dibu" @click="show = true">
					<template #title>
						<van-icon name="gem-o" class="redicon"></van-icon>
						<span class="custom-title">赠送游戏道具&nbsp;&nbsp;</span>
						<span class="custom-title">100%官方正品</span>
					</template>
				</van-cell>
				<van-action-sheet v-model="show" class="wyg" title="让勇士们欢乐无忧购">
					<van-cell
						icon="gem-o"
						title="赠送超值游戏礼包"
						value="方便您畅爽体验游戏"
					/>
					<van-cell
						icon="fire-o"
						title="100%官方正品"
						value="DNF游戏官方正品"
					/>
					<van-cell
						icon="medal-o"
						title="专属周边设计"
						value="精选游戏素材 · 独特设计"
					/>
					<van-cell
						icon="service-o"
						title="7天无理由退换货"
						value="预售商品及特殊商品除外"
					/>
				</van-action-sheet>
			</div>
		</div>
	</div>
</template>

<script>
import { get } from "../../util/request";


export default {
	components: {},
	data() {
		return {
			name: '',
			imgurl:'',
			nname:'',

			show: false,

		}
	},
	computed: {},
	watch: {},

	methods: {
	async	getuser(){
          let result=await get("/api/v1/users/info");
					console.log(result)
					this.imgurl=result.data.avatar;
					this.nname=result.data.nickName;
		}
	},
	created() {
		this.getuser();
	},
	mounted() {},
}
</script>
<style scoped>
.my {
	background-color: #eee;
}
.tit {
	width: 100%;
	height: 120px;
	background: url('https://dnfcity.qq.com/mobile/imgjs/img/user/top_bg.png')
		100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	color: white;
}
.order,
.cheap {
	margin-bottom: 10px;
}

.mine {
	margin-bottom: 50px;
}

.redicon {
	color: red;
	margin-right: 6px;
}
.dibu {
	font-size: 12px;
	white-space: nowrap;
}

.wyg .van-icon {
	color: red;
}
</style>
