<template>
  <div class="Records">
    <van-nav-bar :title="$t('ShopRecords.title')" left-arrow @click-left="onClickLeft" />
    <div class="wrapper">
      {{ $t('ShopRecords.content') }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Records",
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
.Records {
  height: 100vh;
  background: #fff;
}
</style>