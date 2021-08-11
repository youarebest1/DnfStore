<template>
    <div class=''>
        <div id="header">
            <a></a>
        </div>
        
<Connav></Connav>
    </div>
</template>

<script>
import Connav from '../../components/con_nav_black.vue'
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
        
    },
    created() {
        
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
       left: 40vw;
       top:30px;
    }
    
   
    
   
</style>