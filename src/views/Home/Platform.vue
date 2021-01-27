<template>
  <div class="Platform">
    <van-nav-bar
      :title="$t('Platform.title')"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="wrapper">
      <p>{{ $t('Platform.content.p1') }}</p>
      <p v-html="$t('Platform.content.p2')"></p>
      <p>{{ $t('Platform.content.p3') }}</p>
      <p>{{ $t('Platform.content.p4') }}</p>
      <p>{{ $t('Platform.content.p5') }}</p>
      <p v-html="$t('Platform.content.p6')"></p>
      <p v-html="$t('Platform.content.p7')"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Platform",
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
.Platform {
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
      line-height: 24px;
    }
  }
}
</style>