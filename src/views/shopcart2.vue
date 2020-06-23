<template>
  <div>
    <top :userlist="namelist"></top>
    <div class="sort_top">
      <div class="sort wrap">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">礼物分类</a>
          </el-breadcrumb-item>
          <el-breadcrumb-item>礼物分类</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="sort-fw">
          <span class="fw">服务热线：0755-86380505 (8:00－24:00)</span>
          <span class="fw-1">QQ在线交谈</span>
        </div>
      </div>
    </div>
    <div class="shopcart-warp">
        <div  class="shopcart-white">
           <div class="cart-top">
               <span class='cartspan'>商品信息</span>
               <span>单价</span>
               <span>数量</span>
               <span>库存</span>
               <span>小计</span>
               <span>操作</span>
           </div>
           <div class="cart-middle">
              <div class='left'>
                <img src="http://img3.liwuyou.com/images/201811/source_img/3888_P_1541475290472.jpg!list115.jpg" alt="">
                <div>
                 <span>beefo小唱机</span><br>
                 <span>礼物颜色：薄樱粉</span><br>
                 <span>个性定制：直接购买</span>
                 </div>
              </div>
              <div class='right'>
                <span>￥399.0</span>
                <div class="btn"><button>- 1 +</button></div>
                <span>有库存</span>
                <span>￥399</span>
                <img src="../../static/shanchu.png" alt="">
              </div>
           </div>
           <div class="cart-bottom">
             <div class="left">
             <img src="../../static/jiantouleft.png" alt="">
             <a href="">继续购物</a>
             </div>
             <div class="right">
                <span>共一件商品</span>
                <span>合计：￥399</span>
                <button @click="getjum()">去结账</button>

             </div>
             
           </div>
        </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
import top from "../components/header";
import bottom from "../components/footer";
export default {
  components: {
    top,
    bottom
  },
  data() {
    return {
      checkList: ["选中且禁用", "复选框 A"],
      namelist: [
        { title: "男装" },
        { title: "家居" },
        { title: "数码" },
        { title: "文体" },
        { title: "电器" },
        { title: "女装" }
      ],
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    getjum(){
      this.$router.push('./shopcart')
    }
  }
};
</script>

<style lang="scss">
*{
  padding:0;
  margin:0;
  text-decoration: none;
}
.sort_top {
  background: #f5f5f5;
  padding: 20px;
  .sort {
    position: relative;
    .el-breadcrumb {
      font-size: 12px;
      line-height: 22px;
      .el-breadcrumb__inner a {
        font-weight: normal;
        color: #333;
        &:hover {
          color: #d93732;
        }
      }
      .el-breadcrumb__item:last-child .el-breadcrumb__inner {
        color: #333;
      }
      .el-breadcrumb__inner.is-link {
        font-weight: normal;
        &:hover {
          color: #d93732;
        }
      }
    }
    .sort-fw {
      position: absolute;
      top: 0px;
      right: 0px;
      .fw {
        font-size: 12px;
        color: #666;
      }
      .fw-1 {
        margin-left: 10px;
        font-size: 12px;
        color: #666;
        padding: 1px 10px;
        border-radius: 22px;
        border: 2px solid #979795;
        cursor: pointer;
        &:hover {
          color: #d93732;
          border: 2px solid #d93732;
        }
      }
    }
  }
}
.shopcart-warp {
  padding-bottom: 20px;
  background-color: #f5f5f5;
  height:300px;
  .shopcart-white {
    width: 1200px;
    height: 300px;
    margin: 0px auto 30px;
    background-color: white;
     padding:30px 30px;
    box-sizing: border-box;
    .cart-top{
        display:flex;
        justify-content: space-between;
        border-bottom:1px solid black;
        padding:0px 0px 30px ;
        .cartspan{
          width:400px;
        }
    }
    .cart-middle{
      display:flex;
      justify-content: space-between;
      padding: 20px 0px;
      .left{
         width:260px;
         display: flex;
      }
      .right{
        width:678px;
        display: flex;
         justify-content: space-between;
        .btn{
          display:inline-block;
        }
        img{
          width:32px;
          height:32px;
        }
      }
    }
    .cart-bottom{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left{
         a{
           color:#333333;
           
         }
      }
    }
  }
}

</style>