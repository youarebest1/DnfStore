<template>
    <div class='Box'>
        <!-- 导航栏 -->
        <div id="nav">
            <div class="navtop">
            <router-link to="/shouye"><van-icon name="arrow-left" size="6vw" color="black"/></router-link>
                <ul>
                  <li  ref="ppp" v-for="(item,index) in menus" :key="item._id" ><a  @click="shangpin(index)">{{item.title}}</a></li>
                 </ul>
            <router-link to="/carts"><van-icon name="shopping-cart-o"  size="6vw" :badge="CarSum" color="black"/></router-link>
            </div>

        </div>
        <!-- 商品详情 -->
        <div id="xiangqing">
            <img :src="Obj.coverImg" id="img0" v-if='Obj.coverImg'>
            <h3 id="name">{{Obj.name}}</h3>
            <p id="miaoshu">战力激“增”  “福”气满满 [购买可获得普雷增幅宠物，领取道具后将不支持退换]预售商品，7月16日后的订单预计10月初开始陆续发货，请勇士们耐心等候。</p>
            <h3 id="price">￥{{Obj.price}}</h3>
            <p id="xiaoliang">60天销量1000+</p>
        </div>
        <!-- 商品颜色尺寸 -->
        <div id="color">
            <div id="yanse">
                <p>颜色</p>
                <img :src="Obj.coverImg" v-if='Obj.coverImg' width="50px">
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
                    <van-cell is-link @click="showPopup">
                        <p>
                            <van-icon name="gem" color="red" size="14" /><span size="14">赠送游戏道具</span>
                            <van-icon name="hot-sale" color="red" size="14"/><span size="14">100%官方正品</span>
                        </p>
                    </van-cell>
                    <van-popup v-model="show"   closeable
   position="bottom" :style="{ height: '30%' }">
  <p id="biaoti">让勇士们换了无忧购</p>
 <div class="tianchu"><van-icon name="gem" color="red" size="14" />赠送游戏道具</div>
 <div class="tianchu"><van-icon name="hot-sale" color="red" size="14"/>100%官方正品</div>
 <div class="tianchu"><van-icon name="gem" color="red" size="14" />赠送游戏道具</div>
 <div class="tianchu"><van-icon name="hot-sale" color="red" size="14"/>100%官方正品</div>
  </van-popup>
 
        </div>
        <br><br><br><br><br><br>

        <img :src="Obj.coverImg" width="100%" id="img2">
        <img :src="Obj.coverImg" width="100%" >
        <img :src="Obj.coverImg" width="100%" >
        <img :src="Obj.coverImg" width="100%">
        <img :src="Obj.coverImg" width="100%" id="img1">


        <!-- 加入购物车 -->
        <div>
           <van-goods-action>
 <van-goods-action-icon icon="chat-o" text="首页" to="/shouye"/>
  <van-goods-action-icon icon="like-o" text="收藏" />
  <van-goods-action-button color="red" type="warning" text="立即购买" to="/carts" />
  <van-goods-action-button color="rgb(255,138,59)" type="danger" text="加入购物车" @click="addCar"/>
</van-goods-action>
        </div>
    </div>
</template>

<script>
import {get,post} from '../../util/request'
// import { Toast } from 'vant';
// import { Toast } from 'vant';
export default {
    
    components: {},
    data() {
        
        return {
            Obj:'',
            value: 1,
            CarSum:0,
            show: false,
            //高亮
            menus:[
                {id:1,title:'商品'},
                {id:2,title:'评价'},
                {id:3,title:'详情'}
            ]
        };
    },
    computed: {
       
    },
    watch: {},
    
    methods: {
        //refs高亮
        // choose(index){
        //     console.log(this.$refs.ppp[index].innerHTML)
        // },
        //获取商品ID
        async init(id){
         const res = await get('/api/v1/products/'+id)
         console.log(res);
         this.Obj=res.data
        this.$refs.ppp[0].className = "active"
      },
      //添加购物车
      async addCar(){
          const res=await post('/api/v1/shop_carts',{
            product:this.id,
            quantity:this.value,
        })
         console.log(res)   
         this.Carshuliang()    
      },
      //调用购物车
     async Carshuliang(){
          const res=await get('/api/v1/shop_carts')
         this.CarSum=0
          for(var i = 0;i<res.data.length;i++){
              this.CarSum+=res.data[i].quantity
          }
      },
      //锚点跳转
      shangpin(index){
            document.querySelector('#img'+[index]).scrollIntoView(true); 
            
              (this.$refs.ppp).forEach(item => {
                        item.className = " "
                    });
            this.$refs.ppp[index].className = "active"
            console.log(index);
      },
      showPopup() {
      this.show = true;
    },
     
    },
    created() {
         this.id = this.$route.params.id
        this.init(this.id)
        this.Carshuliang()

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
     }
     .active{
        display: block;
        color: red;
        border-bottom: 3px solid blue;
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
         margin-right: 20px;
         margin-top: 8px;

     }  
     #color{
         margin-top: 30px;
     }
     #chicun button{
        background-color: rgb(239, 82, 75);
        float: right;
        width: 50px;
        height: 30px;
         margin-right: 20px;
         margin-top: 22px;
         border: none;
     }
     #shuliang div{
        float: right;
          margin-top: 10px;
         margin-right: 10px;
         background-color: #fff;
     }
     /* #btn{
         float: right;
         margin-top: 20px;
         margin-right: 20px;
     } */
     .van-tabs--line{
         margin-top:-10px;
         width:65%;
     }
      .content {
    padding: 16px 16px 160px;
  } 
  #biaoti{
      height: 40px;
      /* border: 1px solid black; */
      line-height: 40px;
      text-align: center;
      font-size: 18px;
      background-color: rgb(247, 247, 248);
  }
  .tianchu{
      height: 20%;
      /* border: 1px solid black; */
      line-height:42px;
  }
</style>