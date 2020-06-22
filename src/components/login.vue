<template>
  <div class="banner">
    <top :userlist="namelist"></top>
    <div class="login">
      <div class="login_title">
        <h1>登录</h1>
      </div>
      <div>
      <el-form
        :model="loginform"
        :rules="rules"
        ref="loginform"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginform.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <label slot="label">密&nbsp;&nbsp;&nbsp;码</label>
          <el-input v-model="loginform.password" show-password placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginform')">立即登录</el-button>
          <router-link to="/regist" class="zhuce">没有账号，去注册？</router-link>
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
      loginform: {
        username: "",
        password: ""
      },
      rules: {
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
          let datelist= new FormData();
          datelist.append('username',this.loginform.username);
          datelist.append('password',this.loginform.password);
          this.$axios.post('/apo/sso/login',datelist).then(res=>{
            console.log(res);
            if(res.data.code == 200){
              this.userToken = 'Bearer ' + res.data.data.token;
              this.$store.commit('changeLogin',this.userToken);
              this.$axios.get('/apo/sso/info').then(res=>{
                console.log(res);
                let users=res.data.data
                if(users){
                    this.$store.dispatch("setUser",users);
                    this.$message.success("登录成功");
                    this.$router.push("../views/test")
                  }else{
                    this.$store.dispatch("setUser",null);
                    this.$message.error("当前用户不存在");
                  }
                })
              // alert('登录成功！');
              // this.$router.push('/');
            }
            if(res.data.code == 404){
              alert('用户名或密码错误！')
            }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.banner{
  height: 700px;
  background-image: url('../assets/ban.jpg');
  background-size: 100% 100%;
  padding-bottom: 50px;
  position: relative;
}
.login {
  width: 500px;
  position: absolute;
  top: 200px;
  right: 100px;
  box-sizing: border-box;
  padding: 30px 50px 20px 0px;
  background: rgba(10, 10, 10, .3);
  h1 {
    text-align: center;
    letter-spacing: 100px;
    color: #fff;
    margin-left: 150px;
  }
  .demo-ruleForm {
    margin-top: 20px;
    label{
        color: #fff;
    }
    .el-button--primary{
      background: #d93732;
      color: #fff;
      border:none;
      width: 100%
    }
  }
  .zhuce{
    text-decoration: none;
    color: #fff;
  }
}
</style>