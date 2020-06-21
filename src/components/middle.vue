<template>
    <div class="bgc">
        <div class="pic">
            <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
            <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
            <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
            <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
        </div>
        <div class="new">
            <h4>新品推荐</h4>
            <div class="line"></div>
            <a>查看更多</a>
        </div>
        <div class="new-goods">
            <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
            <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
            <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
            <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
        </div>
        <div class="new-goods1">
          <a class="a1" href=""><img src="../assets/04(2251).jpg" alt=""></a>
          <a class="a2" href=""><img src="../assets/05(7539).jpg" alt=""></a>
          <a class="a3" href=""><img src="../assets/06(9106).jpg" alt=""></a>
        </div>
        <div class="new">
            <h4>生日礼物</h4>
            <div class="line"></div>
            <a>查看更多</a>
        </div>
        <div class="new-goods2">
            <a href=""><img src="../assets/15(1996).jpg" alt=""></a>
            <div class="new-goods4">
              <div class="new-goods5">
                <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
                <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
                <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
                <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
              </div>
              <div class="new-goods3">
                <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
                <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
                <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
                <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
              </div>
            </div>
        </div>
        <div class="new">
            <h4>创意礼物</h4>
            <div class="line"></div>
            <a>查看更多</a>
        </div>
        <div class="new-goods2">
            <a href=""><img src="../assets/15(1996).jpg" alt=""></a>
            <div class="new-goods4">
              <div class="new-goods5">
                <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
                <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
                <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
                <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
              </div>
              <div class="new-goods3">
                <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
                <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
                <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
                <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
              </div>
            </div>
        </div>
        <div class="new">
            <h4>礼物精选</h4>
            <div class="line"></div>
            <a>查看更多</a>
        </div>
        <div class="new-goods">
            <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
            <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
            <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
            <a href=""><img src="../assets/01(1584).jpg" alt=""></a>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    .bgc {
      background-color: #f5f5f5;
      .pic {
        width: 90%;
        height: 210px;
        margin: 20px auto;
        display: flex;
        justify-content: space-between;
        a{
          width: 24%;
          height: 210px;
          text-decoration: none;
          img{
              width: 100%;
              height: 100%;
          }
        }
      }
      .new {
        width: 90%;
        height: 30px;
        margin: 50px auto 0 auto;
        display: flex;
        justify-content: space-between;
        h4{
          font-size: 16px;
          color: #666;
        }
        .line {
          width: 89%;
          background: url('../assets/diy-title.png') no-repeat 0px 10px;
        }
        a {
          font-size: 14px;
          color: #666;
        }
        a:hover {
          color: #d93732;
        }
      }
      .new-goods {
        width: 90%;
        height: 250px;
        margin: 20px auto;
        display: flex;
        justify-content: space-between;
        a{
          width: 24%;
          height: 250px;
          text-decoration: none;
          img{
              width: 100%;
              height: 100%;
          }
        }
      }
      .new-goods1 {
        width: 90%;
        height: 250px;
        margin: 20px auto;
        display: flex;
        justify-content: space-between;
        .a1 {
          width: 35%;
          height: 250px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .a2 {
          width: 27%;
          height: 250px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .a3 {
          width: 35%;
          height: 250px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .new-goods2 {
        width: 90%;
        height: 567px;
        margin: 20px auto;
        display: flex;
        justify-content: space-between;
        a {
          width: 20%;
          height: 100%
        }
        .new-goods4 {
          width: 80%;
          height: 276px;
          display: flex;
          Flex-direction: column;
          .new-goods5 {
            width:100%;
            height: 276px;
            display: flex;
            justify-content:space-between;
            a {
              width: 24%;
              height: 100%;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
          .new-goods3 {
            width: 100%;
            height: 276px;
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
            a {
              width: 24%;
              height: 100%;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
</style>
