<template>
  <div class="">
    <van-nav-bar
      title="个人资料修改"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-uploader :after-read="afterRead" v-model="fileList"/>


    <van-cell-group>
      <van-field
        v-model="value"
        label="请输入昵称"
        placeholder="请输入你想要的昵称"
      />
    </van-cell-group>

    <van-button round type="info" @click="tj">保存个人信息</van-button>
  </div>
</template>

<script>
import { post } from "../../util/request";

export default {
  components: {},
  data() {
    return {
      value: "",
      file: "",
			fileList:[]
    };
  },
  computed: {},
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.push("/my");
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      this.file = file;
      console.log(file);
    },
   async tj() {
     console.log(this.file)
				let result=await post("/api/v1/users/change_info",{
            nickName:this.value,
            avatar:this.file.content,    
				})
				console.log(result)
				if(result.data.code=="success"){
       this.$router.push("/my");
				}else{
            alert("保存失败")
				}
			
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.van-uploader {
  left: 50%;
  right: 50%;
  transform: translate(-50%, 0); /* 50%为自身尺寸的一半 */
}
.van-button {
  left: 50%;
  right: 50%;
  transform: translate(-50%, 0); /* 50%为自身尺寸的一半 */
}
</style>
