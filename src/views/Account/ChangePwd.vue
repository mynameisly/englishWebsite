<template>
  <div class="ChangePwd">
    <!-- header -->
    <van-nav-bar
      title="ChangePwd Messages"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="commonbox personaldatamain">
      <div class="item" style="padding-top: 0;">
        <van-field
          v-model="form.mobile"
          type="tel"
          label="Mobile Number"
          readonly
          placeholder="Enter Mobile Number."
        />
      </div>
      <div class="item">
        <van-field
        type="password"
          v-model="form.oldPwd"
          label="Old Password"
          placeholder="Enter Old Password"
        />
      </div>
      <div class="item">
        <van-field
          v-model="form.withdrawalPwd"
          type="password"
          label="Enter Withdrawal Password"
          placeholder="Enter Withdrawal Password"
        />
      </div>
      <div class="item">
        <van-field
        type="password"
          v-model="form.newPwd"
          label="New Password"
          placeholder="Set New Password"
        />
      </div>
      <div class="item">
        <van-field
        type="password"
          v-model="form.confirmPwd"
          label="Confirm Password"
          placeholder="Confirm Password"
        />
      </div>
    </div>

    <div class="confirm" @click="changePwd">OK</div>
  </div>
</template>

<script>
export default {
  name: "ChangePwd",
  data() {
    return {
      form:{
        mobile: "+91234****5678",
        oldPwd: "",
        withdrawalPwd: "",
        newPwd: "",
        confirmPwd: ""
      }
    };
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    changePwd() {
      // 发送请求
      // let params = this.form;
      // this.fetchget("/api/changePwd", params).then((res) => {
      //   if (res.code == 200) {
          
      //   }
      // });
    }
  },
};
</script>

<style lang="scss" scoped>
.ChangePwd {
  .commonbox {
    margin: 10px;
    background-color: #fff;
    border-radius: 5px;
    padding: 15px 10px;
    .chui {
      font-size: 12px;
      color: #8799a3;
      .orange {
        font-size: 14px;
        color: #ff5f16;
      }
    }
  }

  .personaldatamain {
    .item {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
  .confirm {
    font-size: 16px;
    width: 90%;
    line-height: 1rem;
    border: none;
    color: #fff;
    text-align: center;
    margin: 20px auto;
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