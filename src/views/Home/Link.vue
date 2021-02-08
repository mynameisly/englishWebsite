<template>
  <div class="Link">
    <van-nav-bar :title="$t('Link.title')" left-arrow @click-left="onClickLeft" />
    <div class="commonbox pd10">
      <p class="f12 chui">
        <span class="orange f14">{{ $t('Link.tip') }}</span>
        {{ $t('Link.tipVal') }}
      </p>
    </div>

    <div class="commonbox personaldatamain" :model="form">
      <div class="item" style="padding-top: 0">
        <van-field v-model="form.tel" type="tel" label="+91" :placeholder="$t('Link.mobilePlace')"/>
      </div>
      <div class="item">
        <van-field v-model="form.accountName" :label="$t('Link.accountNameLabel')" :placeholder="$t('Link.accountNamePlace')" />
      </div>
      <div class="item">
        <van-field
          v-model="form.accountNumber"
          type="digit"
          :label="$t('Link.accountNumberLabel')"
          :placeholder="$t('Link.accountNumberPlace')"
        />
      </div>
      <div class="item">
        <van-field v-model="form.backName" :label="$t('Link.bankNameLabel')" :placeholder="$t('Link.bankNamePlace')"/>
      </div>
      <div class="item">
        <van-field v-model="form.ifscCode" label="IFSC Code" :placeholder="$t('Link.ifscPlace')"/>
      </div>
    </div>

    <div class="confirm" @click="linkBackAccount">{{ $t('Link.btn') }}</div>
  </div>
</template>

<script>
import { getlocalStorage } from "@uit/comtool";
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
      account_holder: '',
      token: ''
    };
  },
  mounted() {
    this.account_holder = getlocalStorage('AUTH_INFO'); //从本地缓存获取用户名
    this.token = getlocalStorage('AUTH_PARAM'); //从本地缓存获取token
    this.lang = this.i18n.locale;
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    linkBackAccount() {
      // 发送请求
      let params = {
        bank_name: this.form.backName,
        bank_addr: this.form.accountName,
        ifsc: this.form.ifscCode,
        account_holder: this.account_holder,
        bank_account: this.form.accountNumber
      }
      params = this.formDataObject(params);
      this.axios.post(
        '/bank/create',
        params,
        {
          headers: {
            'token': this.token,
            'lang': this.lang
          }
        }
        ).then((res) => {
          console.log('res',res)
        if (res.data.status == 1) {
          this.$toast(res.data.info)
        }else{
          this.$toast(res.data.info)//TODO
        }
      });
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