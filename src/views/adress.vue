<template>
  <div>
    <peo></peo>
    <div class="content-right">
      <div class="title">我的地址薄</div>
      <div class="content">
        <p class="con-pt">已添加0个地址，共可添加20个。</p>
        <div>
          <template>
            <el-button type="text" @click="open">添加新地址</el-button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
                  </div>
              </div>
            </div>
 </div>
</template>
<script>
import peo from "../components/peo";
export default {
  components: {
    peo: peo
  },
  methods: {
    open() {
      this.$prompt("请输入地址信息", "新增收货地址","请输入手机号", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: "^.+(路|街|里).+号.+(室|户).*$",
        inputErrorMessage: "地址格式不正确"
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "已成功保存地址"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  }
};
</script>
<style lang="scss">
.content-right {
  width: 950px;
  height: 600px;
  background-color: white;
  padding: 30px 30px;
  box-sizing: border-box;
  position: absolute;
  top: 70px;
  left: 340px;
  bottom: 0;
  .title {
    width: 95%;
    margin: 30px auto;
    font-size: 30px;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 20px;
  }
  .content {
    .con-pt {
      margin-top: 40px;
      color: #333333;
      line-height: 40px;
      font-size: 12px;
    }
  }
}
</style>