<template>
  <div>
    <top :userlist="namelist"></top>
    <div class="sort_top">
        <div class="sort wrap">
            <el-breadcrumb separator="/" >
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>
                <a href="/">礼物分类</a>
                </el-breadcrumb-item>
                <el-breadcrumb-item>礼物分类</el-breadcrumb-item>
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
                    <a href="#">全部</a>
                    <a href="#">全部</a>
                    <a href="#">全部</a>
                    <a href="#">全部</a>
                    <a href="#">全部</a>
                    <a href="#">全部</a>
                    <a href="#">全部</a>
                    <a href="#">全部</a>
                    <a href="#">全部</a>
                    <a href="#">全部</a>
                    <a href="#">全部</a>
                </dd>
            </dl>
            <el-divider></el-divider>
            <dl class="sort_dl">
                <dt class="sort_dt">价格:</dt>
                <dd class="sort_dd">
                    <a href="#">全部</a>
                    <a href="#">全部</a>
                    <a href="#">全部</a>
                    <a href="#">全部</a>
                    <a href="#">全部</a>
                </dd>
            </dl>
        </div>
    </div>
    <div class="sort_con">
        <div class="wrap aa">
            <div class="sort_con_top">
                <div class="sorts">
                    <a href="#">畅销</a><span class="dib">|</span>
                    <a href="#">最新</a><span class="dib">|</span>
                    <a href="#">价格从低到高</a><span class="dib">|</span>
                    <a href="#">价格从高到低</a>
                </div>
                <div class="filt">
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="仅显示特价商品"></el-checkbox>
                        <el-checkbox label="仅显示可定制商品"></el-checkbox>
                    </el-checkbox-group>
                </div>
            </div>
            <div class="sort_con_middle"></div>
            <div class="sort_con_fen"></div>
            <div class="sort_con_bottom"></div>
        </div>
    </div>
    <bottom></bottom>
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
        checkList: ['选中且禁用','复选框 A'],
      namelist: [
        { title: "男装" },
        { title: "家居" },
        { title: "数码" },
        { title: "文体" },
        { title: "电器" },
        { title: "女装" }
      ]
    };
  }
};
</script>

<style lang="scss">
.sort_top{
    background: #f5f5f5;
    padding: 20px;
    .sort{
        position: relative;
        .el-breadcrumb{
            font-size: 12px;
            line-height: 22px;
            .el-breadcrumb__inner a {
                font-weight: normal;
                color: #333;
                &:hover{
                    color: #d93732;
                }
            }
            .el-breadcrumb__item:last-child .el-breadcrumb__inner{
                color: #333;
            }
            .el-breadcrumb__inner.is-link{
                font-weight: normal;
                &:hover{
                    color: #d93732;
                }
            }
        }
        .sort-fw{
            position: absolute;
            top:0px;
            right:0px;
            .fw{
                font-size: 12px;
                color: #666;
            }
            .fw-1{
                margin-left: 10px;
                font-size: 12px;
                color: #666;
                padding: 1px 10px;
                border-radius: 22px;
                border:2px solid #979795;
                cursor: pointer;
                &:hover{
                    color: #d93732;
                    border:2px solid #d93732;
                }
            }
        }
    }
}
.sort_one{
    width: 100%;
    background: #fff;
    .el-divider--horizontal{
        margin:0;
    }
    .sort_dl{
        font-size: 14px;
        overflow: hidden;
        padding: 20px 0px;
        .sort_dt{
            float: left;
            width: 85px;
            padding: 20px 0;
            line-height: 28px;
        }
        .sort_dd{
            float: left;
            height: 28px;
            line-height: 28px;
            max-width: 1020px;
            padding: 20px 0;
            a{
                float: left;
                color: #333;
                margin-right: 50px;
                text-decoration: none;
                &:hover{
                    color: #d93732;
                }
            }
        }
    }
}
.sort_con{
    background: #f5f5f5;
    width: 100%;
    height: 800px;
    padding: 30px 0 50px 0;
    .aa{
        height: 100%;
        background: #ccc;
        .sort_con_top{
            padding: 20px 0;
            font-size: 14px;
            color:#d4d4c7;
            overflow: hidden;
            .sorts{
                float: left;
                a{
                    text-decoration: none;
                    padding: 0px 14px;
                    color:#333;
                    &:hover{
                        color:#d93732;
                    }
                }
            }
            .filt{
                float: right;
            }
        }
    }
}
</style>