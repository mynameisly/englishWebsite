<template>
  <div class="ForgottenPwd">
    <van-nav-bar
      title="Forgotten Password"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="loginbox">
      <van-field
        v-model="form.mobile"
        label="+91"
        placeholder="Enter Mobile Number"
        :rules="[{ required: true, message: 'Mobile Number不能为空' }]"
      />
      <div class="otp">
        <div style="display: flex; flex-wrap: wrap">
          <van-field
            style="width:66%"
            type="text"
            v-model="form.otp"
            placeholder="Enter OTP"
            :rules="[{ required: true, message: 'OTP不能为空' }]"
          />
          <div
            style="
              color: rgb(255, 51, 4) !important;
              font-size: 12px;
              width: 68%;
              text-align: left;
              line-height: 24px;
              margin-top: 8px;
              padding-left: 15px;
            "
          >
            Only 6-20 letters, numbers and underscores can be entered
          </div>
          <span class="f14">OTP</span>
        </div>
      </div>
      <van-field
        type="password"
        v-model="form.newPassword"
        placeholder="Set New Password"
        :rules="[{ required: true, message: 'Password不能为空' }]"
      />
      <div
        style="
          color: rgb(255, 51, 4) !important;
          font-size: 12px;
          width: 60%;
          text-align: left;
          line-height: 24px;
          margin-top: 8px;
          padding-left: 15px;
        "
      >
        Only 6-20 letters, numbers and underscores can be entered
      </div>
      <van-field
        type="password"
        v-model="form.rPassword"
        placeholder="Confirm Password"
        :rules="[{ required: true, message: 'Password不能为空' }]"
      />

      <div class="confirm" @click="forgottenPwd">OK</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ForgottenPwd",
  data() {
    return {
      form: {
        mobile: "",
        otp: "",
        password: "",
        rPassword: "",
      },
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 忘记密码事件
    forgottenPwd() {
      // 表单转化
      // let formData = this.formDataObject(this.form);
      // this.fetchpost("/api/forgottenPwd", formData).then(res => {
      //     this.$toast(res.msg);

      // });
      this.$router.push("/index/Home");
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.ForgottenPwd {
  background: #fff;
  height: 100vh;
  .van-cell{
    padding-left: 15px;
  }
  .loginbox {
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
    border-radius: 8px;
    .otp {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .f14 {
        display: inline-block;
        border: 0.02667rem solid #ff7426;
        width: 2.8rem;
        height: 0.98667rem;
        line-height: 0.98667rem;
        text-align: center;
        border-radius: 0.13333rem;
        margin-top: -20px;
        color: #ff7426;
        position: relative;
      }
    }
  }
  .confirm {
    width: 100%;
    margin: 20px auto;
    font-size: 16px;
    line-height: 1rem;
    border: none;
    color: #fff;
    text-align: center;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#ff7a2d),
      to(#ff5201)
    );
    background-image: linear-gradient(180deg, #ff7a2d, #ff5201);
    border-radius: 0.13333rem;
  }
}
</style>