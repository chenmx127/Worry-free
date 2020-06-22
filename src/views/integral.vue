<template>
  <div class="modle">
    <modle></modle>
    <div class="infor-right">
      <div class="infor-right-top">
        <span>我的积分</span>
      </div>
      <div class="infor-right-foot">
        <p>
          <span>您目前的可用的消费积分为：</span>
          <b>20</b>
        </p>
        <table>
          <tbody>
            <tr>
              <td>总获取积分：20积分</td>
              <td>总消费积分：0 积分</td>
              <td>如何获得更多积分？</td>
            </tr>
          </tbody>
        </table>
        <div class="cost">
          <p class="mx">积分消费明细：</p>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期">
            </el-table-column>
            <el-table-column prop="name" label="姓名">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
        </div>
        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>
        <!-- <div class="cost">
          <p class="mx">积分消费明细：</p>
          <p class="time">
            <b class="dib">积分变动时间</b>
            <b class="ed">积分变动额度</b>
            <b class="yy">积分变动原因</b>
          </p>
          <div class="box">
            <table>
              <tbody>
                <tr>
                  <td width="33%">2020-06-21 09:33:52</td>
                  <td width="33%">20</td>
                  <td width="33%">注册赠送积分</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  import modle from '../components/modle'
  export default {
    components: {
      modle: modle
    },
    data(){
      return {
        tableData: [{
          date: '2020-06-2209:30:56',
          name: '20',
          address: '注册赠送积分'
        }]
      }
    }
  }
</script>

<style lang="scss">
  .modle {
    position: relative;

    .infor-right {
      width: 71%;
      height: 93%;
      background: #fff;
      position: absolute;
      top: 60px;
      right: 60px;
      display: flex;
      flex-direction: column;

      .infor-right-top {
        width: 88%;
        height: 65px;
        margin: 40px 56px 0px 56px;

        span {
          font-size: 30px;
          color: #666;
        }
      }

      .infor-right-foot {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
          width: 90%;
          padding: 20px 0;
          line-height: 1;
          background: #fbf8cc;
          text-align: center;

          span {
            font-size: 14px;
            margin-left: 40px;
            line-height: 2;
            float: left;
          }

          b {
            margin-left: 180px;
            color: #cdae7d;
            font-size: 32px;
            float: left;
          }
        }

        table {
          width: 80%;
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          color: #666;

          tbody {
            width: 100%;
            display: flex;
            justify-content: space-between;

            tr {
              width: 100%;
              display: flex;
              justify-content: space-between;

              td {
                font-size: 14px;
              }
            }
          }
        }
        .cost{
          width: 90%;
          display: flex;
          flex-direction: column;
          .mx {
            float: left;
            width: 15%;
            margin-top: 35px;
            background-color: #fff;
          }
          .el-table thead {
            color: #909399;
            width: 100%;
            display: flex;
            font-weight: 500;
            justify-content: space-between;
            .el-table tr {
                background-color: #FFF;
                width: 100%;
                display: flex;
            }
          }
          .el-table tbody tr td {
              font-size: 14px;
              width: 100%;
          }
          }
          .block {
            margin-top: 30px;
          }
      }
    }
  }
</style>
