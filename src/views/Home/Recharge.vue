<template>
  <div class="Recharge">
    <van-nav-bar title="Recharge" left-arrow @click-left="onClickLeft" />

    <div class="Available">
      <p>Available Balance</p>
      <p>
        ₹
        <span class="fw7">0</span>
      </p>
    </div>

    <div class="commonbox txcss f12 lh20">
      <span class="txcss1">Recharge Instructions:</span>
      Please confirm he recharging amount, and follow the procedure displayed
      for recharging. In this way, you can avoid payment delay
    </div>

    <div class="rechargeinput">
      <p>Recharge Amount</p>
      <div class="flex aic f26">
        <b>₹</b>
        <input
          maxlength="9"
          type="number"
          oninput="if(this.value=='00'){this.value='0';}else{this.value=this.value.replace(/[^0-9]/g,'')};"
          placeholder="Enter a Recharge Amount"
          class="commoninput"
        />
      </div>
      <p class="f12 mt-10 chui">Minimum：₹250.00</p>
      <ul class="recharge-amount">
        <li class="">₹5,000.00</li>
        <li class="">₹10,000.00</li>
        <li class="">₹50,000.00</li>
        <li class="">₹100,000.00</li>
        <li class="">₹500,000.00</li>
        <li class="">₹3,000,000.00</li>
      </ul>
    </div>

    <p class="change">Online Recharge Mode</p>
    <div class="commonbox rechargeway">
      <div class="line">Channel1</div>
      <van-radio-group v-model="radio">
        <van-cell style="display: flex">
          <template #title>
            <img src="../../static/img/radio.png" alt="" />
            <span class="text">JEEPay</span>
            <span class="value">Recharge Range250.00-500,000.00</span>
            <van-radio name="1"></van-radio>
          </template>
        </van-cell>
      </van-radio-group>
    </div>
    <p class="change">Offline Recharge Mode</p>

    <div class="btns">Next</div>
  </div>
</template>

<script>
export default {
  name: "Recharge",
  data() {
    return {
      active: 1,
      radio: "",
    };
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.Recharge {
  height: 100vh;
  background: #f3f3f3;
  .Available {
    padding: 10px 20px;
    background: #fff;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 16px;
      line-height: 1.8;
    }
    .fw7 {
      font-weight: 700;
    }
  }

  .commonbox {
    padding: 10px;
    margin: 10px;
    background-color: #fff;
    border-radius: 5px;
    font-size: 12px;
    line-height: 20px;
    .txcss1 {
      font-size: 14px;
      color: #ff5504;
    }
  }

  .rechargeinput {
    padding: 10px 10px 20px;
    margin: 10px;
    background-color: #fff;
    border-radius: 5px;
    div {
      margin-top: 20px;
      border-bottom: 1px solid #f5f5f5;
      font-size: 20px;
      display: flex;
      justify-content: center;
      b {
        font-size: 30px;
      }
      input {
        width: 95%;
        font-size: 20px;
        border: none;
      }
      .chui {
        color: #8799a3;
        margin-top: 10px;
        font-size: 20px;
      }
    }
    .recharge-amount {
      display: flex;
      flex-wrap: wrap;
      font-size: 14px;
      justify-content: space-evenly;
      padding-top: 24px;
      li {
        width: 101px;
        height: 39px;
        line-height: 39px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 3px;
        margin-bottom: 5px;
        color: #ff5200;
      }
    }
  }

  .change {
    margin-top: 20px;
    padding-left: 10px;
    font-size: 16px;
    font-weight: 700;
    color: #8799a3;
  }

  .rechargeway {
    border-radius: 5px;
    .line {
      margin: 0 auto;
      width: 65px;
      height: 30px;
      font-size: 16px;
      line-height: 30px;
      margin-bottom: 10px;
      border-bottom: 3px solid rgb(255, 82, 0);
    }
    img {
      width: 20px;
      height: 20px;
    }
    .text {
      padding: 0 4px;
    }
    .value {
      font-size: 12px;
      color: #969799;
      border: 1px solid #ebedf0;
      border-radius: 3px;
      padding: 0 4px;
      margin-right: 20px;
    }
  }

  .btns {
    margin: 20px auto;
    z-index: 2;
    text-align: center;
    font-size: 16px;
    width: 90%;
    line-height: 1rem;
    border: none;
    color: #fff;
    background-image: linear-gradient(180deg, #ff7a2d, #ff5201);
    border-radius: 0.13333rem;
  }
}
</style>