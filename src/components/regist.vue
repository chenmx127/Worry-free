<template>
  <div class="banner">
    <top :userlist="namelist"></top>
    <div class="regist">
      <div class="regist_title">
        <h1>注册</h1>
      </div>
      <div>
        <el-form
          :model="registerform"
          :rules="rules"
          ref="registerform"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="username">
            <label slot="label">用&nbsp;&nbsp;户&nbsp;&nbsp;名</label>
            <el-input v-model="registerform.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <label slot="label">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</label>
            <el-input v-model="registerform.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="telephone">
            <label slot="label">手&nbsp;&nbsp;机&nbsp;&nbsp;号</label>
            <el-input v-model="registerform.telephone" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="authCode">
            <label slot="label">验&nbsp;&nbsp;证&nbsp;&nbsp;码</label>
            <el-input v-model="registerform.authCode" placeholder="请输入验证码" class="yzm"></el-input>
            <el-button type="button" @click="submitYzm()">获取验证码</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('registerform')">立即注册</el-button>
            <router-link to="/login" class="denglu">有账号，去登录？</router-link>
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
      namelist:[
        {title:'男装'},
        {title:'家居'},
        {title:'数码'},
        {title:'文体'},
        {title:'电器'},
        {title:'女装'}
        ],
      registerform: {
        username: "",
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
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 12个字符", trigger: "blur" }
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
          datalist.append('username',this.registerform.username);
          datalist.append('password',this.registerform.password);
          datalist.append('telephone',this.registerform.telephone);
          datalist.append('authCode',this.registerform.authCode);
          this.$axios.post('/apo/sso/register',datalist).then(res=>{
            console.log(res);
            alert('注册成功！');
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
          telephone:this.registerform.telephone
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
.regist {
  width: 500px;
  position: absolute;
  top: 150px;
  right: 100px;
  box-sizing: border-box;
  padding: 20px 30px 0px 0px;
  background: rgba(10, 10, 10, .3);
  h1 {
    text-align: center;
    letter-spacing: 100px;
    padding-left: 150px;
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