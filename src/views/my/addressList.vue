<template>
	<div class="addressLsit">
		<van-nav-bar
  title="收货地址"
  right-text="新增地址"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
	@click-right="onClickRight"
    />

   <div class="notdd" v-if="!list">
   <van-button type="default" to="/adddizhi" >新增地址</van-button>
    <p>勇士您还没有添加地址</p>
   <p><van-icon name="location-o" size="34" /></p>
  </div>


  <van-address-list
  v-model="chosenAddressId"
  :list="list"
  default-tag-text="默认"
	add-button-text="添加收货地址"
  @add="onAdd"
  @edit="onEdit"
  @click-item="onClickitem"
/>


	</div>


</template>

<script>
import { Toast } from 'vant';
import { get } from "../../util/request";

export default {
	components: {},
	data() {
		return {
     chosenAddressId: '0',
      list:null,
    }
 },
	computed: {},
	watch: {},

	methods: {
    onClickitem(item, index){
       this.$router.push({
          path: `/userOrder/${this.list[index].id}`,  
        })
    },
    onClickLeft() {
        this.$router.push('/my')
    },
   onClickRight() {
        this.$router.push('/adddizhi')

    },
		onAdd() {
      Toast('新增地址');
    this.$router.push('/adddizhi')

    },
    onEdit(item, index) {
     this.$router.push({
          path: `/updatadizhi/${this.list[index].id}`,  
        })
    },
  async getdz(){
let result=await get("/api/v1/addresses");
if(result.data.addresses.length>0){
	this.list=[];
   result.data.addresses.forEach(item => {
        this.list.push({
          id:item._id,
          name:item.receiver,
          tel:item.mobile,
          address:item.regions+item.address,
					isDefault:item.isDefault,
})

 });
}
 console.log(result);
 
}
	},
	created() {
   this.getdz()
	},
	mounted() {},
}
</script>
<style scoped>
.addressLsit{
width: 100%;
min-height:658px;
background-color: #f7f7f7;

}
.notdd{
	width: 100%;
	height: 203px;
	margin-top: 10px;
	background-color: white;
	display: flex;
	flex-direction: column-reverse;
	justify-content: center;
  align-items: center;
  color: #999;
}

</style>
