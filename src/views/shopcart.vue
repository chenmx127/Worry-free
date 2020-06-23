<template>
  <div>
    <top :userlist="namelist"></top>
    <div class="sort_top">
      <div class="sort wrap">
        <el-breadcrumb separator="/">
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
    <div class="shopcart-warp">
      <div class="shopcart-white">
        <div class="add">
          <span>收货地址</span>
          <div class="ad-form">
            <!-- <img src="../../static/jiahao.png" alt=""> -->
            <!-- Form -->
            <el-button class="add-btn" type="text" @click="dialogFormVisible = true">
              <img src="../../static/jiahao.png" alt />
              新增收货地址
            </el-button>

            <el-dialog title="新增收货地址" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="收货人" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="收货地区" :label-width="formLabelWidth">
                  <el-select class="ad-sel" v-model="value" placeholder="请选择">
                    <el-option-group
                      v-for="group in options"
                      :key="group.label"
                      :label="group.label"
                    >
                      <el-option
                        v-for="item in group.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-option-group>
                  </el-select>
                  <el-select class="ad-sel" v-model="value" placeholder="请选择">
                    <el-option-group
                      v-for="group in options"
                      :key="group.label"
                      :label="group.label"
                    >
                      <el-option
                        v-for="item in group.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-option-group>
                  </el-select>
                  <el-select class="ad-sel" v-model="value" placeholder="请选择">
                    <el-option-group
                      v-for="group in options"
                      :key="group.label"
                      :label="group.label"
                    >
                      <el-option
                        v-for="item in group.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-option-group>
                  </el-select>
                </el-form-item>

                <el-form-item label="详细地址" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">新 增</el-button>
              </div>
            </el-dialog>
          </div>
        </div>
        <div class="packing">
          <span>包装与贺卡</span>
          <el-button type="text" class="packbtn" @click="dialogVisible = true">填写贺卡</el-button>

          <el-dialog
            title="填写贺卡信息"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose"
          >
            <div class="springbox">
              <span>致</span>
              <input type="text" class="input-1" value="收礼人姓名" />
              <br />
              <span>正 文</span>
              <textarea placeholder="您可以试试祝福模板"></textarea>
             <p>祝福语模版  情人节  新春 母亲节  六一儿童节  女友生日  男友生日  朋友生日</p>
             <span>署 名</span> <input type="text" class="input-1"  value="送收礼人姓名" />
             <h3>免费的彩纸包装</h3>
             <input type="radio" name="sex">直接包好<br>
             <input type="radio" name="sex" >提供材料，自己动手，适合于想先看看礼物的你。
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">保 存</el-button>
            </span>
          </el-dialog>

          <span>作为礼物送朋友？礼无忧提供免费的包装和贺卡。</span>
        </div>
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
      checkList: ["选中且禁用", "复选框 A"],
      namelist: [
        { title: "男装" },
        { title: "家居" },
        { title: "数码" },
        { title: "文体" },
        { title: "电器" },
        { title: "女装" }
      ],
      dialogVisible: false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      options: [
        {
          label: "热门城市",
          options: [
            {
              value: "Shanghai",
              label: "上海"
            },
            {
              value: "Beijing",
              label: "北京"
            }
          ]
        },
        {
          label: "城市名",
          options: [
            {
              value: "Chengdu",
              label: "成都"
            },
            {
              value: "Shenzhen",
              label: "深圳"
            },
            {
              value: "Guangzhou",
              label: "广州"
            },
            {
              value: "Dalian",
              label: "大连"
            }
          ]
        }
      ],
      value: ""
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
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
.shopcart-warp {
  padding-bottom: 20px;
  background-color: #f5f5f5;
  .shopcart-white {
    width: 1200px;
    // height: 200px;
    margin: 0px auto 30px;
    box-sizing: border-box;
    background-color: white;
    padding: 49px 65px;
    .add {
      width: 350px;
      height: 100px;
      display: flex;
      justify-content: space-between;
      .ad-form {
        .add-btn {
          width: 200px;
          padding: 40px 55px;
          border: 1px solid #e2e2e2;
          color: #333333;
        }
        .ad-sel {
          width: 100px;
        }
      }
    }
    .packing {
      padding: 30px 0px;
      // background-color: pink;
      .springbox {
        margin-left:20px;
        .input-1{
             width: 479px;
             height: 39px;
             margin-bottom: 22px;
        }
        span{
            display: inline-block;
            width: 36px;
        }
        textarea{
          vertical-align: top;
          width:479px;
          height:200px;
        }
        p{
          margin-left: 40px;
          line-height: 53px;
          color: #b28850;
          &:hover{
             color: red;
          }
        }
      }
      .packbtn {
        border: none;
        background: url("../../src/assets/logo.png") no-repeat;
        background-position: -267px -47px;
        margin-left: 74px;
        width: 140px;
        line-height: 10px;
        font-size: 16px;
        color: #b28850;
        &:hover {
          background-color: white;
          color: red;
        }
      }
    }
  }
}
</style>