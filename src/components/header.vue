<template>
  <div class="w">
    <div class="header">
      <div class="head_logo" @click="getLogin()"></div>
      <div class="head_sort">
        <span class="sort_bar">
          物品分类
          <i class="sort_icon"></i>
        </span>
        <ul class="sort_list">
          <li v-for="(item,index) in namelist" :key="index" @click="jump(item.name)">{{item.name}}</li>
          <li></li>
        </ul>
      </div>
      <div class="head_nav">
        <span class="sort_bar">物品导航</span>
        <div class="nav_list">
          <div>
            <div class="nav_top">
              送给谁：
              <router-link to="/" v-for="(item,index) in navlist" :key="index">{{item}}</router-link>
            </div>
            <div class="line">
              <input type="button" class="nav_btn" value="搜索" @click="jump()"/>
            </div>
            <div class="nav_top">
              为啥送：
              <router-link to="/" v-for="(item,index) in navlists" :key="index">{{item}}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="head_con">
        <div class="head_top">
          <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
        </div>
      </div>
      <div class="userinfo" v-show="isLogin">
        <img :src="current.icon" alt srcset width="40" height="40" />
      </div>
      <div class="head_right">
        <div class="user">
          <i class="user_icon"></i>
          <div class="user_hid">
            <div class="user_sort">
              <router-link to="/login" class="user_con user_con_list" v-show="!isLogin">登录</router-link>
              <span class="user_span" v-show="!isLogin">/</span>
              <span class="user_name" v-show="isLogin" @click="getPeople()">{{current.username}}</span>
              <router-link to="/regist" class="user_con user_con_list" v-show="!isLogin">注册</router-link>
              <router-link to="../views/order" class="user_con user_list">我的订单</router-link>
              <router-link to="../views/collection" class="user_con user_list">我的收藏</router-link>
              <span class="user_name" v-show="isLogin" @click="getExit()">退出登录</span>
            </div>
          </div>
        </div>
        <div class="shop">
          <i class="shop_icon" @click="getshop()"></i>
          <div class="shop_hid">
            <div class="shop_sort">
              <span class="shop_con">购物车暂无物品，赶快去选购吧！</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      namelist:[],
      navlist: [
        "不限",
        "公主女票",
        "欧巴男票",
        "潮爸辣妈",
        "兄弟闺蜜",
        "熊孩子",
        "生意伙伴",
        "致谢恩师"
      ],
      navlists: [
        "不限",
        "表白撩妹",
        "过生日",
        "圣诞节",
        "情人节",
        "去求婚",
        "纪念日",
        "想送任性"
      ],
      usericon: localStorage.getItem("userAvatar")
    };
  },
  computed: {
    isLogin: function() {
      return this.$store.getters.getIsLogin;
    },

    current: function() {
      return this.$store.getters.getCurrentuser;
    }
  },
  mounted(){
    this.getGood()
  },
  methods: {
    getLogin() {
      this.$router.push("/");
    },
    getExit() {
      this.$store.state.isLogin = false;
      localStorage.removeItem("Authorization");
      this.$router.push("/login");
    },
    getshop(){
      this.$router.push("../views/shopcart2")
    },
    getPeople(){
      this.$router.push('../views/people');
    },
    jump(el){
      this.$emit("name",el).$router.push('../views/sort')
    },
    getGood(){
      this.$axios
        .get("/pro/w/website/findGoodsTypeList")
        .then(res => {
          console.log(res);
          this.namelist =res.data.data;
        });
    }
  }
};
</script>
<style lang="scss">
.w {
  background: #fff;
}
.header {
  width: 1200px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  .head_logo {
    width: 57px;
    height: 57px;
    overflow: hidden;
    border-radius: 57px;
    background-color: #d93732;
    background-image: url("../assets/logo.png");
    background-repeat: no-repeat;
    transition-duration: 0.3s;
    cursor: pointer;
    &:hover {
      background-position: -57px 0;
    }
  }
  .head_sort {
    margin-left: -220px;
    padding: 35px 24px 34px 25px;
    cursor: pointer;
    position: relative;
    &:hover {
      background: rgba(255, 249, 165, 0.1);
    }
    &:hover .sort_list {
      display: block;
      box-shadow: 3px 0px 5px #ececec;
    }
    .sort_bar {
      &:hover {
        color: #d93732;
      }
      .sort_icon {
        display: inline-block;
        width: 14px;
        height: 12px;
        margin-left: 5px;
        background-image: url("../assets/logo.png");
        background-repeat: no-repeat;
        background-position: -205px 0;
      }
    }
    .sort_list {
      width: 132px;
      background: #fff9a5;
      position: absolute;
      top: 90px;
      left: 0px;
      z-index: 95;
      display: none;
      li {
        width: 32px;
        list-style: none;
        padding: 10px 50px;
        border-bottom: 1px solid #fff;
        &:hover {
          color: #d93732;
        }
      }
    }
  }
  .head_nav {
    cursor: pointer;
    padding: 35px 0px;
    margin-left: -200px;
    &:hover .sort_bar {
      color: #d93732;
    }
    &:hover .nav_list {
      display: block;
    }
    .nav_list {
      padding: 50px 0px 80px 200px;
      position: absolute;
      box-sizing: border-box;
      top: 90px;
      left: 0px;
      width: 100%;
      background: #fff;
      display: none;
      font-size: 12px;
      z-index: 95;
      color: #333;
      box-shadow: 2px 0px 5px #ccc;
      .line {
        width: 55%;
        height: 1px;
        background: #f5f5f5;
        margin-top: 20px;
        margin-bottom: 18px;
        position: relative;
        .nav_btn {
          position: absolute;
          top: 60px;
          right: -100px;
          padding: 13px 30px;
          color: #fff;
          background: #d93732;
          border-radius: 5px;
          border:none;
          outline: none;
          cursor: pointer;
          &:hover {
            background: #eb3232;
          }
        }
      }
      .router-link-active {
        color: #333;
        text-decoration: none;
        margin-right: 15px;
        &:hover {
          color: #d93732;
        }
      }
    }
  }
  .head_con {
    .head_top {
      display: flex;
      .el-input {
        .el-input__inner {
          border-color: #ccc;
          border-radius: 50px;
          border-right: none;
          height: 35px;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
        }
      }
      .el-button--primary {
        background: #fff;
        border-color: #ccc;
        color: #ccc;
        border-radius: 50px;
        border-left: none;
        height: 35px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        .el-icon-search {
          display: block;
          margin-top: -2px;
        }
      }
    }
  }
  .head_right {
    .user {
      display: inline-block;
      border: 2px solid #e9e9e9;
      width: 28px;
      height: 28px;
      border-radius: 32px;
      text-align: center;
      position: relative;
      cursor: pointer;
      &:hover {
        border-color: #d93732;
      }
      &:hover .user_icon {
        background-position: -149px -14px;
      }
      &:hover .user_hid {
        display: block;
      }
      .user_icon {
        width: 14px;
        height: 14px;
        background-image: url("../assets/logo.png");
        background-repeat: no-repeat;
        background-position: -149px 0;
        display: inline-block;
        margin-top: 7px;
        transition-duration: 0.5s;
      }
      .user_hid {
        padding-top: 10px;
        position: absolute;
        top: 30px;
        left: -46px;
        display: none;
        z-index: 99;
        .user_sort {
          width: 120px;
          border-radius: 5px;
          background: #fff;
          border: 1px solid #e9e9e9;
          overflow: hidden;

          .user_con_list {
            display: inline-block;
          }
          .user_span {
            display: inline-block;
            color: #999;
          }
          .user_name {
            color: #d93732;
            display: block;
            padding: 5px;
          }
          .user_list {
            display: block;
          }
          .user_con {
            padding: 5px;
            text-decoration: none;
            color: #999;
            &:hover {
              color: #d93732;
            }
          }
        }
      }
    }
    .shop {
      display: inline-block;
      border: 2px solid #e9e9e9;
      width: 28px;
      height: 28px;
      border-radius: 32px;
      text-align: center;
      margin-left: 20px;
      position: relative;
      cursor: pointer;
      &:hover {
        border-color: #d93732;
      }
      &:hover .shop_icon {
        background-position: -164px -14px;
      }
      &:hover .shop_hid {
        display: block;
      }
      .shop_icon {
        width: 17px;
        height: 14px;
        background-image: url("../assets/logo.png");
        background-repeat: no-repeat;
        background-position: -164px 0;
        display: inline-block;
        margin-top: 7px;
        transition-duration: 0.5s;
      }
      .shop_hid {
        padding-top: 10px;
        position: absolute;
        top: 30px;
        right: -20px;
        display: none;
        background: #fff;
        z-index: 97;
        .shop_sort {
          width: 300px;
          height: 100px;
          border-radius: 5px;
          border: 1px solid #e9e9e9;
          .shop_con {
            display: block;
            margin-top: 38px;
            font-size: 14px;
            color: #ccc;
          }
        }
      }
    }
  }
  .userinfo {
    margin-right: -150px;
    width: 60px;
    height: 40px;
    text-align: center;
    padding: 10px;
  }
}
</style>