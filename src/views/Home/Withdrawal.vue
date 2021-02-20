<template>
  <div class="Withdrawal">
    <van-nav-bar :title="$t('Withdrawal.title')" left-arrow @click-left="onClickLeft" />
     <div class="commonbox pd10">
      <p class="f12 chui">
        <span class="orange f14">{{ $t('Withdrawal.tip') }}</span>
        {{ $t('Withdrawal.tipVal') }}
      </p>
    </div>

    <div class="commonbox rechargeinput">
      <p>{{ $t('Withdrawal.amountTile') }}</p>
      <div class="flex aic f26 mt-20">
        <b>₹</b>
        <input
          :placeholder="$t('Withdrawal.amountPlace')"
          maxlength="9"
          type="number"
          :value="amountVal"
          oninput="if(this.value=='00'){this.value='0';}else{this.value=this.value.replace(/[^0-9]/g,'')};"
          class="commoninput"
        />
      </div>
      <div class="flex jc-sb">
        <p class="f12 mt-10 chui">
          {{ $t('Withdrawal.balance') }}
          <span>₹0</span>
        </p>
        <p class="f12 mt-10 chui">
          {{ $t('Withdrawal.min') }}
          <span>₹255.00</span>
        </p>
      </div>
    </div>

    <div class="commonbox pd10 f16 flex jc-sb" @click="$router.push({path: '/BankCardList'})">
      <p>{{ $t('Withdrawal.cardTitle') }}</p>
      <i class="van-icon van-icon-arrow"></i>
    </div>

    <div class="confirm" @click="Withdraw">{{ $t('Withdrawal.btn') }}</div>
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
        title: this.$t('Withdrawal.dialogTip'),
        message: this.$t('Withdrawal.dialogContent'),
        confirmButtonText: this.$t('Withdrawal.dialogConfirmBtn'),
        cancelButtonText: this.$t('Withdrawal.dialogCancelBtn'),
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
      let params = {
        amount: amountVal,
        bank_id: '', //当前页面有个子组件  还没有写(参考网站上打不开子组件)  bank_id从子组件传过来
      };
      this.fetchpost(this.baseUrl+"/payout/create", params).then((res) => {
        if (res.status == 1) {
          this.$toast(res.info)
        }else{
          this.$toast(res.info)
        }
      });
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