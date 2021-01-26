<template>
  <div class="AddAddress">
    <van-nav-bar title="AddAddress" left-arrow @click-left="onClickLeft" />

    <div class="commonbox personaldatamain">
      <div class="item" style="padding-top: 0">
        <van-field v-model="form.tel" type="tel" label="+91" placeholder="Mobile Number"/>
      </div>
      <div class="item">
        <van-field v-model="form.name" label="Name" placeholder="Name" />
      </div>
      <div class="item">
        <van-field v-model="form.address" label="Address" placeholder="Address"/>
      </div>
    </div>

    <div class="confirm" @click="addAddress">Save</div>
  </div>
</template>

<script>
export default {
  name: "AddAddress",
  data() {
    return {
      form: {
        tel: "",
        name: "",
        address: "",
      },
    };
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    addAddress() {
      // 发送请求
      // let params = this.form;
      // this.fetchget("/api/addAddress", params).then((res) => {
      //   if (res.code == 200) {
          
      //   }
      // });
    }
  },
};
</script>

<style lang="scss" scoped>
.AddAddress {
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