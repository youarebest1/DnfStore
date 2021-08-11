<template>
    <div class='zhuce'>
        <div class="img1">
            <img src="../../assets/img/zhuce/u=2105885089,3234072673&fm=26&fmt=auto&gp=0.webp" alt="">
            <div class="zhuce-k">

                <h3>账号密码注册</h3>
                <p>推荐使用<span>手机QQ注册</span>账号，防止盗号</p>
                <van-form @submit="onSubmit">
                    <van-field
                        v-model="username"
                        name="userName"
                        label="用户名"
                        placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                    <van-field
                        v-model="password"
                        type="password"
                        name="password"
                        label="密码"
                        placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]"
                    />
                    <div style="margin: 16px;">
                        <van-button round block type="info" native-type="submit">注册</van-button>
                    </div>
                </van-form>
            </div>

        </div>
    </div>
</template>

<script>
import {regApi} from "../../api/user"
import {Toast} from 'vant'
export default {
    
    components: {},
    data() {
        
        return {
            username: '',
            password: '',
        };
    },
    computed: {},
    watch: {},
    
    methods: {
       async onSubmit(values) {
            console.log('submit', values);
            //收集数据发送请求
            const result =await regApi({...values})
            console.log(result);
            if(result.data.code==='success'){
                Toast('注册成功');
                this.$router.push('/denglu')
            }
        }, 
    },
    created() {
        
    },
    mounted() {
        
    },
    }
</script>
<style scoped>

.img1 {
  top: 0;
  bottom: 0;
  position: fixed;
  overflow-y:scroll; 
  overflow-x:hidden;
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/img/zhuce/QQ图片20210811142640.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.img1 img{
    width: 100%;
    height: 35%;
    margin: 0;
    padding: 0;
} 
.zhuce-k{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 36%;
    background-color: rgb(221, 226, 231);
    margin-top: -5px;
}

    .zhuce h3{
        /* margin-top: 20px; */
        padding-top:20px ;
        text-align: center;
    }
    .zhuce p{
        margin-top: 20px ;
        margin-bottom: 20px;
        text-align: center;

    }
    .zhuce p span{
        color: royalblue;
    }

</style>