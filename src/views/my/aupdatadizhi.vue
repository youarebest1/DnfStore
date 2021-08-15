<template>
	<div class="adddizhi">
   <van-nav-bar
  title="修改我的地址"
  right-text="我的地址"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
	@click-right="onClickRight"
    />

   <div class="add" >
  <van-address-edit
  :area-list="areaList"
  :address-info="{
      name:info.name,
      tel:info.tel,
       addressDetail:info.addressDetail,
       isDefault:info.isDefault,
       areaCode:info.areaCode
  }"

  show-delete
  show-set-default
  show-search-result
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
/>   
   </div>

</div>


</template>

<script>
import { Toast } from 'vant';
import { get,del,pput } from "../../util/request";


export default {
	components: {},
	data() {
		return {
           info: {
           name:"",
           tel:"",
           addressDetail:"",
           isDefault:'',
           province:'',
           areaCode:'110202',	//北京市
      }, //


    areaList:{
     province_list: {
    110000: '河南省',
  },
  city_list: {
    110100: '郑州市',
    110200: '洛阳市',
  },
  county_list: {
    110101: '管族区',
    110102: '二七区',
    110201: '高新区',
    110202: '西工区',
    // ....
  },
 },
           id:'',
          res:'',
		}
	},
	computed: {},
	watch: {},

methods: {
    async getdizhi(){
        let result = await get("/api/v1/addresses/"+this.id)
    /*     console.log(result); */
        this.info.name=result.data.receiver
         this.info.tel=result.data.mobile 
         this.info.addressDetail=result.data.address 
         this.info.isDefault=result.data.isDefault
/*    address: "12"
createdAt: "2021-08-14T09:28:37.396Z"
isDefault: true
mobile: "15038548866"
receiver: "吴先生"
regions: "河南省郑州市管族区"
updatedAt: "2021-08-14T09:28:37.396Z"
user: "61151132d18f7437b01fdc25"
__v: 0
_id: "61178cc5a20f390f088438c0" */

    },
    onClickLeft() {
        this.$router.push('/addressList')
    },
   onClickRight() {
     this.$router.push('/addressList')
    },
     async onSave(content) {
      console.log(content)
       let result = await pput("/api/v1/addresses/"+this.id,{
            receiver:content.name,    //名字
            mobile:content.tel,      //手机哈
            regions:content.province+content.city+content.county,  //地区
            address:content.addressDetail,      //详情地址
            isDefault:content.isDefault,                  //是否为默认地址
       }) 
       if(result.status=="200"){
        Toast('修改地址成功');
        this.$router.push("/addressList")
       }else{
          Toast('请检查信息是否有误');
       }
     console.log(result)
/* addressDetail: "高新区"
areaCode: "110101"
city: "郑州市"
country: ""
county: "管族区"
isDefault: true
name: "小吴"
postalCode: "471000"
province: "河南省"
tel: "15038547154" */
    },
   async onDelete() {
       let result=await del("/api/v1/addresses/"+this.id)
       console.log(result)
       if(result.status=="200"){
           Toast('删除成功'); 
       }
    },
   
  },
	created() {
     this.id=this.$route.params.id
     this.getdizhi()
    },
	mounted() {},
}
</script>
<style scoped>
.adddizhi{
width: 100%;
min-height:658px;
background-color: #f7f7f7;

}
.add{
	width: 100%;
	min-height: 203px;
	margin-top: 10px;
	background-color: white;
}

</style>
