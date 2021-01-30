<template>
  <div class="Rules">
    <van-nav-bar :title="$t('Rules.title')" left-arrow @click-left="onClickLeft" />
    <div class="wrapper">
      <p>{{ $t('Rules.content.p1') }}</p>
      <p>{{ $t('Rules.content.p2') }}</p>
      <p>{{ $t('Rules.content.p3') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rules",
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
.Rules {
  .wrapper {
    border-top: 1px solid #f5f5f5;
    padding: 16px;
    position: absolute;
    top: 45px;
    width: 100%;
    height: calc(100% - 45px);
    background-color: #fff;
    font-size: 14px;
    color: #333;
    line-height: 20px;
    p {
      text-indent: 20px;
      font-size: 16px;
      line-height: 22px;
    }
  }
}
</style>