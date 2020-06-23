<template>
  <div>
    <top @name="getName($event)"></top>
    <div class="sort_top">
      <div class="sort wrap">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">商品分类</a>
          </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="sort-fw">
          <span class="fw">服务热线：0755-86380505 (8:00－24:00)</span>
          <span class="fw-1">QQ在线交谈</span>
        </div>
      </div>
    </div>
    <div class="sort_one">
      <div class="wrap">
        <dl class="sort_dl">
          <dt class="sort_dt">分类:</dt>
          <dd class="sort_dd">
            <a href="#">全部</a>
            <a href="#">配饰</a>
            <a href="#">内衣</a>
            <a href="#">电器</a>
            <a href="#">数码</a>
            <a href="#">美食</a>
            <a href="#">文体</a>
            <a href="#">家纺</a>
            <a href="#">居家</a>
            <a href="#">美妆</a>
            <a href="#">母婴</a>
            <a href="#">箱包</a>
            <a href="#">鞋子</a>
            <a href="#">男装</a>
            <a href="#">女装</a>
          </dd>
        </dl>
        <el-divider></el-divider>
        <dl class="sort_dl">
          <dt class="sort_dt">价格:</dt>
          <dd class="sort_dd">
            <a href="#">全部</a>
            <a href="#">100以下</a>
            <a href="#">100-500</a>
            <a href="#">500-1000</a>
            <a href="#">1000以上</a>
          </dd>
        </dl>
      </div>
    </div>
    <div class="sort_con">
      <div class="wrap aa">
        <div class="sort_con_top">
          <div class="sorts">
            <a href="#">畅销</a>
            <span class="dib">|</span>
            <a href="#">最新</a>
            <span class="dib">|</span>
            <a href="#">价格从低到高</a>
            <span class="dib">|</span>
            <a href="#">价格从高到低</a>
          </div>
          <div class="filt">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="仅显示特价商品"></el-checkbox>
              <el-checkbox label="仅显示可定制商品"></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="sort_con_middle">
          <ul>
            <li v-for="(item,index) in goodlist" :key="index">
              <a href="#" v-if="item.user_type == 1">
                <img :src="item.pict_url" class="good_i" />
              </a>
              <a :href="item.url" v-if="item.user_type == 0">
                <img :src="item.pict_url" class="good_i" />
              </a>
              <a class="good_t" href="#" v-if="item.user_type == 1">{{item.short_title}}</a>
              <a class="good_t" :href="item.url" v-if="item.user_type == 0">{{item.short_title}}</a>
              <span class="good_pic">￥&nbsp;{{item.reserve_price}}</span>
              <div class="good_p" v-if="item.user_type == 0">
                <span class="good_l">可定制</span>
                <span class="good_r">{{item.volume}}评价</span>
              </div>
              <div class="good_p" v-if="item.user_type == 1">
                <span class="good_r">无人评价</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="sort_con_fen">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="20"
            layout="total, prev, pager, next"
            :total='2000'
          ></el-pagination>
        </div>
        <div class="sort_con_bottom">
          <div class="more" v-show="isMore" @click="getMore()">
            查看更多
            <i class="el-icon-arrow-down"></i>
          </div>
          <div class="more" v-show="!isMore" @click="getMore()">
            收起更多
            <i class="el-icon-arrow-up"></i>
          </div>
          <div class="sort_left">
            <p class="sort_g">送礼策划</p>
            <img src="../../static/gifts.png" class="sort_i" />
          </div>
          <div class="sort_right">
            <h1 class="sort_h">送礼对象</h1>
            <div class="sort_c">
              <div
                class="sort_c_top"
              >送礼既然是一门艺术，自有其约定俗成的规矩，送给谁、送什么、怎么送都具有一定的学问。社会的日新月异，现代人忙得不可开交，通过走亲访友，结交新知，不仅可以调节生活，开阔视野，还能加深亲友间的情谊。送礼时不适宜千篇一律，每个人都是独立的个体，每个人都拥有属于自己的追求和需要，这就有赖于平常你的细心观察。不同的对象，礼物也要根据情况环境内容的不同而进行变化，因地制宜是送礼必须把握的原则。针对不同性格，不同地位和品味的人，所送礼物也各尽显不同。礼物不用多，而在于精致。</div>
              <div class="sort_line" v-show="!isMore"></div>
              <ul class="sort_c_list" v-show="!isMore">
                <li>
                  <a href="#">
                    <img src="../../static/zixun_ico.gif" />
                    送老婆礼物vdvdv
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../static/zixun_ico.gif" />
                    送老婆礼物
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../static/zixun_ico.gif" />
                    送老婆礼物
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../static/zixun_ico.gif" />
                    送老婆礼物vdvdv
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../static/zixun_ico.gif" />
                    送老婆礼物dsfsd
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../static/zixun_ico.gif" />
                    送老婆礼物
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../static/zixun_ico.gif" />
                    送老婆礼物vdvdv
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../static/zixun_ico.gif" />
                    送老婆礼物
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../static/zixun_ico.gif" />
                    送老婆礼物sdfdsfds
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="festival" v-show="!isMore">
            <p class="fe_1">更多节日场合</p>
            <div class="fe_2">
              <a href="#" class="fe_a">元旦礼物</a>
              <a href="#" class="fe_a">520礼物</a>
              <a href="#" class="fe_a">情人节礼物</a>
              <a href="#" class="fe_a">愚人节礼物</a>
              <a href="#" class="fe_a">植树节礼物</a>
              <a href="#" class="fe_a">儿童节礼物</a>
              <a href="#" class="fe_a">三八妇女节礼物</a>
              <a href="#" class="fe_a">光棍节礼物</a>
              <a href="#" class="fe_a">中秋节礼物</a>
              <a href="#" class="fe_a">国庆节礼物</a>
              <a href="#" class="fe_a">2.14情人节礼物</a>
              <a href="#" class="fe_a">感恩节礼物</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
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
      name:'',
      checkList: ["选中且禁用", "复选框 A"],
      goodlist: [],
      isMore: true,
      currentPage:1,
      pagesize:10
    };
  },
  mounted() {
    this.getlist();
  },
  methods: {
    getMore() {
      this.isMore = !this.isMore;
    },
    getName(el){
      console.log(el);
      this.name = el;
      this.getlist()
    },
    getlist() {
      this.$axios
        .get("/pro/w/website/findGoodsList", {
          params: {
            platId: "d0a500ecf8ab41aa9ffe8e18ac6419e1",
            info: this.name,
            pageNo: this.currentPage
          }
        })
        .then(res => {
          console.log(res);
          this.goodlist =res.data.data.tbk_dg_material_optional_response.result_list.map_data;
        });
    },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;
        if(this.currentPage){
          this.getlist()
        }
      }
  }
};
</script>

