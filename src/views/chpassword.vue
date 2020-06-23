<template>
  <div>
    <modle></modle>
    <div class="content-right">
      <div class="title">修改密码</div>
      <div class="content">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="原密码" prop="age">
           <el-input v-model.number="ruleForm.age"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="再次输入" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="buttom-v" type="primary" @click="submitForm('ruleForm')">确认提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import modle from "../components/modle";
export default {
  components: {
    modle: modle
  },
  data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('旧密码不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入旧密码'));
          } else {
            if (value < 8) {
              callback(new Error('密码必须满足8位数'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
         age: [
            { validator: checkAge, trigger: 'blur' }
          ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="scss">
.content-right {
  width: 950px;
  height: 600px;
  background-color: white;
  padding: 30px 30px;
  box-sizing: border-box;
  position: absolute;
  top: 162px;
  right:60px;
  .title {
    width: 95%;
    margin: 30px auto;
    font-size: 30px;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 20px;
  }
  .content {
       
   
      .demo-ruleForm{
          width:500px;
          .buttom-v{
              background-color: #D93732;
              border:none;
          }
      }
  }
}
</style>