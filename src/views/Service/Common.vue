<template>
  <div class="Common">
    <van-nav-bar :title="$t('Common.title')" left-arrow @click-left="onClickLeft" />
    <div class="wrapper">
      <p>{{ $t('Common.content.p1') }} </p>
      <p>{{ $t('Common.content.p2') }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Common",
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
.Common {
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
    p{
      font-size: 16px;
    }
  }
}
</style>