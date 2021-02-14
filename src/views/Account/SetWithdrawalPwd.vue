<template>
  <div class="SetWithdrawalPwd">
    <!-- header -->
    <van-nav-bar
      :title="$t('SetWithdrawalPwd.title')"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="commonbox personaldatamain" :model="form">
      <div class="item" style="padding-top: 0">
        <van-field
          v-model="form.mobile"
          type="tel"
          :label="$t('SetWithdrawalPwd.oldPwdLabel')"
          readonly
          placeholder="Enter Mobile Number."
        />
      </div>
      <div class="item">
        <van-field
        type="password"
          v-model="form.oldPwd"
          :label="$t('SetWithdrawalPwd.oldPwdLabel')"
          :placeholder="$t('SetWithdrawalPwd.oldPwdPlace')"
        />
      </div>
      <div class="item">
        <van-field
          type="password"
          v-model="form.newPwd"
          :label="$t('SetWithdrawalPwd.newPwdLabel')"
          :placeholder="$t('SetWithdrawalPwd.newPwdPlace')"
        />
      </div>
      <div class="item">
        <van-field
          type="password"
          v-model="form.confirmPwd"
          :label="$t('SetWithdrawalPwd.confirmPwdLabel')"
          :placeholder="$t('SetWithdrawalPwd.confirmPwdPlace')"
        />
      </div>
    </div>

    <div class="confirm" @click="setWithdrawalPwd">{{ $t('SetWithdrawalPwd.btn') }}</div>
  </div>
</template>

<script>
export default {
  name: "SetWithdrawalPwd",
  data() {
    return {
      form:{
        mobile: "+91234****5678",
        oldPwd: "",
        newPwd: "",
        confirmPwd: ""
      }
    };
  },
  mounted() {},
  watch: {
    'form.confirmPwd': function(val) {
      console.log('val',val)
      if(val != this.form.newPwd) {
        this.$toast('There is no difference between entering the password twice')
      }
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    setWithdrawalPwd() {
      // 发送请求
      let params = {
        old_pass: this.form.oldPwd,
        new_pass: this.form.newPwd
      };
      this.fetchpost(this.baseUrl+"/user/change_safe_pass", params).then((res) => {
        if (res.status == 1) {
          this.$toast(res.info)
        }else{
          this.$toast(res.info)
        }
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.SetWithdrawalPwd {
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