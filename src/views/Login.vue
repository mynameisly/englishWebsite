<template>
  <div class="Login">
    <div class="login">
      <p class="login-img">
        <img src="../static/img/login.6154068.png" alt="" />
      </p>
      <br /><br /><br />
      <div class="loginbox">
        <van-field
          v-model="form.mobile"
          label="+91"
          placeholder="Enter Mobile Number"
          :rules="[{ required: true, message: 'Mobile Number不能为空' }]"
        />
        <van-field
          left-icon="lock"
          type="password"
          v-model="form.password"
          placeholder="Enter Your Password"
          :rules="[{ required: true, message: 'Password不能为空' }]"
        />
      </div>

      <div class="confirm" @click="login">Log In</div>
      <div class="bottom">
        <div class="regbox">
          <div @click="$router.push({ path: '/SignUp' })">Sign Up</div>
          <div class="chui" @click="$router.push({ path: '/ForgottenPwd' })">
            Forgotten Password
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { setlocalStorage, removelocalStorageKey } from "@uit/comtool";
export default {
  name: "Login",
  data() {
    return {
      form: {
        mobile: "",
        password: "",
      },
    };
  },

  methods: {
    // 登录事件
    login() {
      console.log('1111',this.baseUrl)
      let params = {
        mob: this.form.mobile,
        pass: this.form.password,
      };
      params = this.formDataObject(params)
      this.fetchpost(this.baseUrl+"/login", params).then((res) => {
        console.log("res", res);
        if (res.status === 0) {
          this.$toast(res.info);
        } else {
          setlocalStorage("AUTH_PARAM", res.data.token);
          setlocalStorage("AUTH_INFO", res.data.name);
          this.$router.push("/index");
        }
      });
    },
  },
  mounted() {
    // 清除本地 token  userinfo 数据
    removelocalStorageKey("AUTH_PARAM", "AUTH_INFO");
  },
};
</script>

<style lang="scss" scoped>
.Login {
  .van-cell {
    background: transparent;
  }
  .van-field {
    border-bottom: 1px solid #eee;
  }

  .login {
    width: 100vw;
    height: 100vh;
    background: url("../static/img/bj.545f1af.png") no-repeat top #fa6d1c;
    background-size: cover;
    overflow: hidden;
    padding: 1rem 0.5rem 0;
    .login-img {
      height: 92px;
      margin-top: 90px;
      text-align: center;
      img {
        width: 92px;
        height: 100%;
        margin: 0 auto;
      }
    }
    .loginbox {
      width: 90%;
      margin: 0 auto;
      border-radius: 8px;
    }
    .confirm {
      font-size: 16px;
      width: 90%;
      line-height: 1rem;
      border: none;
      color: #ff5e07;
      text-align: center;
      margin: 20px auto;
      background: #fff;
      border-radius: 0.13333rem;
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
      .regbox {
        display: flex;
        justify-content: space-between;
        width: 100%;
        color: #fff;
        font-size: 15px;
        padding: 0 0.5rem;
        div {
          font-size: 15px;
        }
      }
    }
  }
}
</style>