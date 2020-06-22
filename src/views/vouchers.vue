<template>
  <div>
    <peo></peo>
    <div class="content-right">
      <div class="title">我的代金券</div>
      <div class="content">
        <p class="con-pt">当前没有可用代金券</p>
      </div>
    </div>
  </div>
</template>
<script>
import peo from "../components/peo";
export default {
  components: {
    peo: peo
  }
};
</script>
<style lang="scss">
.p-vouchers{
    color:#d93732;
}
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
  .content{
        .con-pt{
            padding-top:80px;
            text-align: center;
            color: #928484;
        }
    }
}
</style>