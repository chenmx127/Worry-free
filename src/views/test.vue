<template>
  <div>
    <top></top>
    <div class="block">
      <el-carousel height="480px">
        <el-carousel-item v-for="(item,index) in imglist" :key="index">
          <img :src="item" width="150%" height="100%" style="margin-left:-300px" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="service wrap">
      <div >
        <span class="sp brg1"></span>
        <span>专属定制服务</span>
      </div>
      <div >
        <span class="sp brg2 "></span>
        <span>激光镭雕工艺</span>
      </div>
      <div >
        <span class="sp brg3"></span>
        <span>免费代写贺卡</span>
      </div>
      <div >
        <span class="sp brg4"></span>
        <span>精心专业设计</span>
      </div>
    </div>
    <middle></middle>
    <bottom></bottom>
    <foot></foot>
  </div>
</template>

<script>
import top from "../components/header";
import middle from "../components/middle";
import bottom from "../components/footer";
import foot from "../components/foot";
export default {
  components: {
    top,
    middle,
    bottom,
    foot
  },
  data() {
    return {
      imglist: [
        "../../static/ban-1.jpg",
        "../../static/ban-2.jpg",
        "../../static/ban-3.jpg",
        "../../static/ban-4.jpg",
        "../../static/ban-5.jpg"
      ]
    };
  },
  mounted() {
    // let local = this.$store.state.Authorization;
    // if (local === "null" || local === "") {
    //   this.$router.push("/login");
    // }
  },
  methods: {
    getss(el) {
      console.log(el);
      this.name = el;
    }
  }
};
</script>

<style lang="scss">
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__container{
  .el-carousel__arrow{
    display: none !important;
  }
}

.el-carousel__button{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 20px;
  &:hover{
    border:3px solid #d93732;
  }
}
.is-active {
    .el-carousel__button{
      border:3px solid #d93732;
    }
  }
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.service{
          display: flex;
          justify-content: space-around;
          padding: 30px 0px;
        div {
             display: flex;
             align-items: center;
             span:nth-child(2){
                font-size:18px;
             }
          .sp {
            width: 52px;
            height: 52px;
            background: url(../assets/bgr1.png) no-repeat;
            display: inline-block;
            margin-right:20px;
          }
          .brg1{
            background-position: 0px -53px;
          }
          .brg2{
            background-position: -53px -53px;
          }
          .brg3{
            background-position: -106px -53px;
          }
          .brg4{
            background-position: -159px -53px;
          }
          span{
              color:#666;
          }
          
        }
      }
</style>