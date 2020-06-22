<template>
  <div >
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
        <div class="count" id="app">
            <div class="ct-left">
                <div class="icon">
                  <i></i>
                  <p>US0000615B1</p>
                </div>
                 <div>
                   <router-link to="./order"> <p class="p-order" style="color:#d93732;">{{order}}</p></router-link> 
                   <router-link to="./eva"><p class="p-eva">{{eva}}</p></router-link> 
                </div>
                 <div>
                   <router-link to="./people"><p>{{people}}</p></router-link> 
                    <router-link  to="./chpassword"><p>{{chpassword}}</p></router-link>
                    <router-link class="p-adress" to="./adress"><p>{{adress}}</p></router-link>
                </div>
                 <div>
                    <router-link class="p-vouchers" to="./vouchers" ><p>{{vouchers}}</p></router-link>
                    <router-link class="p-integral" to="./integral"><p>{{integral}}</p></router-link>
                </div>
                 <div>
                    <router-link class="p-collection" to="./collection" ><p>{{collection}}</p></router-link>
                    <router-link class="p-questions" to="./questions" ><p>{{questions}}</p></router-link>
                </div>
            </div>
            
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            order:"我的订单",
            eva:"评价晒单",
            people:"个人信息",
            chpassword:"修改密码",
            adress:"我的地址簿",
            vouchers:"我的代金券",
            integral:"我的积分",
            collection:"我的收藏",
            questions:"我的提问",
        }
    }
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
    }
}
</style>