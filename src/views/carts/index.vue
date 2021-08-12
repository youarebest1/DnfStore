<template>
    <div class=''>
        <!-- 购物车头部 -->
        <div id="header">
            <a></a>
            <div id="caozuo">
                <van-icon name="edit" size="18px" />
                <span>编辑</span>
            </div>
        </div>
        <!-- 购物车没有数据 -->
        <!-- <div id="nolist" >
            <div>
                <router-link to="shouye"><div id="shouye"></div></router-link>
                <img src="https://img.dnfcity.qq.com/weixin20/base/cart_no.png" alt="" width="220px" height="320px" >
            </div>
        </div> -->
        <div id="list">
                <ul >
                    <li v-for="(item,index) in list" :key="item._id+index">
                       <div id="photo">
                            <van-checkbox v-model="item.checked" checked-color="red" icon-size="18px" id="check"/>
                            <img :src="item.product.coverImg" >
                       </div>
                        <div id="name">
                            <p>{{item.product.name}}</p>
                            <span class="text1">单价：</span>
                            <span class="text2">￥{{item.product.price}}</span><br>
                            <span class="text1">已选：</span>
                            <span class="text2">彩-均码</span>
                        </div>
                        <div id="query">
                            <van-stepper  id="add" @plus="jia(index)" @minus="jian(index)" :default-value="item.quantity" />
                        </div>
                    </li>
                </ul>
        </div>
        <!-- 提交订单 -->
        <div id="tijiao">
<van-submit-bar :price="sunprice*100" button-text="提交订单" @submit="onSubmit" id="jiesuan" >
  <van-checkbox v-model="checked" >全选</van-checkbox>
    <div id="box">
          <span class="heji">数量</span>
          </div>
</van-submit-bar>
        </div>    
<Connav></Connav>



    </div>
</template>

<script>
import Connav from '../../components/con_nav_black.vue'
import {get,post} from "../../util/request";
export default {
    
    components: {
        Connav
    },
    data() {
        
        return {
            list:[],
           
            
        };
    },
    computed: {
        checked: {
      // 如果购物车全选按钮是true，那么就全选，如果是false那么上面的补选中
      set(flag) {
        // return this.list.forEach((item) => (item.checked = flag));
        console.log(flag);
        // 动态添加属性
        this.list.map((item) => this.$set(item, "checked", flag));
      },
      get() {
        // 如果购物车的总长度等于选中的总长度那么返回true
        return (
          this.list.length ==
          this.list.filter((item) => item.checked == true).length
        );
      },
    },
    // 计算价格
    sunprice(){

        return this.list
        .filter((item)=>{
            return item.checked;
        })
        .reduce(function(pre, cur) {
          return pre + cur.product.price * cur.quantity; //商品价格*购物车此商品的数量
        }, 0);
    }
    
    },
    watch: {
        checkModel(){
            if(this.checkModel.length==this.list.length){
                this.check = true
            }else{
                this.check = false
            }
        }
    },
    
    methods: {
        //调用用户购物车数据
       async CarList(){
          const res=await get('/api/v1/shop_carts')
          this.list=res.data
          console.log(res);
          console.log(this.list);
          this.value=this.list.quantity
        },
        //添加数量
       async jia(index){
            const res=await post('/api/v1/shop_carts',{
            product:this.list[index].product._id,
            quantity:1
        })
        console.log(res);
        this.CarList()
        },
        //删除数量
         async jian(index){
            const res=await post('/api/v1/shop_carts',{
            product:this.list[index].product._id,
            quantity:-1,
        })
        console.log(res);
        this.CarList()
        },
        //全选
        All(){
            if(this.check){
                this.checkModel=[]
                console.log(123);
            }else{
                this.list.forEach((item)=>{
                    console.log(item.product._id);
                    if(this.checkModel.indexOf(item.product._id)==-1){
                        this.checkModel.push(item._id)
                    }
                })
            }
        },
        //提交订单
       onSubmit(){

       }

    },
    created() {
        this.CarList()
        
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
   
    
    #list ul li{
        /* border: 1px solid black; */
        margin-top: 10px;
        display: flex;
        height: 80px;
        font-size: 0.16rem;
        /* position: relative; */
    }
    #photo{
        width: 18%;
        margin-left: 2%;
    }
    #name{
        width: 45%;
        margin-left: 5%;
        margin-top:20px ;
    }
    #query{
        width: 30%;
    }
    #photo img{
        position: relative;
        width: 48px;
        left: 20px;
    }
    #check{
        position: relative;
        top: 32px;
    }
    
    #add{
        margin-top:30px ;
    }
    .text1{
        color: #cecece;
    }
    .text2{
        color: red;
    }
   #jiesuan{
       margin-bottom: 60px;
   }
   /* .van-submit-bar__text{
       margin-bottom: 10px;
       font-size: 0.16rem;

   } */
   #box{
       position: absolute;
       width: 20%;
       /* left: rem; */
       right: 35%;
       top: 30px;
   }
   .heji{
       position: relative;
       /* top: 10px; */
        /* left:28% ; */
       font-size: 0.16rem;
   }
   #caozuo{
       float: right;
       margin-top: 30px;
       /* display: flex; */
       /* height: 10px; */
   }
   
   #caozuo span{
       float: right;
       /* line-height: 20px; */
       font-size: 16px;
   }
</style>