<style lang="scss">
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
.sort_one {
  width: 100%;
  background: #fff;
  .el-divider--horizontal {
    margin: 0;
  }
  .sort_dl {
    font-size: 14px;
    overflow: hidden;
    padding: 20px 0px;
    .sort_dt {
      float: left;
      width: 85px;
      padding: 20px 0;
      line-height: 28px;
    }
    .sort_dd {
      float: left;
      height: 28px;
      line-height: 28px;
      max-width: 1020px;
      padding: 20px 0;
      a {
        float: left;
        color: #333;
        margin-right: 50px;
        text-decoration: none;
        &:hover {
          color: #d93732;
        }
      }
    }
  }
}
.sort_con {
  background: #f5f5f5;
  width: 100%;
  padding: 30px 0 50px 0;
  .aa {
    height: 100%;
    .sort_con_top {
      padding: 20px 0;
      font-size: 14px;
      color: #d4d4c7;
      overflow: hidden;
      .sorts {
        float: left;
        a {
          text-decoration: none;
          padding: 0px 14px;
          color: #333;
          &:hover {
            color: #d93732;
          }
        }
      }
      .filt {
        float: right;
        .el-checkbox__inner {
          border: 1px solid #ccc;
        }
        .el-checkbox__input.is-checked .el-checkbox__inner,
        .el-checkbox__input.is-indeterminate .el-checkbox__inner {
          background-color: #d93732;
        }
        .el-checkbox__input.is-checked + .el-checkbox__label {
          color: #d93732;
        }
      }
    }
    .sort_con_middle {
      ul {
        overflow: hidden;
        li {
          padding: 30px;
          float: left;
          background: #fff;
          margin-right: 20px;
          margin-top: 30px;
          .good_i {
            width: 225px;
            height: 225px;
            display: block;
          }
          .good_t {
            display: block;
            width: 225px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-top: 20px;
            margin-bottom: 10px;
            font-size: 14px;
            color: #333;
            text-decoration: none;
            cursor: pointer;
            &:hover{
              color: #d93732;
            }
          }
          .good_pic {
            font-size: 14px;
          }
          .good_p {
            font-size: 12px;
            overflow: hidden;
            margin-top: 30px;
            height: 22px;
            .good_l {
              float: left;
              border: 1px solid #666;
              border-radius: 3px;
              padding: 1px 2px;
              cursor: pointer;
              &:hover{
                border: 1px solid #d93732;
                color: #d93732;
              }
            }
            .good_r {
              float: right;
              color: #999;
            }
          }
        }
        li:nth-child(4n) {
          margin-right: 0px;
        }
      }
    }
    .sort_con_fen{
      text-align: center;
      margin-top: 30px;
      .el-pagination__total{
        display: none;
      }
      .el-pagination .btn-next, .el-pagination .btn-prev {
        background: none;
        color: #999;
      }
      .el-dialog, .el-pager li{
        background: none;
        font-size: 16px;
        color: #999;
      }
      .el-pager li.active{
        background: #ccc;
        border-radius: 50%;
        color: #fff;
      }
    }
    .sort_con_bottom {
      width: 100%;
      background: #fff;
      overflow: hidden;
      margin: 31px 0px;
      padding: 50px 0px 100px 0px;
      box-sizing: border-box;
      position: relative;
      .sort_left {
        float: left;
        width: 280px;
        text-align: center;
        .sort_g {
          font-size: 22px;
        }
        .sort_i {
          margin-top: 15px;
        }
      }
      .sort_right {
        float: left;
        width: 810px;
        margin-left: 20px;
        .sort_line {
          width: 100%;
          height: 1px;
          background: #d5d5d5;
          margin: 30px 0px;
        }
        .sort_h {
          font-size: 16px;
          font-weight: normal;
        }
        .sort_c {
          margin-top: 10px;
          font-size: 14px;
          .sort_c_top {
            text-indent: 1em;
          }
          .sort_c_list {
            overflow: hidden;
            li {
              width: 270px;
              overflow: hidden;
              float: left;
              a {
                color: #333;
                text-decoration: none;
                &:hover {
                  color: #d93732;
                }
                img {
                  vertical-align: top;
                }
              }
            }
          }
        }
      }
      .festival {
        float: left;
        width: 1026px;
        margin-left: 85px;
        box-sizing: border-box;
        .fe_1 {
          margin-top: 20px;
        }
        .fe_2 {
          padding: 20px 30px;
          border: 1px solid #ccc;
          margin-top: 10px;
          .fe_a {
            margin-right: 20px;
            text-decoration: none;
            color: #333;
            font-size: 14px;
            line-height: 24px;
            &:hover {
              color: #d93732;
            }
          }
        }
      }
      .more {
        position: absolute;
        bottom: 50px;
        right: 100px;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
}
</style>