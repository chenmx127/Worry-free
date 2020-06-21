<template>
  <div>
    <top :userlist="namelist"></top>
    <div class="block">
      <el-carousel height="400px">
        <el-carousel-item v-for="(item,index) in imglist" :key="index">
          <img :src="item" width="100%" height="400px"/>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import top from "../components/header";
export default {
  components: {
    top
  },
  data() {
    return {
      namelist: [
        { title: "男装" },
        { title: "家居" },
        { title: "数码" },
        { title: "文体" },
        { title: "电器" },
        { title: "女装" }
      ],
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
    let local = this.$store.state.Authorization;
    if (local === "null" || local === "") {
      this.$router.push("/login");
    }
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
.title {
  color: red;
}
</style>