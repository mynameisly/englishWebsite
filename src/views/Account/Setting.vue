<template>
  <div class="Setting">
    <!-- header -->
    <van-nav-bar title="Setting" left-arrow @click-left="onClickLeft" />

    <div class="commonbox personaldatamsg">
      <div class="flex jc-sb aic touxiangbox van-hairline--bottom">
        <div class="f14">Language</div>
        <div class="flex aic" @click="$router.push({path: '/Language'})">
          <i class="van-icon van-icon-arrow"></i>
        </div>
      </div>
      <div class="flex jc-sb aic touxiangbox">
        <div class="f14">Logout</div>
        <div class="flex aic" @click="logout">
          <i class="van-icon van-icon-arrow"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Dialog} from 'vant'
export default {
  name: "Setting",
  data() {
    return {};
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    logout() {
      Dialog.confirm({
        title: "Tip",
        message: "Exit Account？",
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    }
  },
};
</script>

<style lang="scss" scoped>
.Setting {
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