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
          <el-form-item label="昵称" prop="nickName">
            <label slot="label">昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称</label>
            <el-input v-model="registerform.nickName" placeholder="请输入昵称"></el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="username">
            <label slot="label">用&nbsp;&nbsp;户&nbsp;&nbsp;名</label>
            <el-input v-model="registerform.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <label slot="label">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</label>
            <el-input v-model="registerform.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="头像" prop="icon">
            <label slot="label">头&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;像</label>
            <el-input v-model="registerform.icon" placeholder="请输入头像的网址"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <label slot="label">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱</label>
            <el-input v-model="registerform.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="个人说明" prop="note">
            <el-input type="textarea" v-model="registerform.note" placeholder="请输入个人介绍"></el-input>
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
        nickName: "",
        icon: "",
        username: "",
        password: "",
        email: "",
        note: ""
      },
      rules: {
        nickName: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5个字符", trigger: "blur" }
        ],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 12个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15个字符", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          { min: 3, max: 18, message: "长度在 3 到 18个字符", trigger: "blur" }
        ],
        desc: [{ required: true, message: "请填写个人说明", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post("/api/admin/register", this.registerform)
            .then(res => {
              console.log(res);
              if (res.data.code == 200) {
                alert("恭喜你，注册成功！");
                this.$router.push("/login");
              }
            });
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