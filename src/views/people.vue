<template>
  <div class="modle">
    <modle></modle>
      <div class="infor-right">
        <div class="infor-right-top">
          <span>个人信息</span>
        </div>
        <div class="infor-right-foot">
          <div class="in-top">
            <div class="in-top-left">
              <span>您的会员等级</span>
              <i></i>
              <em>普通会员</em>
              <a href="">查看会员介绍</a>
            </div>
            <div class="in-top-right">
              上一次登录时间&nbsp;&nbsp;&nbsp;&nbsp;2020-06-21 09:34:01
            </div>
          </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="手机号" prop="telephone">
                <el-input v-model="ruleForm.telephone"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="password">
                <el-input v-model="ruleForm.password"></el-input>
              </el-form-item>
              <el-form-item label="昵称" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
              </el-form-item>
              <el-form-item class="btn">
                <el-button type="primary" @click="submitForm('ruleForm')">确认提交</el-button>
              </el-form-item>
            </el-form>
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
    data() {
        return {
          ruleForm: {
            telephone: '',
            password: '',
            username: ''
          },
          rules: {
            telephone: [
              { required: true, message: '请输入手机号', trigger: 'blur' },
              { min: 8, max: 11, message: '长度在 11 个字符', trigger: 'blur' }
            ],
            password: [
              { required: true, message: '请输入邮箱', trigger: 'blur' },
              { min: 10, max: 20, message: '长度在 10 到 20 个字符', trigger: 'blur' }
            ],
            username: [
              { required: true, message: '请输入昵称', trigger: 'blur' },
              { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
            ],
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>
<style lang="scss">
  .modle{
      position: relative;
        .infor-right {
          width: 950px;
          height: 600px;
          background: #fff;
          position: absolute;
          top: 162px;
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
            width: 88%;
            height: 110px;
            border-bottom: 1px solid #eee;
            margin: 0px 56px;
            font-size: 14px;
            .in-top {
              width: 100%;
              height: 110px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .in-top-left {
                width: 40%;
                height: 100%;
                line-height: 90px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                i {
                  width: 31px;
                  height: 31px;
                  margin-left: 30px;
                  display: inline-block;
                  background:url('../assets/logo.png') no-repeat -128px -171px;
                }
                em {
                  font-style: normal;
                }
                a {
                  color:#333;
                  margin-left: 35px;
                }
                a:hover {
                  color:#d93732;
                }
              }
            }
            .demo-ruleForm {
              width: 60%;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              margin-top: 50px;
              .el-form-item {
                margin-bottom: 30px;
              }
              .btn {
                width: 850px;
                border-top: 1px solid #eee;
                .el-button {
                  float: right;
                  width:  230px;
                  margin-top: 30px;
                  background-color: #d93732;
                  border-color: #d93732;
                }
              }
            }
          }
        }
  }
</style>
