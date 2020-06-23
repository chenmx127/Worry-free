<template>
 <div>
   <modle></modle>
    <div class="content-right">
              <div class="title">评价晒单</div>
              <div class="content">
                  <p class="con-pt">评价审核通过后，可获得20积分，下次购物时抵用 ¥2。</p>
              </div>
            </div>
 </div>
</template>
<script>
import modle from "../components/modle"
export default {
    components:{
        modle: modle
    }
}
</script>
<style lang="scss">
    .content-right{
             width:950px;
             height:600px;
             background-color: white;
             padding: 30px 30px;
             box-sizing: border-box;
             position:absolute;
             top:162px;
             right:60px;
            .title{
               width:95%;
               margin:30px auto;
               font-size:30px;
               border-bottom:1px solid #e6e6e6;
               padding-bottom:20px;
            }
            .content{
                .con-pt{
                    margin-top:80px;
                    text-align: center;
                    color: #333333;
                    line-height:40px;
                }
            }
        }
</style>