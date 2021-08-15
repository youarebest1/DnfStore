<template>
	<div class="adddizhi">
   <van-nav-bar
  title="新增地址"
  right-text="我的地址"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
	@click-right="onClickRight"
    />

   <div class="add" >
  <van-address-edit
  :area-list="areaList"
  show-set-default
  show-search-result
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
/>       
   </div>

</div>


</template>

<script>
import { Toast } from 'vant';
import { post } from "../../util/request";


export default {
	components: {},
	data() {
		return {
			dz:null,
      showArea: false,
      areaList: {
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
}
		}
	},
	computed: {},
	watch: {},

	methods: {
    onClickLeft() {
        this.$router.push('/my')
    },
   onClickRight() {
     this.$router.push('/addressList')
    },

    async onSave(content) {
      console.log(content)
       let result = await post("/api/v1/addresses",{
            receiver:content.name,    //名字
            mobile:content.tel,      //手机哈
            regions:content.province+content.city+content.county,  //地区
            address:content.addressDetail,      //详情地址
            isDefault:content.isDefault,                  //是否为默认地址
       }) 
       if(result.data.code=="success"){
        Toast('保存地址成功');
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
     
	},
	created() {},
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
