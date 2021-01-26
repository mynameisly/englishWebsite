<template>
  <div class="Link">
    <van-nav-bar title="Link" left-arrow @click-left="onClickLeft" />
    <div class="commonbox pd10">
      <p class="f12 chui">
        <span class="orange f14">Tip:</span>
        Please enter the correct personal information
      </p>
    </div>

    <div class="commonbox personaldatamain">
      <div class="item" style="padding-top: 0">
        <van-field v-model="form.tel" type="tel" label="+91" placeholder="Enter Mobile Number."/>
      </div>
      <div class="item">
        <van-field v-model="form.accountName" label="Account Name" placeholder="Enter Account Name" />
      </div>
      <div class="item">
        <van-field
          v-model="form.accountNumber"
          type="digit"
          label="Account Number"
          placeholder="Enter Account Number"
        />
      </div>
      <div class="item">
        <van-field v-model="form.backName" label="Bank Name" placeholder="Enter Bank Name"/>
      </div>
      <div class="item">
        <van-field v-model="form.ifscCode" label="IFSC Code" placeholder="Enter IFSC Code"/>
      </div>
    </div>

    <div class="confirm" @click="linkBackAccount">OK</div>
  </div>
</template>

<script>
export default {
  name: "Link",
  data() {
    return {
      form: {
        tel: "",
        accountName: "",
        accountNumber: "",
        backName: "",
        ifscCode: "",
      },
    };
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    linkBackAccount() {
      // 发送请求
      // let params = this.form;
      // this.fetchget("/api/linkBackAccount", params).then((res) => {
      //   if (res.code == 200) {
          
      //   }
      // });
    }
  },
};
</script>

<style lang="scss" scoped>
.Link {
  height: 100vh;
  background: #f3f3f3;
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