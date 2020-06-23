<template>
  <div class="banner">
    <top></top>
    <div class="pwwd">
      <div class="pwwd_title">
        <h1>修改密码</h1>
      </div>
      <div>
        <el-form
          :model="ppwdform"
          :rules="rules"
          ref="ppwdform"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="手机号" prop="telephone">
            <label slot="label">手&nbsp;&nbsp;机&nbsp;&nbsp;号</label>
            <el-input v-model="ppwdform.telephone" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="authCode">
            <label slot="label">验&nbsp;&nbsp;证&nbsp;&nbsp;码</label>
            <el-input v-model="ppwdform.authCode" placeholder="请输入验证码" class="yzm"></el-input>
            <el-button type="button" @click="submitYzm()">获取验证码</el-button>
          </el-form-item>
          <el-form-item label="新密码" prop="password">
            <label slot="label">新&nbsp;&nbsp;密&nbsp;&nbsp;码</label>
            <el-input v-model="ppwdform.password" placeholder="请输入新密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ppwdform')">立即修改</el-button>
            <router-link to="/login" class="denglu">不想修改，去登录？</router-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import top from "./header"
export default {
  components:{
    top
  },
  props: {
    userlist: {
      type: Array,
      requried: true
    }
  },
  data() {
    return {
      ppwdform: {
        password: "",
        telephone:'',
        authCode:''
      },
      rules: {
        telephone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 6, max: 12, message: "长度在6到12个字符", trigger: "blur" }
        ],
        authCode: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let datalist= new FormData();
          datalist.append('password',this.ppwdform.password);
          datalist.append('telephone',this.ppwdform.telephone);
          datalist.append('authCode',this.ppwdform.authCode);
          this.$axios.post('/apo/sso/updatePassword',datalist).then(res=>{
            console.log(res);
            alert('修改成功！');
            this.$router.push('/login');
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    submitYzm(){
      this.$axios.get('/apo/sso/getAuthCode',{
        params:{
          telephone:this.ppwdform.telephone
        }
      }).then(res=>{
        console.log(res);
        alert("发送成功！获取到的验证码为：" +res.data.data)
      })
    }
  }
};
</script>

<style lang="scss">
.banner {
  height: 700px;
  background-image: url("../assets/ban.jpg");
  background-size: 100% 100%;
  padding-bottom: 50px;
  position: relative;
}
.pwwd {
  width: 500px;
  position: absolute;
  top: 200px;
  right: 100px;
  box-sizing: border-box;
  padding: 20px 30px 0px 0px;
  background: rgba(10, 10, 10, .3);
  h1 {
    text-align: center;
    letter-spacing: 50px;
    margin-left: 80px;
    color: #fff;
  }
  .demo-ruleForm {
    margin-top: 20px;
    .yzm{
      width: 60%;
      margin-right: 30px;
    }
    label {
      color: #fff;
    }
    .el-button--primary{
      background: #d93732;
      color: #fff;
      border:none;
      width: 100%
    }
  }
  .denglu{
    display: inline-block;
    text-decoration: none;
    color: #fff;
  }
}
</style>