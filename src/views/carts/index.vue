<template>
    <div class=''>
        <!-- 购物车头部 -->
        <div id="header">
            <a></a>
            <div id="caozuo"  >
                <div v-if="!show" @click="bianji"><van-icon name="edit" size="18px" />编辑</div>
              <div v-if="show" ><van-icon name="like-o" size="18px"/>收藏</div>
                
                 <div v-if="show" @click="dellist"><van-icon name="delete-o" size="18px"/>删除</div>
              <div v-if="show" @click="bianji"><van-icon name="success" size="18px"/>完成</div>
            </div>
        </div>
        <!-- 购物车没有数据 -->
        <div id="nolist" v-if="nolist">
            <div>
                <router-link to="shouye"><div id="shouye"></div></router-link>
                <img src="https://img.dnfcity.qq.com/weixin20/base/cart_no.png" alt="" width="220px" height="320px" >
            </div>
        </div>
        <div id="list">
                <ul >
                    <li v-for="(item,index) in list" :key="item._id+index">
                       <div id="photo">
                            <van-checkbox v-model="item.checked" checked-color="red" icon-size="18px" id="check" @click="checkid(item)"/>
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
import {get,post,delmanycart} from "../../util/request";
import { Toast } from 'vant';
export default {
    
    components: {
        Connav
    },
    data() {
        
        return {
            list:[],
            show:false,
            ids:[],
            nolist:false,
            tijiao:[]
        };
    },
    computed: {
        checked: {
      // 如果购物车全选按钮是true，那么就全选，如果是false那么上面的补选中
      set(flag) {
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
    },
    //获取选中的购物车列表
    selectgoods() {
      var selectlist = [];
      this.list.forEach((item) => {
        if (item.checked) {
          selectlist.push({
            quantity: item.quantity,
            product: item.product._id,
            price: item.product.price,
            img:item.product.coverImg,
            name:item.product.name
          });
        }
      });
      return selectlist;
    },
    
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
        //   this.value=this.list.quantity
          if(res.data.length==0){
              this.nolist=!this.nolist
          }
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
        async onSubmit(){
        //   console.log(this.selectlist);
        //判断是否选中商品
         if(this.selectgoods.length==0){
            Toast.fail('请选择您的商品');
          }else{
/*             localStorage.setItem('list',JSON.stringify(this.selectgoods))
 */            this.$store.commit('getshipin',this.selectgoods)  //将数据存入公共仓库
                console.log(this.$store.state.shangpin)
                this.$router.push('/userOrder')
          }
       },
       //点击按钮获取id
       checkid(){
            // console.log("id", item);
            // this.ids.push(item.product._id) 
       },
       //操作
        bianji(){
        this.show=!this.show
        },
        //多项删除
          async dellist(){
        var arr = [];
      this.selectgoods.forEach((item) => {
        arr.push(item.product);
      });
      const res = await delmanycart({ ids: arr });
      if (res) {
        this.CarList()
      }
        
        console.log(res);
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
        position: absolute;
        top: 312px;
        left: 34px;
    }
   
    
    #list ul li{
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

   #box{
       position: absolute;
       width: 20%;
       /* left: rem; */
       right: 35%;
       top: 30px;
   }
   .heji{
       position: relative;
       font-size: 0.16rem;
   }
   #caozuo{
       float: right;
       margin-top: 65px;
       margin-right: 20px;
       color: #fff;
       display: flex;
   }
   #caozuo div{
       line-height: 30px;
        font-size: 12px;
        margin-right: 5px;
   }
   
 
</style>