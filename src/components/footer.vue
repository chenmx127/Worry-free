<template>
  <div>
    <!-- class=" " -->
    <div class="footer">
      <div class="top wrap">
        <div class="left-1"></div>
        <span class="fenge"></span>
        <div class="left-2">
          <img src="http://www.liwuyou.com/themes/pc/images/slogan.png" alt />
        </div>
        <span class="fenge"></span>
        <div class="right-1">
          <p>关注我们</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <span class="fenge"></span>
        <div class="right-2">
          <h3>0755-86380505</h3>
          <p>周一至周日 8:00-24:00</p>
          <div>
            <span>QQ在线交谈</span>
          </div>
        </div>
      </div>
      <div class="buttom-warp">
        <div class="buttom">
          <div class="but-top">
            <div >
              <span class="sp brg1"></span>
              <span>30天免费退换货</span>
            </div>
            <div >
              <span class="sp brg2 "></span>
              <span>100%正品保证</span>
            </div>
            <div >
              <span class="sp brg3"></span>
              <span>全场免运费</span>
            </div>
            <div >
              <span class="sp brg4"></span>
              <span>提供礼品级包装</span>
            </div>
          </div>
          <div class="but-middle">
              <div class="middle-left">
                  <span>© liwuyou.com</span>
                  <span>粤ICP备10222238号-1</span>
              </div>
              <div class="middle-right">
                 <ul>
                     <li>关于我们</li><span class="mr-fenge"></span>
                     <li>帮助中心</li><span class="mr-fenge"></span>
                     <li>人才招聘</li><span class="mr-fenge"></span>
                     <li>售后服务</li><span class="mr-fenge"></span>
                     <li>配送与验收</li><span class="mr-fenge"></span>
                     <li>联系我们</li>
                 </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss">
*{
    margin:0;
    padding:0;
    list-style-type: none;
}
.footer {
  .top {
    display: flex;
    justify-content: space-around;
    padding: 50px 0px;
    align-items: center;
    .fenge {
      width: 1px;
      background: #ebe9e9;
      height: 85px;
    }
    .left-1 {
      width: 164px;
      height: 60px;
      margin-left: 50px;
      background: url(../assets/logo.png) no-repeat;
      background-position: 1px -57px;
    }
    .left-2 {
      margin: 0 -50px;
    }
    .right-1 {
      p{
          font-size:16px;
          font-weight:600;
      }  
      ul {
        display: flex;
        margin-top: 10px;
        li {
          background: url(../assets/logo.png) no-repeat;
          margin-right: 15px;
          cursor: pointer;
        }
        li:nth-child(1) {
          width: 28px;
          height: 24px;
          background-position: 0px -276px;
          &:hover{
            background-position: 0px -251px;
          }
        }
        li:nth-child(2) {
          width: 24px;
          height: 24px;
          background-position: -29px -276px;
          &:hover{
            background-position: -29px -251px;
          }
        }
        li:nth-child(3) {
          width: 30px;
          height: 24px;
          background-position: -54px -276px;
          &:hover{
            background-position: -54px -251px;
          }
        }
      }
    }
    .right-2 {
      text-align: center;
      color: #333333;
      h3 {
        font-size: 24px;
      }
      p {
        font-size: 12px;
      }
      div {
        border: 2px solid #ccc;
        border-radius: 50px;
        font-size: 14px;
        padding: 5px 0px;
        margin: 10px auto 0px;
        width: 143px;
        transition: all .5s linear;
        cursor: pointer;
        span{
          transition: all .5s linear;
        }
        &:hover{
          border: 2px solid #d93732;
        }
        &:hover span{
          color: #d93732;
        }
      }
    }
  }
  .buttom-warp {
      background-color: #484442;
    .buttom {
        width:1200px;
        margin:0 auto;
      .but-top {
          display: flex;
          justify-content: space-around;
          padding: 45px 0px;
          border-bottom: 2px solid #666666;
        div {
             display: flex;
             align-items: center;
             span:nth-child(2){
                 font-size:18px;
                 font-weight:600;
             }
          .sp {
            width: 53px;
            height: 53px;
            background: url(../assets/bgr1.png) no-repeat;
            display: inline-block;
            margin-right:20px;
          }
          .brg1{
            background-position: 1px 0px;
          }
          .brg2{
            background-position: -52px 0px;
          }
          .brg3{
            background-position: -106px 0px;
          }
          .brg4{
            background-position: -158px 0px;
          }
          span{
              color:#e7e7e7;
          }
          
        }
      }
      .but-middle{
          display:flex;
          justify-content: space-between;
          padding: 40px 30px;
          .middle-left{
              span{
                font-size:12px;
                color:#c3c3c3;
                padding-right:10px;
              }
          }
          .middle-right{
              ul{
                
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  li{
                    cursor: pointer;
                      font-size:12px;
                      color:#c3c3c3;
                      margin:0 10px;
                  }
                  .mr-fenge{
                     width: 1px;
                     background: #c3c3c3;
                     height:10px;
                  }
              }
          }
      }
    }
  }
}
</style>
