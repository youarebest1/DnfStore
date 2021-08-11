<template>
    <div class='shouye'>
      <div class="header">
     <router-link to="/shouye"><img src="../../assets/img/shouye/header2.png" width="185px" height="55px"></router-link>
      <div class="header_search">
          <van-icon name="search" />
      </div>
      </div>
      <Connav></Connav>
    </div>
</template>

<script>
import Connav from '../../components/con_nav_black.vue'
export default {
    components: {
Connav    },
    data() {
        
        return {
            list:[
                {
                    img:require('../../assets/img/shouye/header2.png')
                }
            ]
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
  /* header部分 */
  .shouye{
      padding-top: 96px;
  }
  .header{
     width: 100%;
     height: 96px;
     border:1px solid greenyellow;
     position:fixed;
     top: 0; 
     display: flex;
     align-items: center;
     background: url('../../assets/img/shouye/header.jpg')no-repeat;
  }  
   .header img{
       margin-left: 17px;
   } 
</style>