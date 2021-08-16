<template>
    <div class=''>
   <van-nav-bar
  title="我的订单"
  left-text="返回"
  right-text="全选"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>

<div class="ddss">
<p v-if="!list">没有订单</p>
<ul v-if="list">
  <li class="ss" v-for="(item,index) in list" :key="item._id">
   <input type="checkbox" class="cbx" :id="index" >
   <span class="sp1">订单号:{{item.no}}</span>
   <span class="sp2">价格:{{item.price}}</span>

  </li>
</ul>
</div>
<van-contact-list
  @add="onAdd"
  add-text="批量删除订单"
/>
    </div>
</template>

<script>
import { get,post } from "../../util/request";

export default {
    
    components: {},
    data() {
        
        return {
         list:null,
         kaiguan:false,
         ids:[],
    };
   
    },
    computed: {},
    watch: {},
    
    methods: {
    onClickLeft() {
       this.$router.push("/my")
    },
    onClickRight() {
       let ck=document.querySelectorAll(".cbx");
         if(this.kaiguan){
           ck.forEach(item=>{
             item.checked=false
           })
              this.kaiguan=false
      }else{
           ck.forEach(item=>{
             item.checked=true
           })
           this.kaiguan=true
      }
    },
  async onAdd(){
     let ck=document.querySelectorAll(".cbx");
     ck.forEach((item,index)=>{
       if(item.checked==true){
         this.ids.push(this.list[index]._id)
        }
     })
      if(this.ids.length>0){
       let result=await post("/api/v1/orders/delmany",{
         ids:this.ids
       });
       this.init()
       console.log(result)
      }else{
        alert("删除失败")
      }
    },
   async init(){
      let result=await get("/api/v1/orders");
      console.log(result);
      if(result.data.orders.length>0){
        this.list=result.data.orders
      }
      console.log(this.list)
    }
      
    },
    created() {
        this.init()
    },
    mounted() {
        
    },
    }
</script>
<style scoped>
    .ddss{
      width: 100%;
      min-height: 500px;
    }
    .ddss .ss{
      position: relative;
        width: 100%;
       height: 50px;
             border: 1px solid grey;
             margin: 10px 0;

    }
    .cbx{
      width:20px;
      height: 20px;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
    .sp1{
      min-width: 200px;
      height: 20px;
      position:absolute;
      left: 30px;
      top: 1px;
      font-size: 13px;
      line-height: 20px;
    }
    .sp2{
       min-width: 200px;
      height: 20px;
      position:absolute;
      left: 30px;
      top: 23px;
      font-size: 15px;
      line-height: 20px;
    }
</style>