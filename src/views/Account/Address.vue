<template>
  <div class="Address">
    <van-nav-bar
      title="Address Management"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <img
          style="width: 17px; height: 17px"
          src="../../static/img/Account/add.png"
          alt=""
        />
      </template>
    </van-nav-bar>
    <div class="adsContsss">
      <div class="noAds">You don't have an address yet! Go add one!!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Address",
  data() {
    return {};
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push({path: '/AddAddress'})
    }
  },
};
</script>

<style lang="scss" scoped>
.Address {
  .adsContsss {
    margin-top: 55px;
    .noAds {
      font-size: 14px;
      color: #999;
      text-align: center;
      margin-top: 100px;
    }
  }
}
</style>