<template>
  <div>
    <!-- class=" " -->
    <div class="footer">
      <div class="top">
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
          <div class="but-foot">
            <span>友情链接：</span>
            <span>照片书</span>
            <span>厦门特产</span>
            <span>网上冲印</span>
            <span>劳保用品网</span>
            <span>紫砂壶</span>
            <span>批发网</span>
            <span>眼镜</span>
            <span>中国鲜花礼品网</span>
            <span>影楼网</span>
            <span>人民币收藏</span>
            <span>欧宝丽官网</span>
            <span>服装搭配</span>
            <span>纸艺网</span>
            <span>商机网</span>
            <span>鲜花网</span>
            <span>意绵绵珠宝</span> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
*{
    margin:0;
    padding:0;
    list-style-type: none;
}
.footer {
  .top {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    padding: 50px 0px;
    align-items: center;
    .fenge {
      border: 0.5px solid #ebe9e9;
      height: 85px;
    }
    .left-1 {
      width: 164px;
      height: 60px;
      background: url(../assets/logo.png) no-repeat;
      background-position: 1px -57px;
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
          
          width: 30px;
          height: 30px;
          background: url(../assets/logo.png) no-repeat;
          margin-right: 15px;
        }
        li:nth-child(1) {
          background-position: 2px -275px;
        }
        li:nth-child(2) {
          background-position: -28px -275px;
          width: 26px;
        }
        li:nth-child(3) {
          background-position: -54px -275px;
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
        border: 1px solid #999999;
        border-radius: 50px;
        font-size: 14px;
        padding: 5px 0px;
        margin: 10px auto 0px;
        width: 143px;
      }
    }
  }
  .buttom-warp {
      background-color: black;
    .buttom {
        width:1200px;
        margin:0 auto;
      .but-top {
          display: flex;
          justify-content: space-around;
          padding: 30px 0px;
          border-bottom: 1px solid #666666;
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
          padding: 30px 31px;
          border-bottom: 1px solid #666666;
          .middle-left{
              span{
                font-size:12px;
                color:#e7e7e7;
                padding-right:10px;
              }
          }
          .middle-right{
              ul{
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  li{
                      font-size:12px;
                      color:#e7e7e7;
                      margin:0 10px;
                  }
                  .mr-fenge{
                     border: 0.5px solid #ebe9e9;
                     height:17px;
                  }
              }
          }
      }
      .but-foot{
           width: 900px;
           margin-left: 32px;
           padding: 30px 0px;
          span{
            color:#e7e7e7;
            font-size:12px;
          }
      }
    }
  }
}
</style>
