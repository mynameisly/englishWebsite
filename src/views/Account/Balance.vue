<template>
  <div class="Balance">
    <van-nav-bar :title="$t('Balance.title')" left-arrow @click-left="onClickLeft" />
    <div class="balancemain pt-45">
      <div class="balancemsg">
        <div class="pb-20 mt-10 fff">
          <span>{{$t('Balance.balance')}}</span>
          <p class="mt-10 fw7">{{balance}}</p>
        </div>
        <div class="flex ctbut">
          <div class="fcc but1" @click="recharge">{{$t('Balance.recharge')}}</div>
          <div class="fcc but2" @click="withdrawal">{{$t('Balance.withdrawal')}}</div>
        </div>
      </div>
      <div class="commonbox rechargebut fcc"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Balance",
  data() {
    return {
      balance: ""
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getBalanceData();
    },
    getBalanceData() {
      this.balance = '₹0'
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    recharge() {
      this.$router.push({path: '/Recharge'})
    },
    withdrawal() {
      this.$router.push({path: '/Withdrawal'})
    }
  },
};
</script>

<style lang="scss" scoped>
.Balance {
  .pb-20 {
    padding-bottom: 10px;
  }
  .mt-10 {
    margin-top: 10px;
  }
  .but1 {
    color: #ff5200 !important;
  }
  .balancemain {
    .balancemsg {
      padding: 10px;
      height: 140px;
      background: url("../../static/img/Account/img_account_bg.49d5016.png")
        no-repeat;
      background-size: 100%;
      margin: 10px;
      color: #000;
      border-radius: 8px;
      text-align: center;
      span {
        font-size: 17px;
      }
      p {
        font-size: 24px;
      }
      .ctbut {
        display: flex;
        justify-content: space-evenly;
        div {
          width: 2.5rem;
          text-align: center;
          padding: 5px 10px;
          background-color: #fff;
          border-radius: 20px;
          font-weight: 600;
          font-size: 14px;
        }
        .but2 {
          color: #fff;
          background: 0 0;
          border: 1px solid #fff;
        }
      }
    }
  }
}
</style>