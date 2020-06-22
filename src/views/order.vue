<template>
  <div>
      <div class="order">
        <div class="phone">
            <div class="ph-left">
               <span>首页</span>
               <span>/</span>
               <span>我的订单</span>
            </div>
            <div class="ph-right">
               <span>服务热线：0755-86380505（8:00 - 24:00）</span>
               <div class="box">
                   QQ在线交谈
               </div>
            </div>
        </div>
        <div class="count">
            <div class="ct-left">
                <div class="icon">
                  <i></i>
                  <p>US0000615B1</p>
                </div>
                <div>
                   <router-link to="./eva"> <p style="color:#d93732;">我的订单</p></router-link> 
                   <router-link to="./eva"><p>评价晒单</p></router-link> 
                </div>
                 <div>
                   <router-link to="./people"><p>个人信息</p></router-link> 
                    <router-link to="./chpassword"><p>修改密码</p></router-link>
                    <router-link to="./adress"><p>我的地址簿</p></router-link>
                </div>
                 <div>
                    <router-link to="./vouchers" ><p>我的代金券</p></router-link>
                    <router-link to="./integral"><p>我的积分</p></router-link>
                </div>
                 <div>
                    <router-link to="./collection" ><p>我的收藏</p></router-link>
                    <router-link to="./questions" ><p>我的提问</p></router-link>
                </div>
            </div>
            <div class="ct-right">
              <div class="title">我的订单</div>
              <div class="content">
                  <p class="con-pt">还没有任何的订单呢</p>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
a {
   text-decoration: none;
}
*{
    margin:0;
    padding:0;
     list-style-type: none;
}
.order{
    background-color: #F5F5F5;
    padding:10px 50px;
    .phone{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin:20px 0px;
        .ph-left{
             font-size:12px;
             width:100px;
             display: flex;
             justify-content: space-between;   
             align-items: center;
        }
        .ph-right{
            font-size:12px;
            .box{
                border:1px solid #666666;
                display: inline-block;
                width:100px;
                text-align: center;
                border-radius:50px;
                line-height:19px;
            }
        }

    }
    .count{
        display:flex;
        justify-content: space-between;
        width: 1200px;
        margin:0 auto;
        height:600px;
        
        .ct-left{
           width:230px;
           background-color: white;
           display:flex;
           flex-direction: column;
           align-items: center;
           div{
               width:100px;
               font-size:14px;
               margin: 24px 0px 0px 36px;
               p{
                   line-height:30px;
                   color:#333333;
               }
               p:hover{
                 color:#d93732;  
               }
           }
            .icon{
                text-align: center;
                margin-left:0px;
                i{
                    display:inline-block;
                    width:52px;
                    height:52px;
                    background:url(../assets/logo.png) no-repeat;
                    background-position:-249px -117px;
                }
                i:hover{
                    background-position:-198px -176px;
                }
            }
        }
        .ct-right{
             width:950px;
             background-color: white;
             padding: 30px 30px;
             box-sizing: border-box;
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
    }
}
</style>