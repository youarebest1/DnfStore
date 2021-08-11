<template>
    <div class=''>
        <!-- 购物车头部 -->
        <div id="header">
            <a></a>
        </div>
        <!-- 购物车没有数据 -->
        <div id="nolist">
            <div>
                <router-link to="shouye"><div id="shouye">1</div></router-link>
                <img src="https://img.dnfcity.qq.com/weixin20/base/cart_no.png" alt="" width="220px" height="320px" >
               
            </div>
        </div>
<Connav></Connav>
    </div>
</template>

<script>
import Connav from '../../components/con_nav_black.vue'
// import {get} from "../../util/request";
export default {
    
    components: {
        Connav
    },
    data() {
        
        return {
            
        };
    },
    computed: {},
    watch: {},
    
    methods: {
    //    async CarList(){
    //        const res = await get('/api/v1/shop_carts')
    //        console.log(res);
    //    }
    },
    created() {
        // this.CarList()
    },
    mounted() {
        
    },
    }
</script>
<style scoped>
    #header{
        width: 100vw;
        height: 100px;
        /* background-color: red; */
        background-image:url( "https://img.dnfcity.qq.com/weixin20/base/cart_bg.png");
         background-size:100vw;
         text-align: center;
         line-height: 100px;
         font-size: 16px;
         position: relative;
    }
    #header a{
        display: block;
        width: 77px;
        height: 27px;
        position: absolute;
       background: url("https://img.dnfcity.qq.com/weixin20/base/cart_title.png") no-repeat; 
       background-size: 100% 100%;
       left: 45vw;
       top:30px;
    }
    #nolist{
        
        width: 100vw;
        /* background: url("https://img.dnfcity.qq.com/weixin20/base/cart_no.png") no-repeat; */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #nolist div{
    position: relative;
    }
 
   
    #shouye{
        width: 152px;
        height: 48px;
        /* border: 1px solid black; */
        position: absolute;
        top: 312px;
        left: 34px;
    }
   
    
   
</style>