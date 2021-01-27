<template>
  <div class="Withdrawal">
    <van-nav-bar title="Withdrawal" left-arrow @click-left="onClickLeft" />
    <div class="commonbox pd10">
      <p class="f12 chui">
        <span class="orange f14">Tip:</span>
        Each account ID customer can be free withdraw in 5 time ,after more than
        5 times withdraw, Platform will be service charge of 5%.The Platform
        withdrawals are (T+1) mode. Withdrawals on the same day will arrive by
        the next day night before 23.59.
      </p>
    </div>

    <div class="commonbox rechargeinput">
      <p>Withdrawal Amount</p>
      <div class="flex aic f26 mt-20">
        <b>₹</b>
        <input
          placeholder="Enter the withdrawal amount"
          maxlength="9"
          type="number"
          :value="amountVal"
          oninput="if(this.value=='00'){this.value='0';}else{this.value=this.value.replace(/[^0-9]/g,'')};"
          class="commoninput"
        />
      </div>
      <div class="flex jc-sb">
        <p class="f12 mt-10 chui">
          Balance ：
          <span>₹0</span>
        </p>
        <p class="f12 mt-10 chui">
          Minimum Withdrawal：
          <span>₹255.00</span>
        </p>
      </div>
    </div>

    <div class="commonbox pd10 f16 flex jc-sb">
      <p>Select a Bank Card</p>
      <i class="van-icon van-icon-arrow"></i>
    </div>

    <div class="confirm" @click="Withdraw">Withdraw Now</div>
  </div>
</template>

<script>
import {Dialog} from 'vant';
export default {
  name: "Withdrawal",
  data() {
    return {
      isBackCard: false, //是否绑定了银行卡
      amountVal: ''
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.hasBackCard();
    },
    hasBackCard() {
      // 检测是否绑定了银行卡
      if(!this.isBackCard) {
        Dialog.confirm({
        title: "Tip",
        message: "You haven't tied your bank card!！",
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
      })
        .then(() => {
          // on confirm
          this.$router.push({path: '/Link'})
        })
        .catch(() => {
          // on cancel
          this.$router.go(-1)
        });
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    Withdraw() {
      // 发送请求
      // let params = {};
      // this.fetchpost("/api/Withdraw", params).then((res) => {
      //   if (res.code == 200) {
      //   }
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
.Withdrawal {
  height: 100vh;
  background: #f3f3f3;
  .flex {
    display: flex;
  }
  .jc-sb {
    justify-content: space-between;
  }
  .f16 {
    p {
      font-size: 16px;
    }
  }
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
      b {
        font-size: 30px;
      }
      input {
        width: 95%;
        font-size: 20px;
        border: none;
      }
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