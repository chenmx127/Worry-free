<template>
  <div class="modle">
    <modle></modle>
    <div class="infor-right">
      <div class="infor-right-top">
        <span>我的提问</span>
      </div>
      <div class="infor-right-foot">
        <span>你还没有提问呢</span>
      </div>
    </div>
  </div>
</template>

<script>
  import modle from '../components/modle'
  export default {
    components:{
      modle: modle
    },
  }
</script>

<style lang="scss">
  .modle{
    position: relative;
    .infor-right {
      width: 71%;
      height: 93%;
      background: #fff;
      position: absolute;
      top: 60px;
      right:60px;
      display: flex;
      flex-direction:  column;
      .infor-right-top {
        width: 88%;
        height: 65px;
        border-bottom: 1px solid #eee;
        margin: 40px 56px 0px 56px;
        span{
          font-size: 30px;
          color:#666;
        }
      }
      .infor-right-foot {
        display: flex;
        justify-content: center;
        margin-top: 80px;
        span {
          font-size: 18px;
          color:#999;
        }
      }
    }
  }
</style>
