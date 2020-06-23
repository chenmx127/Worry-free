<template>
    <div>
        <modle></modle>
        <div class="ct-right">
            <div class="title">我的订单</div>
            <div class="content">
                <p class="con-pt">还没有任何的订单呢</p>
            </div>
        </div>
    </div>
</template>

<script>
import modle from "../components/modle"
export default {
    components:{
        modle:modle
    }
}
</script>

<style lang="scss">      
.ct-right{
        width:950px;
        height: 600px;
        background-color: white;
        padding: 30px 30px;
        box-sizing: border-box;
        position: absolute;
        top: 162px;
        right: 60px;
    .title{
        width:95%;
        margin:30px auto;
        font-size:30px;
        border-bottom:1px solid #e6e6e6;
        padding-bottom:20px;
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