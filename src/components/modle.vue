<template>
  <div>
    <top></top>
    <div class="order">
      <div class="sort_top">
        <div class="sort wrap">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>
              <!-- <a href="/" v-if="num == 0">个人信息</a> -->
              <a href="/" v-if="num == 1">我的订单</a>
              <a href="/" v-else-if="num == 2">评价晒单</a>
              <a href="/" v-else-if="num == 3">个人信息</a>
              <a href="/" v-else-if="num == 4">修改密码</a>
              <a href="/" v-else-if="num == 5">我的地址簿</a>
              <a href="/" v-else-if="num == 6">我的代金券</a>
              <a href="/" v-else-if="num == 7">我的积分</a>
              <a href="/" v-else-if="num == 8">我的收藏</a>
              <a href="/" v-else-if="num == 9">我的提问</a>
            </el-breadcrumb-item>
          </el-breadcrumb>
          <div class="sort-fw">
            <span class="fw">服务热线：0755-86380505 (8:00－24:00)</span>
            <span class="fw-1">QQ在线交谈</span>
          </div>
        </div>
      </div>
      <div class="count" id="app">
        <div class="ct-left">
          <div class="icon">
            <i></i>
            <p>US0000615B1</p>
          </div>
          <div>
            <router-link to="./order">
              <p class="p-order" @click="get(1)">{{order}}</p>
            </router-link>
            <router-link to="./eva">
              <p class="p-eva" @click="get(2)">{{eva}}</p>
            </router-link>
          </div>
          <div>
            <router-link to="./people">
              <p @click="get(3)">{{people}}</p>
            </router-link>
            <router-link to="./chpassword">
              <p @click="get(4)">{{chpassword}}</p>
            </router-link>
            <router-link class="p-adress" to="./adress">
              <p @click="get(5)">{{adress}}</p>
            </router-link>
          </div>
          <div>
            <router-link class="p-vouchers" to="./vouchers">
              <p @click="get(6)">{{vouchers}}</p>
            </router-link>
            <router-link class="p-integral" to="./integral">
              <p @click="get(7)">{{integral}}</p>
            </router-link>
          </div>
          <div>
            <router-link class="p-collection" to="./collection">
              <p @click="get(8)">{{collection}}</p>
            </router-link>
            <router-link class="p-questions" to="./questions">
              <p @click="get(9)">{{questions}}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import top from "./header";
import bottom from "./footer";
export default {
  components: {
    top,
    bottom
  },
  data() {
    return {
      num:0,
      order: "我的订单",
      eva: "评价晒单",
      people: "个人信息",
      chpassword: "修改密码",
      adress: "我的地址簿",
      vouchers: "我的代金券",
      integral: "我的积分",
      collection: "我的收藏",
      questions: "我的提问"
    };
  },
  methods:{
    get(el){
      this.num = el
    }
  }

};
</script>

<style lang="scss">
a {
  text-decoration: none;
}
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.order {
  position: relative;
  background-color: #f5f5f5;
  padding: 10px 50px 50px 50px;
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
  .phone {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0px;
    .ph-left {
      font-size: 12px;
      width: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .ph-right {
      font-size: 12px;
      .box {
        border: 1px solid #666666;
        display: inline-block;
        width: 100px;
        text-align: center;
        border-radius: 50px;
        line-height: 19px;
      }
    }
  }
  .count {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    height: 600px;

    .ct-left {
      width: 230px;
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        width: 100px;
        font-size: 14px;
        margin: 24px 0px 0px 36px;
        p {
          line-height: 30px;
          color: #333333;
        }
        p:hover {
          color: #d93732;
        }
      }
      .icon {
        text-align: center;
        margin-left: 0px;
        i {
          display: inline-block;
          width: 52px;
          height: 52px;
          background: url(../assets/logo.png) no-repeat;
          background-position: -249px -117px;
        }
        i:hover {
          background-position: -198px -176px;
        }
      }
    }
  }
}
</style>