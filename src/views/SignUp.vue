<template>
  <div class="SignUp">
    <div class="login">
      <p class="login-img">
        <img src="../static/img/login.6154068.png" alt="" />
      </p>
      <br /><br /><br />
      <div class="loginbox" :model="form">
        <van-field
          v-model="form.mobile"
          label="+91"
          placeholder="Enter Mobile Number"
          :rules="[{ required: true, message: 'Mobile Number不能为空' }]"
        />
        <div class="otp">
          <img
            src="../static/img/SignUp/otp.png"
            style="width: 17px; height: 17px; display: inline-block;margin-right: 10px;"
            alt=""
          />
          <van-field
            type="text"
            v-model="form.otp"
            placeholder="Enter OTP"
            :rules="[{ required: true, message: 'OTP不能为空' }]"
          />
          <span class="f14" @click="sendOtp"> OTP </span>
        </div>

        <div class="user">
          <img
            src="../static/img/SignUp/user.png"
            style="width: 17px; height: 17px; display: inline-block;margin-right: 10px;"
            alt=""
          />
          <van-field
            type="text"
            v-model="form.username"
            placeholder="Please Enter Username"
            :rules="[{ required: true, message: 'username不能为空' }]"
          />
        </div>

        <div class="pwd">
          <img
            src="../static/img/SignUp/pwd.png"
            style="width: 17px; height: 17px; display: inline-block;margin-right: 10px;"
            alt=""
          />
          <van-field
            type="password"
            v-model="form.password"
            placeholder="Enter Your Password"
            :rules="[{ required: true, message: 'Password不能为空' }]"
          />
        </div>
          <div
            style="
              color: rgb(255, 51, 4) !important;
              font-size: 12px;
              width: 60%;
              text-align: left;
              line-height: 24px;
              margin-top: 8px;
            "
          >
            Only 6-20 letters, numbers and underscores can be entered
          </div>
        

        <div class="cpwd">
          <img
            src="../static/img/SignUp/cpwd.png"
            style="width: 17px; height: 17px; display: inline-block;margin-right: 10px;"
            alt=""
          />
          <van-field
            type="password"
            v-model="form.password"
            placeholder="Confirm rPassword"
            :rules="[{ required: true, message: 'rPassword不能为空' }]"
          />
        </div>

        <div class="inviteCode">
          <img
            src="../static/img/SignUp/inviteCode.png"
            style="width: 17px; height: 17px; display: inline-block;margin-right: 10px;"
            alt=""
          />
          <van-field
            type="text"
            v-model="form.invitationCode"
            placeholder="Please Fill In The Invitation Code"
            :rules="[{ required: true, message: 'Invitation Code不能为空' }]"
          />
        </div>
      </div>

      <div class="confirm" @click="Signup">Sign Up</div>
      <div class="bottom">
        <div class="regbox">
          <div></div>
          <div class="chui" @click="$router.push({ path: '/Login' })">
            Log In
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SignUp",
  data() {
    return {
      form: {
        mobile: "",
        otp: "",
        username: "",
        password: "",
        rpassword: "",
        invitationCode: "",
      },
    };
  },
  watch:{
    'form.rpassword':function(val) {
      console.log('val',val)
      if(val != password) {
        this.$toast('两次密码不一致，请重新输入')
      }
    }
  },

  methods: {
    // 注册事件
    Signup() {
      let params = {
        mode: this.form.mobile,
        pass: this.form.password,
        name: this.form.username,
        ver_code: this.form.otp,
        invite_code: this.form.invitationCode,
      }
      this.fetchpost("/register", params).then(res => {
        this.$toast(res.msg);
        this.$router.push("/Login");
      });
    },

    // 发送验证码
    sendOtp() {
      let params = {
        mod: this.form.mobile
      }
      this.fetchpost("/send_otp", params).then(res => {
        console.log('rse',res)
        if(res.status == 0) {
          this.$toast(res.info);
        }
      });
    }
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.SignUp {
  .van-cell {
    background: transparent;
  }
  .van-field {
    padding: 14px 0;
    // border-bottom: 1px solid #eee;
    border-color: transparent;
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
      .otp {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .f14 {
          display: inline-block;
          color: #fff;
          border: 1px solid #fff;
          width: 120px;
          height: 37px;
          line-height: 37px;
          text-align: center;
          border-radius: 5px;
          font-size: 14px;
        }
      }
    }

    .user,.otp,.pwd,.cpwd,.inviteCode {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eee;
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