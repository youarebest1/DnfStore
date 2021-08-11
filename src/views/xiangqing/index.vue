<template>
    <div class='Box'>
        <!-- 导航栏 -->
        <div id="nav">
            <div class="navtop">
            <router-link to="/shouye"><van-icon name="arrow-left" size="6vw" color="black"/></router-link>
              <ul>
                  <li ><a @click="shangpin('#img1')">商品</a></li>
                  <li ><a @click="pingjia('#img2')">评价</a></li>
                  <li ><a @click="xiangqing('#img3')">详情</a></li>
                  <!-- <router-link to="">123</router-link> -->
              </ul>
              
            <router-link to="/carts"><van-icon name="shopping-cart-o"  size="6vw" badge="9" color="black"/></router-link>
            </div>
            <!-- 11111
            <ul>
                <li v-for="(item,index) in menus" ref="ppp" :key="item._id" @click="choose(index)">{{item.id}}</li>
            </ul>
            1111 -->
        </div>
        <!-- 商品详情 -->
        <div id="xiangqing">
            <img :src="Obj.coverImg" alt="" v-if='Obj.coverImg'>
            <h3 id="name">{{Obj.name}}</h3>
            <p id="miaoshu">战力激“增”  “福”气满满 [购买可获得普雷增幅宠物，领取道具后将不支持退换]预售商品，7月16日后的订单预计10月初开始陆续发货，请勇士们耐心等候。</p>
            <h3 id="price">￥{{Obj.price}}</h3>
            <p id="xiaoliang">60天销量1000+</p>
        </div>
        <!-- 商品颜色尺寸 -->
        <div id="color">
            <div id="yanse">
                <p>颜色</p>
                <img :src="Obj.coverImg" alt="" width="50px">
            </div>
            <div id="chicun">
                <p>尺寸</p>
                <button>均码</button>
            </div>
            <div id="shuliang">
                <p>数量</p>
                <div>
                    
                    <van-stepper v-model="value" id="btn"/>
                </div>
            </div>
        </div>
        <br><br><br><br><br><br>
        <!-- 加入购物车 -->
        <div>
            
           <van-goods-action>
 <van-goods-action-icon icon="chat-o" text="首页" to="/shouye"/>
  <van-goods-action-icon icon="like-o" text="收藏" />
  <van-goods-action-button color="red" type="warning" text="立即购买" to="/carts" />
  <van-goods-action-button color="rgb(255,138,59)" type="danger" text="加入购物车" />
</van-goods-action>
        </div>
    </div>
</template>

<script>
import {get} from '../../util/request'
// import { Toast } from 'vant';
export default {
    
    components: {},
    data() {
        
        return {
            Obj:'',
            //高亮
            // menus:[
            //     {id:1,title:'111'},
            //     {id:2,title:'222'},
            //     {id:3,title:'333'}
            // ]
        };
    },
    computed: {},
    watch: {},
    
    methods: {
        //refs高亮
        // choose(index){
        //     console.log(this.$refs.ppp[index].innerHTML)
        // },
        async init(){
         const res = await get('/api/v1/products/'+"611339461e8cff3e900532c0")
         console.log(res);
         this.Obj=res.data
        
      },
      //锚点跳转
      shangpin(){
            document.querySelector('#img1').scrollIntoView(true);  
      },
    //   xiangqing(){
    //         document.querySelector('#img2').scrollIntoView(true);
    //   },
    //   pingjia(){
    //         document.querySelector('#img3').scrollIntoView(true);
    //   }
     
    },
    created() {
        // this.id = this.$route.params.id
        this.init()
    },
    mounted() {
        
    },
    }
</script>
<style scoped>
.Box{
    background-color: rgb(247, 247, 247);
}
    #nav{
        position: fixed;
        top: 0;
        width: 100%;
        height: 46px;
        /* border: 1px solid black; */
        background: #fff;
    }
    .navtop{
        display: flex;
        padding: 10px;
        
        justify-content:space-between;
    }
    .navtop ul{
        display: flex;
        width:65%;
        justify-content:space-between;
    }
     .navtop ul li{
        width: 20%;
        text-align: center;
        line-height:26px ;
        border-bottom: 1px solid black;
     }
     .active{
  display: block;
  background-color: red;
  color: #fff;
}
     #xiangqing{
         width: 100%;
         min-height: 200px;
         background-color: #fff;
     }
     #xiangqing img{
         width: 100%;
     }
     #miaoshu{
         margin-top: 10px;
         font-size: 14px;
         color: #cecece;
     }
     #name{
         font-size: 20px;
     }
     #price{
         margin-top: 10px;
         font-size: 28px;
         color: red;
         width: 50%;
        
     }
     #xiaoliang{
         margin-top: 20px;
         font-size: 14px;
         color: #cecece;
        position: relative;
        left:70%;
        top: -40px;
        width: 100px;
     }
     #yanse,
     #shuliang,
     #chicun{
         width: 100%;
         height: 70px;
         border-bottom: 1px solid #cecece;
         background-color: #fff;
     }   
     #yanse p,
    #chicun p,
    #shuliang p
     {
         float: left;
         line-height: 70px;
         font-size: 16px;
         margin-left:20px ;
     }
     #yanse img{
         border-radius: 2px;
         border: 2px solid red;
         float: right;
         position: relative;
         right: 20px;
         margin-top: 8px;
     }  
     #color{
         margin-top: 30px;
     }
     #chicun button{
    background-color: rgb(239, 82, 75);
    float: right;
         position: relative;
         right: 20px;
         margin-top: 22px;
         border: none;
     }
     #btn{
         float: right;
         margin-top: 20px;
         margin-right: 20px;
     }
</style>