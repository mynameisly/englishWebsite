<template>
  <div class="Safety">
    <!-- header -->
    <van-nav-bar :title="$t('Safety.title')" left-arrow @click-left="onClickLeft" />

    <div class="commonbox personaldatamsg">
      <div class="flex jc-sb aic touxiangbox van-hairline--bottom">
        <div class="f14">{{$t('Safety.changeL')}}</div>
        <div class="flex aic" @click="$router.push({ path: '/ChangePwd' })">
          <i class="van-icon van-icon-arrow"></i>
        </div>
      </div>
      <div class="flex jc-sb aic touxiangbox">
        <div class="f14">{{$t('Safety.setPwd')}}</div>
        <div
          class="flex aic"
          @click="$router.push({ path: '/SetWithdrawalPwd' })"
        >
          <i class="van-icon van-icon-arrow"></i>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "Safety",
  data() {
    return {};
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
.Safety {
  .aic {
    align-items: center;
  }
  .jc-sb {
    justify-content: space-between;
  }
  .flex {
    display: flex;
  }
  .f14 {
    font-size: 15px;
  }
  .personaldatamsg {
    background: #fff;
    padding: 0 10px;
    .touxiangbox {
      height: 55px;
    }
  }
  .commonbox {
    margin: 10px;
    background-color: #fff;
    border-radius: 5px;
  }
}
</style>