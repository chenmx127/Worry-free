<template>
  <div>
    <top></top>
    <div class="center">
      <div class="deta-top">
        <div class="demo-image">
          <el-image v-for="(item,index) in urls" :key="index" :src="item" lazy></el-image>
        </div>
        <div class="bigpic">
          <el-image class="picture" v-for="(imgs,index) in imgs" :key="index" :src="imgs"></el-image>
        </div>
        <div class="goods-deta">
          <h2>初心化妆镜</h2>
          <h3>不忘初心，方能知悉生活之美。镜子的美不在于自身，而在于照镜子的你；灯光的美不在于光亮，而在于灯光中的你；带走用这份礼物，去营造彼此之间初心相见的美妙</h3>
          <div class="pirace">
            <span class="red">168.0 - 178.0元</span>
            <span>有现货</span>
          </div>
          <div class="tag-group">
            <span class="tag-group__title">礼物款式：</span>
            <el-tag v-for="item in items" :key="item.label" :type="item.type" effect="礼物款式：">
              {{ item.label }}
            </el-tag>
          </div>
          <div class="tag-group">
            <span class="tag-group__title">个性定制：</span>
            <el-tag v-for="item in items1" :key="item.label" :type="item.type" effect="个性定制">
              {{ item.label }}
            </el-tag>
          </div>
          <el-row>
            <el-button type="success">直接购买</el-button>
            <span class="xin"><i></i></span>
          </el-row>
          <div class="sort">
            <a href="#"><i></i>查看更多同类商品</a>
          </div>
        </div>
      </div>
      <div class="deta-mid">
        <div class="demo-image__lazy">
          <el-image v-for="url in image" :key="url" :src="url" lazy></el-image>
        </div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import top from "../components/header"
import bottom from "../components/footer"
  export default {
    components:{
      top,
      bottom
    },
    data() {
      return {
        urls: [
          '../../static/jingzismall.jpg',
          '../../static/jingzismall.jpg',
          '../../static/jingzismall.jpg',
          '../../static/jingzismall.jpg',
          '../../static/jingzismall.jpg',
          '../../static/jingzismall.jpg'
        ],
        imgs: [
          '../../static/jingzibig.jpg',
          '../../static/jingzibig.jpg',
          '../../static/jingzibig.jpg',
          '../../static/jingzibig.jpg',
          '../../static/jingzibig.jpg',
          '../../static/jingzibig.jpg'
        ],
        items: [{
            type: '',
            label: '樱花粉'
          },
          {
            type: 'success',
            label: '薄荷绿'
          },
        ],
        items1: [{
            type: '',
            label: '直接购买'
          },
          {
            type: 'success',
            label: '个性定制'
          },
        ],
        image: [
          'http://img1.liwuyou.com/images/upload/Image/初心化妆镜台灯-2_01.jpg',
          'http://img1.liwuyou.com/images/upload/Image/初心化妆镜台灯-2_01.jpg',
          'http://img1.liwuyou.com/images/upload/Image/初心化妆镜台灯-2_01.jpg',
          'http://img1.liwuyou.com/images/upload/Image/初心化妆镜台灯-2_01.jpg',
          'http://img1.liwuyou.com/images/upload/Image/初心化妆镜台灯-2_01.jpg',
          'http://img1.liwuyou.com/images/upload/Image/初心化妆镜台灯-2_01.jpg',
          'http://img1.liwuyou.com/images/upload/Image/初心化妆镜台灯-2_01.jpg'
        ]
      }
    }
  }
</script>

<style lang="scss">
  a {
    text-decoration: none;
  }

  .center {
    width: 90%;
    margin: 0 auto;

    .deta-top {
      width: 100%;
      height: 500px;
      display: flex;
      justify-content: space-between;

      .demo-image {
        width: 6%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        .el-image {
          width: 68px;
          height: 68px;
          border: 1px solid #e6e6e6;
        }

        .el-image:hover {
          border-color: #d93732;
        }
      }

      .bigpic {
        width: 500px;
        height: 500px;
        overflow: hidden;

        .picture {
          float: left;
          width: 100%;
          height: 100%;
        }
      }

      .goods-deta {
        width: 40%;
        height: 521px;
        display: flex;
        flex-direction: column;

        h2 {
          font-size: 30px;
        }

        h3 {
          font-size: 14px;
          color: #666;
          font-weight: 400;
          margin-top: 20px;
        }
        .pirace {
          margin-top: 20px;
          width: 100%;
          height: 66px;
          border-top: 1px solid #e6e6e6;
          border-bottom: 1px solid #e6e6e6;
          display: flex;
          justify-content: space-between;
          align-items: center;

          span {
            padding: 0 10px;
          }

          .red {
            font-size: 24px;
            font-weight: 700;
            color: #d93732;
          }
        }

        .tag-group {
          margin-top: 30px;

          .tag-group__title {
            font-size: 14px;
            color: #666;
          }

          .el-tag {
            margin-right: 10px;
            width: 84px;
            height: 36px;
            text-align: center;
            line-height: 36px;
            background-color: #fff;
            border: 1px solid #666;
            color: #333;

            &:hover {
              color: #d93732;
              border: 2px solid #d93732;
            }
          }
        }

        .el-row {
          margin-top: 30px;
          margin-bottom: 30px;
          display: flex;
          justify-content: space-between;

          .el-button {
            color: #fff;
            width: 416px;
            text-align: center;
            background-color: #d93732;
            border-color: #d93732;
          }

          .xin {
            display: inline-block;
            width: 44px;
            height: 44px;
            background-color: #e2e2e2;
            display: flex;
            justify-content: center;
            align-items: center;

            i {
              width: 18px;
              height: 16px;
              background: url('../assets/logo.png') no-repeat -205px -16px;
            }
          }
        }

        .sort {
          border-top: 1px solid #e6e6e6;

          a {
            display: inline-block;
            padding: 30px 0;
            text-align: center;
            font-size: 14px;
            color: #333;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            i {
              margin-right: 10px;
              width: 16px;
              height: 16px;
              display: inline-block;
              vertical-align: middle;
              margin-top: -3px;
              background: url('../assets/logo.png') no-repeat -224px -16px;
            }
          }

          a:hover {
            color: #d93732;

            i:hover {
              background: url('../assets/logo.png') no-repeat -224px -32px;
            }
          }
        }
      }
    }
    .deta-mid {
      width: 70%;
      margin-top: 50px;
      .demo-image__lazy {
        display: flex;
        flex-direction: column;
        .el-image {
          width: 750px;
          height: 1028px;
          margin-top: 10px;
        }
      }
    }
  }
</style>
