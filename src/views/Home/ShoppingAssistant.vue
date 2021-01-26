<template>
  <div class="ShoppingAssistant">
    <van-nav-bar
      title="Shoppers Assistant"
      left-arrow
      right-text="Records"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="container">
      <div class="accountDetails">
        <div class="Available">
          <p>Available Balance</p>
          <p>{{balance}}</p>
        </div>
        <div class="Shopping">
          <p>Shopping Assistant</p>
          <p>{{shoping}}</p>
        </div>
        <div class="Available">
          <p>Total Income</p>
          <p>{{total}}</p>
        </div>
      </div>

      <div class="balanceInto public-bg">
        <p class="balanceInto-title">
          Transfer Account Balance To Shopping Assistant
        </p>
        <van-cell-group>
          <van-cell title="单元格" c>
            <template #title>
              <div class="wrapper">
                <span class="custom-title">₹</span>
                <input
                  type="text"
                  placeholder="Enter a Transfer-in Amount"
                  class="van-field__control"
                />
              </div>
            </template>
          </van-cell>
        </van-cell-group>
        <p class="standard">Income Standard</p>
        <ul class="profit"></ul>
        <div class="choice">
          <button>Transfer Out</button>
          <button>Transfer In</button>
        </div>
      </div>

      <div class="explain public-bg">
        <p class="explain-title">
          <span>Financial Management Description</span>
        </p>
        <p class="explain-center">
          Shopping helper is a robot managed helper that automatically manages
          the balance for the user. It can automatically finish the
          order-receiving task for the users so as to avoid poor network
          connection problem, tight schedule or forgetting to receive the
          orders. The user should solely select the management period, and
          transfer the account to shopping helper. It will automatically finish
          the deposit task of the order receiving for 60 times in the rooms
          corresponding to the balance, automatically accumulate and receive the
          commission earned, and receive corresponding interest bonus according
          to the deposit duration. The longer the deposit period is, the higher
          the interest ratio will be. Note: The processing will come into effect
          at 00:00 the next day if the user deposits in shopping helper. After
          selecting corresponding deposit period, the user cannot transfer the
          shopping helper balance out before the prescribed management period
          expires.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingAssistant",
  data() {
    return {
      balance: "",
      shoping: "",
      total: ""
    };
  },
  mounted() {
    this.getShoppingData()
  },
  methods: {
    getShoppingData() {
      // 发送请求
      // let params = this.form;
      // this.fetchget("/api/linkBackAccount", params).then((res) => {
      //   if (res.code == 200) {
          
      //   }
      // });
      this.balance = 0;
      this.shoping = 0;
      this.total = 0
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
  },
};
</script>

<style lang="scss" scoped>
.ShoppingAssistant {
  height: 100vh;
  background: #f3f3f3;
  .container {
    padding: 10px 16px 10px;
    .accountDetails {
      display: flex;
      justify-content: space-around;
      height: 65px;
      border-radius: 5px;
      align-items: center;
      background: #fff;
      div {
        width: 33%;
        text-align: center;
        p:first-child {
          font-size: 12px;
          color: #999;
          margin-bottom: 10px;
        }
        p:last-child {
          font-size: 15px;
          font-weight: 700;
          color: #333;
          text-align: left;
          margin-left: 10px;
        }
      }
    }
    .balanceInto {
      margin-top: 10px;
      padding: 16px;
      border-radius: 5px;
      background: #fff;
      .balanceInto-title {
        font-size: 13px;
        color: #666;
        font-weight: 700;
        margin-bottom: 10px;
      }
      .wrapper {
        position: relative;
        display: flex;
        box-sizing: border-box;
        width: 100%;
        padding: 10px 16px;
        overflow: hidden;
        color: #323233;
        font-size: 14px;
        line-height: 24px;
        background-color: #fff;
        span {
          width: 30px;
          color: #ff5604;
        }
      }
      .standard {
        color: #666;
        font-size: 13px;
        font-weight: 700;
        margin: 20px 0 11px;
      }
      .choice {
        display: flex;
        justify-content: space-between;
        margin-top: 35px;
        margin-bottom: 14px;
        button {
          width: 152px;
          height: 44px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background: 0 0;
          font-size: 16px;
        }
        button:last-child {
          color: #fff;
          background-image: linear-gradient(180deg, #ff7a2d, #ff5200);
          border: 1px solid transparent;
        }
      }
    }
    .explain {
      margin-top: 10px;
      padding: 15px 16px;
      border-radius: 5px;
      background: #fff;
      .explain-title {
        margin-bottom: 16px;
        span {
          display: inline-block;
          background: #fec12b;
          color: #fff;
          font-weight: 700;
          font-size: 12px;
          height: 20px;
          line-height: 20px;
          padding: 0 2px;
          text-align: center;
          border-radius: 5px;
        }
      }
      .explain-center {
        font-size: 12px;
        color: #999;
        line-height: 24px;
      }
    }
  }
}
</style>