<template>
    <div class='denglu'>
        <div class="img1">
            <img src="../../assets/img/zhuce/u=2105885089,3234072673&fm=26&fmt=auto&gp=0.webp" alt="">
            <div class="denglu-k">

                <h3>账号密码登录</h3>
                <p>推荐使用<span>手机QQ登录</span>，防止盗号</p>
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
                        <van-button round block type="info" native-type="submit">登录</van-button>
                    </div>
                </van-form>
                <p class="p1">忘记密码？|<span @click="gotoZhuce">注册新账号</span>|意见反馈</p>
            </div>
            

        </div>
    </div>
</template>

<script>
import {loginApi} from '../../api/user'
import {setToken} from '../../util/auth'
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
        const result =await loginApi({...values});
        console.log(result);
        if(result.data.code==="success"){
            setToken(result.data.token);
            Toast.success('登录成功');
            this.$router.push('/');
        }
    }, 
        gotoZhuce(){
            this.$router.push('/zhuce')
        }
    },
    created() {
        
    },
    mounted() {
        
    },
    }
</script>
<style scoped>
a{
    text-decoration: none;
}
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
.denglu-k{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 39%;
    background-color: rgb(221, 226, 231);
    margin-top: -5px;
}


    .denglu h3{
        /* margin-top: 20px; */
        padding-top:20px ;
        text-align: center;
    }
    .denglu p{
        margin-top: 20px ;
        text-align: center;
        margin-bottom: 20px;


    }
    .denglu p span{
        color: royalblue;
    }

    .denglu .p1{
        font-size: 15px;
        color: rgb(133, 131, 131);
    }
</style>