<template>
  <div class="bgc">
    <div class="tal">
      <div class="index">
        <div class="index-left">
          <a href="">首页</a>/<span>个人信息</span>
        </div>
        <div class="index-right">
          <span>服务热线：0755-8638050&nbsp;&nbsp;&nbsp;&nbsp;(8:00－24:00)</span>
          <a href="">QQ在线交谈</a>
        </div>
      </div>
      <div class="infor">
        <div class="infor-left">
          <p>
            <a href=""></a>
            <span>US0000615B0</span>
          </p>
          <ul>
            <li><a>我的订单</a></li>
            <li><a>评价晒单</a></li>
            <li class="mr-top"><a href="" @click="gos">个人信息</a></li>
            <li><a>修改密码</a></li>
            <li><a>我的地址簿</a></li>
            <li class="mr-top"><a>我的代金券</a></li>
            <li><a href="" @click="jumps">我的积分</a></li>
            <li class="mr-top"><a href="" @click="jump">我的收藏</a></li>
            <li><a href="" @click="go">我的提问</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        methods:{
            gos(){
                this.$router.push('./people')
            },
            jumps(){
                this.$router.push('./integral')
            },
            jump(){
                this.$router.push('./collection')
            },
            go(){
                this.$router.push('./questions')
            }
        }
    }
</script>

<style lang="scss">
  *{
      margin: 0;
      padding: 0;
  }
  a{
    text-decoration: none;
    color: #aaa;
  }
  li {
    list-style: none;
  }
  .bgc {
    background-color: #f5f5f5;
    .tal {
      width: 90%;
      margin: 20px auto;
      .index {
        width: 100%;
        height: 30px;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        .index-left {
          width: 10%;
          height: 100%;
          dispaly: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          a {
            text-decoration: none;
            font-size: 12px;
            line-height: 30px;
            color: #aaa;
            margin-right: 5px;
          }
          a:hover {
            color: #d93732;
          }
          span {
            font-size: 12px;
            line-height: 30px;
            color: #aaa;
            margin-left: 5px;
          }
        }
        .index-right {
          width: 28%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            font-size: 12px;
            color:#aaa;
          }
          a {
            width: 30%;
            height: 20px;
            font-size: 12px;
            color: #aaa;
            line-height: 20px;
            border: 2px solid #aaa;
            border-radius: 15px;
            text-align: center;
          }
          a:hover {
            color: #d93732;
            border: 2px solid #d93732;
          }
        }
      }
      .infor {
        height: 700px;
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        .infor-left {
          width: 19%;
          height: 100%;
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          p {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 40px;
            margin-bottom: 20px;
            a {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              background:url('../assets/logo.png') no-repeat -250px -118px;
            }
            a:hover {
              background:url('../assets/logo.png') no-repeat -199px -178px;
            }
            span {
              font-size: 14px;
              color: #333;
              margin-top: 10px;
            }
          }
          ul {
            margin-top: 20px;
            li{
              width: 150px;
              height: 36px;
              mergin-top: 10px;
              text-align: center;
              cursor: pointer;
              a {
                font-size: 14px;
                color:#333;
                line-height: 36px;
              }
              a:hover {
                color:#d93732;
              }
            }
            .mr-top {
              margin-top: 15px;
            }
          }
        }
      }
    }
  }
</style>
